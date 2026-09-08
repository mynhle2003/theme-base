# Block Registry

## Columns

- Type: `columns`
- Category: Layout
- Role: two-slot split layout with stable Left and Right slots.
- Capabilities: layout, responsive, spacing, alignment.
- Layout owner: Columns owns ratio, desktop/mobile gap, stacking breakpoint, mobile order and padding.
- Content owner: `_column` children own the content and local presentation inside each slot.
- Allowed children: exactly two private `_column` slots created by the preset; each slot allows Heading, Eyebrow, Text, Button, Buttons, Image, Video and Icon.
- Composition policy: no `@theme`, no nested section, no nested Group/Stack/Grid/Columns, and no user-created slot type.
- Depth policy: Columns → `_column` → Kernel; maximum three block levels below the section.
- Empty state: empty slots keep their editor-aware wrapper and produce no spacing outside the slot.
- Output: `.block-columns` with stable `.block-columns__slot` wrappers.
- Accessibility: preserves DOM order; mobile order is a deliberate visual reorder only and is limited to the two slots.
- Runtime: CSS-only; no JavaScript lifecycle owner is required.

## Product Card

- Type: `product-card`
- Category: Commerce Composition
- Role: controlled product presentation with optional availability-aware add-to-cart form.
- Resource owner: the parent section/resource loop supplies the product context; the card never owns a product picker, collection or product loop.
- Capabilities: image, badge, rating, price and button visibility; image ratio.
- Content owner: Product Card owns only these controlled presentation slots; merchants cannot add, remove, reorder or nest arbitrary child blocks.
- Composition policy: leaf commerce block; no child blocks, nested sections or product-source loop.
- Output: `.product-card-block` with a media link, product metadata and optional product form.
- States: missing product context, missing image placeholder, sold out disabled button and product-form error alert.
- Accessibility: product link has an accessible name, interactive elements retain visible focus, sold out action is disabled, form errors use `role="alert"`.
- Localization: visible action, sold-out and empty-selection copy use translation keys; rating metadata is announced as an accessible label.
- Runtime: Liquid form state only; no JavaScript lifecycle owner is required.

## Product Price

- Type: `product-price`
- Category: Commerce Composition
- Role: render the current product price using the shared price component.
- Resource owner: the parent section/resource surface supplies the product context; the block never owns a product picker, variant source or product loop.
- Capabilities: optional `From` label for variable products; currency, compare-at, unit-price and sale-order policy remain owned by global Theme Settings and the shared price snippet.
- Content owner: Product Price owns no child content; merchants cannot add, remove or reorder price sub-elements.
- Composition policy: leaf commerce block; no child blocks, nested sections or resource selection.
- Component boundary: `snippets/price.liquid` owns money formatting, sale comparison, unit price and price accessibility markup; this block owns only the editor-facing wrapper and controlled `show_from` setting.
- Output: `.product-price-block` wrapping the shared `.price` component.
- States: missing product context renders an editor-safe empty state; product sale, compare-at, unit-price and variable-price states are delegated to the shared component.
- Accessibility: preserves the shared price `aria-label` and exposes the missing-context state with `role="status"`.
- Localization: all visible price labels and empty-state copy use translation keys or shared settings.
- Runtime: Liquid-only; no JavaScript lifecycle owner is required until a parent variant lifecycle is defined.

## Variant Picker

- Type: `variant-picker`
- Category: Commerce/Form Composition
- Role: expose product option controls and synchronize the selected variant with the parent product form.
- Resource owner: the parent product section/form supplies the product context; the block never owns a product picker, variant source or product loop.
- Capabilities: option controls, dropdown/button presentation, swatch integration, availability filtering and optional product-media synchronization through existing Theme Settings.
- Content owner: the shared `variant-picker` component owns option control markup; merchants cannot add, remove or reorder arbitrary option children from this block.
- Composition policy: leaf commerce/form block; no child blocks, nested sections or resource selection.
- Component boundary: `snippets/variant-picker.liquid` owns option rendering, serialized variant data, availability state and `variant:change` events; the block owns only context binding, stable wrapper and empty state.
- Form boundary: the parent product form owns hidden variant ID submission and submit-button state; Variant Picker updates those controls through the shared component when a form is present.
- Output: `.variant-picker-block` wrapping the shared `<variant-picker>` custom element.
- States: missing product context, selected option, unavailable option, unavailable variant, keyboard focus and media update state are handled by the wrapper/component contract.
- Accessibility: fieldsets and legends label option groups, controls retain visible focus, unavailable values expose disabled/aria-disabled state, and missing context uses `role="status"`.
- Localization: product option labels and empty-state copy use Liquid/product translation context; picker presentation remains controlled by global Variant Picker/Swatch settings.
- Runtime: existing component JavaScript is guarded by custom-element registration and per-instance initialization; no new block-level listeners are added.

## Quantity Selector

