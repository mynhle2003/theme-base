const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
let browser;
before(async () => { browser = await chromium.launch({ channel: 'chrome', headless: true }); });
after(async () => { await browser?.close(); });
const css = fs.readFileSync('sections/slideshow.liquid', 'utf8').split('{% stylesheet %}')[1].split('{% endstylesheet %}')[0];

test('autoplay CSS animates all pagination styles and respects pause and reduced motion', async () => {
  const page = await browser.newPage();
  try {
    await page.setContent(`<style>${css}</style><div class="slideshow" data-autoplay="true" style="--slideshow-autoplay-duration:3000ms">
      <div class="slideshow__swiper">
        <div class="slideshow__pagination" data-pagination-type="bullets" data-autoplay-clock="running"><button class="swiper-pagination-bullet swiper-pagination-bullet-active"></button></div>
        <div class="slideshow__pagination slideshow__pagination--numbers" data-autoplay-clock="running"><button class="slideshow__pagination-number" aria-current="true"><svg><circle></circle><circle></circle></svg></button></div>
        <div class="slideshow__pagination slideshow__pagination--progress_bar" data-autoplay-clock="running"><button class="slideshow__pagination-segment slideshow__pagination-segment--active"><span class="slideshow__pagination-segment-fill"></span></button></div>
      </div></div>`);
    const names = await page.evaluate(() => [
      getComputedStyle(document.querySelector('.swiper-pagination-bullet'), '::after').animationName,
      getComputedStyle(document.querySelector('circle:last-child')).animationName,
      getComputedStyle(document.querySelector('.slideshow__pagination-segment-fill')).animationName,
    ]);
    assert.deepEqual(names, ['slideshow-clock-bullet', 'slideshow-clock-number', 'slideshow-clock-segment']);
    await page.evaluate(() => document.querySelectorAll('[data-autoplay-clock]').forEach(n => n.dataset.autoplayClock = 'paused'));
    assert.equal(await page.locator('.slideshow__pagination-segment-fill').evaluate(n => getComputedStyle(n).animationPlayState), 'paused');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('.swiper-pagination-bullet').evaluate(n => getComputedStyle(n, '::after').animationName), 'none');
    assert.equal(await page.locator('.slideshow__pagination-segment-fill').evaluate(n => getComputedStyle(n).animationName), 'none');
  } finally { await page.close(); }
});
