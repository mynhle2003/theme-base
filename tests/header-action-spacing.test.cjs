const {test,before,after}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require('playwright');
let browser;
before(async()=>{browser=await chromium.launch({channel:'chrome',headless:true});});
after(async()=>{await browser?.close();});
const sheet=file=>fs.readFileSync(file,'utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
const css=fs.readFileSync('assets/critical.css','utf8')+['_header-top','_header-search','_header-account','_header-cart','_header-menu-toggle'].map(n=>sheet(`blocks/${n}.liquid`)).join('');
for(const width of [375,1440])for(const size of [16,28])test(`action padding and square icons ${width}px / ${size}px`,async()=>{
 const page=await browser.newPage({viewport:{width,height:800}});
 await page.setContent(`<style>${css}</style><style>:root{--button-height:44px;--button-height-mobile:40px}.header-top{--header-icon-size:${size}px;--header-actions-gap:24px;--header-actions-gap-mobile:8px}</style><div class="header-top" data-layout-ready="true"><div class="header__column header__column--right">${['search','cart'].map(n=>`<${n==='cart'?'a':'button'} class="header-${n}"><span class="icon"><span class="header-figma-icon"><svg width="16" height="18" viewBox="0 0 16 18"></svg></span></span></${n==='cart'?'a':'button'}>`).join('')}</div></div>`);
 const result=await page.evaluate(()=>{const blocks=[...document.querySelectorAll('.header__column > :is(button,a)')],icons=blocks.map(e=>e.querySelector('.icon').getBoundingClientRect());return{gap:getComputedStyle(document.querySelector('.header__column')).columnGap,padding:blocks.map(e=>getComputedStyle(e).paddingInlineStart),sizes:icons.map(r=>[r.width,r.height]),svg:blocks.map(e=>{const r=e.querySelector('svg').getBoundingClientRect();return[r.width,r.height]}),space:icons[1].left-icons[0].right};});
 const gap=width<992?8:24;assert.equal(result.gap,'0px');assert.deepEqual(result.padding,[`${gap/2}px`,`${gap/2}px`]);assert.deepEqual(result.sizes,[[size,size],[size,size]]);assert.deepEqual(result.svg,[[size,size],[size,size]]);assert.equal(result.space,gap);await page.close();
});
