const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadLiquid, stripShopifyMetadata } = require('./helpers/liquid-engine.cjs');
const pairs = [[1,1],[4,5],[5,4],[6,7],[7,6],[5,7],[7,5],[2,3],[3,2],[4,3],[3,4],[2,1],[1,2],[16,9],[9,16],[12,5],[5,12],[48,17],[17,48],[5,8],[8,5]];
const keys = pairs.map(([w,h]) => `ratio_${w}_${h}`);
const engine = new (loadLiquid())({ strictFilters:false, fs:{
  resolve:(_,file)=>path.resolve('snippets',file+'.liquid'), existsSync:fs.existsSync,
  readFileSync:file=>stripShopifyMetadata(fs.readFileSync(file,'utf8'))
}});
const files = ['blocks','sections'].flatMap(dir=>fs.readdirSync(dir).filter(f=>f.endsWith('.liquid')).map(f=>`${dir}/${f}`));
const ratioControls = setting => setting.type === 'select' && !setting.id.includes('swatch') && (setting.id.includes('ratio') || setting.options.some(o=>/^ratio_\d/.test(o.value)));
test('every image/media ratio selector includes the complete reciprocal Figma set',()=>{
  let count=0;
  for(const file of [...files,'config/settings_schema.json']) {
    const source=fs.readFileSync(file,'utf8');
    const data=file.endsWith('.json')?JSON.parse(source):JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
    for(const group of Array.isArray(data)?data:[data])for(const setting of group.settings||[]) {
      if(!ratioControls(setting))continue;
      count++;
      const options=setting.options.map(o=>o.value);
      assert.equal(new Set(options).size,options.length,`${file}/${setting.id} duplicate values`);
      for(const key of keys)assert.ok(options.includes(key),`${file}/${setting.id} missing ${key}`);
    }
  }
  assert.ok(count>=30);
});
const runtimeFiles = ['snippets/image-ratio-value.liquid','snippets/_overlay-media-ratio.liquid','snippets/collection-card-render.liquid','snippets/css-variables.liquid','blocks/video.liquid','blocks/blog-card.liquid','blocks/first-card.liquid','blocks/product-card-compact.liquid','blocks/image-comparison.liquid','blocks/carousel.liquid','blocks/product-callout-gallery.liquid','blocks/_product-media.liquid','blocks/press-item.liquid','sections/image-text-stacked-bands.liquid'];
for(const file of runtimeFiles)test(`${file} resolves all ratios through actual Liquid branches`,()=>{
  const source=stripShopifyMetadata(fs.readFileSync(file,'utf8'));
  const cases=[...source.matchAll(/case ([^\n]+)\n([\s\S]*?)\n\s*endcase/g)].filter(m=>m[2].includes("when 'ratio_1_1'"));
  assert.ok(cases.length,`${file} missing renderer`);
  for(const match of cases)for(const [w,h]of pairs){
    const setting=`ratio_${w}_${h}`;
    const outputVariable=match[2].match(/when 'ratio_1_1'\n\s*assign (\w+)/)[1];
    const context={};
    const parts=match[1].trim().split('.');let target=context;
    for(const part of parts.slice(0,-1))target=target[part]={};target[parts.at(-1)]=setting;
    const rendered=engine.parseAndRenderSync(`{% liquid\n${match[0]}\n%}{{ ${outputVariable} }}`,context).trim();
    const terms=rendered.split('/').map(Number);const ratio=terms.length===2?terms[0]/terms[1]:terms[0];
    assert.ok(Math.abs(ratio-w/h)<1e-9,`${file}/${setting}: ${rendered}`);
  }
});
test('shared resolver preserves custom and invalid/Auto fallbacks',()=>{
  const src=stripShopifyMetadata(fs.readFileSync('snippets/image-ratio-value.liquid','utf8'));
  assert.equal(engine.parseAndRenderSync(src,{setting:'custom',custom_width:6,custom_height:7}).trim(),String(6/7));
  for(const setting of ['auto','invalid'])assert.equal(engine.parseAndRenderSync(src,{setting,fallback_ratio:'auto'}).trim(),'auto');
});
