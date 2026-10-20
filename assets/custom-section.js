(() => {
  if (customElements.get('custom-section-layout')) return;
  class CustomSectionLayout extends HTMLElement {
    connectedCallback() {
      this.disconnectedCallback();
      this.media = this.querySelector('.custom-section__media');
      this.effect = this.dataset.parallax;
      if (!this.media || !['vertical', 'horizontal', 'zoom'].includes(this.effect)) return;
      this.motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.controller = new AbortController();
      const options = { passive: true, signal: this.controller.signal };
      this.schedule = () => {
        if (this.frame) return;
        this.frame = requestAnimationFrame(() => {
          this.frame = 0;
          this.update();
        });
      };
      window.addEventListener('scroll', this.schedule, options);
      window.addEventListener('resize', this.schedule, options);
      this.motion.addEventListener('change', this.schedule, { signal: this.controller.signal });
      this.schedule();
    }
    update() {
      if (this.motion.matches) {
        this.media.style.removeProperty('transform');
        return;
      }
      const bounds = this.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - bounds.top - bounds.height / 2) / ((window.innerHeight + bounds.height) / 2)));
      if (this.effect === 'zoom') {
        this.media.style.transform = `scale(${1.04 + Math.abs(progress) * 0.12})`;
      } else {
        const axis = this.effect === 'vertical' ? 'Y' : 'X';
        const size = this.effect === 'vertical' ? bounds.height : bounds.width;
        const distance = Math.min(80, size * 0.1);
        this.media.style.transform = `translate${axis}(${progress * distance}px) scale(${1 + 2 * distance / Math.max(size, 1)})`;
      }
    }
    disconnectedCallback() {
      this.controller?.abort();
      if (this.frame) cancelAnimationFrame(this.frame);
      this.frame = 0;
      this.media?.style.removeProperty('transform');
    }
  }
  customElements.define('custom-section-layout', CustomSectionLayout);
})();
