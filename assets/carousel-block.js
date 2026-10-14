import { createCarouselRuntime } from './carousel-runtime.js';

export const getCarouselLayout = ({ root, slideCount, desktopColumns, mobileColumns }) => {
  const contained = root.dataset.carouselContainedPreview === 'true';
  const desktopEnabled = root.dataset.carouselPreviewRequested === 'true' && slideCount > desktopColumns;
  const mobileEnabled = root.dataset.carouselPreviewMobile === 'true' && slideCount > mobileColumns;
  return { contained, desktop: contained && desktopEnabled ? desktopColumns + 2 / 7 : desktopColumns, mobile: mobileEnabled ? (contained ? mobileColumns + 2 / 7 : mobileColumns === 1 ? 1.2 : mobileColumns) : mobileColumns };
};

export const initializeThemeModule = createCarouselRuntime({
  rootSelector: '[data-carousel-block]',
  resolveLayout: getCarouselLayout,
  slideSelector: '.carousel-slide, .press-item, .product-callout',
  onInitialize(root, swiper) {
    const viewport = root.querySelector('[data-swiper-carousel]');
    const syncPreview = () => {
      if (swiper.destroyed || !viewport) return;
      const count = swiper.slides.filter((slide) => !slide.classList.contains('swiper-slide-duplicate') && !slide.classList.contains('swiper-slide-clone')).length;
      const contained = root.dataset.carouselContainedPreview === 'true';
      const desktop = Number(root.dataset.swiperColumnsDesktop);
      const mobile = Number(root.dataset.swiperColumnsMobile);
      viewport.dataset.swiperNextSlidePreview = String(!contained && root.dataset.carouselPreviewRequested === 'true' && count > desktop);
      viewport.dataset.swiperNextSlidePreviewMobile = 'false';
    };
    syncPreview();
    swiper.on('breakpoint resize update', syncPreview);
    return () => swiper.off('breakpoint resize update', syncPreview);
  },
});
