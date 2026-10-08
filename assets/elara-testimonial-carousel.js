/** Position the existing accessible Swiper controls after the active quote. */
class ElaraTestimonialCarousel extends HTMLElement {
  connectedCallback() {
    if (!this.classList.contains('testimonial-carousel--malandra') || this.observer) return;
    this.schedule = () => {
      cancelAnimationFrame(this.frame);
      this.frame = requestAnimationFrame(() => this.positionControls());
    };
    this.observer = new ResizeObserver(this.schedule);
    this.observer.observe(this);
    this.querySelectorAll('.testimonial-item > .group').forEach((group) => this.observer.observe(group));
    this.mutations = new MutationObserver(this.schedule);
    this.mutations.observe(this, { subtree: true, attributes: true, attributeFilter: ['class'], childList: true });
    this.schedule();
    document.fonts.ready.then(() => { if (this.isConnected) this.schedule(); });
  }

  positionControls() {
    if (!this.isConnected || !matchMedia('(min-width: 768px)').matches) return;
    this.querySelectorAll('.carousel-block__container').forEach((container) => {
      const slide = container.querySelector('.testimonial-item.swiper-slide-active') || container.querySelector('.testimonial-item');
      const group = slide?.querySelector(':scope > .group');
      const last = group?.lastElementChild;
      if (!last) return;
      const origin = container.getBoundingClientRect();
      const padding = parseFloat(getComputedStyle(group).paddingLeft) || 0;
      // Slides translate horizontally; use their local offset for a stable control column.
      container.style.setProperty('--testimonial-controls-width', `${group.getBoundingClientRect().width - padding - (parseFloat(getComputedStyle(group).paddingRight) || 0)}px`);
      container.style.setProperty('--testimonial-controls-left', `${group.offsetLeft + padding}px`);
      container.style.setProperty('--testimonial-controls-top', `${last.getBoundingClientRect().bottom - origin.top + 48}px`);
    });
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.frame);
    this.observer?.disconnect();
    this.mutations?.disconnect();
    this.observer = null;
  }
}

if (!customElements.get('elara-testimonial-carousel')) {
  customElements.define('elara-testimonial-carousel', ElaraTestimonialCarousel);
}
