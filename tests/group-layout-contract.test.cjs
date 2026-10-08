const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const engine = new (loadLiquid())();
const flow = stripShopifyMetadata(fs.readFileSync('snippets/layout-flow-group-style.liquid','utf8'));
const surfaces = [['blocks/group.liquid','group','block'],['sections/image-text-split-layout.liquid','section','section'],['sections/text-marquee-custom.liquid','section','section']];
for(const [file,prefix,owner] of surfaces) {
 const source = fs.readFileSync(file,'utf8');
 const liquid = source.slice(source.indexOf('{% liquid'), source.indexOf('{% capture'));
 const schema = JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
 test(`${file}: direction, height, position, alignment and mobile visibility matrix`,()=>{
  for(const direction of ['horizontal','vertical'])for(const height of ['fit','fill'])for(const position of ['top','center','bottom','space-between'])for(const alignment of ['left','center','right','space-between'])for(const stack of [false,true]) {
   const settings={direction,height,position,position_horizontal:position,horizontal_alignment:alignment,alignment,customize_mobile_alignment:stack,alignment_mobile:'right'};
   const context={[owner]:{settings}};
   const values=engine.parseAndRenderSync(liquid+`{{ ${prefix}_position_name }}|{{ ${prefix}_alignment }}|{{ ${prefix}_vertical_on_mobile }}|{{ ${prefix}_flow_mobile_alignment }}`,context).trim().split('|');
   assert.equal(values[0],direction==='horizontal'?position:height==='fill'?position:'top');
   assert.equal(values[1],{left:'start',center:'center',right:'end','space-between':'start'}[alignment]);
   assert.equal(values[2],String(direction==='horizontal'&&stack));
   assert.equal(values[3],direction==='vertical'||stack?'end':'');
   for(const [id,visible] of [['position',direction==='vertical'&&height==='fill'],['position_horizontal',direction==='horizontal'],['horizontal_alignment',direction==='horizontal'],['alignment',direction==='vertical'],['alignment_mobile',direction==='vertical'||stack]]) {
    const setting=schema.settings.find(x=>x.id===id);
    assert.equal(engine.parseAndRenderSync(setting.visible_if,context),String(visible),`${id}: ${JSON.stringify(settings)}`);
   }
  }
 });
}
test('stacked mobile keeps horizontal alignment on the new cross axis and resets main-axis placement',()=>{
 for(const horizontal_alignment of ['flex-start','center','flex-end','space-between'])for(const mobile_alignment of ['start','center','end']){
  const css=engine.parseAndRenderSync(flow,{direction:'horizontal',position:'bottom',alignment:'center',horizontal_alignment,mobile_vertical:true,mobile_alignment,mobile_justify:'center',gap:40,gap_mobile:24});
  assert.match(css,/--layout-flow-direction-mobile: column/);
  assert.match(css,/--layout-flow-justify-content-mobile: flex-start/);
  assert.match(css,new RegExp('--layout-flow-align-items-mobile: '+{start:'flex-start',center:'center',end:'flex-end'}[mobile_alignment]));
 }
});
test('vertical Position distributes free height independently of cross-axis Alignment',()=>{
 for(const [position,justify] of [['top',null],['center','center'],['bottom','flex-end'],['space-between','space-between']]){
  const css=engine.parseAndRenderSync(flow,{direction:'vertical',position,alignment:'end',mobile_alignment:'center'});
  assert.match(css,/--layout-flow-align-items: flex-end/);
  assert.match(css,/--layout-flow-align-items-mobile: center/);
  assert.match(css,/--layout-flow-justify-content-mobile: flex-start/);
  if(justify)assert.match(css,new RegExp('--layout-flow-justify-content: '+justify));
  else assert.doesNotMatch(css,/--layout-flow-justify-content:/);
 }
});
test('split preset and saved homepage use the inspected reference composition',()=>{
 const source=fs.readFileSync('sections/image-text-split-layout.liquid','utf8');
 const preset=JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]).presets[0];
 const saved=fs.readFileSync('templates/index.json','utf8');
 const instance=JSON.parse(saved.slice(saved.indexOf('{'))).sections.image_text_opals;
 for(const section of [preset,instance]) {
  assert.equal(section.settings.section_width,'full_width_no_padding');
  assert.equal(section.settings.position_horizontal,'top');
  assert.equal(section.settings.gap_desktop,0);assert.equal(section.settings.gap_mobile,30);
  const [left,right]=Array.isArray(section.blocks)?section.blocks:Object.values(section.blocks);
  assert.equal(left.settings.direction,'horizontal');assert.equal(left.settings.height,'fill');
  assert.equal(right.settings.direction,'vertical');assert.equal(right.settings.height,'fit');
  assert.equal(right.settings.alignment,'center');
  for(const group of [left,right]) {
   assert.equal(group.settings.width,'fill');assert.equal(group.settings.width_mobile,'fill');
   assert.equal(group.settings.gap_desktop,20);assert.equal(group.settings.gap_mobile,20);
  }
  assert.equal(right.settings.customize_mobile_padding,false);
  for(const edge of ['top','bottom','left','right'])assert.equal(right.settings['padding_'+edge],64);
  const children=Array.isArray(right.blocks)?right.blocks:Object.values(right.blocks);
  assert.deepEqual(children.map(x=>x.type),['heading','image','button']);
  assert.equal(children[1].settings.image_ratio_desktop,'original');
  assert.equal(children[1].settings.width_desktop,'fill');
 }
});
test('Image Original/Fill height are independent across breakpoints; legacy Auto stays natural',()=>{
 const path=require('node:path');
 const imageEngine=new (loadLiquid())({fs:{resolve:(_,file)=>path.resolve('snippets',file+'.liquid'),existsSync:fs.existsSync,readFileSync:f=>stripShopifyMetadata(fs.readFileSync(f,'utf8'))}});
 const source=fs.readFileSync('blocks/image.liquid','utf8');
 const prefix=source.slice(source.indexOf('{% liquid'),source.indexOf('{% capture image_style'));
 const schema=JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
 for(const id of ['image_ratio_desktop','image_ratio_mobile']){
  const setting=schema.settings.find(x=>x.id===id);
  assert.equal(setting.options[0].value,'original');assert.equal(setting.options.at(-1).value,'fill_height');assert.equal(setting.default,'original');assert.ok(!setting.options.some(x=>x.value==='auto'));
 }
 for(const desktop of ['auto','original','fill_height','ratio_4_5','custom'])for(const mobile of ['original','fill_height','ratio_3_2']){
  const settings={image_ratio_desktop:desktop,image_ratio_mobile:mobile,image_ratio_custom_width_desktop:4,image_ratio_custom_height_desktop:5,width_desktop:'fit',width_mobile:'fit',image:{width:600},mobile_image:{width:300}};
  const output=imageEngine.parseAndRenderSync(prefix+'{{ image_ratio_desktop_setting }}|{{ image_ratio_mobile_setting }}|{{ image_width_desktop }}|{{ image_width_mobile }}|{{ image_ratio_desktop }}',{block:{settings}}).trim().split('|');
  assert.equal(output[0],desktop==='auto'?'original':desktop);assert.equal(output[1],mobile);
  assert.equal(output[2],desktop==='fill_height'?'600px':'fit-content');assert.equal(output[3],mobile==='fill_height'?'300px':'fit-content');
  assert.equal(output[4],desktop==='ratio_4_5'?'4 / 5':desktop==='custom'?'0.8':'auto');
 }
});
test('shared Original preserves a caller-provided intrinsic ratio fallback',()=>{
 const src=stripShopifyMetadata(fs.readFileSync('snippets/image-ratio-value.liquid','utf8'));
 assert.equal(engine.parseAndRenderSync(src,{setting:'original',fallback_ratio:'1.5'}).trim(),'1.5');
 assert.equal(engine.parseAndRenderSync(src,{setting:'fill_height',fallback_ratio:'1.5'}).trim(),'auto');
});
test('Group device widths stay independent when desktop Fill switches to mobile Fit/Custom',()=>{
 const source=fs.readFileSync('blocks/group.liquid','utf8');const prefix=source.slice(source.indexOf('{% liquid'),source.indexOf('{% capture group_style'));
 for(const width of ['fit','fill','custom'])for(const width_mobile of ['fit','fill','custom']){
  const cls=engine.parseAndRenderSync(prefix+'{{ group_class }}',{block:{settings:{direction:'horizontal',width,width_mobile}}}).trim();
  assert.ok(cls.split(' ').includes('group--width-'+width));
  assert.ok(cls.split(' ').includes('group--width-mobile-'+width_mobile));
 }
});
