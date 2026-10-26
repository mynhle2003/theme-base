const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const liquid = new (loadLiquid())();
liquid.registerFilter('t', key => key);
liquid.registerFilter('image_url', (image, ...args) => `${image.url}?width=${args.flat().find(x => typeof x === 'number') || 192}`);
liquid.registerFilter('image_tag', url => `<img src="${url}">`);
liquid.registerFilter('placeholder_svg_tag', () => '<svg></svg>');
const source = stripShopifyMetadata(fs.readFileSync('snippets/product-callout-hotspot.liquid', 'utf8'))
  .replace(/{%\s*render 'price',[\s\S]*?%}/g, '<span class="price">PRICE</span>')
  .replace(/{%\s*render[\s\S]*?%}/g, '');
const product = { id: 123, title: 'Desk lamp', type: 'Lamps', url: '/products/desk-lamp', featured_image: {url: '/lamp.webp'} };
const render = (type, label, selected = product) => liquid.parseAndRender(source, {
  section: { id: 'test', type, settings: { show_product_type: true, show_product_image: true, show_price: true, product_link_label: label } },
  block: { id: 'point', settings: { product: selected, horizontal_position: 33, vertical_position: 27 } },
});

test('carousel without an action label retains an accessible product title link', async () => {
  const html = await render('hotspot-full-width-carousel', '');
  assert.match(html, /<a class="product-callout__product-card-title" href="\/products\/desk-lamp">Desk lamp<\/a>/);
  assert.doesNotMatch(html, /class="product-callout__product-card-action"/);
  assert.match(html, /aria-controls="product-callout-popover-test-point"/);
  assert.match(html, /class="price"/);
});

test('configured carousel action and single hotspot blank-label fallback remain available', async () => {
  assert.match(await render('hotspot-full-width-carousel', 'See details'), /class="product-callout__product-card-action"[^>]*>See details/);
  const single = await render('hotspot', '');
  assert.match(single, /data-product-card-quick-view/);
  assert.match(single, /class="product-callout__product-card-title">Desk lamp<\/span>/);
});

test('empty carousel resource remains a button and never emits a broken product link', async () => {
  const html = await render('hotspot-full-width-carousel', '', null);
  assert.match(html, /<button[\s\S]*?data-product-callout-hotspot/);
  assert.doesNotMatch(html, /href="/);
});
