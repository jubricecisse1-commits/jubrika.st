import { PRODUCTS } from './products.js';
import { doualaDeliveryFees, yaoundeDeliveryFees, shippingFees, resolveArea, getDeliveryFee } from './delivery.js';

const WHATSAPP = '237689748143';
const PHONE = '+237652212999';
const money = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const discount = p => Math.round((1 - p.price / p.oldPrice) * 100);
const shortName = p => { const n = p.name.replace(/^Lunettes /, ''); return n[0].toUpperCase() + n.slice(1); };
const starsLabel = p => p.rating ? `★ ${p.rating} · ${p.reviews}` : '';

/* ---------- Menu mobile ---------- */
const menuBtn = $('#menu-btn'), links = $('#gnav-links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); } });

/* ---------- Collection ---------- */
const grid = $('#grid');
grid.innerHTML = PRODUCTS.map(p => `
  <article class="card" data-categories="${esc(p.categories.join(' '))}">
    <a class="card-media" href="#produit-${p.ref}"><img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy"></a>
    <p class="launch">${p.categories.includes('Premium') ? 'Premium' : `Promo −${discount(p)} %`}</p>
    <h3>${esc(shortName(p))}</h3>
    <p class="rating">${esc(starsLabel(p))}</p>
    <p class="price">${money(p.price)}<s>${money(p.oldPrice)}</s></p>
    <div class="card-actions">
      <a class="pill pill-blue" href="#produit-${p.ref}">Acheter</a>
      <a class="text-link" href="#produit-${p.ref}">En savoir plus ›</a>
    </div>
  </article>`).join('');

function applyFilter(name) {
  $$('.filters .pill').forEach(b => {
    const on = b.dataset.filter === name;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  $$('.card', grid).forEach(c => { c.hidden = name !== 'Tous' && !c.dataset.categories.split(' ').includes(name); });
}
$$('.filters .pill').forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.filter)));
$$('a[data-filter]').forEach(a => a.addEventListener('click', () => applyFilter(a.dataset.filter)));

/* ---------- Points forts ---------- */
const hl = $('#highlights'), hlCards = $$('.hl-card', hl), dots = $('#hl-dots');
dots.innerHTML = hlCards.map(() => '<i></i>').join('');
const hlIndex = () => Math.round(hl.scrollLeft / (hlCards[0].offsetWidth + 20));
const markDot = () => $$('i', dots).forEach((d, i) => d.classList.toggle('on', i === Math.min(hlIndex(), hlCards.length - 1)));
const goHl = i => hl.scrollTo({ left: Math.max(0, Math.min(i, hlCards.length - 1)) * (hlCards[0].offsetWidth + 20), behavior: 'smooth' });
hl.addEventListener('scroll', markDot, { passive: true });
$('#hl-prev').addEventListener('click', () => goHl(hlIndex() - 1));
$('#hl-next').addEventListener('click', () => goHl(hlIndex() + 1));
markDot();

/* ---------- 3D ---------- */
const storySection = $('#photochromique');
const steps = $$('.story-steps .step');
const uvFill = $('#uv-fill');
let story = null;
let t1Model = null;

function storyProgress() {
  const r = storySection.getBoundingClientRect();
  const total = storySection.offsetHeight - window.innerHeight;
  return Math.max(0, Math.min(1, -r.top / total));
}
function onStoryScroll() {
  const p = storyProgress();
  // 0 → 0.33 : intérieur ; 0.33 → 0.7 : les verres foncent ; au-delà : récapitulatif
  const tint = Math.max(0, Math.min(1, (p - 0.2) / 0.45));
  const step = p < 0.33 ? 0 : p < 0.72 ? 1 : 2;
  steps.forEach((s, i) => s.classList.toggle('active', i === step));
  uvFill.style.width = (tint * 100) + '%';
  if (story) {
    story.setTint(tint);
    story.setRotation(-0.6 + p * 0.6, 0.12 - p * 0.1);
  }
}
window.addEventListener('scroll', onStoryScroll, { passive: true });
onStoryScroll();

