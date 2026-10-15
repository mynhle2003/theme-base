const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
let browser;
before(async()=>{browser=await chromium.launch({channel:'chrome',headless:true});});
after(async()=>{await browser?.close();});
const critical=fs.readFileSync('assets/critical.css','utf8');
const source=fs.readFileSync('sections/search-overlay.liquid','utf8');
const styles=source.match(/{% stylesheet %}([\s\S]*?){% endstylesheet %}/)[1];
for(const width of [375,878,1440]) for(const style of ['solid','outline']) test(`Search controls inherit ${style} settings at ${width}px`,async()=>{
 const page=await browser.newPage({viewport:{width,height:800}});
 await page.setContent(`<style>${critical}${styles}</style><style>:root{--input-height:62px;--input-height-mobile:54px;--input-radius:19px;--form-input-font-size:21px;--input-border-width-outline:3px;--input-border-color:rgb(10,20,30);--input-background-color-solid:rgb(40,50,60);--input-text-color:rgb(70,80,90);--button-height:58px;--button-height-mobile:50px;--button-radius:17px;--button-padding-inline-desktop:22px;--button-padding-inline-mobile:18px;--button-font-size:16px;--button-font-size-mobile:15px;--button-primary-background:rgb(100,110,120);--button-primary-text:white;--button-primary-border-width:0px;--overlay-close-size:32px} .search-overlay__container{padding:16px}.overlay-close{width:32px;height:32px}</style><div class="input-style--${style}"><div class="search-overlay__container"><form class="search-overlay__form"><input class="search-overlay__input form__control"><button class="btn btn--primary search-overlay__submit">Search</button><button class="overlay-close search-overlay__close">X</button></form></div></div>`);
 const value=await page.evaluate(()=>{const i=document.querySelector('input'),b=document.querySelector('.search-overlay__submit'),c=document.querySelector('.search-overlay__close'),s=getComputedStyle(i),t=getComputedStyle(b);return{input:i.getBoundingClientRect().toJSON(),button:b.getBoundingClientRect().toJSON(),close:c.getBoundingClientRect().toJSON(),radius:s.borderRadius,font:s.fontSize,border:s.borderTopWidth,background:s.backgroundColor,buttonRadius:t.borderRadius,buttonBackground:t.backgroundColor,overflow:document.documentElement.scrollWidth>innerWidth};});
 assert.equal(value.radius,'19px');assert.equal(value.font,'21px');assert.equal(value.border,style==='outline'?'3px':'0px');assert.equal(value.background,style==='outline'?'rgba(0, 0, 0, 0)':'rgb(40, 50, 60)');assert.equal(value.input.height,width<768?54:62);assert.equal(value.buttonRadius,'17px');assert.equal(value.buttonBackground,'rgb(100, 110, 120)');assert.equal(value.button.height,width<768?50:58);assert.ok(value.input.right<=value.button.left);assert.ok(value.button.right<=value.close.left);assert.equal(value.overflow,false);
 await page.close();
});
