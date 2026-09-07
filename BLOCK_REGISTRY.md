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
