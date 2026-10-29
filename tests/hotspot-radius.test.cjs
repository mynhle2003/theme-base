const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const liquid = new (loadLiquid())({ fs: {
  resolve: (_root, file) => path.resolve('snippets', `${file}.liquid`),
  exists: async () => true,
  readFile: async file => stripShopifyMetadata(fs.readFileSync(file, 'utf8')),
} });
liquid.registerFilter('t', key => key);

for (const file of ['blocks/product-callout.liquid', 'blocks/product-callout-gallery.liquid']) {
  const raw = fs.readFileSync(file, 'utf8');
  const source = stripShopifyMetadata(raw)
    .replace(/{%\s*(?:end)?style\s*%}/g, '')
    .replace(/{%\s*content_for[\s\S]*?%}/g, '')
    .replace(/{%\s*render[\s\S]*?%}/g, '');
  test(`${file} offers the canonical image radius options`, () => {
    const schema = JSON.parse(raw.split('{% schema %}')[1].split('{% endschema %}')[0]);
    const setting = schema.settings.find(s => s.id === 'corner_radius');
    assert.deepEqual(setting.options.map(o => o.value), ['inherit', 'square', 'rounded', 'full', 'custom']);
  });
  test(`${file} renders canonical and saved legacy radii`, async () => {
    for (const [value, custom, expected] of [
      ['inherit', 0, 'var(--media-radius, var(--radius-square))'],
      ['square', 0, 'var(--radius-square)'],
      ['rounded', 0, 'var(--radius-rounded)'],
      ['full', 0, 'var(--radius-pill)'],
      ['custom', 27, '27px'],
      ['custom', 0, '0px'],
      ['radius_12', 0, 'var(--radius-12)'],
    ]) {
      const html = await liquid.parseAndRender(source, {
        block: { id: 'slide', settings: { corner_radius: value, custom_corner_radius: custom } },
        section: { id: 'carousel', type: 'hotspot-full-width-carousel', settings: {} },
      });
      assert.ok(html.includes(`--product-callout-media-radius: ${expected};`), value);
    }
  });
}
