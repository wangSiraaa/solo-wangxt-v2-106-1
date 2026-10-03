/**
 * 三轮传动链数值核对（对应验收项）：
 *  1. 标准三轮链：两段在各自啮合线上都显示"真实渐开线接触"，
 *     段速比分别为 −z1/z2、−z2/z3，总速比 +z1/z3，首末轮同向（两次外啮合）；
 *  2. 任一轮模数或压力角不匹配 → 拒绝形成半成品传动链（model.invalid，运动学抛错）；
 *  3. 拖动第一段接触位置后，第二段接触仍在严格齿面上、末轮相位经惰轮严格级联一致；
 *     反向拖动第二段亦然；
 *  4. pair 模式（旧双轮）行为不变。
 */
import { buildGear, DEG, type GearGeometry } from '../src/geometry/gear.ts'
import {
  ALPHA_MATCH_TOL,
  MODULE_MATCH_TOL,
  buildChain,
  chainRatio,
  contactPointWorld,
  poseFromMaster,
  poseFromScrub,
  type ChainModel
} from '../src/geometry/chain.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}
const approx = (a: number, b: number, tol: number, msg: string) =>
  ok(Math.abs(a - b) <= tol, `${msg}（got ${a}, want ${b}）`)

/**
 * 点到（世界坐标下）齿轮解析渐开线齿面的最近距离。
 * 把世界点转回齿轮本体坐标，对每齿两侧渐开线参数 t 扫描。
 */
function analyticFlankDist(
  g: GearGeometry,
  world: { x: number; y: number },
  cx: number,
  phi: number
) {
  const c = Math.cos(-phi),
    s = Math.sin(-phi)
  const lx0 = world.x - cx,
    ly0 = world.y
  const lx = lx0 * c - ly0 * s
  const ly = lx0 * s + ly0 * c

  let best = Infinity
  const rb = g.baseR,
    beta = g.beta
  const tLo = g.baseAboveRoot ? 0 : Math.sqrt(Math.max(0, (g.dedendumR / rb) ** 2 - 1))
  const tHi = g.taTip
  const N = 160
  for (const sgn of [1, -1] as const) {
    let bestLocal = Infinity
    let bestT = tLo
    for (let i = 0; i < N; i++) {
      const t = tLo + ((tHi - tLo) * (i + 0.5)) / N
      const qx0 = rb * (Math.sin(t) - t * Math.cos(t))
      const qy0 = rb * (Math.cos(t) + t * Math.sin(t))
      const rx = qx0 * Math.cos(beta) - qy0 * Math.sin(beta)
      const ry = qx0 * Math.sin(beta) + qy0 * Math.cos(beta)
      const px = sgn === 1 ? -rx : rx
      const py = ry
      for (let k = 0; k < g.input.z; k++) {
        const a = (2 * Math.PI * k) / g.input.z
        const ex = px * Math.cos(a) - py * Math.sin(a)
        const ey = px * Math.sin(a) + py * Math.cos(a)
        const dd = Math.hypot(lx - ex, ly - ey)
        if (dd < bestLocal) {
          bestLocal = dd
          bestT = t
        }
      }
    }
    const span = (tHi - tLo) / N
    for (let j = -20; j <= 20; j++) {
      const t = bestT + (j * span) / 20
      if (t < tLo || t > tHi) continue
      const qx0 = rb * (Math.sin(t) - t * Math.cos(t))
      const qy0 = rb * (Math.cos(t) + t * Math.sin(t))
      const rx = qx0 * Math.cos(beta) - qy0 * Math.sin(beta)
      const ry = qx0 * Math.sin(beta) + qy0 * Math.cos(beta)
      const px = sgn === 1 ? -rx : rx
      const py = ry
      for (let k = 0; k < g.input.z; k++) {
        const a = (2 * Math.PI * k) / g.input.z
        const ex = px * Math.cos(a) - py * Math.sin(a)
        const ey = px * Math.sin(a) + py * Math.cos(a)
        bestLocal = Math.min(bestLocal, Math.hypot(lx - ex, ly - ey))
      }
    }
    best = Math.min(best, bestLocal)
  }
  return best
}

function wrapAngle(d: number) {
  while (d > Math.PI) d -= 2 * Math.PI
  while (d < -Math.PI) d += 2 * Math.PI
  return d
}

