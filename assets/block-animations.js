/* Entrance effects share one controller per Shopify section, never block layout. */
(() => {
  const key = Symbol.for('theme.blockAnimations');
  if (window[key]) return;
  window[key] = true;
  const boot = window[Symbol.for('theme.blockAnimationsBoot')];
  // A slow/failed asset may already have exposed the initial page. Do not
  // hide that content again; later editor renders still preview normally.
  let skipInitialAnimations = Boolean(boot?.expired);
  if (!skipInitialAnimations) document.documentElement.classList.add('block-animations-enabled');
  const selector = '[data-block-animation], [data-component-reveal]';
  const cardSelector = 'article.testimonial-item, .product-card, .promo-card, .collection-card, .collection-card-kernel, .blog-card, .blog-first-card, article.image-card, .collection-thumbnail__link, .icon-text-cards__content > .group, .icon-text-cards__viewport > .swiper-wrapper > .swiper-slide > .group';
  const listSelector = '[data-product-list-mobile-promos], [data-product-carousel], .product-collection-grid, .collection-card-list__grid, .product-list__grid, [data-product-list], .image-cards-section__grid, [data-blog-list], .blog-grid, .collection-thumbnails__grid, .collection-thumbnails__carousel, .testimonial-carousel, .testimonials-cards__carousel, .icon-text-cards__content, .icon-text-cards__viewport > .swiper-wrapper';
  const excluded = '.announcement-bar, .marquee, [data-multi-image]';
  const controllers = new Map();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const editor = Boolean(window.Shopify?.designMode);
  const enabled = () => !reduced.matches && getComputedStyle(document.documentElement).getPropertyValue('--motion-block-animations').trim() !== '0';
  const types = new Set(['fade', 'scale', 'slide-left', 'slide-right', 'slide-bottom', 'rotate-words']);
  const pendingSelections = new Map();
  const active = element => {
    if (!element.isConnected || !element.getClientRects().length || element.closest('[hidden], [aria-hidden="true"], [inert]')) return false;
    const slide = element.closest('.slideshow__swiper .swiper-slide');
    return !slide || slide.classList.contains('swiper-slide-active');
  };
  const inView = element => {
    const rect = (element.closest('.slideshow') || element).getBoundingClientRect();
    return rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
  };
  const splitWords = element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.textContent.trim() && !node.parentElement.closest('svg, script, style, .visually-hidden, [aria-hidden="true"], .reveal-word')) texts.push(node);
    }
    texts.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).filter(Boolean).forEach(part => {
        if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
        else {
          const word = document.createElement('span');
          word.className = 'reveal-word';
          const text = document.createElement('span');
          text.className = 'reveal-word__text';
          text.textContent = part;
          word.append(text);
          fragment.append(word);
        }
      });
      node.replaceWith(fragment);
    });
  };
  const createController = root => {
    const nodes = new Map();
    const events = new AbortController();
    const stop = state => {
      if (state.refreshTimer != null) clearTimeout(state.refreshTimer);
      state.refreshTimer = null;
      state.animations.forEach(animation => animation.cancel()); state.animations = [];
      state.element.classList.remove('reveal-words-ready');
      state.element.classList.remove('reveal-words-animated');
    };
    const reveal = (element, immediate = false, prepared = null) => {
      const state = nodes.get(element);
      if (!state || state.played || (!immediate && !(prepared ? prepared.active : active(element)))) return;
      if (state.refreshTimer != null) {
        if (!immediate) return;
        clearTimeout(state.refreshTimer); state.refreshTimer = null;
      }
      state.played = true;
      element.dataset.animationInitialized = 'true';
      element.classList.remove('reveal-pending');
      if (immediate || !(prepared ? prepared.motion : enabled()) || typeof element.animate !== 'function') return;
      const offset = Math.round(Math.max(0, Math.min(2000, Number(element.dataset.animationDelay) || 0)) / 50) * 50;
      const delay = offset + (state.component ? Number(element.dataset.animationStagger) || 0 : 0);
      const options = { duration: 500, delay, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'backwards' };
      if (state.component) {
        const tokens = getComputedStyle(element);
        const time = tokens.getPropertyValue('--motion-duration-slow').trim();
        const duration = parseFloat(time);
        options.duration = Math.max(700, Number.isFinite(duration) ? duration * (time.endsWith('s') && !time.endsWith('ms') ? 1000 : 1) : 700);
        options.easing = tokens.getPropertyValue('--motion-ease-standard').trim() || 'cubic-bezier(.22,1,.36,1)';
      }
      const from = { opacity: 0 };
      const transforms = { scale: 'scale(0.5)', 'slide-left': 'translateX(-20px)', 'slide-right': 'translateX(20px)', 'slide-bottom': 'translateY(20px)' };
      const endTransforms = { scale: 'scale(1)', 'slide-left': 'translateX(0)', 'slide-right': 'translateX(0)', 'slide-bottom': 'translateY(0)' };
      if (state.component) {
        transforms.scale = 'scale(.94)';
        transforms['slide-left'] = 'translateX(-32px)';
        transforms['slide-right'] = 'translateX(32px)';
        transforms['slide-bottom'] = 'translateY(32px)';
      }
      if (transforms[state.type]) from.transform = transforms[state.type];
      try {
        if (state.type === 'rotate-words') {
          element.style.setProperty('--block-animation-delay', `${delay}ms`);
          element.classList.add('reveal-words-ready');
          // Commit the reset state so the same CSS animation can replay.
          void element.offsetWidth;
          element.classList.add('reveal-words-animated');
        } else {
          const to = { opacity: 1 };
          if (endTransforms[state.type]) to.transform = endTransforms[state.type];
          state.animations.push(element.animate([from, to], options));
        }
        // Release compositing after completion so backdrop blur and hover transforms work.
        state.animations.forEach(animation => animation.finished.then(() => animation.cancel()).catch(() => {}));
      } catch { stop(state); }
    };
    const refresh = (element, force = false) => {
      const state = nodes.get(element);
      if (!state) return;
      stop(state); state.played = false;
      if (!enabled()) { reveal(element, true); return; }
      element.classList.add('reveal-pending');
      if (!force && !active(element)) return;
      if (!editor) { reveal(element); return; }
      // Let the editor finish its settings render before restarting the effect.
      // A subsequent Type/Delay change cancels this pending refresh.
      state.refreshTimer = setTimeout(() => {
        state.refreshTimer = null;
        reveal(element, false, force ? { active: true, motion: enabled() } : null);
      }, 20);
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
    }, { threshold: 0.05 }) : null;
    const remove = element => {
      const state = nodes.get(element);
      if (state) {
        stop(state);
        element.dataset.animationInitialized = 'true';
      }
      observer?.unobserve(element);
      nodes.delete(element);
      if (element.classList.contains('reveal-pending')) element.classList.remove('reveal-pending');
    };
    const scan = () => {
      const cards = [...root.querySelectorAll(cardSelector)].filter(card => !card.closest(`${excluded}, .slideshow, dialog`));
      const rows = new Map(cards.map(card => [card, (card.closest('.product-collection-grid__item, .blog-list__item, .swiper-slide') || card).getBoundingClientRect().top]));
      const intros = [...root.querySelectorAll('[data-block-animation]')].filter(element => !element.closest(cardSelector) && active(element));
      const staggers = new Map(cards.map(card => {
        const list = card.closest(listSelector);
        if (!list) return [card, 0];
        const row = cards.filter(other => other.closest(listSelector) === list && Math.abs(rows.get(other) - rows.get(card)) < 8);
        const introDelay = Math.max(0, ...intros.filter(element => element.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING).map(element => Number(element.dataset.animationDelay) || 0));
        return [card, Math.min(900, introDelay + 150 + Math.max(0, row.indexOf(card)) * 75)];
      }));
      cards.forEach(card => {
        card.dataset.componentReveal = '';
        card.dataset.animationStagger = String(staggers.get(card));
      });
      // Read visibility in one pass before splitting words or writing classes.
      // Alternating each block's layout reads and animation writes forces a
      // fresh document layout for every block during storefront startup.
      const motion = enabled();
      const candidates = [...root.querySelectorAll(selector)];
      const visible = new Set(candidates.filter(element => active(element) && inView(element)));
      nodes.forEach((state, element) => { if (!root.contains(element) || !element.matches(selector)) remove(element); });
      candidates.forEach(element => {
        const component = element.hasAttribute('data-component-reveal');
        const type = element.dataset.blockAnimation || (element.matches('article.testimonial-item') ? 'fade' : 'slide-bottom');
        const parent = element.parentElement?.closest('[data-component-reveal]');
        if (!types.has(type) || element.closest(excluded) || (component && element.closest('.slideshow, dialog')) || (parent && parent.dataset.blockAnimation !== 'none')) {
          remove(element);
          // Marquee observes its children to refresh cloned content. Writing the
          // same state on every scan feeds its clone rebuild back into this scan.
          if (element.dataset.animationInitialized !== 'true') element.dataset.animationInitialized = 'true';
          return;
        }
        const configuration = `${type}:${element.dataset.animationDelay}:${component}`;
        if (nodes.get(element)?.configuration === configuration) return;
        remove(element);
        if (type === 'rotate-words') splitWords(element);
        nodes.set(element, { element, type, component, configuration, played: false, animations: [], refreshTimer: null });
        if (skipInitialAnimations || !motion || !observer || typeof element.animate !== 'function' || element.contains(document.activeElement)) { reveal(element, true); return; }
        element.classList.add('reveal-pending');
        element.dataset.animationInitialized = 'true';
        observer.observe(element);
        if (visible.has(element)) {
          if (editor) refresh(element);
          else reveal(element, false, { active: true, motion });
        }
      });
    };
    const mutations = new MutationObserver(records => {
      if (records.some(record => record.type === 'childList' || ['data-block-animation', 'data-animation-delay'].includes(record.attributeName))) scan();
      records.forEach(record => {
        if (record.type !== 'attributes' || !record.target.matches('[role="tabpanel"], .slideshow__swiper .swiper-slide, .press-item[data-carousel-slide]')) return;
        if (record.target.matches('[role="tabpanel"]') && active(record.target)) scan();
        nodes.forEach((state, element) => {
          if (!record.target.contains(element)) return;
          if (!active(element)) {
            stop(state); state.played = false;
            element.classList.toggle('reveal-pending', enabled());
          } else if (inView(element)) reveal(element);
        });
      });
    });
    const previewSelection = event => {
      let matched = false;
      nodes.forEach((state, element) => {
        if (!event.target.contains(element) && !element.contains(event.target)) return;
        matched = true;
        // The editor reselects the block after a settings render. Preview its
        // chosen effect instead of cancelling it and marking it as played.
        refresh(element, true);
      });
      // A block settings render can replace the target node before the
      // MutationObserver callback runs. Scan once so the selection reaches the
      // newly rendered animation node instead of the stale node map.
      if (!matched) {
        scan();
        nodes.forEach((state, element) => {
          if (event.target.contains(element) || element.contains(event.target)) refresh(element, true);
        });
      }
    };
    const options = { signal: events.signal };
    let resizeFrame;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(scan);
    }, options);
    root.addEventListener('focusin', event => {
      nodes.forEach((state, element) => {
        if (element.contains(event.target)) { stop(state); state.played = false; reveal(element, true); }
      });
    }, options);
    reduced.addEventListener('change', () => nodes.forEach((state, element) => {
      stop(state); state.played = false; reveal(element, true);
    }), options);
    scan();
    mutations.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'aria-hidden', 'inert', 'class', 'data-block-animation', 'data-animation-delay'] });
    return {
      previewSelection,
      destroy() { cancelAnimationFrame(resizeFrame); events.abort(); mutations.disconnect(); observer?.disconnect(); nodes.forEach((state, element) => remove(element)); }
    };
  };
  // Prepare offscreen entrances shortly before they are needed. Scanning every
  // section at startup measures card rows and splits heading text below the fold.
  const sectionObserver = !editor && 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) initialize(entry.target); });
  }, { rootMargin: '300px 0px' }) : null;
  const initialize = root => {
    sectionObserver?.unobserve(root);
    if (controllers.has(root)) return;
    const controller = createController(root);
    controllers.set(root, controller);
    const pending = pendingSelections.get(root.id);
    if (pending) {
      pendingSelections.delete(root.id);
      const target = pending.target?.isConnected
        ? pending.target
        : (pending.blockId ? document.getElementById(pending.blockId) : root);
      if (target && (target === root || root.contains(target))) controller.previewSelection({ target });
    }
  };
  document.querySelectorAll('.shopify-section').forEach(root => {
    if (!sectionObserver) { initialize(root); return; }
    const bounds = root.getBoundingClientRect();
    // Zero-height wrappers can own fixed overlays; they cannot intersect.
    if (bounds.height <= 0 || bounds.top <= innerHeight + 300 || root.contains(document.activeElement)) initialize(root);
    else sectionObserver.observe(root);
  });
  skipInitialAnimations = false;
  document.documentElement.classList.add('block-animations-enabled');
  if (boot) clearTimeout(boot.timer);
  document.addEventListener('shopify:section:load', event => {
    if (!event.target.matches?.('.shopify-section')) return;
    controllers.get(event.target)?.destroy();
    controllers.delete(event.target);
    initialize(event.target);
  });
  const handleEditorSelection = event => {
    const root = event.target?.closest?.('.shopify-section') || (event.target?.matches?.('.shopify-section') ? event.target : null);
    if (!root) return;
    const controller = controllers.get(root);
    if (controller) {
      controller.previewSelection(event);
      return;
    }
    pendingSelections.set(root.id, { target: event.target, blockId: event.detail?.blockId });
  };
  document.addEventListener('shopify:block:select', handleEditorSelection);
  document.addEventListener('shopify:section:select', handleEditorSelection);
  document.addEventListener('shopify:section:unload', event => {
    sectionObserver?.unobserve(event.target);
    controllers.get(event.target)?.destroy();
    controllers.delete(event.target);
  });
})();
