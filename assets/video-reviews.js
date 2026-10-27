import './variant-picker.js';
import './product-buy-buttons.js';
import { createSwiperCarousel, destroySwiperCarousel, bindSwiperAutoplay, observeSwiperResize } from './swiper-carousel.js';

if (!customElements.get('video-reviews')) {
  class VideoReviews extends HTMLElement {
    connectedCallback() {
      if (this.controller) return;
      this.viewport = this.querySelector('[data-swiper-carousel]');
      const wrapper = this.viewport?.querySelector('.swiper-wrapper');
      if (!wrapper) return;
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      this.cards = [...this.querySelectorAll('[data-video-review]')];
      this.cards.forEach((card, index) => { card.dataset.reviewSource = String(index); });
      this.motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.inView = false;
      this.editorSelected = false;
      this.userPaused = new WeakSet();
      // A full cycle at each end also supports five visible cards with exactly
      // five reviews. Native Swiper loop requires extra slides at that count.
      this.clones = [];
      if (this.cards.length > 1) {
        const cloneCard = (card, index) => {
          const clone = card.cloneNode(true);
          clone.dataset.reviewSource = String(index);
          clone.setAttribute('aria-hidden', 'true');
          clone.removeAttribute('data-video-review');
          clone.querySelectorAll('[data-review-popup]').forEach(popup => popup.remove());
          [clone, ...clone.querySelectorAll('*')].forEach(element => {
            ['id', 'data-shopify-editor-block', 'data-shopify-editor-block-id', 'data-shopify-editor-block-type', 'aria-controls'].forEach(attr => element.removeAttribute(attr));
          });
          clone.querySelectorAll('[data-review-product]').forEach((trigger, i) => { trigger.dataset.reviewProductIndex = String(i); });
          clone.querySelectorAll('a, button, video').forEach(element => element.setAttribute('tabindex', '-1'));
          clone.querySelectorAll('video').forEach(video => { video.autoplay = false; video.preload = 'none'; });
          this.clones.push(clone);
          return clone;
        };
        const before = this.cards.map(cloneCard);
        const after = this.cards.map(cloneCard);
        wrapper.prepend(...before);
        wrapper.append(...after);
      }
      this.allCards = [...wrapper.children];
      this.offset = this.clones.length ? this.cards.length : 0;
      this.pagination = this.querySelector('.swiper-pagination');
      this.buildPagination();
      this.swiper = createSwiperCarousel(this.viewport, {
        loop: this.cards.length > 1,
        loopAdditionalSlides: 0,
        slidesPerGroup: 1,
        threshold: 10,
        // Videos are the swipe surface, not native focus/drag targets.
        focusableElements: 'input, select, option, textarea, button, label',
        preventClicks: true,
        preventClicksPropagation: true,
        initialSlide: this.offset + Math.floor(this.cards.length / 2),
        slidesPerView: this.mobileSlidesPerView(),
        spaceBetween: Number(this.dataset.gapMobile) || 0,
        centeredSlides: true,
        watchOverflow: this.cards.length < 2,
        slideToClickedSlide: false,
        a11y: { scrollOnFocus: false },
        speed: this.motion.matches ? 0 : 400,
        breakpoints: {
          768: { slidesPerView: Number(this.dataset.columns) || 5, spaceBetween: Number(this.dataset.gap) || 0 }
        },
        controls: { scope: this, loop: this.cards.length > 1 }
      });
      if (!this.swiper) {
        this.disconnectedCallback();
        return;
      }
      this.dataset.ready = '';
      this.allCards.forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        video.controls = false;
        card.querySelector('.video-review__controls').hidden = false;
        ['play', 'pause', 'volumechange', 'ended'].forEach(name => video.addEventListener(name, () => this.updateControls(card), options));
        this.updateControls(card);
      });
      this.changeSlide = () => { this.closePopup(); this.updatePagination(); this.syncPlayback(); this.labelSlides?.(); };
      this.updatePagination();
      this.swiper.on('slideChange', this.changeSlide);
      this.labelSlides = () => {
        this.cards.forEach((card, i) => card.setAttribute('aria-label', `${i + 1} / ${this.cards.length}`));
        this.clones.forEach(card => {
          const active = card === this.swiper.slides[this.swiper.activeIndex];
          card.setAttribute('aria-hidden', String(!active));
          card.querySelectorAll('a, button').forEach(control => {
            if (active) control.removeAttribute('tabindex');
            else control.setAttribute('tabindex', '-1');
          });
          card.setAttribute('aria-label', `${Number(card.dataset.reviewSource) + 1} / ${this.cards.length}`);
        });
      };
      this.labelSlides();
      this.swiper.on('slidesUpdated update resize', this.labelSlides);
      this.resizeCleanup = observeSwiperResize(this.swiper);
      this.addEventListener('click', event => this.handleClick(event), options);
      this.addEventListener('variant:change', event => this.handleVariantChange(event), options);
      this.addEventListener('keydown', event => {
        if (event.key === 'Escape' && this.openTrigger) {
          event.preventDefault();
          event.stopPropagation();
          this.closePopup(true);
          this.syncPlayback();
        }
      }, options);
      this.addEventListener('focusin', event => {
        if (!event.target.matches(':focus-visible')) return;
        const card = event.target.closest('[data-video-review]');
        const index = this.cards.indexOf(card);
        if (index >= 0 && index !== this.logicalIndex()) this.goToReview(index);
      }, options);
      document.addEventListener('click', event => {
        if (this.contains(event.target) && event.target.closest('[data-review-product]')) return;
        if (this.openTrigger && !event.composedPath().includes(this.openTrigger.closest('.video-review'))) { this.closePopup(); this.syncPlayback(); }
      }, options);
      document.addEventListener('visibilitychange', () => this.syncPlayback(), options);
      this.motion.addEventListener('change', () => {
        this.swiper.params.speed = this.motion.matches ? 0 : 400;
        this.syncPlayback();
      }, options);
      this.intersection = new IntersectionObserver(([entry]) => {
        this.inView = entry.isIntersecting;
        this.syncPlayback();
      }, { threshold: 0.2 });
      this.intersection.observe(this);
      this.addEventListener('shopify:block:select', event => {
        this.editorSelected = true;
        this.closePopup();
        const index = this.cards.indexOf(event.target.closest('[data-video-review]'));
        if (index >= 0) this.goToReview(index, 0);
        this.syncPlayback();
      }, options);
      this.addEventListener('shopify:block:deselect', () => { this.editorSelected = false; this.syncPlayback(); }, options);
      this.closest('.shopify-section')?.addEventListener('shopify:section:deselect', () => { this.editorSelected = false; this.closePopup(); this.syncPlayback(); }, options);
      if (this.dataset.autoplay === 'true') {
        this.autoplayCleanup = bindSwiperAutoplay(this.swiper, {
          scope: this,
          delay: Number(this.dataset.autoplayDelay) || 4000,
          pauseOnHover: this.dataset.pauseOnHover !== 'false',
          isVisible: () => this.inView && !this.openTrigger && !this.editorSelected
        });
      }
      this.syncPlayback();
    }

    mobileSlidesPerView() {
      // Layout 2 keeps a large centered review with only a peek at either side.
      return Number(this.dataset.columnsMobile) === 2 ? 1.25 : 1;
    }

    logicalIndex() {
      const count = this.cards.length;
      return count ? Number(this.swiper.slides[this.swiper.activeIndex]?.dataset.reviewSource || 0) : 0;
    }

    goToReview(index, speed = this.swiper.params.speed) {
      // Loop navigation must use stable real indices; DOM positions change
      // while Swiper reorders its buffer during a gesture.
      const count = this.cards.length;
      const current = this.swiper.realIndex;
      const candidates = this.allCards.map((card, realIndex) => ({ card, realIndex }))
        .filter(({ card }) => Number(card.dataset.reviewSource) === index);
      const distance = realIndex => Math.min(
        Math.abs(realIndex - current), this.allCards.length - Math.abs(realIndex - current)
      );
      candidates.sort((a, b) => distance(a.realIndex) - distance(b.realIndex));
      if (count && candidates.length) this.swiper.slideToLoop(candidates[0].realIndex, speed);
    }

    buildPagination() {
      if (!this.pagination) return;
      this.pagination.replaceChildren();
      this.pagination.hidden = this.cards.length < 2;
      if (this.pagination.dataset.paginationType === 'progress_bar') {
        this.pagination.classList.add('swiper-pagination-progressbar');
        const fill = document.createElement('span');
        fill.className = 'swiper-pagination-progressbar-fill';
        this.pagination.append(fill);
      } else {
        this.pagination.classList.add('swiper-pagination-bullets');
        this.cards.forEach((_, index) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'swiper-pagination-bullet';
          button.dataset.reviewIndex = String(index);
          button.setAttribute('aria-label', this.dataset.paginationLabel.replace('[index]', index + 1));
          button.setAttribute('aria-controls', this.viewport.id);
          this.pagination.append(button);
        });
      }
    }

    updatePagination() {
      if (!this.pagination || !this.cards.length) return;
      const index = this.logicalIndex();
      const fill = this.pagination.querySelector('.swiper-pagination-progressbar-fill');
      if (fill) fill.style.transform = `scaleX(${(index + 1) / this.cards.length})`;
      this.pagination.querySelectorAll('[data-review-index]').forEach((button, i) => {
        button.classList.toggle('swiper-pagination-bullet-active', i === index);
        button.setAttribute('aria-current', String(i === index));
      });
    }

    handleVariantChange(event) {
      const popup = event.target.closest('[data-review-popup]');
      if (!popup || !this.contains(popup)) return;
      const variantId = String(event.detail?.variantId || '');
      this.variantImages ??= new WeakMap();
      if (!this.variantImages.has(popup)) {
        this.variantImages.set(popup, new Map([...popup.querySelectorAll('template[data-review-variant-image]')]
          .map(template => [template.dataset.reviewVariantImage, template])));
      }
      const template = this.variantImages.get(popup).get(variantId);
      const image = template?.content.querySelector('.video-review__product-image');
      // Match product-card swatches: clone the server-rendered variant image,
      // keeping Shopify's srcset/sizes and the product-image fallback intact.
      if (image) popup.querySelector('.video-review__product-image')?.replaceWith(image.cloneNode(true));
    }

    updateControls(card) {
      const video = card.querySelector('video');
      const play = card.querySelector('[data-review-play]');
      const mute = card.querySelector('[data-review-mute]');
      const playing = !video.paused && !video.ended;
      play.setAttribute('aria-pressed', String(playing));
      play.setAttribute('aria-label', playing ? play.dataset.pauseLabel : play.dataset.playLabel);
      mute.setAttribute('aria-pressed', String(video.muted));
      mute.setAttribute('aria-label', video.muted ? mute.dataset.unmuteLabel : mute.dataset.muteLabel);
      mute.querySelector('[data-muted-icon]').toggleAttribute('hidden', !video.muted);
      mute.querySelector('[data-sound-icon]').toggleAttribute('hidden', video.muted);
    }

    syncPlayback() {
      this.allCards?.forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        const active = card === this.swiper?.slides[this.swiper.activeIndex];
        if (!active) {
          video.muted = true;
          this.userPaused.delete(video);
        }
        const shouldPlay = active && this.inView && !document.hidden && !this.openTrigger
          && !this.motion.matches && this.dataset.videoAutoplay === 'true' && !this.userPaused.has(video);
        if (shouldPlay && video.paused) video.play()?.catch(() => {});
        else if (!shouldPlay && !video.paused) video.pause();
      });
    }

    closePopup(restoreFocus = false) {
      const trigger = this.openTrigger;
      if (!trigger) return;
      const card = trigger.closest('.video-review');
      card?.querySelectorAll('[data-review-popup]:not([hidden])').forEach(popup => { popup.hidden = true; popup.inert = true; });
      trigger.setAttribute('aria-expanded', 'false');
      const surface = card?.querySelector('.video-review__surface');
      if (surface) [...surface.children].forEach(child => { if (!child.hasAttribute('data-review-popup')) child.inert = false; });
      if (this.popupOwner && this.openPopup) this.popupOwner.append(this.openPopup);
      this.openPopup = null;
      this.popupOwner = null;
      this.openTrigger = null;
      if (restoreFocus && trigger?.isConnected) trigger.focus({ preventScroll: true });
    }

    handleClick(event) {
      if (!this.swiper || !this.swiper.allowClick || this.swiper.animating) return;
      const bullet = event.target.closest('[data-review-index]');
      if (bullet && this.contains(bullet)) {
        this.goToReview(Number(bullet.dataset.reviewIndex));
        return;
      }
      let trigger = event.target.closest('[data-review-product]');
      if (trigger && this.contains(trigger)) {
        // Keep modified clicks and the no-JS path as normal product links.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const card = trigger.closest('.video-review');
        const source = this.cards[Number(card.dataset.reviewSource)];
        const productIndex = [...card.querySelectorAll('[data-review-product]')].indexOf(trigger);
        const originalTrigger = source?.querySelectorAll('[data-review-product]')[productIndex];
        const popupId = originalTrigger?.getAttribute('aria-controls');
        const popup = [...(source?.querySelectorAll('[data-review-popup]') || [])].find(item => item.id === popupId)
          || (this.openPopup?.id === popupId ? this.openPopup : null);
        if (!popup) return;
        event.preventDefault();
        const wasOpen = !popup.hidden;
        this.closePopup();
        if (!wasOpen) {
          this.popupOwner = popup.parentElement;
          this.openPopup = popup;
          card.querySelector('.video-review__surface').append(popup);
          trigger.setAttribute('aria-controls', popup.id);
          popup.hidden = false;
          popup.inert = false;
          trigger.setAttribute('aria-expanded', 'true');
          this.openTrigger = trigger;
          [...card.querySelector('.video-review__surface').children].forEach(child => { if (!child.hasAttribute('data-review-popup')) child.inert = true; });
          const focusTarget = event.detail === 0 ? popup.querySelector('[data-review-close]') : popup;
          focusTarget?.focus({ preventScroll: true });
        }
        this.syncPlayback();
        return;
      }
      if (event.target.closest('[data-review-close]')) {
        this.closePopup(true);
        this.syncPlayback();
        return;
      }
      let control = event.target.closest('[data-review-play], [data-review-mute]');
      // Tapping the video itself also pauses/resumes on touch devices, where
      // there is no hover state to expose the centered Pause button.
      if (!control && event.target.closest('.video-review__media')) {
        control = event.target.closest('.video-review__surface')?.querySelector('[data-review-play]');
      }
      const card = control?.closest('.video-review');
      const video = card?.querySelector('video');
      if (!video) return;
      if (card !== this.swiper.slides[this.swiper.activeIndex]) {
        this.goToReview(Number(card.dataset.reviewSource));
        return;
      }
      if (control.hasAttribute('data-review-mute')) video.muted = !video.muted;
      else if (video.paused) {
        this.allCards.forEach(item => { if (item !== card) item.querySelector('video')?.pause(); });
        this.userPaused.delete(video);
        video.play()?.catch(() => {});
      } else {
        this.userPaused.add(video);
        video.pause();
      }
    }

    disconnectedCallback() {
      this.closePopup();
      this.allCards?.forEach(card => card.querySelector('video')?.pause());
      this.controller?.abort();
      this.controller = null;
      this.intersection?.disconnect();
      this.autoplayCleanup?.();
      this.resizeCleanup?.();
      this.autoplayCleanup = null;
      this.resizeCleanup = null;
      this.variantImages = null;
      destroySwiperCarousel(this.viewport);
      this.swiper = null;
      this.clones?.forEach(clone => clone.remove());
      this.clones = [];
      delete this.dataset.ready;
    }
  }
  customElements.define('video-reviews', VideoReviews);
}
