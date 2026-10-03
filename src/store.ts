/**
 * 案例（双轮对 / 含惰轮的三轮链参数 + 视图设置 + 检查结果）的持久化。
 *  - 使用 IndexedDB，纯浏览器本地，无后台；
 *  - 导出/导入为自描述 JSON，包含各轮轮廓（局部坐标，与相位无关），
 *    导入的轮廓可被重新载入并用于 Clipper 求交；
 *  - JSON 带 schema 版本号：v1（旧双轮案例）仍可载入，内部迁移为 v2 双轮模式，
 *    另存为三轮链后即升级为 v2；v2 原生支持三轮链。
 */
import type { LengthUnit } from './units'
import type { GearInput, Pt } from './geometry/gear'
import type { ChainMode } from './geometry/chain'

/** 当前 schema 版本（v2：三轮链 + 分段检查结果 + 暂停姿态） */
export const SCHEMA_VERSION = 2
/** 旧版本（一对外啮合齿轮） */
export const LEGACY_SCHEMA_VERSION = 1
export const DB_NAME = 'spur-gear-lab'
export const STORE = 'cases'

export type GearRecord = GearInput & { alphaDeg: number }

/** 单段在某暂停帧的局部干涉检查结果（面积与区域一并持久化，刷新/往返不丢失） */
export interface SegmentCheckRecord {
  /** 检查时该段接触参数 s（mm） */
  s: number
  /** 首端主动轮本体转角 φ1（整链姿态以此为锚点恢复） */
  phi1: number
  area: number
  /** 重叠区域（世界坐标多边形） */
  regions: Pt[][]
  checkedAt: number
}

export interface PoseRecord {
  /** 暂停时首端主动轮转角（弧度，未归一也可，恢复时重新级联） */
  phi1: number
  /** 当前选中的检查段 */
  activeSegment: 0 | 1
  /** 暂停时两段接触参数 s（显示用，姿态由 φ1 严格级联重建） */
  s: [number, number]
  paused: boolean
}

export interface CaseData {
  schemaVersion: number
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  /** 轮系模式：pair（双轮）| chain（三轮链，轮2 为惰轮） */
  mode: ChainMode
  /** 长度恒为 3；pair 模式 gear3 为占位（迁移时给安全默认值） */
  gear1: GearRecord
  gear2: GearRecord
  gear3: GearRecord
  /** 每段中心距（mm）；null = 标准中心距；pair 只用第一项 */
  centerDistance1: number | null
  centerDistance2: number | null
  unit: LengthUnit
  /** 暂停帧姿态（可缺省，缺省表示从 φ1=0 开始播放） */
  pose?: PoseRecord
  /** 各段最近一次 Clipper 干涉检查（键为段 index 的字符串） */
  checks?: Record<string, SegmentCheckRecord>
  /** 导出时附带的轮廓（各轮【局部】轮廓，与相位无关），供重新载入与核对 */
  outlines?: {
    gear1: Pt[]
    gear2: Pt[]
    gear3?: Pt[]
  }
}

/** v1 旧案例（仅一对外啮合齿轮） */
export interface LegacyCaseData {
  schemaVersion: 1
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  gear1: GearRecord
  gear2: GearRecord
  centerDistance: number | null
  unit: LengthUnit
  outlines?: {
    gear1: Pt[]
    gear2: Pt[]
  }
}

let dbPromise: Promise<IDBDatabase> | null = null

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' })
        store.createIndex('updatedAt', 'updatedAt')
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

function tx<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode)
        const req = fn(t.objectStore(STORE))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
  )
}

export async function saveCase(data: CaseData): Promise<void> {
  await tx('readwrite', (s) => s.put({ ...data, updatedAt: Date.now() }))
}

export async function deleteCase(id: string): Promise<void> {
  await tx('readwrite', (s) => s.delete(id))
}

export async function getCase(id: string): Promise<CaseData | undefined> {
  return tx<CaseData | undefined>('readonly', (s) => s.get(id))
}

export async function listCases(): Promise<CaseData[]> {
  const all = await tx<CaseData[]>('readonly', (s) => s.getAll() as IDBRequest<CaseData[]>)
  return [...all]
    .map((c) => (c.schemaVersion === LEGACY_SCHEMA_VERSION ? migrateLegacy(c as unknown as LegacyCaseData) : c))
    .sort((a, b) => b.updatedAt - a.updatedAt)
}

export function newCaseId(): string {
  return `case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/**
 * v1（一对外啮合齿轮）→ v2（双轮模式）。
 * 行为保持：载入后仍按原双轮实验运行；gear3 给与 gear1 相同的安全占位参数，
 * 用户切换为三轮链时直接可用并可另存为 v2 三轮链。
 */
export function migrateLegacy(old: LegacyCaseData): CaseData {
  return {
    schemaVersion: SCHEMA_VERSION,
    id: old.id,
    name: old.name,
    createdAt: old.createdAt,
    updatedAt: old.updatedAt,
    note: old.note,
    mode: 'pair',
    gear1: { ...old.gear1 },
    gear2: { ...old.gear2 },
    gear3: { ...old.gear1 },
    centerDistance1: old.centerDistance,
    centerDistance2: null,
    unit: old.unit || 'mm',
    outlines: old.outlines ? { gear1: old.outlines.gear1, gear2: old.outlines.gear2 } : undefined
  }
}

/** 序列化为可下载的 JSON 字符串（导出的轮廓可重新载入） */
export function serializeCase(data: CaseData): string {
  return JSON.stringify(data, null, 2)
}

function validateGearRecord(g: GearRecord, label: string) {
  if (!g || !(g.z >= 4) || !(g.module > 0) || !(g.alphaDeg > 0) || !(g.faceWidth > 0)) {
    throw new Error(`案例${label}参数不合法（z≥4, m>0, α>0, b>0）`)
  }
}

/** 解析并基本校验导入文件；v1 自动迁移；不通过则抛错 */
export function parseCase(text: string): CaseData {
  const obj = JSON.parse(text)
  if (!obj || typeof obj !== 'object') throw new Error('案例文件不是合法 JSON 对象')

  if (obj.schemaVersion === LEGACY_SCHEMA_VERSION) {
    const legacy = obj as LegacyCaseData
    if (!legacy.gear1 || !legacy.gear2) throw new Error('旧版案例缺少齿轮参数')
    validateGearRecord(legacy.gear1, '齿轮1')
    validateGearRecord(legacy.gear2, '齿轮2')
    return migrateLegacy(legacy)
  }
  if (obj.schemaVersion !== SCHEMA_VERSION) {
    throw new Error(`不支持的案例版本（需要 schemaVersion=${SCHEMA_VERSION}）`)
  }

  const data = obj as CaseData
  if (data.mode !== 'pair' && data.mode !== 'chain') throw new Error('案例模式字段非法（mode）')
  validateGearRecord(data.gear1, '齿轮1')
  validateGearRecord(data.gear2, '齿轮2')
  if (data.mode === 'chain') validateGearRecord(data.gear3, '齿轮3（惰轮之后）')
  if (data.checks) {
    for (const rec of Object.values(data.checks)) {
      if (!rec || !(rec.area >= 0) || !Array.isArray(rec.regions)) {
        throw new Error('案例中的分段检查结果损坏')
      }
    }
  }
  return data
}

/** 触发浏览器下载 */
export function downloadJson(data: CaseData) {
  const blob = new Blob([serializeCase(data)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const safe = (data.name || 'gear-case').replace(/[^\w一-龥-]+/g, '_')
  a.download = `${safe}.json`
  a.click()
  URL.revokeObjectURL(url)
}
