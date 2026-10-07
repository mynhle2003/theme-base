<!-- theme-base-sync-state: {"sha":"8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d"} -->
# Customization record: essen-theme

Theme branch: `theme/essen-theme`
Personal base at creation: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record every theme-specific change here before committing the code. During base updates, review any overlapping paths and describe the expected behavior before resolving.

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `sections/featured-product.liquid` | Variant option captions use Accent color; form labels inherit the shared form typography, including Quantity's weight 500. | Featured product option-header captions and form labels use Body small (currently Poppins 14px), regular weight 400, normal style, 1.5 line height and the inherited scheme Text color. | Match Essen Featured product Size, Color and Quantity labels. | Preserve the Featured product scoped selectors and body font/color tokens; review shared variant/form label cascade changes during updates. |
| `sections/announcement-bar.liquid` | Announcement bar provides slider/scrolling messages without dismissal. | Adds optional Show close button, a right-aligned 24px inherited-color close icon in a 40px target, responsive page margins and reserved content space; current preset enables it. | Match Essen Figma Top bar and allow customers to dismiss it. | Preserve setting, scoped CSS and close markup; review upstream announcement layout, icon and schema changes together. |
| `assets/announcement-bar.js` | Initializes and destroys slider/scrolling and discount-copy runtime. | Close destroys the instance and hides its root until reload; transfers focus to the next header control and restores hidden bars on editor section selection/load. | Accessible dismissal without persisted shopper state or background timers. | Preserve scoped close listeners, runtime cleanup and editor restoration; review upstream slider/scrolling lifecycle overlaps. |
| `sections/password.liquid` | Main renders password content from merchant blocks. | Preserve the existing password title as a translated fallback when no blocks are saved; keep main dialog, logo, footer and no-JavaScript form. | Preserve existing password composition during the approved base sync. | Keep empty-composition fallback and new merchant block support when merging. |
| `sections/text-marquee-custom.liquid` | Main uses shared layout-flow and omits space-between from mobile alignment. | Keep legacy space-between mobile alignment through the shared flow variables; migrate saved horizontal/vertical alignment to new controls. Remove only approved position_vertical. | Preserve saved composition while importing shared layout logic. | Retain additive alignment values and their CSS variable mapping when merging; never silently remap saved choices. |

| `blocks/product-variant-picker.liquid` | Show option captions controls option names and their selected values together. | Adds Show selected value directly below Show option captions, defaulting to true and visible only when captions are enabled; passes the setting to the shared picker. | Let Assen merchants show option names without the selected-value suffix. | Preserve the additive setting, conditional editor visibility and snippet parameter together when merging picker updates. |
| `blocks/_bundle-product-list.liquid` | Bundle selected variant buttons override the shared picker with heading-color background and border. | Removes the selected-color override so bundle buttons inherit the same selected input colors as Color button and Size buttons. | Keep variant selection colors consistent across this theme. | Preserve shared selected colors when merging bundle picker styling; review future selected-state overrides. |
| `snippets/variant-picker.liquid` | Global swatch style accepts Color, Variant image, Button and Dropdown; button labels contain only the option name. | Adds Assen's `color_button` style for color/swatch-backed options: a decorative color chip from the shared swatch renderer plus a visible option name, using the existing native button radio and variant/status hooks. Other options retain their picker type. | Match Essen's color-inside-button design. | Preserve the additive global schema choice, allow-list and color-option branch together; review upstream picker markup, swatch data, availability and overlay callers before merging. |
| `assets/critical.css` | Button selections use an accent background; visual swatches size from global swatch dimensions. | Only Color button uses an 8px square chip, 6px chip/name gap and 66px minimum width. Button and Color button share a selected background mixed from inherited input colors, input text color and input border color, including selected hover. Product-card metafield uses body-sm (14px), 1.5 line height, the inherited scheme Product card metafield token (--product-card-metafield-color; Figma Generated/400 default) and single-line ellipsis after price inside card details, with a fixed 4px top margin on desktop and mobile. Assen-only .price--product-card uses 14px/21px, weight 400, normal style, center cross-axis alignment and 4px gap; compare-at stays 14px with #808080, opacity 1 and line-through. Price typeface and sale color retain existing theme tokens. Button height, padding, radius, focus, wrapping and availability remain driven by the existing foundation. | Match Essen desktop/mobile color buttons while keeping Theme Settings functional. | Preserve scoped Color button geometry and shared Button/Color button selected colors; review upstream button/focus/status rules and responsive overrides together with the picker markup. |
| `blocks/product-buy-buttons.liquid` | Buy buttons use a 12px default gap between purchase controls/actions. | Uses a 20px desktop/mobile default and invalid-value fallback, while rendering existing merchant gap and padding overrides. | Match Essen's quantity-above-Add-to-cart composition. | Preserve the 20px Liquid/schema/CSS defaults together; review upstream form, child-block and gap mapping changes before merging. |
| `assets/product-information.css` | Quantity and Add to cart share a two-column row on desktop/mobile; quantity is capped at 12rem. | Stacks quantity above a full-width Add to cart on desktop/mobile, caps quantity at 128px, adds an 8px label/control gap and uses a 20px default purchase/action gap. Quantity's inner heights account for the border so its outer height matches the inherited form height. Typography, colors, radius, focus and custom quantity styles use existing theme tokens/settings. | Match Essen Featured product desktop/mobile Buy buttons layout. | Preserve the single-column purchase grid, 128px quantity cap and border-aware height; review upstream purchase layout/mobile overrides and keep merchant gap overrides functional. |
| `blocks/countdown-timer.liquid` | Countdown unit widths are measured from content; layout uses rem gaps/padding, minimum heights, muted labels and generic label tracking. | Essen With labels uses 112px cards/16px gaps on desktop and 72px cards/12px gaps on mobile, 16px vertical padding, 10px/15px labels with 2.4px tracking and full inherited text color; numbers use 1.2 line-height and -0.8px tracking. CSS owns labelled widths; other styles retain measured widths. | Match Essen desktop/mobile countdown design with explicit px geometry on this theme branch. | Preserve labelled-card CSS and runtime width exclusion; review upstream layout/typography/runtime overlaps before merging. Keep editor color and number-size settings functional. |
| `sections/slideshow.liquid` | Progress bar segments stretch across the content width, use a 4px gap, translucent tracks and a taller active segment, with shared desktop/mobile bottom offsets. | Only Progress bar uses Figma's 50px × 2px segments, 16px gap, solid #666 tracks, active-slide heading color fill and 40px visual bottom offset on desktop/mobile. Each segment retains a 24px click target; existing position settings and autoplay runtime remain in use. | Match Essen's Slideshow Segment progress pagination without changing Bullets, Numbers or other carousels. | Preserve scoped progress-bar styles; review upstream pagination markup/CSS and autoplay changes, then verify responsive alignment, keyboard focus, click targets, single-slide hiding and progress fill. |
| `blocks/icon.liquid` | Personal main accepts Icon width from 6px on desktop and 8px for the mobile override; smaller values fall back to 24px. | Assen accepts 4–100px for both desktop and mobile Icon width in schema and Liquid validation; default remains 24px. | Allow small decorative icons and custom SVG separators in this theme. | Preserve the 4px minimum in both schema ranges and Liquid guards; review upstream Icon sizing/mobile changes before merging and verify 4px, 100px, defaults and invalid-value fallbacks. |
| `sections/icon-with-text-custom.liquid` | No icon-with-text-custom section in personal main. | Custom icon/text section renders editable Grid blocks, supports page/full-width containers, optional background color or responsive cover image, and scoped inline CSS for alignment, content gap and vertical padding with optional mobile overrides below 768px. | Provide the Assen homepage icon-and-text composition with merchant-editable layout and background controls. | Preserve this local section and theme preset values; review changes to shared Grid/block contracts, container widths, color schemes and spacing before merging, and verify desktop/mobile layout and Theme Editor block behavior. |
| `sections/zoom-image-banner.liquid` | No zoom banner section in personal main. | Custom editorial image/text overlay matching Essen Figma desktop/mobile, 80px vertical spacing, shared Group/Header/Eyebrow/Heading/Button blocks with content sizing owned by Group; foreground blocks own the default scroll zoom runtime. | Recreate the referenced custom section on the Assen homepage after Featured product. | Keep theme composition and image selections; review upstream changes to shared block contracts and background media before merging. |
| `blocks/scrolling-image.liquid` | No scrolling-image block in personal main. | Editable foreground image using Image-compatible content/link, desktop/mobile ratio presets and custom ratios, fit/fill/custom width, width limits, radius and padding; retains the 550px cap, 6:7 ratio, 10% overlay and block-owned scroll reveal at a fixed 12% zoom. Existing foreground settings migrated in the homepage; section preset uses block defaults. | Match the Figma foreground geometry without changing the global Image kernel. | Preserve this local block; reconcile shared image snippet changes and validate crop, alt text and editor attributes. |
| `assets/section-zoom-image-banner.css` | No dedicated zoom banner stylesheet. | Layers image and content in one grid, clips foreground zoom, inherits theme typography/buttons/schemes and mobile margins. | Match desktop/mobile layout while preserving shared tokens. | Keep scoped styles; check container and block class changes from main at desktop/mobile widths. |
| `assets/section-zoom-image-banner.js` | No dedicated zoom banner runtime. | Block-local `zoom-foreground-image` custom element reveals the foreground clip-path from 0% to 100% as the image enters the viewport and its center reaches viewport center, easing scale from 1.12 to 1. Uses native scrolling, time-based damping, visibility gating, reduced motion, editor selection reset and listener/observer cleanup. | Match the requested entry-to-center reveal and smooth scroll interaction across wheel, touch, keyboard and high refresh rates. | Preserve native scroll behavior; verify lifecycle and motion preferences when main changes runtime conventions. |

