const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const schema = name => JSON.parse(read(name).match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

function createRuntimeEnvironment() {
  let nextFrame = 0;
  let nextTimer = 0;
  const timers = new Map();
  class Element {
    constructor() { this.attributes = new Set(); this.events = {}; }
    setAttribute(name) { this.attributes.add(name); }
    removeAttribute(name) { this.attributes.delete(name); }
    hasAttribute(name) { return this.attributes.has(name); }
    toggleAttribute(name, on) { on ? this.setAttribute(name) : this.removeAttribute(name); }
    addEventListener(name, callback) { this.events[name] = callback; }
    matches() { return false; }
  }
  const context = {
    setTimeout: callback => { const id = ++nextTimer; timers.set(id, callback); return id; },
    clearTimeout: id => timers.delete(id),
    HTMLElement: Element, AbortController, document: { hidden: false, addEventListener() {} },
    window: {}, customElements: { get() {}, define() {} },
    requestAnimationFrame: () => ++nextFrame, cancelAnimationFrame() {},
    ResizeObserver: class { observe() {} disconnect() {} },
    MutationObserver: class { observe() {} disconnect() {} },
    matchMedia: query => ({ matches: !query.includes('reduced-motion'), addEventListener() {} })
  };
  vm.createContext(context);
  vm.runInContext(read('assets/collection-marquee.js') + ';globalThis.Runtime = CollectionMarquee;', context);
  return () => {
  const element = new context.Runtime();
  Object.assign(element, {
    distance: 1000.375, origin: 4000.125, phase: 0, velocity: 0,
    state: 'rest', active: false, nativeMode: false, lastTime: null, isConnected: true,
    pendingHover: () => [...timers.values()].at(-1),
    flushHover: () => { const pending = [...timers.values()]; timers.clear(); pending.forEach(callback => callback()); },
    pointer: { matches: true }, motion: { matches: false },
    viewport: { scrollLeft: 0 }, track: { style: {} },
    dataset: { speed: '0.6', direction: 'backward' }
  });
  return element;
  };
}
const runtime = createRuntimeEnvironment();

function advance(element, from = 0, duration = 1000, interval = 1000 / 60) {
  for (let time = from; time <= from + duration; time += interval) {
    if (element.frame) element.tick(time);
  }
}

test('static header and constrained child slots remain immediately after Hero', () => {
  const section = schema('sections/collection-marquee.liquid');
  const block = schema('blocks/_collection-marquee.liquid');
  assert.deepEqual(section.blocks.map(x => x.type), ['_collection-marquee']);
  assert.equal(block.blocks, undefined);
  assert.doesNotMatch(read('blocks/_collection-marquee.liquid'), /content_for 'blocks'/);
  assert.deepEqual([...read('blocks/_collection-marquee.liquid').matchAll(/content_for 'block', type: '_collection-marquee-image', id: '([^']+)'/g)].map(x => x[1]), ['image-1', 'image-2']);
  assert.ok(block.presets[0].blocks.every(x => x.static));
  for (const row of section.presets[0].blocks.filter(x => x.type === '_collection-marquee')) {
    assert.deepEqual(row.blocks.map(x => x.id), ['image-1','image-2']);
    assert.ok(row.blocks.every(x => x.static));
  }
  assert.equal(section.presets[0].blocks.find(x => x.id === 'header').static, true);
  const template = JSON.parse(read('templates/index.json').replace(/^[\s\S]*?(?=\{)/, ''));
  const index = template.order.indexOf('kinetra_collection_marquee');
  assert.equal(template.sections[template.order[index - 1]].type, 'hero');
  for (const row of Object.values(template.sections.kinetra_collection_marquee.blocks).filter(x => x.type === '_collection-marquee')) {
    assert.deepEqual(Object.keys(row.blocks), ['image-1','image-2']);
    assert.equal(row.block_order, undefined);
    assert.ok(Object.values(row.blocks).every(x => x.static));
  }
});

test('resting and moving title are one semantic element, without an opacity handoff', () => {
  const source = read('blocks/_collection-marquee.liquid');
  assert.equal((source.match(/<h2\b/g) || []).length, 1);
  assert.match(source, /<h2 data-cm-title/);
  assert.doesNotMatch(source, /collection-marquee__rest/);
  assert.match(source, /\[data-cm-source\] > \[data-cm-title\] \{ opacity: 1;/);
});

test('section alignment maps to inherited header context with an optional mobile override', async () => {
  const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
  const Liquid = loadLiquid();
  const engine = new Liquid();
  engine.registerFilter('asset_url', value => value);
  const source = stripShopifyMetadata(read('sections/collection-marquee.liquid'))
    .replace(/{% content_for[^%]*%}/g, '');
  for (const [alignment, expected] of [['left', 'flex-start'], ['center', 'center'], ['right', 'flex-end']]) {
    const inherited = await engine.parseAndRender(source, { section: { settings: { alignment, alignment_mobile: 'left', customize_mobile_alignment: false } } });
    assert.ok(inherited.includes(`--flex-align:${expected};--flex-align-mobile:${expected};`));
    const override = await engine.parseAndRender(source, { section: { settings: { alignment, alignment_mobile: 'right', customize_mobile_alignment: true } } });
    assert.ok(override.includes(`--flex-align:${expected};--flex-align-mobile:flex-end;`));
  }
  const definition = schema('sections/collection-marquee.liquid');
  assert.equal(definition.settings.find(setting => setting.id === 'alignment_mobile').label, 't:labels.alignment_mobile');
  assert.equal(definition.settings.find(setting => setting.id === 'alignment_mobile').visible_if, '{{ section.settings.customize_mobile_alignment }}');
});

test('short and long fractional cycles move continuously in both directions at all supported speeds', () => {
  for (const width of [80.125, 321.375, 1000.5, 12000.875]) {
    for (const direction of ['forward', 'backward']) {
      for (const speed of [0.1, 0.6, 2]) {
        const element = runtime();
        element.distance = width;
        element.dataset = { direction, speed };
        element.setActive(true);
        const before = element.track.style.transform;
        element.tick(0);
        assert.equal(element.phase, 0);
        for (let frame = 1; frame <= 180; frame++) {
          const previous = element.phase;
          element.tick(frame * 1000 / 60);
          const signedStep = direction === 'forward' ? previous - element.phase : element.phase - previous;
          const step = ((signedStep % width) + width) % width;
          assert.ok(step >= 0 && step <= speed + 0.0001, `${width}/${direction}/${speed}: ${step}`);
          assert.ok(element.phase >= 0 && element.phase < width);
        }
        assert.ok(Number.isFinite(element.velocity));
        assert.notEqual(element.track.style.transform, before);
        assert.equal(element.active, true);
      }
    }
  }
});

test('hovering the already selected row preserves its phase and velocity', () => {
  const element = runtime();
  element.setActive(true);
  advance(element);
  const snapshot = [element.phase, element.velocity, element.frame, element.track.style.transform];
  element.setActive(true);
  assert.deepEqual([element.phase, element.velocity, element.frame, element.track.style.transform], snapshot);
  assert.doesNotMatch(read('assets/collection-marquee.js'), /addEventListener\('pointerleave'/);
});

test('switching rows hides the previous strip synchronously and centers its one heading', () => {
  for (const phase of [0.125, 321.875, 999.875, 11990.25]) {
    const element = runtime();
    element.distance = 12000.875;
    element.setActive(true);
    element.phase = phase;
    element.velocity = 36;
    element.renderPosition();
    element.setActive(false);
    assert.equal(element.frame, 0);
    assert.equal(element.hasAttribute('data-strip-visible'), false);
    assert.equal(element.phase, 0);
    assert.equal(element.velocity, 0);
    assert.equal(element.track.style.transform, `translate3d(${-element.origin}px, 0, 0)`);
    element.setActive(true);
    assert.equal(element.phase, 0);
    assert.equal(element.velocity, 0);
  }
});

test('focus and reduced motion pause without switching between scrollLeft and transform', () => {
  for (const guard of ['focus', 'reduced', 'editor']) {
    const element = runtime();
    element.setActive(true);
    advance(element);
    const transform = element.track.style.transform;
    const phase = element.phase;
    if (guard === 'focus') element.matches = () => true;
    if (guard === 'reduced') element.motion.matches = true;
    if (guard === 'editor') element.setAttribute('data-editor-selected', '');
    element.updateMotion();
    assert.equal(element.frame, 0);
    assert.equal(element.phase, phase);
    assert.equal(element.track.style.transform, transform);
    assert.equal(element.viewport.scrollLeft, 0);
  }
});

function initializedRow(composition) {
  const element = runtime();
  const title = {
    events: {},
    addEventListener(name, callback) { this.events[name] = callback; },
    querySelector() { return null; }
  };
  const source = { querySelector() { return title; } };
  const viewport = {};
  const track = {};
  element.querySelector = selector => ({ '.collection-marquee__viewport': viewport, '.collection-marquee__track': track, '[data-cm-source]': source })[selector];
  element.closest = () => composition;
  element.measure = () => { element.distance = 1000; element.origin = 4000; element.track.style = {}; element.nativeMode = false; };
  element.abort = new AbortController();
  composition.rows.push(element);
  element.initialize();
  return element;
}

test('only the original solid title receives hover selection, with the desktop pointer guard', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const first = initializedRow(section);
  const second = initializedRow(section);
  assert.equal(second.events.pointerenter, undefined);
  assert.equal(second.events.pointerover, undefined);
  assert.equal(second.pendingHover(), undefined);
  second.pointer.matches = false;
  second.sourceTitle.events.pointerenter();
  second.flushHover();
  assert.equal(first.active, true);
  assert.equal(second.active, false);
  second.pointer.matches = true;
  second.sourceTitle.events.pointerenter();
  assert.equal(first.active, true);
  second.flushHover();
  assert.equal(first.active, false);
  assert.equal(second.active, true);
});

test('first row starts automatically; hover switches only the containing section', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const other = { rows: [], querySelectorAll() { return this.rows; } };
  const first = initializedRow(section);
  const second = initializedRow(section);
  const independent = initializedRow(other);
  assert.equal(first.active, true);
  assert.equal(second.active, false);
  assert.equal(independent.active, true);
  advance(first);
  const previous = first.phase;
  second.sourceTitle.events.pointerenter();
  assert.equal(first.active, true);
  assert.equal(first.state, 'active');
  assert.equal(first.phase, previous);
  assert.equal(second.active, false);
  second.flushHover();
  assert.equal(first.active, false);
  assert.equal(first.state, 'rest');
  assert.equal(first.phase, 0);
  assert.equal(second.active, true);
  assert.equal(independent.active, true);
  assert.equal(section.rows.filter(row => row.active).length, 1);
  assert.match(read('assets/collection-marquee.js'), /rows\[0\] === this && !rows.some\(row => row.active\)/);
});

function geometry(width, titleWidth, firstImageWidth, viewportWidth) {
  const element = runtime();
  const rect = { left: -1234.375, width };
  const titleRect = { left: rect.left + firstImageWidth + 24, width: titleWidth };
  const clones = [];
  const clone = () => {
    const node = { removeAttribute() {}, setAttribute() {}, querySelectorAll() { return []; }, classList: { remove() {} }, matches() { return false; } };
    node.remove = () => clones.splice(clones.indexOf(node), 1);
    return node;
  };
  element.source = { getBoundingClientRect: () => rect, cloneNode: clone };
  element.sourceTitle = { getBoundingClientRect: () => titleRect };
  element.viewport.getBoundingClientRect = () => ({ width: viewportWidth });
  Object.assign(element.track, { querySelectorAll: () => [...clones], prepend: x => clones.push(x), append: x => clones.push(x) });
  element.distance = undefined;
  return { element, rect, titleRect, clones, viewportWidth };
}

test('all mobile rows autoplay without hover and return to one centered selection on desktop', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const rows = [initializedRow(section), initializedRow(section), initializedRow(section)];
  for (const row of rows) {
    row.pointer.matches = false;
    row.updateMotion();
    assert.equal(row.hasAttribute('data-strip-visible'), true);
    assert.ok(row.frame);
    advance(row);
    assert.ok(row.phase > 0);
    assert.ok(row.velocity > 0);
  }
  for (const row of rows) {
    row.motion.matches = true;
    row.updateMotion();
    assert.equal(row.frame, 0);
    row.motion.matches = false;
    row.updateMotion();
    assert.ok(row.frame);
    row.pointer.matches = true;
    row.updateMotion();
    if (!row.active) {
      assert.equal(row.frame, 0);
      assert.equal(row.phase, 0);
      assert.equal(row.track.style.transform, `translate3d(${-row.origin}px, 0, 0)`);
    }
  }
  assert.equal(rows.filter(row => row.hasAttribute('data-strip-visible')).length, 1);
});

test('mobile measurement uses continuous transforms; reduced motion retains manual scrolling', () => {
  const { element } = geometry(1000.25, 300.125, 120, 375);
  element.pointer.matches = false;
  element.measure();
  assert.equal(element.nativeMode, false);
  assert.equal(element.viewport.scrollLeft, 0);
  assert.ok(element.track.style.transform.startsWith('translate3d('));
  assert.ok(element.frame);
  element.motion.matches = true;
  element.measure(true);
  assert.equal(element.nativeMode, true);
  assert.equal(element.track.style.transform, '');
  assert.equal(element.frame, 0);
  assert.ok(element.viewport.scrollLeft > 0);
});

test('fractional title centers are exact across short/long text, image counts and viewport widths', () => {
  for (const titleWidth of [7.625, 263.375, 558.125, 9876.875]) {
    for (const imageCount of [0, 1, 2, 5]) {
      for (const viewport of [320, 375, 768.5, 1920]) {
        const firstImage = imageCount ? 200.375 : -24;
        const distance = titleWidth * 2 + imageCount * 224.375 + 80;
        const fixture = geometry(distance, titleWidth, firstImage, viewport);
        const { element, clones } = fixture;
        element.measure();
        const copies = clones.length / 2;
        const titleCenter = copies * distance + firstImage + 24 + titleWidth / 2 - element.origin;
        assert.ok(Math.abs(titleCenter - viewport / 2) < 0.000001);
        element.setActive(true);
        advance(element);
        const snapshot = [element.phase, element.velocity, element.frame, element.track.style.transform];
        element.measure();
        assert.deepEqual([element.phase, element.velocity, element.frame, element.track.style.transform], snapshot);
      }
    }
  }
});

test('font/size changes preserve normalized scroll phase instead of restarting the row', () => {
  const { element, rect } = geometry(1000.25, 300.125, 200.375, 1440);
  element.measure();
  element.setActive(true);
  advance(element);
  const normalized = element.phase / element.distance;
  const velocity = element.velocity;
  rect.width = 2000.5;
  element.measure();
  assert.ok(Math.abs(element.phase / element.distance - normalized) < 0.00000001);
  assert.equal(element.velocity, velocity);
  assert.equal(element.active, true);
});


test('debounced rapid hover activates only the final row and never leaves two strips visible', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const first = initializedRow(section);
  const second = initializedRow(section);
  const third = initializedRow(section);
  second.sourceTitle.events.pointerenter();
  assert.equal(first.active, true);
  assert.equal(first.hasAttribute('data-strip-visible'), true);
  third.sourceTitle.events.pointerenter();
  assert.equal(section.rows.filter(row => row.active).length, 1);
  third.flushHover();
  assert.equal(second.active, false);
  assert.equal(third.active, true);
  assert.equal(section.rows.filter(row => row.active).length, 1);
  const phase = third.phase;
  third.sourceTitle.events.pointerenter();
  assert.equal(third.phase, phase);
});

test('collection/title fallbacks, link ownership and typography match the requested contract', async () => {
  const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
  const Liquid = loadLiquid();
  const engine = new Liquid();
  engine.registerFilter('t', key => key === 'collection_marquee.placeholder_title' ? 'Collection title' : key);
  const source = stripShopifyMetadata(read('blocks/_collection-marquee.liquid'))
    .replace(/{% content_for[^%]*%}/g, '<div class="marquee-image-block"></div>')
    .replace(/{% render[^%]*%}/g, '');
  const render = settings => engine.parseAndRender(source, { block: { settings } });
  const fallback = await render({ heading: '   ' });
  assert.match(fallback, />Collection title<\/h2>/);
  assert.doesNotMatch(fallback, /<a /);
  const collection = { title: 'Training essentials', url: '/collections/training' };
  const inherited = await render({ collection, heading: '' });
  assert.match(inherited, />Training essentials<\/h2>/);
  assert.equal((inherited.match(/<a /g) || []).length, 1);
  assert.match(inherited, /href="\/collections\/training"/);
  const custom = await render({ collection, heading: 'Short & sweet', font: 'body', heading_size: 'xl', text_color: '#123456' });
  assert.match(custom, />Short &amp; sweet<\/h2>/);
  assert.match(custom, /--cm-font:var\(--font-body-family\)/);
  assert.match(custom, /--cm-color:#123456/);
  assert.equal((custom.match(/<a /g) || []).length, 1);
  const definition = schema('blocks/_collection-marquee.liquid');
  const heading = schema('blocks/heading.liquid');
  const ids = definition.settings.map(x => x.id);
  assert.equal(ids.indexOf('font') + 1, ids.indexOf('heading_size'));
  assert.deepEqual(definition.settings.find(x => x.id === 'heading_size'), heading.settings.find(x => x.id === 'heading_size'));
  assert.deepEqual(definition.settings.find(x => x.id === 'text_color'), heading.settings.find(x => x.id === 'text_color'));
  assert.equal(definition.settings.find(x => x.id === 'font').visible_if, undefined);
  assert.equal(ids.includes('link'), false);
  assert.equal(definition.settings.some(x => x.type === 'header' && x.content === 'Color'), false);
  assert.equal(definition.settings.find(x => x.id === 'gap_desktop').label, 'Desktop gap');
  assert.equal(definition.settings.find(x => x.id === 'gap_mobile').label, 'Mobile gap');
  const imageIds = schema('blocks/_collection-marquee-image.liquid').settings.map(x => x.id);
  assert.equal(imageIds.includes('image_link'), false);
  assert.equal(imageIds.includes('open_in_new_tab'), false);
  assert.match(read('blocks/_collection-marquee-image.liquid'), /suppress_links: true/);
  assert.ok(schema('blocks/_marquee-image.liquid').settings.some(x => x.id === 'image_link'));
});


test('rapid A/B/C/A crossings leave the selected strip, phase and speed untouched', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const first = initializedRow(section);
  const second = initializedRow(section);
  const third = initializedRow(section);
  advance(first);
  for (let pass = 0; pass < 20; pass++) {
    const snapshot = [first.phase, first.velocity, first.frame, first.track.style.transform];
    second.sourceTitle.events.pointerenter();
    third.sourceTitle.events.pointerenter();
    first.sourceTitle.events.pointerenter();
    first.flushHover();
    assert.deepEqual([first.phase, first.velocity, first.frame, first.track.style.transform], snapshot);
    assert.equal(first.active, true);
    assert.equal(first.hasAttribute('data-strip-visible'), true);
    assert.equal(section.rows.filter(row => row.hasAttribute('data-strip-visible')).length, 1);
  }
});

test('obsolete hover callbacks cannot clear or activate a newer pending selection', () => {
  const section = { rows: [], querySelectorAll() { return this.rows; } };
  const first = initializedRow(section);
  const second = initializedRow(section);
  const third = initializedRow(section);
  second.sourceTitle.events.pointerenter();
  const obsolete = second.pendingHover();
  third.sourceTitle.events.pointerenter();
  obsolete();
  assert.equal(first.active, true);
  assert.equal(second.active, false);
  assert.equal(third.active, false);
  third.flushHover();
  assert.equal(first.active, false);
  assert.equal(second.active, false);
  assert.equal(third.active, true);
  assert.equal(section.rows.filter(row => row.hasAttribute('data-strip-visible')).length, 1);
});
