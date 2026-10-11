const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

let browser;
before(async () => { browser = await chromium.launch({ channel: 'chrome', headless: true }); });
after(async () => { await browser?.close(); });
const critical = fs.readFileSync('assets/critical.css', 'utf8');
const runtime = fs.readFileSync('assets/announcement-bar.js', 'utf8');
const sectionStyles = fs.readFileSync('sections/announcement-bar.liquid', 'utf8')
  .match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];

const fixture = (messages, social) => `<style>${critical}</style>
  <style>:root { --font-body-family: Arial; --font-body-sm: 14px; --body-color: black; }
    body { font: 14px/1.5 Arial; } p { margin: 0; }</style>
  <div class="announcement-bar announcement-bar--slider ${messages.length === 1 ? 'announcement-bar--single' : ''} ${social ? 'announcement-bar--social-desktop' : ''}"
    data-announcement-bar data-announcement-type="slider" data-announcement-autoplay="0"
    style="--announcement-bar-padding-top:10px;--announcement-bar-padding-bottom:10px;--announcement-padding-top-mobile:8px;--announcement-padding-bottom-mobile:8px">
    <div class="announcement-bar__layout ${social ? 'container full-width' : ''}">
      ${social ? '<div class="announcement-bar__social"><div class="announcement-social-links"><a href="#"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="7"/></svg></a></div></div>' : ''}
      <div class="announcement-bar__inner">
        <button class="announcement-bar__control" data-announcement-previous>Previous</button>
        <div class="announcement-bar__viewport" data-announcement-viewport>
          <div class="announcement-bar__slides" data-announcement-track>
            ${messages.map(message => `<div class="text-block size-style body-text body-sm" style="--size-style-width:100%"><p>${message}</p></div>`).join('')}
          </div>
        </div>
        <button class="announcement-bar__control" data-announcement-next>Next</button>
      </div>
    </div>
  </div><header>Header</header>`;
const copyRect = page => page.locator('[data-announcement-track] > .text-block:first-child p').evaluate(el => { const r = el.getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; });
const headerTop = page => page.locator('header').evaluate(el => el.getBoundingClientRect().top);

for (const width of [320, 390, 1440]) {
  for (const social of [false, true]) {
    test(`single announcement reserves its final geometry before section CSS/JS: ${width}px social=${social}`, async () => {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      try {
        await page.setContent(fixture(['Free shipping worldwide on orders over $150 USD'], social));
        const initial = await headerTop(page);
        const initialCopy = await copyRect(page);
        await page.addStyleTag({ content: sectionStyles });
        assert.equal(await headerTop(page), initial, 'late section styles must not move the header');
        await page.addScriptTag({ content: runtime });
        assert.equal(await headerTop(page), initial, 'runtime must not resize a single announcement');
        assert.equal(await page.locator('[data-announcement-track] > *').count(), 1);
        assert.deepEqual(await copyRect(page), initialCopy, 'initialization must preserve text position and width');
        await page.evaluate(() => document.querySelector('[data-announcement-bar]').dispatchEvent(new CustomEvent('shopify:section:unload', { bubbles: true })));
        await page.evaluate(() => document.querySelector('[data-announcement-bar]').dispatchEvent(new CustomEvent('shopify:section:load', { bubbles: true })));
        assert.equal(await headerTop(page), initial, 'editor reinitialization must preserve geometry');
      } finally { await page.close(); }
    });
  }

  test(`multiple announcement slider retains reserved height and navigation: ${width}px`, async () => {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    try {
      await page.setContent(fixture(['Short message', 'A longer announcement that wraps across several lines on a narrow mobile viewport.'], true));
      const initial = await headerTop(page);
      await page.addStyleTag({ content: sectionStyles });
      await page.addScriptTag({ content: runtime });
      assert.ok(Math.abs(await headerTop(page) - initial) <= 1, 'initial measurement must preserve the reserved maximum height');
      await page.locator('[data-announcement-next]').click();
      await page.waitForFunction(() => document.querySelectorAll('[data-announcement-track] > *')[1].dataset.announcementState === 'active');
      assert.ok(Math.abs(await headerTop(page) - initial) <= 1, 'navigation must not move the header');
      assert.equal(await page.locator('[data-announcement-track] > *').count(), 3);
      await page.evaluate(() => document.querySelector('[data-announcement-bar]').dispatchEvent(new CustomEvent('shopify:section:unload', { bubbles: true })));
      assert.equal(await page.locator('[data-announcement-track] > *').count(), 2, 'unload removes the loop clone');
    } finally { await page.close(); }
  });
}