| `blocks/blog-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/carousel.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25). Desktop next-slide preview and a new independent mobile option fit N complete items plus 2/7 of the next item inside the viewport, with a matching pre-JS layout; preview is disabled when all items fit. | Expose Essen image ratios and match the contained carousel preview in Figma node 46028:7301. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop, contained preview, gap, insufficient items and editor reloads. |
| `assets/carousel-block.js` | Carousel preview uses shared overflow CSS and integer columns; other sections may opt into centered preview. | Only the Essen Carousel opt-in uses fractional slidesPerView (N + 2/7), independently per breakpoint and only with more slides than columns; retains controls, pagination and editor lifecycle, using the existing cloned manual loop to support fractional views with few slides. | Show a partial next item within the carousel bounds. | Review upstream initialization, breakpoint, loop and lifecycle changes; preserve other section callers and verify preview off/on, insufficient slides and resize. |
| `snippets/collection-card-render.liquid` | Main shared collection card renderer validates the common ratio values and maps them to CSS aspect ratios. | Adds the Assen-only `ratio_5_4` option to the renderer allow-list and maps it to `1.25`, shared by both collection-card adapters. | Preserve the theme's 5:4 collection-card crop while adopting main's shared render kernel. | Keep the 5:4 schema choice in both adapters aligned with the allow-list and 1.25 mapping; review main renderer changes together with both callers. |
| `blocks/collection-thumbnail.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/first-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-card.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image-comparison.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/image.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/press-item.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/product-callout-gallery.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `blocks/video.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `sections/image-text-stacked-bands.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/_overlay-media-ratio.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/css-variables.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. Navigation Rounded additionally maps to 6px instead of the shared 8px rounded token. Accepts Color button in the global swatch-style token mapping. Emits the merchant-editable Product card metafield color for root and each color scheme, defaulting to Figma Generated/400 (#999999). | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. Preserve the navigation-only 6px mapping; keep other radius tokens unchanged. |
| `snippets/image-ratio-value.liquid` | Existing media ratio presets do not support landscape 5:4; collection thumbnails retain legacy portrait 2:3. | Adds validated 5:4 rendering (1.25); collection thumbnails also add explicit 4:5 without changing legacy values. | Expose Essen theme image ratios in the editor. | Preserve additive options and their Liquid/CSS mappings; review overlapping ratio logic from main and verify desktop/mobile crop. |
| `snippets/product-card-metafield.liquid` | No configurable product metafield row in cards. | Resolves namespace.key on the card product; Shopify formats supported text/scalar values, then output is escaped. Missing/invalid/unsupported values emit no row. | Theme-specific material text from product data. | Preserve key validation, product-specific lookup, escaping and empty-state behavior when adopting upstream card changes. |
| `snippets/product-card.liquid` | Shared product card supports media ratios, vendor/type, title, price and swatches. | Retains Assen 5:4 support and conditionally renders the configured product metafield inside card details immediately after price, with a fixed 4px top margin. | Match Essen material text and keep per-product values editable in Admin. | Preserve additive ratio support and the show/key contract; review upstream content ordering, product context and renderer changes. |


| `blocks/metafield.liquid` | No key-based product text block. Text uses merchant-entered rich text. | Reads namespace.key from closest.product; renders escaped text or Shopify formatted values with all Text presentation controls and scoped CSS. | Replace Italian Fleece with product data while preserving the preset. | Preserve product context, missing-value hiding, text escaping and responsive Text controls; review overlap with future base metafield blocks. |
| `blocks/_product-media.liquid` | Desktop offers thumbnail rails/static grids; mobile offers one-image slider or thumbnails. | Adds Carousel 2 items to desktop and mobile layout with validated Liquid values and mobile pagination controls. Main gallery controls use the theme Figma long-arrow SVG. | Match Featured product Essen desktop/mobile media composition. | Preserve additive layout values and guards; review upstream media markup, variant filtering and schema changes. Preserve the long-arrow control rendering. |
| `assets/product-media.js` | Carousel shows one media except the existing Quick Add strip. | Two-item modes show up to two visible media, hide thumbnails and hide controls/pagination when there is no overflow; reuse Swiper, variant filtering, zoom and breakpoint lifecycle. | Enable two-image swiping and desktop arrows without changing other modes. | Review upstream gallery initialization/filtering/lifecycle changes and verify zero/one/two/many media and breakpoint rebuilds. |
| `assets/product-media.css` | Desktop non-thumbnail modes render static grids; mobile slider hides thumbnails. | Two-item desktop mode retains the Swiper flex rail and arrows; both two-item modes hide thumbnails and offer a horizontal two-item fallback without JS. Main product images use a 5:7 frame with cover cropping on desktop/mobile, excluding overlay galleries. | Preserve carousel geometry and access before runtime initialization; apply the owner's revised main-image ratio. | Preserve scoped two-item selectors and exclusions from static rules; verify other gallery layouts and preserve the 5:7 main-image frame after upstream CSS changes. |

| `snippets/carousel-navigation-icon.liquid` | Long arrow uses a 24px viewBox and generic stroked paths. | Long arrow uses the exact two filled paths from the Figma 14px arrow-left asset, mirrors the next direction and inherits currentColor. Other icon options retain their paths. | Match Essen navigation SVG. | Preserve the long-arrow geometry, 14px size, inherited color and directional mirroring when merging upstream icon changes. |

### 2026-10-06 — Selected value visibility

- The Product variant picker block adds **Show selected value** immediately below **Show option captions**. It defaults to enabled to preserve existing rendering and is hidden in the editor when captions are disabled.
- `snippets/variant-picker.liquid` accepts `show_selected_value`; explicit false omits the selected-value span and its colon. Disabling captions always hides the value, while the accessible option legend and size guide remain available. Other snippet callers retain the existing enabled default.
- The existing variant JavaScript checks for the selected-value node before updating it, so no new runtime lifecycle is needed. Preserve this snippet behavior as Assen-only custom alongside the Color button implementation.

### 2026-10-06 — Color button swatch style

- References: Essen desktop `46002:6203` and mobile `46240:8754`, inspected through authenticated Figma Dev Mode. Desktop pill `46120:6238` and mobile pill `46240:8757` use 44px/40px inherited form height, 20px horizontal padding, 66px minimum width and a 6px chip/name gap; mobile chip `46240:8758` is 8 × 8px. Groups wrap with a 12px reference gap; the existing Variant picker item gap setting remains authoritative.
- Theme Settings → Swatches → Swatch style adds **Color button** (`color_button`). Owner selected `color_button` in the theme's current saved settings. Schema defaults and named presets are retained. Swatch width/ratio and selected border/underline settings apply to visual-only swatches; Color button follows the button dimensions and selected background instead.
- Owner requested the Color button border on the outer `variant-picker__choice`, following `--input-border-color` in normal, hover and selected states. The inner label has no border; its height accounts for the outer border to retain global desktop/mobile dimensions. Selected background and keyboard focus remain visible.
- Resolve `--variant-border-width` on the same Solid/Outline surface as `--input-border-width`; the root alias otherwise inherits a computed 0px before the body applies Outline, preventing Forms → Outline thickness from reaching variant controls. Preserve this mapping when merging foundation form styles.
- Border fix verified on the running local storefront: all four Color button choices compute input width = variant width = outer border width = 1px, with input border color `rgb(230, 230, 230)`. Theme Check passes with no errors and 34 warnings.
- Owner set Forms → Outline thickness to a minimum of 1px (range 1–3px); Liquid normalizes legacy values below 1 to 1px. Solid still uses its existing zero-border style.
- Owner aligned the selected background, readable text color and border color for global Swatch style Button with Color button: background uses the same inherited input-color mix, text uses `--input-text-color`, and border uses `--input-border-color`, including hover while selected. Button keeps its existing border width, placement and native interaction.
- Hover correction: plain `variant-picker__button` labels retain `--input-border-color` when hovered before selection as well as while selected, matching the Color button outer border. The scoped override excludes visual swatch labels and preserves keyboard focus, border width and availability states.
- Follow-up reference: Figma Input `46002:6206`, Size group `46002:6208`. The first size pill uses Variant/Bg Component `#F2F2F2`; Variant/Border resolves to `#E6E6E6`. Plain variant buttons now share Color button selected colors regardless of the global swatch style, including Size when `color_button` is selected. They use a 66px minimum width and centered labels. Bundle-specific selected colors are removed so the shared rule remains authoritative. Height, padding and border colors continue to follow merchant settings.
- Color rendering reuses Shopify option-value swatch colors and the existing color-name fallback. Native radios, accessible labels, disabled/sold-out state, variant media and product form updates use the existing picker implementation; no new JavaScript lifecycle is introduced.
- Validation: customization coverage and `git diff --check` pass; Theme Check inspects 323 files with no errors and 34 warnings. Live storefront and Theme Editor behavior have not been exercised for this option.

### 2026-10-06 — Buy buttons layout

- References: Essen Figma desktop Featured product `46002:6185` and mobile `46240:8732`; inspected purchase descendants through authenticated Dev Mode. Both place labelled quantity above a full-width Add to cart. Mobile Quantity `46240:8772` uses the global 40px form height; desktop Add to cart `46002:6216` uses the global 44px button height. The mobile quantity frame measures 128px wide in the 100% canvas view, with a 20px gap before Add to cart.
- Purchase layout is a single column at both breakpoints; quantity remains 128px wide or narrower when the parent is narrower. Existing form/variant/quantity runtime and static child block attributes continue to own commerce behavior.
- Buy buttons defaults to a 20px desktop/mobile gap; explicit merchant values still override it. Quantity's schema default label and the homepage instance are set to `Quantity`; merchants can edit or clear the label. This label/preset change is configuration rather than custom implementation.

### 2026-10-05 — Navigation Rounded and Figma arrow

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, navigation `46132:465`; inspected authenticated Dev Mode properties: Rounded radius 6px, arrow asset 14 × 14px, 12px padding. Arrow source `46136:385` supplies the two exact filled SVG paths.
- `snippets/css-variables.liquid` maps only Navigation Rounded to 6px. Square, Slightly rounded, Pill and all other shared rounded tokens retain their current mappings.
- `snippets/carousel-navigation-icon.liquid` replaces `long_arrow` with the Figma SVG geometry. Color inherits the control's currentColor; Next mirrors the left arrow. The source paths already encode thickness and rounded endpoints, so this asset retains Figma geometry rather than using global stroke width.
- Product media main-gallery controls select `long_arrow` to use the same asset. Other existing long-arrow consumers receive the shared replacement; Chevron and Arrow choices remain available.
- Current theme settings and the saved theme preset select `radius_navigation: rounded`. This selection is configuration, not custom implementation.

### 2026-10-06 — Product media main-image ratio revised to 5:7

- Owner revised the fixed main-image frame from 4:5 to 5:7 on desktop and mobile. Only the main gallery image selector in `assets/product-media.css` changes; cover cropping remains enabled.
- Thumbnail ratio settings, videos/models, lightbox and Quick Add/Quick View overlay ratios retain their existing behavior. Preserve the revised 5:7 frame when reviewing upstream gallery CSS.

### 2026-10-05 — Product media main-image ratio

- Owner request: main product images in Product media use a custom 4:5 ratio on this theme.
- `assets/product-media.css` frames main image figures at `4 / 5` and fills them with `object-fit: cover` at desktop/mobile widths. This applies to Featured product and the product-page Product media block; thumbnails, videos/models, lightbox and Quick Add/Quick View overlay ratios retain their existing contracts.
- Review upstream main-image and gallery CSS changes before merging; preserve the frame and cover crop. No schema or preset setting is added for this fixed theme customization.

### 2026-10-05 — Featured product Carousel 2 items

- References: Figma `v6iKvP4OuW3y0A9bbxel5U`, desktop `46002:6185`, mobile `46240:8732`; both visually inspected. Desktop shows two adjacent media with previous/next controls; mobile shows two adjacent media above the base progress bar.
- Plan: existing homepage Featured product supplies its selected product to the static Product media block. The block owns desktop/mobile layout; shared Swiper runtime owns movement and existing zoom/variant handling. No new section, block tree, data source or global design token is needed.
- Adds `carousel_two_items` to Desktop layout and mobile Layout style. Gap continues to use the block's desktop/mobile controls. Existing layout defaults remain unchanged.
- Everyday uniform preset and existing homepage instance select the new modes, disable next-slide preview, and select `mobile_pagination_type: progress_bar`. Pagination implementation remains unchanged from base; preset/template settings and locale labels are configuration, not custom code.
- Scope stays on `theme/essen-theme`. Preserve the pre-existing homepage blog `max_posts: 3` edit. No store upload, commit or push is included.
- Validation: Theme Check passed with zero errors (35 existing warnings), `git diff --check` and `check-custom essen-theme` passed. Production CSS/Swiper/runtime fixture verified a 1050px desktop rail with 521px slides and working Next/Previous controls; at 375px mobile the 343px rail shows two 167.5px slides, an existing 2px progress bar, hidden arrows and no page overflow. Automated gallery tests cover breakpoint rebuilds, hidden/one/two/many media, pagination and desktop pointer behavior. Live Shopify Theme Editor add/duplicate/save/reload was not exercised.

### 2026-10-05 — Zoom image banner

- Reference: Essen custom `sections/zoom-image-banner.liquid`; Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop `46136:5694`, mobile `46240:8812`.
- Placement: homepage immediately after `featured_product`. Both top-level blocks are editable; Group contains Header (Eyebrow + Heading) and Button. Maximum two top-level blocks. No resource context or app slot is required.
- Section owns composition, external spacing, background and scroll behavior; foreground block owns image source/ratio/width/overlay; shared blocks and Theme Settings own typography and buttons.
- Figma source images were converted to AVIF and uploaded to `layouthub-template-v2.myshopify.com` Files: `assen-zoom-background.avif` and `assen-zoom-portrait.avif`. Only the homepage instance selects the uploaded image picker references; the reusable section preset leaves all image pickers blank. No image assets are committed.
- Empty media uses the shared image placeholder. JavaScript disabled, reduced motion and selected editor blocks retain the full visible image at scale 1. Content stays in document order and the CTA remains keyboard accessible.
- Preset/template composition is recorded for context and is not classified as custom implementation.
- Reusable preset explicitly sets Group backdrop blur to `0` and height to `fit`, with no selected images. The homepage retains its AVIF selections.
- Store operation ledger: uploaded background MediaImage `46371151282475` and foreground MediaImage `46371153019179`; synchronized only the two new Liquid files, CSS/JS assets and `templates/index.json` to development theme `191894126891`. Schema uploaded before the initial homepage template. Subsequent corrections stayed within these five files. Final remote code, homepage instance and order were read back and matched local files. Existing homepage differences were only Shopify removing empty `block_order` arrays. Rollback scope is this homepage instance and these custom files; uploaded Files remain owned by the store.
- Validation: Theme Check passed with no errors (35 existing warnings); JavaScript syntax and `git diff --check` passed. Motion tests cover entry/center endpoints, reverse scrolling, instance isolation, reduced/disabled motion, editor selection and disconnect cleanup. Storefront inspection confirmed both Shopify CDN images, desktop 550 × 641.66px, mobile 343 × 400.16px, 80px vertical padding, 40/32px headings and 44/40px buttons. Preview console had no errors.
- Whole-branch `check-custom essen-theme` still reports the pre-existing `sections/icon-with-text-custom.liquid` as undocumented. All four new implementation files are recorded above. Theme Editor add/duplicate/save lifecycle was not exercised manually; selection and teardown were verified in the runtime tests.

### 2026-10-05 — Icon width minimum (theme custom)

- Owner request: allow a minimum Icon width of 4px specifically for `theme/essen-theme`.
- Implementation: `blocks/icon.liquid` changes desktop/mobile range minima and matching Liquid lower-bound guards to 4px. Maximum 100px, step 1px, default 24px and mobile inheritance stay as before. No changes to the shared icon snippet are required because this block supplies size through its own scoped CSS variables.
- Preset/template SVG selections are configuration; Scrolling Text Images remains 6px and Collection list remains 12px. Changing the minimum does not resize existing icons.
- During base updates, review this implementation overlap rather than replacing the theme block with main's version.

### 2026-10-05 — Slideshow Progress bar pagination

- Reference: Figma file `v6iKvP4OuW3y0A9bbxel5U`, desktop Slideshow `46002:5727` / pagination `46002:5738`, mobile Slideshow `46240:8475` / pagination `46240:8481`; both use the Segment progress component.
- Scope: local CSS in `sections/slideshow.liquid`, only for `pagination_type = progress_bar`. Three slides produce a centered 182px group (three 50px bars and two 16px gaps). Bars may shrink in narrow containers; desktop/mobile position settings continue to align the group.
- Visual tracks are 2px high, pill shaped and #666 (Figma Variant/Bg Bar). The fill inherits the active slide's heading color through the existing control scheme/runtime and existing autoplay clock. RTL fill grows from the right.
- All custom progress pagination dimensions use explicit `px` units as requested, so their Figma measurements do not depend on the root font size.
- The visual bars sit 40px above the slideshow edge on both breakpoints. Transparent 24px-high buttons expand pointer/touch access without changing that visual position; existing labels, aria-current, focus outline, clicks and single-slide hiding are preserved.
- No schema, template, shared carousel CSS or JavaScript changes are required. During future base updates, review the section implementation overlap rather than overwriting the theme-specific pagination.
- Validation: Theme Check passed with no errors (35 existing warnings); `git diff --check` and `node theme-base check-custom essen-theme` passed. A local browser fixture using the production stylesheet, Swiper and Slideshow modules verified 50px × 2px bars, 16px gaps and a 40px visual bottom offset at 1920px desktop and 375px mobile, with no mobile overflow. Click and Enter changed the active slide/aria-current, and keyboard focus retained a visible outline. Shopify Theme Editor lifecycle was not exercised in this CSS-only change; the store preview supervisor was stopped during validation.

### 2026-10-05 — Countdown timer Essen appearance

- Reference: Essen Figma desktop group `46110:5940`, Time `46110:5941`, number `46110:5942`, label `46110:5943`; mobile group `46240:8712`, Time `46240:8713`, number `46240:8714`, label `46240:8715`.
- With labels cards: desktop 112px wide, 16px gaps, 496px group; mobile 72px wide, 12px gaps, 324px group. Both have 16px vertical padding, no horizontal padding or number-to-label gap. Cards shrink equally if the available parent is narrower.
- Number typography retains the block's font-size setting and heading family; the homepage's existing H2 setting supplies Poppins 40px desktop/32px mobile. Line-height is 1.2 with -0.8px tracking. Labels use the body family, 10px size, 15px line-height, 2.4px tracking, uppercase and full inherited text color. Existing homepage custom colors supply white text and #333 cards; radius/background controls remain functional.
- CSS owns With labels widths; `syncUnitWidth` skips content measurement for this style so font loading, ticking and resize cannot override responsive card sizing. Timer modes, localized labels, announcements and custom-element lifecycle retain their existing behavior. Inline and inline-superscript retain their own appearance.
- Scope: custom implementation only in this theme's `blocks/countdown-timer.liquid`; no changes to personal main or shared typography. Countdown's content Group uses `width: fit` in both the section preset and homepage template, as requested. These composition settings are configuration rather than custom implementation.
- Validation: Theme Check passed with zero errors (35 warnings), JavaScript syntax check, `git diff --check` and `check-custom essen-theme` passed. A local fixture using the block's production CSS/runtime verified 112 × 95px cards at 1920px; 72 × 85.39px cards, 12px gaps and 324px group at 375px; equal shrinking to 63px cards at 320px without page overflow. Live Shopify Theme Editor was not exercised.

### 2026-10-05 — Essen media ratio options and presets

- Owner request: audit ratio options on this theme branch, add missing 4:5 and 5:4 choices, and align the homepage presets with the inspected Figma desktop/mobile. Image/video media selectors are covered; color/variant swatch geometry is outside this image-crop request.
- Existing `portrait` already maps to 4:5, so it is retained. Add `ratio_5_4` with 1.25 rendering to media selectors; numeric Collections with tabs uses `1.25`. Collection thumbnails retain portrait 2:3 and gain explicit `ratio_4_5` and `ratio_5_4`. Numeric custom ratios in Scrolling image remain available.
- Render changes include shared image/overlay ratio resolvers, global product-card CSS variables and crop dimensions, image-card/collection-thumbnail CSS, and desktop/mobile Liquid mappings and validation. Existing `_product-media` customization additionally supports 5:4 thumbnail ratios. Schema-only consumers and presets are configuration, not implementation customizations.
- Figma evidence: desktop Featured collection 438 × 547.5; mobile 165.5 × 206.88; collection card desktop 453 × 566.25 and mobile 169.5 × 211.88. All use 4:5. The large desktop collection composition measures 741 × 950 (approximately 4:5); the first card fills the row height determined by the second card.
- Following the owner correction, the first Image card uses desktop `fill` in both the existing homepage and reusable section preset; the second card stays desktop 4:5. Both mobile cards remain 4:5. Global product-card ratio and Collection list already select portrait 4:5. Blog remains 4:3, Gallery and Shop the look large image remain 1:1, and Zoom foreground remains 6:7. Slideshow uses existing viewport height controls rather than a crop-ratio selector.
- Scope: `theme/essen-theme`; preserve pre-existing Carousel 2 items, product-media controls and blog max-posts changes. No commit/push included.
- Validation: 26 media selectors expose both requested ratios without duplicate values; 229 Liquid schemas and edited JSON validate. 54 actual Liquid render checks pass for desktop/mobile 4:5, 5:4 and existing square values; 27 focused overlay/banner tests pass. Theme Check passes with zero errors and 35 existing warnings; diff whitespace check passes.
- Existing `theme-settings` Footer social-link test also fails on a HEAD-only fixture and is unrelated to ratio changes. Whole-branch custom check currently reports concurrent, non-ratio edits without records: `assets/carousel-block.js`, `assets/slideshow.js`, `blocks/blog-list.liquid`, `blocks/collection-list-items.liquid`, `blocks/collection-tab.liquid`, `blocks/product-list.liquid`, `sections/hotspot-full-width-carousel.liquid`, `snippets/product-collection-grid.liquid`, `snippets/swiper-carousel.liquid`. All implementation paths changed for ratio support are recorded above. Live Theme Editor lifecycle was not exercised in this local schema/preset change.

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |
| `d887dac2d2f637e2aae15f59272634f8fd3d1e32` | `blocks/collection-card.liquid`, `sections/cart.liquid`, `sections/collections.liquid`, `blocks/product-variant-picker.liquid`, `templates/cart.json`, `templates/list-collections.json` | Dùng implementation collection-card/cart/collections từ main; giữ 5:4 của Assen trong renderer dùng chung; nhập composition defaults đã duyệt; xóa `color_option_display`, `grid_item_width`, `grid_gap` cùng giá trị đã lưu trong preset/template theo xác nhận riêng. Sau đồng bộ, bỏ header `Swatches` mồ côi và khớp options `swatch_style` với main theo yêu cầu bổ sung. | Theme owner, 2026-10-06 |

## Base sync history

### 2026-10-07 — Update from personal main

- Previous main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Updated through main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Main commits included: 2
- Included main commits:
  - `36b9ab04bcbb59ea3073666812dcfa5244f4c15c` — chore(base): update base with 112 upstream commits through bedb4bd5
  - `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d` — fix(sync): preserve presets for used and custom theme sections
- Change summary:

```text
assets/carousel-block.js                           |  11 +-
 assets/cart-drawer.js                              | 155 +++-
 assets/component-overlay.css                       |  80 +-
 assets/component-search-suggestions.css            |  35 +
 assets/critical.css                                | 233 +++++-
 assets/header.js                                   |  11 +-
 assets/password-page.js                            |  27 +
 assets/product-buy-buttons.js                      |  29 +
 assets/product-card-variants.js                    |   8 +
 assets/product-media.js                            |  10 +-
 assets/quick-add.js                                |   8 +-
 assets/quick-view.js                               |   8 +-
 assets/recently-viewed.js                          |  54 ++
 assets/search-page.js                              |  56 ++
 assets/search-suggestions.js                       |  96 +++
 assets/variant-picker.js                           |  18 +-
 blocks/_collection-count.liquid                    |   4 +-
 blocks/_collection-filter.liquid                   |  36 +-
 blocks/_collection-sort.liquid                     |  28 +-
 blocks/_collection-toolbar.liquid                  |   9 +-
 blocks/_search-input.liquid                        | 262 ++++++
 blocks/_search-products.liquid                     | 148 ++++
 blocks/_search-results.liquid                      | 155 ++++
 blocks/banner.liquid                               |  10 +-
 blocks/blog-grid.liquid                            |  51 +-
 blocks/blog-list.liquid                            |   6 +-
 blocks/carousel.liquid                             |  29 +-
 blocks/collection-list-items.liquid                |   8 +-
 blocks/collection-thumbnail.liquid                 |  12 +-
 blocks/collections-with-tabs-item.liquid           |   4 +-
 blocks/comparison-table.liquid                     |   2 +-
 blocks/contact-field.liquid                        |   7 +-
 blocks/contact-form.liquid                         |  43 +-
 blocks/eyebrow.liquid                              |   3 +
 blocks/faq_category.liquid                         |   6 +-
 blocks/faq_item.liquid                             |  30 +-
 blocks/gallery-strip-overlay-group.liquid          |   2 +-
 blocks/header.liquid                               |   6 +-
 blocks/heading.liquid                              |  24 +-
 blocks/location-item.liquid                        |   2 +-
 blocks/marquee.liquid                              |   4 +-
 blocks/previous-and-next-posts.liquid              |   2 +-
 blocks/product-buy-buttons.liquid                  |   3 +
 blocks/product-list.liquid                         |   6 +-
 blocks/slideshow-slide.liquid                      |  33 +-
 blocks/text.liquid                                 |   5 +-
 blocks/timeline-list.liquid                        |  10 +-
 blocks/timeline-slide.liquid                       |   2 +-
 docs/audits/404-reference-2026-10-06.md            |  48 ++
 docs/audits/about-us-reference-2026-10-06.md       |  50 ++
 docs/audits/contact-reference-2026-10-06.md        |  48 ++
 docs/audits/faq-reference-2026-10-06.md            |  73 ++
 docs/audits/marquee-parallax-2026-10-06.md         |  13 +
 docs/audits/outbound-base-sync-2026-10-06.md       |   8 +
 docs/audits/pages-outbound-base-sync-2026-10-06.md |  36 +
 docs/audits/quick-add-media-zoom-2026-10-06.md     |  42 +
 .../audits/search-outbound-base-sync-2026-10-06.md |  25 +
 docs/audits/search-reference-2026-10-06.md         | 105 +++
 docs/qa/performance-regressions-2026-10-06.md      |  17 +
 docs/theme-customization-policy.md                 |   5 +-
 layout/password.liquid                             |   8 +-
 layout/theme.liquid                                |  23 +-
 locales/en.default.json                            |  18 +-
 locales/en.default.schema.json                     |  42 +-
 scripts/theme-base-sync.cjs                        | 151 +++-
 sections/404.liquid                                | 212 ++++-
 sections/announcement-bar.liquid                   |  33 +-
 sections/blog-posts.liquid                         | 199 +----
 sections/bundle-builder.liquid                     |  12 +-
 sections/cart-drawer.liquid                        |  13 +-
 sections/collection-list-thumbnails.liquid         |  20 +-
 sections/collection-list.liquid                    | 176 +---
 sections/collection-tabs.liquid                    |  18 +-
 sections/collections-with-tabs.liquid              |  19 +-
 sections/collections.liquid                        |   2 +-
 sections/comparison-table-custom.liquid            |   2 +-
 sections/contact-form-custom.liquid                |   4 +-
 sections/email-signup-dual-image.liquid            |   6 +-
 sections/email-signup-form.liquid                  |   8 +-
 sections/email-signup-single-image.liquid          |   6 +-
 sections/faq-image-accordion.liquid                |   6 +-
 sections/featured-blog-posts.liquid                | 142 +---
 sections/featured-collection-banner.liquid         |   8 +-
 sections/featured-collection.liquid                | 247 +-----
 sections/gallery-carousel.liquid                   |   3 +-
 sections/gallery-custom.liquid                     |   3 +-
 sections/gallery-full-width-strip.liquid           |   2 +-
 sections/header.liquid                             |  18 +-
 sections/hotspot-full-width-carousel.liquid        |   4 +-
 sections/hotspot-gallery.liquid                    |  14 +-
 sections/hotspot.liquid                            |   9 +-
 sections/icon-text-cards.liquid                    |   3 +-
 sections/icon-text-inline.liquid                   |   3 +-
 sections/image-comparison-custom.liquid            |   2 +-
 sections/image-comparison-split-custom.liquid      |   6 +-
 sections/image-text-card-grid.liquid               |  23 +-
 sections/image-text-split-layout.liquid            |   6 +-
 sections/location-list.liquid                      |  26 +-
 sections/location-map.liquid                       |  26 +-
 sections/parallax.liquid                           |   2 +-
 sections/password.liquid                           | 222 ++++-
 sections/quick-add.liquid                          |  11 +-
 sections/quick-view.liquid                         |  11 +-
 sections/recently-viewed-card.liquid               |  42 +
 sections/related-posts.liquid                      |   8 +-
 sections/rich-text.liquid                          |   6 +-
 sections/scrolling-cards.liquid                    |  12 +-
 sections/scrolling-text-star-separator.liquid      |  40 +-
 sections/search-overlay.liquid                     |  44 +-
 sections/search.liquid                             | 549 ++-----------
 sections/shop-the-look-section.liquid              |   2 +-
 sections/testimonial-carousel.liquid               |  15 +-
 sections/testimonials-background-custom.liquid     |   9 +-
 sections/testimonials-horizontal-custom.liquid     |  11 +-
 sections/text-marquee-custom.liquid                | 322 +++++---
 sections/timeline.liquid                           |  28 +-
 snippets/css-variables.liquid                      |  25 +-
 snippets/deferred-stylesheet.liquid                |  11 +
 snippets/form-field.liquid                         |   2 +-
 snippets/heading-size-token.liquid                 |  18 +-
 snippets/product-card-quick-add.liquid             |  12 +-
 snippets/product-card-swatches.liquid              |   3 +
 snippets/product-card.liquid                       |   3 +
 snippets/search-filters.liquid                     | 101 +++
 snippets/search-query-fields.liquid                |   8 +
 snippets/section-content-slot.liquid               |  13 +
 snippets/slideshow-image.liquid                    | 121 +++
 snippets/variant-picker.liquid                     |  12 +
 templates/404.json                                 |  12 +-
 templates/index.json                               |   9 +-
 templates/index.spinel-sync.json                   |  12 +-
 templates/page.about-us.json                       | 891 +++++++++++++++++++++
 templates/page.contact.json                        |   4 +-
 templates/page.faqs.json                           | 633 +++++++++++++++
 templates/password.json                            |  10 +-
 templates/product.json                             | 330 +++++++-
 templates/search.json                              |   9 +-
 tests/cart-drawer-add.test.cjs                     |  53 +-
 tests/faq-item.test.cjs                            |  35 +
 tests/heading-size-sync.test.cjs                   |  42 +
 tests/overlay-product-modules.test.cjs             |  26 +
 tests/product-media-pointer.test.cjs               |  44 +
 tests/recently-viewed.test.cjs                     |  56 ++
 tests/search-history.test.cjs                      |  35 +
 tests/search-page.test.cjs                         |  84 ++
 tests/search-suggestions.test.cjs                  |  52 ++
 tests/section-content.test.cjs                     | 111 +++
 tests/slideshow-image.test.cjs                     |  66 ++
 tests/theme-base-sync.test.cjs                     |  81 ++
 149 files changed, 6181 insertions(+), 1861 deletions(-)
```


### 2026-10-06 — Update from personal main

- Previous main commit: `89321f5ebbd78e1144eae1a31adbef4679bd9cd3`
- Updated through main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Main commits included: 1
- Included main commits:
  - `d887dac2d2f637e2aae15f59272634f8fd3d1e32` — chore(base): update base with 34 upstream commits through 8169f12c
- Change summary:

```text
assets/accordion-details.js                        |  23 +-
 assets/cart-drawer.js                              |  21 +-
 assets/cart-page.css                               |  15 +
 assets/cart-page.js                                | 155 ++++++++++
 assets/cart-recommendations.js                     |  67 +++++
 assets/component-collection-card.css               |  88 ++++++
 assets/critical.css                                |   8 +
 assets/gift-card.css                               |  29 ++
 assets/gift-card.js                                |  57 ++++
 blocks/_bundle-product-list.liquid                 |  34 +--
 blocks/_cart-content.liquid                        | 139 +++++++++
 blocks/_cart-order-summary.liquid                  | 195 +++++++++++++
 blocks/_cart-summary.liquid                        |  49 ++++
 blocks/_collections-list.liquid                    | 202 +++++++++++++
 blocks/_collections-page-card.liquid               | 315 +++++++++++++++++++++
 blocks/cart-free-shipping.liquid                   | 169 +++++++++++
 blocks/cart-items.liquid                           | 170 +++++++++++
 blocks/cart-order-note.liquid                      | 214 ++++++++++++++
 blocks/cart-shipping-estimator.liquid              | 214 ++++++++++++++
 blocks/collection-card.liquid                      | 262 ++---------------
 blocks/pagination.liquid                           |  21 +-
 blocks/product-list.liquid                         |  56 +++-
 blocks/product-variant-picker.liquid               |  23 --
 docs/audits/cart-reference-2026-10-05.md           | 102 +++++++
 .../audits/collection-list-reference-2026-10-05.md |  45 +++
 docs/audits/gift-card-reference-2026-10-05.md      |  35 +++
 docs/phase-2-theme-settings.md                     |   9 +-
 locales/en.default.json                            |  20 +-
 locales/en.default.schema.json                     |   4 +-
 sections/cart-recommendations.liquid               | 266 +++++++++++++++++
 sections/cart.liquid                               | 197 ++++++++-----
 sections/collections.liquid                        | 234 ++++++++++-----
 sections/featured-product.liquid                   |   3 +-
 snippets/cart-surface-style.liquid                 |   6 +
 snippets/collection-card-render.liquid             | 166 +++++++++++
 snippets/css-variables.liquid                      |   3 +
 snippets/icon.liquid                               |   6 +-
 snippets/pagination-pages.liquid                   |   3 +
 snippets/product-collection-grid.liquid            |   5 +-
 snippets/swatch.liquid                             |   2 -
 snippets/variant-picker.liquid                     |   3 +-
 templates/cart.json                                | 110 ++++++-
 templates/gift_card.liquid                         | 104 +++----
 templates/index.json                               |   1 -
 templates/index.spinel-sync.json                   |   1 -
 templates/list-collections.json                    |  71 ++++-
 tests/accordion-details.test.cjs                   |  74 +++++
 tests/cart-page.test.cjs                           |  86 ++++++
 tests/cart-recommendations.test.cjs                |  32 +++
 tests/cart-shadow.test.cjs                         |  17 ++
 tests/collections-page.test.cjs                    |  75 +++++
 tests/gift-card.test.cjs                           |  21 ++
 tests/product-controls.test.cjs                    |  18 +-
 53 files changed, 3696 insertions(+), 549 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Updated through main commit: `89321f5ebbd78e1144eae1a31adbef4679bd9cd3`
- Main commits included: 3
- Included main commits:
  - `1edc4f43ef37eb328c8f58e005d34a24295695e3` — chore(base): update base with 32 upstream commits through 6eacf7b7
  - `d426df565afbdec2a15c5305f0bcecac6b8a7b88` — fix(sync): preserve blank optional setting defaults
  - `89321f5ebbd78e1144eae1a31adbef4679bd9cd3` — fix(sync): allow option label changes without blocking updates
- Change summary:

```text
assets/cart-drawer.css                             |   1 +
 assets/collections-with-tabs.js                    |  16 +
 assets/component-overlay.css                       |   2 +
 assets/component-pagination.css                    | 161 +++++++++
 assets/critical.css                                | 260 ++++++--------
 assets/product-information.css                     |   8 -
 assets/product-media.css                           |  25 ++
 assets/product-media.js                            |   4 +-
 assets/section-collection.css                      | 152 +-------
 blocks/_collection-pagination.liquid               |  45 +--
 blocks/_header-menu.liquid                         |   6 +
 blocks/_product-media.liquid                       |  33 +-
 blocks/blog-archive-list.liquid                    |  19 +-
 blocks/blog-list.liquid                            |  13 +-
 blocks/blog-meta.liquid                            | 106 +++---
 blocks/blog-tag-filter.liquid                      | 232 +++++++++++++
 blocks/blog-title.liquid                           | 170 +++++++++
 blocks/collections-with-tabs-item.liquid           |   8 +-
 blocks/comments.liquid                             | 130 +++----
 blocks/content.liquid                              |   4 +-
 blocks/featured-image.liquid                       |  35 +-
 blocks/featured-post.liquid                        | 210 ++++++++---
 blocks/image-card.liquid                           |   2 +-
 blocks/pagination.liquid                           |  78 ++++-
 blocks/previous-and-next-posts.liquid              |  94 +++--
 blocks/product-buy-quantity.liquid                 |   8 +-
 blocks/tags-and-sharing.liquid                     |  28 +-
 docs/audits/article-reference-2026-10-05.md        |  26 ++
 docs/audits/blog-reference-2026-10-05.md           |  69 ++++
 .../collections-with-tabs-color-2026-10-05.md      |  33 ++
 docs/theme-customization-policy.md                 |   4 +-
 locales/en.default.json                            |  24 +-
 locales/en.default.schema.json                     |   4 +-
 scripts/theme-base-sync.cjs                        |  34 +-
 sections/article.liquid                            |  88 ++++-
 sections/blog-posts.liquid                         |  18 +
 sections/blog.liquid                               | 216 +++++++-----
 sections/collections-with-tabs.liquid              |  37 +-
 sections/featured-collection.liquid                |  19 +
 sections/related-posts.liquid                      | 386 +++++++++++++++++++++
 snippets/css-variables.liquid                      |   4 +-
 snippets/heading-size-token.liquid                 |  15 +
 snippets/media-card.liquid                         |   3 +-
 snippets/pagination-pages.liquid                   |  45 +++
 snippets/product-card-swatches.liquid              |  24 +-
 snippets/swatch-option.liquid                      |  31 ++
 snippets/swatch.liquid                             |   6 +-
 snippets/variant-picker.liquid                     | 101 +++---
 templates/blog.json                                |  11 +-
 tests/blog-archive.test.cjs                        |  79 +++++
 tests/blog-heading-schema.test.cjs                 |  33 ++
 tests/collections-with-tabs-color.test.cjs         |  75 ++++
 tests/product-controls.test.cjs                    | 102 ++++++
 tests/product-media-pagination.test.cjs            |  79 +++++
 tests/theme-base-sync.test.cjs                     |  80 +++++
 55 files changed, 2705 insertions(+), 791 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Updated through main commit: `020c10f081adeda038ec99ef7b307ffc7d46ab07`
- Main commits included: 1
- Included main commits:
  - `020c10f081adeda038ec99ef7b307ffc7d46ab07` — chore(base): update base with 2 upstream commits through 22b24b6b
- Change summary:

```text
assets/product-media.js              |   4 +-
 blocks/marquee.liquid                | 255 ++++++++++++++++++++++++++---------
 sections/text-marquee-custom.liquid  |  73 +++-------
 tests/product-media-pointer.test.cjs |  85 ++++++++++++
 4 files changed, 295 insertions(+), 122 deletions(-)
```


### 2026-10-05 — Update from personal main

- Previous main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Updated through main commit: `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad`
- Main commits included: 6
- Included main commits:
  - `912e638889f2623658e6c63b44a83cb8f9ba64c9` — chore(base): update base with 14 upstream commits through 823f0b09
  - `497695b2f50993d3194f9b5f3aff6803ee10276b` — feat(sync): auto-push safe theme updates
  - `8a0e66d3ada9c00b072001e67c1919fd68c5d69b` — fix(sync): use normalized schema base for theme merges
  - `12ad4d12f0221c3e7fb1456e4db68b79b39c93e9` — fix(sync): allow settings without Shopify defaults
  - `733f16ea01962231dcf90add8f90599ee3afa735` — fix(sync): stream large diff patches to disk
  - `0eee77c2125c6fffe1a1c07566b2b534cad3c5ad` — fix(sync): stream full review diffs without buffering
- Change summary:

```text
assets/bundle-builder.js                       |  69 ++-
 assets/button-loading.js                       |  28 +
 assets/component-bouncing-dots.css             |   5 +
 assets/critical.css                            |  51 +-
 assets/editorial-text.js                       |  97 ++++
 assets/quick-add.js                            |  36 +-
 assets/quick-view.js                           |  28 +-
 assets/section-parallax.css                    | 167 ++++++
 assets/section-parallax.js                     | 175 ++++++
 blocks/_bundle-product-list.liquid             | 189 ++++++-
 blocks/_bundle-summary.liquid                  | 511 ++++++++++++++++--
 blocks/_collection-breadcrumb.liquid           |  45 +-
 blocks/_collection-columns.liquid              | 108 +++-
 blocks/_collection-count.liquid                |  10 +-
 blocks/_collection-pagination.liquid           |  35 +-
 blocks/_collection-products.liquid             |  15 +-
 blocks/_collection-sort.liquid                 |  15 +-
 blocks/_collection-toolbar.liquid              | 106 +++-
 blocks/_column.liquid                          |  98 +++-
 blocks/_header-account.liquid                  |  70 ++-
 blocks/_header-cart.liquid                     |  30 +-
 blocks/_header-divider.liquid                  |  10 +-
 blocks/_header-localization.liquid             |  25 +-
 blocks/_header-logo.liquid                     |  10 +-
 blocks/_header-menu.liquid                     | 136 ++++-
 blocks/_header-search.liquid                   |  75 ++-
 blocks/_header-top.liquid                      |  47 +-
 blocks/_mega-menu-banner.liquid                | 476 ++++++++++++++---
 blocks/_mega-menu-banners.liquid               | 226 +++++++-
 blocks/_overlay-product-media.liquid           | 150 ++++--
 blocks/_product-collection-grid.liquid         |   4 +-
 blocks/_product-details.liquid                 | 149 ++++--
 blocks/_product-media.liquid                   |  95 +++-
 blocks/announcement-countdown-timer.liquid     | 276 +++++++++-
 blocks/announcement-text.liquid                |  63 ++-
 blocks/banner.liquid                           |  75 ++-
 blocks/blog-archive-list.liquid                |  32 +-
 blocks/blog-card-button.liquid                 |  25 +-
 blocks/blog-card-description.liquid            |  50 +-
 blocks/blog-card-meta.liquid                   | 175 ++++--
 blocks/blog-card-tag.liquid                    |  85 ++-
 blocks/blog-card-title.liquid                  |  90 +++-
 blocks/blog-card.liquid                        | 142 +++--
 blocks/blog-grid.liquid                        |  53 +-
 blocks/blog-list.liquid                        | 135 ++++-
 blocks/blog-meta.liquid                        | 209 +++++++-
 blocks/button-view-details.liquid              |  10 +-
 blocks/button.liquid                           |  45 +-
 blocks/buttons.liquid                          | 150 ++++--
 blocks/carousel.liquid                         | 253 +++++++--
 blocks/collection-background-item.liquid       |  70 ++-
 blocks/collection-card-button.liquid           |  45 +-
 blocks/collection-card-description.liquid      |  60 ++-
 blocks/collection-card-title.liquid            | 110 +++-
 blocks/collection-card.liquid                  | 301 ++++++++++-
 blocks/collection-list-items.liquid            | 125 ++++-
 blocks/collection-promo.liquid                 | 313 ++++++++---
 blocks/collection-tab.liquid                   |   4 +-
 blocks/collection-thumbnail.liquid             |  61 ++-
 blocks/collections-with-tabs-item.liquid       |  68 ++-
 blocks/comments.liquid                         | 180 ++++++-
 blocks/comparison-table-column.liquid          |  62 ++-
 blocks/contact-field.liquid                    |  30 +-
 blocks/contact-form.liquid                     | 432 +++++++++++----
 blocks/content.liquid                          |  21 +-
 blocks/countdown-timer.liquid                  | 190 +++++--
 blocks/discount-code.liquid                    | 161 +++++-
 blocks/divider.liquid                          |  60 ++-
 blocks/editorial-text.liquid                   | 702 +++++++++++++++++++++----
 blocks/email-signup.liquid                     |  90 +++-
 blocks/eyebrow.liquid                          |  40 +-
 blocks/faq_accordion.liquid                    | 497 ++++++++++++++++-
 blocks/faq_answer_text.liquid                  |   6 +-
 blocks/faq_category.liquid                     | 195 +++++--
 blocks/faq_item.liquid                         | 194 ++++++-
 blocks/featured-image.liquid                   | 136 ++++-
 blocks/featured-post.liquid                    | 310 ++++++++++-
 blocks/first-card.liquid                       | 134 ++++-
 blocks/gallery-grid.liquid                     | 216 +++++++-
 blocks/gallery-header-group.liquid             | 323 +++++++++---
 blocks/gallery-image.liquid                    | 218 +++++++-
 blocks/gallery-item.liquid                     | 113 +++-
 blocks/gallery-strip-feature-item.liquid       |  71 ++-
 blocks/gallery-strip-item.liquid               |  38 +-
 blocks/gallery-strip-overlay-group.liquid      | 101 +++-
 blocks/grid.liquid                             |  94 +++-
 blocks/group.liquid                            | 260 +++++++--
 blocks/header.liquid                           | 124 ++++-
 blocks/heading.liquid                          | 100 +++-
 blocks/icon.liquid                             | 175 ++++--
 blocks/image-card.liquid                       | 268 ++++++++--
 blocks/image-comparison.liquid                 | 190 +++++--
 blocks/image-text-card-grid-item.liquid        |  32 +-
 blocks/image-text-stacked-band.liquid          |  84 ++-
 blocks/image.liquid                            | 125 ++++-
 blocks/localization.liquid                     |  40 +-
 blocks/location-item.liquid                    | 145 ++++-
 blocks/location-list.liquid                    |  61 ++-
 blocks/logo.liquid                             |  20 +-
 blocks/marquee-item.liquid                     |  21 +-
 blocks/marquee.liquid                          |  89 +++-
 blocks/menu.liquid                             | 110 +++-
 blocks/pagination.liquid                       |  99 +++-
 blocks/parallax-item.liquid                    | 451 ++++++++++++++++
 blocks/policy-links.liquid                     |  30 +-
 blocks/popup.liquid                            |  16 +-
 blocks/press-item.liquid                       |  56 +-
 blocks/press-quotes.liquid                     |   6 +-
 blocks/previous-and-next-posts.liquid          | 116 +++-
 blocks/product-accordion.liquid                | 105 +++-
 blocks/product-buy-accelerated-checkout.liquid |  21 +-
 blocks/product-buy-add-to-cart.liquid          |  32 +-
 blocks/product-buy-quantity.liquid             |  85 ++-
 blocks/product-callout-gallery.liquid          | 135 ++++-
 blocks/product-callout.liquid                  | 427 ++++++++++++---
 blocks/product-card.liquid                     |  10 +-
 blocks/product-description.liquid              |  50 +-
 blocks/product-inventory.liquid                |  10 +-
 blocks/product-list-banner.liquid              |  14 +-
 blocks/product-list.liquid                     | 119 ++++-
 blocks/product-pickup-availability.liquid      | 202 +++++--
 blocks/product-price.liquid                    |  70 ++-
 blocks/product-recommendations.liquid          |  30 +-
 blocks/product-sticky-add-to-cart.liquid       |  56 +-
 blocks/product-title.liquid                    |  85 ++-
 blocks/product-variant-picker.liquid           |  30 +-
 blocks/row.liquid                              |  36 +-
 blocks/scroll-to.liquid                        |  25 +-
 blocks/scrolling-card.liquid                   | 163 +++++-
 blocks/shop-the-look-products.liquid           | 106 +++-
 blocks/slideshow-slide.liquid                  | 392 ++++++++++++--
 blocks/social-links.liquid                     |  30 +-
 blocks/spacer.liquid                           |  20 +-
 blocks/tab-layout.liquid                       |  70 ++-
 blocks/tabs-view-all-button.liquid             |  45 +-
 blocks/tags-and-sharing.liquid                 |  72 ++-
 blocks/testimonial-item.liquid                 | 218 ++++++--
 blocks/text.liquid                             |  80 ++-
 blocks/timeline-list.liquid                    |  20 +-
 blocks/video.liquid                            | 135 ++++-
 blocks/view-all-button.liquid                  | 116 +++-
 docs/parallax-section-build-plan.md            |  71 +++
 docs/theme-customization-policy.md             |  10 +
 scripts/theme-base-sync.cjs                    | 522 ++++++++++++++++--
 sections/404.liquid                            |   6 +-
 sections/announcement-bar.liquid               | 376 +++++++++++--
 sections/article.liquid                        | 137 ++++-
 sections/blog-posts.liquid                     |  63 ++-
 sections/blog.liquid                           |  37 +-
 sections/breadcrumbs.liquid                    |  61 ++-
 sections/bundle-builder.liquid                 | 200 ++++++-
 sections/cart-drawer.liquid                    |  34 +-
 sections/cart.liquid                           |   6 +-
 sections/collection-list-thumbnails.liquid     | 552 ++++++++++++++++++-
 sections/collection-list.liquid                | 109 +++-
 sections/collection-page-breadcrumb.liquid     | 202 ++++++-
 sections/collection-page-links.liquid          | 187 ++++++-
 sections/collection-tabs.liquid                | 182 +++++--
 sections/collections-with-background.liquid    | 562 +++++++++++++++++++-
 sections/collections-with-tabs.liquid          | 438 ++++++++++++++-
 sections/collections.liquid                    |  16 +-
 sections/contact-form-custom.liquid            |  49 +-
 sections/contact-information.liquid            | 182 ++++++-
 sections/countdown.liquid                      | 103 +++-
 sections/custom-section.liquid                 |  98 +++-
 sections/divider.liquid                        |  65 ++-
 sections/email-signup-dual-image.liquid        | 374 +++++++++++--
 sections/email-signup-form.liquid              |  54 +-
 sections/email-signup-single-image.liquid      |  74 ++-
 sections/faq-accordion.liquid                  | 347 ++++++++++--
 sections/faq-image-accordion.liquid            | 375 +++++++++++--
 sections/featured-blog-posts.liquid            |  63 ++-
 sections/featured-collection-banner.liquid     |  43 +-
 sections/featured-collection.liquid            |  58 +-
 sections/featured-product.liquid               |  39 +-
 sections/footer.liquid                         |  36 +-
 sections/gallery-carousel.liquid               | 323 ++++++++++--
 sections/gallery-custom.liquid                 | 184 +++++--
 sections/gallery-full-width-strip.liquid       | 234 +++++++--
 sections/gallery-image-grid.liquid             | 284 ++++++++--
 sections/header.liquid                         |  62 ++-
 sections/hero.liquid                           | 318 ++++++++---
 sections/hotspot-full-width-carousel.liquid    | 204 +++++--
 sections/hotspot.liquid                        |  44 +-
 sections/icon-text-cards.liquid                | 417 +++++++++++++--
 sections/icon-text-inline.liquid               | 124 ++++-
 sections/image-cards.liquid                    |  20 +-
 sections/image-comparison-custom.liquid        | 104 +++-
 sections/image-comparison-split-custom.liquid  | 192 +++++--
 sections/image-text-card-grid.liquid           | 223 +++++++-
 sections/image-text-split-layout.liquid        | 167 +++++-
 sections/image-text-stacked-bands.liquid       | 545 ++++++++++++++++---
 sections/location-list.liquid                  | 266 ++++++++--
 sections/location-map.liquid                   | 286 ++++++++--
 sections/page.liquid                           |   6 +-
 sections/parallax.liquid                       | 405 ++++++++++++++
 sections/password.liquid                       |   6 +-
 sections/press.liquid                          |  40 +-
 sections/product-information.liquid            |  44 +-
 sections/product.liquid                        |   6 +-
 sections/quick-add.liquid                      |  44 +-
 sections/quick-view.liquid                     |  44 +-
 sections/rich-text.liquid                      |  42 +-
 sections/scroll-reading-text.liquid            | 105 +++-
 sections/scrolling-cards.liquid                | 149 +++++-
 sections/scrolling-text-star-separator.liquid  | 458 ++++++++++++++--
 sections/search-overlay.liquid                 |  37 +-
 sections/search.liquid                         |   6 +-
 sections/shop-the-look-section.liquid          |  47 +-
 sections/slideshow.liquid                      | 418 +++++++++++++--
 sections/testimonial-carousel.liquid           | 429 ++++++++++++---
 sections/testimonials-background-custom.liquid |  99 +++-
 sections/testimonials-horizontal-custom.liquid |  59 ++-
 sections/text-marquee-custom.liquid            | 262 ++++++---
 snippets/swiper-navigation.liquid              |   2 +-
 snippets/theme-button.liquid                   |   2 +-
 tests/editorial-text.test.cjs                  |  49 ++
 217 files changed, 25054 insertions(+), 3990 deletions(-)
```


### 2026-10-02 — Update from personal main

- Previous main commit: `fa304936dd536d9d2d7ac46f9b2361947c955ce0`
- Updated through main commit: `ed7468aa59d460c2d86cee8b7035487d1bb88bf8`
- Main commits included: 2
- Included main commits:
  - `549a2fdacdad77d7dee674bad726dcc0db362e43` — fix(theme-base): track section and block code customizations
  - `ed7468aa59d460c2d86cee8b7035487d1bb88bf8` — fix(theme-base): preserve temporary git index for previews
- Change summary:

```text
docs/theme-customization-policy.md |  18 ++++++
 scripts/theme-base-sync.cjs        | 124 ++++++++++++++++++++++++++++++++-----
 2 files changed, 127 insertions(+), 15 deletions(-)
```

### Reviewed schema migration

Owner approved main schema for conflicts outside homepage. Updated Blog static heading to blog-title and added tag filter; migrated legacy typography tokens in non-homepage templates. Kept homepage index configuration, custom implementations, existing preset values and unconfirmed removed settings. Retained homepage product-media thumbnail visibility because this UI-only difference does not change runtime values.

### 2026-10-06 — Contained Carousel next-item preview

- Reference: Figma node `46028:7301`, 1920px rail with 448px cards: four complete cards and 128px of the next card. Fixed preview fraction is `2/7`; no merchant ratio setting. Use zero gap to reproduce the referenced strip.
- Desktop and mobile checkboxes apply independently at `768px`; enabled views use `columns + 2/7`, keep the viewport clipped and do not preview when the items fit. Existing template values are retained; the new mobile checkbox defaults to false.
- Validation: seven Carousel runtime/schema tests pass; JavaScript syntax, `git diff --check`, customization coverage and Theme Check pass (34 warnings, no errors). Live storefront and Theme Editor lifecycle were not exercised.

### Zoom foreground image option alignment — 2026-10-06

- Aligned `blocks/scrolling-image.liquid` with the Image kernel settings and shared `size-style` / `image-ratio-value` mappings. Kept overlay and the parent scroll animation hooks. Mobile ordering remains owned by the layered parent composition.
- Removed fixed foreground sizing from `assets/section-zoom-image-banner.css`; the block owns responsive crop, size, radius and padding. Preserved motion and overlay styles.
- Migrated legacy width and ratio fields in the homepage instance to the new desktop/mobile settings, preserving the 550px maximum and 6:7 crop. The section preset inherits the same sizing from block schema defaults and sets only overlay opacity, avoiding references to newly introduced size IDs during schema synchronization.
- Schema correction: desktop/mobile maximum width uses 25px steps across 0–1600px (65 selectable values), preserving the 550px default and saved preset values.

### Zoom image banner control ownership — 2026-10-06

- Removed section Content maximum width and its CSS cap; the existing Group block owns content sizing.
- Moved Scroll zoom enable/amount to Zoom foreground image. Each block initializes its own scroll runtime, preserves reduced motion/global motion preferences and cleans up on removal.
- Migrated the homepage zoom settings from section to foreground block (enabled, 12%). Section presets inherit foreground schema defaults.
- Enabled Group desktop/mobile Limit width at 770px in the homepage and section preset. This is the nearest supported 10px increment to the former section cap of 768px; sizing remains merchant-editable through Group options.

- Removed Scroll zoom header and enable/amount options from the foreground block and saved settings. Zoom now defaults to enabled at 12%, while respecting global image motion and reduced-motion preferences.

### 2026-10-06 — Product Metafield text block

- New `metafield` block mirrors Text settings, replacing richtext Text with a namespace.key input and Shopify help link. Product context comes from the parent; absent or unsupported values produce no storefront content. Editor keeps an empty selectable wrapper.
- Featured product preset and homepage Italian Fleece block now use `custom.material`; existing presentation and block order remain. Product details recommends the new block alongside Text; nested Groups already allow it.
- Store operation: layouthub-template-v2.myshopify.com, definition Material (`custom.material`, Single line text), definition ID `300058804523`, product `15402706141483` (TS 01 Essence Regular Heavyweight Black 2.0), value `Italian Fleece`. Created through existing authenticated Admin UI; value read back after Save. No other product values changed. Rollback of these created resources requires owner instruction.
- Validation: four Liquid render tests pass (closest-product priority, escaping, missing/invalid keys, editor empty wrapper, multiline/rich text, zero/false). Theme Check passes with zero errors and 34 existing warnings. `git diff --check` and `node theme-base check-custom essen-theme` pass. Product metafield value was verified after reloading Shopify Admin. Theme files have not been pushed; live Theme Editor rendering was not exercised.

### 2026-10-06 — Product cards material metafield

- Theme-specific global controls: Show metafield immediately below Show type; conditional Key field with the same short example and Learn more link as the Metafield block. Schema defaults to off; the current Assen composition enables it with `custom.material`.
- Reference: Essen Figma product card `46002:6071`, inspected through authenticated Dev Mode. Material text (Jacquard Cotton) is after the title/price content group: Poppins 14px, weight 400, line height 150% (21px), #999999, one line with ellipsis. Uses the existing body font/size tokens and content gap/alignment; long values do not widen the card.
- Product cards read their own product object across collection, search and recommendations; cards with missing values, invalid keys or unsupported types do not create an empty row. Text/scalar output uses Shopify metafield_text and HTML escaping. No JavaScript or additional setting is needed for layout.
- Scope is only `theme/essen-theme`; main remains unchanged. No new product data is created in this step. Existing `custom.material = Italian Fleece` from the preceding task supplies the TS 01 Black 2.0 card.
- Validation: eight Metafield block/card render tests pass, including toggle, correct product, missing/invalid keys, escaping, unsupported types and zero/false. Theme Check passes with zero errors and 34 existing warnings; customization and diff checks pass. A local browser fixture using production critical.css verifies 14px/21px, a single 21px row and ellipsis at 438px and 165.5px card widths. Live Shopify Theme Editor has not been tested; no theme push or Git commit is included.
- Owner correction: reference `46249:7077` is the color-scheme table (Text #404040 in light schemes and white in dark scheme). Card metafield now consumes `var(--body-color)` directly, inheriting the section/card scheme instead of the initial fixed gray. Font geometry and single-line ellipsis remain unchanged.
- Browser readback confirms the same 21px row resolves to rgb(64,64,64) under light Text #404040 and rgb(255,255,255) under dark Text #ffffff, retaining ellipsis. Final render tests, Theme Check and customization checks pass.

### 2026-10-06 — Figma metafield color per scheme

- Inspected Generated/400 variable details in Figma: all four Color schemes resolve to #999999. This supersedes the prior direct Text color mapping.
- Colors > each scheme exposes Product card metafield, defaulting to the Figma value. The card consumes --product-card-metafield-color; no fixed gray is embedded in card CSS. Root follows the default scheme and nested cards inherit their own scheme override.
- Preserve the additive scheme setting, localized label, root/per-scheme Liquid emission and card CSS together when merging base changes.
- Validation: rendered css-variables verifies default-scheme root color, independent scheme overrides and #999999 fallback for existing schemes without the new setting. Eight metafield render tests pass; Theme Check reports zero errors and 34 existing warnings. Customization coverage (33 files) and diff checks pass. No theme push or Git commit.

### 2026-10-06 — Announcement bar close button

- Owner explicitly authorized Assen-only implementation after the Figma preset configuration. Reference: Essen Top bar `47168:7375`, 1920px wide, 8px vertical padding, 1824px content width and a 24px close icon at the right edge.
- Section option `show_close_button` defaults to false for existing configurations; the Announcement bar preset and current header group explicitly enable it. Close uses the shared icon snippet, inherits scheme color and follows global desktop/tablet/mobile page margins. Content reserves symmetric space to prevent overlap.
- Dismissal lasts until page reload. Destroy runtime before hiding the bar so autoplay, observers and listeners stop. Keyboard focus moves to the next visible header control when possible. Theme Editor selection or section reload restores the bar; initialization remains idempotent.
- Review future main changes to both implementation files before merging. Preset/group values and the accessible-label locale key are configuration.
- Validation: `check-custom essen-theme` and `git diff --check` pass; Theme Check reports 0 errors and 34 existing warnings. Production CSS/JS fixture verifies desktop/mobile close, Enter activation, focus handoff, editor selection restoration and repeated unload/load without console errors. Live Shopify Theme Editor remains unverified.


### 2026-10-06 — Assen product-card price matches Essen Figma

- Reference: Essen card `46025:7104`, Price product cart and its current/compare-at text layers. Both prices use Poppins Regular 14px, 150% line height (21px); the row centers items on the cross axis with a 4px gap. Compare-at is Generated/500 (#808080), fully opaque and struck through; sale price is #D94100.
- Base behavior: shared `.price` uses global body size/leading and an 8px gap; compare-at is 0.9em with 0.72 opacity and inherited body color.
- Assen custom in `assets/critical.css`: scope fixed geometry to `.price--product-card` and its `.price__compare-at` descendant on desktop/mobile. Preserve existing body font (currently Poppins), configured sale color, currency formatting, sale order, wrapping and unit-price behavior. Product-page/cart price styles remain unchanged. No schema or preset option is added.
- When merging base changes, retain this card-only override; review overlap in shared price selectors and tokens, and check regular/sale/compare-at/unit-price cards. This customization belongs to Assen and must not be promoted to personal main without the owner's request.
- Validation: preview computed styles confirm Poppins 14px/21px, weight 400, 4px gap, sale #D94100 and compare-at #808080 at full opacity. Theme Check passes with zero errors and 34 warnings; customization coverage (35 files) and diff whitespace checks pass. No commit or theme push.

### 2026-10-06 — Featured product option and quantity labels

- Reference: Essen Product `46002:6186`; inspected text descendants Size `46002:6207` and Quantity `46002:6213` through authenticated Figma Dev Mode. Both use Body/14: Poppins Regular 14px, normal style, 150% line height (21px) and Text (#404040 in the current scheme). Quantity label/control gap is 8px, already matched by this theme.
- Added only Featured product scoped CSS in `sections/featured-product.liquid` for option-header captions and form labels. Body family/small-size and scheme Text remain token driven; regular weight and leading match Figma. Variant values, button labels, schemas and other sections retain their existing behavior.
- Validation: local Shopify development preview confirms all three labels resolve to Poppins 14px/21px, weight 400 and rgb(64,64,64) on desktop and 390px mobile; screenshots visually checked. Theme Check passes with zero errors and 34 warnings; customization coverage (36 files) and whitespace checks pass. No Git commit or theme push.

### 2026-10-06 — Theme branch renamed

- Renamed `theme/assen-theme` to `theme/essen-theme` locally and on GitHub at the owner's request. Renamed this customization record to match the theme slug and updated branch/command references; storefront implementation and saved theme composition remain unchanged.


### 2026-10-07 — Approved merge of current personal main

- Owner approved retaining custom behavior while integrating current base logic. Reviewed overlaps were merged by behavior, without replacing custom implementations.
- Carousel retains contained N + 2/7 desktop/mobile preview, insufficient-item guard and cloned loops; fade uses one slide and zero gap when previews are inactive. Preview opts into slide transition.
- Product-card inventory data is added alongside 5:4 media and the per-product material metafield. Retain 20px purchase gap, color-button/selected-value picker controls, two-media modes, 4:5 and 5:4 collection crops, announcement close behavior and custom locale keys. Import base inventory, pointer tolerance, heading-token and critical-CSS changes.
- Keep saved schemas/presets/compositions except new setting defaults, additive approved schema compatibility, and migration/removal of position_vertical explicitly approved by the owner. Existing password title remains for an empty saved block composition. Existing marquee direction/alignment values are migrated, including legacy mobile space-between support.

- Schema review: differences for Carousel ratios, Image card desktop/mobile heights, Press item ratio and Collection thumbnails ratios are additive custom 5:4/4:5 values. Every main value remains available, and the existing Liquid/CSS mappings remain intact. Keep these definitions.
- Validation: all 194 Node tests pass; full Theme Check passes with zero errors and 40 warnings. Customization coverage includes 38 implementation files. Saved-value audit confirms only approved position_vertical removal; global settings schema remains unchanged. Tests resolve locale keys and permit retained theme wording, and test unset Quantity defaults independently of its custom label default. Live Shopify storefront/editor was not exercised.
