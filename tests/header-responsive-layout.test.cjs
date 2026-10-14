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
.header-menu-toggle { display:none; width:24px; height:24px; }
.site-logo__image { height:35px; }
@media(max-width:991.98px) { .header-menu { display:none; } .header-menu-toggle { display:block; } }
</style><div class="shopify-section"><div class="header-top"><div class="header__container"><div class="header__row">
<div class="header__column header__column--left" data-header-column="left"></div>
<div class="header__column header__column--center" data-header-column="center"></div>
<div class="header__column header__column--right" data-header-column="right"></div>
<div class="header__blocks" data-header-blocks>
<a href="#logo" class="header-logo site-logo header-logo--${desktop}" data-logo-desktop-position="${desktop}" data-logo-mobile-position="${mobile}"><span class="site-logo__image">Logo</span></a>
<nav class="header-menu"><span class="menu-visible">Menswear New Sale About</span></nav><button class="header-menu-toggle">Menu</button><button class="header-search">Search</button><a href="#cart" class="header-cart">Cart</a>
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

for (const width of [375, 1024, 1440]) for (const type of ['icon', 'text', 'icon_with_text', 'search_bar']) {
 test(`Search Desktop type ${type} at ${width}px`, async () => {
  const page=await browser.newPage({viewport:{width,height:800}});
  const search=type==='search_bar'
    ? '<form class="header-search header-search--type-search_bar"><input class="header-search__input"><button class="header-search__submit"><span class="icon">Icon</span></button></form><button class="header-search header-search--mobile-icon"><span class="icon">Icon</span></button>'
    : `<button class="header-search header-search--type-${type}"><span class="icon">Icon</span>${type==='icon'?'':'<span class="header-action__label">Search</span>'}</button>`;
  await page.setContent(`<style>${styles}${stylesheet('blocks/_header-search.liquid')}:root{--header-icon-size:20px;--button-height:44px;--button-height-mobile:40px;--input-height:44px;--input-height-mobile:40px;--font-body-md:14px;--font-body-family:Arial;}</style><div class="header-top" data-header-root data-layout-ready="true"><div class="header__row"><div class="header__column header__column--right">${search}</div></div></div>`);
  const visible=await page.evaluate(()=>{const shown=s=>{const el=document.querySelector(s);if(!el)return false;const r=el.getBoundingClientRect();return getComputedStyle(el).display!=='none'&&r.width>1&&r.height>1;};return {icon:shown('.header-search:not(.header-search--mobile-icon) > .icon'),label:shown('.header-action__label'),form:shown('form'),mobile:shown('.header-search--mobile-icon')};});
  if(type==='search_bar'){assert.equal(visible.form,width>=992);assert.equal(visible.mobile,width<992);}
  else {assert.equal(visible.icon,width<992||type!=='text');assert.equal(visible.label,width>=992&&type!=='icon');}
  await page.close();
 });
}
for (const width of [375, 1440]) test(`independent menu/action gaps at ${width}px`,async()=>{
 const page=await browser.newPage({viewport:{width,height:800}});
 await page.setContent(fixture('left','center'));await initialize(page);
 const gaps=await page.evaluate(()=>{const root=document.querySelector('.header-top');root.style.cssText='--header-top-gap:64px;--header-actions-gap:24px;--header-top-gap-mobile:8px;--header-actions-gap-mobile:4px';return {row:getComputedStyle(root.querySelector('.header__row')).gap,actions:getComputedStyle(root.querySelector('.header__column--right')).gap};});
 assert.equal(gaps.row,width<992?'8px':'64px');assert.equal(gaps.actions,width<992?'4px':'24px');
 const inherited=await page.evaluate(()=>{const root=document.querySelector('.header-top');root.style.removeProperty('--header-top-gap-mobile');root.style.removeProperty('--header-actions-gap-mobile');return {row:getComputedStyle(root.querySelector('.header__row')).gap,actions:getComputedStyle(root.querySelector('.header__column--right')).gap};});assert.equal(inherited.row,'64px');assert.equal(inherited.actions,'24px');await page.close();
});

test('tertiary underline stays inside banner clipping with existing padding control', async()=>{
 const page=await browser.newPage({viewport:{width:1440,height:800}});
 await page.setContent(`<style>${styles}${stylesheet('blocks/_mega-menu-banner.liquid')}</style><style>:root{--button-tertiary-underline-display:block;--button-tertiary-underline-offset:5px;--font-body-family:Arial;--button-font-size:13px;--button-letter-spacing:1.2px;}article{width:432px;--mega-banner-content-gap:8px;--mega-banner-button-gap:16px;--mega-banner-padding-top:24px;--mega-banner-padding-bottom:6px;--mega-banner-padding-left:0px;--mega-banner-padding-right:0px;}</style><article class="header-mega-menu__banner"><div class="header-mega-menu__banner-content header-mega-menu__banner-content--left"><a class="btn btn-tertiary btn--tertiary link-underline header-mega-menu__banner-button" data-underline="persistent" data-underline-target="text" href="#"><span class="btn__label"><span class="btn__text">Shop now</span></span></a></div></article>`);
 const read=()=>page.evaluate(()=>{const article=document.querySelector('article'),text=document.querySelector('.btn__text'),pseudo=getComputedStyle(text,'::after'),r=text.getBoundingClientRect();return {display:pseudo.display,height:pseudo.height,bottom:r.bottom-parseFloat(pseudo.bottom),clipBottom:article.getBoundingClientRect().bottom};});
 let result=await read();assert.equal(result.display,'block');assert.equal(result.height,'1px');assert.ok(result.bottom<=result.clipBottom,JSON.stringify(result));
 await page.evaluate(()=>document.querySelector('article').style.setProperty('--mega-banner-padding-bottom','0px'));result=await read();assert.ok(result.bottom>result.clipBottom,'zero padding reproduces clipped underline');
 await page.evaluate(()=>document.documentElement.style.setProperty('--button-tertiary-underline-display','none'));result=await read();assert.equal(result.display,'none','global underline toggle remains respected');await page.close();
});

for(const width of [375,768,1024,1440,1920]) for(const desktop of ['left','center']) for(const mobile of ['left','center']) {
 test(`first paint matches initialized visible layout: ${width}px ${desktop}/${mobile}`,async()=>{
  const page=await browser.newPage({viewport:{width,height:800}});
  await page.setContent(fixture(desktop,mobile));
  await page.locator('.header-top').evaluate(el=>{el.style.cssText='--header-top-gap:64px;--header-actions-gap:24px;--header-top-gap-mobile:8px;--header-actions-gap-mobile:4px';});
  const rects=()=>page.evaluate(()=>Object.fromEntries(['.site-logo','.menu-visible','.header-menu-toggle','.header-search','.header-cart'].map(selector=>{const el=document.querySelector(selector),r=el.getBoundingClientRect();return [selector,{x:r.x,y:r.y,width:r.width,height:r.height,visible:r.width>0&&r.height>0}];})));
  const before=await rects();await initialize(page);const after=await rects();
  for(const selector in before) if(before[selector].visible&&after[selector].visible) for(const dim of ['x','y']) assert.ok(Math.abs(before[selector][dim]-after[selector][dim])<=1,JSON.stringify({selector,dim,before:before[selector],after:after[selector]}));
  await page.close();
 });
}
