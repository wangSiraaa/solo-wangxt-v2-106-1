/**
 * 案例（2 轮或 3 轮传动链参数 + 视图设置 + 可选轮廓/检查结果）的持久化。
 *  - 使用 IndexedDB，纯浏览器本地，无后台；
 *  - 导出/导入为自描述 JSON，包含轮廓几何，导入的轮廓可被重新载入并用于 Clipper 求交；
 *  - JSON 带 schema 版本号：v2 为可配置传动链（双轮/三轮惰轮），v1 为旧双轮案例，
 *    导入时自动迁移为 v2 的双轮形态，行为与旧版完全一致。
 */
import type { LengthUnit } from './units'
import type { GearInput, Pt } from './geometry/gear'
import type { TrainKind, TrainSpec } from './geometry/train'

export const SCHEMA_VERSION = 2
/** 仍可读取并自动迁移的旧版本 */
const SUPPORTED_LEGACY = [1]
export const DB_NAME = 'spur-gear-lab'
export const STORE = 'cases'

export interface CaseGearInput extends GearInput {
  alphaDeg: number
}

/** 导出时附带的轮廓与已完成的检查结果（可直接用于 Clipper 核验，且相位不被重建） */
export interface CaseOutlines {
  /** 各轮【局部】闭合轮廓（与参数对应） */
  gears: Pt[][]
  /** 暂停帧局部干涉检查结果（世界坐标 + 当时各轮本体转角），原样保存/恢复 */
  interference?: StageInterference[]
}

export interface StageInterference {
  stageIndex: number
  /** 检查时刻各轮本体转角（用于把局部轮廓精确摆回原相位核验） */
  angles: number[]
  regions: Pt[][]
  area: number
}

export interface CaseData {
  schemaVersion: 2
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  kind: TrainKind
  gears: CaseGearInput[]
  /** 各段实际中心距 mm；null = 标准中心距 */
  centerDistances: (number | null)[]
  unit: LengthUnit
  /** 保存/导出时的暂停姿态（各轮本体转角）；导入刷新后严格复原 */
  pose?: number[]
  /** 当前被检查的啮合副段号 */
  selectedStage?: number
  /** 接触点滑块各段 s 值 */
  contactS?: number[]
  outlines?: CaseOutlines
}

/** 旧 v1 案例（仅双轮） */
interface CaseDataV1 {
  schemaVersion: 1
  id: string
  name: string
  createdAt: number
  updatedAt: number
  note: string
  gear1: CaseGearInput
  gear2: CaseGearInput
  centerDistance: number | null
  unit: LengthUnit
  outlines?: { gear1: Pt[]; gear2: Pt[] }
}

/** v1 双轮案例 → v2 双轮形态（参数、中心距、轮廓一一保留，行为不变） */
export function migrateV1(c: CaseDataV1): CaseData {
  return {
    schemaVersion: 2,
    id: c.id,
    name: c.name,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
    note: c.note,
    kind: 'pair',
    gears: [c.gear1, c.gear2],
    centerDistances: [c.centerDistance ?? null],
    unit: c.unit,
    outlines: c.outlines ? { gears: [c.outlines.gear1, c.outlines.gear2] } : undefined
  }
}

/** 案例 → 传动链规格（App 重建模型用） */
export function caseToSpec(c: CaseData): TrainSpec {
  return {
    kind: c.kind,
    gears: c.gears.map((g) => ({ ...g })),
    centerDistances: c.centerDistances.map((v) => v)
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
  const raw = await tx<CaseData | CaseDataV1 | undefined>('readonly', (s) => s.get(id))
  return raw ? normalizeCase(raw) : undefined
}

export async function listCases(): Promise<CaseData[]> {
  const all = await tx<unknown[]>('readonly', (s) => s.getAll() as IDBRequest<unknown[]>)
  return (all as (CaseData | CaseDataV1)[]).map(normalizeCase).sort((a, b) => b.updatedAt - a.updatedAt)
}

/** 读取/导入时统一把任何受支持版本规范化为 v2 */
export function normalizeCase(raw: unknown): CaseData {
  const obj = raw as { schemaVersion?: number }
  if (obj && obj.schemaVersion === SCHEMA_VERSION) return raw as CaseData
  if (obj && obj.schemaVersion === 1) return migrateV1(raw as CaseDataV1)
  throw new Error(
    `不支持的案例版本（得到 ${obj?.schemaVersion}，支持 v${SCHEMA_VERSION} 及迁移 v${SUPPORTED_LEGACY.join('/')}）`
  )
}

export function newCaseId(): string {
  return `case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/** 序列化为可下载的 JSON 字符串（导出的轮廓可重新载入） */
export function serializeCase(data: CaseData): string {
  return JSON.stringify(data, null, 2)
}

/** 解析并基本校验导入文件；不通过则抛错。v1 自动迁移 */
export function parseCase(text: string): CaseData {
  const obj = JSON.parse(text) as CaseData | CaseDataV1
  if (!obj || typeof obj !== 'object') throw new Error('案例文件内容为空')
  const v = obj.schemaVersion
  if (v !== SCHEMA_VERSION && !SUPPORTED_LEGACY.includes(v)) {
    throw new Error(`不支持的案例版本（得到 ${v}，需要 v${SCHEMA_VERSION} 或旧 v1）`)
  }
  const c = normalizeCase(obj)
  if (!Array.isArray(c.gears) || c.gears.length < 2) throw new Error('案例缺少齿轮参数')
  for (const g of c.gears) {
    if (!(g.z >= 4) || !(g.module > 0) || !(g.alphaDeg > 0)) {
      throw new Error('案例参数不合法（z≥4, m>0, α>0）')
    }
  }
  const want = c.kind === 'idler' ? 3 : 2
  if (c.gears.length !== want) throw new Error(`${c.kind === 'idler' ? '三轮' : '双轮'}案例轮位数应为 ${want}`)
  if (c.centerDistances.length !== want - 1) throw new Error('中心距段数与轮数不符')
  if (c.outlines && c.outlines.gears.length !== want) throw new Error('轮廓数与轮数不符')
  return c
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
