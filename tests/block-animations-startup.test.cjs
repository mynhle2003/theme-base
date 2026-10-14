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
const cardFixture = `<style>${fs.readFileSync('assets/critical.css', 'utf8')}
  :root { --motion-block-animations: 1; --motion-duration-slow: .5s; }
  .image-cards-section__grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:20px; }
  article.image-card { height:120px; }
  @media(max-width:500px) { .image-cards-section__grid { grid-template-columns:1fr; } }
  </style><section class="shopify-section" id="cards">
  <h2 data-block-animation="fade" data-animation-delay="100">Cards</h2>
  <div class="image-cards-section__grid">
  <article class="image-card" id="first"><h3 class="block-animation" data-block-animation="rotate-words">First card</h3><a href="#">Open</a></article>
  <article class="image-card" id="second"><p class="block-animation" data-block-animation="fade">Second card</p></article>
  <article class="image-card" id="third">Third card</article></div></section>`;
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
test('whole cards stagger by row, release transforms and suppress nested leaf effects', async () => {
  const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
  try {
    await page.setContent(cardFixture);
    await page.addScriptTag({ content: runtime });
    assert.deepEqual(await page.locator('article').evaluateAll(cards => cards.map(card => Number(card.dataset.animationStagger))), [250, 325, 250]);
    const effect = await page.locator('#first').evaluate(card => ({ timing: card.getAnimations()[0].effect.getTiming(), frames: card.getAnimations()[0].effect.getKeyframes() }));
    assert.equal(effect.timing.duration, 700);
    assert.equal(effect.timing.delay, 250);
    assert.equal(effect.frames[0].transform, 'translateY(32px)');
    assert.equal(await page.locator('.reveal-word').count(), 0);
    assert.equal(await page.locator('article [data-block-animation]').evaluateAll(leaves => leaves.every(leaf => getComputedStyle(leaf).opacity === '1' && leaf.getAnimations().length === 0)), true);
    await page.setViewportSize({ width: 390, height: 900 });
    await page.waitForFunction(() => document.querySelector('#second').dataset.animationStagger === '250');
    await page.waitForFunction(() => [...document.querySelectorAll('article')].every(card => card.getAnimations().length === 0));
    assert.equal(await page.locator('#first').evaluate(card => getComputedStyle(card).transform), 'none');
  } finally { await page.close(); }
});
test('cards honor global/reduced motion, exclusions and editor unload/reload', async () => {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  try {
    await page.setContent(cardFixture + '<section class="shopify-section"><div class="marquee"><article class="image-card" id="excluded">Marquee</article></div></section>');
    await page.addScriptTag({ content: runtime });
    assert.equal(await page.locator('.reveal-pending').count(), 0);
    assert.equal(await page.locator('#excluded').getAttribute('data-component-reveal'), null);
    assert.equal(await page.locator('#first').evaluate(card => card.getAnimations().length), 0);
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.evaluate(() => {
      const section = document.querySelector('#cards');
      section.dispatchEvent(new CustomEvent('shopify:section:unload', { bubbles: true }));
      document.documentElement.style.setProperty('--motion-block-animations', '0');
      section.dispatchEvent(new CustomEvent('shopify:section:load', { bubbles: true }));
    });
    assert.equal(await page.locator('.reveal-pending').count(), 0);
    assert.equal(await page.locator('#first').evaluate(card => card.getAnimations().length), 0);
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--motion-block-animations', '1');
      document.querySelector('#cards').dispatchEvent(new CustomEvent('shopify:section:load', { bubbles: true }));
    });
    assert.equal(await page.locator('#first').evaluate(card => card.getAnimations().length), 1);
    await page.locator('#first a').focus();
    assert.equal(await page.locator('#first').evaluate(card => card.getAnimations().length), 0);
  } finally { await page.close(); }
});
test('new cards initialize once and hidden tab cards replay when activated', async () => {
  const page = await browser.newPage();
  try {
    await page.setContent(cardFixture);
    await page.addScriptTag({ content: runtime });
    await page.evaluate(() => document.querySelector('#cards').insertAdjacentHTML('beforeend', '<div role="tabpanel" hidden><article class="image-card" id="tab-card"><span class="block-animation" data-block-animation="fade">Tab card</span></article></div>'));
    await page.waitForFunction(() => document.querySelector('#tab-card').dataset.animationInitialized === 'true');
    assert.equal(await page.locator('#tab-card').evaluate(card => card.getAnimations().length), 0);
    await page.evaluate(() => document.querySelector('[role="tabpanel"]').hidden = false);
    await page.waitForFunction(() => document.querySelector('#tab-card').getAnimations().length === 1);
    assert.equal(await page.locator('#tab-card span').evaluate(leaf => leaf.getAnimations().length), 0);
    await page.evaluate(() => document.querySelector('[role="tabpanel"]').hidden = true);
    await page.waitForFunction(() => document.querySelector('#tab-card').getAnimations().length === 0);
    await page.evaluate(() => document.querySelector('[role="tabpanel"]').hidden = false);
    await page.waitForFunction(() => document.querySelector('#tab-card').getAnimations().length === 1);
  } finally { await page.close(); }
});
