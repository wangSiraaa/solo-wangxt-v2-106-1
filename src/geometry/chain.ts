/**
 * 可配置轮系：一对齿轮（pair，兼容旧双轮实验）或含中间惰轮的三轮传动链（chain）。
 *
 * 教学要点（对应"惰轮为何改变传动方向，而不能只看一对齿轮"）：
 *  三轮链 O1—O2(惰轮)—O3 包含【两段独立的真实外啮合】。惰轮不是速比标签：
 *  它在第一段是大轮2（从动），在第二段同时是主动轮，其本体转角只有一个，
 *  必须【同时】满足两段渐开线啮合的严格相位。因此：
 *
 *    段 A(1-2)：rb1·Δφ1 = −rb2·Δφ2
 *    段 B(2-3)：rb2·Δφ2 = −rb3·Δφ3
 *    ⇒ Δφ3/Δφ1 = (+) z1/z3，首末轮【同向】（两次外啮合，方向反转两次）
 *
 *  总速比与方向由两段真实啮合【同时决定】：末轮相位必须经过惰轮严格级联得到，
 *  绝不能把总速比直接套到末轮（那样无法保证惰轮两侧是同一条渐开线接触）。
 *
 * 装配前提：每段两轮模数、压力角分别相等（基节相等）。任一不匹配则
 * 【拒绝形成半成品传动链】：不产生啮合、不给相位，界面只能看到三个独立轮坯。
 *
 * 布局：各轮中心沿 +x 排列，Oi.x = 前面各段中心距累加；啮合线几何在段局部
 * 坐标（左轮中心为原点）内计算，渲染时加段偏移即可。
 */
import { buildGear, validateGearInput, type GearGeometry, type GearInput, type Pt } from './gear'
import {
  analyzeMesh,
  gearAnglesAt,
  reduceToAction,
  solveSForDriver,
  solveSForDriven,
  type MeshInfo
} from './mesh'

export type ChainMode = 'pair' | 'chain'

/** 模数匹配容差（mm）与压力角匹配容差（弧度，约 0.0006°） */
export const MODULE_MATCH_TOL = 1e-6
export const ALPHA_MATCH_TOL = 1e-8

export interface ChainBuildInput {
  mode: ChainMode
  /** 长度恒为 3：pair 模式只用前两个 */
  gearInputs: [GearInput, GearInput, GearInput]
  /** 每段实际中心距（mm），null = 该段用标准中心距；pair 模式只用第一项 */
  centerDistances: [number | null, number | null]
}

export interface ChainSegment {
  /** 0 = 轮1-轮2，1 = 轮2-轮3 */
  index: 0 | 1
  /** 左轮在 gears 中的下标（0 / 1） */
  leftIndex: number
  /** 右轮在 gears 中的下标（1 / 2） */
  rightIndex: number
  /** 左轮中心的世界 x（段局部坐标原点的平移量），所有中心 y=0 */
  offsetX: number
  mesh: MeshInfo
  /** 该段是否被拒绝（模数/压力角不匹配）；为 true 时 mesh 仅供尺寸参考，禁止用于运动学 */
  rejected: boolean
  rejectReasons: string[]
}

export interface ChainModel {
  mode: ChainMode
  /** 实际参与的轮数：2 或 3 */
  gearCount: 2 | 3
  /** 长度恒为 3；pair 模式第 3 项为 null。输入非法时对应项也可能为 null */
  gears: [GearGeometry | null, GearGeometry | null, GearGeometry | null]
  /** 各轮输入校验错误（长度 3） */
  gearErrors: [string[], string[], string[]]
  /** 各轮中心世界坐标 x（即使链被拒绝也按标准中心距摆放，便于看到独立轮坯） */
  centers: [number, number, number]
  /** 段（0..1）；pair 模式只有段 0，chain 被拒绝时对应段 rejected=true */
  segments: ChainSegment[]
  /** 整条链是否可形成（所有参与轮合法 + 各段基节匹配） */
  valid: boolean
  /** 链级错误/阻断原因 */
  errors: string[]
}