- Type: `quantity-selector`
- Category: Commerce/Form Composition
- Role: control the submitted quantity for the current variant inside a parent product form.
- Resource owner: the parent product section/form supplies product and variant context; the block never owns a product picker, product loop or product form.
- Capabilities: localized label, numeric quantity input, optional stepper buttons, variant quantity rules (`min`, `max`, `increment`) and unavailable-variant disabling.
- Content owner: the shared `quantity-selector` component owns the fixed control markup; merchants cannot add, remove or reorder arbitrary children.
- Composition policy: leaf form block; no child blocks, nested sections or resource selection.
- Component boundary: `snippets/quantity-selector.liquid` owns control markup, keyboard/button interaction, normalization and variant-rule synchronization; the block owns context binding, editor settings, stable wrapper and empty state.
- Form boundary: the parent product form owns submission; the component emits native input/change events for the `quantity` field and never submits or creates a form.
- Output: `.quantity-selector-block` wrapping a `<quantity-selector>` control with `name="quantity"`.
- States: missing context, unavailable variant, min/max boundaries, increment normalization, keyboard focus and variant changes are handled explicitly.
- Accessibility: label is associated with the input, buttons have localized accessible names, buttons are keyboard operable and boundary-disabled, and missing context uses `role="status"`.
- Localization: label, button names and empty-state copy use translation keys.
- Runtime: custom-element lifecycle is guarded per instance; variant-change listeners attach to the parent form and do not create a form-level submission side effect.

## Product Grid

- Type: `product-grid`
- Category: Commerce Composition
- Role: own a collection resource loop and render products in a responsive grid.
- Resource owner: the parent section/resource surface supplies the collection context; Product Grid owns pagination and product iteration; Product Card owns neither the collection nor the loop.
- Capabilities: product count per page, desktop/mobile columns, gap and pagination visibility. Collection selection is intentionally not a block setting because Section owns resource pickers.
- Content owner: Product Grid owns grid layout and resource iteration; each product presentation is delegated to the shared `snippets/product-card.liquid` component.
- Composition policy: controlled commerce loop; no child blocks, nested sections or arbitrary merchant-reordered product children.
- Component boundary: Product Grid owns collection/pagination/grid orchestration; Product Card snippet owns individual product presentation and uses existing badge, price and form primitives.
- Output: `.product-grid-block` with stable `.product-grid-block__items` and optional pagination navigation.
- States: missing collection context, empty collection, paginated collection and responsive desktop/mobile grid are explicit states. Loading/error are not owned because this render path is synchronous Liquid without a client data lifecycle.
- Accessibility: empty state uses `role="status"`, pagination is a labeled navigation landmark, and card-level links/forms retain the shared Product Card accessibility contract.
- Localization: collection empty-state and pagination labels use translation keys; product content remains delegated to the shared card component.
- Runtime: Liquid pagination and CSS-only responsive layout; no JavaScript lifecycle owner is required.
- Migration: integrate this block only through a parent section/resource surface that supplies `collection`, then migrate the legacy `sections/collection.liquid` product loop to this render path; do not add a second collection picker to Product Card.

## Divider

- Type: `divider`
- Category: Layout
- Role: visual separation between content groups or items.
- Capabilities: solid/dashed/dotted style, thin/medium/custom thickness, scheme/muted/custom color, responsive width and spacing.
- Layout owner: Divider owns only its line presentation and local top/bottom spacing; parent owns the surrounding composition.
- Content owner: none; Divider renders no text or interactive content.
- Composition policy: leaf block; no child blocks and no nested sections.
- Output: `.block-divider` containing a border-based `.block-divider__line`; never a character or image.
- Accessibility: exposes a horizontal separator role without adding interactive controls.
- Runtime: CSS-only; no JavaScript lifecycle owner is required.

## Spacer

- Type: `spacer`
- Category: Layout
- Role: intentional empty space inside a composition; never a fix for another block's margin.
- Capabilities: responsive spacing, pixel or parent-relative percentage sizing, mobile visibility.
- Layout owner: Spacer owns only its own block-size and instance-level spacing mode; parent owns surrounding composition.
- Content owner: none; Spacer renders no text or interactive content.
- Settings contract: desktop `unit_desktop` plus `size_desktop_px`/`size_desktop_percent`, mobile `show_on_mobile`/`unit_mobile` plus `size_mobile_px`/`size_mobile_percent`, and advanced `custom_spacing`.
- Composition policy: leaf block; no child blocks, nested sections, or layout ownership beyond its own space.
- Output: `.block-spacer`; uses `block-size`, never external margins, and carries `aria-hidden="true"`.
- Percentage safety: percentage block-size resolves against a definite parent block-size; an indefinite parent safely results in zero space.
- Mobile behavior: `show_on_mobile = false` sets the mobile display to `none` without changing desktop sizing.
- Runtime: CSS-only; no JavaScript lifecycle owner is required.
