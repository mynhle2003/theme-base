# Video reviews — 2026-10-19

User request: remove the Custom section immediately before Icon with text (custom), build Video reviews from Figma and the reference theme, use current-repo options wherever available. Follow-up: always loop, without a merchant option.

## Sources and scope

- Figma file `yTXlAfT0miBGgRuuYM4OMp`, desktop `50636:19257` (1920 × 764.6), mobile `50636:19356` (375 × 695.5), inspected read-only in authenticated Chrome. Dark scheme, centered Header, five desktop videos, taller center card, one mobile card, product thumbnails inside video. Figma connector high-fidelity context was unavailable (edit-access error); browser Properties and screenshots provided visual evidence. No claim of exact asset/pixel fidelity.
- Reference: `omnise-theme-base`, theme `161667842133`, section `template--23269704728661__video_reviews_TEc6wE`. Inspected section settings and Video block in the existing authenticated editor without saving. Reference allows eight products; requested implementation deliberately limits to two.
- Actual target: current `theme/virelle-theme` checkout. Only homepage instance `virelle_shoppable` replaced, retaining its ID/order before `icon_text_cards_qT6mLV`. Existing products preserved; center review also references the existing Effortless Seamless Leggings. Other concurrent work is preserved.

## Contract and option mapping

Dynamic content section, available in JSON templates, not header/footer groups. Static existing Header with existing Group → Custom SVG Icon + Eyebrow and Heading; repeatable private Video blocks (up to 12 plus Header). Each Video owns video, cover image, automatic accessible label, at most two products, optional avatar/name/subtitle and review text. No app slot or implicit page product context.

Reuse current IDs/options for section width (page/full/full without padding), alignment and optional mobile override, color scheme/background/image, padding and optional mobile override; carousel columns and gaps, navigation position/style/icon/behavior, pagination type/visibility/spacing/width, slide autoplay/pause-on-hover/speed. New behavior-specific controls: emphasize active card, autoplay active video, product-popup scheme. Theme Settings continue to own fonts, colors, radii, prices and buttons. Carousel and video always loop; neither exposes a Loop setting.

Runtime uses the existing Swiper factory/control binder, autoplay clock and resize helper. Full cloned cycles at both ends support five visible cards with exactly five reviews. Reset to originals after crossing an edge; clones remove duplicate IDs/editor attributes and remain hidden from accessibility/keyboard traversal. Pointer selection on a cloned thumbnail resolves to its original card and matching product. Pagination counts original reviews only.

Popup is an in-card, nonmodal region: correct product title, market-formatted shared price and View details link; one visible popup per section, close button, Escape/focus restoration and outside-card dismissal. Product links remain navigable without JavaScript. Active-video playback pauses for hidden document/offscreen cards, product popup, editor block selection and reduced motion. Component disconnection aborts handlers, observers and shared runtimes.

## Evidence and limits

- Seven scoped tests pass: product isolation/limit, empty resources, duplicated section IDs, active/offscreen playback, popup/reduced-motion/editor/manual pause, independent instances and loop normalization/no loop option.
- Recursive preset setting IDs, enum/range values, nested block composition and two-product limit pass.
- Theme Check: 0 errors, 11 warnings outside the new files in the inspected working tree. Toolkit validator could not start because its bundled `@shopify/theme-check-common` dependency is missing; standalone Theme Check was used.
- Browser desktop: five cards, emphasized center; both product choices show their own title/price; Escape closes and restores focus. Repeated Next crosses last → first, original active label `1 / 5`, both controls enabled, no duplicate IDs. Pointer selection on the visible loop copy opens Ruched Long Sleeve Crop Top in its original card.
- Browser mobile 375px: one card, two thumbnail choices, in-card popup and progress pagination fit the viewport. Shared navigation hidden on mobile.
- Actual video/cover resources are unselected; placeholders remain. Playback policy is unit-tested, but real media/audio/network behavior has not been exercised. Sound uses a localized text control, not an exported original Figma sound SVG.
- Full Theme Editor add/remove/duplicate/reorder/save/reload matrix remains untested. No editor save, content/media upload, publish, explicit theme push or Git delivery. The already-running port-9300 development watcher automatically synchronized local files; a transient unrelated Featured product upload error interrupted one local preview reload, so responsive readback used the same development theme directly.

