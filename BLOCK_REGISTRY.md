# Block Registry

## Heading

- Type: `heading`
- Category: Basic / Content Kernel
- Role: render one short heading with semantic HTML independent from its visual typography scale.
- Capabilities: content, typography, appearance, layout, responsive, spacing.
- Content owner: Heading owns its inline rich text content; it does not own body copy, business data or parent composition.
- Typography owner: Theme Settings owns the Heading font family, scale tokens, line height, letter spacing and text case; the block selects only the registered visual scale.
- Layout owner: Heading owns its own width, alignment and optional outer padding; the parent owns composition order, flow and gap.
- Appearance owner: the optional `text_color` override is local to the block; an omitted value inherits the nearest scheme `--color-heading` token.
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: leaf Kernel; no nested blocks, nested sections, resource selection or arbitrary CSS controls.
- Settings modules: Content (`heading`), Typography (`heading_size`, `html_tag`), Appearance (`text_color`), Layout (`width`, `width_mobile`, `alignment`, `customize_mobile_alignment`, `alignment_mobile`) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.heading-block` editor wrapper containing one `.heading-text` element with one registered `.heading-*` visual scale class.
- Empty state: retain the editor-aware wrapper but render no heading element when the inline content is empty.
- Accessibility: semantic tag is independently selectable from visual scale; the `html_tag` info guides heading order and the block does not create an extra heading when content is empty.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Text

- Type: `text`
- Category: Basic / Content Kernel
- Role: render body copy, descriptions or longer rich text content without owning composition or business data.
- Capabilities: content, typography, appearance, layout, responsive, spacing.
- Content owner: Text owns its richtext content, including paragraph, link, emphasis and body list structure; the parent owns composition order and gap.
- Typography owner: Theme Settings owns the Body font family, base size, line height, letter spacing and text case; the block selects only the registered `body-*` visual scale.
- Layout owner: Text owns its own width, alignment and optional outer padding; it does not own parent flow or inter-block spacing.
- Appearance owner: the optional `text_color` override is local to the block; an omitted value inherits the nearest scheme Body token (`--body-color`, with the current Foundation fallback `--color-text`).
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: leaf Kernel; no `html_tag`, font selector, resource selection, nested blocks or arbitrary CSS controls.
- Settings modules: Content (`text`), Typography (`text_size`), Appearance (`text_color`), Layout (`width`, `width_mobile`, `alignment`, `customize_mobile_alignment`, `alignment_mobile`) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.text-block` containing `.body-text` and one registered `.body-*` visual scale class around the richtext output.
- Empty state: retain the editor-aware wrapper but render no richtext output when the content is empty.
- Accessibility: preserves richtext paragraph/list structure, link purpose and readable wrapping; visual size is independent from semantic markup and no font family/role override is exposed.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Button

- Type: `button`
- Category: Basic / Content Kernel
- Role: render one CTA link or action using the shared Button Foundation.
- Capabilities: content, action, variant, icon, layout, responsive, spacing.
- Content owner: Button owns only its label and optional destination; it does not own business data, forms, submit behavior or parent composition.
- Action owner: a configured URL renders an anchor; an omitted URL renders an editor-safe `button type="button"` action state. New-tab behavior is limited to anchors and adds `rel="noopener noreferrer"`.
- Visual owner: Theme Settings owns button typography, height, horizontal padding, disabled opacity, color tokens, focus/loading states, radius and border contract; the block selects only Primary, Secondary or Tertiary.
- Layout owner: Button owns its own desktop/mobile Fit/Fill width and optional outer padding; the parent owns composition order and inter-block gap.
- Icon policy: the optional icon uses the Button/Icon Foundation allow-list and only renders when `show_icon` is enabled; icon position and size are local controls.
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: leaf Kernel; no nested blocks, nested sections, resource selection, submit/form ownership or arbitrary CSS controls.
- Settings modules: Content (`button_label`, `button_link`, `button_style`, `button_open_in_new_tab`), Icon (`show_icon`, `icon`, `icon_position`, `icon_size`, `custom_icon_size`), Layout (`width`, `width_mobile`) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.button-block` editor wrapper containing one shared `.btn` primitive with a whitelisted variant and optional `.btn__icon`.
- Empty state: retain the editor-aware wrapper but render no interactive element when the label is empty; a non-empty label without a link renders a disabled `button type="button"` action state.
- Accessibility: preserves native anchor/button semantics, visible focus, safe new-tab relationship, non-interactive decorative icon markup and long-label wrapping; no nested interactive elements are introduced.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Buttons

- Type: `buttons`
- Category: Basic / Content Kernel
- Role: render up to two related CTA buttons with a fixed, editor-friendly composition.
- Capabilities: content, action, variant, icon, layout, responsive, spacing.
- Composition owner: Buttons owns the two stable button slots, their order, direction, gap and group alignment; each slot delegates its label, destination, target behavior, style and optional standard arrow icon to the shared Button Foundation.
- Content owner: Buttons owns only the two CTA configurations; it does not own business data, forms, submit behavior or arbitrary child blocks.
- Layout owner: Buttons owns row/stack direction, desktop/mobile alignment, desktop/mobile gap, Fit/Fill group width and optional outer padding; parent blocks own composition order outside the group.
- Icon policy: each slot can enable the shared Button Foundation's standard arrow icon; icon rendering remains decorative and does not replace the visible label.
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: fixed compound Kernel; no nested blocks, nested sections, resource selection or arbitrary CSS controls.
- Settings modules: Content/Actions (two label, link, new-tab, style and show-icon slot configurations), Layout (`direction`, `gap`, `width`, `alignment`, `mobile_stacking`, optional mobile alignment and gap) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.buttons-block` editor wrapper containing zero, one or two shared `.btn` primitives with local group layout custom properties.
- Empty state: retain the editor-aware wrapper and render no interactive element when both labels are empty; a non-empty label without a link delegates to the shared disabled `button type="button"` state.
- Accessibility: preserves native anchor/button semantics, visible focus, safe new-tab relationships, decorative icon markup and readable long-label wrapping; no nested interactive elements are introduced.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Header