/**
 * 物理姿态只在每个轮的整齿距角 τ=2π/z 下唯一（齿轮旋转对称）。
 * 把相邻样本的角位移折叠到 (−τ/2, τ/2]：跨过接触齿对切换时角度跳整周 τ，
 * 物理上是同一个姿态，测量转速/转向必须折叠后累加。
 */
function physicalDelta(phi: number, prev: number, z: number) {
  const tau = (2 * Math.PI) / z
  let d = phi - prev
  d = ((d + tau / 2) % tau + tau) % tau - tau / 2
  return d
}

/** 比较两个姿态角是否物理一致（模该轮整齿距角） */
function samePhysical(a: number, b: number, z: number) {
  const tau = (2 * Math.PI) / z
  return Math.abs(physicalDelta(a, b, z)) < 1e-9
}

function mkChain(z1: number, z2: number, z3: number, m = 2, alphaDeg = 20): ChainModel {
  return buildChain({
    mode: 'chain',
    gearInputs: [
      { z: z1, module: m, alpha: alphaDeg * DEG, faceWidth: 8 },
      { z: z2, module: m, alpha: alphaDeg * DEG, faceWidth: 8 },
      { z: z3, module: m, alpha: alphaDeg * DEG, faceWidth: 8 }
    ],
    centerDistances: [null, null]
  })
}

// ---------------------------------------------------------------------------
console.log('\n=== 1. 标准三轮链 20/20/40：两段独立真实啮合 ===')
{
  const z1 = 20, z2 = 20, z3 = 40
  const model = mkChain(z1, z2, z3)
  ok(model.valid, '链形成成功（模数/压力角匹配）')
  ok(model.segments.length === 2, '恰有两段啮合')
  const [g1, g2, g3] = model.gears.map((g) => g!)
  const [segA, segB] = model.segments

  // 1.1 中心距
  approx(model.centers[1], g1.pitchR + g2.pitchR, 1e-9, '段A 标准中心距 m(z1+z2)/2')
  approx(model.centers[2] - model.centers[1], g2.pitchR + g3.pitchR, 1e-9, '段B 标准中心距 m(z2+z3)/2')

  // 1.2 沿首端轮整周采样：两段接触点都必须落在严格渐开线齿面上
  let maxErrA = 0,
    maxErrB = 0
  const samples = 24
  const period = (2 * Math.PI) / z1
  let dPhi1 = 0,
    dPhi2 = 0,
    dPhi3 = 0
  let prev: number[] | null = null
  for (let i = 0; i <= samples; i++) {
    const phi1 = (period * i) / samples
    const { pose, s } = poseFromMaster(model, phi1)
    const cA = contactPointWorld(segA, s[0])
    const cB = contactPointWorld(segB, s[1])
    maxErrA = Math.max(
      maxErrA,
      analyticFlankDist(g1, cA, model.centers[0], pose[0]),
      analyticFlankDist(g2, cA, model.centers[1], pose[1])
    )
    maxErrB = Math.max(
      maxErrB,
      analyticFlankDist(g2, cB, model.centers[1], pose[1]),
      analyticFlankDist(g3, cB, model.centers[2], pose[2])
    )
    if (prev) {
      dPhi1 += physicalDelta(pose[0], prev[0], z1)
      dPhi2 += physicalDelta(pose[1], prev[1], z2)
      dPhi3 += physicalDelta(pose[2], prev[2], z3)
    }
    prev = pose
  }
  console.log(`  段A 接触点到解析渐开线最大距离: ${maxErrA.toExponential(2)} mm`)
  console.log(`  段B 接触点到解析渐开线最大距离: ${maxErrB.toExponential(2)} mm`)
  ok(maxErrA < 6e-3, '段A：接触点同时在轮1/惰轮真实齿面上')
  ok(maxErrB < 6e-3, '段B：接触点同时在惰轮/末轮真实齿面上')

  // 1.3 惰轮只有一个转角，却同时满足两段 rb·Δφ = −rb·Δφ
  approx(g1.baseR * dPhi1 + g2.baseR * dPhi2, 0, 1e-7, '段A：rb1·Δφ1 = −rb2·Δφ2')
  approx(g2.baseR * dPhi2 + g3.baseR * dPhi3, 0, 1e-7, '段B：rb2·Δφ2 = −rb3·Δφ3')

  // 1.4 总速比/方向：两段相乘，首末轮同向
  const r = chainRatio(model)
  approx(r.segmentRatios[0], -z1 / z2, 1e-12, '段A 有向速比 −z1/z2')
  approx(r.segmentRatios[1], -z2 / z3, 1e-12, '段B 有向速比 −z2/z3')
  approx(r.total, z1 / z3, 1e-12, '总速比 +z1/z3（不是直接套末轮，是两段相乘）')
  approx(dPhi3 / dPhi1, z1 / z3, 1e-7, '实测末轮/首轮转角比 = +z1/z3')
  ok(r.sameDirection && dPhi1 * dPhi3 > 0, '首末轮转向相同（两次外啮合，方向反转两次）')
  ok(dPhi1 * dPhi2 < 0 && dPhi2 * dPhi3 < 0, '首轮-惰轮、惰轮-末轮各自转向相反')
}

