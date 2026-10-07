const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const test=require('node:test');
test('custom carousel preview and base fade retain their breakpoint contracts',()=>{
 const code=fs.readFileSync('assets/carousel-block.js','utf8');
 const slug=code.includes('const containedPreview')?'essen-theme':'elara-theme';
 const init=code.slice(code.indexOf('const initialize = (root) => {'),code.indexOf('  const swiper = createSwiperCarousel(viewport, options);'))+' return options; }; initialize(root);';
 const run=(transition,desktopPreview,mobilePreview,count=8)=>{
  const wrapper={children:Array.from({length:count},()=>({classList:{contains:()=>true}}))};
  const viewport={dataset:{swiperNextSlidePreview:String(desktopPreview),swiperNextSlidePreviewMobile:String(mobilePreview)},querySelector:s=>s==='.swiper-wrapper'?wrapper:null};
  const root={dataset:{transition,swiperColumnsDesktop:'4',swiperColumnsMobile:'1',swiperGapDesktop:'16',swiperGapMobile:'12',carouselContainedPreview:String(slug==='essen-theme'),carouselPreviewDesktop:String(desktopPreview),carouselPreviewMobile:String(mobilePreview)},querySelector:()=>viewport};
  return vm.runInNewContext(init,{root,instances:new WeakMap(),desktopBreakpoint:768,number:(v,f)=>v===undefined?f:Number(v),EffectFade:{},Pagination:{},prefersReducedMotion:()=>false,createManualLoop:()=>null,getMobilePreviewSlidesPerView:(v,n)=>v.dataset.swiperNextSlidePreviewMobile==='true'&&n===1?1.2:n});
 };
 const fade=run('fade',false,false);assert.equal(fade.effect,'fade');assert.equal(fade.slidesPerView,1);assert.equal(fade.spaceBetween,0);assert.equal(fade.breakpoints[768].slidesPerView,1);assert.equal(fade.breakpoints[768].spaceBetween,0);
 const preview=run('fade',false,true);assert.equal(preview.effect,'slide');assert.equal(preview.slidesPerView,slug==='essen-theme'?1+2/7:1.2);
 const slide=run('slide',true,true);assert.equal(slide.breakpoints[768].slidesPerView,slug==='essen-theme'?4+2/7:4);
 if(slug==='essen-theme'){const short=run('slide',true,true,1);assert.equal(short.slidesPerView,1);}
});
