const collectionMarqueeHoverRequests = new WeakMap();

class CollectionMarquee extends HTMLElement {
  connectedCallback() {
    if (this.abort) return;
    this.abort = new AbortController();
    this.startFrame = requestAnimationFrame(() => this.initialize());
  }

  initialize() {
    this.viewport = this.querySelector('.collection-marquee__viewport');
    this.track = this.querySelector('.collection-marquee__track');
    this.source = this.querySelector('[data-cm-source]');
    this.sourceTitle = this.source?.querySelector('[data-cm-title]');
    if (!this.viewport || !this.track || !this.sourceTitle) return;
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    this.phase = 0;
    this.velocity = 0;
    this.state = 'rest';
    this.active = false;
    this.composition = this.closest('.collection-marquees') || this.parentElement;
    const options = { signal: this.abort.signal };
    this.sourceTitle.addEventListener('pointerenter', () => {
      if (!this.pointer.matches) return;
      this.queueActivation();
    }, options);
    this.addEventListener('focusin', () => this.updateMotion(), options);
    this.addEventListener('focusout', () => queueMicrotask(() => {
      if (this.isConnected) this.updateMotion();
    }), options);
    this.motion.addEventListener('change', () => this.measure(true), options);
    this.pointer.addEventListener('change', () => this.measure(true), options);
    document.addEventListener('visibilitychange', () => this.updateMotion(), options);
    document.addEventListener('shopify:block:select', event => {
      if (!this.contains(event.target)) return;
      this.setAttribute('data-editor-selected', '');
      this.updateMotion();
    }, options);
    document.addEventListener('shopify:block:deselect', event => {
      if (!this.contains(event.target)) return;
      this.removeAttribute('data-editor-selected');
      this.updateMotion();
    }, options);
    this.observer = new ResizeObserver(() => this.scheduleMeasure());
    this.observer.observe(this.viewport);
    this.observer.observe(this.source);
    this.sourceObserver = new MutationObserver(() => this.scheduleMeasure(true));
    this.sourceObserver.observe(this.source, { childList: true, characterData: true, subtree: true });
    document.fonts?.ready.then(() => {
      if (this.isConnected && this.abort) this.scheduleMeasure();
    });
    this.measure();
    const rows = [...this.composition.querySelectorAll('collection-marquee')];
    if (rows[0] === this && !rows.some(row => row.active) && !collectionMarqueeHoverRequests.has(this.composition)) this.setActive(true);
  }

  scheduleMeasure(force = false) {
    this.forceMeasure ||= force;
    if (this.measureFrame) return;
    this.measureFrame = requestAnimationFrame(() => {
      this.measureFrame = 0;
      const force = this.forceMeasure;
      this.forceMeasure = false;
      this.measure(force);
    });
  }

  measure(force = false) {
    this.setAttribute('data-measuring', '');
    const sourceRect = this.source.getBoundingClientRect();
    const titleRect = this.sourceTitle.getBoundingClientRect();
    const viewportWidth = this.viewport.getBoundingClientRect().width;
    const titleCenter = titleRect.left - sourceRect.left + titleRect.width / 2;
    const distance = sourceRect.width;
    const signature = [viewportWidth, distance, titleCenter].map(value => value.toFixed(3)).join(':');
    if (!distance || !viewportWidth || (!force && signature === this.signature)) {
      this.removeAttribute('data-measuring');
      return;
    }
    this.stop();
    const previousDistance = this.distance;
    if (this.nativeMode && Number.isFinite(this.origin)) this.phase = this.viewport.scrollLeft - this.origin;
    this.track.querySelectorAll('[data-cm-clone]').forEach(node => node.remove());
    this.distance = distance;
    this.signature = signature;
    const copies = Math.ceil(viewportWidth / distance) + 2;
    const clone = () => {
      const copy = this.source.cloneNode(true);
      copy.removeAttribute('data-cm-source');
      copy.setAttribute('data-cm-clone', '');
      copy.setAttribute('aria-hidden', 'true');
      if (!window.Shopify?.designMode) copy.setAttribute('inert', '');
      [copy, ...copy.querySelectorAll('*')].forEach(node => {
        node.removeAttribute('id');
        node.classList.remove('reveal-pending');
        node.removeAttribute('data-component-reveal');
        node.removeAttribute('data-block-animation');
        if (node.matches('a, button, input, select, textarea, [tabindex]')) node.setAttribute('tabindex', '-1');
      });
      return copy;
    };
    for (let i = 0; i < copies; i += 1) {
      this.track.prepend(clone());
      this.track.append(clone());
    }
    this.origin = copies * distance + titleCenter - viewportWidth / 2;
    this.phase = previousDistance ? this.phase / previousDistance * distance : 0;
    this.phase = this.wrap(this.phase);
    this.nativeMode = this.motion.matches;
    if (!this.nativeMode) this.viewport.scrollLeft = 0;
    this.renderPosition();
    this.setAttribute('data-ready', '');
    this.removeAttribute('data-measuring');
    this.updateMotion();
  }