- Type: `header`
- Category: Basic / Composition
- Role: compose one optional Eyebrow, Heading and Text block into a reusable content hierarchy.
- Capabilities: composition, layout, responsive spacing, max width and padding.
- Composition owner: Header owns only child order, vertical flow, gap and container width; Eyebrow, Heading and Text retain their own content, typography, semantic HTML and local appearance.
- Content owner: child blocks own all content; Header does not own business data, typography fields, text color or HTML tag settings.
- Layout owner: Header owns `limit_width`, `max_width`, desktop/mobile gap and outer padding; the parent owns placement and larger composition.
- Allowed children: Eyebrow, Heading and Text; maximum one useful child of each type by contract; Header cannot nest itself.
- Composition policy: compound Basic block with a constrained allow-list and recommended DOM order Eyebrow → Heading → Text; no arbitrary children, nested sections or business-data source.
- Settings modules: Layout (`limit_width`, `max_width`), Gap (`gap_desktop`, `gap_mobile`) and Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.block-header` editor wrapper using a vertical flow, local width/gap/padding custom properties and `{% content_for 'blocks' %}` child rendering.
- Empty state: removed or empty children produce no extra gap; an empty Header remains editor-aware so merchants can add allowed children.
- Accessibility: preserves child semantic and keyboard contracts and the DOM order selected in the editor; Header does not introduce a heading or interactive element.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Image

- Type: `image`
- Category: Basic / Media Kernel
- Role: render one responsive image or safe placeholder, optionally linked, with independent desktop/mobile geometry.
- Capabilities: media, accessibility, responsive source, ratio, width, max width, radius, spacing.
- Content owner: Image owns the selected desktop image, optional mobile replacement and alt text; it does not own business data, resource loops or parent composition.
- Media owner: the shared media renderer owns responsive image markup, CDN image transformation and placeholder output; the block owns source selection, ratio/crop geometry and local wrapper styles.
- Link owner: Image owns the optional destination and new-tab behavior; a linked image renders one semantic anchor with safe `target="_blank"` relationship.
- Layout owner: Image owns independent desktop/mobile Fit, Fill or Custom width, ratio, optional max width and outer padding; the parent owns composition order and gap.
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: leaf Media Kernel; no nested blocks, nested sections, business data, arbitrary HTML or resource selection.
- Settings modules: Content (`image`, `mobile_image`, `show_image_first_mobile`, `image_link`, `open_in_new_tab`, `alt_text`), Size (`image_ratio_desktop`, `image_ratio_custom_desktop`, `width_desktop`, `width_custom_desktop`, `limit_width_desktop`, `max_width_desktop`, and independent mobile equivalents), Border (`corner_radius`) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.image-block` editor wrapper containing shared responsive media markup or a safe placeholder, with local ratio/width/max-width/radius custom properties.
- Empty state: retain the editor-aware wrapper and render a non-interactive placeholder when the image source is empty; the mobile source falls back to the desktop image.
- Accessibility: custom alt text overrides the file alt, blank alt falls back to the file alt or an empty decorative alt, linked images use a semantic anchor, and placeholders are hidden from assistive technology.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Video

