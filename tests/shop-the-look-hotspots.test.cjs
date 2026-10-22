const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('blocks/shop-the-look-products.liquid', 'utf8');
const schema = (path) => JSON.parse(fs.readFileSync(path, 'utf8').match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('Hotspots controls preserve the Gallery contract and place information controls above the color scheme', () => {
  const settings = schema('blocks/shop-the-look-products.liquid').settings;
  const gallery = schema('blocks/product-callout-gallery.liquid').settings;
  for (const id of ['hotspot_icon_style', 'hotspot_behavior', 'hotspot_color_scheme']) {
    assert.deepEqual(settings.find((s) => s.id === id), gallery.find((s) => s.id === id));
  }
  assert.ok(settings.findIndex((s) => s.id === 'show_hotspot_product_information') < settings.findIndex((s) => s.id === 'hotspot_color_scheme'));
  assert.equal(settings.find((s) => s.id === 'show_hotspot_product_information').default, false);
  assert.equal(settings.find((s) => s.id === 'show_hotspot_product_information_on_mobile').default, false);
});

function fixture({ mobile = false, enabled = true, mobileEnabled = false } = {}) {
  const cards = [0, 1].map(() => ({ hidden: true, dataset: {}, style: { values: {}, setProperty(key, val) { this.values[key] = val; } }, getBoundingClientRect: () => ({ left: -50, width: 288, height: 104 }) }));
  const buttons = cards.map((card) => ({
    attrs: {}, setAttribute(key, val) { this.attrs[key] = val; }, getAttribute(key) { return this.attrs[key]; },
    closest: () => ({ querySelector: () => card }), getBoundingClientRect: () => ({ top: 200, bottom: 244 }),
  }));
  const state = {
    section: { querySelector: () => ({ querySelectorAll: () => buttons, getBoundingClientRect: () => ({ left: 0, right: 328, top: 0, bottom: 328, width: 328 }) }) },
    products: { dataset: { lookInformation: String(enabled), lookInformationMobile: String(mobileEnabled) } },
  };
  const helpers = source.slice(source.indexOf('  const getHotspots ='), source.indexOf('  const mountHotspots ='));
  const context = vm.createContext({ window: { matchMedia: () => ({ matches: mobile }) } });
  vm.runInContext(`${helpers}\nthis.showInformation = showInformation; this.closeInformation = closeInformation;`, context);
  return { cards, buttons, state, show: (i) => context.showInformation(state, buttons[i]), close: () => context.closeInformation(state) };
}

test('opening a hotspot closes the previous card and keeps aria-expanded synchronized', () => {
  const f = fixture(); f.show(0);
  assert.equal(f.cards[0].hidden, false);
  assert.equal(f.buttons[0].attrs['aria-expanded'], 'true');
  f.show(1);
  assert.equal(f.cards[0].hidden, true);
  assert.equal(f.buttons[0].attrs['aria-expanded'], 'false');
  assert.equal(f.cards[1].hidden, false);
  f.close();
  assert.ok(f.cards.every((c) => c.hidden));
});

test('information switches respect desktop/mobile and disabled states', () => {
  for (const options of [{ enabled: false }, { mobile: true }]) {
    const f = fixture(options); f.show(0); assert.equal(f.cards[0].hidden, true);
  }
  const f = fixture({ mobile: true, mobileEnabled: true }); f.show(0);
  assert.equal(f.cards[0].hidden, false);
});

test('information is clamped inside image and flips above near its lower edge', () => {
  const f = fixture(); f.show(0);
  assert.equal(f.cards[0].style.values['--look-info-shift'], '58px');
  assert.equal(f.cards[0].style.values['--look-info-max-width'], '312px');
  assert.equal(f.cards[0].dataset.above, 'true');
});

test('hotspot sources retain wrappers, product identity, coordinates and unique mounted information IDs', () => {
  assert.match(source, /hotspot\.closest\('\[data-look-hotspot\]'\)/);
  assert.match(source, /card\.id = `LookHotspot-\$\{state\.products\.dataset\.lookInstance\}-\$\{index\}`/);
  assert.match(source, /button\.setAttribute\('aria-controls', card\.id\)/);
  const snippet = fs.readFileSync('snippets/shop-the-look-hotspot.liquid', 'utf8');
  assert.match(snippet, /render 'product-callout-hotspot-indicator'/);
  assert.match(snippet, /render 'price', item: product/);
  assert.match(snippet, /data-look-hotspot-information hidden/);
});


test('Gallery and Shop the look share indicator markup, styles and reduced motion', () => {
  const gallery = fs.readFileSync('snippets/product-callout-hotspot.liquid', 'utf8');
  const look = fs.readFileSync('snippets/shop-the-look-hotspot.liquid', 'utf8');
  const shared = fs.readFileSync('snippets/product-callout-hotspot-indicator.liquid', 'utf8');
  for (const content of [gallery, look]) assert.match(content, /render 'product-callout-hotspot-indicator'/);
  for (const style of ['dot', 'plus', 'tag', 'bag']) assert.match(shared, new RegExp('product-callout__hotspot-icon--' + style));
  assert.match(shared, /prefers-reduced-motion/);
  assert.doesNotMatch(look, /look-hotspot__icon|product-hotspot__dot/);
});
