/**
 * 可配置的 2 轮 / 3 轮外啮合直齿轮传动链。
 *
 * 教学要点（惰轮为什么改变方向）：
 *  - 总速比与方向**不能**直接套到末轮，必须由两段真实啮合同时决定；
 *  - 三段中心在同一条轴线上：O1=(0,0)、O2=(a1,0)、O3=(a1+a2,0)；
 *    第二段是把"左啮合/右啮合"的局部布局平移到 O2 得到；
 *  - 每段独立满足：模数与压力角相同（基节相等）、严格相位（节点共法线、同一条渐开线）、
 *    接触线、实体干涉检查；
 *  - 姿态传播链：φ1 →（段1 严格反解 s1）→ φ2 →（段2 严格反解 s2）→ φ3。
 *    两次外啮合：φ2 与 φ1 反向、φ3 与 φ2 反向，故 φ3 与 φ1 同向，
 *    总速比 ω3/ω1 = (+) z1/z3，而符号来自"啮合次数为 2"，不是人为指定。
 *
 * 任一兼容性闸门失败时不返回"半成品"传动链（gears/stages 为空，只有错误信息）。
 */
import type { GearGeometry, GearInput, Pt } from './gear'
import { buildGear, validateGearInput } from './gear'
import {
  analyzeMesh,
  gearAnglesAt,
  invertContactS,
  invertContactSFromRight,
  type MeshInfo
} from './mesh'

export type TrainKind = 'pair' | 'idler'

/** 一个轮位的原始参数（index 0/1/2 = 轮1/惰轮/轮3；双轮模式只有 0、1） */
export interface TrainGearSpec extends GearInput {
  alphaDeg: number
}

export interface TrainSpec {
  kind: TrainKind
  gears: TrainGearSpec[]
  /** 各段实际中心距（mm）；null = 标准中心距 a0。长度 = 段数 */
  centerDistances: (number | null)[]
}

export interface StageView {
  /** 段索引 0=轮1–轮2(惰轮)，1=惰轮–轮3 */
  index: number
  info: MeshInfo
  /** 该段左轮在轮序列中的下标 */
  leftIndex: number
  /** 该段右轮在轮序列中的下标 */
  rightIndex: number
  /** 左轮中心（世界坐标，y=0） */
  cxLeft: number
  /** 右轮中心 */
  cxRight: number
  /** 当前帧该段接触线参数（相对本段节点，n 指向 +y） */
  s: number
}

export interface TrainModel {
  kind: TrainKind
  gears: GearGeometry[]
  centers: number[]
  stages: StageView[]
  /** 整体是否构成可用传动链（兼容 + 无齿顶交叉）；false 时上面三项可能不完整 */
  ok: boolean
  errors: string[]
  warnings: string[]
  /** 总速比信息（仅在 ok 时有意义） */
  total: {
    /** ω末/ω首，带符号（双轮为负，三轮为正：两次外啮合反向两次） */
    ratio: number
    /** 外啮合次数（2 或 1），方向符号 = (−1)^次数 */
    externalMeshCount: number
    /** 首末轮同向？ */
    sameDirection: boolean
    firstZ: number
    lastZ: number
  } | null
}

/** 基节匹配容差与 mesh 层一致 */
const PB_TOL = 1e-6

function pairCompatible(a: GearGeometry, b: GearGeometry): string | null {
  const dm = Math.abs(a.input.module - b.input.module)
  if (dm > 1e-9) return `模数不匹配：m=${a.input.module} ≠ m=${b.input.module}`
  const da = Math.abs(a.input.alpha - b.input.alpha)
  if (da > 1e-9) return `压力角不匹配：α=${(a.input.alpha * 180) / Math.PI}° ≠ α=${(b.input.alpha * 180) / Math.PI}°`
  if (Math.abs(a.basePitch - b.basePitch) > PB_TOL)
    return `基节不匹配：pb=${a.basePitch.toFixed(4)} ≠ ${b.basePitch.toFixed(4)}`
  return null
}

/**
 * 构造传动链。参数/兼容性不通过时返回 ok=false 且不附带任何半成品几何，
 * 防止 UI 用"总速比直接套末轮"之类的残缺模型继续演示。
 */
