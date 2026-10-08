const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
const {loadLiquid,stripShopifyMetadata}=require('./helpers/liquid-engine.cjs');const Liquid=loadLiquid();const engine=new Liquid();
const read=name=>fs.readFileSync(path.join(__dirname,'..',name),'utf8');
const schema=name=>JSON.parse(read(name).match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
const source=stripShopifyMetadata(read('blocks/marquee.liquid')).replace(/{% javascript %}[\s\S]*?{% endjavascript %}/,'').replace(/{% content_for 'blocks' %}/,'{{ children }}');
const render=settings=>engine.parseAndRender(source,{block:{settings,shopify_attributes:'data-shopify-editor-block="parent"'},children:'<div>One Heading</div>'});
test('reference toggles render on the parent, independent from its only Heading',async()=>{
 const html=await render({show_top_divider:true,show_bottom_divider:true,show_blurred_edges:true,enable_parallax:false,alignment:'bottom',animation_speed:.6,width:'custom',custom_width:50,color_type:'scheme',color_scheme:'scheme-2'});
 assert.match(html,/data-marquee-top-divider/);assert.match(html,/data-marquee-bottom-divider/);assert.match(html,/data-marquee-blurred-edges/);assert.match(html,/data-marquee-parallax="false"/);assert.match(html,/--marquee-align: flex-end/);assert.match(html,/--marquee-width: 50%/);assert.match(html,/color-scheme-2/);assert.equal((html.match(/One Heading/g)||[]).length,1);assert.doesNotMatch(html,/marquee-item/);
 const defaults=await render({});assert.doesNotMatch(defaults,/data-marquee-top-divider|data-marquee-bottom-divider|data-marquee-blurred-edges/);assert.match(defaults,/data-marquee-parallax="true"/);
});
test('zero gap/mobile padding remain literal zero and invalid speed has a finite fallback',async()=>{
 const html=await render({gap_desktop:0,gap_mobile:0,padding_top:10,padding_bottom:10,customize_mobile_padding:true,padding_top_mobile:0,padding_bottom_mobile:0,animation_speed:-5});
 assert.match(html,/--marquee-gap: 0px/);assert.match(html,/--marquee-gap-mobile: 0px/);assert.match(html,/--marquee-padding-top-mobile: 0px/);assert.match(html,/data-marquee-speed="0.6"/);assert.doesNotMatch(html,/NaN|Infinity/);
});
test('schema exposes observed reference speed, gap, width and vertical padding controls',()=>{
 const defs=new Map(schema('blocks/marquee.liquid').settings.map(s=>[s.id,s]));const speed=defs.get('animation_speed');assert.equal(speed.min,.1);assert.equal(speed.max,2);assert.equal(speed.step,.1);assert.equal(speed.unit,'x');assert.equal(defs.get('gap_desktop').max,200);assert.equal(defs.get('gap_desktop').step,2);for(const id of ['padding_left','padding_right','background_color'])assert.equal(defs.has(id),false);for(const id of ['show_top_divider','show_bottom_divider','show_blurred_edges','enable_parallax','alignment','width','custom_width','color_type','color_scheme'])assert.ok(defs.has(id));
});
test('rebuilt section preset and saved compositions use the parent divider toggle and valid settings',()=>{
 const parent=schema('blocks/marquee.liquid');const allowed=new Map(parent.settings.filter(s=>s.id).map(s=>[s.id,s]));
 function walk(v){if(!v||typeof v!=='object')return;if(v.type==='marquee'&&v.settings){for(const [key,value]of Object.entries(v.settings)){const def=allowed.get(key);assert.ok(def,`removed option ${key}`);if(def.options)assert.ok(def.options.some(o=>o.value===value),key);if(def.type==='range')assert.ok(value>=def.min&&value<=def.max,key);}}Object.values(v).forEach(walk);}
 const section=schema('sections/text-marquee-custom.liquid');assert.ok(!section.blocks.some(b=>b.type==='divider'));for(const pre of section.presets){assert.ok(!pre.blocks.some(b=>b.type==='divider'));assert.ok(pre.blocks.find(b=>b.type==='marquee').settings.show_top_divider);walk(pre);}
 const home=JSON.parse(read('templates/index.json').replace(/\/\*[\s\S]*?\*\//g,''));for(const sec of Object.values(home.sections)){if(sec.type!=='text-marquee-custom')continue;assert.ok(!Object.values(sec.blocks).some(b=>b.type==='divider'));walk(sec);}
 for(const file of fs.readdirSync(path.join(__dirname,'../sections')).filter(f=>f.endsWith('.liquid'))){const s=schema('sections/'+file);for(const b of s.blocks||[])if(b.type==='marquee')assert.equal(b.settings,undefined);walk(s.presets);}
});