/** 三轮姿态：各轮本体转角（弧度，局部 +y 为 0 号齿中心）；pair 模式第 3 项为 0 */
export type ChainPose = [number, number, number]

export interface ChainKinematics {
  pose: ChainPose
  /**
   * 两段当前接触参数（已按基节折叠进实际啮合线段，对应"此刻真正接触的那对齿"，
   * 供接触点标记/滑块使用）。姿态本身由未折叠的连续 s 求出，两者在齿轮
   * 整齿距旋转对称下物理等价（轮廓严格不变，Clipper 求交结果相同）。
   */
  s: [number, number]
}

function equalMod(a: number, b: number) {
  return Math.abs(a - b) <= MODULE_MATCH_TOL
}
function equalAlpha(a: number, b: number) {
  return Math.abs(a - b) <= ALPHA_MATCH_TOL
}

function segmentReasons(gL: GearGeometry, gR: GearGeometry): string[] {
  const reasons: string[] = []
  if (!equalMod(gL.input.module, gR.input.module)) {
    reasons.push(
      `两轮模数不匹配（m=${gL.input.module} vs m=${gR.input.module}），基节不等，不能啮合`
    )
  }
  if (!equalAlpha(gL.input.alpha, gR.input.alpha)) {
    const fmt = (v: number) => ((v * 180) / Math.PI).toFixed(3)
    reasons.push(`两轮压力角不匹配（α=${fmt(gL.input.alpha)}° vs α=${fmt(gR.input.alpha)}°），不能啮合`)
  }
  return reasons
}

/**
 * 构建轮系。
 * 设计原则：
 *  - 各轮先独立解析（buildGear），任何一轮输入非法 → 整条链 invalid；
 *  - 每段再独立做基节匹配检查；不匹配则该段 rejected，绝不产生半成品运动学；
 *  - 中心距按段独立：null 取标准值；链被拒绝时仍按标准中心距摆放独立轮坯。
 */
export function buildChain(input: ChainBuildInput): ChainModel {
  const { mode, gearInputs, centerDistances } = input
  const gearCount: 2 | 3 = mode === 'chain' ? 3 : 2

  const gearErrors: [string[], string[], string[]] = [[], [], []]
  const gears: [GearGeometry | null, GearGeometry | null, GearGeometry | null] = [
    null,
    null,
    null
  ]
  for (let i = 0; i < gearCount; i++) {
    gearErrors[i] = validateGearInput(gearInputs[i])
    if (!gearErrors[i].length) gears[i] = buildGear(gearInputs[i])
  }

  const errors: string[] = []
  for (let i = 0; i < gearCount; i++) {
    if (gearErrors[i].length) errors.push(`轮 ${i + 1} 参数非法：${gearErrors[i].join('；')}`)
  }

  // 中心位置：先按"标准或指定"中心距计算（无论是否匹配，轮坯都摆出来）
  const stdA = (i: number, j: number) => {
    const gi = gears[i],
      gj = gears[j]
    return gi && gj ? gi.pitchR + gj.pitchR : 0
  }
  const segDist: [number, number] = [
    centerDistances[0] ?? stdA(0, 1),
    centerDistances[1] ?? stdA(1, 2)
  ]
  const centers: [number, number, number] = [0, segDist[0], segDist[0] + segDist[1]]

  const segments: ChainSegment[] = []
  const segDefs: { index: 0 | 1; li: number; ri: number; used: boolean }[] = [
    { index: 0, li: 0, ri: 1, used: true },
    { index: 1, li: 1, ri: 2, used: mode === 'chain' }
  ]

  for (const def of segDefs) {
    if (!def.used) continue
    const gL = gears[def.li],
      gR = gears[def.ri]
    const reasons: string[] = []
    let rejected = false
    let mesh: MeshInfo

    if (!gL || !gR) {
      rejected = true
      reasons.push('齿轮参数非法，无法形成该段啮合')
      // 占位（不会被运动学使用）
      mesh = (gL && gR
        ? analyzeMesh({ g1: gL, g2: gR, centerDistance: segDist[def.index] })
        : null) as unknown as MeshInfo
    } else {
      reasons.push(...segmentReasons(gL, gR))
      rejected = reasons.length > 0
      // 即使被拒绝也计算参考几何（供尺寸显示），但运动学层严禁使用 rejected 段。
      mesh = analyzeMesh({ g1: gL, g2: gR, centerDistance: segDist[def.index] })
    }
    segments.push({
      index: def.index,
      leftIndex: def.li,
      rightIndex: def.ri,
      offsetX: centers[def.li],
      mesh,
      rejected,
      rejectReasons: reasons
    })
  }

  for (const seg of segments) {
    if (seg.rejected) errors.push(...seg.rejectReasons.map((r) => `段${seg.index + 1}：${r}`))
  }

  return {
    mode,
    gearCount,
    gears,
    gearErrors,
    centers,
    segments,
    valid: errors.length === 0,
    errors
  }
}