for (const width of [390, 1440]) {
  test('overlay header never paints the announcement scheme during delayed initialization: ' + width + 'px', async () => {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const headerStyles = fs.readFileSync('sections/header.liquid', 'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
    const background = selector => page.locator(selector).evaluate(el => getComputedStyle(el).backgroundColor);
    try {
      await page.setContent(fixture(['Free shipping worldwide on orders over $150 USD'], true) +
        '<style>:root{--background-color:#fff;--motion-duration-standard:0s}.scheme-3{--background-color:#432315}</style>' +
        '<div class="section-header header section-color-scope"><div class="header-top header-top--transparent-scheme section-color-scope scheme-3" data-header-overlay data-header-overlap-first-section style="height:68px">Header content</div></div>');
      assert.equal(await background('.header-top'), 'rgba(0, 0, 0, 0)', 'server-rendered overlay must start transparent');
      assert.equal(await background('.section-header'), 'rgba(0, 0, 0, 0)');
      await page.addStyleTag({ content: headerStyles });
      await page.evaluate(() => {
        const header = document.querySelector('.section-header');
        header.classList.add('header--overlay');
        header.dataset.stickyType = 'scroll_up';
      });
      assert.equal(await background('.header-top'), 'rgba(0, 0, 0, 0)', 'late CSS/runtime must not change the painted surface');
      for (const state of ['header--is-scrolled', 'header--submenu-open', 'header--search-open', 'header--cart-open']) {
        await page.evaluate(state => {
          document.querySelector('.section-header').classList.add(state);
          document.querySelector('.header-top').classList.remove('header-top--transparent-scheme', 'scheme-3');
        }, state);
        assert.equal(await background('.section-header'), 'rgb(255, 255, 255)', state + ' restores base scheme');
        assert.equal(await background('.header-top'), 'rgb(255, 255, 255)');
        await page.evaluate(state => {
          document.querySelector('.section-header').classList.remove(state);
          document.querySelector('.header-top').classList.add('header-top--transparent-scheme', 'scheme-3');
        }, state);
      }
      assert.equal(await background('.header-top'), 'rgba(0, 0, 0, 0)', 'closing returns to transparent overlay');
    } finally { await page.close(); }
  });
}

for (const width of [390, 1440]) {
  test('header block geometry survives actual header.js column setup: ' + width + 'px', async () => {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const styles = ['_header-top', '_header-logo', '_header-menu-toggle', '_header-cart', '_header-search'].map(name => fs.readFileSync('blocks/' + name + '.liquid', 'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1]).join('\n');
    const bounds = () => page.locator('.header-logo,.header-menu-toggle,.header-search,.header-cart').evaluateAll(elements => Object.fromEntries(elements.map(el => {const r=el.getBoundingClientRect();return [el.classList[0],[r.x,r.y,r.width,r.height]];})));
    try {
      await page.setContent('<style>' + critical + styles + '</style>' +
        '<style>:root{--button-height:44px;--button-height-mobile:44px;--logo-width:80px;--logo-width-mobile:64px;--header-icon-size:20px;--font-body-family:Arial;--font-body-md:14px}.header__container{padding-inline:16px}.header-menu{height:44px;width:200px}.header-logo{height:40px}@media(max-width:991.98px){.header-menu{display:none}.header-logo{height:30px}}</style>' +
        '<div class="shopify-section section-header header"><div class="header-top" data-header-root data-sticky-type="none"><div class="container header__container"><div class="header__row" data-header-row><div class="header__column header__column--left" data-header-column="left"></div><div class="header__column header__column--center" data-header-column="center"></div><div class="header__column header__column--right" data-header-column="right"></div><div class="header__blocks" data-header-blocks><nav class="header-menu">Menu</nav><a class="header-logo site-logo header-logo--center">Logo</a><button class="header-menu-toggle btn btn--unstyled" data-header-menu-toggle><span class="icon"></span></button><button class="header-search"><span class="icon"></span></button><a class="header-cart header-cart--type-text"><span class="icon header-cart__mobile-icon"></span><span class="header-action__label">Cart (0)</span></a></div></div></div></div></div>');
      const before = await bounds();
      await page.addScriptTag({ content: fs.readFileSync('assets/header.js', 'utf8') });
      await page.waitForFunction(() => document.querySelector('[data-header-root]').dataset.layoutReady === 'true');
      assert.deepEqual(await bounds(), before, 'logo, toggle and actions must retain position and size');
      await page.evaluate(() => { const content=document.createElement('div');content.style.height='2000px';document.body.append(content); });
      assert.deepEqual(await bounds(), before, 'scrollbar appearance must not shift the header');
    } finally { await page.close(); }
  });
}
