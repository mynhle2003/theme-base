const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
let browser;
before(async () => { browser = await chromium.launch({ channel: 'chrome', headless: true }); });
after(async () => { await browser?.close(); });
const css = file => fs.readFileSync(file, 'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
const styles = fs.readFileSync('assets/critical.css', 'utf8') + ['_header-top', '_header-menu', '_header-menu-toggle', '_header-logo'].map(name => css(`blocks/${name}.liquid`)).join('\n');
const fixture = trigger => `<style>${styles}</style><style>:root{--button-height:44px;--button-height-mobile:40px;--logo-width:100px;--logo-width-mobile:92px;--motion-duration-slow:0s}.header__container{width:100%;padding:16px}.header-mega-menu{min-height:100px}</style>
<div class="shopify-section"><div class="header-top" data-header-root data-sticky-type="none"><div class="header__container"><div class="header__row">
<div class="header__column" data-header-column="left"></div><div class="header__column" data-header-column="center"></div><div class="header__column" data-header-column="right"></div><div class="header__blocks" data-header-blocks>
<nav class="header-menu header-menu--trigger-${trigger}"><ul class="header-menu__list"><li class="header-menu__item" data-menu-title="collection"><details class="header-menu__details" data-header-submenu-trigger="${trigger}"><summary class="header-menu__summary">Collection</summary><ul class="header-menu__submenu"><li><a href="#earrings">Earrings</a></li></ul></details></li></ul><div data-header-mega-menu data-mega-menu-trigger="collection" class="header-mega-menu" hidden><div data-mega-menu-navigation></div></div></nav>
<a class="header-logo site-logo header-logo--center" data-logo-desktop-position="center" data-logo-mobile-position="center">Logo</a><button class="header-menu-toggle btn" data-header-menu-toggle>Menu</button><a class="header-cart">Cart</a>
</div></div></div></div></div>`;
async function pageAt(width, trigger) {
 const page = await browser.newPage({ viewport: { width, height: 800 }, reducedMotion: 'reduce' });
 await page.setContent(fixture(trigger));
 await page.addScriptTag({path:'assets/header.js'});
 return page;
}
for (const width of [767,768,991,992,1024,1149,1150,1280]) for (const trigger of ['click','hover']) test(`${trigger} navigation mode at ${width}px`, async () => {
 const page = await pageAt(width,trigger);
 const mode = await page.evaluate(() => ({mode:document.querySelector('.header-top').dataset.layoutMode, nav:getComputedStyle(document.querySelector('.header-menu')).display,toggle:getComputedStyle(document.querySelector('.header-menu-toggle')).display}));
 assert.equal(mode.mode,width<992?'mobile-center':'desktop-center');
 assert.equal(mode.nav==='none',width<992);
 assert.equal(mode.toggle==='none',width>=992);
 if(width>=992){
  const summary = page.locator('.header-menu__summary');
  if(trigger==='hover') await summary.hover(); else await summary.click();
  await page.waitForFunction(()=>document.querySelector('.header-menu__details').open);
  assert.equal(await page.locator('.header-mega-menu').isVisible(),true);
  assert.equal(await page.locator('.header-menu').evaluate(e => getComputedStyle(e).overflow), 'visible');
  assert.equal(await page.locator('.header-menu__details').evaluate(e=>e.classList.contains('is-mobile-submenu-active')),false);
  if(trigger==='click') { await summary.click(); await page.waitForFunction(()=>!document.querySelector('.header-menu__details').open); }
 }
 await page.close();
});
test('open desktop menu resets across drawer boundary and opens again', async()=>{
 const page=await pageAt(1024,'click');
 await page.locator('.header-menu__summary').click();
 for(const width of [991,992,768,1280]){
  await page.setViewportSize({width,height:800});
  await page.waitForFunction(expected=>document.querySelector('.header-top').dataset.layoutMode===expected,width<992?'mobile-center':'desktop-center');
  assert.equal(await page.locator('.header-menu__details').evaluate(e=>e.open),false);
  if(width>=992){await page.locator('.header-menu__summary').click();assert.equal(await page.locator('.header-mega-menu').isVisible(),true);}
 }
 await page.close();
});

test('desktop navigation does not inherit the old tablet scroll clipping utility',()=>{
 const source=fs.readFileSync('blocks/_header-menu.liquid','utf8');
 const nav=source.match(/<nav[\s\S]*?>/)[0];
 assert.ok(!nav.includes('scrollbar--vertical-until-desktop'));
});
