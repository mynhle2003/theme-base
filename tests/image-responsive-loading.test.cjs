const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const Liquid = loadLiquid();
const engine = new Liquid({ fs: {
  resolve: (_root, name) => path.resolve('snippets', name + '.liquid'),
  exists: async () => true,
  readFile: async file => stripShopifyMetadata(fs.readFileSync(file, 'utf8')),
}});
engine.registerFilter('image_url', (image, ...params) => '/' + image.src + '?' + params.map(([k,v]) => `${k}=${v}`).join('&'));
engine.registerFilter('image_tag', (url, ...params) => `<img src="${url}" ${params.filter(([,v]) => v != null).map(([k,v]) => `${k}="${v}"`).join(' ')}>`);
const source = stripShopifyMetadata(fs.readFileSync('snippets/image.liquid', 'utf8'));
const image = {src:'desktop.avif', width:2400, height:2800};
const mobile_image = {src:'mobile.avif', width:2400, height:2800};

test('mobile art direction supplies width descriptors and matching sizes for either comma format', async () => {
  for (const widths of ['480, 720, 960', '480,720,960']) {
    const html = await engine.parseAndRender(source, {image, mobile_image, widths, sizes:'(min-width: 768px) 50vw, 100vw', loading:'eager', fetchpriority:'high'});
    assert.match(html, /mobile\.avif\?width=480 480w/);
    assert.match(html, /mobile\.avif\?width=720 720w/);
    assert.match(html, /mobile\.avif\?width=960 960w/);
    assert.match(html, /<source[^>]*sizes="\(min-width: 768px\) 50vw, 100vw"/);
    assert.match(html, /<img[^>]*loading="eager"[^>]*fetchpriority="high"/);
  }
});

test('lazy loading survives background media delegation and missing mobile artwork', async () => {
  const html = await engine.parseAndRender("{% render 'media-background', media_type: 'image', image: image, loading: 'lazy', fetchpriority: 'auto', sizes: '50vw' %}", {image});
  assert.match(html, /<img[^>]*loading="lazy"[^>]*fetchpriority="auto"/);
  assert.doesNotMatch(html, /<picture>/);
});

const cardSource = stripShopifyMetadata(fs.readFileSync('blocks/image-card.liquid', 'utf8')).replace(/{%\s*content_for\b[^%]*%}/g, '');
test('hero cards use half-width desktop images, prioritize the first card, and defer later sections', async () => {
  const cards = [{id:'first', settings:{width_desktop:'fill'}},{id:'second',settings:{width_desktop:'fill'}}];
  for (const [index, id, loading, priority] of [[1,'first','eager','high'],[1,'second','eager','auto'],[4,'first','lazy','auto']]) {
    const html = await engine.parseAndRender(cardSource, {section:{index, settings:{direction:'horizontal'},blocks:cards},block:{id,settings:{image,mobile_image,width_desktop:'fill'}}});
    assert.match(html, /sizes="\(min-width: 768px\) 50vw, 100vw"/);
    assert.ok(html.includes(`loading="${loading}"`));
    assert.ok(html.includes(`fetchpriority="${priority}"`));
  }
});

test('product card images defer below the first section and preserve eager first-section media', async () => {
  for (const [index, loading] of [[1,'eager'],[2,'lazy']]) {
    const html = await engine.parseAndRender(stripShopifyMetadata(fs.readFileSync('snippets/product-card-image.liquid', 'utf8')), {image,secondary_image:image,width:800,section:{index}});
    assert.equal((html.match(new RegExp(`loading="${loading}"`, 'g')) || []).length, 2);
  }
});
