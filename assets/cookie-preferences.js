// Shopify owns the preferences UI, regional configuration and consent storage.
if (!customElements.get('cookie-preferences')) {
  class CookiePreferences extends HTMLElement {
    static bannerPromise;

    static loadBanner() {
      if (window.privacyBanner?.showPreferences) return Promise.resolve(window.privacyBanner);
      if (this.bannerPromise) return this.bannerPromise;

      this.bannerPromise = new Promise((resolve, reject) => {
        const source = 'https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js';
        const existing = document.querySelector('script[src*="privacy-banner/storefront-banner.js"]');
        const script = existing || document.createElement('script');
        const finish = (error) => {
          clearTimeout(timeout);
          script.removeEventListener('load', loaded);
          script.removeEventListener('error', failed);
          if (error) {
            if (!existing) script.remove();
            reject(error);
          } else {
            resolve(window.privacyBanner);
          }
        };
        const loaded = () => finish(window.privacyBanner?.showPreferences ? null : new Error('Cookie preferences unavailable'));
        const failed = () => finish(new Error('Cookie preferences failed to load'));
        const timeout = setTimeout(failed, 10000);
        script.addEventListener('load', loaded, { once: true });
        script.addEventListener('error', failed, { once: true });
        if (!existing) {
          script.src = source;
          script.async = true;
          document.head.append(script);
        }
      }).catch((error) => {
        this.bannerPromise = null;
        throw error;
      });
      return this.bannerPromise;
    }

    connectedCallback() {
      this.controller?.abort();
      this.controller = new AbortController();
      this.addEventListener('click', async (event) => {
        const link = event.target.closest('a');
        if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        // The native banner also delegates clicks on this hash at document level.
        event.stopPropagation();
        if (this.busy) return;
        this.busy = true;
        link.setAttribute('aria-busy', 'true');
        const signal = this.controller.signal;
        try {
          const banner = await CookiePreferences.loadBanner();
          if (!signal.aborted) {
            await banner.showPreferences({ checkoutRootDomain: this.dataset.shopDomain });
          }
        } catch {
          // Keep the real privacy policy reachable if the consent service is blocked.
          if (!signal.aborted) window.location.assign(link.href);
        } finally {
          this.busy = false;
          link.removeAttribute('aria-busy');
        }
      }, { signal: this.controller.signal });
    }

    disconnectedCallback() {
      this.controller?.abort();
    }
  }

  customElements.define('cookie-preferences', CookiePreferences);
}
