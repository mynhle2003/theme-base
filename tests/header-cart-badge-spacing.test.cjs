const {test,before,after}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require('playwright');
let browser;
before(async()=>{browser=await chromium.launch({channel:'chrome',headless:true});});
after(async()=>{await browser?.close();});
const css=fs.readFileSync('assets/critical.css','utf8')+fs.readFileSync('blocks/_header-cart.liquid','utf8').match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
for(const dir of ['ltr','rtl'])test(`Cart badge remains attached to icon with changing action padding (${dir})`,async()=>{
 const page=await browser.newPage({viewport:{width:375,height:800}});
 for(const gap of [0,8,32]){
  await page.setContent(`<style>${css}</style><style>:root{--button-height-mobile:40px}.header-top{--header-actions-gap-mobile:${gap}px}</style><div class="header-top" data-layout-ready="true" dir="${dir}"><div class="header__column"><a class="header-cart header-cart--type-icon"><span class="icon"><span class="header-cart__count">12</span></span></a></div></div>`);
  const result=await page.evaluate(()=>{const icon=document.querySelector('.icon').getBoundingClientRect(),badge=document.querySelector('.header-cart__count').getBoundingClientRect(),cart=document.querySelector('.header-cart');return{iconWidth:icon.width,deltaX:badge.x+badge.width/2-(document.querySelector('[dir]').dir==='rtl'?icon.left:icon.right),deltaY:badge.y+badge.height/2-icon.top,padding:getComputedStyle(cart).paddingInlineStart};});
  assert.equal(result.iconWidth,20);assert.equal(result.deltaX,0);assert.equal(result.deltaY,0);assert.equal(result.padding,`${gap/2}px`);
 }
 await page.close();
});