import('./glasses3d.js').then(({ createGlasses, webglAvailable }) => {
  if (!webglAvailable()) throw new Error('webgl');
  const hero = createGlasses($('#hero-canvas'), { model: 't1', rotationY: -0.6, rotationX: 0.14 });
  $$('.light-toggle button').forEach(b => b.addEventListener('click', () => {
    $$('.light-toggle button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
    hero.setTint(Number(b.dataset.tint));
  }));
  story = createGlasses($('#story-canvas'), { model: 't1', autoRotate: false, interactive: false, tintSpeed: 5, rotationY: -0.6 });
  t1Model = () => createGlasses($('#t1-canvas'), { model: 't1', rotationY: -0.6, rotationX: 0.12 });
  onStoryScroll();
}).catch(() => {
  // Pas de WebGL : on affiche des photos à la place des scènes 3D.
  $('#hero-canvas').hidden = true; $('.hero-fallback').hidden = false;
  $('.light-toggle').hidden = true; $('.drag-hint').hidden = true;
  $('#story-canvas').hidden = true; $('.story-fallback').hidden = false;
  $('.seg').hidden = true;
});

/* ---------- T1 : 360° réel ---------- */
const SPIN_FRAMES = 72;
const spin = $('#spin'), spinImg = $('#spin-img'), spinRange = $('#spin-range');
const frames = Array.from({ length: SPIN_FRAMES }, (_, i) => `img/t1-360/${String(i).padStart(2, '0')}.webp`);
let spinIndex = 0, spinTouched = false;
function showFrame(i) {
  spinIndex = ((Math.round(i) % SPIN_FRAMES) + SPIN_FRAMES) % SPIN_FRAMES;
  spinImg.src = frames[spinIndex];
  spinRange.value = spinIndex;
}
// Précharge toutes les vues pour une rotation fluide
frames.forEach(src => { const im = new Image(); im.src = src; });
let dragX = null, dragStart = 0;
spin.addEventListener('pointerdown', e => { dragX = e.clientX; dragStart = spinIndex; spinTouched = true; spin.setPointerCapture(e.pointerId); spin.classList.add('grabbing'); });
spin.addEventListener('pointermove', e => { if (dragX !== null) showFrame(dragStart - (e.clientX - dragX) / 8); });
const endDrag = () => { dragX = null; spin.classList.remove('grabbing'); };
spin.addEventListener('pointerup', endDrag);
spin.addEventListener('pointercancel', endDrag);
spinRange.addEventListener('input', () => { spinTouched = true; showFrame(Number(spinRange.value)); });
// Tourne doucement tout seul tant que personne n'y a touché
let spinVisible = false;
new IntersectionObserver(([e]) => { spinVisible = e.isIntersecting; }).observe(spin);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => { if (spinVisible && !spinTouched && !spin.hidden) showFrame(spinIndex + 1); }, 90);
}

