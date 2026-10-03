<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { actionBounds } from './geometry/mesh'
import {
  buildChain,
  chainRatio,
  poseFromMaster,
  poseFromScrub,
  type ChainModel,
  type ChainMode
} from './geometry/chain'
import { intersectOutlines } from './geometry/clipper'
import { GearViewer, type TrainViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  SCHEMA_VERSION,
  type CaseData,
  type GearRecord,
  type SegmentCheckRecord,
  downloadJson,
  listCases,
  newCaseId,
  parseCase,
  saveCase,
  deleteCase
} from './store'

// ------- 显示单位（内部全部 mm） -------
const unit = ref<LengthUnit>('mm')

// ------- 轮系参数（三个轮各管各的模数/压力角：不匹配必须被拒绝） -------
interface GearParam {
  z: number
  m: number // mm
  alphaDeg: number
  faceWidth: number // mm
}
const gearParams = reactive<[GearParam, GearParam, GearParam]>([
  { z: 20, m: 2, alphaDeg: 20, faceWidth: 10 },
  { z: 20, m: 2, alphaDeg: 20, faceWidth: 10 }, // 惰轮默认参数
  { z: 40, m: 2, alphaDeg: 20, faceWidth: 10 }
])

const mode = ref<ChainMode>('chain')
// 每段中心距：useStandard[i] 时取标准中心距
const useStandard = reactive<[boolean, boolean]>([true, true])
const centerDistance = reactive<[number, number]>([40, 60])

const model = shallowRef<ChainModel | null>(null)
/** 随案例导入的各轮局部轮廓（参数未被改动时优先使用；任何参数改动即清空） */
const outlineSnapshots = shallowRef<(Pt[] | null)[]>([null, null, null])

function gearInput(i: number) {
  const p = gearParams[i]
  return {
    z: Math.round(p.z),
    module: p.m,
    alpha: p.alphaDeg * DEG,
    faceWidth: p.faceWidth
  }
}

function rebuild() {
  const m = buildChain({
    mode: mode.value,
    gearInputs: [gearInput(0), gearInput(1), gearInput(2)],
    centerDistances: [
      useStandard[0] ? null : centerDistance[0],
      useStandard[1] ? null : centerDistance[1]
    ]
  })
  model.value = m
  return m
}

/** 实际参与的段定义（供模板/计算使用） */
const activeSegments = computed(() => model.value?.segments ?? [])

// ------- 单位输入辅助（数值随单位换算；内部 mm 不变） -------
const makeLen = (get: () => number, set: (v: number) => void) =>
  computed({
    get: () => fromMm(get(), unit.value),
    set: (v: number) => set(toMm(v, unit.value))
  })
// 放进 reactive 数组：模板中 mInputs[i] 自动解包为数值，且 v-model 回写走 computed setter
const mInputs = reactive(
  gearParams.map((p) => makeLen(() => p.m, (v) => (p.m = v)))
)
const faceInputs = reactive(
  gearParams.map((p) => makeLen(() => p.faceWidth, (v) => (p.faceWidth = v)))
)
const centerInputs = reactive([
  makeLen(() => centerDistance[0], (v) => (centerDistance[0] = v)),
  makeLen(() => centerDistance[1], (v) => (centerDistance[1] = v))
])

// ------- 动画 / 暂停姿态 -------
const playing = ref(true)
const phi1 = ref(0) // 首端主动轮转角（整链唯一的运动学锚点）
const speed = ref(0.25) // rad/s（轮1）
let lastT = 0
/** 两段当前接触参数 s（由严格相位求出，显示前折叠进实际啮合段） */
const contactS = reactive<[number, number]>([0, 0])
const selectedSegment = ref<0 | 1>(0)

const showOpts = reactive({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true
})

// ------- 每段局部干涉检查（Clipper2 WASM） -------
interface CheckState {
  area: number | null
  regions: Pt[][]
  busy: boolean
}
const checksState: [CheckState, CheckState] = reactive([
  { area: null, regions: [], busy: false },
  { area: null, regions: [], busy: false }
]) as unknown as [CheckState, CheckState]
let interfereReq: [number, number] = [0, 0]

