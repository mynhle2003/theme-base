const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('assets/product-collection-carousel.js', 'utf8')
  .replace(/^import .*;\n/gm, '').split('const getPaginationType')[0];
const context = vm.createContext({});
vm.runInContext(source + '\nthis.mobileColumns = getMobileSlidesPerView;', context);
const carousel = ({columns = '1', preview = 'true', configured} = {}) => ({
  dataset: {swiperColumnsMobile: columns, swiperNextSlidePreviewMobile: preview},
  closest: () => configured === undefined ? null : {dataset: {mobilePreviewPercent: configured}},
});
test('mobile preview accepts Product list fraction while retaining legacy defaults', () => {
  assert.equal(context.mobileColumns(carousel({configured: '33'})), 1.33);
  assert.equal(context.mobileColumns(carousel()), 1.2);
  assert.equal(context.mobileColumns(carousel({configured: 'invalid'})), 1.2);
});
test('preview customization respects disabled preview and explicit two-column layouts', () => {
  assert.equal(context.mobileColumns(carousel({preview: 'false', configured: '33'})), 1);
  assert.equal(context.mobileColumns(carousel({columns: '2', configured: '33'})), 2);
});
test('mobile preview values remain within supported fractional bounds', () => {
  assert.equal(context.mobileColumns(carousel({configured: '400'})), 1.8);
  assert.equal(context.mobileColumns(carousel({configured: '5'})), 1.1);
});
