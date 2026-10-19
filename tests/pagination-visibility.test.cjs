const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const Liquid = loadLiquid();
const engine = new Liquid();
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const visibility = stripShopifyMetadata(read('snippets/pagination-visibility.liquid'));
const pagination = stripShopifyMetadata(read('snippets/swiper-pagination.liquid')).replace(
  /{% render 'pagination-visibility'[^%]+%}/,
  '{% assign desktop = show_on_desktop %}{% assign mobile = show_on_mobile %}' + visibility
);

test('pagination renders both independent flags and is omitted when both are off', async () => {
  for (const desktop of [false, true]) for (const mobile of [false, true]) {
    const html = await engine.parseAndRender(pagination, {
      show: desktop || mobile, show_on_desktop: desktop, show_on_mobile: mobile
    });
    assert.equal(html.includes('data-swiper-pagination'), desktop || mobile);
    if (desktop || mobile) {
      assert.ok(html.includes(`data-pagination-visible-desktop="${desktop}"`));
      assert.ok(html.includes(`data-pagination-visible-mobile="${mobile}"`));
    }
  }
});

test('omitted visibility arguments preserve existing pagination callers', async () => {
  const html = await engine.parseAndRender(pagination, { show: true });
  assert.ok(html.includes('data-pagination-visible-desktop="true"'));
  assert.ok(html.includes('data-pagination-visible-mobile="true"'));
});

test('viewport flags are independent for every newly split setting owner', async () => {
  for (const file of [
    'sections/slideshow.liquid', 'sections/hotspot-full-width-carousel.liquid',
    'sections/collection-list-thumbnails.liquid', 'blocks/blog-list.liquid',
    'blocks/product-list.liquid', 'blocks/shop-the-look-products.liquid',
    'blocks/product-callout-gallery.liquid', 'blocks/collection-list-items.liquid'
  ]) {
    const preamble = read(file).match(/^{% liquid[\s\S]*?%}/)[0];
    for (const desktop of [false, true]) for (const mobile of [false, true]) {
      const settings = {show_pagination_on_desktop: desktop, show_pagination_on_mobile: mobile};
      const output = await engine.parseAndRender(preamble + '{{ pagination_any }}', {section:{settings}, block:{settings}});
      assert.equal(output.trim(), String(desktop || mobile), `${file}: ${desktop}/${mobile}`);
    }
  }
});

test('Collection tabs Add section and homepage agree with Figma visibility', () => {
  const source = read('sections/collection-tabs.liquid');
  const schema = JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  const raw = read('templates/index.json');
  const instance = JSON.parse(raw.slice(raw.indexOf('{'))).sections.editors_pick;
  for (const settings of [schema.presets[0].settings, instance.settings]) {
    assert.equal(settings.show_pagination_on_desktop, true);
    assert.equal(settings.show_pagination_on_mobile, false);
  }
});

test('pagination editor conditions respect Shopify string limits', () => {
  for (const dir of ['sections', 'blocks']) for (const name of fs.readdirSync(path.join(__dirname, '..', dir))) {
    if (!name.endsWith('.liquid')) continue;
    const match = read(`${dir}/${name}`).match(/{% schema %}([\s\S]*?){% endschema %}/);
    if (!match) continue;
    const schema = JSON.parse(match[1]);
    if (!schema.settings?.some(s => s.id === 'show_pagination_on_mobile')) continue;
    for (const setting of schema.settings) {
      assert.ok((setting.visible_if || '').length <= 250, `${dir}/${name}: ${setting.id}`);
    }
  }
});
