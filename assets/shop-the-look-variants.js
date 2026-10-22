export const findLookVariant = (variants, options) => variants.find((variant) => (
  variant.options.length === options.length
  && variant.options.every((value, index) => value === options[index])
)) || null;

class ShopTheLookVariants extends HTMLElement {
  connectedCallback() {
    if (this.controller) return;
    this.root = this.closest('[data-shop-the-look-products]');
    if (this.root?.dataset.lookVariantsEnabled !== 'true') return;
    this.card = this.closest('[data-shop-the-look-product]');
    this.variants = JSON.parse(this.card.querySelector('[data-look-variants]').textContent);
    this.selects = [...this.querySelectorAll('[data-look-option]')];
    this.controller = new AbortController();
    this.selects.forEach((select) => {
      select.addEventListener('change', () => this.update(), { signal: this.controller.signal });
    });
    this.querySelectorAll('[data-look-radio]').forEach((radio) => {
      radio.addEventListener('change', () => {
        const select = this.selects[Number(radio.dataset.optionIndex)];
        if (select && radio.checked) { select.value = radio.value; this.update(); }
      }, { signal: this.controller.signal });
    });
    this.update();
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.controller = null;
  }

  update() {
    const variant = findLookVariant(this.variants, this.selects.map((select) => select.value));
    this.card.dataset.lookSelectedVariantId = variant ? String(variant.id) : '';
    this.selects.forEach((select) => {
      const swatch = select.closest('label').querySelector('[data-look-selected-swatch]');
      if (!swatch) return;
      const template = [...this.querySelectorAll('template[data-look-swatch]')].find((entry) => (
        entry.dataset.optionIndex === select.dataset.optionIndex && entry.dataset.optionValue === select.value
      ));
      swatch.replaceChildren(...(template ? [...template.content.cloneNode(true).childNodes] : []));
    });
    this.querySelectorAll('[data-look-radio]').forEach((radio) => {
      radio.checked = this.selects[Number(radio.dataset.optionIndex)]?.value === radio.value;
    });
    const card = this.card.querySelector('[data-product-card]');
    if (!card) return;
    card.dataset.selectedVariantId = variant ? String(variant.id) : '';
    const form = card.querySelector('form[action*="/cart/add"]');
    const input = form?.querySelector('[name="id"]');
    if (input) input.value = variant ? String(variant.id) : '';
    const submit = form?.querySelector('[type="submit"]');
    if (submit) submit.disabled = !variant?.available;
    if (variant) {
      const template = [...this.querySelectorAll('[data-look-variant-presentation]')]
        .find((entry) => entry.dataset.lookVariantPresentation === String(variant.id));
      const price = template?.content.querySelector('.product-card__price');
      if (price) card.querySelector('.product-card__price')?.replaceWith(price.cloneNode(true));
      const image = template?.content.querySelector('.product-card__image');
      if (image) {
        card.querySelector('.product-card__image')?.replaceWith(image.cloneNode(true));
        card.querySelector('.product-card__secondary-image')?.remove();
        card.querySelector('.product-card__image-link')?.classList.remove('product-card__image-link--has-secondary');
      }
      card.querySelectorAll('a[href*="/products/"]').forEach((link) => {
        const url = new URL(link.href, window.location.href);
        url.searchParams.set('variant', variant.id);
        link.href = url.href;
        if (link.hasAttribute('data-product-card-quick-add-url')) link.dataset.productCardQuickAddUrl = url.href;
      });
      if (form) {
        form.dataset.inventoryQuantity = variant.inventory_quantity;
        form.dataset.inventoryManagement = variant.inventory_management || '';
        form.dataset.inventoryPolicy = variant.inventory_policy || '';
      }
    }
  }
}

if (!customElements.get('shop-the-look-variants')) customElements.define('shop-the-look-variants', ShopTheLookVariants);
