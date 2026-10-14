const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
let browser;
before(async () => { browser = await chromium.launch({ channel: 'chrome', headless: true }); });
after(async () => { await browser?.close(); });
const stylesheet = file => fs.readFileSync(file, 'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
const runtime = fs.readFileSync('assets/header.js', 'utf8');
const organizer = runtime.slice(runtime.indexOf('  const organizeHeaderLayout ='), runtime.indexOf('  const initializeMegaMenus ='));
const styles = fs.readFileSync('assets/critical.css', 'utf8') + stylesheet('blocks/_header-top.liquid') + stylesheet('blocks/_header-logo.liquid');
const fixture = (desktop, mobile) => `<style>${styles}</style><style>
:root { --button-height:44px; --button-height-mobile:40px; --logo-width:104px; --logo-width-mobile:80px; }
.header__container { width:calc(100% - 32px); margin:auto; }
.header-search,.header-cart { width:32px; } .header-menu { width:300px; }
.header-menu-toggle { display:none; width:36px; height:36px; }
.site-logo__image { height:35px; }
@media(max-width:991.98px) { .header-menu { display:none; } .header-menu-toggle { display:block; } }
</style><div class="shopify-section"><div class="header-top"><div class="header__container"><div class="header__row">
<div class="header__column header__column--left" data-header-column="left"></div>
<div class="header__column header__column--center" data-header-column="center"></div>
<div class="header__column header__column--right" data-header-column="right"></div>
<div class="header__blocks" data-header-blocks>
<a href="#logo" class="header-logo site-logo header-logo--${desktop}" data-logo-desktop-position="${desktop}" data-logo-mobile-position="${mobile}"><span class="site-logo__image">Logo</span></a>
<nav class="header-menu">Menu</nav><button class="header-menu-toggle">Menu</button><button class="header-search">Search</button><a href="#cart" class="header-cart">Cart</a>
</div></div></div></div></div>`;
const initialize = async page => page.addScriptTag({ content: `const headerLayoutItems = new WeakMap(); const isMobileMenuViewport = () => matchMedia('(max-width: 991.98px)').matches; ${organizer} window.organize = () => organizeHeaderLayout(document.querySelector('.shopify-section')); window.organize();` });
const inspect = page => page.evaluate(() => {
 const root = document.querySelector('.header-top');
 const logo = root.querySelector('.site-logo').getBoundingClientRect();
 const container = root.querySelector('.header__container').getBoundingClientRect();
 const column = cls => root.querySelector(cls).closest('[data-header-column]').dataset.headerColumn;
 return { position: root.dataset.logoPosition, logo:column('.site-logo'), menu:column('.header-menu'), search:column('.header-search'), toggle:column('.header-menu-toggle'), cart:column('.header-cart'), centerDelta:(logo.x+logo.width/2)-(container.x+container.width/2), count:root.querySelectorAll('.site-logo').length };
});
for (const desktop of ['left','center']) for (const mobile of ['left','center']) {
 test(`independent positions, resize and repeated initialization: ${desktop}/${mobile}`, async () => {
  const page = await browser.newPage({viewport:{width:1440,height:800}});
  await page.setContent(fixture(desktop,mobile)); await initialize(page);
  let state = await inspect(page); assert.equal(state.position, desktop); assert.equal(state.logo, desktop); assert.equal(state.search,'right');
  for (const width of [375,768,320]) {
   await page.setViewportSize({width,height:800}); await page.evaluate(() => { window.organize(); window.organize(); });
   state=await inspect(page); assert.equal(state.position,mobile); assert.equal(state.logo,mobile); assert.equal(state.search,mobile==='center'?'left':'right'); assert.equal(state.toggle,state.search); assert.equal(state.cart,'right'); assert.equal(state.count,1);
   if(mobile==='center') assert.ok(Math.abs(state.centerDelta)<1,JSON.stringify(state));
  }
  await page.locator('.header-search').focus();
  await page.setViewportSize({width:1440,height:800}); await page.evaluate(() => window.organize());
  state=await inspect(page); assert.equal(state.position,desktop); assert.equal(state.search,'right'); assert.equal(state.count,1); assert.equal(await page.evaluate(() => document.activeElement.className),'header-search');
  await page.close();
 });
}
for (const mobile of ['left','center']) test(`mobile first paint before JavaScript: desktop left / mobile ${mobile}`,async()=>{
 const page=await browser.newPage({viewport:{width:375,height:800}});await page.setContent(fixture('left',mobile));
 const geometry=await page.evaluate(()=>{const r=selector=>document.querySelector(selector).getBoundingClientRect();const logo=r('.site-logo'),container=r('.header__container'),search=r('.header-search'),toggle=r('.header-menu-toggle');return {delta:logo.x+logo.width/2-container.x-container.width/2,searchX:search.x,toggleRight:toggle.right,logoX:logo.x};});
 if(mobile==='center'){assert.ok(Math.abs(geometry.delta)<1,JSON.stringify(geometry));assert.ok(geometry.searchX>=geometry.toggleRight);}
 else assert.equal(geometry.logoX,16);
 await page.close();
});
