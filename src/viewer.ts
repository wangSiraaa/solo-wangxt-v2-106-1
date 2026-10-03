/**
 * Three.js 场景：轮系（双轮或含惰轮的三轮链）3D 齿形 + 参考圆
 * + 各段啮合线/接触点 + 干涉高亮 + 旋转运动。
 *
 * 所有覆盖物按【世界坐标】绘制：段几何以左轮中心为局部原点，
 * 绘制时加 segment.offsetX 平移，因此两段啮合线、接触点可同时显示。
 * 纯前端、OrbitControls 由 three 自带模块提供。
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { GearGeometry, Pt } from './geometry/gear'
import type { ChainModel, ChainSegment } from './geometry/chain'

export interface SegmentOverlayOpts {
  showActionLine: boolean
  showContact: boolean
  /** 该段当前接触点啮合线参数（未折叠由调用方折叠后传入） */
  contactS: number
  /** 该段 Clipper 干涉区域（世界坐标） */
  regions: Pt[][]
  /** 是否为当前选中检查的啮合副（高亮，其余段暗淡） */
  active: boolean
}

export interface TrainViewerOptions {
  showPitchCircle: boolean
  showBaseCircle: boolean
  showAddendumCircle: boolean
  showDedendumCircle: boolean
  /** 键为段 index（0/1）；未列出的段不绘制覆盖物 */
  segments: Record<number, SegmentOverlayOpts>
}

interface GearMesh {
  group: THREE.Group
  body: THREE.Mesh
  refs: Record<string, THREE.LineLoop>
}

const GEAR_COLORS = [0x6ea8fe, 0x9d7bff, 0xffb86e]

export class GearViewer {
  readonly renderer: THREE.WebGLRenderer
  readonly scene: THREE.Scene
  readonly camera: THREE.OrthographicCamera
  private controls: OrbitControls
  private gears: GearMesh[] = []
  private overlayGroup: THREE.Group
  private interferenceGroup: THREE.Group
  private raycaster = new THREE.Raycaster()
  private container: HTMLElement
  private resizeObs: ResizeObserver

  constructor(container: HTMLElement) {
    this.container = container
    const w = container.clientWidth || 800
    const h = container.clientHeight || 600

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(w, h)
    container.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x101318)