export function buildTrain(spec: TrainSpec): TrainModel {
  const errors: string[] = []
  const want = spec.kind === 'idler' ? 3 : 2
  if (spec.gears.length !== want)
    errors.push(`${spec.kind === 'idler' ? '三轮' : '双轮'}模式需要 ${want} 个轮位参数`)
  if (spec.centerDistances.length !== want - 1)
    errors.push('中心距配置段数与轮数不符')

  const geoms: GearGeometry[] = []
  spec.gears.forEach((sp, i) => {
    const errs = validateGearInput(sp)
    if (errs.length) {
      errors.push(`轮${i + 1}：${errs.join('；')}`)
      return
    }
    geoms.push(buildGear({ z: sp.z, module: sp.module, alpha: sp.alpha, faceWidth: sp.faceWidth }))
  })
  if (geoms.length !== want) return { kind: spec.kind, gears: [], centers: [], stages: [], ok: false, errors, warnings: [], total: null }

  // 每段兼容性闸门：任一失败就拒绝形成链条
  for (let i = 0; i < want - 1; i++) {
    const why = pairCompatible(geoms[i], geoms[i + 1])
    if (why) errors.push(`第 ${i + 1} 段（轮${i + 1}–轮${i + 2}）${why}，不能构成啮合`)
  }
  if (errors.length)
    return { kind: spec.kind, gears: [], centers: [], stages: [], ok: false, errors, warnings: [], total: null }

  // 中心距（默认标准）与布局
  const centers: number[] = [0]
  const infos: { info: MeshInfo; a: number }[] = []
  for (let i = 0; i < want - 1; i++) {
    const a0 = geoms[i].pitchR + geoms[i + 1].pitchR
    const a = spec.centerDistances[i] == null ? a0 : (spec.centerDistances[i] as number)
    if (!(a > 0) || !Number.isFinite(a)) {
      errors.push(`第 ${i + 1} 段中心距非法`)
      continue
    }
    infos.push({ info: analyzeMesh({ g1: geoms[i], g2: geoms[i + 1], centerDistance: a }), a })
    centers.push(centers[i] + a)
  }
  if (errors.length)
    return { kind: spec.kind, gears: [], centers: [], stages: [], ok: false, errors, warnings: [], total: null }

  const warnings: string[] = []
  const stages: StageView[] = infos.map((x, i) => {
    warnings.push(...x.info.warnings.map((w) => `第 ${i + 1} 段：${w}`))
    return {
      index: i,
      info: x.info,
      leftIndex: i,
      rightIndex: i + 1,
      cxLeft: centers[i],
      cxRight: centers[i] + x.a,
      s: 0
    }
  })

  const extCount = want - 1
  // 严格地说速比符号也由每段外啮合决定：(−1)^n；幅值只含首末齿数（惰轮约掉）
  const ratio = ((extCount % 2 === 0 ? 1 : -1) * geoms[0].input.z) / geoms[want - 1].input.z
  const ok = stages.every((st) => st.info.ok)

  return {
    kind: spec.kind,
    gears: geoms,
    centers,
    stages,
    ok,
    errors: [],
    warnings,
    total: {
      ratio,
      externalMeshCount: extCount,
      sameDirection: extCount % 2 === 0,
      firstZ: geoms[0].input.z,
      lastZ: geoms[want - 1].input.z
    }
  }
}

export interface TrainPose {
  /** 各轮本体转角（长度=轮数，世界姿态） */
  angles: number[]
  /** 各段当前接触线参数 */
  s: number[]
  /** 各段当前接触点世界坐标 */
  contacts: Pt[]
}

/**
 * 由首轮本体转角沿传动链**逐段严格啮合**求所有轮的姿态。
 * 绝不是把总速比直接乘到末轮：每一步都经 invertContactS（同一条渐开线）反解本段 s。
 */
