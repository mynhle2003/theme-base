(() => {
  if (customElements.get('zoom-foreground-image')) return;

  class ZoomForegroundImage extends HTMLElement {
    connectedCallback() {
      queueMicrotask(() => {
        if (this.isConnected && !this.controller) this.setup();
      });
    }

    setup() {
      this.images = [...this.querySelectorAll('[data-zoom-image]')];
      if (!this.images.length) return;
      this.foreground = this;
      this.controller = new AbortController();
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.amount = Math.min(30, Math.max(0, Number(this.dataset.zoomAmount) || 0)) / 100;
      this.progress = 0;
      this.visible = true;
      this.selected = false;
      this.frame = 0;
      this.lastTime = 0;
      const options = { signal: this.controller.signal };

      // Native page scrolling drives every input: wheel, touch, keys and scrollbar.
      window.addEventListener('scroll', () => this.schedule(), { ...options, passive: true });
      window.addEventListener('resize', () => this.schedule(), { ...options, passive: true });
      this.motion.addEventListener('change', () => this.refresh(), options);
      const wrapper = this.closest('.shopify-section');
      ['shopify:section:select', 'shopify:block:select'].forEach(name => {
        document.addEventListener(name, event => {
          if (!wrapper?.contains(event.target)) return;
          this.selected = true;
          this.refresh();
        }, options);
      });
      ['shopify:section:deselect', 'shopify:block:deselect'].forEach(name => {
        document.addEventListener(name, event => {
          if (!wrapper?.contains(event.target)) return;
          this.selected = false;
          this.schedule();
        }, options);
      });
      this.resizeObserver = new ResizeObserver(() => this.schedule());
      this.resizeObserver.observe(this);
      this.observer = new IntersectionObserver(([entry]) => {
        this.visible = entry.isIntersecting;
        if (this.visible) this.schedule();
        else this.stop();
      }, { rootMargin: '100px 0px' });
      this.observer.observe(this);
      this.refresh();
    }

    target() {
      if (this.motion.matches || this.selected || this.dataset.zoomEnabled !== 'true') return 1;
      const bounds = this.foreground.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      // Start only when the image enters the bottom of the viewport. Finish
      // when the image center reaches viewport center; reverse on scrolling up.
      return Math.min(1, Math.max(0, (viewport - bounds.top) / ((viewport + bounds.height) / 2)));
    }

    paint() {
      const eased = this.progress * this.progress * (3 - 2 * this.progress);
      this.images.forEach(image => {
        image.style.setProperty('--zoom-image-scale', (1 + this.amount * (1 - eased)).toFixed(5));
        image.style.setProperty('--zoom-image-clip', (50 * (1 - eased)).toFixed(5) + '%');
      });
    }

    refresh() {
      this.stop();
      this.progress = this.target();
      this.paint();
    }

    schedule() {
      if (!this.visible || this.frame || !this.controller) return;
      this.frame = requestAnimationFrame(time => this.tick(time));
    }

    tick(time) {
      this.frame = 0;
      const target = this.target();
      const elapsed = this.lastTime ? Math.min(64, time - this.lastTime) : 16.67;
      this.lastTime = time;
      // Time-based damping behaves consistently on 60 Hz and 120 Hz displays.
      this.progress += (target - this.progress) * (1 - Math.exp(-elapsed / 95));
      if (Math.abs(target - this.progress) < 0.0001) {
        this.progress = target;
        this.lastTime = 0;
      } else this.schedule();
      this.paint();
    }

    stop() {
      cancelAnimationFrame(this.frame);
      this.frame = 0;
      this.lastTime = 0;
    }

    disconnectedCallback() {
      this.stop();
      this.controller?.abort();
      this.resizeObserver?.disconnect();
      this.observer?.disconnect();
      this.images?.forEach(image => {
        image.style.removeProperty('--zoom-image-scale');
        image.style.removeProperty('--zoom-image-clip');
      });
      this.controller = null;
    }
  }

  customElements.define('zoom-foreground-image', ZoomForegroundImage);
})();
