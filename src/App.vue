<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { DEG, transformOutline, type Pt } from './geometry/gear'
import { intersectOutlines } from './geometry/clipper'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  type CaseData,
  type CaseGearInput,
  type StageInterference,
  downloadJson,
  listCases,
  newCaseId,
  parseCase,
  saveCase,
  deleteCase
} from './store'
import {
  buildTrain,
  poseFromFirst,
  poseFromStageS,
  stageSBounds,
  wrapStageS,
  type TrainKind,
  type TrainModel,
  type TrainPose
} from './geometry/train'

// ------- 全局 -------
const unit = ref<LengthUnit>('mm')
const kind = ref<TrainKind>('pair')

interface EditableGear {
  z: number
  module: number // mm
  alphaDeg: number
  faceWidth: number // mm
}
// 始终保留 3 个槽位；双轮模式只用前两个，切换到三轮时第三个参数还在
const specs = reactive<EditableGear[]>([
  { z: 20, module: 2, alphaDeg: 20, faceWidth: 10 },
  { z: 40, module: 2, alphaDeg: 20, faceWidth: 10 },
  { z: 30, module: 2, alphaDeg: 20, faceWidth: 10 }
])
/** 各段是否使用标准中心距 */
const stageStd = reactive<boolean[]>([true, true])
/** 非标准时各段实际中心距（mm） */
const stageCenter = reactive<number[]>([60, 70])

const gearErrors = ref<string[][]>([[], [], []])
const chainErrors = ref<string[]>([])
const model = shallowRef<TrainModel | null>(null)

/** 载入案例时带来的轮廓（局部坐标）；参数改动后清空，回退到按参数重建 */
let storedOutlines: Pt[][] | null = null
let editingId: string | null = null
/** 载入案例过程中抑制参数 watcher（避免它清掉随案例载入的轮廓/ID 并重复重建） */
let applyingCase = false

function activeCount() {
  return kind.value === 'idler' ? 3 : 2
}

function rebuild() {
  const n = activeCount()
  const gears = specs.slice(0, n).map<CaseGearInput>((g) => ({
    z: Math.round(g.z),
    module: g.module,
    alpha: g.alphaDeg * DEG,
    alphaDeg: g.alphaDeg,
    faceWidth: g.faceWidth
  }))
  const centerDistances = []
  for (let i = 0; i < n - 1; i++) {
    if (stageStd[i]) centerDistances.push(null)
    else centerDistances.push(stageCenter[i])
  }
  const m = buildTrain({ kind: kind.value, gears, centerDistances })
  gearErrors.value = [
    specs[0] ? validateOne(0) : [],
    specs[1] ? validateOne(1) : [],
    n === 3 ? validateOne(2) : []
  ]
  if (m.ok) {
    model.value = m
    chainErrors.value = []
    // 非标准中心距输入框回填实际标准值作参考
    for (let i = 0; i < m.stages.length; i++) {
      if (stageStd[i]) stageCenter[i] = m.stages[i].info.a0
    }
  } else {
    // 拒绝形成半成品链条：视图清空，只显示原因
    model.value = null
    chainErrors.value = m.errors
    viewer?.setTrain([], [])
    return
  }
  viewer?.setTrain(m.gears, m.centers)
  selectedStage.value = Math.min(selectedStage.value, m.stages.length - 1)
  phiFirst.value = 0
  pose.value = poseFromFirst(m, 0)
  scrubS.value = pose.value.s[selectedStage.value] ?? 0
  interferenceResults.value = m.stages.map(() => null)
}

function validateOne(i: number): string[] {
  const g = specs[i]
  const errs: string[] = []
  if (!Number.isFinite(g.z) || g.z < 4 || Math.abs(g.z - Math.round(g.z)) > 1e-9)
    errs.push('齿数须为 ≥4 的整数')
  if (!(g.module > 0) || !Number.isFinite(g.module)) errs.push('模数须 > 0')
  if (!(g.alphaDeg > 0) || g.alphaDeg >= 90) errs.push('压力角须在 (0°,90°)')
  if (!(g.faceWidth > 0)) errs.push('齿宽须 > 0')
  return errs
}