export function poseFromFirst(model: TrainModel, phiFirst: number): TrainPose {
  const angles: number[] = [phiFirst]
  const sVals: number[] = []
  const contacts: Pt[] = []
  for (const st of model.stages) {
    const gL = model.gears[st.leftIndex]
    const gR = model.gears[st.rightIndex]
    const phiL = angles[st.leftIndex]
    const s = invertContactS(st.info, gL, phiL)
    sVals.push(s)
    const { phi2 } = gearAnglesAt(st.info, gL, gR, s)
    angles[st.rightIndex] = phi2
    // mesh 层 pitchPoint.x = rp1 已是相对本段左轮中心的 x，世界坐标只需再平移 cxLeft
    contacts.push({
      x: st.cxLeft + st.info.pitchPoint.x + s * Math.sin(st.info.alphaPrime),
      y: st.info.pitchPoint.y + s * Math.cos(st.info.alphaPrime)
    })
  }
  return { angles, s: sVals, contacts }
}

/**
 * 由任意一段接触线参数 s 反求全链姿态（暂停时拖动检查用）。
 * 先在该段内确定两轮本体角，再：
 *  - 向上游：用 invertContactSFromRight 经右轮角反解上一段 s，逐段回溯；
 *  - 向下游：用左轮角常规反解后续段 s。
 * 这样拖动第一段后第二段/末轮、拖动第二段后第一段/首轮都保持严格一致。
 */
export function poseFromStageS(model: TrainModel, stageIdx: number, sStage: number): TrainPose {
  const n = model.gears.length
  const angles = new Array<number>(n).fill(0)
  const sVals = new Array<number>(n - 1).fill(0)
  const st = model.stages[stageIdx]
  const gL = model.gears[st.leftIndex]
  const gR = model.gears[st.rightIndex]
  const pair = gearAnglesAt(st.info, gL, gR, sStage)
  angles[st.leftIndex] = pair.phi1
  angles[st.rightIndex] = pair.phi2
  sVals[stageIdx] = sStage

  // 下游传播（已知左轮角 → s → 右轮角）
  for (let i = stageIdx + 1; i < model.stages.length; i++) {
    const si = model.stages[i]
    const s = invertContactS(si.info, model.gears[si.leftIndex], angles[si.leftIndex])
    sVals[i] = s
    angles[si.rightIndex] = gearAnglesAt(si.info, model.gears[si.leftIndex], model.gears[si.rightIndex], s).phi2
  }
  // 上游回溯（已知右轮角 → s → 左轮角）
  for (let i = stageIdx - 1; i >= 0; i--) {
    const si = model.stages[i]
    const s = invertContactSFromRight(si.info, model.gears[si.rightIndex], angles[si.rightIndex])
    sVals[i] = s
    angles[si.leftIndex] = gearAnglesAt(si.info, model.gears[si.leftIndex], model.gears[si.rightIndex], s).phi1
  }

  const contacts = model.stages.map((sx, i) => {
    const ap = sx.info.alphaPrime
    return {
      x: sx.cxLeft + sx.info.pitchPoint.x + sVals[i] * Math.sin(ap),
      y: sx.info.pitchPoint.y + sVals[i] * Math.cos(ap)
    }
  })
  return { angles, s: sVals, contacts }
}

/** 某段接触线参数 s 的有效区间端点（实际啮合段），用于滑块限位/循环 */
export function stageSBounds(st: StageView): [number, number] {
  const m = st.info
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  // actionLine / pitchPoint 均为相对本段左轮中心的局部坐标，只需把线段端点平移，节点不必平移
  const lo = (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny
  const hi = (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  return [lo, hi]
}

/** 把 s 循环折叠进本段实际啮合区间（超出则进入下一齿啮合） */
export function wrapStageS(st: StageView, s: number): number {
  const [lo, hi] = stageSBounds(st)
  if (hi <= lo) return 0
  if (s < lo) return hi - ((lo - s) % (hi - lo))
  if (s > hi) return lo + ((s - hi) % (hi - lo))
  return s
}

/** 取某轮在当前姿态下的世界坐标轮廓（供 Clipper 实体干涉核验） */
export function worldOutline(model: TrainModel, pose: TrainPose, gearIdx: number): Pt[] {
  const g = model.gears[gearIdx]
  const phi = pose.angles[gearIdx]
  const c = Math.cos(phi),
    s = Math.sin(phi)
  const cx = model.centers[gearIdx]
  return g.outline.map((p) => ({ x: cx + p.x * c - p.y * s, y: p.x * s + p.y * c }))
}
