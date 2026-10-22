import { setButtonLoadingState } from './button-loading.js';

export function buildLookItems(selections, products, cart, unavailable) {
  const items = new Map();
  for (const selection of selections) {
    const product = products.find((entry) => entry.blockId === selection.blockId);
    const variant = product?.variants.find((entry) => String(entry.id) === selection.variantId);
    const quantity = (items.get(selection.variantId)?.quantity || 0) + 1;
    const inCart = (cart.items || []).reduce((total, item) => (
      String(item.variant_id) === selection.variantId ? total + Number(item.quantity) : total
    ), 0);
    if (!variant?.available || variant.requires_selling_plan || variant.min > 1 || variant.increment > 1
      || (variant.inventory_management && variant.inventory_policy !== 'continue'
        && Number(variant.inventory_quantity) < quantity + inCart)) {
      throw new Error(unavailable.replace('__PRODUCT__', selection.title));
    }
    items.set(selection.variantId, { id: Number(selection.variantId), quantity });
  }
  if (!items.size) throw new Error(unavailable.replace('__PRODUCT__', '—'));
  return [...items.values()];
}

class ShopTheLookCart extends HTMLElement {
  connectedCallback() {
    if (this.controller) return;
    this.controller = new AbortController();
    this.button = this.querySelector('[data-look-add-all]');
    this.error = this.querySelector('[data-look-add-error]');
    this.button?.addEventListener('click', () => this.addAll(), { signal: this.controller.signal });
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.controller = null;
    clearTimeout(this.errorTimeout);
    this.errorTimeout = null;
    this.busy = false;
    if (this.button) {
      this.button.disabled = false;
      setButtonLoadingState(this.button, false);
    }
    if (this.error) {
      this.error.hidden = true;
      this.error.textContent = '';
    }
  }

  productsRoot() {
    return this.closest('[data-shop-the-look-section]')?.querySelector('[data-shop-the-look-products]')
      || this.closest('[data-shop-the-look-products]');
  }

  selections() {
    return [...(this.productsRoot()?.querySelectorAll('[data-shop-the-look-product]') || [])]
      .filter((card) => !card.classList.contains('swiper-slide-duplicate'))
      .map((card) => ({
        blockId: card.dataset.shopTheLookBlockId,
        variantId: String(card.hasAttribute('data-look-selected-variant-id') ? card.dataset.lookSelectedVariantId : (card.querySelector('[data-product-card]')?.dataset.selectedVariantId
          || card.querySelector('form[action*="/cart/add"] [name="id"]')?.value
          || card.dataset.lookVariantId || '')),
        title: card.dataset.lookProductTitle || '—',
      }));
  }

  async addAll() {
    if (this.busy) return;
    this.busy = true;
    this.button.disabled = true;
    this.error.hidden = true;
    this.error.textContent = '';
    setButtonLoadingState(this.button, true);
    const signal = this.controller.signal;
    const root = window.Shopify?.routes?.root || '/';
    try {
      const selections = this.selections();
      const sectionUrl = new URL(window.location.href);
      sectionUrl.hash = '';
      sectionUrl.searchParams.set('section_id', this.dataset.sectionId);
      sectionUrl.searchParams.set('_look_stock', Date.now());
      const [sectionResponse, cartResponse] = await Promise.all([
        fetch(sectionUrl, { cache: 'no-store', credentials: 'same-origin', signal }),
        fetch(`${root}cart.js`, { cache: 'no-store', credentials: 'same-origin', signal }),
      ]);
      if (!sectionResponse.ok || !cartResponse.ok) throw new Error(this.dataset.error);
      const html = new DOMParser().parseFromString(await sectionResponse.text(), 'text/html');
      const freshAction = [...html.querySelectorAll('shop-the-look-cart')]
        .find((action) => action.dataset.blockId === this.dataset.blockId);
      const products = [...(freshAction?.closest('[data-shop-the-look-section]')?.querySelector('[data-shop-the-look-products]')
        ?.querySelectorAll('[data-shop-the-look-product]') || [])].map((card) => ({
        blockId: card.dataset.shopTheLookBlockId,
        variants: JSON.parse(card.querySelector('[data-look-variants]')?.textContent || '[]'),
      }));
      const items = buildLookItems(selections, products, await cartResponse.json(), this.dataset.unavailable);
      if (!this.isConnected || signal.aborted) return;
      const current = this.selections();
      if (JSON.stringify(current) !== JSON.stringify(selections)) throw new Error(this.dataset.error);
      const cartController = window.__cartDrawerController;
      if (cartController?.mutate) {
        await cartController.mutate('add', { items });
      } else {
        const response = await fetch(`${root}cart/add.js`, {
          method: 'POST', credentials: 'same-origin',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ items }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.description || this.dataset.error);
      }
      document.dispatchEvent(new CustomEvent('cart:add:ready', { detail: { source: 'shop-the-look', items } }));
      const opener = document.querySelector('[data-cart-drawer-open]');
      if (cartController?.mutate && opener) opener.click();
      else window.location.assign(`${root}cart`);
    } catch (error) {
      if (error.name !== 'AbortError' && this.isConnected) {
        this.error.textContent = error.message || this.dataset.error;
        this.error.hidden = false;
        this.errorTimeout = setTimeout(() => {
          this.errorTimeout = null;
          this.error.hidden = true;
          this.error.textContent = '';
          this.busy = false;
          this.button.disabled = false;
        }, 5000);
      }
    } finally {
      if (!this.errorTimeout) {
        this.busy = false;
        this.button.disabled = false;
      }
      setButtonLoadingState(this.button, false);
    }
  }
}

if (!customElements.get('shop-the-look-cart')) customElements.define('shop-the-look-cart', ShopTheLookCart);