// ------- 单位输入辅助（内部恒为 mm） -------
function mmField(i: number, key: 'module' | 'faceWidth') {
  return computed({
    get: () => fromMm(specs[i][key], unit.value),
    set: (v: number) => (specs[i][key] = toMm(v, unit.value))
  })
}
function stageCenterField(i: number) {
  return computed({
    get: () => fromMm(stageCenter[i], unit.value),
    set: (v: number) => (stageCenter[i] = toMm(v, unit.value))
  })
}
const mFields = [mmField(0, 'module'), mmField(1, 'module'), mmField(2, 'module')]
const bFields = [mmField(0, 'faceWidth'), mmField(1, 'faceWidth'), mmField(2, 'faceWidth')]
const cFields = [stageCenterField(0), stageCenterField(1)]

// ------- 运动 / 姿态 -------
const playing = ref(true)
const phiFirst = ref(0)
const speed = ref(0.25) // rad/s（首轮）
let lastT = 0
const pose = shallowRef<TrainPose>({ angles: [0, 0, 0], s: [0, 0], contacts: [] })
const selectedStage = ref(0)
const scrubS = ref(0)

const showOpts = reactive({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true
})

// ------- 各段局部干涉检查（Clipper2 WASM） -------
const interferenceResults = shallowRef<(StageInterference | null)[]>([null, null])
const busyStages = reactive<boolean[]>([false, false])
let interfereReq = 0

function localOutline(i: number): Pt[] {
  return storedOutlines && storedOutlines[i] ? storedOutlines[i] : model.value!.gears[i].outline
}

async function checkStageInterference(i: number) {
  const m = model.value
  if (!m || playing.value) return
  const st = m.stages[i]
  const p = pose.value
  const oL = [transformOutline(localOutline(st.leftIndex), m.centers[st.leftIndex], 0, p.angles[st.leftIndex])]
  const oR = [transformOutline(localOutline(st.rightIndex), m.centers[st.rightIndex], 0, p.angles[st.rightIndex])]
  const req = ++interfereReq
  busyStages[i] = true
  try {
    const res = await intersectOutlines(oL, oR)
    if (req !== interfereReq) return
    // 逐槽替换（shallowRef 触发更新）
    const next = [...interferenceResults.value]
    next[i] = { stageIndex: i, angles: [...p.angles], regions: res.regions, area: res.area }
    interferenceResults.value = next
  } finally {
    if (req === interfereReq) busyStages[i] = false
  }
}

