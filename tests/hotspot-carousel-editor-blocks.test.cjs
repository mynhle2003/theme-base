const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { loadLiquid } = require('./helpers/liquid-engine.cjs');
const liquid = new (loadLiquid())();
const section = fs.readFileSync('sections/hotspot-full-width-carousel.liquid', 'utf8');
const composition = section.slice(0, section.indexOf("{% liquid\n  assign hotspot_carousel_width"))
  .replace("{% content_for 'blocks' %}", '{{ fixture }}')
  + '{{ hotspot_carousel_header }}|{{ hotspot_carousel_slides }}|{{ hotspot_carousel_product_callout_count }}';

test('carousel renders dynamic blocks through content_for to preserve editor identity', () => {
  assert.match(section, /{% content_for 'blocks' %}/);
  assert.doesNotMatch(section, /{%\s*render hotspot_carousel_block\s*%}/);
  const block = fs.readFileSync('blocks/product-callout.liquid', 'utf8');
  assert.match(block, /{{ block.shopify_attributes }}/);
  assert.match(block, /<!--hotspot-carousel-slide-start-->/);
  assert.match(block, /<!--hotspot-carousel-slide-end-->/);
});

test('block composition retains editor attributes and separates a reordered header from slides', async () => {
  const first = '<article data-shopify-editor-block="one">ONE</article>';
  const second = '<article data-shopify-editor-block="two">TWO</article>';
  const slide = value => `<!--hotspot-carousel-slide-start-->${value}<!--hotspot-carousel-slide-end-->`;
  for (const fixture of [
    `<header>HEADER</header>${slide(first)}${slide(second)}`,
    `${slide(first)}<header>HEADER</header>${slide(second)}`,
    `${slide(first)}${slide(second)}<header>HEADER</header>`,
  ]) {
    const html = await liquid.parseAndRender(composition, { fixture });
    assert.equal(html.trim(), `<header>HEADER</header>|${first}${second}|2`);
  }
});