Implementation paths are registered in `docs/theme-customizations/virelle-theme.md`. Preserve these files and local preset/template composition together during base updates.


## Overlay revision — 2026-10-20

Latest user instruction supersedes the dialog request: remove the full-page dialog and rebuild the product overlay inside each card. Figma `48190:8432` was inspected in authenticated Chrome (1920 × 860.6, scheme 3, five cards with taller center, thumbnail choices inside media). Connector authentication repeatedly requested a retry; visual reference came from browser screenshot/Properties. The frame shows the closed state, so the open-state interaction follows the explicitly supplied Eurus reference rather than claiming an unseen Figma overlay.

Inspected the rendered `shopify-section-template--27288030380350__video_shopping_k9YRcg` at `eurus-puff.myshopify.com`: selecting a product reveals a panel inside the card, translating from 100% down to 0 with opacity/visibility transitions over 500ms, easing cubic-bezier(.4,0,.2,1); underlying video content fades over the same duration. Implemented this behavior independently using current theme tokens and shared product title/price/buttons. No external theme assets or source files copied.

The section no longer mounts a shared dialog, full-card dialog opener or mobile drawer. Each product owns a full-card overlay with image, title, price, choose-options link (or sold-out state), View details and Close. At most two thumbnail choices; fixed carousel/video loop and removal of Video description remain. Closing, Escape, outside-card interaction and slide changes dismiss the overlay. Hidden panels are inert; background card controls are inert while open; closing restores thumbnail focus. Reduced motion disables the panel/fade transition. Surface uses overflow:clip to prevent browser focus scrolling from shifting the animated panel.

Validation: 8 scoped tests pass; JavaScript syntax and diff whitespace pass. Theme Check 0 errors, 11 existing warnings, none in Video reviews files. Browser readback confirmed no dialog, correct first/second products, Escape focus restoration, full-card geometry without surface scrolling, 500ms transition. Mobile viewport verified at 375 × 812 with image, price, both actions and Close fitting the card. No real video has been selected, so actual media playback remains unverified. Full Theme Editor lifecycle matrix remains untested.


## Detailed overlay and audio controls — 2026-10-20

High-fidelity Figma context and screenshots obtained for overlay `48190:9410` and sound control `48190:8448`. Overlay now has an 80 × 100 product image beside title/price, shared theme variant picker, bottom-aligned 48px Add to cart and tertiary View details. Product data/images/options remain dynamic; actual catalog products may have Color only rather than the illustrative Figma Color/Size combination. Each overlay uses its own product-information scope, form ID, variant-price templates and shared buy-button controller; URL/external variant synchronization is disabled. Subscription-required products link to their product page for purchase options.

Downloaded original Figma collapse chevron (24px), muted icon (24px), and details arrow (16px) into local SVG assets. The unmuted state uses a speaker/waves icon. Play/Pause and sound controls share a 48px square, 24px icon, padding, colors and gap. With Autoplay active video disabled, manual Play/Pause remains available. Losing the active slide resets video.muted to true; returning does not restore the previous unmuted state. The volumechange event updates icons and accessible labels. Loop-copy controls resolve to their source card.

Browser verification: local SVGs loaded at their intended root sizes, product image 80 × 100; selecting Black on the second product updates the shared picker/controller variant while keeping the first product isolated. Mobile 375 × 812 overlay height/scrollHeight both 492px, primary button 48px, no overflow for the inspected product. Real video remains unselected, so sound/manual playback/reset behavior is covered by runtime unit tests rather than real-media browser playback. 11 scoped tests pass. Theme Check remains 0 errors / 11 existing warnings. No Add to cart request was submitted during QA.


### Variant image synchronization

Overlay swatches now follow the product-card variant-media approach: each variant has an inert server-rendered image template using variant.featured_image with product.featured_image fallback. A section-scoped variant:change handler clones only the emitting overlay's matching image, preserving responsive srcset/sizes and Shopify URLs. No cross-product image updates or bespoke swatch selection logic. Browser confirmed Effortless Seamless Leggings Burgundy image switches to its Black image on Black swatch selection. 12 scoped tests pass, including media isolation/unmatched variant behavior.


### Add-to-cart loading

