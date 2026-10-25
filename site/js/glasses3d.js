// Lunettes 3D JUBRIKA — modèle entièrement procédural (aucun fichier 3D externe,
// donc aucun droit d'auteur tiers). Les verres sont photochromiques : setTint(0..1).
import * as THREE from 'three';
import { RoomEnvironment } from '../vendor/RoomEnvironment.js';

const CLEAR = new THREE.Color('#dfe7ec');
const DARK = new THREE.Color('#15181b');

// Contour d'un verre : superellipse légèrement resserrée vers le bas (forme carrée douce).
function lensShape(w, h, r, offset = 0) {
  const a = w / 2 + offset, b = h / 2 + offset, n = 2 / (r * 3.2), pts = [];
  for (let i = 0; i < 96; i++) {
    const t = (i / 96) * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
    const y = b * Math.sign(s) * Math.pow(Math.abs(s), n);
    const taper = 1 - 0.07 * (1 - (y + b) / (2 * b));
    pts.push(new THREE.Vector2(a * taper * Math.sign(c) * Math.pow(Math.abs(c), n), y));
  }
  return new THREE.Shape(pts);
}

// Profil latéral d'une branche, extrudé sur son épaisseur.
function templeGeometry() {
  const pts = [];
  const len = 13, bend = 3.2;
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const z = -t * len;
    const y = 0.15 * t;
    pts.push(new THREE.Vector2(z, y));
  }
  for (let i = 1; i <= 20; i++) {
    const t = i / 20;
    const a = t * Math.PI * 0.42;
    pts.push(new THREE.Vector2(-len - Math.sin(a) * bend * 0.8, 0.15 - (1 - Math.cos(a)) * bend));
  }
  const top = [], bottom = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[Math.min(i + 1, pts.length - 1)], o = pts[Math.max(i - 1, 0)];
    const d = new THREE.Vector2().subVectors(q, o).normalize();
    const n = new THREE.Vector2(-d.y, d.x);
    const h = THREE.MathUtils.lerp(0.62, 0.3, i / (pts.length - 1)) / 2;
    top.push(p.clone().addScaledVector(n, h));
    bottom.push(p.clone().addScaledVector(n, -h));
  }
  const shape = new THREE.Shape([...top, ...bottom.reverse()]);
  const g = new THREE.ExtrudeGeometry(shape, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3, curveSegments: 4 });
  // Le profil est dans le plan XY : on le couche dans le plan YZ (branche vers l'arrière).
  g.rotateY(-Math.PI / 2);
  return g;
}

function buildGlasses(opts) {
  const group = new THREE.Group();
  const frameMat = new THREE.MeshPhysicalMaterial({ color: opts.frame || '#0d0d0f', roughness: 0.28, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12 });
  const metalMat = new THREE.MeshStandardMaterial({ color: '#d9dadc', metalness: 1, roughness: 0.22 });
  const lensMat = new THREE.MeshPhysicalMaterial({
    color: CLEAR.clone(), transparent: true, opacity: 0.2, roughness: 0.04, metalness: 0,
    clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6, side: THREE.DoubleSide, depthWrite: false
  });

  const LW = 5.4, LH = 4.1, LR = 1.35, GAP = 1.5;
  const cx = LW / 2 + GAP / 2;

  [-1, 1].forEach(side => {
    const eye = new THREE.Group();
    eye.position.x = side * cx;
    eye.rotation.y = side * -0.07; // léger galbe de la face

    // Cerclage (acétate)
    const rim = lensShape(LW, LH, LR, 0.42);
    rim.holes.push(lensShape(LW, LH, LR, 0));
    const rimGeo = new THREE.ExtrudeGeometry(rim, { depth: 0.38, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.07, bevelSegments: 4, curveSegments: 24 });
    rimGeo.translate(0, 0, -0.19);
    eye.add(new THREE.Mesh(rimGeo, frameMat));

    // Filet métallique sous le cerclage (bas du verre)
    const wirePts = lensShape(LW, LH, LR, 0.06).getPoints().filter((p, i, all) => i > all.length * 0.55 && i < all.length * 0.95)
      .map(p => new THREE.Vector3(p.x, p.y, 0.22));
    const wireGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wirePts), 80, 0.045, 8, false);
    eye.add(new THREE.Mesh(wireGeo, metalMat));

    // Verre bombé
    const lensGeo = new THREE.ShapeGeometry(lensShape(LW, LH, LR, 0.02), 32);
    const pos = lensGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      pos.setZ(i, 0.25 - (x * x + y * y) * 0.022);
    }
    lensGeo.computeVertexNormals();
    eye.add(new THREE.Mesh(lensGeo, lensMat));

    // Rivets décoratifs
    for (const dx of [0, 0.34]) {
      const rivet = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 16), metalMat);
      rivet.rotation.x = Math.PI / 2;
      rivet.position.set(side * (LW / 2 - 0.15 - dx), LH / 2 + 0.05, 0.3);
      eye.add(rivet);
    }

    // Charnière + branche
    const hinge = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.7, 0.75), frameMat);
    hinge.position.set(side * (LW / 2 + 0.55), LH / 2 - 0.55, -0.35);
    eye.add(hinge);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.8, 12), metalMat);
    pin.position.set(side * (LW / 2 + 0.7), LH / 2 - 0.55, -0.72);
    eye.add(pin);
    const temple = new THREE.Mesh(templeGeometry(), frameMat);
    temple.position.set(side * (LW / 2 + 0.72) + 0.11, LH / 2 - 0.55, -0.65);
    temple.rotation.y = side * 0.05;
    eye.add(temple);

    // Plaquette de nez
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), new THREE.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: 0.55, roughness: 0.1 }));
    pad.scale.set(0.45, 1, 0.3);
    pad.position.set(-side * (LW / 2 - 0.55), -0.5, -0.55);
    pad.rotation.z = side * 0.35;
    eye.add(pad);

    group.add(eye);
  });

  // Pont
  const bridge = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-GAP / 2 - 0.25, 1.15, 0.05),
    new THREE.Vector3(0, 1.45, 0.25),
    new THREE.Vector3(GAP / 2 + 0.25, 1.15, 0.05)
  ]);
  const b = new THREE.Mesh(new THREE.TubeGeometry(bridge, 24, 0.24, 12, false), frameMat);
  b.scale.y = 1;
  group.add(b);

  group.userData.lensMat = lensMat;
  return group;
}

