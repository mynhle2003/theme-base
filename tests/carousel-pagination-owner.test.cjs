const test = require('node:test');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const fs = require('node:fs');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');

const runtime = import(pathToFileURL(path.resolve('assets/carousel-runtime.js')).href);

function fixture() {
  const candidates = [];
  const root = { querySelectorAll: () => candidates };
  const wrapper = { contains: element => element.inSlides === true };
  const pagination = (owner = root, inSlides = false) => ({ closest: () => owner, inSlides });
  return { root, wrapper, candidates, pagination };
}

test('pagination works in either the viewport overlay or a sibling controls row', async () => {
  const { findCarouselPagination } = await runtime;
  for (const placement of ['overlay', 'below']) {
    const f = fixture();
    const controls = { ...f.pagination(), placement };
    f.candidates.push(controls);
    assert.equal(findCarouselPagination(f.root, f.wrapper), controls);
  }
});

test('a carousel never binds a nested slide carousel pagination', async () => {
  const { findCarouselPagination } = await runtime;
  const f = fixture();
  const nestedOwner = {};
  f.candidates.push(f.pagination(nestedOwner, true), f.pagination(f.root, true), f.pagination(nestedOwner));
  assert.equal(findCarouselPagination(f.root, f.wrapper), null);
  const ownControls = f.pagination();
  f.candidates.push(ownControls);
  assert.equal(findCarouselPagination(f.root, f.wrapper), ownControls);
});

test('import map versions both CDN dependencies and Shopify local preview paths', async () => {
  const engine = new (loadLiquid())();
  engine.registerFilter('asset_url', name => `//example.myshopify.com/cdn/shop/t/55/assets/${name}?v=123`);
  engine.registerFilter('json', JSON.stringify);
  const html = await engine.parseAndRender(stripShopifyMetadata(fs.readFileSync('snippets/theme-module-import-map.liquid', 'utf8')));
  const imports = JSON.parse(html.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1]).imports;
  for (const name of ['carousel-runtime.js', 'swiper-carousel.js', 'swiper-loader.js']) {
    const pathname = `/cdn/shop/t/55/assets/${name}`;
    assert.equal(imports[pathname], `${pathname}?v=123`);
    assert.equal(imports[`//example.myshopify.com${pathname}`], `//example.myshopify.com${pathname}?v=123`);
  }
});

test('autoplay paints and cleans up its external pagination rather than a nested viewport control', async () => {
  const { bindSwiperAutoplay } = await import(pathToFileURL(path.resolve('assets/swiper-carousel.js')).href);
  const previousWindow = global.window;
  const previousDocument = global.document;
  global.window = { matchMedia: () => ({ matches: false }), requestAnimationFrame: () => 1, cancelAnimationFrame() {} };
  global.document = { addEventListener() {}, removeEventListener() {} };
  try {
    for (const explicit of [true, false]) {
      const values = new Map();
      const pagination = {
        nodeType: 1, matches() {}, dataset: {}, getAttribute: () => null,
        removeAttribute: name => { if (name === 'data-autoplay-clock') delete pagination.dataset.autoplayClock; },
        style: { getPropertyValue: key => values.get(key) || '', setProperty: (key, value) => values.set(key, value), removeProperty: key => values.delete(key) },
      };
      const swiper = { params: { pagination: { el: pagination } }, el: { querySelector() { throw new Error('Nested controls must not be queried'); } }, on() {}, off() {} };
      const cleanup = bindSwiperAutoplay(swiper, explicit ? { pagination } : {});
      assert.equal(pagination.dataset.autoplayClock, 'paused');
      assert.equal(values.get('--carousel-autoplay-progress'), '0');
      cleanup();
      assert.equal(pagination.dataset.autoplayClock, undefined);
      assert.equal(values.size, 0);
    }
  } finally {
    global.window = previousWindow;
    global.document = previousDocument;
  }
});