async function checkAllStages() {
  if (!model.value) return
  for (let i = 0; i < model.value.stages.length; i++) await checkStageInterference(i)
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

/** 当前选中段接触点显示用 s（折叠进实际啮合段；拖动时取真实 s） */
const displayContactS = computed(() => {
  const m = model.value
  if (!m || !m.stages[selectedStage.value]) return 0
  return wrapStageS(m.stages[selectedStage.value], pose.value.s[selectedStage.value] ?? 0)
})

const sBounds = computed<[number, number]>(() => {
  const st = model.value?.stages[selectedStage.value]
  if (!st) return [-30, 30]
  const [lo, hi] = stageSBounds(st)
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function pushOverlay() {
  const m = model.value
  if (!viewer || !m) return
  const opts: ViewerOptions = {
    ...showOpts,
    selectedStage: selectedStage.value,
    contactS: displayContactS.value,
    contactRegions: m.stages.map((_, i) => interferenceResults.value[i]?.regions ?? [])
  }
  viewer.setTrainOverlay(m.stages, opts)
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  if (model.value) viewer.setTrain(model.value.gears, model.value.centers)

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    const m = model.value
    if (playing.value && m) {
      phiFirst.value += speed.value * dt
      // 归一到首轮一个齿距周期（链中各轮周期严格相容：Δφ1=2π/z1 ⇒ Δφk=±2π/zk）
      const period = (2 * Math.PI) / m.gears[0].input.z
      phiFirst.value = ((phiFirst.value % period) + period) % period
      pose.value = poseFromFirst(m, phiFirst.value)
      scrubS.value = displayContactS.value
    }
    if (m && viewer) {
      viewer.setTrainAngles(pose.value.angles)
      scrubS.value = displayContactS.value
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

watch(
  () => [
    kind.value,
    specs[0].z, specs[0].module, specs[0].alphaDeg, specs[0].faceWidth,
    specs[1].z, specs[1].module, specs[1].alphaDeg, specs[1].faceWidth,
    specs[2].z, specs[2].module, specs[2].alphaDeg, specs[2].faceWidth,
    stageStd[0], stageStd[1], stageCenter[0], stageCenter[1]
  ],
  () => {
    // 参数编辑后旧案例轮廓/检查结果失效；载入案例期间由 applyCase 统一处理
    if (applyingCase) return
    storedOutlines = null
    editingId = null
    rebuild()
  }
)

watch(showOpts, pushOverlay)
watch(selectedStage, () => (scrubS.value = displayContactS.value))

// ------- 暂停时手动检查 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/** 暂停时拖动选中段接触点：全链姿态由该段真实啮合反推（上下游同时更新） */
function scrubContact() {
  const m = model.value
  if (playing.value || !m) return
  const p = poseFromStageS(m, selectedStage.value, scrubS.value)
  pose.value = p
  phiFirst.value = p.angles[0]
  // 姿态改变后，旧帧的干涉检查结果不再对应当前三轮姿态（结果是按当时角度算的），
  // 清空以免红区/面积被误读为当前姿态；保存案例时也不会再带走过期结果
  interferenceResults.value = m.stages.map(() => null)
}

// ------- 案例库 -------
const cases = ref<CaseData[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')

async function refreshCases() {
  cases.value = await listCases()
}
onMounted(refreshCases)

function currentCaseData(withOutlines: boolean): CaseData {
  const m = model.value
  const n = activeCount()
  const id = editingId ?? newCaseId()
  return {
    schemaVersion: 2,
    id,
    name: caseName.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    note: caseNote.value,
    kind: kind.value,
    gears: specs.slice(0, n).map<CaseGearInput>((g) => ({
      z: Math.round(g.z),
      module: g.module,
      alpha: g.alphaDeg * DEG,
      alphaDeg: g.alphaDeg,
      faceWidth: g.faceWidth
    })),
    centerDistances: Array.from({ length: n - 1 }, (_, i) => (stageStd[i] ? null : stageCenter[i])),
    unit: unit.value,
    pose: m ? pose.value.angles.slice(0, n) : undefined,
    selectedStage: selectedStage.value,
    contactS: m ? pose.value.s.slice(0, n - 1) : undefined,
    outlines:
      withOutlines && m
        ? {
            gears: m.gears.map((_, i) => localOutline(i)),
            interference: interferenceResults.value.filter(Boolean) as StageInterference[]
          }
        : undefined
  }
}

async function saveCurrent(withOutlines: boolean) {
  if (!model.value) return
  const data = currentCaseData(withOutlines)
  await saveCase(data)
  editingId = data.id
  await refreshCases()
}

function exportCase(withOutlines: boolean) {
  if (!model.value) return
  downloadJson(currentCaseData(withOutlines))
}

function applyCase(c: CaseData) {
  applyingCase = true
  kind.value = c.kind
  const n = c.kind === 'idler' ? 3 : 2
  c.gears.forEach((g, i) => {
    specs[i] = { z: g.z, module: g.module, alphaDeg: g.alphaDeg, faceWidth: g.faceWidth }
  })
  for (let i = 0; i < n - 1; i++) {
    const v = c.centerDistances[i]
    stageStd[i] = v == null
    if (v != null) stageCenter[i] = v
  }
  unit.value = c.unit || 'mm'
  caseName.value = c.name
  caseNote.value = c.note
  editingId = c.id
  rebuild() // viewer 重建（此时 storedOutlines 尚未设置，下面再恢复检查结果）
  const m = model.value
  if (m) {
    selectedStage.value = Math.min(c.selectedStage ?? 0, m.stages.length - 1)
    // 恢复暂停姿态（严格逐段啮合重新推导；轮廓核验另有保存的角度）
    const phi0 = c.pose && c.pose.length === n ? c.pose[0] : 0
    phiFirst.value = phi0
    pose.value = poseFromFirst(m, phi0)
    scrubS.value = displayContactS.value
    // 恢复随案例保存的局部轮廓与两段检查结果（不被重建）
    storedOutlines = c.outlines ? c.outlines.gears.map((p) => p.map((q) => ({ ...q }))) : null
    interferenceResults.value = m.stages.map((st) => {
      const hit = c.outlines?.interference?.find((r) => r.stageIndex === st.index)
      return hit ? { ...hit, angles: [...hit.angles], regions: hit.regions.map((r) => r.map((q) => ({ ...q }))) } : null
    })
    playing.value = false
  }
  applyingCase = false
}

async function loadCase(c: CaseData) {
  applyCase(c)
}

async function removeCase(id: string) {
  await deleteCase(id)
  if (editingId === id) editingId = null
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
      applyCase(c)
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

/** 旧双轮案例载入后：另存为三轮惰轮链（惰轮取与首轮相同模数/压力角，默认 z=30） */
function upgradeToIdler() {
  applyingCase = true
  kind.value = 'idler'
  specs[2] = { z: 30, module: specs[0].module, alphaDeg: specs[0].alphaDeg, faceWidth: specs[0].faceWidth }
  stageStd[0] = true
  stageStd[1] = true
  selectedStage.value = 0
  interferenceResults.value = [null, null]
  storedOutlines = null
  editingId = null
  caseName.value = caseName.value + '（三轮惰轮链）'
  rebuild()
  applyingCase = false
}

// ------- 派生显示 -------
const gearLabels = computed(() =>
  kind.value === 'idler' ? ['主动轮 1', '惰轮 2', '从动轮 3'] : ['齿轮 1（z₁）', '齿轮 2（z₂）']
)

const selectedMesh = computed(() => model.value?.stages[selectedStage.value] ?? null)

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

// 预设
function presetPair(z1: number, z2: number, m = 2, alphaDeg = 20) {
  kind.value = 'pair'
  specs[0] = { z: z1, module: m, alphaDeg, faceWidth: 10 }
  specs[1] = { z: z2, module: m, alphaDeg, faceWidth: 10 }
  stageStd[0] = true
}
function presetIdler(z1: number, z2: number, z3: number, m = 2, alphaDeg = 20) {
  kind.value = 'idler'
  specs[0] = { z: z1, module: m, alphaDeg, faceWidth: 10 }
  specs[1] = { z: z2, module: m, alphaDeg, faceWidth: 10 }
  specs[2] = { z: z3, module: m, alphaDeg, faceWidth: 10 }
  stageStd[0] = true
  stageStd[1] = true
}
/** 故意制造不匹配，演示"拒绝半成品链条" */
function presetMismatch(which: 'module' | 'alpha') {
  kind.value = 'idler'
  presetIdler(20, 30, 40, 2, 20)
  if (which === 'module') specs[1].module = 2.1
  else specs[2].alphaDeg = 14.5
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮传动链实验室</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓 · 可配置双轮 / 三轮惰轮链（教学模型）</div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>传动链形式</h2>
          <div class="units">
            <button :class="{ active: kind === 'pair' }" @click="kind = 'pair'">双轮（一对外啮合）</button>
            <button :class="{ active: kind === 'idler' }" @click="kind = 'idler'">三轮（惰轮链）</button>
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
          <h2>各轮参数（模数/压力角逐段必须一致）</h2>
          <div v-for="i in activeCount()" :key="i" class="gearblock">
            <div class="gearhead">{{ gearLabels[i - 1] }}</div>
            <div class="two">
              <label>齿数 z
                <input type="number" v-model.number="specs[i - 1].z" min="4" step="1" />
              </label>
              <label>压力角 α（度）
                <input type="number" v-model.number="specs[i - 1].alphaDeg" min="1" max="45" step="0.5" />
              </label>
            </div>
            <div class="two">
              <label>模数 m（{{ UNITS[unit].label }}）
                <input type="number" v-model.number="mFields[i - 1]" :step="UNITS[unit].step" />
              </label>
              <label>齿宽 b（{{ UNITS[unit].label }}）
                <input type="number" v-model.number="bFields[i - 1]" :step="UNITS[unit].step" />
              </label>
            </div>
            <div v-if="gearErrors[i - 1].length" class="err">{{ gearErrors[i - 1].join('；') }}</div>
          </div>
          <div v-if="chainErrors.length" class="err chainerr">
            <div v-for="(e, i) in chainErrors" :key="i">⛔ {{ e }}</div>
            <div>已拒绝形成传动链（不会用总速比硬套末轮产生半成品）。</div>
          </div>
        </section>

        <section>
          <h2>各段中心距</h2>
          <div v-for="i in activeCount() - 1" :key="'c' + i" class="stageblock">
            <label class="row">
              <input type="checkbox" v-model="stageStd[i - 1]" />
              第 {{ i }} 段使用标准中心距 a₀ = m(z{{ i }}+z{{ i + 1 }})/2
            </label>
            <label v-if="!stageStd[i - 1]">实际中心距 a（{{ UNITS[unit].label }}）
              <input type="number" v-model.number="cFields[i - 1]" :step="UNITS[unit].step" />
            </label>
          </div>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing">暂停</button>
            <button @click="resume" :disabled="playing || !model">继续</button>
          </div>
          <label>首轮角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>

          <div class="row" v-if="model">
            <button v-for="(st, i) in model.stages" :key="i" :class="{ active: selectedStage === i }" @click="selectedStage = i">
              检查第 {{ i + 1 }} 段（轮{{ st.leftIndex + 1 }}–轮{{ st.rightIndex + 1 }}）
            </button>
          </div>

          <label>第 {{ selectedStage + 1 }} 段接触点 s（mm，暂停可拖动）
            <input type="range" :disabled="playing || !model" v-model.number="scrubS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <div class="row">
            <button @click="checkStageInterference(selectedStage)" :disabled="playing || !model || busyStages[selectedStage]">
              {{ busyStages[selectedStage] ? 'Clipper 求交中…' : `检查第 ${selectedStage + 1} 段局部干涉` }}
            </button>
            <button @click="checkAllStages" :disabled="playing || !model">两段都查</button>
          </div>
          <div v-for="(r, i) in interferenceResults" :key="i" v-show="r" class="report">
            第 {{ i + 1 }} 段重叠面积 = {{ r ? r.area.toExponential(3) : '' }} mm²
            <b :class="r && r.area > 1e-6 ? 'bad' : 'good'">
              {{ r ? (r.area > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅') : '' }}
            </b>
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（理论/实际）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="presetPair(20,40)">双轮 20/40</button>
            <button @click="presetPair(17,17)">双轮 17/17</button>
            <button @click="presetIdler(20,30,40)">三轮 20/30/40</button>
            <button @click="presetIdler(18,24,36)">三轮 18/24/36</button>
            <button @click="presetIdler(12,30,28, 3)">三轮少齿 12/30/28</button>
            <button class="del" @click="presetMismatch('module')">模数不匹配演示</button>
            <button class="del" @click="presetMismatch('alpha')">压力角不匹配演示</button>
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
                  <th v-for="(g, i) in model.gears" :key="i">{{ gearLabels[i] }}（z={{ g.input.z }}）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>分度圆直径 d</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ fmt(g.pitchR * 2) }}</td>
                </tr>
                <tr>
                  <td>基圆直径 d_b</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ fmt(g.baseR * 2) }}</td>
                </tr>
                <tr>
                  <td>齿顶圆 d_a</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ fmt(g.addendumR * 2) }}</td>
                </tr>
                <tr>
                  <td>齿根圆 d_f</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ fmt(g.dedendumR * 2) }}</td>
                </tr>
                <tr>
                  <td>基节 p_b = πm·cosα</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ fmt(g.basePitch) }}</td>
                </tr>
                <tr>
                  <td>齿顶压力角 α_a</td>
                  <td v-for="(g, i) in model.gears" :key="i">{{ (g.alphaTip / DEG).toFixed(2) }}°</td>
                </tr>
                <tr>
                  <td>根切风险</td>
                  <td v-for="(g, i) in model.gears" :key="i" :class="g.undercut ? 'bad' : 'good'">
                    {{ g.undercut ? `z<${g.zMinValue.toFixed(1)} 根切 ❗` : '安全' }}
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="mesh-report">
              <h3>传动链总关系（由两段真实啮合决定，不是直接套总速比）</h3>
              <div v-if="model.total">
                外啮合次数：<b>{{ model.total.externalMeshCount }}</b>；
                首末轮转向：<b :class="model.total.sameDirection ? 'good' : 'bad'">
                  {{ model.total.sameDirection ? '同向 ✅（惰轮使方向反转两次）' : '反向 ✅' }}
                </b>
              </div>
              <div v-if="model.total">
                总速比 ω末/ω首 = (−1)^n·z首/z末 =
                <b>{{ model.total.ratio.toFixed(5) }}</b>
                （即 {{ (model.total.ratio * model.total.lastZ / model.total.firstZ).toFixed(3) }}·{{ model.total.firstZ }}/{{ model.total.lastZ }}）
              </div>
              <div v-for="(st, i) in model.stages" :key="i" class="stageline">
                第 {{ i + 1 }} 段速比 ω{{ st.rightIndex + 1 }}/ω{{ st.leftIndex + 1 }} =
                −{{ model.gears[st.leftIndex].input.z }}/{{ model.gears[st.rightIndex].input.z }}
                = {{ (-model.gears[st.leftIndex].input.z / model.gears[st.rightIndex].input.z).toFixed(4) }}（反向）
              </div>

              <template v-if="selectedMesh">
                <h3 style="margin-top:8px">第 {{ selectedStage + 1 }} 段啮合检查</h3>
                <div>标准中心距 a₀：<b>{{ fmt(selectedMesh.info.a0) }}</b></div>
                <div>实际中心距 a：<b>{{ fmt(selectedMesh.info.a) }}</b>（Δa = {{ fmt(selectedMesh.info.deltaA) }}）</div>
                <div>啮合角 α′：<b>{{ (selectedMesh.info.alphaPrime / DEG).toFixed(3) }}°</b></div>
                <div>节圆半径 r′：<b>{{ fmt(selectedMesh.info.pitchR1) }} / {{ fmt(selectedMesh.info.pitchR2) }}</b></div>
                <div>实际啮合线长度 g_α：<b>{{ fmt(selectedMesh.info.pathOfContact) }}</b></div>
                <div>重合度 ε_α：<b :class="selectedMesh.info.contactRatio < 1 ? 'bad' : 'good'">{{ selectedMesh.info.contactRatio.toFixed(3) }}</b></div>
                <div>圆周/法向侧隙：<b>{{ fmt(selectedMesh.info.backlashTangential) }} / {{ fmt(selectedMesh.info.backlashNormal) }}</b></div>
                <div>顶隙 c：<b>{{ fmt(selectedMesh.info.clearance12) }}</b></div>
                <div>基节一致：<b :class="selectedMesh.info.basePitchMatch ? 'good' : 'bad'">{{ selectedMesh.info.basePitchMatch ? '是 ✅' : '否 ❌' }}</b></div>
              </template>
              <ul v-if="model.warnings.length" class="warns">
                <li v-for="(w, i) in model.warnings" :key="i">⚠️ {{ w }}</li>
              </ul>
              <div class="formula">
                每段独立满足：基节相等 + 节点共法线 + 同一条渐开线滚动（r_b左·Δφ左 = −r_b右·Δφ右）。
                姿态沿 φ1→s1→φ2→s2→φ3 严格传播；惰轮只改方向、不入总速比幅值。
              </div>
            </div>
          </div>
          <div v-else-if="chainErrors.length" class="banned">
            传动链未形成：{{ chainErrors.join('；') }}
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>案例（IndexedDB，schema v2）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveCurrent(true)" :disabled="!model">保存（含轮廓/检查）</button>
            <button @click="saveCurrent(false)" :disabled="!model">仅参数</button>
          </div>
          <div class="row">
            <button @click="exportCase(true)" :disabled="!model">导出 JSON+轮廓</button>
            <button @click="exportCase(false)" :disabled="!model">导出参数</button>
          </div>
          <label class="wide filebtn">导入 JSON（v2 / 旧 v1 自动迁移）
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
          <button class="wide" @click="upgradeToIdler" :disabled="!model || kind === 'idler'">把当前双轮另存为三轮惰轮链</button>
        </section>
        <section>
          <h2>已存案例</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.id">
              <div class="ci">
                <b>{{ c.name }}</b>
                <span>
                  {{ c.kind === 'idler' ? '三轮' : '双轮' }} ·
                  {{ c.gears.map((g) => g.z).join('/') }} · m={{ c.gears[0].module }} · α={{ c.gears[0].alphaDeg }}°{{ c.outlines ? ' · 含轮廓' : '' }}
                </span>
              </div>
              <div class="ca">
                <button @click="loadCase(c)">载入</button>
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