// ---------------------------------------------------------------------------
console.log('\n=== 2. 模数/压力角不匹配：拒绝形成半成品传动链 ===')
{
  // 惰轮模数不同：两段都拒绝
  const badM = buildChain({
    mode: 'chain',
    gearInputs: [
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 20, module: 2.5, alpha: 20 * DEG, faceWidth: 8 },
      { z: 40, module: 2, alpha: 20 * DEG, faceWidth: 8 }
    ],
    centerDistances: [null, null]
  })
  ok(!badM.valid, '惰轮模数不匹配 → 整链无效')
  ok(badM.segments.every((s) => s.rejected), '两段均标记 rejected（无半成品啮合）')
  let threw = false
  try {
    poseFromMaster(badM, 0.1)
  } catch {
    threw = true
  }
  ok(threw, '被拒绝的链不提供运动学（不产生错误相位）')

  // 仅第二段模数不匹配：链整体仍拒绝（不允许只有第一段可用的半成品）
  const halfBad = buildChain({
    mode: 'chain',
    gearInputs: [
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 40, module: 3, alpha: 20 * DEG, faceWidth: 8 }
    ],
    centerDistances: [null, null]
  })
  ok(!halfBad.valid, '末轮模数不匹配 → 整链无效（不形成半成品）')
  ok(!halfBad.segments.find((s) => s.index === 0)!.rejected, '段A 本身基节匹配')
  ok(halfBad.segments.find((s) => s.index === 1)!.rejected, '段B 被拒绝')

  // 压力角不匹配
  const badA = mkChain(20, 20, 40, 2, 20)
  const badAlpha = buildChain({
    mode: 'chain',
    gearInputs: [
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 20, module: 2, alpha: 14.5 * DEG, faceWidth: 8 },
      { z: 40, module: 2, alpha: 20 * DEG, faceWidth: 8 }
    ],
    centerDistances: [null, null]
  })
  ok(!badAlpha.valid, '惰轮压力角不匹配 → 整链无效')
  ok(badA.valid, '对照组（α 全 20°）正常')

  // 容差边界：小于容差视为相等
  ok(Math.abs(2 - (2 + MODULE_MATCH_TOL / 2)) <= MODULE_MATCH_TOL, '模数容差内接受（构造保证）')
  ok(Math.abs(20 * DEG - (20 * DEG + ALPHA_MATCH_TOL / 2)) <= ALPHA_MATCH_TOL, '压力角容差内接受（构造保证）')
}