function requireValid(model: ChainModel) {
  if (!model.valid) throw new Error('传动链未形成（参数不匹配），无严格相位')
}

/**
 * 把段的理论 s 按基节折叠到当前真实接触齿对所在的实际啮合线段。
 * 基节取该段左轮（主动侧）值；匹配段两轮基节相等。
 */
function reduceSeg(model: ChainModel, segIndex: number, sRaw: number): number {
  const seg = model.segments.find((x) => x.index === segIndex)!
  const gLeft = model.gears[seg.leftIndex]!
  return reduceToAction(seg.mesh, sRaw, gLeft.basePitch)
}

// ---------------------------------------------------------------------------
// 严格相位运动学：所有姿态都由"沿真实啮合线的同一条渐开线接触"级联决定
// ---------------------------------------------------------------------------

/**
 * 由首端主动轮（轮1）本体转角求整链姿态。
 * 段A：s₁ 由 φ1 反解 → φ2（惰轮，严格）
 * 段B：s₂ 由 φ2 作为主动轮反解 → φ3（末轮，严格）
 *
 * 返回的 s 已按基节周期性折叠进各自的【实际啮合线段】：理论公式对任意 s 成立，
 * 但只有折叠后的 s 才对应当前真实接触的那一对齿（s 相差整数个基节 p_b 时，
 * 两轮本体转角恰差整周齿距角，姿态完全等价）。这样接触点/干涉检查不会落到
 * 不存在的延长渐开线上。
 */
export function poseFromMaster(model: ChainModel, phi1: number): ChainKinematics {
  requireValid(model)
  const segA = model.segments.find((s) => s.index === 0)!
  const g1 = model.gears[0]!
  const g2 = model.gears[1]!
  const s1Raw = solveSForDriver(segA.mesh, g1, phi1)
  const phi2 = gearAnglesAt(segA.mesh, g1, g2, s1Raw).phi2

  let s2Raw = 0
  let phi3 = 0
  if (model.mode === 'chain') {
    const segB = model.segments.find((s) => s.index === 1)!
    const g3 = model.gears[2]!
    // 惰轮在段B是左轮（主动侧）：同一个 φ2 必须同时满足两段严格相位
    s2Raw = solveSForDriver(segB.mesh, g2, phi2)
    // 姿态用连续 s（保证 rb·Δφ 严格）；接触标记只取折叠后的真实齿对
    phi3 = gearAnglesAt(segB.mesh, g2, g3, s2Raw).phi2
  }
  // 显示/检查用 s 折叠到当前真正接触的齿对（折叠不改变物理姿态）
  const s1 = reduceSeg(model, 0, s1Raw)
  const segB = model.segments.find((x) => x.index === 1)
  const s2 = segB ? reduceToAction(segB.mesh, s2Raw, g2.basePitch) : 0
  return { pose: [phi1, phi2, phi3], s: [s1, s2] }
}

