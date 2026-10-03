/**
 * 案例导出/导入往返测试（schema 版本化）：
 *  - v1 旧双轮案例：parseCase 自动迁移为 v2 pair，载入后按原行为运行，可扩展为三轮链；
 *  - v2 三轮链：惰轮参数、暂停姿态、两段干涉检查结果与各轮轮廓往返不丢失，
 *    不被重建为错误相位（姿态始终由保存的 φ1 经两段严格级联重建）；
 *  - 随载轮廓在严格相位下仍可用于 Clipper 求交。
 */
import { buildGear, DEG, polygonArea, transformOutline } from '../src/geometry/gear.ts'
import { buildChain, poseFromMaster, poseFromScrub } from '../src/geometry/chain.ts'
import {
  LEGACY_SCHEMA_VERSION,
  SCHEMA_VERSION,
  migrateLegacy,
  parseCase,
  serializeCase,
  type CaseData,
  type LegacyCaseData
} from '../src/store.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

// ---------------------------------------------------------------------------
console.log('\n=== 1. v1 旧双轮案例迁移：原行为不变 ===')
{
  const g1 = buildGear({ z: 20, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const g2 = buildGear({ z: 40, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const legacy: LegacyCaseData = {
    schemaVersion: LEGACY_SCHEMA_VERSION,
    id: 'legacy-1',
    name: '旧双轮',
    createdAt: 1,
    updatedAt: 1,
    note: '',
    gear1: { z: 20, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    gear2: { z: 40, module: 2, alpha: 20 * DEG, alphaDeg: 20, faceWidth: 10 },
    centerDistance: null,
    unit: 'mm',
    outlines: { gear1: g1.outline, gear2: g2.outline }
  }

  const text = JSON.stringify(legacy)
  const migrated = parseCase(text) // 内部自动迁移
  ok(migrated.schemaVersion === SCHEMA_VERSION, 'v1 案例载入后升级为 v2')
  ok(migrated.mode === 'pair', '迁移后为双轮模式（原行为）')
  ok(migrated.gear1.z === 20 && migrated.gear2.z === 40, '双轮参数保留')
  ok(!!migrated.outlines?.gear1 && !!migrated.outlines?.gear2, '旧轮廓保留')
  ok(
    polygonArea(migrated.outlines!.gear1!) === polygonArea(g1.outline),
    '迁移轮廓面积一致（未重建）'
  )

  // 迁移案例仍能构建出与旧实验相同的一对啮合，且严格相位无干涉
  const model = buildChain({
    mode: 'pair',
    gearInputs: [
      { ...migrated.gear1, alpha: migrated.gear1.alphaDeg * DEG },
      { ...migrated.gear2, alpha: migrated.gear2.alphaDeg * DEG },
      { ...migrated.gear1, alpha: migrated.gear1.alphaDeg * DEG }
    ],
    centerDistances: [null, null]
  })
  ok(model.valid, '迁移后的双轮模型仍合法')
  const seg = model.segments[0]
  const p1 = 0.37
  const { pose } = poseFromMaster(model, p1)
  const res = await intersectOutlines(
    [transformOutline(migrated.outlines!.gear1!, model.centers[0], 0, pose[0])],
    [transformOutline(migrated.outlines!.gear2!, model.centers[1], 0, pose[1])]
  )
  ok(!res.intersects, `旧案例严格相位无干涉（面积 ${res.area.toExponential(2)}）`)
  void seg

  // 可扩展为三轮链（轮3 默认复制轮1）
  const ext = migrateLegacy(legacy)
  ext.mode = 'chain'
  const chainModel = buildChain({
    mode: 'chain',
    gearInputs: [
      { ...ext.gear1, alpha: ext.gear1.alphaDeg * DEG },
      { ...ext.gear2, alpha: ext.gear2.alphaDeg * DEG },
      { ...ext.gear3, alpha: ext.gear3.alphaDeg * DEG }
    ],
    centerDistances: [null, null]
  })
  ok(chainModel.valid && chainModel.gearCount === 3, '旧双轮可扩展为合法三轮链并另存 v2')
}

// ---------------------------------------------------------------------------
console.log('\n=== 2. v2 三轮链往返：惰轮参数/姿态/两段检查/轮廓不丢失 ===')
{
  const inp = (z: number) => ({ z, module: 2, alpha: 20 * DEG, faceWidth: 10 })
  const [gg1, gg2, gg3] = [buildGear(inp(20)), buildGear(inp(30)), buildGear(inp(40))]
  const model = buildChain({
    mode: 'chain',
    gearInputs: [inp(20), inp(30), inp(40)],
    centerDistances: [null, null]
  })

  // 暂停在某姿态，段A/段B 分别做一次 Clipper 检查（标准安装 → 面积 0；区域保存）
  const phi1Pause = 0.213
  const kin = poseFromMaster(model, phi1Pause)
  async function checkSeg(li: number, ri: number, phiL: number, phiR: number) {
    const oL = [transformOutline(model.gears[li]!.outline, model.centers[li], 0, phiL)]
    const oR = [transformOutline(model.gears[ri]!.outline, model.centers[ri], 0, phiR)]
    return intersectOutlines(oL, oR)
  }
  const chkA = await checkSeg(0, 1, kin.pose[0], kin.pose[1])
  const chkB = await checkSeg(1, 2, kin.pose[1], kin.pose[2])

  const data: CaseData = {
    schemaVersion: SCHEMA_VERSION,
    id: 'chain-roundtrip',
    name: '三轮往返',
    createdAt: 2,
    updatedAt: 2,
    note: 'idler',
    mode: 'chain',
    gear1: { ...inp(20), alphaDeg: 20 },
    gear2: { ...inp(30), alphaDeg: 20 },
    gear3: { ...inp(40), alphaDeg: 20 },
    centerDistance1: null,
    centerDistance2: null,
    unit: 'mm',
    pose: { phi1: phi1Pause, activeSegment: 1, s: kin.s, paused: true },
    checks: {
      '0': { s: kin.s[0], phi1: phi1Pause, area: chkA.area, regions: chkA.regions, checkedAt: 3 },
      '1': { s: kin.s[1], phi1: phi1Pause, area: chkB.area, regions: chkB.regions, checkedAt: 3 }
    },
    outlines: { gear1: gg1.outline, gear2: gg2.outline, gear3: gg3.outline }
  }

  const back = parseCase(serializeCase(data))
  ok(back.mode === 'chain', '三轮链模式往返')
  ok(back.gear2.z === 30 && back.gear2.module === 2 && back.gear2.alphaDeg === 20, '惰轮参数完整保留')
  ok(back.gear3.z === 40, '末轮参数保留')
  ok(!!back.outlines?.gear3, '惰轮之后的轮3轮廓随 JSON 保留')
  ok(back.outlines!.gear2!.length === gg2.outline.length, '惰轮轮廓点数一致（未重建）')
  ok(Math.abs(polygonArea(back.outlines!.gear2!) - polygonArea(gg2.outline)) < 1e-6, '惰轮轮廓面积一致')
  ok(Math.abs(back.checks!['0'].area - chkA.area) < 1e-12, '段A 检查面积保留')
  ok(Math.abs(back.checks!['1'].area - chkB.area) < 1e-12, '段B 检查面积保留')
  ok(back.checks!['0'].regions.length === chkA.regions.length, '段A 检查区域多边形保留')
  ok(back.checks!['1'].regions.length === chkB.regions.length, '段B 检查区域多边形保留')
  ok(back.pose?.activeSegment === 1 && back.pose.paused, '暂停姿态与选中段保留')

  // 关键：姿态必须从保存的 φ1 重新严格级联，而不是用总速比直接摆末轮
  const model2 = buildChain({
    mode: 'chain',
    gearInputs: [
      { ...back.gear1, alpha: back.gear1.alphaDeg * DEG },
      { ...back.gear2, alpha: back.gear2.alphaDeg * DEG },
      { ...back.gear3, alpha: back.gear3.alphaDeg * DEG }
    ],
    centerDistances: [null, null]
  })
  const kin2 = poseFromMaster(model2, back.pose!.phi1)
  ok(Math.abs(kin2.pose[0] - kin.pose[0]) < 1e-12, '刷新/导入后轮1姿态一致')
  ok(Math.abs(kin2.pose[1] - kin.pose[1]) < 1e-12, '惰轮姿态经段A严格重建一致（非错误相位）')
  ok(Math.abs(kin2.pose[2] - kin.pose[2]) < 1e-12, '末轮姿态经段B严格级联一致')

  // 随载轮廓在重建姿态下仍可用于 Clipper 核验（两段都无干涉）
  const reA = await intersectOutlines(
    [transformOutline(back.outlines!.gear1!, model2.centers[0], 0, kin2.pose[0])],
    [transformOutline(back.outlines!.gear2!, model2.centers[1], 0, kin2.pose[1])]
  )
  const reB = await intersectOutlines(
    [transformOutline(back.outlines!.gear2!, model2.centers[1], 0, kin2.pose[1])],
    [transformOutline(back.outlines!.gear3!, model2.centers[2], 0, kin2.pose[2])]
  )
  ok(!reA.intersects, `随载轮廓段A 求交无干涉（${reA.area.toExponential(2)}）`)
  ok(!reB.intersects, `随载轮廓段B 求交无干涉（${reB.area.toExponential(2)}）`)

  // 拖动段A 后再级联：往返模型上同样成立
  const scrub = poseFromScrub(model2, 0, kin2.s[0] + 1.0)
  const g1b = model2.gears[0]!,
    g3b = model2.gears[2]!
  const ratio =
    (scrub.pose[2] - kin2.pose[2]) / (scrub.pose[0] - kin2.pose[0])
  ok(
    Math.abs(ratio - g1b.input.z / g3b.input.z) < 1e-7 || Math.abs(ratio + g1b.input.z / g3b.input.z) < 1e-7,
    '往返后拖段A，末轮相位仍满足两段级联速比'
  )
}

// ---------------------------------------------------------------------------
console.log('\n=== 3. 损坏/越版案例被拒绝 ===')
{
  let threw = 0
  const mustThrow = (text: string, label: string) => {
    try {
      parseCase(text)
    } catch {
      threw++
      console.log('  ok   ', label)
    }
  }
  mustThrow(JSON.stringify({ schemaVersion: 99 }), '越版 schema 拒绝')
  mustThrow(JSON.stringify({ schemaVersion: SCHEMA_VERSION, mode: 'chain', gear1: { z: 20, module: 2, alphaDeg: 20, faceWidth: 10 }, gear2: { z: 20, module: 2, alphaDeg: 20, faceWidth: 10 } }), '三轮链缺轮3拒绝')
  mustThrow('{not json', '非 JSON 拒绝')
  ok(threw === 3, '三类坏文件均被拒绝')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n版本化往返全部通过 ✅')
process.exit(fails ? 1 : 0)
