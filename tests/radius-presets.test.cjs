const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {loadLiquid,stripShopifyMetadata}=require('./helpers/liquid-engine.cjs');
const values=[2,4,6,8,12,16,24,32];
function engine(){const e=new (loadLiquid())({fs:{resolve:(_r,f)=>path.resolve('snippets',f+'.liquid'),exists:async()=>true,readFile:async f=>stripShopifyMetadata(fs.readFileSync(f,'utf8'))}});e.registerFilter('placeholder_svg_tag',()=>'<svg></svg>');return e;}
test('pixel presets render through image, collection and shared media kernels',async()=>{
for(const [file,property] of [['blocks/image.liquid','--image-block-radius'],['blocks/collection-card.liquid','--collection-card-radius'],['snippets/media-card.liquid','--image-card-radius']]){
const src=stripShopifyMetadata(fs.readFileSync(file,'utf8')).replace(/{%\s*content_for[^%]*%}/g,'');
for(const v of values){const block={settings:{corner_radius:'radius_'+v}};const html=await engine().parseAndRender(src,{block,media_card_block:block,section:{settings:{}}});if(file==='snippets/media-card.liquid'){assert.ok(html.includes('image-card--radius-radius_'+v));assert.ok(fs.readFileSync(file,'utf8').includes('.image-card--radius-radius_'+v+' { --image-card-radius: var(--radius-'+v+'); }'));}else assert.match(html,new RegExp(property+':\\s*var\\(--radius-'+v+'\\)'),file+':'+v);}
}
});
test('thumbnail presets respect square and full modes',async()=>{const src=stripShopifyMetadata(fs.readFileSync('blocks/collection-thumbnail.liquid','utf8')).replace(/{%\s*content_for[^%]*%}/g,'');for(const v of values){const html=await engine().parseAndRender(src,{block:{settings:{}},section:{settings:{image_corner_radius:'radius_'+v}}});assert.ok(html.includes('--collection-thumbnail-radius:var(--radius-'+v+')'));}});
test('global canonical presets bind to the shared semantic radius tokens', async () => {
  const schema = JSON.parse(fs.readFileSync('config/settings_schema.json', 'utf8'));
  const controls = schema.flatMap(g => g.settings || []).filter(s => s.type === 'select' && s.id.includes('radius') && s.options?.some(o => o.value === 'rounded'));
  const source = ['snippets/css-variables.liquid', 'snippets/css-variables-controls.liquid'].map(file => stripShopifyMetadata(fs.readFileSync(file, 'utf8'))).join('\n').replace(/{%\s*style\s*%}|{%\s*endstyle\s*%}/g, '');
  for (const value of ['square', 'rounded']) {
    const settings = Object.fromEntries(controls.map(s => [s.id, value]));
    const html = await engine().parseAndRender(source, { settings });
    for (const property of ['button-radius', 'input-radius', 'media-radius', 'card-radius', 'drawer-radius', 'bottom-sheet-radius', 'badge-radius', 'navigation-radius', 'variant-radius', 'swatch-radius', 'tag-radius']) {
      assert.match(html, new RegExp('--' + property + ':\\s*var\\(--radius-' + value + '\\)'), property);
    }
  }
});