/**
 * 暂停时沿指定段的啮合线拖动接触点，求整链姿态。
 *  - 段 A：φ1 由 s₁ 直接严格给出，φ2 随之；再级联段B → φ3
 *  - 段 B：φ2 由 s₂ 作为【主动轮侧】严格给出，φ3 随之；
 *          惰轮转角反推行至段A（惰轮是段A的【从动轮】）→ φ1
 * 无论拖哪一段，三个轮的姿态始终由两段真实啮合同时决定。
 * 滑块给出的 s 已在实际啮合线段内；另一段的 s 同样折叠到真实齿对。
 */
export function poseFromScrub(
  model: ChainModel,
  segIndex: 0 | 1,
  sValue: number
): ChainKinematics {
  requireValid(model)
  const segA = model.segments.find((s) => s.index === 0)!
  const g1 = model.gears[0]!
  const g2 = model.gears[1]!

  let phi1: number
  let phi2: number
  let s1: number
  let s2 = 0
  let phi3 = 0

  if (segIndex === 0) {
    const a = gearAnglesAt(segA.mesh, g1, g2, sValue)
    phi1 = a.phi1
    phi2 = a.phi2
    s1 = sValue
    if (model.mode === 'chain') {
      const segB = model.segments.find((s) => s.index === 1)!
      const g3 = model.gears[2]!
      const s2Raw = solveSForDriver(segB.mesh, g2, phi2)
      phi3 = gearAnglesAt(segB.mesh, g2, g3, s2Raw).phi2 // 连续 s，保证严格级联
      s2 = reduceToAction(segB.mesh, s2Raw, g2.basePitch)
    }
  } else {
    const segB = model.segments.find((s) => s.index === 1)!
    const g3 = model.gears[2]!
    const b = gearAnglesAt(segB.mesh, g2, g3, sValue)
    phi2 = b.phi1 // 惰轮是段B左轮（主动侧）
    phi3 = b.phi2
    s2 = sValue
    // 段A反向：惰轮是从动轮，由唯一的 φ2 反解连续 s₁ → φ1
    const s1Raw = solveSForDriven(segA.mesh, g2, phi2)
    phi1 = gearAnglesAt(segA.mesh, g1, g2, s1Raw).phi1
    s1 = reduceToAction(segA.mesh, s1Raw, g1.basePitch)
  }

  return { pose: [phi1, phi2, phi3], s: [s1, s2] }
}

export interface ChainRatio {
  /** 各段有向转角比 dφ右/dφ左 = −z左/z右 */
  segmentRatios: number[]
  /** 总速比 dφ末/dφ首；pair 为负，chain 为正（两次反转） */
  total: number
  /** 首末轮转向是否相同 */
  sameDirection: boolean
}

/** 总速比/方向：必须由两段外啮合关系相乘得到，不直接套末轮 */
export function chainRatio(model: ChainModel): ChainRatio {
  const segmentRatios = model.segments.map((seg) => {
    const zL = model.gears[seg.leftIndex]!.input.z
    const zR = model.gears[seg.rightIndex]!.input.z
    return -zL / zR
  })
  const total = segmentRatios.reduce((acc, r) => acc * r, 1)
  return { segmentRatios, total, sameDirection: total > 0 }
}

// ---------------------------------------------------------------------------
// 世界坐标辅助（段局部 → 世界）
// ---------------------------------------------------------------------------

/** 段局部点（左轮中心为原点）→ 世界坐标 */
export function segToWorld(seg: ChainSegment, p: Pt): Pt {
  return { x: p.x + seg.offsetX, y: p.y }
}

/** 接触点世界坐标（s 未折叠也可，几何公式对任意 s 成立） */
export function contactPointWorld(seg: ChainSegment, s: number): Pt {
  const m = seg.mesh
  const ap = m.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  return segToWorld(seg, {
    x: m.pitchPoint.x + s * nx,
    y: m.pitchPoint.y + s * ny
  })
}