function outlineOf(i: number, g: GearGeometry): Pt[] {
  return outlineSnapshots.value[i] ?? g.outline
}

/**
 * 在当前暂停帧对指定啮合副做实体求交。
 * 两个轮廓均按该段真实中心距与【严格级联姿态】变换到世界坐标——
 * 不是把总速比直接套到末轮。
 */
async function checkInterference(segIndex: 0 | 1) {
  const m = model.value
  if (!m || !m.valid) return
  const seg = m.segments.find((s) => s.index === segIndex)
  if (!seg) return
  const gL = m.gears[seg.leftIndex]!
  const gR = m.gears[seg.rightIndex]!
  const kin = poseFromMaster(m, phi1.value)
  const phiL = kin.pose[seg.leftIndex]
  const phiR = kin.pose[seg.rightIndex]
  const oL = [transformOutline(outlineOf(seg.leftIndex, gL), m.centers[seg.leftIndex], 0, phiL)]
  const oR = [transformOutline(outlineOf(seg.rightIndex, gR), m.centers[seg.rightIndex], 0, phiR)]

  const req = ++interfereReq[segIndex]
  checksState[segIndex].busy = true
  try {
    const res = await intersectOutlines(oL, oR)
    if (req !== interfereReq[segIndex]) return
    checksState[segIndex].area = res.area
    checksState[segIndex].regions = res.regions
  } finally {
    if (req === interfereReq[segIndex]) checksState[segIndex].busy = false
  }
}

// ------- Three.js 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

function buildOverlay(): TrainViewerOptions | null {
  const m = model.value
  if (!m) return null
  const segments: TrainViewerOptions['segments'] = {}
  for (const seg of m.segments) {
    if (seg.rejected) continue
    segments[seg.index] = {
      showActionLine: showOpts.showActionLine,
      showContact: showOpts.showContact,
      contactS: contactS[seg.index],
      regions: checksState[seg.index].regions,
      active: seg.index === selectedSegment.value
    }
  }
  return { ...showOpts, segments }
}

function pushOverlay() {
  const ov = buildOverlay()
  if (viewer && model.value && ov) viewer.setChainOverlay(model.value, ov)
}

