const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
let browser;
before(async () => { browser = await chromium.launch({ channel: 'chrome', headless: true }); });
after(async () => { await browser?.close(); });
const runtime = fs.readFileSync('assets/block-animations.js', 'utf8');
const fixture = `<style>:root { --motion-block-animations: 1; }
  .item { height: 40px; } .reveal-pending { opacity: 0; }</style>
  <section class="shopify-section"><div class="item" data-block-animation="fade">Visible one</div>
  <div class="item" data-block-animation="slide-bottom">Visible two</div>
  <div style="height:1600px"></div>
  <div class="item" id="later" data-block-animation="fade">Later</div></section>`;
test('batched startup reveals visible blocks and keeps the offscreen reveal ready for scrolling', async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 700 } });
  try {
    await page.setContent(fixture);
    await page.addScriptTag({ content: runtime });
    assert.deepEqual(await page.locator('.item').evaluateAll(items => items.map(item => item.classList.contains('reveal-pending'))), [false, false, true]);
    assert.equal(await page.locator('#later').evaluate(item => item.getAnimations().length), 0);
    await page.locator('#later').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => !document.querySelector('#later').classList.contains('reveal-pending'));
    assert.equal(await page.locator('#later').evaluate(item => item.dataset.animationInitialized), 'true');
  } finally { await page.close(); }
});
test('reduced motion immediately exposes every block without entrance animations', async () => {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  try {
    await page.setContent(fixture);
    await page.addScriptTag({ content: runtime });
    assert.equal(await page.locator('.reveal-pending').count(), 0);
    assert.equal(await page.locator('.item').evaluateAll(items => items.reduce((count, item) => count + item.getAnimations().length, 0)), 0);
  } finally { await page.close(); }
});
