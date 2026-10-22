const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function fixture() {
  const classes = new Map();
  const timers = new Map();
  let nextTimer = 0;
  const context = vm.createContext({
    HTMLElement: class {}, AbortController, URL, Date, JSON,
    setTimeout: (callback, delay) => { timers.set(++nextTimer, { callback, delay }); return nextTimer; },
    clearTimeout: (id) => timers.delete(id),
    customElements: { get: (name) => classes.get(name), define: (name, cls) => classes.set(name, cls) },
  });
  vm.runInContext(fs.readFileSync('assets/button-loading.js', 'utf8').replace('export ', ''), context);
  vm.runInContext(fs.readFileSync('assets/shop-the-look-cart.js', 'utf8')
    .replace(/^import .*;\n/, '').replace('export function', 'function'), context);
  return { context, timers, Controller: classes.get('shop-the-look-cart'), build: (...args) => context.buildLookItems(...args) };
}
const selections = [
  { blockId: 'a', variantId: '11', title: 'Bra' },
  { blockId: 'b', variantId: '22', title: 'Shorts' },
];
const variant = (id, extra = {}) => ({ id, available: true, inventory_management: 'shopify', inventory_policy: 'deny', inventory_quantity: 3, min: 1, increment: 1, ...extra });
const products = () => [{ blockId: 'a', variants: [variant(11)] }, { blockId: 'b', variants: [variant(22)] }];
const message = '__PRODUCT__ unavailable';

test('one unavailable or missing selected variant prevents the entire batch', () => {
  const { build } = fixture();
  for (const replacement of [[], [variant(22, { available: false })], [variant(23)]]) {
    const data = products(); data[1].variants = replacement;
    assert.throws(() => build(selections, data, { items: [] }, message), /Shorts unavailable/);
  }
});

test('checks remaining stock including every matching cart line and duplicate products', () => {
  const { build } = fixture();
  const cart = { items: [{ variant_id: 22, quantity: 1 }, { variant_id: 22, quantity: 2 }] };
  assert.throws(() => build(selections, products(), cart, message), /Shorts/);
  const duplicate = [...selections, { ...selections[0], blockId: 'c' }];
  const data = [...products(), { blockId: 'c', variants: [variant(11, { inventory_quantity: 1 })] }];
  assert.throws(() => build(duplicate, data, { items: [] }, message), /Bra/);
  data[2].variants[0].inventory_quantity = 3;
  assert.equal(build(duplicate, data, { items: [] }, message)[0].quantity, 2);
});

test('untracked inventory/backorders work; subscription-only and incompatible quantity rules stop', () => {
  const { build } = fixture();
  for (const extra of [{ inventory_management: null, inventory_quantity: 0 }, { inventory_policy: 'continue', inventory_quantity: 0 }]) {
    const data = products(); data[0].variants[0] = variant(11, extra);
    assert.equal(build(selections, data, { items: [] }, message).length, 2);
  }
  for (const extra of [{ requires_selling_plan: true }, { min: 2 }, { increment: 2 }]) {
    const data = products(); data[0].variants[0] = variant(11, extra);
    assert.throws(() => build(selections, data, { items: [] }, message), /Bra/);
  }
});

function transportFixture({ soldOut = false, networkError = false, serverError = false } = {}) {
  const { context, Controller, timers } = fixture();
  const action = new Controller();
  const changes = [];
  const dots = { hidden: true, classList: { toggle() {} } };
  action.button = { disabled: false, classList: { toggle: (cls, on) => changes.push([cls, on]) }, setAttribute() {}, removeAttribute() {}, querySelector: () => dots };
  action.error = { hidden: true, textContent: '' };
  action.dataset = { sectionId: 'section', blockId: 'products', error: 'Network error', unavailable: message };
  action.controller = new AbortController();
  action.isConnected = true;
  action.selections = () => selections;
  const calls = [];
  const freshCards = products().map((product) => ({ dataset: { shopTheLookBlockId: product.blockId }, querySelector: () => ({ textContent: JSON.stringify(product.variants.map((v) => ({ ...v, available: !soldOut }))) }) }));
  context.DOMParser = class { parseFromString() { return { querySelectorAll: () => [{ dataset: { blockId: 'products' }, closest: () => ({ querySelector: () => ({ querySelectorAll: () => freshCards }) }) }] }; } };
  context.window = { location: { href: 'https://shop.test/fr/?preview_theme_id=1', assign: (url) => calls.push(['redirect', url]) }, Shopify: { routes: { root: '/fr/' } }, __cartDrawerController: { mutate: async (op, payload) => { calls.push([op, payload]); if (serverError) throw new Error('Stock changed'); } } };
  context.document = { dispatchEvent: () => {}, querySelector: () => ({ click: () => calls.push(['open']) }) };
  context.CustomEvent = class {};
  context.fetch = async (url) => {
    calls.push(['fetch', String(url)]);
    if (networkError) throw new Error('Network error');
    return { ok: true, text: async () => '', json: async () => ({ items: [] }) };
  };
  return { action, calls, changes, dots, timers };
}

