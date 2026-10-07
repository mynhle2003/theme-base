const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const Liquid = loadLiquid();
const engine = new Liquid();
engine.registerFilter('image_url', (image, ...options) => `/${image.name}?width=${Object.fromEntries(options).width}`);
engine.registerFilter('image_tag', url => `<img src="${url}">`);
const source = stripShopifyMetadata(fs.readFileSync('snippets/image.liquid', 'utf8'));
async function render(width, widths) {
  return engine.parseAndRender(source, {
    image: { name: 'desktop.jpg', width: 2400, height: 1600 },
    mobile_image: { name: 'mobile.jpg', width, height: 900 },
    widths, sizes: '(min-width: 768px) 448px, 256px',
  });
}
test('mobile art direction emits valid width descriptors and inherits responsive sizes', async () => {
  for (const widths of ['400,600,800,1200', '400, 600, 800, 1200', undefined]) {
    const html = await render(2400, widths);
    const tag = html.match(/<source[^>]+>/)[0];
    assert.match(tag, /sizes="\(min-width: 768px\) 448px, 256px"/);
    assert.match(tag, /width="2400" height="900"/);
    const candidates = tag.match(/srcset="([^"]+)"/)[1].split(',').map(value => value.trim());
    assert.ok(candidates.length > 1);
    for (const candidate of candidates) {
      const match = candidate.match(/^\/mobile.jpg\?width=(\d+)\s+(\d+)w$/);
      assert.ok(match, candidate);
      assert.equal(match[1], match[2]);
    }
  }
});
test('small mobile originals clamp candidates without duplicate widths or trailing commas', async () => {
  const html = await render(520, '400,600,800,1200');
  const srcset = html.match(/srcset="([^"]+)"/)[1];
  const candidates = srcset.split(',').map(value => value.trim());
  assert.deepEqual(candidates, ['/mobile.jpg?width=400 400w', '/mobile.jpg?width=520 520w']);
});