    const aspect = w / h
    const frustum = 80
    this.camera = new THREE.OrthographicCamera(
      (-frustum * aspect) / 2,
      (frustum * aspect) / 2,
      frustum / 2,
      -frustum / 2,
      0.1,
      2000
    )
    this.camera.position.set(0, 0, 120)
    this.camera.lookAt(0, 0, 0)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN
    }

    const amb = new THREE.AmbientLight(0xffffff, 0.65)
    const dir = new THREE.DirectionalLight(0xffffff, 0.9)
    dir.position.set(40, 60, 100)
    this.scene.add(amb, dir)

    this.overlayGroup = new THREE.Group()
    this.interferenceGroup = new THREE.Group()
    this.scene.add(this.overlayGroup, this.interferenceGroup)

    this.resizeObs = new ResizeObserver(() => this.resize())
    this.resizeObs.observe(container)

    this.animate()
  }

  private makeCircleLine(radius: number, color: number, z = 0.02, seg = 160) {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2
      pts.push(new THREE.Vector3(radius * Math.cos(a), radius * Math.sin(a), z))
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 })
    return new THREE.LineLoop(geo, mat)
  }

  private buildGearMesh(g: GearGeometry, color: number): GearMesh {
    const group = new THREE.Group()

    // 用 THREE.Shape 挤出齿廓
    const shape = new THREE.Shape()
    const o = g.outline
    shape.moveTo(o[0].x, o[0].y)
    for (let i = 1; i < o.length; i++) shape.lineTo(o[i].x, o[i].y)
    shape.closePath()

    const depth = g.input.faceWidth
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false,
      curveSegments: 1
    })
    geo.translate(0, 0, -depth / 2)
    geo.computeVertexNormals()
    const mat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.35,
      roughness: 0.55
    })
    const body = new THREE.Mesh(geo, mat)
    group.add(body)

    // 齿廓边线（端面上更清楚地看到齿形）
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo, 12),
      new THREE.LineBasicMaterial({ color: 0x222a33, transparent: true, opacity: 0.5 })
    )
    group.add(edges)

    // 参考圆（放在前端面之上）
    const refs: Record<string, THREE.LineLoop> = {
      pitch: this.makeCircleLine(g.pitchR, 0x4aa3ff, depth / 2 + 0.02),
      base: this.makeCircleLine(g.baseR, 0x27c08a, depth / 2 + 0.02),
      addendum: this.makeCircleLine(g.addendumR, 0xffd166, depth / 2 + 0.02),
      dedendum: this.makeCircleLine(g.dedendumR, 0xff8fa3, depth / 2 + 0.02)
    }
    Object.values(refs).forEach((l) => group.add(l))

    return { group, body, refs }
  }

  /** 重建整个轮系（2 或 3 个轮；参数非法的轮传 null 则占位为空） */
  setTrain(gears: (GearGeometry | null)[], centers: number[]) {
    this.clearOverlay()
    for (const gm of this.gears) this.scene.remove(gm.group)
    this.gears = []

    let maxR = 10
    let extent = 0
    gears.forEach((g, i) => {
      if (!g) return
      const gm = this.buildGearMesh(g, GEAR_COLORS[i % GEAR_COLORS.length])
      gm.group.position.x = centers[i] ?? 0
      this.scene.add(gm.group)
      this.gears[i] = gm
      maxR = Math.max(maxR, g.addendumR)
      extent = Math.max(extent, (centers[i] ?? 0) + g.addendumR)
    })
    this.frameView(centers, gears, maxR)
  }

  private frameView(centers: number[], gears: (GearGeometry | null)[], maxR: number) {
    let minX = Infinity,
      maxX = -Infinity
    gears.forEach((g, i) => {
      if (!g) return
      minX = Math.min(minX, (centers[i] ?? 0) - g.addendumR)
      maxX = Math.max(maxX, (centers[i] ?? 0) + g.addendumR)
    })
    if (!isFinite(minX)) {
      minX = -40
      maxX = 40
    }
    const cx = (minX + maxX) / 2
    const aspect = (this.container.clientWidth || 800) / (this.container.clientHeight || 600)
    const needW = maxX - minX + 2 * Math.max(8, maxR * 0.4)
    const needH = 2 * maxR + 20
    const frustum = Math.max(needH, needW / aspect, 80)
    this.camera.left = (-frustum * aspect) / 2
    this.camera.right = (frustum * aspect) / 2
    this.camera.top = frustum / 2
    this.camera.bottom = -frustum / 2
    this.camera.updateProjectionMatrix()
    this.controls.target.set(cx, 0, 0)
    this.camera.position.set(cx, 0, 140)
  }

  setAngles(angles: number[]) {
    angles.forEach((phi, i) => {
      if (this.gears[i]) this.gears[i].group.rotation.z = phi
    })
  }

  private bodyDepth(gm: GearMesh) {
    gm.body.geometry.computeBoundingBox()
    const bb = gm.body.geometry.boundingBox
    return bb ? bb.max.z - bb.min.z : 0
  }

  /** 参考圆显隐（对所有在场景中的轮统一控制） */
  setReferenceVisibility(opts: Pick<TrainViewerOptions, 'showPitchCircle' | 'showBaseCircle' | 'showAddendumCircle' | 'showDedendumCircle'>) {
    for (const gm of this.gears) {
      if (!gm) continue
      gm.refs.pitch.visible = !!opts.showPitchCircle
      gm.refs.base.visible = !!opts.showBaseCircle
      gm.refs.addendum.visible = !!opts.showAddendumCircle
      gm.refs.dedendum.visible = !!opts.showDedendumCircle
    }
  }

  /**
   * 绘制轮系覆盖物：每段啮合线/节点/接触点 + 干涉区域（全部世界坐标）。
   * 选中段高亮，未选中段暗淡但仍可见——两轮/三轮链两段接触可同时检查。
   */
  setChainOverlay(model: ChainModel | null, opts: TrainViewerOptions) {
    this.clearOverlay()
    this.setReferenceVisibility(opts)
    if (!model) return

    let maxDepth = 0
    for (const gm of this.gears) if (gm) maxDepth = Math.max(maxDepth, this.bodyDepth(gm))
    const z = maxDepth / 2 + 1

    for (const seg of model.segments) {
      if (seg.rejected || !seg.mesh) continue
      const so = opts.segments[seg.index]
      if (!so) continue
      this.drawSegment(seg, so, z)
    }

    // 干涉区域（世界坐标，直接画）
    for (const seg of model.segments) {
      const so = opts.segments[seg.index]
      if (!so) continue
      for (const ring of so.regions) {
        if (ring.length < 3) continue
        const shape = new THREE.Shape()
        shape.moveTo(ring[0].x, ring[0].y)
        for (let i = 1; i < ring.length; i++) shape.lineTo(ring[i].x, ring[i].y)
        shape.closePath()
        const geo = new THREE.ShapeGeometry(shape)
        const mat = new THREE.MeshBasicMaterial({
          color: so.active ? 0xff2d55 : 0xff8a5c,
          transparent: true,
          opacity: so.active ? 0.5 : 0.3,
          side: THREE.DoubleSide,
          depthTest: false
        })
        const m = new THREE.Mesh(geo, mat)
        m.position.z = z + 1
        m.renderOrder = 999
        this.interferenceGroup.add(m)
      }
    }
  }

  private drawSegment(seg: ChainSegment, so: SegmentOverlayOpts, zBase: number) {
    const m = seg.mesh
    const off = seg.offsetX
    const activeColor = 0x39e66b
    const idleColor = 0x5c7088
    const lineColor = so.active ? activeColor : idleColor
    const opacity = so.active ? 0.95 : 0.45

    const mk = (p: Pt, q: Pt, color: number, op: number, order: number) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(p.x + off, p.y, zBase),
        new THREE.Vector3(q.x + off, q.y, zBase)
      ])
      const line = new THREE.Line(
        geo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: op, depthTest: false })
      )
      line.renderOrder = order
      this.overlayGroup.add(line)
    }

    if (so.showActionLine) {
      mk(m.tangentLine.p0, m.tangentLine.p1, 0x8893a3, so.active ? 0.55 : 0.25, 50)
      mk(m.actionLine.p0, m.actionLine.p1, lineColor, opacity, 51)

      const dotGeo = new THREE.SphereGeometry(0.7, 16, 16)
      const dot = new THREE.Mesh(
        dotGeo,
        new THREE.MeshBasicMaterial({ color: lineColor, depthTest: false })
      )
      dot.position.set(m.pitchPoint.x + off, m.pitchPoint.y, zBase)
      dot.renderOrder = 52
      this.overlayGroup.add(dot)
    }

    if (so.showContact) {
      const ap = m.alphaPrime
      const nx = Math.sin(ap),
        ny = Math.cos(ap)
      const c = {
        x: m.pitchPoint.x + so.contactS * nx + off,
        y: m.pitchPoint.y + so.contactS * ny
      }
      const dotGeo = new THREE.SphereGeometry(so.active ? 1.0 : 0.8, 20, 20)
      const marker = new THREE.Mesh(
        dotGeo,
        new THREE.MeshBasicMaterial({
          color: so.active ? 0xff3b6b : 0xffa03c,
          depthTest: false
        })
      )
      marker.position.set(c.x, c.y, zBase + 0.5)
      marker.renderOrder = 60
      this.overlayGroup.add(marker)
    }
  }

  private clearOverlay() {
    while (this.overlayGroup.children.length) {
      const c = this.overlayGroup.children.pop()!
      const obj = c as THREE.Line | THREE.Mesh
      obj.geometry?.dispose()
    }
    while (this.interferenceGroup.children.length) {
      const c = this.interferenceGroup.children.pop()!
      ;(c as THREE.Mesh).geometry?.dispose()
    }
  }

  /** 返回世界坐标（用于拾取，本工具暂保留接口） */
  pick(_clientX: number, _clientY: number) {
    void this.raycaster
    return null
  }

  resize() {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    if (!w || !h) return
    this.renderer.setSize(w, h)
    const aspect = w / h
    const frustum = (this.camera.top - this.camera.bottom) / 1
    const halfH = frustum / 2
    this.camera.left = -halfH * aspect
    this.camera.right = halfH * aspect
    this.camera.updateProjectionMatrix()
  }

  private animate = () => {
    requestAnimationFrame(this.animate)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.resizeObs.disconnect()
    this.controls.dispose()
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }
}