- Type: `video`
- Category: Basic / Media Kernel
- Role: render one uploaded or externally hosted video with controlled playback and responsive media geometry.
- Capabilities: media, playback, poster, play button, responsive ratio, width, max width, radius, spacing.
- Content owner: Video owns only its selected source, playback settings and optional cover image; it does not own business data, resource loops or parent composition.
- Media owner: the shared media renderer owns native uploaded-video and external-player markup; the block owns source selection, poster, ratio, width and local presentation settings.
- Playback owner: the block owns autoplay, loop and uploaded-video play/pause toggle behavior. Autoplay is muted and is suppressed when the visitor prefers reduced motion; external players retain their provider controls.
- Allowed children: none (`children: false` is internal registry metadata).
- Composition policy: leaf Media Kernel; no nested blocks, nested sections, business data, arbitrary HTML or resource selection.
- Settings modules: Content (`video_source`, `video`, `external_video_url`, `autoplay`, `loop_video`, `cover_image`, `show_video_first_mobile`), Play button (`play_button_size_desktop`, `play_button_size_mobile`, `play_button_background_color`, `play_button_icon_color`), Size (`aspect_ratio`, `custom_aspect_ratio`, independent desktop/mobile width, custom width, limit width and max width), Border (`corner_radius`) and optional Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile_padding`, plus mobile values).
- Output: `.video-block` editor wrapper containing shared video markup or a safe placeholder, local ratio/width/max-width/radius custom properties and an uploaded-video play button when media exists.
- Empty state: retain the editor-aware wrapper and render a non-interactive placeholder when the selected source is missing; never render both source fields.
- Accessibility: the custom play button has a visible focus state and accessible label, external iframes receive a title, autoplay is muted, and reduced-motion preferences prevent forced playback.
- Runtime: Liquid/CSS plus an idempotent block-local JavaScript lifecycle that supports section load/unload and Theme Editor re-render.

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

## Group

- Type: `group`
- Category: Layout / Composition
- Role: composable wrapper for arranging editable theme blocks as a Stack, Row or Grid.
- Capabilities: layout mode, width, alignment, responsive flow, background scheme, border, radius and padding.
- Composition owner: Group owns child order as configured by the editor, flow direction, gap, alignment and container presentation; child blocks retain their own content and local presentation.
- Allowed children: any registered theme block through `@theme`; Group does not introduce a second content or resource model.
- Composition policy: compound layout block; no nested sections, resource loops or arbitrary HTML controls.
- Settings modules: Layout (`layout_mode`, `width`, `max_width`, `desktop_gap`, `mobile_gap`, `horizontal_alignment`, `vertical_alignment`, `text_alignment`), Responsive (`wrap`, `stack_on_mobile`, `mobile_order`), Appearance (`background_scheme`, `border`, `corner_radius`) and Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`, `customize_mobile`, plus mobile values).
- Output: `.group-block` editor wrapper with a responsive flex/grid layout and local CSS custom properties.
- Empty state: retain the editor-aware wrapper so merchants can add children from the Theme Editor; no placeholder content is rendered.
- Accessibility: preserves the DOM order and child semantics; text alignment and visual mobile ordering do not add or remove semantic content.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

## Grid

- Type: `grid`
- Category: Layout / Composition
- Role: responsive multi-column wrapper for arranging editable theme blocks.
- Capabilities: desktop/tablet/mobile columns, column/row gaps, item alignment, equal-height rows, responsive collapse and padding.
- Composition owner: Grid owns the column structure, gaps, item alignment, row sizing and responsive behavior; child blocks retain their own content and presentation.
- Allowed children: any registered theme block through `@theme`; Grid does not own content, resource loops or business data.
- Composition policy: compound layout block; no nested sections or arbitrary HTML controls.
- Settings modules: Columns (`desktop_columns`, `tablet_columns`, `mobile_columns`), Gap (`column_gap`, `row_gap`, `mobile_gap`), Alignment (`item_alignment`, `item_height`), Responsive (`collapse_breakpoint`, `stacking_behavior`) and Padding (`padding_top`, `padding_bottom`, `padding_left`, `padding_right`).
- Output: `.grid-block` editor wrapper using CSS Grid with explicit desktop/tablet/mobile column tracks and local CSS custom properties.
- Empty state: retain the editor-aware wrapper so merchants can add children from the Theme Editor; no placeholder content is rendered.
- Accessibility: preserves child DOM order and semantics; responsive layout changes visual placement without duplicating content.
- Runtime: Liquid and CSS only; no JavaScript lifecycle owner is required.

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
