const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

for (const file of ['product-collection-carousel.js', 'carousel-runtime.js']) {
  test(`${file} waits for its owner instead of scanning the page on import`, () => {
    let scans = 0;
    const events = new Map();
    const document = {
      readyState: 'complete',
      querySelectorAll() { scans++; return []; },
      addEventListener(name, callback) { events.set(name, callback); },
    };
    const source = fs.readFileSync(`assets/${file}`, 'utf8')
      .replace(/^import .*;\n/gm, '')
      .replace(/^export \{.*\};\n/gm, '')
      .replace(/^export const /gm, 'const ');
    const context = vm.createContext({ document, window: {}, EffectFade: {}, Pagination: {} });
    vm.runInContext(source + (file === 'carousel-runtime.js'
      ? '\nthis.init = createCarouselRuntime({rootSelector: "[data-carousel-block]"});'
      : '\nthis.init = initializeRoot;'), context);
    assert.equal(scans, 0);
    let scopedScans = 0;
    const root = { querySelectorAll() { scopedScans++; return []; } };
    context.init(root);
    assert.equal(scopedScans, 1);
    events.get('shopify:section:load')({ target: root });
    assert.equal(scopedScans, 2);
    assert.equal(scans, 0);
  });
}

function loaderFixture(designMode = false) {
  const events = new Map();
  const targets = [];
  const initialized = [];
  const observers = [];
  let mutation;
  let imports = 0;
  function addTarget() {
    const target = {
      nodeType: 1, isConnected: true,
      matches: () => false,
      getClientRects: () => [{ width: 300, height: 400 }],
      querySelectorAll(selector) { return selector === '*' ? [] : [this.marker]; },
    };
    target.marker = {
      isConnected: true, dataset: { themeModule: '/assets/carousel.js?v=1' },
      parentElement: target, closest: () => target,
    };
    targets.push(target);
    return target;
  }
  const first = addTarget();
  const second = addTarget();
  class IntersectionObserver {
    constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
  }
  class MutationObserver {
    constructor(callback) { mutation = callback; }
    observe() {}
  }
  const document = {
    baseURI: 'https://example.myshopify.com/', documentElement: {},
    querySelectorAll: () => targets.map(target => target.marker),
    addEventListener: (name, callback) => events.set(name, callback),
  };
  const source = fs.readFileSync('assets/theme-module-loader.js', 'utf8').replace(/\bimport\(src\)/g, 'importModule(src)');
  const context = vm.createContext({
    document, window: { Shopify: { designMode }, IntersectionObserver }, URL, console, IntersectionObserver, MutationObserver,
    importModule() {
      imports++;
      return Promise.resolve({ initializeThemeModule(root) { initialized.push(root); } });
    },
  });
  vm.runInContext(source, context);
  return {
    first, second, initialized, events, observers, imports: () => imports,
    intersect(target) { observers[0].callback([{ isIntersecting: true, target }]); },
    insert() { const target = addTarget(); mutation([{ type: 'childList', addedNodes: [target], removedNodes: [] }]); return target; },
  };
}

const settle = () => new Promise(resolve => setImmediate(resolve));

test('cached imports still wait for each new section to approach the viewport', async () => {
  const f = loaderFixture();
  assert.equal(f.imports(), 0);
  f.intersect(f.first);
  await settle();
  assert.deepEqual(f.initialized, [f.first]);
  const added = f.insert();
  await settle();
  assert.equal(f.observers[0].targets.has(added), true);
  assert.deepEqual(f.initialized, [f.first]);
  f.intersect(f.second);
  f.intersect(added);
  await settle();
  assert.equal(f.imports(), 1);
  assert.deepEqual(f.initialized, [f.first, f.second, added]);
});

test('Theme Editor initializes immediately and an unloaded pending section stays idle', async () => {
  const editor = loaderFixture(true);
  await settle();
  assert.deepEqual(editor.initialized, [editor.first, editor.second]);
  const storefront = loaderFixture();
  storefront.events.get('shopify:section:unload')({ target: storefront.second });
  storefront.intersect(storefront.second);
  await settle();
  assert.equal(storefront.imports(), 0);
  assert.equal(storefront.observers[0].targets.has(storefront.second), false);
});