test('checks all products then sends one batch; duplicate clicks ignored; shared loading restored', async () => {
  const { action, calls, changes, dots } = transportFixture();
  const pending = action.addAll();
  assert.equal(action.button.disabled, true);
  assert.equal(dots.hidden, false);
  await action.addAll();
  await pending;
  assert.equal(calls.filter(([op]) => op === 'add').length, 1);
  assert.equal(calls.find(([op]) => op === 'add')[1].items.length, 2);
  assert.equal(calls.at(-1)[0], 'open');
  assert.equal(action.button.disabled, false);
  assert.equal(dots.hidden, true);
  assert.deepEqual(changes, [['btn--loading', true], ['btn--loading', false]]);
  assert.match(calls[0][1], /section_id=section/);
  assert.equal(calls[1][1], '/fr/cart.js');
});

test('sold out, network errors, or selection changes never send an add request', async () => {
  for (const options of [{ soldOut: true }, { networkError: true }, { changed: true }]) {
    const { action, calls } = transportFixture(options);
    const pending = action.addAll();
    if (options.changed) action.selections = () => [{ ...selections[0], variantId: '99' }];
    await pending;
    assert.equal(calls.some(([op]) => op === 'add'), false);
    assert.equal(action.error.hidden, false);
    assert.equal(action.button.disabled, true);
  }
});

test('server stock rejection renders below button and does not open drawer', async () => {
  const { action, calls } = transportFixture({ serverError: true });
  await action.addAll();
  assert.equal(action.error.textContent, 'Stock changed');
  assert.equal(action.error.hidden, false);
  assert.equal(calls.some(([op]) => op === 'open'), false);
});

test('error lasts five seconds, blocks retries, then clears and allows another check', async () => {
  const { action, calls, dots, timers } = transportFixture({ soldOut: true });
  assert.equal(calls.length, 0);
  assert.equal(action.error.hidden, true);
  await action.addAll();
  assert.equal(action.button.disabled, true);
  assert.equal(dots.hidden, true);
  assert.equal(action.error.hidden, false);
  const count = calls.length;
  await action.addAll();
  assert.equal(calls.length, count);
  const [id, timer] = [...timers][0];
  assert.equal(timer.delay, 5000);
  timers.delete(id);
  timer.callback();
  assert.equal(action.error.hidden, true);
  assert.equal(action.error.textContent, '');
  assert.equal(action.button.disabled, false);
  assert.equal(action.busy, false);
  await action.addAll();
  assert.equal(calls.length, count + 2);
});

test('removing an erroring section clears its timer and restores the button', async () => {
  const { action, timers } = transportFixture({ soldOut: true });
  await action.addAll();
  assert.equal(timers.size, 1);
  action.disconnectedCallback();
  assert.equal(timers.size, 0);
  assert.equal(action.error.hidden, true);
  assert.equal(action.button.disabled, false);
  assert.equal(action.busy, false);
});

test('removed section cancels preflight and sends no add request', async () => {
  const { action, calls } = transportFixture();
  const pending = action.addAll();
  action.isConnected = false;
  action.disconnectedCallback();
  await pending;
  assert.equal(calls.some(([op]) => op === 'add'), false);
});


test('Add all is a static section block; the product list has no visibility option', () => {
  const section = fs.readFileSync('sections/shop-the-look-section.liquid', 'utf8');
  const list = fs.readFileSync('blocks/shop-the-look-products.liquid', 'utf8');
  const action = fs.readFileSync('blocks/shop-the-look-add-all.liquid', 'utf8');
  assert.match(section, /content_for 'block', type: 'shop-the-look-add-all', id: 'add-all'/);
  assert.doesNotMatch(section, /content_for 'blocks'/);
  assert.doesNotMatch(list, /show_add_all_to_cart/);
  assert.match(action, /block.shopify_attributes/);
  const schema = JSON.parse(section.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  const block = schema.presets[0].blocks.find((b) => b.type === 'shop-the-look-add-all');
  assert.equal(block.static, true);
  assert.equal(block.id, 'add-all');
});
