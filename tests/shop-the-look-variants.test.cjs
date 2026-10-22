const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const context = vm.createContext({ HTMLElement: class {}, customElements: { get: () => true } });
vm.runInContext(fs.readFileSync('assets/shop-the-look-variants.js','utf8').replace('export const findLookVariant', 'this.findLookVariant'), context);
const variants = [{ id: 1, options: ['Black','M'], available: true }, { id: 2, options: ['Black','S'], available: false }];
test('selects the exact option combination, including unavailable variants without substitution', () => {
 assert.equal(context.findLookVariant(variants,['Black','M']).id,1);
 assert.equal(context.findLookVariant(variants,['Black','S']).id,2);
 assert.equal(context.findLookVariant(variants,['Gray','M']),null);
});
test('Add all reads dropdown selection first and preserves an invalid combination as empty', () => {
 const source = fs.readFileSync('assets/shop-the-look-cart.js','utf8').replace(/^import .*;\n/,'').replace('export function','function');
 const classes = new Map();
 const ctx = vm.createContext({ HTMLElement: class {}, customElements: {get: (key)=>classes.get(key),define:(key,value)=>classes.set(key,value)} });
 vm.runInContext(source,ctx);
 const Controller=classes.get('shop-the-look-cart'); const action=new Controller();
 let selected='2';
 const card={hasAttribute:()=>true,dataset:{shopTheLookBlockId:'a',lookVariantId:'1',lookProductTitle:'Bra'},classList:{contains:()=>false},querySelector:()=>({dataset:{selectedVariantId:'1'}})};
 Object.defineProperty(card.dataset,'lookSelectedVariantId',{get:()=>selected});
 action.productsRoot=()=>({querySelectorAll:()=>[card]});
 assert.equal(action.selections()[0].variantId,'2');
 selected='';assert.equal(action.selections()[0].variantId,'');
});

test('button radio changes and dropdown changes resolve the same variant and synchronize both views', () => {
 const classes=new Map();
 const ctx=vm.createContext({HTMLElement:class{},AbortController,customElements:{get:(k)=>classes.get(k),define:(k,v)=>classes.set(k,v)}});
 vm.runInContext(fs.readFileSync('assets/shop-the-look-variants.js','utf8').replace('export const findLookVariant','const findLookVariant'),ctx);
 const Picker=classes.get('shop-the-look-variants');const picker=new Picker();
 const control=(value,index)=>({value,dataset:{optionIndex:String(index)},listeners:{},addEventListener(type,fn){this.listeners[type]=fn;},closest:()=>({querySelector:()=>null})});
 const selects=[control('Black',0),control('M',1)];
 const radios=[control('Black',0),control('M',1),control('S',1)];
 const error={hidden:true,textContent:''};
 const card={dataset:{},querySelector:(selector)=>selector==='[data-look-variants]'?{textContent:JSON.stringify(variants)}:null};
 picker.dataset={unavailable:'Unavailable'};
 picker.closest=(selector)=>selector==='[data-shop-the-look-products]'?{dataset:{lookVariantsEnabled:'true'}}:card;
 picker.querySelectorAll=(selector)=>selector==='[data-look-option]'?selects:selector==='[data-look-radio]'?radios:[];
 picker.querySelector=()=>error;
 picker.connectedCallback();
 assert.equal(card.dataset.lookSelectedVariantId,'1');
 radios[2].checked=true;radios[2].listeners.change();
 assert.equal(selects[1].value,'S');assert.equal(card.dataset.lookSelectedVariantId,'2');assert.equal(error.hidden,true);assert.equal(error.textContent,'');
 selects[1].value='M';selects[1].listeners.change();
 assert.equal(card.dataset.lookSelectedVariantId,'1');assert.equal(radios[1].checked,true);assert.equal(radios[2].checked,false);
 picker.disconnectedCallback();assert.equal(picker.controller,null);
});
