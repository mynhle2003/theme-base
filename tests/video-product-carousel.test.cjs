const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const engine = new (loadLiquid())({ strictFilters: false, fs: {
  resolve: (_, file) => path.resolve('snippets', file + '.liquid'),
  existsSync: fs.existsSync,
  readFileSync: file => stripShopifyMetadata(fs.readFileSync(file, 'utf8')).replace(/{% javascript %}[\s\S]*?{% endjavascript %}/g, '')
} });
engine.registerFilter('t', value => value);
engine.registerFilter('placeholder_svg_tag', () => '<svg></svg>');
engine.registerFilter('money', value => `$${(value / 100).toFixed(2)}`);
engine.registerFilter('image_url', image => image?.src || '/image.jpg');
engine.registerFilter('image_tag', url => `<img src="${url}" alt="">`);
function schema(file) { return JSON.parse(fs.readFileSync(file, 'utf8').match(/{% schema %}([\s\S]*?){% endschema %}/)[1]); }
function renderCard(product, settings = {}, design_mode = false) {
  const file = 'blocks/product-card-compact.liquid';
  const defaults = Object.fromEntries(schema(file).settings.filter(s => s.id && s.default !== undefined).map(s => [s.id, s.default]));
  return engine.parseAndRenderSync(stripShopifyMetadata(fs.readFileSync(file, 'utf8')), {
    block: { settings: { ...defaults, ...settings, product }, shopify_attributes: 'data-editor-block="compact"' },
    request: { design_mode }, routes: { cart_add_url: '/cart/add' }
  });
}
const product = { title: 'Curly necklace', url: '/products/curly', price: 3800, available: true, has_only_default_variant: true,
  selected_or_first_available_variant: { id: 123, inventory_quantity: 5, inventory_management: 'shopify', inventory_policy: 'deny' }
};
test('single variant uses cart route and selected variant, retaining inventory data', () => {
  const html = renderCard(product);
  assert.match(html, /action="\/cart\/add"/);
  assert.match(html, /name="id" value="123"/);
  assert.match(html, /data-inventory-quantity="5"/);
  assert.match(html, /\$38.00/);
  assert.match(html, /data-editor-block="compact"/);
});
test('multiple variants open the picker rather than silently purchasing the first variant', () => {
  const html = renderCard({ ...product, has_only_default_variant: false });
  assert.match(html, /data-product-card-quick-add-overlay/);
  assert.match(html, /aria-haspopup="dialog"/);
  assert.doesNotMatch(html, /name="id"|action="\/cart\/add"/);
});
test('sold out and missing products cannot submit a cart form', () => {
  const soldOut = renderCard({ ...product, available: false });
  assert.match(soldOut, /disabled/);
  assert.doesNotMatch(soldOut, /<form/);
  assert.equal(renderCard(null).trim(), '');
  const placeholder = renderCard(null, {}, true);
  assert.match(placeholder, /disabled/);
  assert.doesNotMatch(placeholder, /<form/);
});
test('price and cart controls are independently removable', () => {
  const html = renderCard(product, { show_price: false, show_add_to_cart: false });
  assert.doesNotMatch(html, /price--product-card|<form|product-card-compact__action/);
  assert.match(html, /Curly necklace/);
});
test('preset matches homepage tree and precedes the custom heading and Featured product', () => {
  const raw = fs.readFileSync('templates/index.json', 'utf8');
  const template = JSON.parse(raw.slice(raw.indexOf('{')));
  const section = template.sections.inspiration_products;
  assert.equal(section.type, 'video-product-carousel-custom');
  const position = template.order.indexOf('inspiration_products');
  assert.equal(template.order[position + 1], 'popular_item_heading');
  assert.equal(template.order[position + 2], 'featured_product_popular');
  const preset = schema('sections/video-product-carousel-custom.liquid').presets[0];
  assert.deepEqual(preset.settings, section.settings);
  assert.equal(preset.blocks[0].type, 'header');
  assert.equal(preset.blocks[1].type, 'carousel');
  for (let index = 0; index < 4; index++) {
    const slide = section.blocks.carousel.blocks[`item-${index + 1}`];
    assert.deepEqual(preset.blocks[1].blocks[index].settings, slide.settings);
    assert.deepEqual(preset.blocks[1].blocks[index].blocks[1].settings, slide.blocks.product.settings);
    assert.equal(slide.type, 'slide');
    assert.deepEqual(slide.block_order, ['video', 'product']);
    assert.equal(slide.blocks.video.type, 'video');
    assert.equal(slide.blocks.product.type, 'product-card-compact');
    assert.deepEqual(preset.blocks[1].blocks[index].blocks[0].settings, slide.blocks.video.settings);
  }
});
test('Video cover fallback is opt-in and exact portrait ratio works on both devices', () => {
  const file = 'blocks/video.liquid';
  const defaults = Object.fromEntries(schema(file).settings.filter(s => s.id && s.default !== undefined).map(s => [s.id, s.default]));
  // LiquidJS treats assigned blank as a sentinel; Shopify Liquid resolves it to nil.
  const source = stripShopifyMetadata(fs.readFileSync(file, 'utf8')).replace(/assign (uploaded_video|external_video) = blank/g, "assign $1 = ''");
  const render = settings => engine.parseAndRenderSync(source, { block: { settings: { ...defaults, ...settings }, shopify_attributes: 'data-editor-block="video"' } });
  const image = { src: '/cover.jpg', width: 500, height: 700, aspect_ratio: 5 / 7 };
  const fallback = render({ cover_image: image, use_cover_as_fallback: true, aspect_ratio_desktop: 'portrait_tall', aspect_ratio_mobile: 'portrait_tall' });
  assert.match(fallback, /video-block__poster/);
  assert.match(fallback, /--video-block-ratio: 5 \/ 7;/);
  assert.match(fallback, /--video-block-ratio-mobile: 5 \/ 7;/);
  assert.doesNotMatch(fallback, /data-video-play/);
  const original = render({ cover_image: image });
  assert.match(original, /<theme-video/);
  assert.doesNotMatch(original, /video-block__poster/);
});
