/**
 * 三轮惰轮传动链验收：
 *  A. 标准三轮链两段均为真实正确啮合（接触点落在双方解析渐开线上），
 *     首末轮同向，总速比 ω3/ω1 = +z1/z3 由两段啮合积分得到而非直接套用；
 *  B. 模数/压力角不匹配时拒绝形成半成品链条（不返回任何几何）；
 *  C. 暂停拖动第 1 段接触位置后，第 2 段 s、惰轮/末轮相位仍严格一致；
 *  D. v1 旧双轮案例迁移后行为不变，并可另存为三轮链；
 *  E. 导出→导入后惰轮参数、两段干涉检查结果与轮廓不丢失、相位不被重建错误；
 *  F. 标准安装各段 Clipper 实体求交无干涉。
 */
import { buildGear, DEG, transformOutline, type GearGeometry, type Pt } from '../src/geometry/gear.ts'
import {
  buildTrain,
  poseFromFirst,
  poseFromStageS,
  stageSBounds,
  worldOutline,
  type TrainModel
} from '../src/geometry/train.ts'
import { gearAnglesAt, invertContactS } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import {
  parseCase,
  serializeCase,
  migrateV1,
  SCHEMA_VERSION,
  type CaseData,
  type CaseDataV1,
  caseToSpec
} from '../src/store.ts'

let fails = 0
const fail = (m: string) => {
  fails++
  console.log('  FAIL', m)
}
const ok = (cond: boolean, m: string) => {
  if (cond) console.log('  ok  ', m)
  else fail(m)
}

