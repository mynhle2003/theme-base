const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function load(path, name) {
  let Component;
  vm.runInNewContext(fs.readFileSync(path, 'utf8').replace(/^import .*;\n/gm, ''), {
    HTMLElement: class {},
    customElements: { get() {}, define(key, value) { if (key === name) Component = value; } },
    window: { requestAnimationFrame(callback) { callback(); } },
    CustomEvent: class { constructor(type, init) { this.type = type; this.detail = init.detail; } },
  });
  return Object.create(Component.prototype);
}

for (const swatch of [true, false]) {
  test(`picker emits media intent and keeps commerce updates for swatch=${swatch}`, () => {
    const picker = load('assets/variant-picker.js', 'variant-picker');
    picker.dataset = { updateUrlOnChange: 'false' };
    const calls = [];
    picker.selectedOptions = () => ['Red', 'M'];
    picker.findVariant = () => ({ id: 2, available: true });
    for (const method of ['updateAvailability', 'updateProductForm', 'updateStatus', 'updatePrice', 'updateSaleBadge', 'updateLegacyMedia']) {
      picker[method] = () => calls.push(method);
    }
    picker.dispatchEvent = (event) => { assert.equal(event.detail.updateMedia, swatch); assert.equal(event.detail.variantId, '2'); };
    picker.handleChange({ target: { matches: () => true, closest: () => ({ dataset: { optionSwatch: String(swatch) } }) } });
    assert.ok(calls.includes('updateProductForm'));
    assert.ok(calls.includes('updatePrice'));
    assert.equal(calls.includes('updateLegacyMedia'), swatch);
  });
}

for (const mode of ['desktop-static', 'mobile-slider', 'quick-add-strip']) {
  test(`${mode}: non-swatch preserves browsed media, swatch selects featured media`, () => {
    const gallery = load('assets/product-media.js', 'product-media-gallery');
    gallery.dataset = { currentVariantMediaId: '10' };
    Object.defineProperty(gallery, 'galleryMode', { value: mode });
    const calls = [];
    gallery.applyVariantMediaFilter = () => { calls.push('filter'); return false; };
    gallery.syncThumbnailVisibility = () => {};
    gallery.syncGalleryOverflow = () => {};
    gallery.visibleSlides = () => [{ dataset: { mediaId: '10' } }, { dataset: { mediaId: '20' } }];
    gallery.activeMediaId = () => '10';
    gallery.showMedia = (id) => calls.push(id);
    gallery.scrollToMedia = (id) => calls.push(id);
    const detail = { variantId: '2', variant: { featured_media: { id: 20 } }, updateMedia: false };
    gallery.handleVariantChange({ detail });
    assert.equal(gallery.dataset.currentVariantId, '2');
    assert.equal(gallery.dataset.currentVariantMediaId, '10');
    assert.deepEqual(calls, []);
    gallery.handleVariantChange({ detail: { ...detail, updateMedia: true } });
    assert.equal(gallery.dataset.currentVariantMediaId, '20');
    assert.deepEqual(calls, ['filter', '20']);
  });
}