The overlay form delegates submission to the existing cart drawer controller. Its button now reuses the product-card action loader styling and shared component-bouncing-dots stylesheet, hides the label while data-quick-add-loading is true and retains full opacity while busy. The existing cart controller owns disabled/aria-busy, double-submit protection, restoring the dots/button and reporting errors. Validation: 23 tests pass across video-reviews and cart-drawer-add, including pending requests, duplicate submit, errors, retry and unload. Browser cart mutation was not submitted.


### Product image color scheme — 2026-10-20

Product thumbnails now receive the existing product_color_scheme instead of inheriting the dark Video reviews section scheme. Thumbnail/overlay product-image backgrounds and collapse-button background use the shared --color-surface token. Icon assets render as masks using currentColor, so sound/collapse/details icons follow their button/overlay scheme instead of embedding fixed black/white colors. No new color settings or literal color values added. Variant-image templates preserve the same image wrapper and scheme when swapping media.

Navigation follow-up: navigation_style defaults and the Video reviews preset use primary; the existing homepage virelle_shoppable instance also uses primary. Other section navigation settings are preserved.

Editor option order follow-up: Show pagination on desktop, Show pagination on mobile, then Type. Existing IDs, values and runtime behavior are preserved. Browser verified product thumbnail/image surface uses scheme-1 (light gray), overlay white, collapse icon uses heading color; navigation buttons render btn-primary.

Pointer-focus follow-up: removed thumbnail border/expanded border state. Pointer opening focuses the non-outlined overlay region instead of placing a black focus outline on Close. Keyboard opening still focuses Close with the shared focus-visible treatment. Escape continues to bubble from the region and restore the thumbnail.

Control positioning/icon fix: Play/Pause is centered in the video surface; sound remains 20px from top/end. Set SVG hidden via toggleAttribute (SVG has no reflected HTMLElement.hidden property), with aria-pressed CSS guards so mute/unmute never render together, including initial/loop-copy markup.

Mobile layout 2: maps to 1.25 centered slides rather than two equal cards. Active card occupies roughly 80% of the viewport; previous/next cards peek at each side, keeping the desktop emphasis (inactive surfaces inset 11%) when emphasize_active is enabled. Layout 1 retains its existing full-width/no-emphasis mobile treatment. CSS fallback uses the same effective 1.25 count. Existing template/preset selection is preserved.

Browser mobile layout-2 verification at 375px: viewport 328px, active card width 260px/height 390px, inactive surface height 304px, neighboring cards visible at both edges. Temporarily selected layout 2 for QA, then restored the original homepage layout selection 1.

Playback control visibility/colors: sound button is hidden while Play reports paused; playing reveals sound. Centered Pause is hidden until hover/focus within the card; paused Play remains visible. Video-surface taps also toggle playback for touch devices. Both controls now use the section scheme background/heading tokens (dark section → dark button/light icon), rather than primary-action tokens that invert colors in scheme 3. Hover uses --color-surface.

Active autoplay correction: Theme Editor selection no longer blocks active-video autoplay (carousel slide autoplay remains paused for editing). Leaving a card clears its manual-pause flag, so returning to it autoplays when enabled. Reconcile playback after slide transition/loop normalization as well as slideChange. Offscreen/document hidden, open product overlay and reduced motion guards remain. Added behavioral regression for editor autoplay and returning to a previously paused card.

Hover polish: video controls fade opacity and background color using shared --motion-duration-standard (280ms) and --motion-ease-standard. Reduced-motion disables these transitions.

## Card-width responsive overlay and runtime cleanup — 2026-10-20

Cards now establish an inline-size container. Controls scale from 36–48px (44–48px for coarse pointers), icons 18–24px, with spacing/images/type responding to card width. Compact layouts at 300px and stacked product summaries at 220px retain wrapping for long names/options. The theme scrollbar utility owns the options scrollport; the close button and purchase actions remain outside it. Hidden overlays stay inert; Escape, focus restoration, swatch images and loading states retain their existing behavior.

Removed redundant control sizing. Guard malformed carousel markup and clean up failed initialization. Avoid repeated play/pause calls, scope overlay cleanup to its card, and cache variant-image template lookup per overlay.

Validation: 28 section/cart tests passed, JavaScript syntax and diff whitespace passed; Theme Check 0 errors/7 warnings. New regressions exercise repeated playback synchronization, no-op close and repeated swatch lookup. Five selected video resources remain in preset/homepage. Browser visual/responsive QA is not verified: browser access reports disabled, native Chrome input was interrupted.