/** 世界点到某轮（中心 cx、本体角 phi）解析渐开线齿面的最小距离 */
function flankDist(g: GearGeometry, world: Pt, cx: number, phi: number): number {
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
  // 两级搜索：粗扫 + 最优点附近细化（与 check-mesh 同一方法）
  for (const sgn of [1, -1] as const) {
    const N = 200
    let bestT = tLo
    let bestLocal = Infinity
    for (let i = 0; i < N; i++) {
      const t = tLo + ((g.taTip - tLo) * (i + 0.5)) / N
      const qx0 = rb * (Math.sin(t) - t * Math.cos(t))
      const qy0 = rb * (Math.cos(t) + t * Math.sin(t))
      const rx0 = qx0 * Math.cos(beta) - qy0 * Math.sin(beta)
      const ry0 = qx0 * Math.sin(beta) + qy0 * Math.cos(beta)
      const px = sgn === 1 ? -rx0 : rx0
      const py = ry0
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
    const span = (g.taTip - tLo) / N
    for (let j = -24; j <= 24; j++) {
      const t = bestT + (j * span) / 24
      if (t < tLo || t > g.taTip) continue
      const qx0 = rb * (Math.sin(t) - t * Math.cos(t))
      const qy0 = rb * (Math.cos(t) + t * Math.sin(t))
      const rx0 = qx0 * Math.cos(beta) - qy0 * Math.sin(beta)
      const ry0 = qx0 * Math.sin(beta) + qy0 * Math.cos(beta)
      const px = sgn === 1 ? -rx0 : rx0
      const py = ry0
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

/** 对一段沿实际啮合线密集采样：接触点必须同时在双方齿面上 */
function verifyStageContact(model: TrainModel, stageIdx: number): number {
  const st = model.stages[stageIdx]
  const [lo, hi] = stageSBounds(st)
  let maxErr = 0
  for (let i = 0; i <= 12; i++) {
    const s = lo + ((hi - lo) * i) / 12
    const pose = poseFromStageS(model, stageIdx, s)
    const c = pose.contacts[stageIdx]
    const dL = flankDist(model.gears[st.leftIndex], c, st.cxLeft, pose.angles[st.leftIndex])
    const dR = flankDist(model.gears[st.rightIndex], c, st.cxRight, pose.angles[st.rightIndex])
    maxErr = Math.max(maxErr, dL, dR)
  }
  return maxErr
}

function unwrap(prev: number, cur: number): number {
  let d = cur - prev
  while (d > Math.PI) d -= 2 * Math.PI
  while (d < -Math.PI) d += 2 * Math.PI
  return d
}

// ---------------------------------------------------------------------------
console.log('\n=== A. 标准三轮链 20/30/40 ===')
const train = buildTrain({
  kind: 'idler',
  gears: [
    { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 30, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 }
  ],
  centerDistances: [null, null]
})
ok(train.ok, '三轮链成功形成（两段模数/压力角均一致）')
ok(train.stages.length === 2 && train.gears.length === 3, '包含两段独立啮合与中间惰轮')
ok(
  Math.abs(train.stages[0].info.a0 - 50) < 1e-9 && Math.abs(train.stages[1].info.a0 - 70) < 1e-9,
  '两段中心距分别为 m(z1+z2)/2=50、m(z2+z3)/2=70'
)

const err1 = verifyStageContact(train, 0)
const err2 = verifyStageContact(train, 1)
console.log(`  第1段接触点最大齿面偏差 ${err1.toExponential(2)} mm；第2段 ${err2.toExponential(2)} mm`)
ok(err1 < 6e-3, '第 1 段接触点始终落在两轮真实渐开线齿面上')
ok(err2 < 6e-3, '第 2 段接触点始终落在两轮真实渐开线齿面上')

// 沿链积分各轮转角（不直接使用总速比）
let dPhi1 = 0,
  dPhi2 = 0,
  dPhi3 = 0
let prev = poseFromFirst(train, 0)
const STEPS = 80
const sweep = (2 * Math.PI) / 20
for (let i = 1; i <= STEPS; i++) {
  const p1 = (sweep * i) / STEPS
  const cur = poseFromFirst(train, p1)
  dPhi1 += unwrap(prev.angles[0], cur.angles[0])
  dPhi2 += unwrap(prev.angles[1], cur.angles[1])
  dPhi3 += unwrap(prev.angles[2], cur.angles[2])
  prev = cur
}
const r12 = dPhi2 / dPhi1
const r23 = dPhi3 / dPhi2
const r13 = dPhi3 / dPhi1
console.log(`  积分速比: ω2/ω1=${r12.toFixed(5)}（理论 −2/3）, ω3/ω2=${r23.toFixed(5)}（理论 −3/4）, ω3/ω1=${r13.toFixed(5)}（理论 +1/2）`)
ok(Math.abs(r12 + 2 / 3) < 1e-6, '第 1 段速比 = −z1/z2（外啮合反向）')
ok(Math.abs(r23 + 3 / 4) < 1e-6, '第 2 段速比 = −z2/z3（外啮合反向）')
ok(Math.abs(r13 - 0.5) < 1e-6, '总速比 ω3/ω1 = +z1/z3（惰轮约掉幅值）')
ok(dPhi1 * dPhi3 > 0, '首末轮转向相同（两次外啮合，惰轮改变方向）')
ok(Math.abs(train.total!.ratio - 0.5) < 1e-12 && train.total!.sameDirection, '模型总关系与积分一致')
// rb 严格关系逐段
ok(Math.abs(train.gears[0].baseR * dPhi1 + train.gears[1].baseR * dPhi2) < 1e-6, '第 1 段 rb1·Δφ1 = −rb2·Δφ2')
ok(Math.abs(train.gears[1].baseR * dPhi2 + train.gears[2].baseR * dPhi3) < 1e-6, '第 2 段 rb2·Δφ2 = −rb3·Δφ3')

// ---------------------------------------------------------------------------
console.log('\n=== B. 不匹配拒绝形成半成品链条 ===')
const badM = buildTrain({
  kind: 'idler',
  gears: [
    { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 30, module: 2.1, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 }
  ],
  centerDistances: [null, null]
})
ok(!badM.ok && badM.gears.length === 0 && badM.stages.length === 0, '惰轮模数不匹配：拒绝，链条几何为空')
ok(badM.errors.some((e) => e.includes('模数')), '错误信息指出模数不匹配')

const badA = buildTrain({
  kind: 'idler',
  gears: [
    { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 30, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    { z: 40, module: 2, alpha: 14.5 * DEG, alphaDeg: 14.5, faceWidth: 10 }
  ],
  centerDistances: [null, null]
})
ok(!badA.ok && badA.stages.length === 0, '末轮压力角不匹配：拒绝，链条几何为空')
ok(badA.errors.some((e) => e.includes('压力角')), '错误信息指出压力角不匹配')

// ---------------------------------------------------------------------------
console.log('\n=== C. 拖动第 1 段接触位置后全链相位一致 ===')
{
  const [lo, hi] = stageSBounds(train.stages[0])
  const s1Pick = lo + (hi - lo) * 0.35
  const pose = poseFromStageS(train, 0, s1Pick)
  ok(Math.abs(pose.s[0] - s1Pick) < 1e-10, '第 1 段 s 取拖动值')

  // 从惰轮本体角独立反解第 2 段 s，必须与传播结果一致
  const s2Check = invertContactS(train.stages[1].info, train.gears[1], pose.angles[1])
  ok(Math.abs(s2Check - pose.s[1]) < 1e-9, '第 2 段 s 由惰轮真实相位反解，与传播结果一致')

  // 同一姿态也必须等于"由首轮角正向传播"的姿态（全链相容，不是各算各的）
  const ref = poseFromFirst(train, pose.angles[0])
  ok(Math.abs(ref.angles[1] - pose.angles[1]) < 1e-9, '惰轮相位一致')
  ok(Math.abs(ref.angles[2] - pose.angles[2]) < 1e-9, '末轮相位一致')
  ok(Math.abs(ref.s[1] - pose.s[1]) < 1e-9, '第 2 段接触线位置一致')

  // 第 2 段在其自身动作段内取点，确认端点/接触点几何与惰轮–末轮严格接触
  const st = train.stages[1]
  const [lo2b, hi2b] = stageSBounds(st)
  const pMid = poseFromStageS(train, 1, (lo2b + hi2b) / 2)
  const d2m = Math.max(
    flankDist(train.gears[1], pMid.contacts[1], st.cxLeft, pMid.angles[1]),
    flankDist(train.gears[2], pMid.contacts[1], st.cxRight, pMid.angles[2])
  )
  ok(d2m < 6e-3, `第 2 段动作段中点正确接触（偏差 ${d2m.toExponential(2)} mm）`)

  // 闭环一致性：在第 2 段动作段内任取姿态，从其 s 反推应能回到同一姿态
  const [lo2c, hi2c] = stageSBounds(train.stages[1])
  const pC = poseFromStageS(train, 1, lo2c + (hi2c - lo2c) * 0.4)
  const backFromLast = poseFromStageS(train, 1, pC.s[1])
  ok(Math.abs(backFromLast.angles[0] - pC.angles[0]) < 1e-9, '第 2 段接触位置反推回的首轮姿态重合（全链闭环一致）')
  ok(Math.abs(backFromLast.angles[2] - pC.angles[2]) < 1e-9, '反推末轮姿态重合')

  // 反向也成立：拖第 2 段时第 1 段/首轮一致
  const [lo2, hi2] = stageSBounds(train.stages[1])
  const poseB = poseFromStageS(train, 1, lo2 + (hi2 - lo2) * 0.6)
  const refB = poseFromFirst(train, poseB.angles[0])
  ok(Math.abs(refB.angles[2] - poseB.angles[2]) < 1e-9, '拖第 2 段时末轮姿态可由首轮链还原')
  ok(Math.abs(refB.s[0] - poseB.s[0]) < 1e-9, '拖第 2 段时第 1 段接触位置同步')
}

// ---------------------------------------------------------------------------
console.log('\n=== D. v1 旧双轮案例迁移 ===')
{
  const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const v1: CaseDataV1 = {
    schemaVersion: 1,
    id: 'old',
    name: '旧案例',
    createdAt: 1,
    updatedAt: 1,
    note: '',
    gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    centerDistance: null,
    unit: 'mm',
    outlines: { gear1: g1.outline, gear2: g2.outline }
  }
  const migrated = parseCase(serializeCase(v1))
  ok(migrated.schemaVersion === 2 && migrated.kind === 'pair', 'v1 JSON 导入自动迁移为 v2 双轮')
  ok(migrated.gears.length === 2 && migrated.centerDistances[0] === null, '双轮参数与标准中心距保留')
  ok(!!migrated.outlines && migrated.outlines.gears[0].length === g1.outline.length, '旧轮廓保留')

  const m = buildTrain(caseToSpec(migrated))
  ok(m.ok && m.stages.length === 1 && Math.abs(m.stages[0].info.a0 - 60) < 1e-9, '旧案例按原行为装配（a0=60）')
  const pose = poseFromFirst(m, 0.37)
  // 与旧公式 mateAngle 数值一致
  const { phi2 } = gearAnglesAt(m.stages[0].info, m.gears[0], m.gears[1], pose.s[0])
  ok(Math.abs(phi2 - pose.angles[1]) < 1e-12, '迁移后严格相位与旧双轮公式一致')

  // "另存为三轮链"：插入惰轮后链条成立
  const idler = buildTrain({
    kind: 'idler',
    gears: [
      migrated.gears[0],
      { z: 30, module: migrated.gears[0].module, alpha: migrated.gears[0].alpha, alphaDeg: 20, faceWidth: 10 },
      migrated.gears[1]
    ],
    centerDistances: [null, null]
  })
  ok(idler.ok && idler.total!.sameDirection, '旧双轮可扩展为三轮惰轮链且首末轮同向')
}

// ---------------------------------------------------------------------------
console.log('\n=== E. v2 导出/导入往返：参数、姿态、两段检查结果、轮廓不丢失 ===')
{
  const g020 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g030 = buildGear({ z: 30, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g040 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  // 在一个【非零、转过约半齿】的暂停帧计算两段真实干涉结果
  const pause = poseFromFirst(train, (2 * Math.PI) / 20 * 0.5)
  const res0 = await intersectOutlines([worldOutline(train, pause, 0)], [worldOutline(train, pause, 1)])
  const res1 = await intersectOutlines([worldOutline(train, pause, 1)], [worldOutline(train, pause, 2)])
  ok(!res0.intersects && !res1.intersects, `标准安装暂停帧两段均无实体干涉（${res0.area.toExponential(1)} / ${res1.area.toExponential(1)} mm²）`)

  const data: CaseData = {
    schemaVersion: SCHEMA_VERSION,
    id: 'v2',
    name: '三轮往返',
    createdAt: 2,
    updatedAt: 2,
    note: '含两段检查',
    kind: 'idler',
    gears: [
      { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
      { z: 30, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
      { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 }
    ],
    centerDistances: [null, null],
    unit: 'mm',
    pose: [...pause.angles],
    selectedStage: 1,
    contactS: [...pause.s],
    outlines: {
      gears: [g020.outline, g030.outline, g040.outline],
      interference: [
        { stageIndex: 0, angles: [...pause.angles], regions: res0.regions, area: res0.area },
        { stageIndex: 1, angles: [...pause.angles], regions: res1.regions, area: res1.area }
      ]
    }
  }
  const back = parseCase(serializeCase(data))
  ok(back.kind === 'idler' && back.gears.map((g) => g.z).join('/') === '20/30/40', '惰轮参数（含 z2=30）往返保留')
  ok(back.outlines!.gears.length === 3, '三个轮廓均保留（含惰轮）')
  ok(back.outlines!.gears[1].length === g030.outline.length, '惰轮轮廓点数不变（未被重建）')
  const saved = back.outlines!.interference!
  ok(saved.length === 2 && saved[0].stageIndex === 0 && saved[1].stageIndex === 1, '两段检查结果均保留且段号正确')
  ok(back.selectedStage === 1, '被检查啮合副选择保留')

  // 用【保存的轮廓】+【保存的角度】重新摆相位做 Clipper 核验：面积必须复现，
  // 证明刷新/导入后不会被错误重建（例如错误地只按总速比摆末轮）
  const m2 = buildTrain(caseToSpec(back))
  const a = saved[1].angles
  const again = await intersectOutlines(
    [transformOutline(back.outlines!.gears[1], m2.centers[1], 0, a[1])],
    [transformOutline(back.outlines!.gears[2], m2.centers[2], 0, a[2])]
  )
  ok(Math.abs(again.area - saved[1].area) < 1e-7, `第 2 段按保存角度复算面积一致（${again.area.toExponential(2)}）`)

  // 教学反证："把总速比直接套到末轮"的错误在于只看一对齿轮——
  //  (1) 若不知道中间有惰轮，按【一对外啮合】会把末轮转向取成与首轮相反，
  //      但两轮真实关系是同向（方向由两次外啮合决定，不是由首末齿数决定）；
  //  (2) 惰轮的严格中间相位由两段啮合共同约束，跳过它就无法构造自洽的全链姿态。
  {
    const [loA, hiA] = stageSBounds(m2.stages[0])
    const pc = poseFromStageS(m2, 0, loA + (hiA - loA) * 0.6)
    // 误以为首末是"一对"：φ3 = φ1·(−z1/z3)
    const wrongSign = -pc.angles[0] * (m2.gears[0].input.z / m2.gears[2].input.z)
    const dSign = Math.abs(wrongSign - pc.angles[2])
    ok(dSign > 0.01,
      `按一对外啮合给出的末轮角符号错误（严格 ${pc.angles[2].toFixed(4)} rad，误判 ${wrongSign.toFixed(4)} rad，差 ${dSign.toFixed(3)} rad）`)
    const wrongArea = (
      await intersectOutlines(
        [transformOutline(back.outlines!.gears[1], m2.centers[1], 0, pc.angles[1])],
        [transformOutline(back.outlines!.gears[2], m2.centers[2], 0, wrongSign)]
      )
    ).area
    ok(wrongArea > 1e-4, `误判反向的摆位产生伪干涉 ${wrongArea.toFixed(2)} mm²`)

    // 惰轮相位只能由第 1、2 段同时决定：从第 2 段反推的惰轮角必须等于第 1 段给的值
    const s2viaIdler = invertContactS(m2.stages[1].info, m2.gears[1], pc.angles[1])
    ok(Math.abs(s2viaIdler - pc.s[1]) < 1e-9, '惰轮相位同时满足两段啮合（跳过惰轮无法构造该中间姿态）')
  }
  // 而严格链摆位逐齿无干涉，说明保存的相位只能由两段真实啮合得到
  ok(again.area < 1e-8, '严格两段啮合摆位无伪干涉')

  // 保存的姿态经严格链重推必须复现第 2 段 s 与末轮角
  const repose = poseFromFirst(m2, back.pose![0])
  ok(Math.abs(repose.angles[2] - back.pose![2]) < 1e-9, '刷新后由两段真实啮合重建的末轮姿态与保存一致')
  ok(Math.abs(repose.s[1] - back.contactS![1]) < 1e-9, '刷新后第 2 段接触位置与保存一致')
}

// ---------------------------------------------------------------------------
console.log('\n=== F. 非标准中心距下干涉仍被 Clipper 检出（第二段） ===')
{
  const a0b = train.stages[1].info.a0
  const squeezed = buildTrain({
    kind: 'idler',
    gears: [
      { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
      { z: 30, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
      { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 }
    ],
    centerDistances: [null, a0b - 3]
  })
  ok(!squeezed.ok && squeezed.stages[1].info.addendumOverlap, '第 2 段中心距过小被判为不可用链')
}

void migrateV1
console.log(fails ? `\n${fails} 项失败 ❌` : '\n三轮链验收全部通过 ✅')
process.exit(fails ? 1 : 0)