// Bascule 360° réel / modèle 3D
let t1Created = null;
$$('.seg button').forEach(b => b.addEventListener('click', () => {
  const model = b.dataset.view === 'model';
  $$('.seg button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
  spin.hidden = model; $('#spin-ctrl').hidden = model;
  $('#t1-canvas').hidden = !model; $('#t1-toggle').hidden = !model;
  if (model && !t1Created && t1Model) t1Created = t1Model();
}));
$$('#t1-toggle button').forEach(b => b.addEventListener('click', () => {
  $$('#t1-toggle button').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
  t1Created?.setTint(Number(b.dataset.tint));
}));

// Avant / après
const compareRange = $('#compare-range');
compareRange.addEventListener('input', () => {
  const v = compareRange.value;
  $('#compare-top').style.clipPath = `inset(0 0 0 ${v}%)`;
  $('#compare-line').style.left = v + '%';
});

/* ---------- Toast ---------- */
const toast = $('#toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg; toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 4200);
}

/* ---------- Fiche produit ---------- */
const sheet = $('#sheet'), sheetBody = $('#sheet-body');
const CITIES = ['Douala', 'Yaoundé', ...Object.keys(shippingFees), 'Autre ville'];
const quartierList = city => Object.keys(city === 'Douala' ? doualaDeliveryFees : yaoundeDeliveryFees).sort((a, b) => a.localeCompare(b, 'fr'));

function openProduct(ref) {
  const p = PRODUCTS.find(x => x.ref.toLowerCase() === String(ref).toLowerCase());
  if (!p) return;
  sheetBody.innerHTML = `
    <div class="gallery">
      <div class="gallery-main"><img id="g-main" src="${p.images[0]}" alt="${esc(p.name)}"></div>
      <div class="thumbs">${p.images.map((src, i) => `<button class="${i ? '' : 'on'}" data-src="${src}" aria-label="Photo ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>
    </div>
    <div class="info">
      <p class="launch">${p.categories.includes('Premium') ? 'Sélection Premium' : `Promo −${discount(p)} %`} · Réf. ${esc(p.ref)}</p>
      <h2 id="sheet-title">${esc(p.name)}</h2>
      <p class="rating">${esc(starsLabel(p))}</p>
      <p class="price">${money(p.price)}<s>${money(p.oldPrice)}</s></p>
      <p class="short">${esc(p.short)}</p>
      <details>
        <summary>Description et caractéristiques</summary>
        <p>${esc(p.long)}</p>
        <ul class="specs">${p.specs.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
      </details>

      <form class="order" novalidate>
        <h3>Commander</h3>
        ${p.colors.length ? `
        <div class="field" data-f="color">
          <label>Couleur <em>*</em></label>
          <div class="swatches">${p.colors.map(c => `<button type="button" class="pill pill-outline" data-color="${esc(c)}">${esc(c)}</button>`).join('')}</div>
        </div>` : ''}
        <div class="field">
          <label for="f-qty">Quantité</label>
          <div class="qty"><button type="button" data-q="-1" aria-label="Moins">−</button><input id="f-qty" type="number" min="1" value="1" inputmode="numeric"><button type="button" data-q="1" aria-label="Plus">+</button></div>
        </div>
        <div class="row2">
          <div class="field" data-f="name"><label for="f-name">Nom <em>*</em></label><input id="f-name" autocomplete="name"></div>
          <div class="field" data-f="phone"><label for="f-phone">Téléphone <em>*</em></label><input id="f-phone" type="tel" autocomplete="tel" inputmode="tel"></div>
        </div>
        <div class="field" data-f="city">
          <label for="f-city">Ville <em>*</em></label>
          <select id="f-city"><option value="">Sélectionnez votre ville</option>${CITIES.map(c => `<option>${c}</option>`).join('')}</select>
        </div>
        <div class="field" data-f="area">
          <label for="f-area" id="l-area">Quartier <em>*</em></label>
          <input id="f-area" list="dl-area" autocomplete="off" placeholder="Commencez à taper votre quartier">
          <datalist id="dl-area"></datalist>
        </div>
        <div class="field">
          <label for="f-addr" id="l-addr">Adresse ou repère de livraison</label>
          <input id="f-addr" placeholder="Ex : immeuble, rue, carrefour, lieu connu…">
        </div>
        <div class="summary">
          <div><span>${esc(p.ref)} × <b id="s-q">1</b></span><span id="s-sub">${money(p.price)}</span></div>
          <div><span id="s-dl-label">Livraison</span><span id="s-dl">—</span></div>
          <div class="total"><span>Total</span><span id="s-total">${money(p.price)}</span></div>
        </div>
        <button type="submit" class="pill pill-blue btn-block">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fill="currentColor"/></svg>
          Commander sur WhatsApp
        </button>
        <a class="pill pill-outline btn-block btn-call" href="tel:${PHONE}">Commander par appel</a>
        <p class="note">Livraison à Douala et Yaoundé avec paiement à la livraison. Pour les autres villes, expédition par l’agence de votre choix.</p>
      </form>
    </div>`;

  // Galerie
  const main = $('#g-main', sheetBody);
  $$('.thumbs button', sheetBody).forEach(b => b.addEventListener('click', () => {
    main.src = b.dataset.src;
    $$('.thumbs button', sheetBody).forEach(x => x.classList.toggle('on', x === b));
  }));

  setupOrder(p);
  if (!sheet.open) sheet.showModal();
  sheetBody.scrollTop = 0;
}

function setupOrder(p) {
  const f = $('form.order', sheetBody);
  const qty = $('#f-qty', f), name = $('#f-name', f), phone = $('#f-phone', f), city = $('#f-city', f);
  const area = $('#f-area', f), addr = $('#f-addr', f), dl = $('#dl-area', f);
  let color = '';

  const isLocal = () => city.value === 'Douala' || city.value === 'Yaoundé';
  const isShip = () => Object.prototype.hasOwnProperty.call(shippingFees, city.value);
  const isOther = () => city.value === 'Autre ville';
  const delivery = () => isLocal() ? getDeliveryFee(city.value, area.value) : isShip() ? shippingFees[city.value] : 0;

  $$('[data-color]', f).forEach(b => b.addEventListener('click', () => {
    color = b.dataset.color;
    $$('[data-color]', f).forEach(x => x.classList.toggle('active', x === b));
    clearErr('color');
  }));
  $$('[data-q]', f).forEach(b => b.addEventListener('click', () => { qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) + Number(b.dataset.q)); update(); }));

  function cityUI() {
    const areaField = $('[data-f=area]', f);
    areaField.hidden = isShip();
    if (isLocal()) {
      $('#l-area', f).innerHTML = 'Quartier <em>*</em>';
      area.placeholder = 'Commencez à taper votre quartier';
      dl.innerHTML = quartierList(city.value).map(q => `<option value="${esc(q)}">`).join('');
    } else {
      dl.innerHTML = '';
      if (isOther()) { $('#l-area', f).innerHTML = 'Votre ville <em>*</em>'; area.placeholder = 'Saisissez votre ville'; }
    }
    const ship = isShip() || isOther();
    $('#l-addr', f).textContent = ship ? 'Agence ou compagnie de transport souhaitée' : 'Adresse ou repère de livraison';
    addr.placeholder = ship ? 'Ex : Général, Touristique, Overline…' : 'Ex : immeuble, rue, carrefour, lieu connu…';
    area.value = '';
    update();
  }

  function update() {
    const q = Math.max(1, parseInt(qty.value, 10) || 1);
    const sub = p.price * q;
    $('#s-q', f).textContent = q;
    $('#s-sub', f).textContent = money(sub);
    $('#s-dl-label', f).textContent = isShip() || isOther() ? 'Expédition' : 'Livraison';
    if (!city.value || (isLocal() && !resolveArea(city.value, area.value))) {
      $('#s-dl', f).textContent = '—';
      $('#s-total', f).textContent = money(sub);
    } else if (isOther()) {
      $('#s-dl', f).textContent = 'À confirmer';
      $('#s-total', f).textContent = 'À confirmer';
    } else {
      $('#s-dl', f).textContent = money(delivery());
      $('#s-total', f).textContent = money(sub + delivery());
    }
  }

  function setErr(key, msg) {
    const field = $(`[data-f=${key}]`, f);
    field.classList.add('err');
    if (!$('.msg', field)) field.insertAdjacentHTML('beforeend', `<span class="msg">${esc(msg)}</span>`);
    return field;
  }
  function clearErr(key) {
    const field = $(`[data-f=${key}]`, f);
    if (!field) return;
    field.classList.remove('err');
    $('.msg', field)?.remove();
  }

  city.addEventListener('change', () => { clearErr('city'); clearErr('area'); cityUI(); });
  qty.addEventListener('input', update);
  area.addEventListener('input', () => { clearErr('area'); update(); });
  name.addEventListener('input', () => clearErr('name'));
  phone.addEventListener('input', () => clearErr('phone'));

  f.addEventListener('submit', e => {
    e.preventDefault();
    ['color', 'name', 'phone', 'city', 'area'].forEach(clearErr);
    const errors = [];
    if (p.colors.length && !color) errors.push(setErr('color', 'Choisissez une couleur.'));
    if (!name.value.trim()) errors.push(setErr('name', 'Votre nom est obligatoire.'));
    if (!phone.value.trim()) errors.push(setErr('phone', 'Votre numéro est obligatoire.'));
    if (!city.value) errors.push(setErr('city', 'Votre ville est obligatoire.'));
    else if (isLocal() && !area.value.trim()) errors.push(setErr('area', 'Votre quartier est obligatoire.'));
    else if (isLocal() && !resolveArea(city.value, area.value)) errors.push(setErr('area', `Choisissez un quartier proposé pour ${city.value}.`));
    else if (isOther() && !area.value.trim()) errors.push(setErr('area', 'Saisissez votre ville.'));
    if (errors.length) {
      errors[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Veuillez compléter les champs obligatoires (*).');
      return;
    }

    const q = Math.max(1, parseInt(qty.value, 10) || 1);
    const sub = p.price * q;
    let dlText, totalText, locationText, logisticsText;
    if (isLocal()) {
      dlText = money(delivery()); totalText = money(sub + delivery());
      locationText = `Quartier : ${resolveArea(city.value, area.value)}`;
      logisticsText = `Adresse / repère : ${addr.value.trim()}`;
    } else if (isShip()) {
      dlText = money(shippingFees[city.value]); totalText = money(sub + shippingFees[city.value]);
      locationText = 'Mode : Expédition';
      logisticsText = `Agence de préférence : ${addr.value.trim()}`;
    } else {
      dlText = 'À confirmer avec le service client'; totalText = 'À confirmer';
      locationText = `Ville d’expédition : ${area.value.trim()}`;
      logisticsText = `Agence de préférence : ${addr.value.trim()}`;
    }
    const lines = [
      'Bonjour, je souhaite commander chez JUBRIKA.', '',
      `Produit : ${p.name} (Réf. ${p.ref})`,
      color ? `Couleur : ${color}` : null,
      `Quantité : ${q}`,
      `Prix unitaire : ${money(p.price)}`,
      `Sous-total : ${money(sub)}`,
      `Livraison / Expédition : ${dlText}`,
      `TOTAL : ${totalText}`, '',
      `Nom : ${name.value.trim()}`,
      `Téléphone : ${phone.value.trim()}`,
      `Ville : ${isOther() ? area.value.trim() : city.value}`,
      locationText, logisticsText
    ].filter(l => l !== null);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });

  update();
}

function closeProduct() {
  if (sheet.open) sheet.close();
}
sheet.addEventListener('close', () => {
  if (location.hash.startsWith('#produit-')) history.replaceState(null, '', location.pathname + location.search);
});
$('#sheet-close').addEventListener('click', closeProduct);
sheet.addEventListener('click', e => { if (e.target === sheet) closeProduct(); });

function route() {
  const m = location.hash.match(/^#produit-([\w]+)$/i);
  if (m) openProduct(m[1]);
}
window.addEventListener('hashchange', route);
route();