  setActive(active) {
    if (this.active === active) return;
    this.active = active;
    this.toggleAttribute('data-active', active);
    if (active) {
      this.state = 'active';
    } else {
      this.settle();
    }
    this.updateMotion();
  }

  syncVisibility() {
    this.toggleAttribute('data-strip-visible', this.active || !this.pointer.matches || this.nativeMode ||
      this.hasAttribute('data-editor-selected'));
  }

  queueActivation() {
    const pending = collectionMarqueeHoverRequests.get(this.composition);
    clearTimeout(pending?.timer);
    collectionMarqueeHoverRequests.delete(this.composition);
    if (this.active) return;
    const request = { row: this, timer: null };
    request.timer = setTimeout(() => {
      if (collectionMarqueeHoverRequests.get(this.composition) !== request) return;
      collectionMarqueeHoverRequests.delete(this.composition);
      if (!this.isConnected || !this.pointer.matches) return;
      this.composition.querySelectorAll('collection-marquee').forEach(row => {
        if (row !== this && row.active) row.setActive(false);
      });
      this.setActive(true);
    }, 80);
    collectionMarqueeHoverRequests.set(this.composition, request);
  }

  updateMotion() {
    this.syncVisibility();
    if (!this.distance || this.motion.matches || document.hidden ||
      this.matches(':focus-within') || this.hasAttribute('data-editor-selected')) {
      this.stop();
      this.velocity = 0;
      return;
    }
    if (this.pointer.matches && this.state === 'rest') {
      this.settle();
      return;
    }
    if (this.frame) return;
    this.lastTime = null;
    this.frame = requestAnimationFrame(time => this.tick(time));
  }

  wrap(phase) {
    return ((phase % this.distance) + this.distance) % this.distance;
  }

  renderPosition() {
    if (this.nativeMode) {
      this.track.style.transform = '';
      this.viewport.scrollLeft = Math.max(0, this.origin + this.phase);
    } else {
      this.track.style.transform = `translate3d(${-this.origin - this.phase}px, 0, 0)`;
    }
  }

  settle() {
    this.stop();
    this.phase = 0;
    this.velocity = 0;
    this.state = 'rest';
    this.renderPosition();
    this.syncVisibility();
  }

  tick(time) {
    const dt = this.lastTime === null ? 0 : Math.min(0.05, Math.max(0, (time - this.lastTime) / 1000));
    this.lastTime = time;
    const direction = this.dataset.direction === 'forward' ? -1 : 1;
    const speed = Math.max(0.1, Math.min(2, Number(this.dataset.speed) || 0.6));
    const target = direction * 60 * speed;
    const decay = Math.exp(-dt / 0.08);
    const delta = target * dt + (this.velocity - target) * 0.08 * (1 - decay);
    this.velocity = target + (this.velocity - target) * decay;
    this.phase = this.wrap(this.phase + delta);
    this.renderPosition();
    this.frame = requestAnimationFrame(next => this.tick(next));
  }

  stop() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
  }

  disconnectedCallback() {
    const pending = collectionMarqueeHoverRequests.get(this.composition);
    if (pending?.row === this) {
      clearTimeout(pending.timer);
      collectionMarqueeHoverRequests.delete(this.composition);
    }
    cancelAnimationFrame(this.startFrame);
    cancelAnimationFrame(this.measureFrame);
    this.stop();
    this.abort?.abort();
    this.abort = null;
    this.observer?.disconnect();
    this.sourceObserver?.disconnect();
    this.track?.querySelectorAll('[data-cm-clone]').forEach(node => node.remove());
    this.signature = null;
    this.measureFrame = 0;
    this.removeAttribute('data-ready');
    this.removeAttribute('data-measuring');
    this.removeAttribute('data-active');
    this.removeAttribute('data-strip-visible');
    this.active = false;
    if (this.composition?.isConnected) {
      const rows = [...this.composition.querySelectorAll('collection-marquee')];
      if (!rows.some(row => row.active) && !collectionMarqueeHoverRequests.has(this.composition)) {
        rows.find(row => row.abort && row.distance)?.setActive(true);
      }
    }
  }
}
if (!customElements.get('collection-marquee')) customElements.define('collection-marquee', CollectionMarquee);
