const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const engine = new (loadLiquid())({ fs: {
  resolve: (_root, name) => path.resolve('snippets', name + '.liquid'),
  exists: async file => fs.existsSync(file),
  readFile: async file => stripShopifyMetadata(fs.readFileSync(file, 'utf8')),
} });
engine.registerFilter('t', x => x);
engine.registerFilter('handleize', x => String(x || ''));
function numeric(text) {
  const parts = text.trim().split('/').map(Number);
  return parts.length === 2 ? parts[0] / parts[1] : parts[0];
}
async function value(file, variable, settings, extra = {}) {
  const text = stripShopifyMetadata(fs.readFileSync(file, 'utf8'));
  const liquid = text.match(/{%\s*liquid\b[\s\S]*?%}/)[0];
  const html = await engine.parseAndRender(liquid + `<output>{{ ${variable} }}</output>`, {
    block: { settings }, section: { settings, blocks: [] }, ...extra,
  });
  return numeric(html.match(/<output>([\s\S]*?)<\/output>/)[1]);
}
const owners = [
  ['blocks/image.liquid', 'image_ratio_desktop', 'image_ratio_desktop'],
  ['blocks/image.liquid', 'image_ratio_mobile', 'image_ratio_mobile'],
  ['blocks/collection-card.liquid', 'ratio', 'collection_card_ratio'],
  ['blocks/blog-card.liquid', 'ratio', 'blog_card_ratio'],
  ['blocks/first-card.liquid', 'ratio', 'first_card_ratio'],
  ['blocks/press-item.liquid', 'image_ratio', 'press_item_ratio_value'],
  ['blocks/video.liquid', 'aspect_ratio_desktop', 'aspect_ratio_desktop'],
  ['blocks/video.liquid', 'aspect_ratio_mobile', 'aspect_ratio_mobile'],
  ['blocks/image-comparison.liquid', 'image_ratio_desktop', 'comparison_ratio_desktop'],
  ['blocks/image-comparison.liquid', 'image_ratio_mobile', 'comparison_ratio_mobile'],
  ['blocks/product-callout-gallery.liquid', 'image_ratio', 'gallery_ratio'],
  ['blocks/_product-media.liquid', 'thumbnail_ratio', 'media_thumbnail_ratio'],
  ['sections/image-text-stacked-bands.liquid', 'image_ratio', 'stacked_bands_desktop_ratio'],
  ['sections/image-text-stacked-bands.liquid', 'image_ratio_mobile', 'stacked_bands_mobile_ratio'],
];
for (const [file, setting, variable] of owners) {
  test(`${file} ${setting} binds canonical portrait/landscape ratios`, async () => {
    for (const [preset, expected] of [['ratio_5_4', 1.25], ['ratio_9_16', 9 / 16]]) {
      assert.ok(Math.abs(await value(file, variable, { [setting]: preset, customize_mobile_image: true }) - expected) < 1e-8);
    }
  });
}

test('custom video W/H uses floating division independently per device and retains legacy fallback', async () => {
  const settings = { aspect_ratio_desktop: 'custom', custom_aspect_ratio_width_desktop: 6, custom_aspect_ratio_height_desktop: 7,
    aspect_ratio_mobile: 'custom', custom_aspect_ratio_width_mobile: 4, custom_aspect_ratio_height_mobile: 5 };
  assert.ok(Math.abs(await value('blocks/video.liquid', 'aspect_ratio_desktop', settings) - 6 / 7) < 1e-8);
  assert.equal(await value('blocks/video.liquid', 'aspect_ratio_mobile', settings), .8);
  assert.equal(await value('blocks/video.liquid', 'aspect_ratio_mobile', { aspect_ratio_mobile: 'custom', custom_aspect_ratio_mobile: 1.25, custom_aspect_ratio_height_mobile: 0 }), 1.25);
});