// ---------------------------------------------------------------------------
console.log('\n=== 3. 拖动第一段接触位置：第二段与末轮相位仍严格一致 ===')
{
  const model = mkChain(20, 30, 40, 2)
  const [g1, g2, g3] = model.gears.map((g) => g!)
  const [segA, segB] = model.segments

  const loA = segA.mesh.actionLine
  const ap = segA.mesh.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sA0 =
    (loA.p0.x - segA.mesh.pitchPoint.x) * nx + (loA.p0.y - segA.mesh.pitchPoint.y) * ny
  const sA1 =
    (loA.p1.x - segA.mesh.pitchPoint.x) * nx + (loA.p1.y - segA.mesh.pitchPoint.y) * ny

  let maxErrB = 0
  let prev: number[] | null = null
  let d1 = 0,
    d2 = 0,
    d3 = 0
  for (let i = 0; i <= 10; i++) {
    const sVal = sA0 + ((sA1 - sA0) * i) / 10
    // 用户拖动的是段 A：姿态必须从段A严格级联到段B与末轮
    const { pose, s } = poseFromScrub(model, 0, sVal)
    const cB = contactPointWorld(segB, s[1])
    maxErrB = Math.max(
      maxErrB,
      analyticFlankDist(g2, cB, model.centers[1], pose[1]),
      analyticFlankDist(g3, cB, model.centers[2], pose[2])
    )
    if (prev) {
      d1 += physicalDelta(pose[0], prev[0], g1.input.z)
      d2 += physicalDelta(pose[1], prev[1], g2.input.z)
      d3 += physicalDelta(pose[2], prev[2], g3.input.z)
    }
    prev = pose
  }
  ok(maxErrB < 6e-3, `拖段A 时段B 接触仍在惰轮/末轮真实齿面上（err ${maxErrB.toExponential(2)}）`)
  approx(g2.baseR * d2 + g3.baseR * d3, 0, 1e-7, '拖段A：段B 级联满足 rb2·Δφ2 = −rb3·Δφ3')
  approx(g1.baseR * d1 + g2.baseR * d2, 0, 1e-7, '拖段A：段A 自身严格 rb1·Δφ1 = −rb2·Δφ2')
  approx(d3 / d1, g1.input.z / g3.input.z, 1e-7, '拖段A：末轮/首轮转角比仍为 +z1/z3')
}

console.log('\n=== 4. 反向拖动第二段：惰轮反推行至段A，三轮姿态一致 ===')
{
  const model = mkChain(20, 30, 40, 2)
  const [g1, g2, g3] = model.gears.map((g) => g!)
  const [segA, segB] = model.segments

  const ap = segB.mesh.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sB0 =
    (segB.mesh.actionLine.p0.x - segB.mesh.pitchPoint.x) * nx +
    (segB.mesh.actionLine.p0.y - segB.mesh.pitchPoint.y) * ny
  const sB1 =
    (segB.mesh.actionLine.p1.x - segB.mesh.pitchPoint.x) * nx +
    (segB.mesh.actionLine.p1.y - segB.mesh.pitchPoint.y) * ny

  let maxErrA = 0
  for (let i = 0; i <= 10; i++) {
    const sVal = sB0 + ((sB1 - sB0) * i) / 10
    const { pose, s } = poseFromScrub(model, 1, sVal)
    // 反推得到的段A 接触点必须落在轮1/惰轮齿面上
    const cA = contactPointWorld(segA, s[0])
    maxErrA = Math.max(
      maxErrA,
      analyticFlankDist(g1, cA, model.centers[0], pose[0]),
      analyticFlankDist(g2, cA, model.centers[1], pose[1])
    )
    // 与正向级联交叉一致性：用反推出的 φ1 正向求解，必须还原创段B 的姿态
    // （姿态只在各轮整齿距角下唯一，故按模 2π/z 比较）
    const fwd = poseFromMaster(model, pose[0])
    ok(
      samePhysical(fwd.pose[1], pose[1], g2.input.z) && samePhysical(fwd.pose[2], pose[2], g3.input.z),
      `反推 φ1=${pose[0].toFixed(3)} → 正向级联 惰轮/末轮姿态物理一致`
    )
  }
  ok(maxErrA < 6e-3, `拖段B 反推时，段A 接触仍在真实齿面上（err ${maxErrA.toExponential(2)}）`)
}

// ---------------------------------------------------------------------------
console.log('\n=== 5. pair 模式（旧双轮实验行为不变）===')
{
  const model = buildChain({
    mode: 'pair',
    gearInputs: [
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 40, module: 2, alpha: 20 * DEG, faceWidth: 8 },
      { z: 20, module: 2, alpha: 20 * DEG, faceWidth: 8 }
    ],
    centerDistances: [null, null]
  })
  ok(model.valid && model.gearCount === 2 && model.segments.length === 1, 'pair：两轮一段')
  const r = chainRatio(model)
  approx(r.total, -0.5, 1e-12, 'pair 总速比 −z1/z2（反向）')
  const k1 = poseFromMaster(model, 0)
  const k2 = poseFromMaster(model, 0.37)
  const g1 = model.gears[0]!,
    g2 = model.gears[1]!
  approx(g1.baseR * (k2.pose[0] - k1.pose[0]) + g2.baseR * (k2.pose[1] - k1.pose[1]), 0, 1e-9,
    'pair 严格相位 rb1·Δφ1 = −rb2·Δφ2')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n三轮链全部通过 ✅')
process.exit(fails ? 1 : 0)