// Modèle T1 reproduit d'après les photos : sourcil en acétate noir cassé aux extrémités,
// cerclage métal argent, charnière argent à trois rainures, branches fines à embouts noirs.
function buildT1() {
  const group = new THREE.Group();
  const acetate = new THREE.MeshPhysicalMaterial({ color: '#0b0b0d', roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06 });
  const silver = new THREE.MeshStandardMaterial({ color: '#d6d8db', metalness: 1, roughness: 0.18 });
  const padMat = new THREE.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: 0.45, roughness: 0.08, clearcoat: 1 });
  const lensMat = new THREE.MeshPhysicalMaterial({
    color: CLEAR.clone(), transparent: true, opacity: 0.2, roughness: 0.04, metalness: 0,
    clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6, side: THREE.DoubleSide, depthWrite: false
  });

  const LW = 5.5, LH = 4.1, LR = 1.0, GAP = 1.8;
  const a = LW / 2, b = LH / 2, cx = a + GAP / 2;
  const outline = lensShape(LW, LH, LR, 0).getPoints();

  // Un œil construit avec l'extérieur vers +x, puis copié en miroir pour l'autre côté.
  function eye() {
    const g = new THREE.Group();

    // Sourcil : dessus plat, biseau intérieur, angle cassé qui descend vers la charnière.
    const T = b + 0.32, XI = -a - 0.05, HY = b - 0.62;
    const top = [
      new THREE.Vector2(XI, b - 0.45), new THREE.Vector2(XI, b + 0.12), new THREE.Vector2(XI + 0.3, T),
      new THREE.Vector2(a - 0.75, T), new THREE.Vector2(a + 0.32, b - 0.3), new THREE.Vector2(a + 0.32, HY)
    ];
    const under = outline.slice(0, outline.length / 2).filter(p => p.y > HY);
    const brow = new THREE.ExtrudeGeometry(new THREE.Shape([...top, ...under]), { depth: 0.45, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.06, bevelSegments: 4, curveSegments: 12 });
    brow.translate(0, 0, -0.22);
    g.add(new THREE.Mesh(brow, acetate));

    // Cerclage métal tout autour du verre
    const rimPts = lensShape(LW, LH, LR, 0.05).getPoints().map(p => new THREE.Vector3(p.x, p.y, 0.05));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPts, true), 220, 0.075, 10, true), silver));

    // Verre bombé
    const lensGeo = new THREE.ShapeGeometry(lensShape(LW, LH, LR, 0.02), 32);
    const pos = lensGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      pos.setZ(i, 0.12 - (x * x + y * y) * 0.02);
    }
    lensGeo.computeVertexNormals();
    g.add(new THREE.Mesh(lensGeo, lensMat));

    // Charnière : trois joncs argent superposés, petit talon noir dessous
    const hx = a + 0.38;
    for (const dy of [0, 0.18, 0.36]) {
      const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 1.2, 14), silver);
      ridge.rotation.x = Math.PI / 2;
      ridge.position.set(hx, HY - 0.15 - dy, -0.45);
      g.add(ridge);
    }
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 1.2), silver);
    plate.position.set(hx - 0.1, HY - 0.33, -0.45);
    g.add(plate);
    const heel = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.24, 0.6), acetate);
    heel.position.set(hx - 0.05, HY - 0.68, -0.15);
    g.add(heel);

    // Branche : tige métal fine puis embout acétate qui plonge derrière l'oreille
    const temple = new THREE.Group();
    temple.position.set(hx, HY - 0.33, -1.0);
    temple.rotation.y = -0.05;
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 9.6, 10), silver);
    rod.rotation.x = Math.PI / 2;
    rod.position.z = -4.8;
    temple.add(rod);
    const tipCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -9.4), new THREE.Vector3(0, -0.05, -12.2),
      new THREE.Vector3(0, -0.7, -13.8), new THREE.Vector3(0, -2.1, -14.8)
    ]);
    temple.add(new THREE.Mesh(new THREE.TubeGeometry(tipCurve, 48, 0.15, 12, false), acetate));
    g.add(temple);

    // Plaquette de nez sur son petit bras métal
    const arm = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-a + 0.05, 0.2, -0.05), new THREE.Vector3(-a + 0.35, -0.05, -0.35), new THREE.Vector3(-a + 0.55, -0.2, -0.6)
    ]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(arm, 12, 0.035, 6, false), silver));
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.4, 20, 14), padMat);
    pad.scale.set(0.38, 1, 0.22);
    pad.position.set(-a + 0.62, -0.45, -0.68);
    pad.rotation.z = 0.35;
    g.add(pad);
    return g;
  }

  const right = eye();
  right.position.x = cx;
  right.rotation.y = -0.06;
  const left = eye();
  left.scale.x = -1;
  left.position.x = -cx;
  left.rotation.y = 0.06;
  group.add(right, left);

  // Pont métal légèrement cintré
  const bx = cx - a + 0.15;
  const bridge = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-bx, b - 0.3, 0.02), new THREE.Vector3(0, b - 0.12, 0.12), new THREE.Vector3(bx, b - 0.3, 0.02)
  ]);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(bridge, 24, 0.09, 10, false), silver));

  group.userData.lensMat = lensMat;
  return group;
}

function shadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

export function createGlasses(canvas, opts = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  const key = new THREE.DirectionalLight('#ffffff', 1.2);
  key.position.set(4, 10, 8);
  scene.add(key);

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 200);
  const glasses = opts.model === 't1' ? buildT1() : buildGlasses(opts);
  const pivot = new THREE.Group();
  glasses.position.z = 4.5; // centre de rotation vers le milieu des branches
  pivot.add(glasses);
  scene.add(pivot);

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(18, 9), new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false, opacity: 0.35 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -4.6;
  scene.add(shadow);

  const lensMat = glasses.userData.lensMat;
  let tint = 0, tintTarget = opts.tint || 0;
  let rotY = opts.rotationY ?? -0.55, rotX = opts.rotationX ?? 0.12;
  let targetY = rotY, targetX = rotX;
  const baseY = rotY;
  let dragging = false, lastX = 0, lastY = 0, idle = 0;
  const auto = opts.autoRotate !== false && !reduce;

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Recule la caméra pour que la monture (~19 unités de large) tienne dans le cadre.
    const fitW = (opts.fit || 21) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
    const fitH = (opts.fitH || 17) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    const d = Math.max(fitW, fitH);
    camera.position.set(0, d * 0.16, d);
    camera.lookAt(0, -0.4, 0);
    camera.updateProjectionMatrix();
  }

  function applyTint(t) {
    lensMat.color.copy(CLEAR).lerp(DARK, t);
    lensMat.opacity = THREE.MathUtils.lerp(0.18, 0.9, t);
  }

  if (opts.interactive !== false) {
    canvas.style.touchAction = 'pan-y';
    canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); canvas.classList.add('grabbing'); });
    canvas.addEventListener('pointermove', e => {
      if (!dragging) return;
      targetY += (e.clientX - lastX) * 0.01;
      targetX = THREE.MathUtils.clamp(targetX + (e.clientY - lastY) * 0.005, -0.4, 0.6);
      lastX = e.clientX; lastY = e.clientY; idle = 0;
    });
    const end = () => { dragging = false; canvas.classList.remove('grabbing'); };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
  }

  let visible = true, raf = 0, last = performance.now(), time = 0;
  function frame(now) {
    raf = 0;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now; time += dt; idle += dt;
    // Balancement doux autour de la pose initiale (les branches ne passent jamais devant).
    if (auto && !dragging && idle > 2.5) targetY += (baseY + Math.sin(time * 0.35) * 0.6 - targetY) * Math.min(1, dt * 0.8);
    rotY += (targetY - rotY) * Math.min(1, dt * 6);
    rotX += (targetX - rotX) * Math.min(1, dt * 6);
    pivot.rotation.set(rotX, rotY, 0);
    pivot.position.y = reduce ? 0 : Math.sin(time * 1.1) * 0.12;
    tint += (tintTarget - tint) * Math.min(1, dt * (opts.tintSpeed || 2.2));
    applyTint(tint);
    renderer.render(scene, camera);
    if (visible) raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(canvas);
  new ResizeObserver(resize).observe(canvas);
  resize();
  applyTint(tint);
  start();

  return {
    setTint(t) { tintTarget = THREE.MathUtils.clamp(t, 0, 1); },
    setTintNow(t) { tintTarget = tint = THREE.MathUtils.clamp(t, 0, 1); },
    setRotation(y, x) { targetY = y; if (x !== undefined) targetX = x; idle = -1e9; }
  };
}