function syncViewerTrain() {
  const m = model.value
  if (!viewer || !m) return
  const list = m.gears.slice(0, m.gearCount)
  viewer.setTrain(list, m.centers)
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  syncViewerTrain()

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    const m = model.value
    if (m?.valid) {
      if (playing.value) {
        phi1.value += speed.value * dt
        // 归一到首端轮一个齿距周期，避免数值增长
        const period = (2 * Math.PI) / m.gears[0]!.input.z
        phi1.value = ((phi1.value % period) + period) % period
      }
      // 任何暂停时刻：三轮姿态由两段真实啮合【同时】严格决定
      const kin = poseFromMaster(m, phi1.value)
      viewer!.setAngles(kin.pose)
      for (const seg of m.segments) {
        if (seg.rejected) continue
        contactS[seg.index] = kin.s[seg.index]
      }
      pushOverlay()
    } else {
      viewer!.setAngles([0, 0, 0])
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

// 参数改动：重建模型、清空旧检查与轮廓快照（防止错误相位/过期轮廓被复用）
// 载入案例时由 loadCase 自行重建并注入随载轮廓，需临时抑制（否则会清掉导入轮廓）。
let suppressParamWatch = false
watch(
  () => [
    mode.value,
    JSON.stringify(gearParams),
    useStandard[0],
    useStandard[1],
    centerDistance[0],
    centerDistance[1]
  ],
  () => {
    if (suppressParamWatch) return
    outlineSnapshots.value = [null, null, null]
    rebuild()
    syncViewerTrain()
    phi1.value = 0
    contactS[0] = 0
    contactS[1] = 0
    checksState[0].area = null
    checksState[0].regions = []
    checksState[1].area = null
    checksState[1].regions = []
  }
)

watch(showOpts, pushOverlay, { deep: true })
watch(selectedSegment, pushOverlay)

// ------- 暂停 / 继续 / 沿啮合线拖动 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/**
 * 暂停时拖动【选中段】接触位置：
 * 以该段 s 为输入严格反推整链姿态（段B 反推时惰轮为从动侧），
 * 第二段与末轮相位随之保持一致，而不是只动一对。
 */
function scrubContact() {
  const m = model.value
  if (playing.value || !m?.valid) return
  const kin = poseFromScrub(m, selectedSegment.value, contactS[selectedSegment.value])
  phi1.value = kin.pose[0]
  viewer?.setAngles(kin.pose)
  for (const seg of m.segments) {
    contactS[seg.index] = kin.s[seg.index]
  }
  pushOverlay()
}

function selectSegment(i: 0 | 1) {
  selectedSegment.value = i
}

// ------- 派生显示 -------
const ratioInfo = computed(() => (model.value?.valid ? chainRatio(model.value) : null))

/** 选中段接触滑块范围（实际啮合线段） */
const sBounds = computed<[number, number]>(() => {
  const m = model.value
  const seg = m?.segments.find((s) => s.index === selectedSegment.value)
  if (!seg || seg.rejected) return [-30, 30]
  const [lo, hi] = actionBounds(seg.mesh)
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

// 预设样本
function presetPair(z1: number, z2: number, m = 2, alphaDeg = 20) {
  mode.value = 'pair'
  gearParams[0] = { z: z1, m, alphaDeg, faceWidth: 10 }
  gearParams[1] = { z: z2, m, alphaDeg, faceWidth: 10 }
  gearParams[2] = { z: z1, m, alphaDeg, faceWidth: 10 }
  useStandard[0] = true
}
function presetChain(z1: number, z2: number, z3: number, m = 2, alphaDeg = 20) {
  mode.value = 'chain'
  gearParams[0] = { z: z1, m, alphaDeg, faceWidth: 10 }
  gearParams[1] = { z: z2, m, alphaDeg, faceWidth: 10 }
  gearParams[2] = { z: z3, m, alphaDeg, faceWidth: 10 }
  useStandard[0] = true
  useStandard[1] = true
}
/** 演示"拒绝半成品链"：中间惰轮模数不一致 */
function presetMismatch() {
  mode.value = 'chain'
  gearParams[0] = { z: 20, m: 2, alphaDeg: 20, faceWidth: 10 }
  gearParams[1] = { z: 20, m: 2.5, alphaDeg: 20, faceWidth: 10 }
  gearParams[2] = { z: 40, m: 2, alphaDeg: 20, faceWidth: 10 }
  useStandard[0] = true
  useStandard[1] = true
}

// ------- 案例库（schema v2，兼容旧双轮案例） -------
const cases = ref<CaseData[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')

async function refreshCases() {
  cases.value = await listCases()
}
onMounted(refreshCases)

function records(): [GearRecord, GearRecord, GearRecord] {
  return [0, 1, 2].map((i) => ({
    z: Math.round(gearParams[i].z),
    module: gearParams[i].m,
    alpha: gearParams[i].alphaDeg * DEG,
    alphaDeg: gearParams[i].alphaDeg,
    faceWidth: gearParams[i].faceWidth
  })) as [GearRecord, GearRecord, GearRecord]
}

function currentCaseData(withOutlines: boolean): CaseData {
  const m = model.value
  const [r1, r2, r3] = records()
  // 保存最近一次暂停帧与两段检查结果：刷新/往返后惰轮参数、检查结果与姿态不丢失
  const checks: Record<string, SegmentCheckRecord> = {}
  if (m?.valid) {
    for (const seg of m.segments) {
      const st = checksState[seg.index]
      if (st.area !== null) {
        checks[String(seg.index)] = {
          s: contactS[seg.index],
          phi1: phi1.value,
          area: st.area,
          regions: st.regions,
          checkedAt: Date.now()
        }
      }
    }
  }
  const data: CaseData = {
    schemaVersion: SCHEMA_VERSION,
    id: newCaseId(),
    name: caseName.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    note: caseNote.value,
    mode: mode.value,
    gear1: r1,
    gear2: r2,
    gear3: r3,
    centerDistance1: useStandard[0] || !m ? null : m.segments.find((s) => s.index === 0)!.mesh.a,
    centerDistance2:
      mode.value === 'chain' && !useStandard[1] && m
        ? m.segments.find((s) => s.index === 1)!.mesh.a
        : null,
    unit: unit.value,
    pose: {
      phi1: phi1.value,
      activeSegment: selectedSegment.value,
      s: [contactS[0], contactS[1]],
      paused: !playing.value
    },
    checks: Object.keys(checks).length ? checks : undefined
  }
  if (withOutlines && m) {
    // 优先随载轮廓（来自导入），否则用当前模型生成；始终是各轮【局部】轮廓。
    // 仅在该轮几何存在（输入合法）时附带，避免坏参数下崩溃。
    const pick = (i: number) => (m.gears[i] ? outlineOf(i, m.gears[i]!) : undefined)
    data.outlines = {
      gear1: pick(0)!,
      gear2: pick(1)!,
      gear3: mode.value === 'chain' ? pick(2) : undefined
    }
  }
  return data
}

async function saveCurrent(withOutlines: boolean) {
  await saveCase(currentCaseData(withOutlines))
  await refreshCases()
}

function exportCase(withOutlines: boolean) {
  downloadJson(currentCaseData(withOutlines))
}

function applyRecord(i: number, r: GearRecord) {
  gearParams[i].z = r.z
  gearParams[i].m = r.module
  gearParams[i].alphaDeg = r.alphaDeg
  gearParams[i].faceWidth = r.faceWidth
}

async function loadCase(c: CaseData) {
  // 旧双轮案例（parseCase 已迁移为 mode='pair'）按原行为运行
  suppressParamWatch = true
  mode.value = c.mode
  applyRecord(0, c.gear1)
  applyRecord(1, c.gear2)
  applyRecord(2, c.gear3)
  if (c.centerDistance1 == null) {
    useStandard[0] = true
  } else {
    useStandard[0] = false
    centerDistance[0] = c.centerDistance1
  }
  if (c.centerDistance2 == null) {
    useStandard[1] = true
  } else {
    useStandard[1] = false
    centerDistance[1] = c.centerDistance2
  }
  unit.value = c.unit || 'mm'
  caseName.value = c.name
  caseNote.value = c.note
  outlineSnapshots.value = [
    c.outlines?.gear1 ?? null,
    c.outlines?.gear2 ?? null,
    c.outlines?.gear3 ?? null
  ]

  const m = rebuild()
  syncViewerTrain()

  // 恢复两段检查结果（面积 + 世界坐标区域）；姿态由保存的 φ1 重新严格级联
  checksState[0].area = c.checks?.['0']?.area ?? null
  checksState[0].regions = c.checks?.['0']?.regions ?? []
  checksState[1].area = c.checks?.['1']?.area ?? null
  checksState[1].regions = c.checks?.['1']?.regions ?? []

  selectedSegment.value = c.pose?.activeSegment ?? 0
  phi1.value = c.pose?.phi1 ?? 0
  playing.value = c.pose ? !c.pose.paused : true
  if (m?.valid) {
    const kin = poseFromMaster(m, phi1.value)
    viewer?.setAngles(kin.pose)
    for (const seg of m.segments) contactS[seg.index] = kin.s[seg.index]
  }
  pushOverlay()
  // 等本轮参数 watcher 冲掉后再放开（此后用户改动才清空随载轮廓）
  await nextTick()
  suppressParamWatch = false
}

async function removeCase(id: string) {
  await deleteCase(id)
  await refreshCases()
}

function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const c = parseCase(String(reader.result))
      await saveCase(c)
      await loadCase(c)
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

/** 旧双轮案例扩展为三轮链：轮3 默认复制轮1 参数（可再改），不保存直到用户主动另存 */
async function extendCurrentToChain(c: CaseData) {
  suppressParamWatch = true
  mode.value = 'chain'
  applyRecord(0, c.gear1)
  applyRecord(1, c.gear2)
  applyRecord(2, { ...c.gear1 })
  useStandard[0] = c.centerDistance1 == null
  useStandard[1] = true
  outlineSnapshots.value = [
    c.outlines?.gear1 ?? null,
    c.outlines?.gear2 ?? null,
    null
  ]
  rebuild()
  syncViewerTrain()
  phi1.value = 0
  playing.value = true
  contactS[0] = 0
  contactS[1] = 0
  checksState[0].area = null
  checksState[0].regions = []
  checksState[1].area = null
  checksState[1].regions = []
  await nextTick()
  suppressParamWatch = false
}

function caseSummary(c: CaseData) {
  const zs = c.mode === 'chain' ? `${c.gear1.z}/${c.gear2.z}/${c.gear3.z}` : `${c.gear1.z}/${c.gear2.z}`
  const tag = c.schemaVersion === SCHEMA_VERSION ? '' : `（旧v${c.schemaVersion}）`
  return `${zs} · m=${c.gear1.module} · α=${c.gear1.alphaDeg}°${c.outlines ? ' · 含轮廓' : ''}${tag}`
}

// 模板辅助
const gearLabels = ['轮1（主动）', '轮2（惰轮）', '轮3（末轮）']
const segLabels = ['啮合副 A：轮1–轮2', '啮合副 B：轮2–轮3']
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮传动链实验室</h1>
      <div class="sub">
        外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）——惰轮为何改变方向：两段真实啮合同时决定
      </div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>轮系模式</h2>
          <div class="units">
            <button :class="{ active: mode === 'chain' }" @click="mode = 'chain'">三轮链（含惰轮）</button>
            <button :class="{ active: mode === 'pair' }" @click="mode = 'pair'">一对齿轮（旧实验）</button>
          </div>
        </section>

        <section>
          <h2>显示单位（不改变实际尺寸）</h2>
          <div class="units">
            <button v-for="u in Object.keys(UNITS)" :key="u" :class="{ active: unit === u }" @click="unit = u as LengthUnit">
              {{ UNITS[u as LengthUnit].label }}
            </button>
          </div>
        </section>

        <section>
          <h2>齿轮参数（模数/压力角各轮独立，不匹配将拒绝成链）</h2>
          <div v-for="i in (mode === 'chain' ? 3 : 2)" :key="i" class="gearcard">
            <div class="gearhead">{{ gearLabels[i - 1] }}</div>
            <div class="two">
              <label>z
                <input type="number" v-model.number="gearParams[i - 1].z" min="4" step="1" />
              </label>
              <label>m（{{ UNITS[unit].label }}）
                <input type="number" v-model.number="mInputs[i - 1]" :step="UNITS[unit].step" />
              </label>
            </div>
            <div class="two">
              <label>α（度）
                <input type="number" v-model.number="gearParams[i - 1].alphaDeg" min="1" max="45" step="0.5" />
              </label>
              <label>b（{{ UNITS[unit].label }}）
                <input type="number" v-model.number="faceInputs[i - 1]" :step="UNITS[unit].step" />
              </label>
            </div>
            <div v-if="model?.gearErrors[i - 1]?.length" class="err">{{ model.gearErrors[i - 1].join('；') }}</div>
            <div v-if="model?.gears[i - 1]?.undercut" class="warn-text">
              ⚠️ z={{ gearParams[i - 1].z }} 低于 {{ model.gears[i - 1]!.zMinValue.toFixed(1) }}，根切风险（根部仅教学近似）
            </div>
          </div>
        </section>

        <section>
          <h2>各段中心距（独立）</h2>
          <template v-for="seg in activeSegments" :key="seg.index">
            <label class="row">
              <input type="checkbox" v-model="useStandard[seg.index]" />
              {{ segLabels[seg.index] }}：用标准中心距 a₀ = m(z左+z右)/2
            </label>
            <label v-if="!useStandard[seg.index]">实际中心距 a（{{ UNITS[unit].label }}）
              <input type="number" v-model.number="centerInputs[seg.index]" :step="UNITS[unit].step" />
            </label>
            <div v-if="seg.rejected" class="err">{{ seg.rejectReasons.join('；') }}</div>
          </template>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing || !model?.valid">暂停</button>
            <button @click="resume" :disabled="playing || !model?.valid">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>

          <div v-if="mode === 'chain'" class="segselect">
            <button v-for="i in [0,1]" :key="i"
              :class="{ active: selectedSegment === i }"
              @click="selectSegment(i as 0 | 1)">
              检查{{ i === 0 ? '副 A' : '副 B' }}
            </button>
          </div>

          <label>接触点沿{{ mode === 'chain' ? (selectedSegment === 0 ? '副 A' : '副 B') : '啮合线' }} s（mm，暂停可拖动）
            <input type="range" :disabled="playing || !model?.valid"
              v-model.number="contactS[selectedSegment]"
              :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>

          <div v-for="seg in activeSegments" :key="'chk' + seg.index">
            <button class="wide" @click="checkInterference(seg.index)"
              :disabled="playing || !model?.valid || checksState[seg.index].busy">
              {{ checksState[seg.index].busy ? 'Clipper 求交中…' : `在当前帧检查${seg.index === 0 ? '副 A' : '副 B'}实体干涉（Clipper2）` }}
            </button>
            <div v-if="checksState[seg.index].area !== null" class="report">
              {{ seg.index === 0 ? '副 A' : '副 B' }} 重叠面积 = {{ checksState[seg.index].area!.toExponential(3) }} mm²
              <b :class="checksState[seg.index].area! > 1e-6 ? 'bad' : 'good'">
                {{ checksState[seg.index].area! > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
              </b>
            </div>
          </div>

          <div v-if="model && !model.valid" class="err chain-err">
            传动链未形成（拒绝半成品）：<br />
            <span v-for="(e, i) in model.errors" :key="i">• {{ e }}<br /></span>
            请让每段两轮模数、压力角分别相等。
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（两段同时）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点（两段同时）</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="presetChain(20,20,40)">链 20/20/40 标准</button>
            <button @click="presetChain(20,30,40)">链 20/30/40</button>
            <button @click="presetMismatch()">链 m 不匹配（拒绝）</button>
            <button @click="presetPair(20,40)">对 20/40 标准</button>
            <button @click="presetPair(16,40)">对 16/40 根切</button>
          </div>
        </section>
      </aside>

      <section class="viewport">
        <div ref="host" class="canvas-host"></div>

        <div class="readouts">
          <div v-if="model" class="dim-grid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th v-for="i in model.gearCount" :key="i">
                    {{ gearLabels[i - 1] }}（z={{ gearParams[i - 1].z }}）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr><td>模数 m</td>
                  <td v-for="i in model.gearCount" :key="'m'+i">{{ fmt(gearParams[i-1].m) }}</td></tr>
                <tr><td>分度圆直径 d</td>
                  <td v-for="i in model.gearCount" :key="'d'+i">{{ model.gears[i-1] ? fmt(model.gears[i-1]!.pitchR * 2) : '—' }}</td></tr>
                <tr><td>基圆直径 d_b</td>
                  <td v-for="i in model.gearCount" :key="'db'+i">{{ model.gears[i-1] ? fmt(model.gears[i-1]!.baseR * 2) : '—' }}</td></tr>
                <tr><td>齿顶圆 d_a</td>
                  <td v-for="i in model.gearCount" :key="'da'+i">{{ model.gears[i-1] ? fmt(model.gears[i-1]!.addendumR * 2) : '—' }}</td></tr>
                <tr><td>齿根圆 d_f</td>
                  <td v-for="i in model.gearCount" :key="'df'+i">{{ model.gears[i-1] ? fmt(model.gears[i-1]!.dedendumR * 2) : '—' }}</td></tr>
                <tr><td>基节 p_b = πm·cosα</td>
                  <td v-for="i in model.gearCount" :key="'pb'+i">{{ model.gears[i-1] ? fmt(model.gears[i-1]!.basePitch) : '—' }}</td></tr>
                <tr><td>根切风险</td>
                  <td v-for="i in model.gearCount" :key="'uc'+i"
                    :class="model.gears[i-1]?.undercut ? 'bad' : 'good'">
                    {{ model.gears[i-1] ? (model.gears[i-1]!.undercut ? '根切 ❗' : '安全') : '—' }}
                  </td></tr>
              </tbody>
            </table>

            <div v-if="ratioInfo" class="mesh-report">
              <h3>轮系速比（由各段外啮合关系相乘，非直接套末轮）</h3>
              <div v-for="(seg, k) in activeSegments" :key="'r'+seg.index">
                段{{ seg.index + 1 }} 有向速比 Δφ右/Δφ左 = −z左/z右 =
                <b>{{ ratioInfo.segmentRatios[k].toFixed(4) }}</b>
              </div>
              <div>总速比 Δφ末/Δ首 = <b>{{ ratioInfo.total.toFixed(4) }}</b>
                （= {{ ratioInfo.segmentRatios.map(r => r.toFixed(3)).join(' × ') }}）
              </div>
              <div>首末轮转向：
                <b :class="ratioInfo.sameDirection ? 'good' : 'bad'">
                  {{ mode === 'chain' ? (ratioInfo.sameDirection ? '相同 ✅（两次外啮合，方向反转两次）' : '相反') : '相反 ✅（一次外啮合）' }}
                </b>
              </div>
            </div>

            <div v-for="seg in activeSegments" :key="'rep'+seg.index"
              class="mesh-report" :class="{ dimmed: mode === 'chain' && selectedSegment !== seg.index }">
              <h3>{{ segLabels[seg.index] }} 啮合检查</h3>
              <template v-if="!seg.rejected">
                <div>标准中心距 a₀：<b>{{ fmt(seg.mesh.a0) }}</b></div>
                <div>实际中心距 a：<b>{{ fmt(seg.mesh.a) }}</b>（Δa = {{ fmt(seg.mesh.deltaA) }}）</div>
                <div>啮合角 α′：<b>{{ (seg.mesh.alphaPrime / DEG).toFixed(3) }}°</b></div>
                <div>节圆半径 r左′/r右′：<b>{{ fmt(seg.mesh.pitchR1) }} / {{ fmt(seg.mesh.pitchR2) }}</b></div>
                <div>实际啮合线长度 g_α：<b>{{ fmt(seg.mesh.pathOfContact) }}</b></div>
                <div>重合度 ε_α：
                  <b :class="seg.mesh.contactRatio < 1 ? 'bad' : 'good'">{{ seg.mesh.contactRatio.toFixed(3) }}</b>
                </div>
                <div>圆周/法向侧隙：<b>{{ fmt(seg.mesh.backlashTangential) }} / {{ fmt(seg.mesh.backlashNormal) }}</b></div>
                <div>顶隙 c：<b>{{ fmt(seg.mesh.clearance12) }}</b></div>
                <div>基节一致：
                  <b :class="seg.mesh.basePitchMatch ? 'good' : 'bad'">{{ seg.mesh.basePitchMatch ? '是 ✅' : '否 ❌' }}</b>
                </div>
                <ul v-if="seg.mesh.warnings.length" class="warns">
                  <li v-for="(w, i) in seg.mesh.warnings" :key="i">⚠️ {{ w }}</li>
                </ul>
              </template>
            </div>

            <div class="formula">
              每段严格相位：t左=tanα′+s/rb左，t右=tanα′−s/rb右；rb左·Δφ左 = −rb右·Δφ右。
              惰轮只有一个本体转角，必须同时满足两段；故末轮姿态由 φ₁→s₁→φ₂→s₂→φ₃ 严格级联得到。
            </div>
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>案例（IndexedDB，schema v{{ SCHEMA_VERSION }}）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveCurrent(true)">保存（含轮廓）</button>
            <button @click="saveCurrent(false)">仅参数</button>
          </div>
          <div class="row">
            <button @click="exportCase(true)">导出 JSON+轮廓</button>
            <button @click="exportCase(false)">导出参数</button>
          </div>
          <label class="wide filebtn">导入 JSON（旧双轮案例自动迁移）
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
        </section>
        <section>
          <h2>已存案例</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.id">
              <div class="ci">
                <b>{{ c.name }}</b>
                <span>{{ c.mode === 'chain' ? '三轮链' : '双轮' }} · {{ caseSummary(c) }}</span>
                <span v-if="c.checks && Object.keys(c.checks).length" class="chk-tag">
                  含{{ Object.keys(c.checks).length }}段检查
                </span>
              </div>
              <div class="ca">
                <button @click="loadCase(c)">载入</button>
                <button v-if="c.mode === 'pair'" title="复制为三轮链（轮3 默认复制轮1，需主动另存）"
                  @click="extendCurrentToChain(c)">扩为三轮链</button>
                <button class="del" @click="removeCase(c.id)">删</button>
              </div>
            </li>
            <li v-if="!cases.length" class="empty">暂无案例</li>
          </ul>
        </section>
      </aside>
    </main>
  </div>
</template>