test('custom collection W/H accepts exact large integer fractions and nonpositive H retains legacy ratio', async () => {
  assert.ok(Math.abs(await value('blocks/collection-card.liquid', 'collection_card_ratio', { ratio: 'custom', ratio_custom_width: 600, ratio_custom_height: 700 }) - 6 / 7) < 1e-8);
  assert.equal(await value('blocks/collection-card.liquid', 'collection_card_ratio', { ratio: 'custom', ratio_custom: .8, ratio_custom_width: 6, ratio_custom_height: 0 }), .8);
});

test('Image Custom W/H and fill-height options remain independent from the editor device selector', async () => {
  const settings = { device: 'mobile', image_ratio_desktop: 'custom', image_ratio_custom_width_desktop: 784, image_ratio_custom_height_desktop: 928,
    image_ratio_mobile: 'custom', image_ratio_custom_width_mobile: 343, image_ratio_custom_height_mobile: 482 };
  assert.ok(Math.abs(await value('blocks/image.liquid', 'image_ratio_desktop', settings) - 784 / 928) < 1e-8);
  assert.ok(Math.abs(await value('blocks/image.liquid', 'image_ratio_mobile', settings) - 343 / 482) < 1e-8);
  const source = fs.readFileSync('blocks/image.liquid', 'utf8');
  const schema = JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  for (const [id, label, device] of [
    ['image_ratio_custom_width_desktop', 'W', 'desktop'], ['image_ratio_custom_height_desktop', 'H', 'desktop'],
    ['image_ratio_custom_width_mobile', 'W (mobile)', 'mobile'], ['image_ratio_custom_height_mobile', 'H (mobile)', 'mobile'],
  ]) {
    const field = schema.settings.find(s => s.id === id);
    assert.equal(field.label, label);
    assert.ok(field.visible_if.includes(`device == '${device}'`));
    assert.ok(field.visible_if.includes(`image_ratio_${device} == 'custom'`));
  }
});

test('stacked bands invalid custom divisor retains a finite image ratio', async () => {
  const result = await value('sections/image-text-stacked-bands.liquid', 'stacked_bands_desktop_ratio', { image_ratio: 'custom', custom_image_ratio_width: 16, custom_image_ratio_height: 0 });
  assert.ok(Number.isFinite(result) && result > 0);
});

test('Image card separates custom aspect ratios from preserved fixed pixel heights', async () => {
  const source = fs.readFileSync('snippets/image-card-content.liquid', 'utf8');
  const style = source.match(/{% capture image_card_style %}([\s\S]*?){% endcapture %}/)[1];
  const settings = { image_ratio_custom_width_desktop: 6, image_ratio_custom_height_desktop: 7,
    image_ratio_custom_width_mobile: 4, image_ratio_custom_height_mobile: 5,
    height_custom_desktop: 260, height_custom_mobile: 200 };
  const custom = await engine.parseAndRender(style, { block: { settings }, image_card_height_desktop: 'custom', image_card_height_mobile: 'custom' });
  assert.ok(Math.abs(numeric(custom.match(/--image-card-ratio:\s*([^;]+);/)[1]) - 6 / 7) < 1e-8);
  assert.equal(numeric(custom.match(/--image-card-ratio-mobile:\s*([^;]+);/)[1]), .8);
  assert.doesNotMatch(custom, /--image-card-custom-height:/);
  const fixed = await engine.parseAndRender(style, { block: { settings }, image_card_height_desktop: 'fixed', image_card_height_mobile: 'fixed' });
  assert.match(fixed, /--image-card-custom-height:260px;/);
  assert.match(fixed, /--image-card-custom-height-mobile:200px;/);
});

test('global Product card ratio tokens use canonical and Custom W/H values', async () => {
  const file = 'snippets/css-variables-product-card.liquid';
  for (const [preset, expected] of [['ratio_5_4',1.25],['ratio_9_16',9/16],['custom',6/7]]) {
    const settings = { product_card_ratio: preset, product_card_ratio_custom_width: 6, product_card_ratio_custom_height: 7 };
    assert.ok(Math.abs(await value(file, 'product_card_image_ratio', {}, {settings}) - expected) < 1e-8);
  }
});
