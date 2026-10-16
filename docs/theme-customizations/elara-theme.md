<!-- theme-base-sync-state: {"sha":"2593c6f2f1c69fdab3d90e2468446b55e8550055"} -->
# Customization record: elara-theme

Theme branch: `theme/elara-theme`
Personal base at creation: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
Theme update source: this repository's `main` branch

## CLI base update — 2026-10-11

Applied main commit `75baa7c` (Windows preview and theme sync support). This source range changes only CLI scripts and their Windows tests. Preserved theme implementations and existing preview authentication/supervisor exports when resolving the module export overlap.

## Customizations

This table records current implementation differences from personal `main`: Liquid/HTML outside `{% schema %}`, rendered snippets and loaded CSS/JS dependencies. Presets, schema-only edits, template/group JSON, saved settings and locale text are configuration, not custom implementation. Historical notes below describe earlier work; this table and the current implementation audit describe the code to preserve during the next base update.

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `assets/header.js`, `assets/critical.css`, `blocks/_header-top.liquid`, `blocks/_header-menu.liquid`, `blocks/_header-menu-toggle.liquid`, `blocks/_header-logo.liquid`, `blocks/_header-search.liquid`, `blocks/_header-account.liquid`, `blocks/_header-cart.liquid`, `blocks/_header-mega-menu.liquid`, `blocks/_mega-menu-banners.liquid`, `blocks/_mega-menu-banner.liquid`, `snippets/header-figma-icon.liquid` | Previous header navigation/actions and basic mega banners. | Adopt Malandra header contracts and requested visual composition; preserve two Elara logo URLs. | Owner requested variant update 2026-10-15. | Preserve logo artwork and shared responsive/editor/action contracts; see receipt below. |
| `sections/hero.liquid`, `snippets/hero-image.liquid`, `sections/search-overlay.liquid`, `blocks/_search-input.liquid`, `assets/block-animations.js`, `snippets/tab-layout-styles.liquid` | Previous Hero/Search/animation/tab behavior. | First Hero priority/preload, shared Search appearance, idempotent marquee scan, deferred below-fold section preparation and inactive tab contrast. | MALANDRA-ELARA variant IDs recorded below. | Preserve Elara media/presets, native overlays, lifecycle and source-size caps. |
| `sections/collections-with-background.liquid`, `sections/collections-with-tabs.liquid`, `sections/collection-banner.liquid`, `sections/featured-collection-horizontal.liquid`, `sections/slideshow.liquid`, `blocks/slideshow-slide.liquid`, `blocks/press-quotes.liquid`, `blocks/timeline-slide.liquid`, `assets/section-collections-with-background.css`, `assets/section-collections-with-tabs.css`, `assets/section-collection-banner.css`, `assets/section-featured-collection-horizontal.css`, `assets/section-slideshow.css`, `assets/block-slideshow-slide.css`, `assets/block-press-quotes.css`, `assets/block-timeline-slide.css` | CSS bundled globally. | Load byte-identical Elara CSS with each rendered owner. | MALANDRA-ELARA-LIGHTHOUSE-CSS-002. | Keep owner and stylesheet dependency together; preserve pre-existing horizontal collection edits. |
| `blocks/heading.liquid`, `snippets/heading-size-token.liquid`, `snippets/css-variables.liquid`, `assets/critical.css` | Visual scale starts with Display/H1 then XL/H2; Heading Display resolves its HTML tag. | XL maps to H1, LG to H2, MD to H3, SM to H4 and XS to H5 at all breakpoints, including line height, tracking and case. Six separate semantic tokens retain H6 and legacy h1–h6 aliases. Display follows the semantic tag, with div falling back to H2. Heading presets shift H2–H5 to preserve their previous visual role; existing XS choices and semantic tags remain; slideshow presets and saved slideshow headings use XL independently of tag. Existing numeric settings remain pending Figma reauthentication. | User requested corrected Theme Settings font-size mapping and preset audit, especially slideshow, on 2026-10-09. | Preserve semantic/visual separation, responsive H1–H6 settings and Display tag behavior; review shared typography overlaps. |
| `sections/announcement-bar.liquid` | Slider becomes single-message mode only after JavaScript initializes, shrinking control space and moving main content. | Render the existing single-message class from the dynamic block count for slider mode. | Eliminate the measured initial 40px to 37px bar shift and message width change without changing saved settings. | Preserve multiple-message controls, static social placement and JS/editor lifecycle; compare server and initialized geometry. |
| `blocks/_marquee-image.liquid` | Fixed 300–350px marquee images skip from 600px to 800px responsive candidates. | Add 480/640/700px candidates while retaining the original maximum, aspect ratio, source and configured sizes. | Avoid oversized mobile downloads at intermediate device pixel ratios. | Preserve configured desktop/mobile dimensions, native loading and full-quality maximum. |
| `snippets/image-comparison.liquid`, `assets/image-comparison.css`, `sections/featured-collection-banner.liquid`, `assets/featured-collection-banner.css`, `sections/hotspot-full-width-carousel.liquid`, `assets/hotspot-full-width-carousel.css`, `blocks/_marquee-countdown-timer.liquid`, `assets/marquee-countdown-timer.css` | Component CSS is bundled globally even when the component is absent. | Load byte-equivalent CSS assets from each rendered owner only. | Remove unused blocking homepage CSS while retaining component styles on consuming pages/editor inserts. | Preserve all declarations and scoped selectors; keep asset loading and owner together when merging. |
| `blocks/heading.liquid`, `blocks/text.liquid`, `blocks/button.liquid`, `blocks/eyebrow.liquid`, `blocks/icon.liquid`, `blocks/editorial-text.liquid`, `snippets/block-animation-attributes.liquid`, `assets/block-animations.js`, `assets/critical.css`, `blocks/slideshow-slide.liquid`, `layout/theme.liquid` | Kernels have no per-block entrance selection; Text/compound parents use legacy CSS motion and the existing entrance runtime has no layout consumer. | Add validated Type/Delay on existing roots for six reference-confirmed kernels; Heading explicitly enables rotation in the shared snippet and rotates words through CSS prepared/animated classes with clipped outer/inner spans, 1000ms translateY(110%)/rotate(10deg), and no word stagger, matching the measured reference. Other types use 500ms; opacity-only Fade preserves component transforms. Delay applies before playback and is 0–2000ms in steps of 50, defaults None/0. Prepare valid leaf effects before first paint using a capability/motion-gated head marker and critical CSS; release on asset failure or an 8-second boot timeout, skip replay if the initial page was already exposed, and keep focused content readable. Load shared entrance runtime with section-scoped observers, editor teardown, cancellable 20ms editor refresh on Type/Delay rerender and block/section selection, active slide/tab gating, focus visibility, global/reduced-motion support and no persistent animation fill. Explicit leaf motion replaces legacy parent/slideshow entrances. | Owner requested Elvara reference Animation options on 2026-10-09. | Preserve content/markup/padding/composition, range semantics, per-section lifecycle and motion preferences; review overlapping kernel/runtime changes. |
| `assets/critical.css`, `sections/header.liquid` | Overlay header flow geometry is defined in section CSS. | Establish the same zero-height server-rendered overlay wrapper in critical CSS before section CSS arrives. | Prevent the transparent homepage header from moving main content during stylesheet loading. | Keep the early guard identical to section ownership; retain sticky positioning, drawer layering and normal non-overlay headers. |
| `snippets/image.liquid`, `blocks/collection-list-items.liquid`, `blocks/gallery-strip-item.liquid`, `blocks/gallery-strip-feature-item.liquid`, `snippets/meta-tags.liquid` | Mobile picture candidates lack width descriptors and sizes; lazy cards use viewport estimates; favicon is absent without an explicit setting. | Emit valid mobile width candidates capped at the source/consumer width, propagate sizes to picture sources, let lazy gallery images use native auto sizes with responsive fallbacks, account for the collection carousel’s 1.2-slide mobile preview in sizes, keep first two gallery sections eager, and fall back to the existing brand logo for favicon. | Reduce mobile image overfetch and eliminate the missing favicon request on HTTPS Elara preview. | Preserve mobile art direction, early image loading, layout, merchant favicon precedence and existing metadata customizations; validate width selection at both breakpoints. |
| `snippets/css-token-value.liquid`, `snippets/css-variables.liquid`, `blocks/carousel.liquid`, `blocks/video.liquid`, `blocks/image-comparison.liquid`, `blocks/countdown-timer.liquid`, `blocks/_product-media.liquid` | Repeated validation OR chains and literal CSS/ratio branches increase Liquid complexity. | Use exact array membership, a shared literal CSS token resolver and the existing ratio resolver; preserve custom/original and invalid-value fallbacks. | Resolve complexity warnings without changing settings or computed values. | Preserve original fallback types and output; compare rendered tokens and media ratios when merging. |
| `sections/hero.liquid`, `blocks/slideshow-slide.liquid`, `blocks/gallery-strip-item.liquid`, `blocks/gallery-strip-feature-item.liquid`, `blocks/tab-layout.liquid`, `blocks/collection-tab.liquid`, `blocks/_header-localization.liquid`, `blocks/_header-menu.liquid`, `snippets/hero-styles.liquid`, `snippets/gallery-strip-item-styles.liquid`, `snippets/tab-layout-styles.liquid`, `snippets/localization-styles.liquid` | Shared classes depend on CSS owned by another file, with orphan style copies. | Canonical compiled stylesheet snippets are rendered by each actual consumer; declarations come from their existing owner. | Resolve stylesheet ownership and orphan warnings while retaining scoped styles. | Preserve shared render dependencies and declaration order; no duplicate style implementations. |
| `sections/password.liquid`, `sections/product.liquid`, `sections/cart-drawer.liquid`, `snippets/product-list-promo-items.liquid` | Generic inputs carry a modifier used only by unrelated scoped components; an obsolete promo insertion snippet has no consumer. | Generic fields retain form__control and native input selectors; remove the unreferenced promo helper. | Resolve scoped CSS and dead-code warnings. | Preserve field behavior and shared form styling; keep obsolete promo helper removed unless a real consumer is restored. |
| `blocks/_bundle-summary.liquid`, `assets/bundle-summary.css`, `blocks/comparison-table.liquid`, `assets/comparison-table.css`, `blocks/timeline-list.liquid`, `assets/timeline-list.css`, `snippets/product-callout-runtime.liquid`, `assets/product-callout.css` | Component styles enter the global compiled stylesheet even on pages without these components. | Load the unchanged CSS from each rendered component owner only. | Reduce unused homepage CSS without changing component declarations. | Keep owner asset loading and selectors together; validate component styling when merging. |
| `snippets/gallery-strip-item-styles.liquid`, `snippets/hero-styles.liquid`, `snippets/localization-styles.liquid`, `snippets/tab-layout-styles.liquid` | Unused library styles are globally bundled. | Emit the unchanged styles only when the snippet is rendered. | Avoid global CSS for unused library snippets. | Preserve scoped declarations and conditional rendering. |
| `blocks/_header-account.liquid`, `blocks/_header-menu.liquid` | Requests a configured customer menu even if the menu does not exist. | Set the custom menu attribute only when Shopify returns a nonempty matching menu. | Avoid account-menu request errors while retaining native account behavior. | Preserve Shopify account component and use actual menu availability. |
| `blocks/blog-card-button.liquid`, `snippets/theme-button.liquid`, `blocks/email-signup.liquid`, `snippets/video.liquid` | Repeated Read More labels lack article context; newsletter target can be narrower than 24px; generated video fallback images lack alt. | Give article links their actual title context; set a 24px minimum target; provide decorative fallback alt and defer below-fold sources with native no-JS controls. | Address measured mobile accessibility failures and video transfer cost. | Retain visible labels, article destinations, form submission, controls and video lifecycle. |
| `assets/slideshow.js` | Autoplay polls layout and updates an inherited progress token on the entire section every frame. | Cache control elements and interaction state, update only the pagination subtree at up to 30fps, and suspend animation frames outside the viewport, while hidden, or with reduced motion. | Reduce mobile style/layout work while retaining slide delay and progress. | Preserve logical loop index, touch/hover/focus pause, editor teardown and motion preferences. |
| `snippets/font-faces.liquid`, `assets/kaisei-decol-latin-400.woff2`, `snippets/css-variables.liquid` | Full font declarations may repeat and Kaisei Decol regular includes a large Japanese glyph set. | Deduplicate role declarations; append a range-specific 36KB Latin subset of the same regular font. Full Shopify face remains available for characters outside the subset. License is in docs/licenses/kaisei-decol-OFL.txt. | Reduce the mobile heading font request from approximately 1.9MB without altering Latin outlines or metrics. | Keep all role settings and non-Latin fallback; regenerate subset from the selected source version when updating this font. |
| `snippets/image.liquid`, `snippets/product-card-image.liquid`, `blocks/collection-list-items.liquid` | Product/collection cards can download the largest image without layout-specific candidates. | Expose explicit image loading to consumers; product images get responsive candidates and native auto sizes when lazy; collection list passes viewport sizes derived from configured columns and a below-fold lazy strategy. | Reduce mobile image bytes while retaining card layout and existing early collection images. | Preserve cropping, alternate image behavior, source alt and configured columns; check first visible cards and carousel variants. |
| `snippets/meta-tags.liquid` | Basic metadata, conditional description and Product structured data. | Escape title/canonical/social values, supply the existing shop description fallback, use HTTPS social images, and add native Article plus homepage WebSite structured data from actual Shopify resources. | Improve technical SEO and safe metadata output without inventing store details. | Preserve resource title/description ownership, canonical URLs and native Product schema. |
| `assets/announcement-bar.js` | Slider measures every slide on each transition; marquee alternates inserting clones and reading layout. | Batch measurement clones and only measure on initialization/resize; coalesce observer work into animation frames; calculate marquee clone count before batch insertion. Cancel pending transition/resize work on unload and strip editor attributes from inert marquee copies. | User requested warning cleanup and mobile performance optimization on 2026-10-09. | Preserve slider/marquee geometry, keyboard/focus pause, independent instances, and complete editor cleanup. |
| `snippets/product-card.liquid`, `snippets/product-badges.liquid`, `snippets/badge.liquid`, `snippets/css-variables.liquid`, `assets/critical.css` | Cards display status badges and optional configured badge-prefixed tags using shared badge styling. | Product cards pass the global Show Tags switch and explicit card context; render up to three nonempty product tags independently of sale/sold-out state. Card tags replace the old prefixed manual-tag path, retain legacy prefix stripping, and share status-badge geometry: horizontal flow with wrapping and a 6px gap, 22px minimum height, 2px/8px padding, 12px regular uppercase text with 1px spacing. First/third tag use white/#181818 and second uses #6F6F6F/white tokens. Product-page manual rules retain their existing behavior. | Requested product-card tags from Malandra nodes 52164:10242 and 43256:123 on 2026-10-08. | Preserve Show Tags ownership, three-tag limit, escaped labels, status precedence, card-only styling and existing product-page rules; review overlapping badge/card changes. |
| `sections/announcement-bar.liquid` | Base slider/marquee with full-width message track and no social slot. | Theme preset uses shared rich Text and a fixed Social slot controlled by Show social links on desktop; balanced 1:2:1 desktop columns, centered message, mobile social hiding and separate mobile padding/alignment. Existing slider/marquee runtime retained. | Replace the static Announcement section with Announcement bar per owner request on 2026-10-09. | Preserve desktop toggle, static Social ID, shared Text support, preset content and responsive layout; review overlapping implementation changes. |
| `sections/announcement-bar-static.liquid` | No independent static variant on main. | Removed; its saved content, social slot and responsive preset are migrated to Announcement bar. | Owner requested clearing the static section on 2026-10-09. | Keep the section removed and preserve its migrated content in Announcement bar. |
| `blocks/_announcement-social-links.liquid`, `snippets/icon.liquid` | No compact announcement social slot. | Private static block renders configured global Facebook/Instagram/Pinterest URLs with original 16px Figma inline SVGs and editable 12px default gap. | Match supplied Figma top bar icons without changing Footer socials. | Preserve exact SVG dimensions, global link ownership, accessible names and missing-link omission. |
| `blocks/_header-localization.liquid` | Country name or currency label is selected by existing controls. | Opt-in Show currency with country name adds a complete country/currency label; default false preserves existing instances. | Preserve the configured country/currency label after returning Localization to Header. | Preserve existing market/language forms and default behavior; review overlapping localization changes. |
| `layout/theme.liquid` | Head reads template content for LCP preload before rendering Header group. | Capture Header group before the first template-content read, output its captured markup in body before MainContent, then Overlay/Footer. | Correct requested Theme Editor group order while preserving head LCP preload. | Keep Header render before template evaluation and avoid duplicate group output; verify editor ordering on upstream layout changes. |
| `blocks/faq_answer_text.liquid` | Dedicated answer-only Text block with one richtext setting. | Deleted; all composition references use the shared Basic Text block, preserving rich text, configured order and effective answer size. Parent answer-specific CSS and settings are removed. | User requested removing the dedicated block and replacing preset children with Basic Text on 2026-10-08. | Keep the dedicated block deleted; preserve Basic Text content/size migrations and do not restore its type in base merges without review. |
| `blocks/faq_accordion.liquid` | Heading/answer size controls, desktop width, Boxed-only scheme and gap; Plus selects a chevron and Boxed corners are square. | Reference Accordion setup adds Heading/Body/Accent question font roles with global typography, independent mobile width/max width behind a Desktop/Mobile Device selector, Boxed-only Inherit/Color scheme, Extra small shadow, functional Plus/minus, global card radius and reference Large padding (20/24px desktop, 20/20px mobile). Simple gap controls row spacing and vertical padding; Dividers draw only a bottom border on every row, including the last; existing Custom padding, matching IDs/preset settings and saved content remain supported. Answer typography is owned by each Basic Text child; the dedicated answer block and its parent font-size consumers are removed. Direct-child selectors isolate nested accordions. | Match Omnise Elvara theme 139629002837 Accordion on 2026-10-08. | Preserve new settings/token consumers, responsive sizing, direct-child scope, Custom spacing, Basic Text child content/size and legacy saved scheme behavior; review overlapping main changes. |
| `blocks/faq_item.liquid` | Row only accepts the dedicated FAQ answer text; empty editor rows fabricate answer text; only chevron markup exists. | Row accepts available theme/app children in merchant order, with removable dynamic children and a standard Text in the new-row preset. Existing dedicated FAQ text children are migrated to Basic Text with the same content, order, full width and effective text-size role; legacy inline answers remain valid. Empty rows have no fabricated content; shared native details lifecycle and block attributes remain. Renders distinct decorative chevron and Plus/minus icons with a 20px footprint; the Figma FAQ image section uses the shared Chevron snippet at 24px and a content flow suitable for arbitrary children. | Keep the requested child composition behavior in Accordion row while configuring Accordion. | Preserve dynamic nesting, all existing child data, accessible details semantics and scoped icon styling; review overlaps explicitly. |
| `snippets/icon.liquid`, `snippets/quantity-icon.liquid`, `blocks/menu.liquid` | Library Chevron directions use different geometry; Menu inline icons use the thickness scale rather than the shared stroke width; a few registered/quantity strokes are fixed. | Chevron aliases/directions use the Figma 24px geometry, retain currentColor and share the icon stroke token. Mobile Menu renders registered Chevron/Plus through the shared snippet. Fixed outline widths use the same token. | Align Chevron with the supplied Figma and synchronize icon weight including mobile Menu. | Preserve names, alias compatibility, accessible decoration, responsive Menu state and the shared Icon thickness control. |
| `snippets/_overlay-media-ratio.liquid` | Existing ratio presets, legacy aliases and original media behavior. | Canonical original/ratio_* schema values; shared W/H Custom resolution where needed, preserving desktop/mobile and native media behavior. | User requested image ratio cleanup on 2026-10-08. | Preserve canonical values, Custom W/H consumers and responsive ownership; review overlapping media logic. |
| `blocks/collections-with-tabs-item.liquid` | Existing ratio presets, legacy aliases and original media behavior. | Canonical original/ratio_* schema values; shared W/H Custom resolution where needed, preserving desktop/mobile and native media behavior. | User requested image ratio cleanup on 2026-10-08. | Preserve canonical values, Custom W/H consumers and responsive ownership; review overlapping media logic. |
| `blocks/product-inventory.liquid` | Status/count select and low-stock threshold, with responsive padding. | Reference-style independent low-stock quantity/bar switches, threshold 0–50, conditional gap, typography and low-stock color/gradient controls; passes identical settings into initial, per-variant and fallback snippet renders. Saved display choices migrate to the quantity switch; legacy runtime fallback remains. | User requested setup matching Omnise Elvara inventory on 2026-10-08. | Preserve all new settings and snippet parameters, real variant data, block attributes, no-JS first render and scoped variant templates when updating from main. |
| `snippets/product-inventory-status.liquid` | Inventory states render a status dot and optional quantity. | All states share configurable typography without a dot. Positive tracked low stock shows the Malandra quantity sentence or the reference quantity-free urgency message; an independent switch controls the bar, whose width is the fixed 113px Figma segment, clamped to available width. Normal stock does not show a count; unavailable/backorder/sold-out states retain their stock logic. | Match Figma desktop `52187:989` and mobile `52426:9503` (2026-10-08). | Preserve real variant quantities, threshold/quantity/bar settings, plural translations, unavailable/backorder/untracked fallbacks and the existing template-based variant runtime. Review overlapping inventory logic changes. |
| `assets/product-information.css` | Shared product controls and inventory status dot styles. | Featured product Buy buttons use a vertical purchase layout, 109×44px square quantity control, 20px saved gaps, 500-weight/1px-spaced actions and exact local 20px Figma quantity icons. Inventory-scoped font/size/tracking roles apply to every status. Configurable low-stock text color and solid/gradient bar fill; default Malandra red, 16px adjustable gap, 3px gray rounded track and a fixed 113px fill clamped to available width. Featured product option/quantity labels use body family, 16px/400/1.5, normal tracking/case, heading color and an 8px option-label gap; selected values retain body color. | Match the same stock component on desktop/mobile. | Preserve the Featured product-only purchase overrides, the inline quantity-icon snippet dependency, saved gap settings and existing variant/cart/payment runtime. Preserve all unrelated product styles and responsive inventory padding. The bar is decorative and matches the Figma geometry; threshold only controls the low-stock classification; reconcile overlapping inventory styles explicitly. Preserve the scoped label typography and selected-value color. |
| `snippets/layout-flow-group-style.liquid` | Mobile stacked groups can inherit desktop main-axis alignment. | Reset vertical mobile main axis to start while applying mobile alignment to the cross axis. | Match reference Layout direction/position/alignment behavior (2026-10-08). | Preserve gap, desktop placement, vertical Position and independent mobile cross-axis alignment. |
| `sections/footer.liquid` | Shared mobile menu disclosures have no bottom spacing; social icons use desktop size. | Footer menu groups omit the final divider and use 18px social icons on mobile. Existing preset gaps remain 40/24/16/12/10px per Figma. | Match mobile footer spacing on 2026-10-08. | Preserve the final divider override and mobile icon sizing; review overlapping footer/menu styling. |
| `blocks/logo.liquid` | Logo uses global theme artwork or shop-name fallback. | Default logo style renders the escaped store name in uppercase heading typography, scales with its container to the Figma logo proportions and clips long names and displays three literal dots in a separate baseline-aligned flex item when ResizeObserver detects overflow by measuring the full text range against the available line width; uses 1.4 line-height and small vertical padding to preserve glyphs; uses the existing default style without a custom preset setting. | User requested store-name content with Figma styling on 2026-10-08. | Preserve dynamic store name, responsive typography and ellipsis; review overlapping logo rendering changes. |
| `blocks/email-signup.liquid`, `snippets/theme-button.liquid`, `snippets/icon.liquid` | Empty button label falls back to translated Submit; Email signup has no Malandra send icon. | Keep empty visible labels with translated accessible submit names. Add `send_malandra` / Send to Email signup and both shared icon allow-lists; inline the exact Figma send paths/color in an 18px square frame with 1.2219px vertical inset. | Match Figma `52377:7294` within footer `52114:18598`; user requested the option and snippet on 2026-10-08. | Preserve empty-label accessibility, icon key, original geometry/color and shared responsive icon sizing; review overlapping button/icon registry changes. |
| `blocks/group.liquid` | Height Fill uses 100% height, which depends on a definite parent height. | Shared axis classes stretch Fill groups in horizontal Group/split/marquee rows and grow them with a zero basis in vertical flows; horizontal flows stacked on mobile retain intrinsic main-axis sizing. All-Fill horizontal Group children use equal grid columns including padding, independently for desktop/mobile widths. | Make Height Fill work with content-sized rows and nested groups (2026-10-07). | Preserve width modes, Fit behavior, mobile alignment and axis-specific Fill when reviewing upstream layout changes. |
| `sections/image-text-split-layout.liquid` | Fixed two-column grid, mobile stacking, position controls and independent content gaps. | Replaces the grid with shared `layout-flow-group-style`; normalizes direction, position, alignment, desktop/mobile gaps and Fit/Fill height; supports optional mobile stacking and full width without padding. Two direct Fill groups use equal grid tracks on the parent, including asymmetric child padding and the active parent gap. Current schema exposes the existing Group-equivalent Direction, Position, Alignment and Fit/Fill controls. | Preserve the Elara split layout and nested Group sizing (2026-10-07). | Preserve shared flow mapping, legacy content-gap fallbacks, equal-column grid tracks and child Group Height Fill hooks; review overlapping upstream layout changes. Preset contents and saved composition are configuration, tracked separately. |
| `snippets/video.liquid` | Play SVG uses percentage dimensions inside an unsized span. | Give play/pause spans explicit proportional dimensions and size their SVG to fill that span; offset only the play triangle. | Fix distorted Video block playback controls (2026-10-07). | Preserve scoped sizing and review shared video snippet changes during base updates. |
| `blocks/video.liquid` | Empty video always shows the shared placeholder. | Adds exact `portrait_tall` (5:7) desktop/mobile aspect-ratio mapping. Opt-in cover-image fallback displays existing inspiration media without fabricated play controls; default false preserves other Video instances. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Reuse the existing Video kernel as a separate child of Slide in the custom carousel (2026-10-07). | Preserve the opt-in fallback, shared image/media sizing and native video runtime; review overlapping video changes. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `sections/video-product-carousel-custom.liquid` | No dedicated video/product carousel; homepage inspiration used Gallery Carousel. | Independent (custom) section composes shared Header and Carousel, inherits theme tokens and exposes section appearance, gap and responsive spacing. Uses the existing Video and Compact product blocks through shared Carousel/Slide composition. | User authorized a separate section for Elara and its Figma homepage position on 2026-10-07. | Keep the independent section, block tree and saved resource references; review upstream Header/Carousel and shell changes before merging. |
| `blocks/product-card-compact.liquid` | No separately editable compact card. | Thumbnail, title/price and cart action with boxed/overlay appearance, responsive width/gap/padding, section color inheritance and theme typography/buttons. Multiple variants use the existing Quick Add picker; unavailable products cannot submit. Both available cart actions render shared loading dots and use the shared action/button classes to hide the icon and show centered bouncing dots while loading (2026-10-09). Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Implement the Compact options inspected in the user-provided Omnise Theme Editor. | Preserve shared money/commerce behavior and token inheritance; review overlapping price, quick-add and theme-button changes. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `sections/featured-collection-horizontal.liquid` | Featured collection stacks header/actions above the product list. | Independent horizontal section places fixed Header and View all button beside Product list on desktop and stacks them on mobile; allows only three static section blocks, with View all always below Header and an independent Shop now button inside Header; clips the desktop carousel at the content-facing edge while preserving the next-slide preview; reuses collection-link synchronization and existing blocks. | Separate reusable horizontal layout from the Shop Best Sellers content preset (2026-10-07). | Preserve static block IDs, fixed Header → View all composition and disabled-only static slots, local layout and width (including no padding), direction, desktop position/alignment and optional vertical mobile composition with independent alignment; review upstream block contract changes. |
| `sections/featured-collection-horizontal.liquid` | Desktop horizontal layout clips the entire Product list slot, including Outside navigation. | Apply the content-facing clipping to the Swiper items only, following Shop the look; sibling navigation remains unclipped, with existing next-slide preview and RTL clipping preserved. | Prevent Outside arrows being cut off (2026-10-09). | Preserve slide-only clipping, sibling controls, desktop breakpoint and RTL direction when reviewing upstream layout changes. |
| `sections/featured-collection-horizontal.liquid` | Product list Top navigation uses a content-width row without local alignment or spacing. | Align Top navigation to the inline end on desktop; add 8px top and 16px side/bottom padding. Mobile visibility remains owned by Product list. | User requested right-side Top navigation with breathing room in Featured collection: horizontal (2026-10-09). | Preserve the section-scoped desktop rule and review overlapping upstream layout/navigation changes; keep Position and other section layouts unchanged. |
| `blocks/header.liquid` | Header text bypasses section text tokens; omitted local alignment variables can inherit another header's overrides. | Inherit mode resolves local desktop/mobile alignment from parent flex/text tokens, including `align-content`. Explicit mode emits both viewport values to prevent inherited overrides leaking in. | Fix header alignment across compatible sections, requested on 2026-10-07. | Preserve parent token consumption, explicit override priority and independent mobile behavior; review overlapping upstream header changes. |
| `assets/critical.css` | Shared list composition relies on implicit mobile-left defaults. | Mobile-left explicitly resets list justification, flex alignment and text alignment for Featured collection, Collection list, Blog posts and Featured blog posts. | Complete independent desktop/mobile section alignment context. | Preserve list ordering and responsive layout; reconcile overlapping shared composition changes. |
| `sections/collection-tabs.liquid` | Header position uses flex alignment without a matching text-alignment context. | Header receives normalized left/center/right text alignment alongside flex alignment at both breakpoints. | Make inherited header text follow the controls alignment. | Keep tab position, layout-direction semantics, tab runtime and header override priority. |
| `sections/press.liquid` | Important CSS forces header alignment regardless of inheritance setting. | Parent flex/text tokens supply inherited alignment; header explicit settings can take priority. | Honor Inherit parent alignment on/off. | Preserve press content geometry; retain parent context without forced header overrides. |
| `sections/bundle-builder.liquid` | Important CSS forces header alignment regardless of inheritance setting. | Header retains sizing and consumes parent context through the shared header contract. | Honor inheritance on/off without changing bundle layout. | Preserve bundle/cart runtime and header widths; reconcile overlapping header CSS. |
| `sections/email-signup-form.liquid` | Desktop form position forces header alignment on both viewports. | Desktop position sets parent flex/text tokens; mobile header reads section alignment/mobile override. Header explicit mode retains priority. | Honor responsive section alignment and header inheritance on/off. | Preserve horizontal/vertical form layout and mobile stacking; review overlapping position/alignment changes. |
| `blocks/shop-the-look-products.liquid` | Carousel has no next-slide preview controls and clips both viewport edges. | Independent desktop/mobile preview flags reuse shared Swiper; desktop clips the edge facing the lifestyle image for either media position. Elara block/section presets and homepage select desktop false / mobile true. | User requested theme-specific Shop the look preview on 2026-10-07. | Preserve flag bindings, image-side clipping, grid behavior and shared carousel/editor lifecycle; review overlapping upstream changes before merging. |
| `assets/critical.css` | Shared selected swatches have a body-color outer border and fixed inner inset; inactive swatches have a muted border. | Match Figma nodes `52164:10240` and `52020:28836`: card selection border follows the actual swatch color; product/overlay selection uses the heading token. Inner background frame targets the 4px design inset but shrinks with rendered height to keep flat ratios visible. Inactive color swatches have no visible frame. Width, ratio, radius, gap and border/underline choice remain settings-driven, including local picker overrides. | Match card and featured product/quick view/quick add without freezing merchant options. | Preserve native/fallback color ownership and settings cascade; review upstream changes to shared swatch selection and container sizing before merging. |
| `snippets/css-variables.liquid` | H1–H4 letter-spacing is hard-coded to -1.28/-0.8/-0.64/-0.48px; H5/H6 use zero; H2 normal line-height becomes 130% on tablet. | All heading roles consume the existing shared `type_letter_spacing` option; H2 tablet inherits its selected line-height without an override. Current normal spacing is 0px and H2 normal is 120% at every breakpoint. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Match Malandra typography node `43415:6890` and make existing settings control their output, as requested on 2026-10-06. | Review overlapping upstream typography token changes; preserve the existing setting IDs and shared setting behavior. Reconcile changed line-height/spacing semantics with the owner before merging. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `sections/slideshow.liquid` | Fixed desktop heights: 420, 560, 640, 900, 1080px. Fixed mobile heights: 320, 440, 560, 680, 820px. Progress segments stretch across the content inset, with 4px gaps and 2–3px tracks. | Medium is 800px desktop and 600px mobile; fixed height options scale proportionally. Progress pagination uses 50 × 4px tracks, 16px gaps and a 40px bottom inset at both viewports, with 44px button hit areas. Adapt and Full screen retain their existing behavior. | Match the supplied Figma slideshow heights and progress pagination, as authorized on 2026-10-06. | Review overlapping upstream slideshow implementation changes before merging. Preserve the calibrated height scale and local progress geometry; keep shared carousel styles unchanged. Reconcile any changed height or pagination semantics with the owner. |
| `snippets/product-card.liquid` | Swatches render above or below details; manual badges are not passed to the badge renderer. | Accepts an optional `inline` swatch position and opts into the existing configurable manual badge rules. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Match right-side swatches and the Round Topaz Best Seller badge. | Preserve existing variant image/price selection and quick-add behavior; reconcile overlapping markup changes before merging. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `assets/critical.css` | Product details and swatches occupy separate rows; price uses the shared size and smaller faded compare-at value. | Inline cards use a two-column information row. Product-card price reads desktop/mobile size tokens; compare-at uses the same size and full opacity. Titles read a weight token; inline titles have 1.5 line-height. | Match Figma's 16px medium titles, 14px prices, and compact swatches. | Scope changes to product cards; retain inherited money colors, shared prices elsewhere, focus and variant states. |
| `snippets/css-variables.liquid` | Product-card typography exposes only title size; swatch position normalizes to top/bottom. | Adds title weight, desktop/mobile price-size tokens and supports the optional inline position, in addition to the earlier typography customization above. | Ensure new Theme Editor settings control rendered values. | Preserve both the earlier heading-token customization and this card-token mapping when reconciling upstream changes. |
| `snippets/swatch.liquid` | Gold/Silver fallback colors are fixed; native Shopify swatch colors take precedence. | Configurable fallback Gold/Silver colors, selected as #dabe79/#e6e6e6 for this theme. Native data continues to take precedence. | Match Figma colors while retaining the existing Color option fallback contract. | Preserve native priority; settings affect only exact Gold/Silver names, not other shared color aliases. |
| `blocks/collection-card-title.liquid` | Displays the full resource title. | Optional exact end suffix can be hidden in the displayed heading; selected value is ` - Elara`. Resource title and URL remain intact. | Category cards display Earrings/Bracelets/Necklaces/Rings as in Figma while Admin names retain the required suffix. | Keep suffix hiding opt-in and exact; preserve count and heading semantics. |
| `snippets/collection-card-render.liquid` | Supports standard ratios and custom ratio in 0.1 increments. | Adds explicit `portrait_6_7` ratio for category cards. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Match Figma's 600:700 category images precisely. Product cards keep the existing 4:5 portrait setting. | Keep all existing ratio values and bounds; preserve the added ratio when merging media logic. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/gallery-item.liquid` | Square social image with profile footer. | Optional product picker replaces the footer with a linked 70px thumbnail, shared title/price and an accessible cart form; optional 5:7 media ratio. Empty product preserves the social footer. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Compose the four inspiration cards using the existing Gallery Carousel and Carousel runtime. | Preserve social mode and carousel/editor ownership; product prices and cart routes must remain Shopify-derived. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/product-list.liquid` | Applies the translation filter to an actual collection title. | Uses the collection title verbatim; translates only the empty fallback label. | Prevent missing-translation carousel labels after attaching Elara collections. | Keep resource titles separate from translation keys when merging. |
| `snippets/product-collection-grid.liquid` | Translates a supplied carousel label a second time. | Preserves the supplied accessible name and translates only an absent label. | Correct shared carousel accessibility names for real product collections. | Preserve caller ownership of accessible labels and the localized empty fallback. |
| `blocks/product-price.liquid` | Price size uses fixed body roles and inherits shared weight. | Optional custom size 10–48px and weight override; Popular item selects 22px/500. | Match Figma detail price without changing prices on other surfaces. | Preserve existing role values, money formatting and variant price templates. |
| `blocks/product-buy-quantity.liquid` | Base uses SVG assets or the generic quantity icon. | Quantity controls render the shared quantity-icon snippet; cart and variant behavior remains unchanged. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `snippets/quantity-icon.liquid` | Base uses SVG assets or the generic quantity icon. | Embeds original Figma minus/plus geometry alongside standard icon fallback. CSS displays Figma only in Featured product and standard icons elsewhere. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `snippets/icon-account.liquid` | Base uses SVG assets or the generic quantity icon. | Moves the existing base account SVG unchanged from assets into a reusable snippet. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `snippets/icon-cart.liquid` | Base uses SVG assets or the generic quantity icon. | Moves the existing base cart SVG unchanged from assets into a reusable snippet. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `snippets/shoppy-x-ray.liquid` | Base uses SVG assets or the generic quantity icon. | Embeds the existing base illustration with a 300x300 viewport and its original drawing coordinates. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `sections/hello-world.liquid` | Base uses SVG assets or the generic quantity icon. | Renders shoppy-x-ray inline instead of requesting an SVG asset. | User requires SVGs in snippets rather than assets. | Preserve snippet rendering, icon geometry, accessibility and existing runtime; review overlapping upstream changes before merging. |
| `snippets/social-icon.liquid` | Social links use the base inline SVG brand drawings. | Facebook, Instagram, Pinterest and TikTok embed original 24x24 Figma SVG markup directly in this snippet, preserving drawing paths/colors; no social asset files. Icon-width settings and accessible link names remain supported. | Match Malandra node `52184:1065` and the requested snippet-only storage. | Preserve inline SVGs, link URLs, accessible names, text mode and missing-link omission; review upstream changes before merging. |
| `snippets/social-links.liquid` | Social order places TikTok before Pinterest. | Social order is Facebook, Instagram, Pinterest, TikTok, then the remaining platforms, matching the supplied Figma reference. | Match the authorized Malandra social icons. | Preserve local SVG dependencies, link URLs, accessible names, text mode and missing-link omission; review upstream changes before merging. |
| `sections/featured-product.liquid` | Thumbnail spacing inherits the Product media Gallery spacing value. | Scoped CSS overrides thumbnail gap tokens to 10px desktop and 8px mobile; Swiper reads the computed tokens and calculates slide margins/rail geometry. Gallery-to-thumbnail spacing remains controlled by Gallery spacing. | Match Malandra Figma nodes `52020:28816` and `52426:9475` without adding a setting. | Preserve scoped thumbnail tokens; review overlapping Featured product CSS or Product media spacing changes before merging. |
| `blocks/_product-media.liquid` | Main product media uses its natural image ratio. | Optional main-image setting emits a scoped data attribute and exact CSS ratio token for square and all 21 ratio_W_H presets. Thumbnail ratio branches support the same preset set; video/model media retains its existing behavior. Gallery spacing now emits desktop/mobile gap tokens even at schema defaults; thumbnail spacing uses the exact selected value without the previous +4px/+2px offsets. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. Navigation arrows now use shared primary button tokens (2026-10-09). | Match the square Popular item media shown in Figma. Fix Gallery spacing values not matching the editor. | Preserve gallery state, variant filtering and editor/runtime bindings. Preserve exact gap bindings and do not restore thumbnail offsets or omit default-valued overrides. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/_overlay-product-media.liquid` | Overlay product gallery navigation uses secondary button tokens. | Previous/next arrows use shared primary button classes, with existing gallery state, accessibility labels and positioning unchanged. | Owner requested primary Product media navigation on 2026-10-09. | Preserve primary navigation classes and existing overlay/gallery bindings; review overlapping implementation changes. |
| `assets/product-media.css` | Product media has natural height. | Image-only cropping uses the owning block’s exact ratio token for any non-Auto selection, including legacy square; video/model media is unchanged. | Match Figma while retaining original source AVIF assets. | Keep rules scoped to the block data attribute and image media; do not crop video/model media. |
| `blocks/slideshow-slide.liquid` | Main CDN crops use base mobile heights; content positioning, surface and width depend on CSS from the Hero section. | Pass Elara mobile heights 343/471/600/729/879px to shared artwork/preload renderer. Own slide surface, media/link layering, content widths and all nine desktop/mobile position mappings locally, following the Essen fix; retain slideshow gap tokens. Scope the surface grid above Hero specificity so its row fills the slide even when Hero CSS loads later. | Keep calibrated artwork and make position settings work when Hero CSS is absent (2026-10-07). | Preserve height agreement between section CSS, picture sources and preload hints. Preserve independent slide positioning at both breakpoints, Classic/Split layouts, content widths and gap settings; review overlapping upstream changes. |
| `sections/password.liquid` | Main renders password content from merchant blocks. | Preserve the existing password title as a translated fallback when no blocks are saved; keep main dialog, logo, footer and no-JavaScript form. | Preserve existing password composition during the approved base sync. | Keep empty-composition fallback and new merchant block support when merging. |
| `sections/text-marquee-custom.liquid` | Main uses shared layout-flow and omits space-between from mobile alignment. | Exposes direction/mobile-stack classes consumed by child Group Height Fill; normalizes horizontal position independently of vertical position; constrains mobile alignment to left/center/right. Maps Group layout direction, position, alignment and Fit/Fill height to shared flow; Fill propagates through the container/content wrappers. | Keep scrolling content and child Group sizing consistent across desktop/mobile (2026-10-07). | Preserve direction hooks, responsive axis handling, independent horizontal-position fallback and shared flow mapping. Current implementation still supports section Fit/Fill; later upstream changes must be reviewed against this current code. |
| `blocks/product-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/blog-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/carousel.liquid` | Main Carousel settings, order, definitions and Slide-only child contract. | Add only the recorded independent mobile preview setting alongside the main desktop preview; Arche/Essen use contained N + 2/7, Elara/Malandra use 1.2 for one mobile column. | Reapply genuine preview custom without retaining legacy base options. | Main controls remain authoritative; no legacy card/border/loop/transition option group. |
| `blocks/product-callout-gallery.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `assets/carousel-block.js` | Main common Carousel owner uses shared scoped runtime. | Owner layout policy restores 1.2 slides for enabled one-column mobile preview; two columns remain two; suppress preview for insufficient items. | Reapply the documented theme preview on main lifecycle. | Preserve pre-JS/runtime parity, resize, cloned loop behavior and editor cleanup. |
| `snippets/product-collection-grid.liquid` | Only forwards desktop preview to shared Swiper. | Forward optional mobile preview from Product list without changing grid rendering. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `sections/collections-with-background.liquid` | Desktop fixed heights 28/36/44/52/62rem; mobile shows separate cards. | Elara desktop scale anchored at Medium 680px; optional mobile background tabs anchored at Medium 600px with one stacked background and vertical titles; picture images fill the media container. | User requested theme-specific Figma heights and mobile click-to-switch backgrounds on 2026-10-07. | Preserve the tab layout option, mobile position controls and fixed-height calibration; review overlapping upstream layout changes before merging. |
| `assets/collections-with-background.js` | Mobile hides tabs and exposes every panel; desktop hover/click selects a panel. | Mobile tabs keep one selected panel, support click/keyboard and preserve selection across viewport changes; mobile hover does not switch backgrounds. | Match the authorized Elara mobile interaction. | Preserve abortable editor lifecycle, keyboard focus, selected-panel accessibility and existing mobile card/carousel modes. |
| `blocks/image.liquid` | Image ratios expose Auto, 1:1, 4:5, 4:3, 16:9 and custom W/H. | Adds exact 6:7, 5:7, 2:3, 5:4 and 2:1 presets independently on desktop/mobile; fixed ratios set media height from the resolved value. Original keeps natural sizing; Fill height uses the parent height with cover and separate desktop/mobile controls. Ratio order follows the reference theme, retaining additional repository ratios and legacy Auto as an Original fallback. | Make Malandra Figma ratios selectable without custom W/H. | Preserve saved custom values, natural legacy Auto sizing and independent Original/Fill height modes; review overlapping ratio/height changes before merging. |
| `snippets/image-ratio-value.liquid` | Shared resolver handles standard and custom ratios. | Resolves the five additional Malandra presets as exact CSS fractions. | Keep rendering consistent with Image settings. | Preserve existing callers/defaults; retain the added mapping with the block schema. |
| `blocks/press-item.liquid` | Press logos expose standard ratios or original dimensions. | Adds selectable exact 2:1 ratio. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | Match Figma 120×60 desktop / 100×50 mobile logo slots. | Preserve quote/pagination runtime and resource-derived original ratio; reconcile overlapping media changes. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `sections/shop-the-look-section.liquid` | Fixed-ratio sizing guard recognizes only standard/custom values. | Recognizes the new Image presets, including the saved 6:7 ratio. | Preserve image-led sizing when a named Figma ratio is selected. | Keep desktop sizing guard synchronized with Image presets; preserve hotspots, products and mobile behavior. |
| `blocks/blog-card.liquid` | Original fixed image/media ratio choices. | Blog card ratio branches support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/first-card.liquid` | Original fixed image/media ratio choices. | First blog card ratio branches support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/collection-thumbnail.liquid` | Original fixed image/media ratio choices. | Collection thumbnail CSS ratio classes support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/image-card.liquid` | Original fixed image/media ratio choices. | Desktop/mobile Image card height-ratio options and CSS classes support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/image-comparison.liquid` | Original fixed image/media ratio choices. | Desktop/mobile numeric comparison media ratio branches support the complete reciprocal Malandra preset set. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. |
| `sections/collections-with-tabs.liquid` | Original fixed image/media ratio choices. | Resolve named presets before emitting tab image ratio CSS support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `sections/image-text-stacked-bands.liquid` | Original fixed image/media ratio choices. | Desktop/mobile numeric stacked-band ratio branches support the complete reciprocal Malandra preset set. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. |
| `snippets/media-card.liquid` | Original fixed image/media ratio choices. | Shared Banner/Image card responsive ratio CSS classes support the complete reciprocal Malandra preset set. Image ratios use canonical ratio_* values/original; Custom resolves W/H with existing responsive ownership. | User requires every image/media ratio control to expose the same Figma ratios and inverses (2026-10-08). | Preserve legacy choices/defaults and custom/Auto semantics; reconcile schema, renderer and scoped CSS together on upstream overlap. | Preserve canonical ratio values, W/H consumers and saved-ratio migration.
| `blocks/images.liquid` | No overlapping Images composition block in main. | Composes static Image children first/second with percentage width/position/anchor and front-layer controls. Height selects Fill or proportional Custom height (780px reference width); the Size mobile toggle controls mobile width, limits and height (343px reference width). Each image has an independent mobile-position toggle with a legacy global-toggle fallback. Horizontal offsets are bounded, padding is capped and overflow is clipped with focus allowance. Reuses Image for media/ratios/links/radius. | User requested the Malandra FAQ overlapping images on 2026-10-08. | Preserve static child IDs first/second, responsive geometry and child Image contracts; review overlapping upstream changes. |
| `sections/faq-image-accordion.liquid` | Generic Group/FAQ composition; two independent images without an overlapping canvas. | Allows Images and gives a horizontal Group containing Images two equal desktop columns, stacking on mobile when the Group is configured to stack. Preset replaces the image-only Group with Images. Simple Accordion is wrapped in a configurable Group with 80px desktop / 0px mobile right padding in the preset and homepage; the section only scopes #ccc bottom dividers to direct or Group-wrapped Accordion children; the shared reference Chevron is 24px. Presets use Heading 5 and 20px row padding via gap options. | Match Figma desktop 52695:11908 / mobile 52702:12135. | Keep layout rules scoped to the Images composition and preserve unrelated FAQ/Group behavior. |
| `assets/critical.css` | Shared layout-flow has no axis-specific sizing for direct Height Fill children. | Horizontal Fill children stretch; vertical Fill children grow with zero flex basis; mobile stacked rows keep intrinsic main-axis sizing. | Support content-sized Group, split and marquee layouts. | Preserve these axis rules alongside the earlier alignment, swatch and product-card customizations; review overlapping shared layout changes. |
| `blocks/video.liquid`, `blocks/gallery-item.liquid`, `blocks/product-card-compact.liquid`, `blocks/carousel.liquid`, `blocks/product-callout-gallery.liquid` | Main provides each component’s original media ratio choices. | Extend existing component-specific rendering with the common 21 exact ratio_W_H presets, including reciprocal ratios and independent mobile mappings where supported. | Complete the image/video ratio contract across all media surfaces. | Preserve every earlier behavior in these rows plus the complete ratio mappings; reconcile schema and rendering together. |
| `snippets/collection-card-render.liquid`, `snippets/_overlay-media-ratio.liquid`, `snippets/css-variables.liquid`, `snippets/product-card.liquid` | Main uses legacy collection, overlay and global product-card ratios. | Resolve or accept all 21 ratio_W_H presets with exact fractions while preserving legacy/custom/natural choices. | Keep Collection card, Overlay and Product card output consistent with their selectors. | Preserve earlier collection/card/token customizations; keep overlay callers, ratio validation and emitted CSS in sync. |
| `snippets/image-ratio-value.liquid`, `blocks/image.liquid`, `blocks/press-item.liquid`, `sections/shop-the-look-section.liquid` | Main supports its original ratio choices and sizing guard. | Shared resolver handles all 21 exact presets and legacy named ratios, plus Original/Auto and Fill height semantics; Image and Press consume the mappings and Shop the look recognizes added fixed presets. Image Fill stretches through its media surface with a 100px minimum and axis-specific flex growth. | Preserve selectable design ratios and responsive Image sizing. | Preserve existing saved values, Original/Auto fallback, independent viewport modes and image-led Shop the look sizing. |
| `blocks/marquee.liquid` | General Basic/item composition with a repeating scroll track. | Nine private direct child types; reference parent divider/edge/parallax/alignment/width/scheme/vertical-padding options and 0.1–2x speed. Measures the final nowrap layout before cloning, covers a viewport after the seam, keeps pixel velocity independent of content length and loop phase across relayout. Scroll influence drains over frames; Storefront hover/focus and editor hover/Inspector pause also stop parallax; selected parent/child blocks keep moving after pointer exit, including retained editor focus. Runtime/load handlers are idempotent with unload cleanup. A single-Heading preset supports regression QA. | Match observed reference setup and fix one-Heading/scroll seams without an Item wrapper. | Preserve the private allow-list, supported instance/preset migrations, divider ownership, phase/measurement and editor cleanup; reconcile overlapping base changes explicitly. |
| `blocks/_marquee-heading.liquid`, `blocks/_marquee-text.liquid` | Main only has general Heading/Text kernels with layout width/padding. | Private intrinsic-width compact variants: Heading inline richtext, outline, role color/opacity and custom desktop/mobile typography; Text richtext, Body/Accent, size, tracking and role color. No layout width, padding or height collapse controls. Text color now shares the Basic Heading color picker including alpha/help text, applies to fill and outline, and falls back to the scheme heading color. | Verified reference `heading_simple` and `text_simple` UI on 2026-10-08. | Keep same-name general blocks independent; preserve text/size and the explicit stored opacity migration. |
| `blocks/_marquee-image.liquid` | Main has a general responsive Image kernel. | Private compact image: one source, common ratio, link/new-tab, 50–400px desktop and mobile width, radius; shared image/ratio rendering. Mobile maximum raised from 200px to 400px on 2026-10-08 with user approval to support Gallery images at 300/350px (Figma 52702:12116); saved widths and the 50px default remain unchanged. | Verified reference `image_simple` UI on 2026-10-08. | Preserve pixel sizing and compact schema; do not add general Fit/Fill, mobile media or padding controls without a new requirement. |
| `blocks/_marquee-icon.liquid` | Main uses general Icon. | Private scope with library/checked custom SVG, accessible link label, desktop/mobile icon size/internal padding, entrance effect and top/bottom outer padding. Keeps the local SVG library and saved custom artwork. | Preserve existing source artwork while reflecting compact Marquee spacing/animation controls. | Keep the checked shared renderer and accessibility; reference icon artwork and full catalog are not yet verified equivalents. |
| `sections/scrolling-text-star-separator.liquid` | Main contains a separate scrolling star separator section duplicating Text marquee composition. | Deleted the redundant section; retained `text-marquee-custom` as the section used in homepage/About us, with matching Text marquee (custom) schema/preset/template names. | User explicitly requested retirement on 2026-10-08. | Preserve this deliberate removal when syncing main; do not reintroduce the old section. Saved content and composition remain owned by Text marquee (custom). |
| `blocks/_marquee-button.liquid` | Main has a general CTA with width/padding. | Compact rich label/link, five styles, optional arrow and independent inherited/preset desktop/mobile heights. | Verified reference `button_simple` controls. | Keep the compact CTA schema and scoped global button tokens; do not alter general Button. |
| `blocks/_marquee-countdown-timer.liquid` | Main has a general timer with duration inputs and broader typography/layout controls. | Isolated countdown element and selectors with compact three layouts, fixed expiry or seven recurring durations, four heading number sizes, two label sizes, custom color/background, entrance effect and vertical padding. Calendar months clamp to their last valid day; recurring anchor persists for original/copies. | Verified reference timer UI; shared repo runtime adapted to isolated ownership. | Preserve no-JS server values, expiry/interval cleanup, calendar arithmetic and clone handling; review timer logic changes intentionally. |
| `blocks/_marquee-coupon-code.liquid` | No equivalent base block. | Literal escaped code, bold/background/size and vertical padding; accessible clipboard success/failure status, reconnect-safe listener. | Add the reference Coupon code composition option. | Preserve escaped code, localization, no-JS readable code and listener cleanup. |
| `blocks/_marquee-divider.liquid` | General Divider owns its own layout settings. | Compact thickness, Fill/Max/percentage length, inherit/custom border color and responsive vertical padding. | Add the reference Divider composition option. | Keep rule sizing constrained by the local parent and dedicated private picker targeting. |
| `blocks/_marquee-group.liquid` | General Group supports flexible layout width/composition. | Private scrolling Group with intrinsic content width, automatic height, direction/alignment/gap, border/radius/shadow/scheme and four-side responsive padding; Size/Height controls removed at user request; children come from ordinary theme/app inventory. | Verified `group_scrolling` is distinct, while children use ordinary blocks. | Preserve intrinsic sizing without Size/Height controls and ordinary child ownership; available nested types follow the local repo inventory. |
| `snippets/marquee-letter-spacing.liquid` | No compact tracking helper. | Resolves the eight local tracking choices to scoped CSS variables shared by compact Heading/Text. | Avoid duplicated typography translation and global token overrides. | Preserve role tokens and local tracking scope. |
| `sections/testimonial-carousel.liquid` | Generic composition; no private split contract. | Renames to Testimonial: split, restricts to one private carousel and removes section gaps; three-slide full-bleed Malandra preset. | User requested Figma split rebuild on 2026-10-08. | Preserve private slot IDs, original inline SVG snippets and fixed layout; review overlapping upstream changes before merging. |
| `blocks/carousel_split.liquid` | Generic composition; no private split contract. | Private Carousel fixes columns to one and slide gaps to zero, disables previews; Style first and only Autoplay/Padding schema headers; shared Swiper runtime. | User requested Figma split rebuild on 2026-10-08. | Preserve private slot IDs, original inline SVG snippets and fixed layout; review overlapping upstream changes before merging. |
| `blocks/slide.liquid` | Main Slide option definitions and radius choices. | Retain the recorded simplified Inherit/Color scheme controls. | Reapply only recorded custom logic after rebuilding from main. | Main controls are authoritative; legacy non-custom radius choices map through the main migration. |
| `snippets/testimonial-split-arrow.liquid` | Generic composition; no private split contract. | Original Figma shaft/tip exports composed in a 24px directional wrapper, preserving dimensions; accessible controls have 44px effective targets. | User requested Figma split rebuild on 2026-10-08. | Preserve private slot IDs, original inline SVG snippets and fixed layout; review overlapping upstream changes before merging. |
| `blocks/testimonial-item.liquid` | Legacy reusable testimonial item. | Deleted because no template instances use it; removed explicit registrations from Carousel and Gallery header group. | User requested deleting the unused block. | Keep it deleted and migrate any upstream usage to the owning approved block before merging. |
| `assets/cart-drawer.css` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `assets/section-collection.css` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/_collection-sort.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/_collection-toolbar.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/_header-menu.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/collection-tab.liquid` | Main deferred Collection tab loading and product/promo slots. | Retain explicit tab-layout-styles dependency; saved labels, collections and promo content remain theme-owned. | Owner authorized rebuilding promotion/Collection tabs from main. | Keep main loading/lifecycle; preserve saved content and compatible layout values. |
| `blocks/countdown-timer.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/gallery-strip-feature-item.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/gallery-strip-item.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/localization.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/product-list-banner.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/tab-layout.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/tabs-view-all-button.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `blocks/view-all-button.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/blog-posts.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/cart-drawer.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/featured-blog-posts.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/featured-collection.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `sections/hero.liquid` | Implementation on personal main `729be6cf`. | Preserve the theme implementation from `c987610b` and its existing DOM, geometry, configured content and legacy setting consumers. | Owner requested base sync with unchanged current layout on 2026-10-09. | Keep this compatibility implementation; review future main overlaps and migrate only after preserving saved values and layout. |
| `assets/component-collection-card.css` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `assets/product-media.js` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `assets/section-parallax.css` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/_header-menu-toggle.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/_mega-menu-banner.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/collection-background-item.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/collection-promo.liquid` | Main Collection promo including overlay-style controls. | No retained legacy implementation; preserve saved promotion media/content and layout. | Owner explicitly authorized migration. | Keep saved references and compatible layout; new controls use main defaults. |
| `blocks/gallery-image.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/parallax-item.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/product-callout.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/product-variant-picker.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `blocks/promo-card.liquid` | Main Promo card including overlay-style controls. | No retained legacy implementation; rebuild uses main and preserves template/preset content and layout values. | Owner explicitly authorized migration. | New controls use main defaults; keep merchant resources, alignment, position and spacing. |
| `blocks/scrolling-card.liquid` | Personal main `fafdc8de`. | Keep the previous theme implementation and schema. | Preserve custom compositions and their dependencies. | Retain until an explicit migration is requested. |
| `assets/bundle-summary.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/cart-drawer-recommendations.js` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/comparison-table.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/featured-collection-banner.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/hotspot-full-width-carousel.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/image-comparison.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/marquee-countdown-timer.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/product-callout.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/timeline-list.css` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/timeline-list.js` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/_announcement-social-links.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/_bundle-summary.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/_header-account.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/_header-top.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/_marquee-heading.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/blog-card-button.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/button.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/collection-list-items.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/comparison-table.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/editorial-text.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/email-signup.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/eyebrow.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/heading.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/icon.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/image-text-card-grid-item.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/menu.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/slide_split.liquid` | Main Split uses static image/content slots and scoped shared lifecycle. | Retain original theme arrow artwork; main already supplies equal columns, mobile stacking and bottom controls. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Keep main slot contracts and source SVG geometry; no legacy _slide_split reference. |
| `blocks/text.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `blocks/timeline-list.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `sections/featured-collection-banner.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `sections/header.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `sections/hotspot-full-width-carousel.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `sections/hotspot-gallery.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `sections/product.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/badge.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/block-animation-attributes.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/gallery-strip-item-styles.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/heading-size-token.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/hero-styles.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/icon.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/image-comparison.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/image.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/localization-styles.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/product-badges.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/product-callout-runtime.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/product-card-image.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/tab-layout-styles.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `snippets/theme-button.liquid` | Personal main efbbac9e implementation. | Retain existing theme logic outside the rebuilt scope, or the explicitly reapplied custom addition. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Review against this new main checkpoint; preserve documented behavior and dependencies. |
| `assets/carousel-runtime.js` | Main shared lifecycle owns initialization, controls, loop clones, autoplay and editor cleanup. | Optional owner layout policy restores independently configured mobile preview and contained preview; rounded manual progress for Arche/Essen. | Owner requested rebuild from main followed by custom reapplication (2026-10-14). | Use policy only for common Carousel; other owners use main defaults. Preserve cleanup and main single-clock behavior. |
| `sections/countdown.liquid` | Personal main `2cf6e5ab`. | Keep the previous theme implementation unchanged as a custom composition dependency. | Owner excludes custom sections/blocks and dependencies from base updates. | Retain until explicitly authorized to migrate. |

## Figma catalog and card composition — 2026-10-07

### Shop the look preset follow-up — 2026-10-07

References: desktop `52006:3442`, mobile `52426:9291` in Figma file `7BbUHDzKGaMGMkyRpu0YZ8`. Uses `skills/figma-preset-section-builder/SKILL.md` and `skills/theme-catalog-content/SKILL.md`.

After the Figma connector became available, both nodes were read again with `figma-design-to-code` and their returned screenshots inspected. Mobile metadata confirms a 375px-wide frame, 343px-wide content, 343 × 400.17px lifestyle image, 30px/36px-line-height heading, 40px image/content gap, 36px heading/card and card/pagination gaps, and 256px cards with a 16px gap. Existing preset settings already express the supported spacing, ratios, heading scale, resource selections and hotspot positions; no additional configuration adjustment was needed from this fresh evidence.

The existing `shop-the-look-section` preset selects the same AVIF lifestyle image and product handles as homepage `shop_the_look`. At the user's follow-up request, Curly Molten Mini Initial Necklace (`elara-curly-molten-mini-initial-necklace`, product ID `15408516661547`, $38 Gold variant) was added last to both compositions. Live Shopify readback confirms ACTIVE status, its AVIF image and stock 100. Both compositions retain the existing responsive H2 (34px desktop / 30px mobile), image ratio 6:7, two desktop columns / one mobile column, 20px / 16px product gaps, 56px / 40px section gaps, 64px / 36px pagination spacing, and 10px top / 80px desktop bottom / 56px mobile bottom padding. Pagination remains explicitly enabled with `progress_bar` in both preset and template; three products now exceed the two desktop columns. The image alt text is set in both preset and template. The initial composition changes were configuration only. The separately authorized preview customization now adds two block checkbox settings and forwards them to the shared Swiper. Desktop preview clips the image-facing edge for either media position, while mobile uses existing 1.2-slide sizing with one column. Block preset, section preset and saved homepage select desktop false / mobile true. Checkbox schema defaults remain false to preserve existing instances without saved values.

Three hotspot centers are mapped from Figma image-local coordinates and rounded to the existing integer-percent settings, in product order: September desktop 55% / 84%, mobile 50% / 84%; Savi desktop 44% / 28%, mobile 40% / 28%; Curly desktop 66% / 91%, mobile 66% / 90%. Desktop measurements use the 772 × 900.67px image, mobile the 343 × 400.17px image. All hotspots are enabled and have independent mobile positions. The September desktop Y was corrected from 85% to the nearest measured 84%.

Store readback: `layouthub-template-v2.myshopify.com`, USD. Reused September Birthstone Necklace (`15408515154219`, $45) and Savi Triple Ridge Hoop Earrings (`15408515580203`, $28, compare-at $50). Both are ACTIVE and published on Online Store. Gold/Silver variants have distinct AVIF images, inventory tracking enabled and current sample stock 100 each. No product, publication, stock or media mutation was needed. Current readback is saved in ignored `.shopify/elara-catalog/shop-the-look-current-readback.json`.

Remaining configuration gaps: the section applies fixed content padding, which reduces product widths relative to Figma's 376px desktop cards; the new mobile preview exposes 1.2 slides using the shared carousel behavior, but has no exact card-width setting to express the 256px Figma card. The shared hotspot indicator has fixed dimensions rather than Figma's distinct active/inactive desktop/mobile sizes. These remaining gaps are outside the requested preview customization. The prior third-hotspot gap is resolved by the user's explicit product selection.

Validation: Theme Check passed (322 files, zero errors, 33 warnings); customization coverage passed. Existing development storefront content verified both product names, prices and color options. Both Figma reference screenshots are now verified through the connector. The preview supervisor/port 9300 remains stopped; browser inspection timed out, so the edited composition has not been verified in a fresh desktop/mobile storefront render. No theme push, publication, commit or global settings edit was performed.

Preview customization validation: Theme Check passed again (322 files, zero errors, 33 warnings), diff whitespace checks passed and customization coverage includes 18 implementation files. A localhost fixture using the actual shared Swiper CSS/JS and block stylesheet verified asymmetric desktop clip paths at 1100px for both image positions, navigation after sliding, independent mobile flags at 375px, 1.2 slides for one-column mobile preview and preserved two-column sizing. Block preset, section preset and homepage settings were checked for desktop false / mobile true. The plugin Liquid validator could not run because its bundled theme-check dependency is missing; installed Shopify CLI Theme Check was used instead. This fixture does not verify the full live storefront or Theme Editor.

Source: Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52006:3791`; product sections `52164:10235`, `52006:3442`, `52403:9864`, `52162:6695`, `52020:28816`.
The catalog workflow uses the user-provided `skills/theme-catalog-content/SKILL.md`. Collection titles use the explicitly requested suffix ` - Elara`. Product titles retain Figma wording.

Schema additions are in `config/settings_schema.json` (card weight/price size/inline swatches and fallback colors), `blocks/collection-card.liquid` (6:7 ratio), and the modified product/gallery leaf block schemas. These are configuration contracts; implementation differences are listed above.

### Composition plan and saved settings

- Role/placement: homepage content in `templates/index.json`, on the existing `theme/elara-theme` branch.
- Context: verified Shopify collections/products; gallery leaf blocks own their selected product and media. Gallery Carousel owns spacing; Carousel owns columns and responsive overflow.
- Runtime: existing Liquid money, image, cart form, Carousel and cart drawer handlers; no new JavaScript lifecycle.
- Inspiration uses the four exact Figma media-node exports as static AVIF images. Figma does not provide video files through the inspected context; playback controls are not fabricated.
- Trending Jewelry and Best sellers use manually ordered collections. Categories use four category collections. Background collection tabs use Necklaces/Earrings/Bracelets with their existing custom titles.
- Shop the look selects the two products visible in Figma, removes its unused third placeholder from default composition, and preserves the two configured hotspots. Popular item selects the heart necklace with the supplied Figma description, square main media, 22px medium price, 32px round swatches and inventory count enabled.
- Card settings: body font, 16px title, weight 500, single-line title; price 14px; 4:5 image; 12px image/content spacing; inline 16px circular color swatches with 6px gap.
- Collection counts reflect actual catalog membership rather than fabricated quantities from static Figma labels.
- Lighting Ridge Opals is editorial content, explicitly excluded from products by the user. An AVIF of its ring photo had already been uploaded before clarification and is left unreferenced; no Opals product or collection was created.

### Catalog resources

Resource handles, IDs, inventory and media results are saved locally under `.shopify/elara-catalog/`; category/inspiration files under `.shopify/elara-categories/`. These ignored directories contain no credentials. The mutation ledgers record created resources and Online Store publication; resource deletion requires separate authorization.

14 products, 25 color variants: default sample Available 100 at Shop location; Axiom Silver Available 0; Popular item Gold/Silver Available 3. Inventory tracking is enabled and overselling is denied. Prices are USD, matching the verified store currency. The same image with different Figma title/price is kept as separate catalog records; repeated appearances with identical identity reuse the same product. Every variant has its own matching Gold/Silver AVIF. Silver images were generated from the default Gold references; Gold/gallery images are from Figma.

Collections: `trending-jewelry-elara`, `best-sellers-elara`, `earrings-elara`, `bracelets-elara`, `necklaces-elara`, `rings-elara`, `shop-all-elara`. Products and collections are published on Online Store. Shopify has converted collection resource image copies to JPG/PNG; their AVIF source files remain in Files. Product and variant image URLs retain the .avif suffix, and all uploaded source files decode as AVIF. A direct CDN request to one original .avif URL with Accept: image/avif returned image/jpeg, decoded as JPEG; source file format does not guarantee CDN response format. Keep the native image_url/image_tag pipeline: Shopify chooses the delivered format per request. Color options use the theme's existing legacy fallback renderer with configurable exact colors; native Shopify category-linked swatch metafields were not created or modified.

## Slideshow height calibration — 2026-10-06

Figma file: `7BbUHDzKGaMGMkyRpu0YZ8`.
Desktop nodes: `52114:18461`, `52118:18884`, `52118:18899` (1920 × 800px).
Mobile node: `52426:9241` (375 × 600px).
Heights describe the slideshow itself, excluding header and footer.

The theme uses a 62.5% root font size (10px at the standard 16px browser default). Keep the existing rem convention; pixel values below use that baseline. Desktop values scale by 800/640 = 1.25; mobile values scale by 600/560 = 15/14, rounded to the nearest pixel. This preserves the order of all fixed height options.

| Existing option | Base desktop | Theme desktop | Base mobile | Theme mobile |
| --- | --- | --- | --- | --- |
| Extra small | 42rem / 420px | 52.5rem / 525px | 32rem / 320px | 34.3rem / 343px |
| Small | 56rem / 560px | 70rem / 700px | 44rem / 440px | 47.1rem / 471px |
| Medium | 64rem / 640px | 80rem / 800px | 56rem / 560px | 60rem / 600px |
| Large | 90rem / 900px | 112.5rem / 1125px | 68rem / 680px | 72.9rem / 729px |
| Extra large | 108rem / 1080px | 135rem / 1350px | 82rem / 820px | 87.9rem / 879px |

`Adapt` remains content-driven; `Full screen` remains 100svh. The existing 768px breakpoint and schema definitions are unchanged. Both the slideshow section preset and `templates/index.json` select `medium` for desktop and mobile. Those preset/template edits are configuration, not additional custom implementation.

## Slideshow progress pagination — 2026-10-06

The same Figma desktop and mobile nodes above show three rounded tracks, each 50px wide and 4px high, separated by 16px, with their lower edge 40px above the slideshow bottom. The configured center alignment gives a 182px visible group. Inactive tracks use 40% of the current heading color (white in the preset); the active white fill follows the existing autoplay clock.

Only section-local progress pagination CSS changes. Each segment remains a native button with a 50 × 44px hit area, existing labels, keyboard focus, slide selection and autoplay behavior. Its visible track sits in the middle of that hit area. The group respects existing desktop/mobile alignment settings, is hidden for a single slide, and does not change bullets, numbers, shared carousel CSS or JavaScript lifecycle.

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |

## Collection list preset and media — 2026-10-07

References: Figma `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52006:3239` (1920px), mobile `52426:9263` (375px). Configuration only: `sections/collection-list.liquid` preset and `templates/index.json` section `collection_list`; no implementation or schema definitions changed.

Composition: header/heading, collection-list-items, collection-card/title/description. Shop By Category uses responsive H2 size (34px desktop / 30px mobile); card titles use H3 (26px / 22px), product counts use 14px. Four collections retain Earrings, Bracelets, Necklaces, Rings order. Desktop has four columns with 24px gaps; mobile one column with native next-card preview and 16px gaps. Heading/card spacing is 48px desktop / 40px mobile; section padding is 20px top and 80px bottom desktop, 20px top and 56px bottom mobile. Pagination is hidden; stored pagination padding remains 48px / 36px. Homepage View all remains disabled. Presets cannot use `disabled`; the preset leaves that static action unconfigured with no destination (hidden on storefront, potentially visible in the editor). Dynamic preset blocks omit `id`; static blocks retain `id` and `static: true`.

Reused Earrings and Bracelets images. Rings replaced the placeholder with Figma's actual overlay image; Necklaces uses the source photo cropped to its Figma fill offsets. Both are 1200 × 1400 (6:7), decoded and uploaded as AVIF; Shopify's native collection image copies are JPG. Permanent file/collection IDs and URLs are recorded in `elara-collection-list-images.json`; original images, readbacks and rollback URLs are stored in `.shopify/elara-collection-list/`. No products, stock, collection membership, titles or handles changed.

Validation: Theme Check passed at fail-level error (321 files, zero errors; same 34 pre-existing warnings); static-ID and setting/option/range checks passed. Liquid before schema, non-preset schema definitions, and all unrelated template sections are unchanged compared with task-start backups. Store readback and downloaded images confirm both replacement crops. Native storefront/Theme Editor rendering was not verified: the preview supervisor was stopped; no theme push or preview start was performed.

Configuration gaps: full-width still retains the existing global page margins, whereas Figma cards reach the desktop edges; mobile card width follows native 1.2-slide preview rather than a configurable fixed 288px; the native black 65% card gradient differs from Figma's brown 50% gradient. Collection counts retain actual membership instead of the static Figma numbers. These behaviors need separate implementation controls to match exactly.

## Independent mobile next-slide preview — revised 2026-10-07

Final scope: Collection list items retains its existing mobile option. Add the missing mobile checkbox only to Product list, Blog list, Carousel, Product callout gallery, all of which were block settings owners with desktop preview before this request. Keep Desktop preview immediately above Mobile preview. New options default false and use the existing locale key. Collection tabs, Slideshow and Hotspot full-width carousel mobile additions have been reverted, including schema, presets, data attributes and their runtime changes; existing Figma presets and styling are preserved.

Product/Blog/Collection reuse the existing product carousel mobile sizing without modifying its JavaScript. Their owners forward the mobile flag through the shared viewport. Generic Carousel uses a module-local sizing rule: one column plus enabled mobile preview gives 1.2 slides, two columns remain two. Existing desktop settings, gaps and lifecycle stay intact. Fade is disabled when the mobile adjacent-card preview requires slide transitions. No new shared-module export dependency is introduced.

The later configuration-key rebuild changes for Desktop/Mobile columns have been reverted. This update is limited to the mobile preview option and the necessary rendering path for the scoped list owners.

Validation after rollback: Theme Check reports zero errors and 33 warnings; customization coverage passes for 15 implementation files. Slideshow and Hotspot have no mobile-preview references, and both slideshow JavaScript and product carousel JavaScript match their original implementations. Desktop preview arguments are retained alongside the new mobile flags.

## Blog content composition — 2026-10-07

Figma blog node `52164:10141`. Created and verified `Discover Our Story - Elara` (`discover-our-story-elara`, blog ID `125780099371`) after explicit user confirmation. `templates/index.json` / `discover_our_story` and the existing Blog posts preset select this blog; composition retains 3 posts, 3 desktop columns and 1 mobile column. These changes are configuration only.

Three Figma source images were converted and decoded as AVIF, uploaded to Files and read back as READY: `elara-blog-trends.avif`, `elara-blog-occasion.avif`, `elara-blog-eco.avif`. Details, source copy, new editorial bodies and resource ledger are in ignored `.shopify/elara-blog/`. Article titles, summaries and dates come from Figma; bodies are newly written. Articles have not been saved: browser title changes are not reflected in Shopify form state, and CLI lacks content permissions. The blog is currently empty; storefront article images and publication cannot be verified yet. No theme push or publication performed.

### Blog articles completed — 2026-10-07

Checked Shopify before creating: the existing blog was empty, and all three original AVIF Files were READY. Created and published only the three missing articles through the Shopify connector: `trends-elara` (`633710444843`), `occasion-elara` (`633710477611`) and `eco-elara` (`633710510379`). Readback verified exact Figma titles and summaries, editorial bodies, images, empty tags and publication on March 24, June 11 and July 24, 2025 in the store timezone. This resolves the earlier article-save blocker. Bodies are supplementary editorial content rather than text from Figma.

The existing Blog posts preset and homepage `discover_our_story` instance already select `discover-our-story-elara`; verified that the instance occurs in template order and there is only one Blog posts section. No duplicate blog, image, section or preset was created. Shopify converted article covers to JPG while preserving the original AVIF files in Files. IDs, URLs and full readback are saved under ignored `.shopify/elara-blog/`. No theme implementation change, commit, push or publication was performed.

## Collections background custom — 2026-10-07

User-authorized implementation on `theme/elara-theme`, from desktop Figma `52006:3424` (1920 × 680px) and mobile `52426:9307` (375 × 600px). Both the existing section preset and homepage instance now use Medium height, zero top/bottom padding on desktop/mobile, and mobile Background tabs. Mobile uses centered vertical titles, 48px gap and 40px heading size; tapping a title switches the single background. Desktop hover/click and keyboard controls remain available. Collection counts come from the actual collections.

The standard theme root is 10px per rem. Desktop fixed heights scale by 680/440 and round to the nearest pixel: Extra small 433px, Small 556px, Medium 680px, Large 804px, Extra large 958px. Adapt and Full screen retain their existing meanings. Mobile Background tabs use Extra small 450px, Small 563px, Medium 600px, proportional to the original card heights at the 375px Figma width (375/468.75/500px); Adapt uses the first mobile media ratio. These mobile tab heights are fixed independently of viewport width. Existing Vertical and Horizontal card modes keep their original aspect ratios and carousel behavior.

Three Figma background sources were exported, cropped and decoder-verified as six desktop/mobile AVIF files. Each uploaded Shopify image is selected separately in its matching Necklaces, Earrings or Bracelets block.

Validation: Theme Check passed after the final media-fill fix (322 files; zero errors, 33 existing warnings). Customization coverage passed for 17 implementation files. Native browser preview confirmed desktop frame/image height 680px and mobile frame/image height 600px, zero top/bottom padding, 40px mobile titles, exactly one active panel, click/keyboard selection and selected-tab persistence across the breakpoint. The bundled Liquid validation helper could not load its missing `@shopify/theme-check-common` dependency; installed Shopify CLI Theme Check provided validation instead. No commit or push was performed.

### Collections background media completion — 2026-10-07

After explicit user approval, six Figma-derived AVIF files were uploaded through the Shopify upload-image connector to `layouthub-template-v2.myshopify.com`. Readback confirms all six READY, MIME image/avif, desktop 1920 × 680px and mobile 375 × 600px. The homepage and existing preset now select independent desktop/mobile files per collection: Earrings uses the blonde portrait from `52006:3424`; Bracelets uses the hand/bracelets photo from `52039:15375`; Necklaces uses the white blouse/necklaces photo from `52039:15394`. Necklaces uses its measured 30% brown overlay, while Earrings/Bracelets use 20% black. Existing collection handles, block order, height, spacing and interactions are retained. The pending upload limitation above is resolved. File IDs and permanent CDN URLs are saved in ignored `.shopify/elara-collections-background/upload-ledger.json` and verified in `upload-readback.json`. No catalog membership, theme publication, commit or push was performed.

Media verification: restarted the existing development preview after stale CLI upload errors. Browser checks confirm all three desktop AVIFs and all three mobile AVIFs load successfully from their distinct Shopify URLs; mobile tab clicks select the corresponding background, and the frame remains 600px (680px desktop). Theme Check passed with zero errors and 33 existing warnings; customization coverage passed for 18 files.


### 2026-10-07 — Approved merge of current personal main

- Owner approved retaining custom behavior while integrating current base logic. Reviewed overlaps were merged by behavior, without replacing custom implementations.
- Carousel retains independent mobile 1.2-slide preview; fade uses one slide and zero gap when previews are inactive. Preview opts into slide transition.
- Product-card inventory data is added alongside inline swatches and manual badges. Retain product collection labels and mobile preview bindings while importing base section-list navigation classes.
- Keep saved schemas/presets/compositions except new setting defaults, additive approved schema compatibility, and migration/removal of position_vertical explicitly approved by the owner. Existing password title remains for an empty saved block composition. Existing marquee direction/alignment values are migrated, including legacy mobile space-between support.

## Base sync history

### 2026-10-16 — Update from personal main

- Previous main commit: `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf`
- Updated through main commit: `2593c6f2f1c69fdab3d90e2468446b55e8550055`
- Main commits included: 1
- Included main commits:
  - `2593c6f2f1c69fdab3d90e2468446b55e8550055` — chore(base): update base with 1 upstream commits through fea78bca
- Change summary:

```text
No file changes.
```


### 2026-10-16 — Update from personal main

- Previous main commit: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
- Updated through main commit: `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf`
- Main commits included: 1
- Included main commits:
  - `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf` — chore(base): update base with 1 upstream commits through 2a9a0caf
- Change summary:

```text
sections/email-signup-dual-image.liquid        |  12 +--
 sections/email-signup-single-image.liquid      |   8 +-
 sections/image-text-card-grid.liquid           | 127 +------------------------
 sections/location-map.liquid                   |   8 +-
 sections/testimonials-background-custom.liquid |  67 +------------
 sections/testimonials-horizontal-custom.liquid |  75 +--------------
 sections/timeline.liquid                       |   8 +-
 7 files changed, 31 insertions(+), 274 deletions(-)
```


### 2026-10-10 — Update from personal main

- Previous main commit: `729be6cfc3a31211b3107df8b9a6206860e406c9`
- Updated through main commit: `fafdc8de4c9c60757949e90f6c50320b1bf361bf`
- Included main commits:
  - b996ced23c9679b33c545e237347445071348461 fix(sync): preserve custom theme compositions and source option order
  - fafdc8de4c9c60757949e90f6c50320b1bf361bf chore(base): update base with 19 upstream commits through 46304245
- Existing custom implementations, schemas, presets and dependencies remain unchanged. Homepage IDs, order, content and existing settings are validated before commit.
- Reviewed the three solid/gradient overlay visibility mappings. Duplicate inventory locale keys were normalized with identical values. Removed upstream options were retained.

```text
assets/component-blocks-image-card.css         | 261 +++++++++++++
 assets/component-sections-promo-grid.css       |  46 +++
 assets/critical.css                            |  46 ++-
 assets/header.js                               |   3 +-
 assets/promo-grid.js                           |  12 +
 blocks/location-item.liquid                    |  12 +-
 blocks/marquee-item.liquid                     |  45 ++-
 blocks/promo-card-custom.liquid                | 486 +++++++++++++++++++++++
 docs/theme-customization-policy.md             |  10 +
 scripts/theme-base-sync.cjs                    | 109 +++++-
 sections/collection-banner.liquid              |  34 +-
 sections/collection-page-links.liquid          |  76 +++-
 sections/contact-form-custom.liquid            |  44 ++-
 sections/email-signup-dual-image.liquid        |   8 +-
 sections/email-signup-single-image.liquid      |   8 +-
 sections/gallery-full-width-strip.liquid       |   8 +-
 sections/gallery-image-grid.liquid             |  12 +-
 sections/image-comparison-split-custom.liquid  |  24 +-
 sections/image-text-card-grid.liquid           |   8 +-
 sections/location-list.liquid                  |  48 +--
 sections/location-map.liquid                   |  52 +--
 sections/promo-grid-custom.liquid              | 519 +++++++++++++++++++++++++
 sections/scroll-reading-text.liquid            |  46 ++-
 sections/testimonials-background-custom.liquid |  68 ++--
 sections/testimonials-horizontal-custom.liquid |  32 +-
 sections/timeline.liquid                       |  68 +---
 snippets/image-card-content.liquid             | 259 ++++++++++++
 snippets/overlay-background.liquid             |  30 ++
 templates/collection.json                      |  28 +-
 templates/index.spinel-sync.json               |   6 +-
 templates/page.contact.json                    |   5 +-
 tests/image-height.test.cjs                    |  28 ++
 tests/product-media-variant.test.cjs           |  83 ++++
 33 files changed, 2255 insertions(+), 269 deletions(-)
```


### 2026-10-09 — Update from personal main

- Previous main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Updated through main commit: `729be6cfc3a31211b3107df8b9a6206860e406c9`
- Main commits included: 1
- Included main commits:
  - `729be6cfc3a31211b3107df8b9a6206860e406c9` — chore(base): update base with 23 upstream commits through 0cf058f7
- Change summary:

```text
assets/block-animations.js                     | 169 +++++++++
 assets/hero.js                                 |   2 +-
 assets/product-list-promos.js                  |  89 +++++
 blocks/_announcement-social-links.liquid       |  16 +-
 blocks/_comparison-table-features.liquid       |   9 +-
 blocks/_search-products.liquid                 |   4 +-
 blocks/banner.liquid                           |  88 ++---
 blocks/parallax-item.liquid                    |   4 +-
 blocks/promo-card.liquid                       | 455 +++++++++++++++++++++++++
 blocks/tabs-view-all-button.liquid             |  12 +-
 blocks/timeline-list.liquid                    |  27 +-
 blocks/timeline-slide.liquid                   |   4 +-
 blocks/view-all-button.liquid                  |   9 +-
 docs/content-creation-workflow.md              | 197 +++++++++++
 docs/elara-blocks-build-plan.md                |  44 +++
 docs/phase-2-theme-settings.md                 |   4 +
 docs/product-card-compact-build-plan.md        |  31 ++
 docs/promo-card.md                             |  20 ++
 locales/en.default.schema.json                 |   8 +-
 sections/blog-posts.liquid                     |   3 +-
 sections/collection-tabs.liquid                |   3 +-
 sections/email-signup-dual-image.liquid        |   4 +-
 sections/email-signup-single-image.liquid      |   2 +-
 sections/featured-blog-posts.liquid            |   3 +-
 sections/featured-collection-banner.liquid     |   4 +-
 sections/featured-collection-horizontal.liquid |   3 +-
 sections/featured-collection.liquid            |   3 +-
 sections/hotspot-gallery.liquid                |   7 +-
 sections/image-comparison-split-custom.liquid  |   4 +-
 sections/image-text-card-grid.liquid           |   5 +-
 sections/parallax.liquid                       |  24 +-
 sections/testimonials-background-custom.liquid |  18 +-
 sections/testimonials-horizontal-custom.liquid |   7 +-
 sections/timeline.liquid                       |  22 +-
 snippets/comparison-table-column-shell.liquid  |   6 +
 snippets/font-faces.liquid                     |  30 ++
 snippets/gallery-strip-item-styles.liquid      |  24 ++
 snippets/hero-styles.liquid                    | 276 +++++++++++++++
 snippets/localization-styles.liquid            | 251 ++++++++++++++
 snippets/product-list-promo-items.liquid       |  24 ++
 snippets/product-list-promo-styles.liquid      |   7 +
 snippets/search-filters.liquid                 | 101 ------
 snippets/tab-layout-styles.liquid              | 146 ++++++++
 templates/collection.json                      |   3 +-
 templates/index.json                           |  13 +-
 templates/index.spinel-sync.json               |   9 +-
 templates/page.about-us.json                   |   3 +-
 47 files changed, 1932 insertions(+), 265 deletions(-)
```


### 2026-10-07 — Update from personal main

- Previous main commit: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
- Updated through main commit: `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d`
- Main commits included: 2
- Included main commits:
  - `36b9ab04bcbb59ea3073666812dcfa5244f4c15c` — chore(base): update base with 112 upstream commits through bedb4bd5
  - `8f3ac3c9345da36c73b2e1fea3ed4e6303e47d0d` — fix(sync): preserve presets for used and custom theme sections
- Change summary:

```text
assets/carousel-block.js                           |   9 +-
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
 blocks/_bundle-product-list.liquid                 | 189 ++++-
 blocks/_bundle-summary.liquid                      | 509 ++++++++++--
 blocks/_collection-breadcrumb.liquid               |  45 +-
 blocks/_collection-columns.liquid                  | 108 ++-
 blocks/_collection-count.liquid                    |  14 +-
 blocks/_collection-filter.liquid                   |  36 +-
 blocks/_collection-pagination.liquid               |  35 +-
 blocks/_collection-products.liquid                 |  15 +-
 blocks/_collection-sort.liquid                     |  43 +-
 blocks/_collection-toolbar.liquid                  | 115 ++-
 blocks/_collections-page-card.liquid               | 297 ++++++-
 blocks/_column.liquid                              |  98 ++-
 blocks/_header-account.liquid                      |  70 +-
 blocks/_header-cart.liquid                         |  30 +-
 blocks/_header-divider.liquid                      |  10 +-
 blocks/_header-localization.liquid                 |  25 +-
 blocks/_header-logo.liquid                         |  10 +-
 blocks/_header-menu.liquid                         | 136 +++-
 blocks/_header-search.liquid                       |  75 +-
 blocks/_header-top.liquid                          |  47 +-
 blocks/_mega-menu-banner.liquid                    | 476 +++++++++--
 blocks/_mega-menu-banners.liquid                   | 226 +++++-
 blocks/_overlay-product-media.liquid               | 150 +++-
 blocks/_product-collection-grid.liquid             |   4 +-
 blocks/_product-details.liquid                     | 149 +++-
 blocks/_product-media.liquid                       | 115 ++-
 blocks/_search-input.liquid                        | 262 ++++++
 blocks/_search-products.liquid                     | 148 ++++
 blocks/_search-results.liquid                      | 155 ++++
 blocks/announcement-countdown-timer.liquid         | 276 ++++++-
 blocks/announcement-text.liquid                    |  63 +-
 blocks/banner.liquid                               |  77 +-
 blocks/blog-archive-list.liquid                    |  32 +-
 blocks/blog-card-button.liquid                     |  25 +-
 blocks/blog-card-description.liquid                |  50 +-
 blocks/blog-card-meta.liquid                       | 175 +++-
 blocks/blog-card-tag.liquid                        |  85 +-
 blocks/blog-card-title.liquid                      |  90 ++-
 blocks/blog-card.liquid                            | 142 +++-
 blocks/blog-grid.liquid                            | 104 ++-
 blocks/blog-list.liquid                            | 152 +++-
 blocks/button-view-details.liquid                  |  10 +-
 blocks/button.liquid                               |  45 +-
 blocks/buttons.liquid                              | 150 +++-
 blocks/carousel.liquid                             | 290 +++++--
 blocks/collection-background-item.liquid           |  70 +-
 blocks/collection-card-button.liquid               |  45 +-
 blocks/collection-card-description.liquid          |  60 +-
 blocks/collection-card-title.liquid                | 110 ++-
 blocks/collection-card.liquid                      | 313 +++++++-
 blocks/collection-list-items.liquid                | 133 ++-
 blocks/collection-promo.liquid                     | 313 ++++++--
 blocks/collection-tab.liquid                       |   4 +-
 blocks/collection-thumbnail.liquid                 |  73 +-
 blocks/collections-with-tabs-item.liquid           |  72 +-
 blocks/comparison-table-column.liquid              |  62 +-
 blocks/comparison-table.liquid                     |   2 +-
 blocks/contact-field.liquid                        |  37 +-
 blocks/contact-form.liquid                         | 473 ++++++++---
 blocks/countdown-timer.liquid                      | 190 ++++-
 blocks/discount-code.liquid                        | 161 +++-
 blocks/divider.liquid                              |  60 +-
 blocks/editorial-text.liquid                       | 581 ++++++++++++--
 blocks/email-signup.liquid                         |  90 ++-
 blocks/eyebrow.liquid                              |  43 +-
 blocks/faq_accordion.liquid                        | 497 +++++++++++-
 blocks/faq_answer_text.liquid                      |   6 +-
 blocks/faq_category.liquid                         | 201 ++++-
 blocks/faq_item.liquid                             | 224 +++++-
 blocks/first-card.liquid                           | 134 +++-
 blocks/gallery-grid.liquid                         | 216 ++++-
 blocks/gallery-header-group.liquid                 | 323 ++++++--
 blocks/gallery-image.liquid                        | 218 ++++-
 blocks/gallery-item.liquid                         | 137 +++-
 blocks/gallery-strip-feature-item.liquid           |  71 +-
 blocks/gallery-strip-item.liquid                   |  38 +-
 blocks/gallery-strip-overlay-group.liquid          | 101 ++-
 blocks/grid.liquid                                 |  94 ++-
 blocks/group.liquid                                | 260 ++++--
 blocks/header.liquid                               | 130 ++-
 blocks/heading.liquid                              | 124 ++-
 blocks/icon.liquid                                 | 175 +++-
 blocks/image-card.liquid                           | 268 +++++--
 blocks/image-comparison.liquid                     | 190 ++++-
 blocks/image-text-card-grid-item.liquid            |  32 +-
 blocks/image-text-stacked-band.liquid              |  84 +-
 blocks/image.liquid                                | 125 ++-
 blocks/localization.liquid                         |  40 +-
 blocks/location-item.liquid                        | 145 +++-
 blocks/location-list.liquid                        |  61 +-
 blocks/logo.liquid                                 |  20 +-
 blocks/marquee-item.liquid                         |  21 +-
 blocks/marquee.liquid                              |  93 ++-
 blocks/menu.liquid                                 | 110 ++-
 blocks/policy-links.liquid                         |  30 +-
 blocks/popup.liquid                                |  16 +-
 blocks/press-item.liquid                           |  56 +-
 blocks/press-quotes.liquid                         |   6 +-
 blocks/previous-and-next-posts.liquid              |   2 +-
 blocks/product-accordion.liquid                    | 105 ++-
 blocks/product-buy-accelerated-checkout.liquid     |  21 +-
 blocks/product-buy-add-to-cart.liquid              |  32 +-
 blocks/product-buy-buttons.liquid                  |   3 +
 blocks/product-buy-quantity.liquid                 |  91 ++-
 blocks/product-callout-gallery.liquid              | 143 +++-
 blocks/product-callout.liquid                      | 427 ++++++++--
 blocks/product-card.liquid                         |  10 +-
 blocks/product-description.liquid                  |  50 +-
 blocks/product-inventory.liquid                    |  10 +-
 blocks/product-list-banner.liquid                  |  14 +-
 blocks/product-list.liquid                         |  17 +-
 blocks/product-pickup-availability.liquid          | 202 ++++-
 blocks/product-price.liquid                        |  95 ++-
 blocks/product-recommendations.liquid              |  30 +-
 blocks/product-sticky-add-to-cart.liquid           |  56 +-
 blocks/product-title.liquid                        |  85 +-
 blocks/product-variant-picker.liquid               |  20 +-
 blocks/row.liquid                                  |  36 +-
 blocks/scroll-to.liquid                            |  25 +-
 blocks/scrolling-card.liquid                       | 163 +++-
 blocks/shop-the-look-products.liquid               | 106 ++-
 blocks/slideshow-slide.liquid                      | 425 +++++++++-
 blocks/social-links.liquid                         |  30 +-
 blocks/spacer.liquid                               |  20 +-
 blocks/tab-layout.liquid                           |  70 +-
 blocks/tabs-view-all-button.liquid                 |  45 +-
 blocks/testimonial-item.liquid                     | 218 ++++-
 blocks/text.liquid                                 |  85 +-
 blocks/timeline-list.liquid                        |  30 +-
 blocks/timeline-slide.liquid                       |   2 +-
 blocks/video.liquid                                | 135 +++-
 blocks/view-all-button.liquid                      | 116 ++-
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
 locales/en.default.schema.json                     |  24 +-
 scripts/theme-base-sync.cjs                        | 151 +++-
 sections/404.liquid                                | 218 ++++-
 sections/announcement-bar.liquid                   | 409 ++++++++--
 sections/blog-posts.liquid                         | 202 +----
 sections/breadcrumbs.liquid                        |  61 +-
 sections/bundle-builder.liquid                     | 199 ++++-
 sections/cart-drawer.liquid                        |  47 +-
 sections/collection-list-thumbnails.liquid         | 570 ++++++++++++-
 sections/collection-list.liquid                    | 176 +---
 sections/collection-page-breadcrumb.liquid         | 202 ++++-
 sections/collection-page-links.liquid              | 187 ++++-
 sections/collection-tabs.liquid                    | 200 ++++-
 sections/collections-with-background.liquid        | 617 +++++++++++++-
 sections/collections-with-tabs.liquid              | 453 ++++++++++-
 sections/collections.liquid                        |   2 +-
 sections/comparison-table-custom.liquid            |   2 +-
 sections/contact-form-custom.liquid                |  53 +-
 sections/contact-information.liquid                | 182 ++++-
 sections/countdown.liquid                          | 105 ++-
 sections/divider.liquid                            |  66 +-
 sections/email-signup-dual-image.liquid            | 374 +++++++--
 sections/email-signup-form.liquid                  |  58 +-
 sections/email-signup-single-image.liquid          |  76 +-
 sections/faq-accordion.liquid                      | 347 +++++++-
 sections/featured-blog-posts.liquid                | 201 ++---
 sections/featured-collection-banner.liquid         |  47 +-
 sections/featured-collection.liquid                | 311 ++-----
 sections/footer.liquid                             |  36 +-
 sections/gallery-carousel.liquid                   | 324 +++++++-
 sections/gallery-full-width-strip.liquid           | 234 +++++-
 sections/gallery-image-grid.liquid                 | 284 ++++++-
 sections/header.liquid                             |  80 +-
 sections/hero.liquid                               | 318 ++++++--
 sections/hotspot-full-width-carousel.liquid        | 208 ++++-
 sections/hotspot-gallery.liquid                    |  14 +-
 sections/hotspot.liquid                            |  53 +-
 sections/icon-text-cards.liquid                    | 418 ++++++++--
 sections/icon-text-inline.liquid                   | 127 ++-
 sections/image-cards.liquid                        |  20 +-
 sections/image-comparison-custom.liquid            | 106 ++-
 sections/image-comparison-split-custom.liquid      | 198 +++--
 sections/image-text-card-grid.liquid               | 224 +++++-
 sections/image-text-stacked-bands.liquid           | 545 +++++++++++--
 sections/location-list.liquid                      | 266 +++++-
 sections/location-map.liquid                       | 286 ++++++-
 sections/page.liquid                               |   6 +-
 sections/parallax.liquid                           |   2 +-
 sections/password.liquid                           | 228 +++++-
 sections/product-information.liquid                |  44 +-
 sections/product.liquid                            |   6 +-
 sections/quick-add.liquid                          |  55 +-
 sections/quick-view.liquid                         |  55 +-
 sections/recently-viewed-card.liquid               |  42 +
 sections/related-posts.liquid                      |  11 +-
 sections/rich-text.liquid                          |  48 +-
 sections/scroll-reading-text.liquid                | 105 ++-
 sections/scrolling-cards.liquid                    | 161 +++-
 sections/scrolling-text-star-separator.liquid      | 492 ++++++++++--
 sections/search-overlay.liquid                     |  81 +-
 sections/search.liquid                             | 555 +++----------
 sections/shop-the-look-section.liquid              |  49 +-
 sections/slideshow.liquid                          | 418 +++++++++-
 sections/testimonial-carousel.liquid               | 665 +++++++++++++--
 sections/testimonials-background-custom.liquid     | 108 ++-
 sections/testimonials-horizontal-custom.liquid     |  70 +-
 sections/text-marquee-custom.liquid                | 322 +++++---
 sections/timeline.liquid                           |  24 +-
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
 templates/index.json                               |  14 +-
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
 264 files changed, 27266 insertions(+), 5262 deletions(-)
```

- Validation: 194 Node tests pass, including merged carousel, variants, inventory, pointer tolerance, CDN artwork/preload and schema synchronization. Full Theme Check passes with zero errors and 38 warnings. Saved-value audit confirms only approved position_vertical removal; global settings schema remains unchanged. Live Shopify storefront/editor was not exercised.

## Header alignment verification — 2026-10-07

Shared header resolves inherited desktop/mobile flex and text context locally, and explicit alignment emits both viewport values. Shared list composition covers Featured collection, Collection list, Blog posts and Featured blog posts. Collection tabs now supplies separate normalized text context; Press and Bundle builder no longer force header overrides; Email signup supplies desktop form-position context and mobile section-alignment context.

Validation: 462 computed-style checks passed in temporary headless Chrome fixtures at 1280px and 375px, using the actual shared/section styles and header inheritance expressions. Cases cover left/center/right combinations, inheritance on/off, explicit desktop fallback, list sections, align-content parents, both Collection tabs layout directions, Press, Bundle builder and Email signup. Theme Check passed with zero errors and 36 warnings; customization coverage passed for 26 implementation files; git diff --check passed. These fixtures do not verify the live storefront or Theme Editor lifecycle.

## Slideshow position verification — 2026-10-07

- Fixed Hero CSS loading after slideshow: the content grid row now fills the slide; slideshow padding and gap rules retain their local precedence.
- Passed 324 Chromium layout cases covering nine positions, desktop/tablet/mobile, Classic/Split, Fit/Custom/Fill and Hero CSS loaded after the slide. Container height is explicitly checked against surface height. Theme Check: zero errors, 36 warnings.
- Uploaded only `blocks/slideshow-slide.liquid` to `layouthub-template-v2.myshopify.com`, development theme `191894126891`; pulled the file back and confirmed byte-for-byte equality. Rollback is owned by this local theme branch; remove the scoped CSS precedence adjustments and re-upload this file if needed.
- Live Theme Editor confirmed Desktop Bottom right and Mobile Top left visibly reposition the first slide. Restored both position settings to Center center after testing; Save returned disabled. No template/settings files were uploaded.

## Video product carousel (custom) — 2026-10-07

Replaced the homepage `inspiration_products` composition with the independent `video-product-carousel-custom` section at the existing Figma inspiration position: after Shop Best Sellers and before Text marquee. Section preset and saved homepage use Header → Carousel → four Slide blocks; each Slide contains the existing Video block followed by a separate Product card: Compact. No combined Video/Product slide block remains. Shared Carousel and Slide implementations are unchanged.

Retained the four inspiration AVIF covers and product handles. Video adds an exact 5:7 ratio and opt-in empty-video cover fallback (default false); the new composition enables that fallback. No video resource was supplied or uploaded, so the saved slides render covers until a Shopify video is selected. Compact uses thumbnail widths 70px desktop / 50px mobile, responsive gaps/box padding and shared title, price, buttons and Quick Add. Multiple-variant products open the existing option picker; sold-out controls are disabled. Reference Compact controls were inspected read-only in Omnise Theme Editor theme `139629002837`, section `template--18890725687381__custom_section_bQUprd`; that store was used only as a reference.

Validation: six Liquid/composition tests pass, including single/multiple variant actions, sold-out/missing products, removable controls, preset/template tree/order and video fallback/ratio. Theme Check: zero errors, 36 existing warnings; customization coverage and whitespace checks pass. A local fixture using actual section/block Liquid and shared CSS/Swiper verified four desktop slides at 1440px, mobile preview at 375px, no horizontal document overflow, 70px/50px thumbnails and 44px action targets. Fixture product data/font tokens were supplied for layout QA; it does not verify live Shopify resource resolution, actual video playback or a fresh Theme Editor save/reload. No commit, push or theme publication performed.

## Split layout controls follow-up — 2026-10-07

At user request, removed Position, Alignment and Height controls from Image with text: split. Flow uses fixed start alignment, centered horizontal position and fit height; Direction and Vertical on mobile remain configurable. Padding group is named Padding and mobile padding customization defaults off in schema/preset. Gap and padding numeric values are unchanged.

## Section height removal — 2026-10-07

Removed the Fit/Fill section height setting, preset values and height classes/styles from Featured collection: horizontal and Scrolling Text Images. Scrolling Text Images also removes its vertical position control that depended on Fill height; horizontal position remains. Migrated saved section settings without changing block-owned heights.


## Video carousel source assignment — 2026-10-07

Assigned the four MP4 files verified in layouthub-template-v2 Content → Files (`elara-inspiration-1` through `elara-inspiration-4`) to corresponding Video blocks in both the section preset and saved homepage template. Preserved existing covers, product handles, slide order, click-to-play and looping settings. Shopify Video IDs in slide order: 46439393526059, 46439393493291, 46439393460523, 46439392837931. No shared runtime changes.

Validation: all six existing carousel tests pass; Theme Check reports zero errors and 36 existing warnings; whitespace validation passes. Live storefront playback remains unverified.


## Homepage video carousel placement — 2026-10-07

Moved `inspiration_products` immediately before `popular_item_heading` (Custom section replacing Rich text), followed by `featured_product_popular` (Featured product). Preserved the section composition and resources; updated the existing order assertion.


## Compact card button style — 2026-10-07

Set all four Product card: Compact buttons to Primary in the Video product carousel preset and saved homepage template, as requested. Shared block defaults and cart behavior remain unchanged.


## Compact product image ratio — 2026-10-07

Set `image_ratio` to `square` (1:1) for all four Compact product cards in the carousel preset and saved homepage. Thumbnail widths remain 70px desktop and 50px mobile.

## Testimonial Carousel — Malandra layout — 2026-10-07

Figma references: `7BbUHDzKGaMGMkyRpu0YZ8`, desktop `52011:28304`, mobile `52426:9370`. Both high-fidelity contexts and screenshots were inspected. Design uses 1920 × 768 desktop with equal columns and 375px mobile with a 300px image, 40px image/content gap, 22px/1.4 quote, 24px content/navigation gaps and 56px bottom space. Desktop image retains 5:4 ratio; content padding scales to 96px at the design width. Existing uploaded `elara-figma-testimonial.avif`, saved quotes/authors and theme Figtree/Kaisei Decol fonts are reused. The five SVG assets are original Figma exports, stored locally without path edits. The empty default preset image remains merchant-editable; homepage image selections are preserved.

The requested Figma layout is the default section behavior; the temporary `malandra_layout` editor option and saved values were removed at the user's request. Navigation reuses shared carousel buttons, translated accessible labels, disabled states and keyboard behavior. No global typography changes are required. No commit, push or publication was requested.


## Current implementation audit — 2026-10-07

Reviewed the current working-tree changes against `HEAD`, excluding section/block schema, and retained the existing records for implementation differences from personal `main`. The uncommitted implementation covers:

- Shared alignment: `blocks/header.liquid`, `assets/critical.css`, `sections/collection-tabs.liquid`, `sections/press.liquid`, `sections/bundle-builder.liquid` and `sections/email-signup-form.liquid`.
- Responsive layout and Group Fill sizing: `blocks/group.liquid`, `sections/image-text-split-layout.liquid` and `sections/text-marquee-custom.liquid`.
- Independent slideshow positioning and CSS precedence: `blocks/slideshow-slide.liquid`.
- Video rendering, control proportions and custom compositions: `blocks/video.liquid`, `snippets/video.liquid`, `blocks/product-card-compact.liquid`, `sections/video-product-carousel-custom.liquid` and `sections/featured-collection-horizontal.liquid`.
- Testimonial layout/runtime: `sections/testimonial-carousel.liquid`, `assets/elara-testimonial-carousel.js` and the five local testimonial SVG dependencies listed in the table.

The current edits in `sections/featured-collection.liquid` and `sections/hero.liquid` are entirely inside schema; they require no custom implementation row. Changes in `templates/index.json`, `templates/page.about-us.json` and `locales/en.default.schema.json` are configuration/localization. The new `tests/video-product-carousel.test.cjs` is verification support, not storefront implementation.

Current code clarification: Scrolling Text Images still reads section Fit/Fill and applies height classes/styles. Image with text: split retains fallback mapping for removed position/alignment/height controls. The earlier “Section height removal” and “Split layout controls follow-up” notes are historical and do not override the current behavior recorded above.

Validation for this documentation audit: `node theme-base check-custom elara-theme` passes with coverage for 35 custom implementation files relative to personal `main`; all 17 currently changed/new Liquid/CSS/JS implementation paths have table entries, with five SVG dependencies explicitly listed. No storefront behavior or runtime validation was rerun for this documentation-only edit.

Follow-up editor options: Alignment and Alignment (mobile) use text select options Left/Center/Right, with independent mobile control always visible. Gap has Desktop gap/Mobile gap sliders; old alignment/gap customization toggles are removed. Preset and homepage gap values are migrated to `gap_desktop`/`gap_mobile`; legacy saved content-gap keys remain readable as fallback. Section gaps keep their original role between top-level content blocks; nested Group gaps still own testimonial content spacing. Malandra content and controls respond to the section alignment controls on each breakpoint.

Validation: Shopify Theme Check passed (336 files, zero errors, 36 warnings), JavaScript syntax and diff whitespace checks passed, and `check-custom elara-theme` covers 36 custom implementation files. A local Chrome fixture using actual section/block styles and the custom positioning script passed geometry checks at 1920px, 768px and 375px: equal desktop columns, 300px mobile image at 375px, 40px media/content gap, 48px desktop and 24px mobile content/control spacing, no horizontal overflow, 26/22px quote sizes, hidden fraction, and independent mobile right alignment. SVG files are non-empty and retain original root dimensions. The fixture uses fallback fonts and simplified media, so it does not establish a complete visual match on Shopify; live storefront and Theme Editor rendering remain unverified because preview is stopped. The linked Google project workflow was inaccessible; local repository and installed workflow instructions were used.

Editor simplification follow-up: Figma section layout now always applies without a Malandra checkbox. Testimonial item desktop Direction is fixed Horizontal; its desktop Alignment control is removed. Vertical on mobile and Mobile alignment remain, with conditional visibility updated to depend only on Vertical on mobile. Appearance is renamed Border. Corresponding section/block preset and homepage item values were cleaned up.

Final validation after editor simplification: Theme Check passed with zero errors and 36 warnings; customization coverage passed for 36 files.


## Malandra homepage image/video ratio audit — 2026-10-08

Theme-only customization for `theme/elara-theme`. Sources: [desktop](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52006-3791), [mobile](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52426-9238). Read both screenshots, all visible image-fill geometry, and high-fidelity contexts for representative media slots on both breakpoints. Ratios refer to the visible crop/frame, not the source file dimensions. Existing merchant images/videos remain selected.

| Surface | Desktop Figma slot | Mobile Figma slot | Ratio / implementation |
| --- | --- | --- | --- |
| Slideshow | 1920×800 (`52114:18461`) | 375×600 (`52426:9241`) | 12:5 / 5:8 at reference widths; existing Medium heights 800/600px already match. Keep height controls and responsive width. |
| Trending / Best Sellers / look products | 385×481.25 / 340×425 / 376×470 | 256×320 | 4:5; existing global Product card Portrait option already selected. |
| Categories | 462×539 (`52006:3244`) | 288×336 (`52426:9268`) | 6:7; existing Collection card preset already selected. |
| Shop the Look lifestyle | 772×900.667 (`52006:3446`) | 343×400.167 (`52426:9295`) | 6:7; selects new named Image preset. |
| Background categories | 1920×680 (`52006:3424`) | 375×600 (`52426:9307`) | 48:17 / 5:8 at reference widths; existing Medium height/tab composition already match. |
| Testimonial image | 960×768 (`52011:28329`) | 375×300 (`52426:9405`) | 5:4; named Image preset. Section CSS now consumes independent block ratio variables with 5:4 fallback instead of overriding every option. |
| Opals editorial image | 960×768 (`52310:1295`) | 375×300 (`52426:9410`) | 5:4; changes Auto to named preset in homepage and corresponding section preset. |
| Opals ring image | 380×475 (`52310:1304`) | 256×320 (`52426:9418`) | 4:5; existing Portrait option replaces equivalent custom W/H. |
| Inspiration video covers | 385×539 (`52162:6707`) | 288×403.2 (`52426:9425`) | 5:7; existing Video Portrait tall remains selected; Compact thumbnails remain 1:1. |
| Popular item | 768×768 (`52020:28820`) | 343×343 (`52426:9481`) | 1:1; existing main-image/thumbnail Square options already selected. |
| Press logos | 120×60 (`52055:16481`) | 100×50 (`52426:9537`) | New 2:1 option selected in homepage and Press preset; mobile width corrected to 100px. |
| Blog cards | 594.667×446 (`52164:10146`) | 288×216 (`52426:9547`) | 4:3; existing Landscape option already selected. |
| FAQ collage | 360×540 + 350×350 | 200×300 + 160×160 | 2:3 + 1:1; named Image presets replace equivalent custom W/H. |
| Social gallery | 300×300 / 350×350 | 300×300 / 350×350 | 1:1; existing Square option replaces equivalent custom W/H. |

Image and Video both expose missing Figma presets 6:7, 5:7, 2:3, 5:4 and 2:1 (Video already had 5:7). Existing Auto/Original, standard options and custom values stay supported. Preset migrations cover corresponding homepage sections only; saved About us and other pages retain their existing values. Source asset cropping/art direction, card widths, content spacing and playback behavior are outside this ratio change. Preserve these theme-specific options and selected values during future base updates; review overlaps before merging. No commit, push or Shopify upload performed.


### Consistent ratio options and inverses — 2026-10-08

Follow-up requirement applies across all image/media ratio selectors, including the ratio choices inside Image card Height. Each selector now includes the same 21 explicit values (`ratio_W_H`) and labels: 1:1; 4:5 / 5:4; 6:7 / 7:6; 5:7 / 7:5; 2:3 / 3:2; 4:3 / 3:4; 2:1 / 1:2; 16:9 / 9:16; 12:5 / 5:12; 48:17 / 17:48; 5:8 / 8:5. Existing legacy options remain compatible; original decimal ratios in Collection tabs remain valid. Swatch shape/height ratios are decorative option controls and retain their separate contract.

Coverage: Image, Video, Banner, Image card, Comparison, Gallery item, Product card (global), Compact product thumbnail, Collection card / Collections page card, Blog card / First card, Carousel image-text cards, Product callout gallery, Product main-image/thumbnail, Overlay desktop/mobile/thumbnail, Press, Collection thumbnails, Collection tabs, and Stacked bands. Renderers map presets to exact CSS fractions; Comparison/Stacked bands use numeric division where their existing consumers require a number. Product main-image cropping now supports the complete set while remaining image-only; video/model media behavior stays unchanged.

Implementation dependencies additionally extend existing table records for `blocks/video.liquid`, `blocks/gallery-item.liquid`, `blocks/product-card-compact.liquid`, `blocks/carousel.liquid`, `blocks/product-callout-gallery.liquid`, `blocks/_product-media.liquid`, `blocks/_overlay-product-media.liquid`, `snippets/collection-card-render.liquid`, `snippets/_overlay-media-ratio.liquid`, `snippets/css-variables.liquid`, `snippets/product-card.liquid` and `assets/product-media.css`. Schema-only additions also touch `blocks/banner.liquid`, `blocks/collection-card.liquid`, `blocks/_collections-page-card.liquid`, `sections/collection-list-thumbnails.liquid` and `config/settings_schema.json`. Preserve both the earlier customization in each record and this ratio extension when updating from main. Homepage and relevant presets use canonical options for the newly named ratios; previously saved legacy options remain accepted.

Validation: all 30 image/media ratio selectors expose the common 21-preset set; all 216 Node tests pass, including 16 new schema/Liquid ratio checks. A headless Chrome fixture using actual Image card/Media card, Image, Testimonial, Collection thumbnail and Product media CSS passes 336 geometry checks at 1920px and 375px, covering every common ratio. Theme Check passes with zero errors and 40 warnings (36 existing plus four LiquidComplexity warnings in Product media, Image comparison, Video and CSS variables after adding the ratio branches). Customization coverage passes for 48 implementation files; whitespace checks pass. The fixture verifies scoped media geometry, not complete live storefront imagery or a Theme Editor save/reload; no Shopify upload has been performed.


## Press preset logo selections — 2026-10-08

References: Figma desktop `52055:16474`, mobile `52426:9530`; both high-fidelity contexts/screenshots inspected. Added existing Shopify Files selections and alt text to all five Press section preset items, matching the saved homepage order: Mejuri, Lagos, Pandora, Marie Claire, Guess. Homepage selections were already the corresponding original Figma source exports (`elara-figma-press-*.avif`); their alt text is now explicit. Existing source manifest maps these files to desktop nodes `52055:16481`–`52055:16485`; mobile uses the same five source assets. Retained the previously selected 2:1 slot ratio and widths 120px desktop / 100px mobile. This is preset/template configuration, with no new custom rendering logic or asset upload.


## Section / Group / Image Layout verification — 2026-10-08

Reference: Omnise Elvara theme 139629002837, Custom section 7k3GtJ. Inspected editor controls and tried the Direction/Height/mobile-stack combinations, then undid all test changes without saving the reference theme. Kept only controls already present in this repository; differently named equivalents map to the existing setting IDs. Original and Fill height are independent Image choices. Existing Image Auto instances are migrated to Original, with a runtime fallback for older saved instances.

| Setup | Position | Alignment | Mobile |
| --- | --- | --- | --- |
| Horizontal, Fit or Fill height | Top / Center / Bottom controls the row cross axis. | Left / Center / Right / Space between controls the row main axis. | Without stacking, retain the row and desktop placement. |
| Horizontal with mobile stacking | Desktop Position retains its row meaning. | Mobile Left / Center / Right controls the stacked cross axis. | Reset the new column main axis to start; do not inherit desktop horizontal placement. |
| Vertical, Fit height | Hidden; no free height to distribute. | Left / Center / Right controls the cross axis. | Repo's existing mobile alignment override remains supported. |
| Vertical, Fill height | Top / Center / Bottom / Space between distributes remaining height. | Left / Center / Right controls the cross axis. | Mobile main axis resets to start; mobile alignment controls the cross axis. |

Automated Liquid/visibility matrix covers Group, Image with text: split, and Scrolling Text Images; numerical ratio regression tests preserve all repository ratios. Browser fixture using repository CSS confirmed equal padded columns, Fill image height, all four vertical positions, and mobile Original with no horizontal overflow. The reference's extra controls (boxed layout, sticky content, swipe, animation, background video and other absent settings) are not introduced.


## Images block and FAQ composition — 2026-10-08

Plan/contract: reusable content block inside a merchant-managed Group or compatible section; no resource context or JavaScript. Images owns canvas geometry, width and padding; two fixed Image children (`first`, `second`) own source, mobile source, alt, link, ratio, radius and image padding. Their reading/focus order remains first → second regardless of the front layer. The canvas supports independently hidden children and placeholders. FAQ owns equal columns and responsive stacking. No global settings change.

Design: Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, desktop wrapper `52695:11971` (780×540), mobile wrapper `52702:12139` (343×300), full sections `52695:11908` / `52702:12135`. Front square width 45% / 47%, left 10% / 7%, vertical center 50% / 50%; back 2:3 width 46% / 58%, left 44% / 35%, top 0%. At the user's follow-up request, percentage geometry controls use range sliders with 1% increments; widths span 10–100%, positions span 0–100%. Defaults are rounded from Figma (within 3px at the reference widths). Heights 540px / 300px remain editable.

FAQ preset and homepage `faq_image_accordion` now use Images with the existing pool and earrings AVIF Shopify images. Saved child settings/media are retained; child width switches to Fill inside its positioned slot. The preset selects the same media. Assets are existing exact Figma exports, recorded in the local source manifest (`52695:11972` earrings, `52695:11973` pool); no new media upload or theme deployment.

Validation: Shopify Theme Check inspected 337 files with zero errors and 41 warnings (none in Images or FAQ Image Accordion). `git diff --check` and `node theme-base check-custom elara-theme` passed. Local Liquid render with the real block/snippet/styles verified 1920px (780×540 canvas, equal 780px columns), 1024px and 375px (343×300 canvas, one column); both AVIF assets loaded with nonzero geometry and no horizontal overflow. Desktop/mobile Images screenshots were compared to the Figma renders. Static block calls are substituted in the local fixture, so this is not a live Shopify/Theme Editor lifecycle verification. No commit or push.

Validation: 24 tests passed; `git diff --check` and customization coverage passed. Full Theme Check reported 7 schema-step errors in the concurrently added `blocks/images.liquid`. A temporary QA config excluding only that unrelated file passed with 40 warnings. No reference-theme Save action, Git commit or push was performed.


## Press uploaded-image ratio correction — 2026-10-08

The earlier source selections were raw embedded Figma logo files with different natural dimensions (Mejuri 1369×263, Lagos 500×500, Pandora 2003×680, Marie Claire 866×650, Guess 3840×2160). Setting a 2:1 frame with cover therefore cropped the logo. Replaced selections with native PNG exports of the complete 120×60 Figma logo frames, including their original crop/position and surrounding space. Exports are 480×240 for Mejuri/Lagos/Pandora/Guess and 360×180 for Marie Claire; every uploaded file is intrinsically 2:1 and at least 3× desktop display resolution. Figma canvas remains unchanged.

Local exact-export dependencies: `assets/elara-press-mejuri-2x1.png`, `assets/elara-press-lagos-2x1.png`, `assets/elara-press-pandora-2x1.png`, `assets/elara-press-marie-claire-2x1.png`, `assets/elara-press-guess-2x1.png`. Both section preset and homepage select the corresponding new Shopify Files images. Old uploads are retained for rollback; no unrelated media resource is replaced.

Upload ledger: canonical store `layouthub-template-v2.myshopify.com`, development editor theme `191894126891`. Newly created Shopify MediaImage IDs: Mejuri `46463607636267`, Lagos `46463607865643`, Pandora `46463607111979`, Marie Claire `46463611961643`, Guess `46463609962795`. Upload responses confirm filename and canonical-store CDN URLs. Rollback selects the previous `elara-figma-press-*.avif` files. Theme Check passes with zero errors and 40 warnings; file dimensions and whitespace checks pass.

Live Theme Editor verification: the existing development CLI synced the updated references. A separate clean editor tab confirmed the new filename and 2:1 setting, all five full logos on desktop, and the horizontal logo row on mobile. No editor Save action was performed; the user's original tab and unsaved changes were preserved.


### Images responsive fix — 2026-10-08

The fixed 540px/300px canvas height previously diverged from percentage image widths at intermediate/narrow/wide viewports. Height settings now describe reference heights at canvas widths 780px/343px; CSS aspect-ratio scales the canvas with its available width. With mobile customization disabled, mobile inherits the desktop reference ratio as well as the desktop positions. Existing height IDs and stored values remain valid. Horizontal offsets clamp to the space remaining beside each image; canvas overflow is clipped with a 4px allowance for focus outlines. Root padding is capped at 25% per edge so it cannot exceed narrow custom widths. No JavaScript or global styles were added.

Validation: real Liquid/snippet/CSS local render passed at 320, 375, 430, 767, 768, 1024, 1440 and 1920px, with loaded images, no horizontal overflow and both default image rectangles contained in the canvas. Verified canvas dimensions scale proportionally, including 343×300 at 375px and 398×348.1 at 430px. Mobile customization disabled also passed at 320/430px using the desktop ratio. Inspected screenshots at tablet and narrow/wide mobile widths. Full Theme Check passed with zero errors and 40 existing warnings. Customization coverage and whitespace checks passed. Local fixtures substitute static-block calls; live Theme Editor remains unverified. No commit, push or store deployment.

## Saved reference DOM and preset correction — 2026-10-08

Read saved Omnise Elvara section DOM, computed styles and applicable CSS rules at desktop and 390px mobile. [Inspection and class mapping](../layout-reference-elvara.md) records the reference classes, equivalent local settings and measurements. Corrected split preset and homepage: Section Top/Left, gaps 0/30; left Group Horizontal/Fill, right Group Vertical/Fit/Center; both Group gaps 20; right padding 64 on all devices; right Image Original/Fill width without limits; Heading/Image/Button remain direct siblings. Existing Elara media/text/visual typography/button style are retained. These saved reference values supersede the earlier guessed preset spacing and two-Fill setup.

Shared vertical mobile flow now explicitly resets main-axis placement to start. Column Group Fill uses flex 1 1 0%; row-to-column mobile Group sizing stays intrinsic. Image Fill has an auto-height stretch surface, 100px minimum and axis-specific flex growth; media remains absolutely inset inside image padding. No reference-theme Save action, Git commit or push.

Browser verification after correction: at 1280px, columns are 640px each despite right padding 64px; Fill image matches the 656px row height. A separate Section gap 40 / Group gap 20 case gives two 620px columns plus exactly 40px gap. At 390px, the section stacks with 30px gap; right content width is 262px after inherited 64px padding. No horizontal overflow. 25 tests, customization coverage and whitespace checks pass. Full Theme Check: 337 files, zero errors, 40 existing warnings.

### Independent mobile position controls — 2026-10-08

First image position and Second image position each have their own Customize for mobile checkbox. Each checkbox controls only that image's mobile width, left/top offsets and anchor; disabling it inherits that image's desktop geometry. Canvas customization still controls reference height independently. Existing FAQ preset/template instances initialize both new flags from their previous global flag, preserving saved geometry. The Liquid fallback uses the old flag if a new flag is absent. Preserve both independent IDs and responsive inheritance when merging upstream.

Editor organization follow-up: Image on top appears before the first group, Size. Reference heights and canvas mobile customization are grouped under Size; there is no separate Canvas header. First/Second image position retain independent mobile checkboxes, and Padding remains separate. All four combinations of the per-image flags passed local Liquid rendering; saved FAQ instances preserve their previous mobile state.

Size mobile toggle follow-up: the existing Customize for mobile checkbox now gates mobile width, custom width, width limit, maximum width and reference height together. Desktop size controls precede the checkbox; mobile controls follow it with conditional visibility. Disabled mobile sizing inherits desktop width/maximum width/aspect ratio. First/Second image position checkboxes remain independent.

FAQ preset validation follow-up: omitted redundant first_customize_mobile/second_customize_mobile=true preset values; the Images schema defaults already enable both. This avoids the reported undefined-setting error when the section is validated against an older uploaded Images schema. The controls remain declared in Images; saved homepage choices are preserved.

### Height controls follow-up — 2026-10-08

Removed the introductory paragraph and both reference-height descriptions. Size now has a Height select (Fill/Custom), and Custom reveals the existing height_desktop ID as a Custom height range (100–2000px, step 20, default 540). Height (mobile) is a direct range (100–1000px, step 10, default 300), gated only by Size mobile customization. Custom heights retain the proportional responsive sizing established by the responsive fix. Fill stretches to the parent composition height with the desktop design ratio as an intrinsic fallback; mobile customization overrides Fill with its own height. Existing FAQ numeric height IDs and stored values remain unchanged.

Height-control validation: full Theme Check passed with zero errors and 40 existing warnings. Default Custom layout passed the eight-viewport responsive fixture (320–1920px). A separate Fill fixture verified 720px of available parent content height produces a 720px canvas, while mobile customization still resolves a 343×300 canvas at 375px. Existing saved IDs/numeric values are unchanged; no deployment or commit.


## Customization documentation review — 2026-10-08

Reviewed the working tree against HEAD and the implementation coverage against personal main. The customization checker covers 54 implementation files; no qualifying path is missing. Consolidated the Customizations table and moved the layout-flow snippet row under its header. Expanded records that previously described only an earlier ratio or layout change: the full reciprocal ratio set, product main-image/thumbnail sizing, shared Height Fill rules, Image Fill and the final Images height/mobile controls are now explicit in the table. Existing behavior and merge rules remain recorded alongside these additions.

Schema/preset-only edits (including Featured collection, Hero, Banner, Collection card, Collections page card, Collection list thumbnails, Email signup image sections and Gallery), global settings, locales, footer-group/template JSON and saved resource selections remain configuration. The five local Press PNG exports are media dependencies documented in the Press upload ledger above; they introduce no custom rendering code. The layout reference document and three new regression-test files support the existing implementation records.

Release validation: all 225 Node tests passed. Updated the footer social-links regression test to traverse the current nested composition instead of assuming removed block IDs; the TCP probe passed when run outside the restricted sandbox. Full Shopify Theme Check inspected 337 files and passed with zero errors and 40 warnings. Customization coverage and whitespace checks passed. Historical entries saying no commit/push describe their earlier work sessions; this review prepares the current Elara code/config/assets/documentation for the requested Git release. No Shopify publication is part of this release.


## Repository asset/test cleanup — 2026-10-08

Removed only the new image assets and test files introduced by commit 97824386: five Press PNG exports, five decorative testimonial SVG files and three regression-test files. The testimonial positioning JS asset remains unchanged. Press images remain uploaded Shopify Files resources selected by shopify://shop_images references in the section preset and saved homepage. No local image file is required. Decorative testimonial SVG paths are embedded in section CSS; the existing positioning runtime remains loaded from its JS asset. Historical local-asset/test descriptions above refer to the earlier commit and are superseded by this cleanup. Existing test files remain in place.

## Product inventory — Malandra stock component — 2026-10-08

Inspected high-fidelity Figma contexts and screenshots for desktop `52187:989` and mobile `52426:9503`. Both use Body/16 Figtree Regular, 24px line-height, heading text, red `#cf2828` quantity, 16px gap and a 3px `#e6e6e6` track with a rounded 113px red segment. No static image assets are present. Existing theme settings already select Figtree Regular and 16px body typography. The existing homepage Featured product inventory already selects `status_and_count`; it now renders the translated urgency sentence for positive tracked quantities at or below the configured low-stock threshold. Singular/plural labels use the real selected variant quantity. Status-only mode retains its short label with the same bar; normal stock, sold-out, unavailable, backorder, disabled threshold and untracked inventory retain base behavior. The bar is decorative and intentionally matches the fixed Figma segment; it does not claim a stock percentage.

Kept the existing variant templates, scoped custom-element listener, live region, block attributes and responsive padding. No new editor settings, JavaScript or global theme settings. Preserve the locale entry alongside the snippet and CSS records above during future main updates.

Validation: full Shopify Theme Check passed (337 files, zero errors, 40 existing warnings), customization coverage passed for 56 implementation files, and whitespace checks passed. A local browser fixture rendered the actual Liquid snippet/CSS/runtime and checked nine inventory states, singular/plural copy, variant changes and unknown-variant fallback; geometry passed at 768, 375, 320 and 100px with no horizontal overflow. Desktop/mobile screenshots match the text/bar layout; the local fixture uses an Arial font fallback, so exact Figtree glyphs and live Shopify/Theme Editor rendering remain unverified. The linked Google project workflow was inaccessible; local workflow instructions were followed. No commit, push or Shopify deployment was performed. An unrelated concurrent `templates/index.json` change to `show_back_in_stock_button` was preserved.

## Featured product Buy buttons — Malandra — 2026-10-08

Matched high-fidelity Figma desktop `52020:28816` and mobile `52426:9475`: Quantity above full-width Add to cart and accelerated checkout; 20px spacing, Quantity 109×44px with 8px label gap and #e6e6e6 square border; 14px medium action labels with 1px letter spacing. Homepage saved gaps are 20px on both devices; the availability alert remains disabled and Add to cart retains its explicit no-price setting. Current scheme-1 secondary border now uses #1e1e1e via settings_data.json; this shared color affects other secondary buttons using that scheme. Existing 44px button heights, Figtree body font, square button corners, white secondary/dark primary colors remain in use. Exact minus/plus SVG exports are embedded in snippets/quantity-icon.liquid and displayed at their natural 20px size by scoped CSS; the standard icons remain visible outside Featured product. Shopify continues to own branded accelerated-payment appearance and availability. Preserve unrelated inventory changes in the working tree.

Validation: Theme Check passed with zero errors and 40 existing warnings; check-custom passed for 56 implementation files; git diff --check passed. A local Chrome fixture using the actual critical/product CSS confirmed 109×44px quantity, 44px full-width actions, both 20px vertical gaps, #1e1e1e secondary border, 500 action weight and 20px icon slots at 320, 375, 768 and 1440px without overflow. Inspected the mobile screenshot. Both SVG exports are non-empty with native width/height 20. The fixture uses Arial fallback and representative Shopify payment markup; live Figtree typography, cart submission, branded checkout and Theme Editor remain unverified. No commit, push or deployment.

### Reference-style Product inventory setup — 2026-10-08

Reference: Omnise Elvara theme 139629002837, Featured product `NDqC3h`, Product inventory `GKXhgL`. Read the editor controls and tested the low-quantity switch: enabled shows `Hurry! Only 10 left in stock`; disabled shows `Hurry! Just a few left`. Undid the test; reference Save stayed disabled. Embedded preview HTML/CSS/source JavaScript could not be extracted through the browser frame interface, and the standalone reference storefront requires a password. Implementation follows observed control/state behavior and the repository's existing Liquid/template/custom-element flow rather than copying reference source.

Replaced Stock message select with independent Show low inventory quantity and Show low inventory progress bar switches. Migrated prior status/count choices in saved homepage/product template and Featured product preset while preserving other settings. Expanded threshold to 0–100; zero disables low-stock state for positive available inventory. Added conditional Gap (default 16px for Figma), Font (Body/Heading/Accent), six token sizes, eight tracking presets, Low inventory text color (Heading/Text/Custom), conditional custom color and solid/gradient Progress bar color. Existing desktop/mobile padding remains. All statuses share typography and have no dot. Normal stock has no count; low stock uses the Figma sentence or quantity-free reference urgency; sold-out, unavailable, untracked and backorder logic remains based on real variant data. Bar visibility applies only to positive tracked low stock, as in the reference control label. Fill is now clamped quantity/threshold, superseding the earlier decorative fixed 113px segment. Defaults preserve Figma red and 3px gray rounded track; changing the threshold updates both classification and relative fill.

The same switches feed first render, all variant templates and fallback; the existing JS swaps the complete message/bar and retains scoped listeners, live-region announcements and disconnect cleanup. No new JS runtime is necessary.

Validation: full Theme Check passes (337 files, zero errors, 40 warnings); customization coverage passes for 57 implementation files; JS syntax and diff whitespace checks pass. Temporary real Liquid/CSS/runtime browser fixture passes ten inventory states, independent switch combinations, initial/per-variant consistency, singular/plural copy, variant/fallback swaps and geometry at 768/375/320/100px. Live development storefront confirms Figtree 16px/24px and real quantity 3 with a 60% bar at threshold 5. Development Theme Editor confirms all new controls; turning the bar off hides Gap and Progress bar color, and Undo restores them with Save disabled. No editor Save action was performed.

The existing development watcher synced the changed inventory block/snippet/styles/locales and configuration to layouthub-template-v2.myshopify.com development theme 192112427307; logs confirm successful sync, and storefront readback confirms the new markup. No live publication, Git commit or push. Concurrent changes to product media, buy controls, Share links and other homepage/config settings were preserved.

Inventory editor follow-up: removed the Inventory options header; renamed threshold to Low inventory threshold, constrained schema/runtime to 0–50, and changed its info to “Set to 0 to always show as in stock”. Other options remain unchanged.

Inventory conditional-editor follow-up: threshold 0 hides both low-inventory switches, Gap and the complete Color group, retaining hidden values for re-enabling. Progress bar color stays the native color_background setting; its default now uses an equal-color linear-gradient so Shopify opens the Gradient UI (Linear/Radial, angle and stops) instead of treating a bare hex value as Custom CSS. The visible default remains Malandra red. Reference picker was inspected without changing or saving the reference theme.

Removed the introductory product-inventory paragraph at the user’s request; the threshold hint remains.

Conditional-editor validation: development editor shows Progress bar color as Linear gradient. Setting threshold to 0 hides both low-stock switches, Gap and the Color header/controls while retaining Typography and Padding. These were temporary unsaved editor tests; no Save action was used. The watcher confirmed successful block sync after paragraph removal. Final Theme Check passes with zero errors and 40 existing warnings; customization coverage and whitespace checks pass.

### Inventory bar Figma length correction — 2026-10-08

User requested restoring the Figma bar geometry after the reference-style setup change. Desktop `52187:989` and mobile `52426:9503` both specify a 113px colored segment. Restored that fixed width with a 100% clamp for very narrow containers and removed the quantity/threshold inline percentage. The full-width gray track, 3px height, gap/color settings, toggle and real inventory messages remain unchanged. This supersedes the percentage-fill notes above.

Full-width follow-up: Product inventory explicitly uses width: 100% so the root and gray track fill the Product details column even when its parent uses align-items: start. The internal colored segment remains 113px as specified by both Figma contexts; existing block padding is retained. Liquid/CSS/runtime fixture checks passed at 768/375/320/100px; Theme Check passed with zero errors and 40 warnings before this CSS-only width follow-up.

## Image ratio cleanup — 2026-10-08

Editor ratio lists expose nine fixed ratios: 1:1, 4:5, 3:4, 2:3, 9:16, 16:9, 3:2, 4:3 and 5:4. Labels use Square/Portrait/Landscape followed by the ratio. Original uses `original`; fixed values consistently use `ratio_W_H`. Existing fill modes remain; Image places Fill height immediately before the final Custom option. Custom exposes W/H, with mobile fields only on existing mobile ratio controls. Presets and saved configurations migrate equivalent legacy ratios to canonical values; uncommon ratios retain exact W/H through Custom. Legacy runtime aliases remain supported for remote settings until saved. Swatch shape ratios are separate controls and remain unchanged.

Validation: 30 ratio selects passed canonical-value/default/order checks; 247 saved/preset ratio entries passed owning-schema and positive Custom W/H checks. `node theme-base check-custom elara-theme` passed with coverage for 61 implementation files. Theme Check passed on 337 files with zero errors and 40 warnings; `git diff --check` passed. Full storefront/Theme Editor runtime was not exercised in this local cleanup. No commit or push was performed.

The final user-approved limit is nine fixed ratios, retaining both Portrait (9:16) / `ratio_9_16` and Landscape (5:4) / `ratio_5_4`.

### Accordion reference setup — 2026-10-08

Reference: Omnise Elvara theme `139629002837`, section `custom_section_Wtc6LN`, Accordion `accordion_7h8VpJ`. Read the editor controls and rendered storefront HTML/CSS. Accordion owns style/icon, question typography, row appearance, gap, responsive size and color context. Accordion row owns its question/open state and removable child composition. Preserve existing matching preset values and homepage content; the dedicated answer-only Text block is removed and all saved/preset children use Basic Text instead. Standard Text and other blocks keep their own typography settings. Existing custom question icons and Custom padding remain available. Question mobile typography remains a hidden compatibility setting. Legacy parent answer-size settings are removed after transferring the effective desktop role to each Basic Text child (no saved instance had an active differing mobile answer role).

Validation: 13 scoped Liquid/disclosure tests passed; Theme Check passed with zero errors (42 existing warnings); customization coverage passed. Compared existing Accordion preset settings and all existing schema IDs/defaults/options against HEAD: preserved. Local browser fixture rendered the actual row/Accordion Liquid and CSS: desktop Large padding 20/24px, mobile 20/20px, 375px viewport without horizontal overflow, independent nested icon/font sizing, mobile Fill/max-width reset, click and Enter toggling. Shopify Theme Editor add/delete/save/reload remains unverified: the existing localhost preview is stopped; no store push or preview restart was requested.

Screenshot option refinement — 2026-10-08: Simple shows Style, Icon, Dividers, Heading typography (Font/Font size), Gap (Desktop/Mobile), Size (Device, Width, Limit width and conditional Max width). Boxed hides Dividers and adds Accordion row (Border thickness/Shadow/Padding) before Gap and Color (Type/conditional Color scheme) after Size. Removed the Answer typography header and extra mobile customization controls from the visible editor, retaining question/mobile-size compatibility setting IDs/defaults/preset values through `visible_if`. The Device selector only chooses which size controls the editor displays; responsive rendering remains viewport-based. No screenshot values were imported.

Dedicated answer Text removal — 2026-10-08: deleted the answer-only block, removed its gallery allow-list entry, parent answer typography settings/token assignments/CSS selectors, and converted 31 preset/saved children to `text`. Homepage children retain the `sm` text role; FAQ page and generic Accordion children retain `md`. Existing block IDs and order arrays are preserved as composition identity, including old descriptive ID strings that are not runtime logic. Each replacement uses Fill width to retain the previous answer surface. New standalone rows also seed Basic Text.

The generic FAQ section preset explicitly seeds four Basic Text answers inside its four default rows; no saved merchant row is seeded by this step. Final validation: 17 scoped tests passed; Theme Check reported zero errors and 42 warnings; diff whitespace and customization coverage passed.

Boxed default/preset values — 2026-10-08: user explicitly requested importing the sample values from Omnise Accordion `accordion_7h8VpJ`. The Accordion schema defaults and its add-block preset now use Boxed, Plus, Heading/Heading 5 (`sm`), border 0px, shadow None, Large padding, gap 16px desktop/12px mobile, desktop Fill width with Limit width enabled at 850px, and Color scheme 2. Existing section presets and saved template instances keep their explicitly configured styles, values and content. Liquid fallbacks follow the new defaults. No store write, commit or push.

Boxed template configuration — 2026-10-08: user also requested applying the reference preset to saved template instances. Updated the homepage FAQ Accordion and all five FAQ page category Accordions to the same Boxed/Plus/Heading 5, 0px border, None shadow, Large padding, 16/12px gaps, desktop Fill/850px limit and Scheme 2 configuration. Preserved questions, Basic Text settings/content, child IDs/order and unrelated template changes.

## Direct Marquee Basic composition — 2026-10-08

User requested rebuilding Marquee from the supplied Omnise example without Marquee item. The available source evidence confirms the section-level option inventory and rendered text/icon repetition; the source editor reports a missing color-scheme definition, so its complete Marquee/Basic option schema and JavaScript were not verified. This implementation follows the explicitly requested direct-child structure and the current local animation settings; exact option parity remains unverified.

Marquee now exposes Heading, Text, Image and Icon in Basic, using dedicated `marquee-*` types. The moving DOM is viewport → track → Basic children. Preserve animation direction (Forward/Backward), speed 0–3, background color, desktop/mobile gap and four-side padding. Heading/Text keep intrinsic width and optional max-width. Image width is fixed pixels or original pixels, with a default 120px desktop / 80px mobile; this is a local sizing decision, not a verified source default.

Migrated only Marquee child trees in the Text marquee and Scrolling text star separator section presets, homepage and About us template. Existing item children are flattened in their saved order with unique prefixed IDs; text/SVG content, links, media and Basic settings are retained. Legacy text Fill becomes Fit to preserve the old marquee's effective intrinsic-width behavior. The removed items in these saved compositions had horizontal centered layout and the same gap as their parent, without custom surfaces/padding. The legacy Marquee item file remains for independent uses outside Marquee. Existing FAQ/gallery edits and the customization history above are preserved. No commit or store push.

Validation: four Liquid/composition tests pass; desktop browser harness passes 12 runtime assertions for visible-child loop distance, clone accessibility, speed zero, editor pause, content editing, unload/reload and repeated load. Mobile at 375px has no document overflow and the image changes to its configured 80px width. Harness uses the actual Marquee JavaScript/CSS with representative Basic markup; full Shopify add/remove/duplicate/save/reload QA and exact source option/animation parity remain unverified. Theme Check has zero errors (42 existing warnings); customization coverage check passes.

### Marquee dependency upload repair — 2026-10-08

Preview log identified failed uploads of `blocks/marquee-heading.liquid` and `blocks/marquee-text.liquid` due to invalid CLI credentials; subsequent section/template uploads failed because those child block definitions were absent remotely. No schema relaxation or fallback to Marquee item was needed. User explicitly approved the nine-file development-theme sync.

Operation ledger: `layouthub-template-v2.myshopify.com`, development theme `192112427307`, name `Development (231e3e-Mac-mini-cua-beae)`. Narrow pushes with `--nodelete` succeeded in four dependency stages: four `marquee-heading/text/image/icon` blocks → `blocks/marquee.liquid` → `sections/scrolling-text-star-separator.liquid` and `sections/text-marquee-custom.liquid` → `templates/index.json` and `templates/page.about-us.json`. Pulled exactly these nine files to a temporary directory; all seven Liquid files match byte-for-byte, About us matches semantically, and homepage matches after Shopify's removal of two empty `block_order` arrays in collection_list/featured_collection. The complete Marquee subtree matches exactly. Existing local files remain the source of truth for rollback. No other remote files were uploaded or deleted; no publication or Git commit/push. Four Marquee tests and Theme Check pass (zero errors, 42 existing warnings).

### Inspector hover pause — 2026-10-08

User reported that the reference pauses on hover with the editor Inspector enabled. The reference editor was reopened with Inspector active; its nested preview DOM could not be inspected with the available browser tooling, so exact reference implementation remains unverified. The existing native `:hover` pause cannot cover a sibling Inspector overlay. Marquee now captures preview-document pointer coordinates in design mode and checks each instance's bounding box while Inspector is active. A separate inspector-hover class pauses CSS animation and scroll-driven phase updates, clears on pointer exit/blur/Inspector deactivation, and preserves selected-block pause. Inspector activate/deactivate events and initial `Shopify.inspectMode` are the official lifecycle inputs. Section unload cancels pending pointer frames and removes all instance listeners. Storefront hover/focus behavior and block schema are unchanged.

Inspector fix validation: actual Marquee JS/CSS passes 19 desktop browser harness assertions, including pointer events targeted at a sibling overlay, Inspector activation/deactivation, movement outside the root, retaining selected-block pause, iframe pointer exit, unloading listeners and reload idempotence. Four Liquid/composition tests, customization coverage and diff checks pass; Theme Check has zero errors and 42 existing warnings. This harness simulates Inspector pointer events; direct live Inspector-hover parity was not observed because the source preview iframe was inaccessible. Uploaded only `blocks/marquee.liquid` with `--nodelete` to the previously approved development theme `192112427307` on `layouthub-template-v2.myshopify.com`; readback matches byte-for-byte. No publication or Git commit/push.

### Retire redundant scrolling star section — 2026-10-08

User requested removing the redundant section from the repository and replacing its template preset with Text marquee (custom). Deleted `sections/scrolling-text-star-separator.liquid`. Existing homepage `scrolling_text_images` and About us `commitments` already reference `text-marquee-custom`; their saved settings, IDs, blocks and order remain unchanged, and their display names now read Text marquee (custom). The retained section schema/preset and locale label use the same name. Removed the obsolete star-section locale label and retired-section reference from the Marquee composition test. Historical audit/upload entries above remain historical. This removal is local repository work; no remote deletion, publication or Git commit/push was performed.

### Simple Accordion Figma preset — 2026-10-08

Updated the Accordion preset, both FAQ section presets and all six saved template Accordions to Simple, Chevron and enabled Dividers, with Heading 5 and 20px desktop/mobile gaps. Simple draws only a 1px bottom border and ignores inactive Boxed custom padding. Figma FAQ image composition uses #ccc dividers, 80px desktop right spacing (0px mobile) and the exact 24px local Chevron asset `assets/faq-chevron-down.svg`. Kept Boxed icons inheriting their scheme color, arbitrary removable row children, saved questions/content/order and existing global typography tokens. Converted Accordion custom CSS dimensions/shadows from rem to px. Compared desktop 52695:11908 and mobile 52702:12135; local Liquid fixture verifies 700px desktop and 343px mobile content widths.

### Homepage FAQ empty answer correction — 2026-10-08

The five initially closed homepage rows had explicitly empty Basic Text content in both the saved template and FAQ image section preset. Added question-specific editable answer copy to these five Text blocks. Preserved the first answer, row IDs/order, Basic Text settings and removable child behavior; no disclosure runtime fallback was added.

### Shared Chevron and icon stroke alignment — 2026-10-08

Aligned shared Chevron down/left/right and legacy aliases with the reference 24px geometry. Mobile Menu uses the shared icon snippet for Chevron/Plus. Calibrated Icon thickness to a 1.25px stroke at 100%, matching Figma; the active theme setting and schema default are 100%. Other saved settings presets are retained. Registered comparison/calendar and quantity icon strokes now consume the shared token. The existing icon token customization in `snippets/css-variables.liquid` now includes this calibration.

### Chevron snippet consolidation — 2026-10-08

Removed `assets/faq-chevron-down.svg` and the FAQ image/default icon branches. Accordion row now renders the registered `chevron-down` from `snippets/icon.liquid`, retaining the Figma 24px geometry, inherited color and adjustable shared stroke. Consolidated the identical `chevron`/`chevron-down` registry branches. The FAQ image composition retains its 24px icon footprint and open-state rotation; other composition widths remain unchanged.

### Compact Marquee block family audit — 2026-10-08

Reopened the Omnise source editor and verified the compact `*_simple` and `group_scrolling` types and nine direct child options. Replaced the earlier general-kernel adaptations with private `_marquee-*` schemas/markup, added the five missing child types and kept ordinary child composition inside the scrolling Group. Migrated section/parent presets and homepage/About us instances while retaining IDs, content, custom SVG and effective homepage spacing. Shared general blocks were not edited by this task.

See `docs/marquee-reference-audit.md` for observed ranges, migration details and evidence limits. The reference theme was restored by undoing all temporary unsaved inspection changes (Save/Undo disabled). This follow-up is local only; earlier uploaded public `marquee-*` types are superseded locally by private types and require a dependency-ordered development-theme migration before live QA. No Git commit/push or theme publication.

### Testimonial Carousel spacing simplification — 2026-10-08

Flattened every carousel preset and homepage testimonial content group to Eyebrow → Icon → Heading → Text, removing both inner groups. Use 10px gap on desktop/mobile, eyebrow bottom padding 26px/14px for Figma’s 36px/24px label-to-stars spacing, and quote bottom padding 10px for its 20px author spacing. References: desktop `52011:28304`, mobile `52426:9370`. The section’s two hardcoded content gaps now consume the existing Group layout-flow settings; other layout, media selections and controls remain as configured. On base updates preserve the setting-driven gap behavior and review overlapping section CSS changes.

### Testimonial Carousel restored to main — 2026-10-08

User requested removal of the theme-specific Testimonial Carousel. Restored `sections/testimonial-carousel.liquid` and `blocks/testimonial-item.liquid` exactly from local `main`, including their presets and schemas. Removed the section instance and its order entry from `templates/index.json`, and removed the unused `assets/elara-testimonial-carousel.js`. The three implementation entries were removed from the active Customizations table. Earlier Malandra layout, editor simplification and spacing notes are historical and superseded by this rollback; no active testimonial customization remains. Shared carousel, typography, image blocks and other theme compositions were preserved.

## Testimonial split rebuild — 2026-10-08

User-authorized Figma references: desktop `52011:28305`, mobile `52426:9370`, file `7BbUHDzKGaMGMkyRpu0YZ8`; both contexts/screenshots inspected. Only two new theme blocks remain: `carousel_split` and `_slide_split`. Carousel fixes one slide per viewport and zero gaps/previews, uses the shared Swiper runtime, puts Style first and retains only Autoplay/Padding schema headers. Slide fixes 50/50 desktop layout and image-first mobile order. Its static Image and Group slots use existing repo blocks; Group contains existing Eyebrow, Icon (`five-stars`), Heading and Text. The temporary private Content/Rating blocks and dedicated star snippet were removed at the user's request. Navigation belongs to Slide; the arrow snippet embeds the original Figma SVGs, with no new SVG asset files. Global typography/color and shared editor lifecycle remain inherited.

The three-slide preset uses the Figma quote and author, uploaded `elara-figma-testimonial.avif`, 5:4 images and full width without outer margins. Desktop: 5vw content inset capped at 96px, 36/10/20px content gaps and 48px navigation gap. Mobile: 40px image/content gap, 16px inset, 24px eyebrow/navigation gaps, 22px quote and 56px bottom padding. Homepage `testimonial_split` follows `scrolling_text_images` (Text marquee (custom)); all existing saved sections are preserved. Preset and homepage references now use the two new block names plus existing Group/Icon types.

Keep the section, these two specialized block implementations and arrow snippet theme-specific. Review overlapping upstream runtime, composition, Image/Group/Icon/Heading/Eyebrow or schema changes before merging.

Validation after block reuse: Theme Check passes with zero errors and 42 existing warnings; customization coverage passes for 83 files and whitespace checks pass. Chrome geometry passes at 1920/1024/768/767/375px with actual Group/Icon CSS and the existing five-stars SVG. Actual Swiper navigation, disabled edges, block selection, section unload/load and duplicate initialization pass. Live Shopify Theme Editor save/reload remains unverified.

### Marquee parent options and smooth one-Heading loop — 2026-10-08

Verified source parent UI: top/bottom divider, blurred edges, parallax, Top/Center/Bottom alignment; Speed 0.1–2x step 0.1; Left/Right direction; desktop gap 0–200px step 2/mobile 0–100px step 1; Fill/Custom desktop width (10–100%, default observed 50%); inherited/color-scheme appearance; top/bottom padding with mobile overrides. Rebuilt schema and removed unsupported side padding/custom background from saved Marquee instances/presets. Homepage Text marquee removes its standalone top Divider and enables Show top divider; children and content remain. Gallery preset only drops obsolete zero side-padding values.

Runtime uses final nowrap measurement, clones with enough continuation, pixel-based speed and phase retention. Parallax scroll displacement is eased over frames and discarded while hover/focus/Inspector is paused. A second Marquee preset contains exactly one Heading. Local browser harness passed 18 seam/coverage/speed/clone assertions at desktop and 18 at 375px, plus 7 lifecycle/Inspector/smooth-scroll assertions. Four Liquid/schema/composition tests pass; final Theme Check reports zero errors and 42 existing warnings; customization coverage includes 83 files and diff whitespace checks pass. Native source UI was readable but nested preview DOM was unavailable; direct preview required a storefront password, so the original source animation algorithm/pixel speed could not be extracted. This task is local; no upload/publication or Git commit/push.

Slide option parity follow-up: `_slide_split` now reuses the existing Slide normalization, scoped layout CSS and full Gap, Size, Appearance, Border and Padding schema groups. Only direction, vertical-layout Position/Alignment and the Vertical on mobile switch are removed from Layout, because desktop is always horizontal and mobile vertical. Desktop Position, horizontal Alignment and Mobile alignment remain and consume the same tokens as Slide. Existing split Image/Group slots, content/navigation spacing and homepage placement are retained. Preset and saved instances explicitly select center position and 0px desktop / 40px mobile gaps to preserve the approved Figma layout.

Restricted block follow-up: user requested an addable Carousel split whose only allowed dynamic child is Slide split. `carousel_split` now has a three-slide preset; `_slide_split` has its own Slide preset and is explicitly declared only by Carousel split. The underscore is Shopify's private-block convention, preventing it from appearing in generic `@theme` pickers. Section preset and homepage references were migrated. Unused `testimonial-item.liquid` and its two explicit registrations were removed; no saved testimonial-item instances existed.

Final validation: Theme Check passes with zero errors and 41 warnings. Customization coverage passes for 84 implementation files. Actual Liquid rendering verifies Position/Alignment, responsive gap, height, scheme/background, border/radius/shadow and desktop/mobile padding token mappings; supplied direction/mobile-switch values cannot change the forced responsive orientation. Exclusive private Slide targeting and addable Carousel/Slide presets pass. Chrome geometry and shared navigation/editor lifecycle fixtures also pass. Live Theme Editor remains unverified.

Editor layout fix — 2026-10-08: Remote development theme retained the obsolete `_testimonial-split-slide.liquid` after nodelete sync. Its globally bundled stylesheet applied a two-column grid to the new Slide's outer article, leaving the inner flex layout in only the first column. The new article explicitly owns `display: block` with higher selector specificity, while Slide, inner layout and Carousel viewport own full width and a single-slide flex basis. This protects the new layout even when legacy CSS is loaded later; no remote legacy files were deleted.

Operation ledger: verified `layouthub-template-v2.myshopify.com`, development theme `192112427307`; read back the affected Slide/Carousel/section/shared styles and only the suspected legacy testimonial blocks. Uploaded only `blocks/_slide_split.liquid` and `blocks/carousel_split.liquid` using explicit theme ID, `--only` and `--nodelete`. No publication, saved editor setting changes, Git commit or Git push. Reloaded the live editor and visually verified the selected Slide fills the desktop preview with equal content/image columns, and mobile displays image above full-width content/navigation. Screenshots saved to `/tmp/testimonial-editor-fixed-desktop.png` and `/tmp/testimonial-editor-fixed-mobile.png`; editor restored to desktop mode.

Validation: Chrome geometry passes at 1920/1024/768/767/375px, including an additional regression fixture loading the obsolete grid stylesheet after the new stylesheet. Shared Swiper navigation, disabled edge controls, block selection, unload/reload and duplicate initialization pass. Customization coverage remains 84 files; Theme Check passes with zero errors and 41 existing warnings.

### Announcement bar static — 2026-10-08

User references: Figma desktop `52114:18581`, mobile `52426:10189`, file `7BbUHDzKGaMGMkyRpu0YZ8`; both design contexts/screenshots inspected. Added independent Announcement bar static with 10px desktop and 8px mobile vertical padding, theme responsive page margins, 14px body text, a centered editable announcement, left 16px social icons with 12px gaps and right Localization. Uses existing scheme-3 brown/white theme values. Mobile only displays announcement content. Slider, scrolling, speed, direction, autoplay, hover pause, navigation, background/overlay, color, gap and padding options remain available from the original section.

Header group now uses the new variant and Figma shipping copy. Existing Header Localization settings were migrated into its static announcement slot, with xs label sizing and country/currency name enabled to match Figma. Removed Localization from the Header preset only; its block remains available in Header for intentional future additions. Original Announcement bar remains available. Discount/countdown saved default slides were replaced by the single Figma announcement in this header composition; their types/options remain available in the new section. Header markup is captured before head template preload evaluation to establish Header → Template → Overlay → Footer rendering order. No publication or Git commit/push.

Color follow-up — 2026-10-08: inspected the Figma desktop/mobile contexts; mobile frame explicitly defines background #F9F9F9, heading #181818 and body #636363. Existing Scheme 4 matches these tokens. Slide split, Carousel split and section presets plus homepage split instances now use Scheme 4; Slide split explicitly selects scheme mode. Both shared Slide and private Slide split rename Appearance to Color and remove Background color/image settings and implementation consumers, keeping Inherit/Color scheme. Obsolete saved background values were removed only from affected Slide types, including the Spinel sync template. Other blocks retain their background controls.

Validation: Theme Check inspected 353 files with zero errors and 41 warnings. Customization coverage and whitespace checks pass. Local Chrome fixture uses the actual critical/section/block CSS, original social SVGs and both announcement JS modules with representative country markup. At 1920/1024/768px the bar is 41px high and centers the message; at 375px it is 37px high, centers the message and hides side slots, with no document overflow. Click dropdown, Escape, outside click and unload/load/repeated load checks pass. This fixture is not a live Shopify render; live Theme Editor group order and save/reload remain unverified. The bundled Liquid validator could not run because its @shopify/theme-check-common dependency is absent; installed Shopify CLI Theme Check supplies the successful repository validation. Final section name/type is Announcement bar static / announcement-bar-static, per the user's naming correction; Static describes the side-slot layout while message slider/scrolling options remain available.

### Announcement Header group upload repair — 2026-10-08

User reported that sections/header-group.json failed upload because announcement-bar-static did not exist remotely. Preview logs confirm dependency sequencing: group uploaded before the renamed section; later section upload succeeded but did not retry the group. Read back development theme 192112427307, Development (231e3e-Mac-mini-cua-beae), on layouthub-template-v2.myshopify.com: announcement-bar-static, its JavaScript, private social block and shared Localization block all match local byte-for-byte; remote group still used the original announcement-bar. Uploaded only sections/header-group.json with --nodelete after confirming these dependencies. Final remote JSON matches local semantically, including static variant, moved Localization and Header section order. No source-reference change was needed. No publication, deletion or Git commit/push.

### Announcement uses shared Text — 2026-10-08

User requested removing the section Typography group and using the same base Text block as templates. Announcement bar static now allows blocks/text.liquid in place of announcement-text; preset and saved Header group retain their block IDs/order and copy, converted to richtext. Existing sm section typography is migrated to block-owned text_size sm, with white editable text color for Figma. Removed section font_size definition, normalization, preset/saved values and root size class. Parent owns centered alignment; shared Text owns typography, color, richtext, responsive sizing and padding. Scoped slider composition uses block flow so multiple richtext paragraphs stack and preserves shared Text padding variables rather than stripping them. Original Announcement bar and shared Text implementation are unchanged.

Text migration validation: Theme Check passes with zero errors and 41 warnings; customization coverage and whitespace checks pass. Local Chrome fixture with shared Text CSS/richtext markup preserves 41px desktop / 37px mobile geometry at 1920/1024/768/375px, centered content and no overflow; Localization checks pass. Preview watcher attempted Header group before the new section schema and reported Text disallowed. Repaired via two narrow --nodelete uploads to development theme 192112427307 on layouthub-template-v2.myshopify.com: sections/announcement-bar-static.liquid first, then sections/header-group.json. Readback matches section byte-for-byte and Header group semantically. No shared Text file modification, publication or Git commit/push.

### Repeated Text upload error / expired authentication — 2026-10-08

Local Announcement bar static allow-list already includes text, and Header group references that shared block correctly. The reported watcher log follows a section upload failure caused by invalid CLI credentials. Fresh theme pull and list attempts returned HTTP 401; previous readback files in the temporary directory are stale and were not treated as current remote evidence. Selecting the existing minhle@beae.com session and restarting preview did not restore store access. Preview retry loop was stopped. Automatic approval review rejected choosing Log in with a different account to begin a fresh login, because it could change the authentication target beyond same-account repair. No new remote upload or source schema/group change occurred in this follow-up; fresh authentication is required before re-uploading section then Header group and verifying readback.

Two-slide preset/media follow-up — 2026-10-08: user requested exactly two slides and Fade. Updated Carousel split preset, section preset and existing homepage `testimonial_split` to retain slide IDs 1/2, remove slide 3 and select `transition_style: fade`. Slide 2 uses the quote and Rachel L, USA author from Figma `52702:12007`. Exported only its Image slot `52702:12042` to preserve Figma cropping; converted/decoded true AVIF at 960×768. Uploaded once to verified store `layouthub-template-v2.myshopify.com` via Shopify upload_image after filename duplicate check; readback confirms READY and MIME image/avif. File `gid://shopify/MediaImage/46473247424811`, filename `elara-figma-testimonial-slide-2.avif`, CDN `https://cdn.shopify.com/s/files/1/1024/2192/2091/files/elara-figma-testimonial-slide-2.avif?v=1791450153`. Presets/template use `shopify://shop_images/elara-figma-testimonial-slide-2.avif`. First slide, Scheme 4 and shared implementation remain unchanged. No manual theme push/publication or Git commit/push.


Press media follow-up — 2026-10-08: user requested re-uploading the five Press item logos from Figma file `7BbUHDzKGaMGMkyRpu0YZ8`, section `52055:16474`, without baked opacity. Inspected the screenshot and image fills: Mejuri, Lagos, Marie Claire and Guess nodes use 40% opacity; Pandora uses 100%. Extracted the original source images matching each fill hash, retained the normalized Figma crop in a 480×240 white RGB canvas, and converted/decoded true AVIF without node opacity. Verified store `layouthub-template-v2.myshopify.com` and checked existing filenames before uploading. Shopify readback confirms all five files READY, MIME image/avif, 480×240. Updated only image references in the Press section preset and homepage `press_quotes`; no implementation changes.

| Logo | Figma node | Shopify MediaImage ID | Filename |
| --- | --- | --- | --- |
| Mejuri | `52055:16481` | `46473829482795` | `elara-press-mejuri-full-opacity.avif` |
| Lagos | `52055:16482` | `46473830072619` | `elara-press-lagos-full-opacity.avif` |
| Pandora | `52055:16483` | `46473830138155` | `elara-press-pandora-full-opacity.avif` |
| Marie Claire | `52055:16484` | `46473830400299` | `elara-press-marie-claire-full-opacity.avif` |
| Guess | `52055:16485` | `46473831055659` | `elara-press-guess-full-opacity.avif` |

Permanent CDN prefix: `https://cdn.shopify.com/s/files/1/1024/2192/2091/files/`. Preset and instance use `shopify://shop_images/` references. Existing runtime selection opacity remains owned by Press quotes; these source files carry no baked dimming. No manual theme push/publication or Git commit/push.

## Product tag cleanup and layout — 2026-10-08

Figma homepage `52006:3791`, verified product rows `52164:10239`, `52006:3454`, `52403:9870`: Round Topaz Earrings has Best Seller; Savi Ridge Droplet Charm Earrings, Savi Triple Ridge Hoop Earrings and Axiom Chain Bracelet have automatic Sale badges from their existing compare-at prices. Other catalog grouping tags are absent from the design. Product cards use a horizontal badge row with wrapping and the existing 6px gap, three-tag limit and typography/colors. Theme Settings places Show Tags immediately after Show sold out badge, preserving its ID, default and saved values.

Store cleanup is limited to the 14 recorded Elara product IDs on `layouthub-template-v2.myshopify.com`. Remove grouping tags from the products themselves, retaining only Best Seller on Round Topaz Earrings. Use targeted tag removal; preserve prices, variants, inventory, publication and manual collection membership. Readback and operation evidence are stored under ignored `.shopify/elara-catalog/`.

Verified cleanup: 14 products updated by targeted `tagsRemove`; readback confirms only Round Topaz Earrings retains Best Seller and all collection memberships are unchanged. Ignored catalog source `products.json` now matches the cleaned tag configuration. Evidence: `figma-tags-before.json`, `figma-tags-plan.json`, `figma-tags-mutation.json`, `figma-tags-readback.json` and appended `ledger.jsonl`. Sale remains derived from price/compare-at, without duplicate Sale tags.

Validation: real shared Liquid badge output and actual critical CSS verified in Chrome at 800px, 375px and 240px viewport widths: horizontal row where space permits, wrapped rows when required, no badge overflow. Settings order verified. Theme Check passes: 353 files, zero errors, 41 warnings. Customization coverage passes for 91 implementation files; diff whitespace check passes. Layout verified in a local fixture; no fresh live storefront or Theme Editor visual verification was performed.


### SVG asset consolidation — 2026-10-08

User requested SVG artwork in the shared icon snippet instead of assets. Registered all seven SVGs in `snippets/icon.liquid`: announcement Facebook/Instagram/Pinterest, ELARA symbol/wordmark and Malandra desktop/mobile logos. Existing social-library artwork differs in size, geometry and color, so announcement variants retain their original paths and colors. Announcement social links now render the shared icon snippet with `bare: true` and retain 16px sizing, accessible link labels and configured URLs. Logo artwork remains available in the registry; current Header/Footer store-name rendering is preserved. Retained viewBoxes, dimensions, fills, gradients and opacity; removed unused Figma layer IDs and added an optional `svg_id` suffix for ELARA gradient/clip definitions. Removed all seven local SVG asset files. Preserve these keys and review overlapping shared icon/social changes on future base updates.

### Marquee selection resumes outside hover — 2026-10-08

User requested that Inspector selection match the reference: selecting the Marquee or a nested child must not keep motion paused outside its bounds. Removed selected-block pause handlers and their CSS state. Editor initialization scopes focus-pause exclusion to each Marquee instance; storefront keyboard focus still pauses. Native hover and Inspector coordinate hover continue to pause both animation and parallax, with existing pointer exit/blur/deactivation cleanup. Unload removes the editor marker; repeated load remains idempotent. No schema, content, saved settings or speed changes. Preserve this hover-only editor behavior when reconciling future base runtime changes.

Validation: actual Marquee JS/CSS browser fixture passes 10 selection/hover/focus/instance-isolation/cleanup assertions and 18 seam/coverage/speed/clone assertions. Four Liquid/schema/composition tests pass. Theme Check inspects 353 files with zero errors and 41 existing warnings; customization coverage includes 91 files; diff whitespace check passes. Reference editor opened with Inspector active and requested block selected, but direct live pointer/animation parity was not measured. Local implementation only; no theme upload, publication, Git commit or push. This supersedes the earlier historical selected-block pause behavior.

### Static announcement layout and padding — 2026-10-08

User requested a truly static section without scrolling/slider layouts or JavaScript. Layout now exposes only Alignment and Alignment (mobile), each supporting left/center/right. All configured content blocks render in order without carousel controls, transforms or animation. Removed both announcement script imports and the dedicated static controller asset. Social and Localization slots remain desktop-only; Localization uses native details/forms and omits the stale explicit aria-expanded attribute in this section. Padding follows the shared section-spacing tokens and a single Padding group: Top, Bottom, Customize mobile padding, Mobile Top and Mobile Bottom. Horizontal spacing remains owned by the responsive full-width container. Existing 10px desktop / 8px mobile spacing and copy are preserved in the Header group; obsolete layout and horizontal padding values are removed from this instance and section preset. This supersedes earlier logs describing slider/scrolling and a section localization controller. No commit, push or manual theme upload.

Validation: Theme Check passes across 353 files with zero errors and 41 existing warnings. Customization coverage passes for 91 implementation files; git diff --check passes. Targeted schema/preset/Header group checks confirm exactly two Layout controls, no section script/slider/scrolling markup, no obsolete saved setting IDs and retained desktop/mobile padding. Live storefront and Theme Editor visual verification were not performed.


Email signup icon follow-up — 2026-10-08: editor option label is now Send. Email signup block preset and Footer preset/current `sections/footer-group.json` composition select `send_malandra` at custom 18px sizing, matching Figma. Existing shared icon key remains stable.

Alignment control follow-up — 2026-10-08: both Announcement bar static alignment settings now use text select options Left, Center and Right instead of text_alignment icon controls. IDs, values, defaults and CSS consumers remain unchanged.

Position label correction — 2026-10-08: renamed the static announcement labels to Position and Position (mobile), per user correction. Text dropdown choices Left/Center/Right and existing alignment setting IDs, defaults, saved values and consumers are preserved.


### FAQ padding ownership — 2026-10-09

Removed fixed section CSS right padding. Wrapped the existing Accordion in a vertical Group in the FAQ image accordion preset and homepage instance. Group owns editable 80px desktop and 0px mobile right padding, matching Figma 52695:11908 / 52702:12135. Existing Accordion IDs, children, settings and images are preserved. Keep spacing in composition settings on future base updates; do not restore section-level fixed padding.


Testimonial split navigation stability — 2026-10-09: user requested navigation to remain in a reasonable fixed position when slide content changes. `blocks/_slide_split.liquid` uses the shared Swiper equal-height slides, makes the inner layout full height, stretches the content column and lets the Group center within the space above non-shrinking controls. Mobile content grows to fill the remaining slide height; existing 48px desktop/24px mobile quote-to-controls minimum gaps and 48px/56px bottom insets are retained. No schema, saved settings or shared carousel runtime changes. Local Chromium layout fixture with short/long quotes passed at 1440, 1024, 768 and 390px (matching navigation Y coordinates across slides). Theme Check: 353 files, zero errors, 41 warnings. Storefront/Theme Editor verification remains unavailable because the existing preview is stopped after Shopify authentication failure. No Git commit/push or store deployment.


Testimonial split blank image presets — 2026-10-09: user requested newly added Slide split items to display a placeholder. Removed preselected image values from the private Slide preset and nested Slide presets in Carousel split and Testimonial: split (five image settings total). Image slots retain their existing 5:4 ratio and fill sizing, and use the Image block’s existing empty-image placeholder. Existing saved homepage image selections are preserved. All three schemas parse successfully. No Git commit/push or store deployment.


### Localization returned to Header — 2026-10-09

User requested returning Localization from Announcement bar to Header as on personal `main`. Moved the saved block to Header top before Divider as a dynamic `header-localization` block, preserving all country/language/currency and font settings. Restored Localization in the Header preset. Removed its static Announcement rendering, allow-list entry, preset block and CSS overrides; retained balanced desktop columns so the shipping message stays centered, with the existing mobile content-only layout. Shared Localization restores the standard Header-managed `aria-expanded` attribute; the custom country/currency label option remains. This supersedes earlier notes about Announcement Localization ownership. No Git commit/push or store deployment.

Validation: changed Liquid schemas and Header group JSON parse successfully; saved Localization settings match the previous announcement instance and block order matches `main`. Theme Check passes across 353 files with zero errors and 41 warnings. Customization coverage passes for 91 files; `git diff --check` passes. Live storefront/Theme Editor rendering was not verified.

Localization preset correction — 2026-10-09: user requested the Header Localization configuration exactly as on personal `main`. Saved Header group Localization now matches the main block: click trigger, country selector/flag enabled, country name and desktop language selector disabled, Medium font size. Removed the saved announcement-specific currency-with-name override; the optional custom setting remains available with default false. Header preset Localization entry already matches main. This supersedes the settings-preservation note above.

## Reviewed base sync decisions — 2026-10-09

Owner instruction: implement updates for both themes, preserve presets and current layout for used sections, add new options in main order (ABC/ACB), and retain existing configured values. Source: personal main `729be6cfc3a31211b3107df8b9a6206860e406c9`; previous theme HEAD: `c987610b2ff78ab8df5ec17070969c6cca2c6f59`.

The normal update command stopped on overlapping implementation paths. This reviewed sync uses the same schema/default/composition/history and release checks, with explicit compatibility resolutions. Main implementation changes that could change layout or invalidate legacy controls are held on the paths below. The matching theme schema, allowed children, retained settings and saved values remain compatible with the theme implementation. New optional mobile-hide controls are wired in both View all blocks without importing main's different overflow visibility rules.

Held implementation/layout paths:
- `assets/critical.css`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/collection-tab.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/localization.liquid`
- `blocks/marquee.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/view-all-button.liquid`
- `layout/theme.liquid`
- `sections/blog-posts.liquid`
- `sections/cart-drawer.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection.liquid`
- `sections/hero.liquid`
- `sections/text-marquee-custom.liquid`
- `snippets/css-variables.liquid`
- `snippets/icon.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/product-collection-grid.liquid`
- `assets/cart-drawer.css`
- `assets/component-overlay.css`
- `assets/section-collection.css`

New settings and base defaults:
- `blocks/tabs-view-all-button.liquid` / `self` / `hide_view_all_mobile`: false
- `blocks/view-all-button.liquid` / `self` / `hide_view_all_mobile`: false

Settings retained because removal was not individually approved:
- `sections/text-marquee-custom.liquid` / `section` / `position`
- `sections/text-marquee-custom.liquid` / `section` / `height`

Reviewed schema differences: existing definitions/allow-lists are retained together with their compatible theme implementation:
- blocks/collection-tab.liquid: danh sách block được phép khác main (theme: product-card; main: promo-card)
- blocks/marquee.liquid: danh sách block được phép khác main (theme: _marquee-button, _marquee-countdown-timer, _marquee-coupon-code, _marquee-divider, _marquee-group, _marquee-heading, _marquee-icon, _marquee-image, _marquee-text; main: _marquee-button, _marquee-countdown-timer, _marquee-coupon-code, _marquee-divider, _marquee-group, _marquee-heading, _marquee-icon, _marquee-image, _marquee-text, marquee-item)
- blocks/product-list.liquid: danh sách block được phép khác main (theme: product-card; main: promo-card)
- sections/faq-image-accordion.liquid: danh sách block được phép khác main (theme: faq_accordion, group, images; main: faq_accordion, group)

Validation before release: saved template/group/settings values and block/section order match the previous theme except declared new defaults; protected presets and existing setting definitions are unchanged; changed JavaScript parses. Local browser fixture uses actual pre/post CSS and passes 16 default-layout comparisons at 1440/1024/768/390px, plus optional mobile hide/width controls. Shared layout CSS and theme token consumers are held. Live Shopify storefront and Theme Editor rendering were not verified in this Git sync; no store upload or publication. Full Theme Check and customization coverage are required before commit. Tests and generated evidence remain local and are excluded from delivery.


## Warning cleanup and mobile performance — 2026-10-09

Removed unused collection sort URL/count/filter calculations without changing submitted form fields. Declared the empty-search toolbar argument and normalized the product-list banner desktop column argument to the shared string contract. Replaced the icon validation OR chain with exact array membership, preserving every supported key and fallback. CSS variables render the existing font-faces dependency to deduplicate identical font declarations while retaining all font variants and display swap. Preserve these changes alongside each existing Customizations row during future base updates. Announcement runtime changes are recorded in the table above.

Local validation at this stage: Theme Check passes with zero errors and 38 warnings (previously 45); 19 existing search, collection and theme-setting tests pass. Shared CSS scope, unused library snippets, settings-count and other Liquid-complexity warnings remain visible; no check has been disabled. Mobile Lighthouse checks target local port 9300 and the separately requested store URL; results will be added after measurement.

Mobile optimization follow-up: slideshow progress no longer invalidates the whole slide subtree or reads layout each frame. Removed duplicate cart-drawer stylesheet output; its existing asynchronous asset already contains every declaration plus scoped scrolling fixes. Below-fold uploaded Video sources are deferred until intersection or play and autoplay pauses offscreen; editor and no-JS native controls remain supported. Product and collection cards receive explicit responsive candidates/loading from their owners.

Lighthouse 13.5 mobile baseline on local homepage: Performance 54, FCP 10.0s, LCP 14.2s, TBT 130ms, CLS 0.013; load-time warning means the baseline may be incomplete. The separate fresh store-URL run redirected to /password; its score is excluded from homepage comparisons.

## Announcement consolidation and Product media navigation — 2026-10-09

Owner requested primary Product media navigation, clearing Announcement bar static and rebuilding Announcement bar with the same preset plus a theme-specific Show social links on desktop option. Main and overlay product media arrows now use primary button classes while retaining shared focus, hover and navigation positioning. Announcement bar allows the existing shared Text block, retains the social slot ID and existing social URLs, preserves saved message settings, and migrates Header group to the surviving section type. Desktop preset padding is 10px; mobile is 8px with socials hidden. Slider/scrolling modes remain available. The old static section is removed; no static JavaScript file exists in this checkout. No commit, push or store deployment.

Follow-up: Announcement text uses the shared Basic Text (`text`) block, as in Marquee. Removed the legacy `announcement-text` type from this section’s allow-list; both the preset and saved Header message retain Basic Text and rich text content.

Validation: Theme Check passes with zero errors and 38 warnings across 360 files. Preset/schema/Header group settings and block types are consistent; whitespace checks pass. This task’s implementation paths are recorded. Final full-tree customization audit reports unrelated concurrent edits missing records in `blocks/_header-account.liquid` and `blocks/blog-card-button.liquid`; no changes to those files were made by this task. Local Chrome fixture uses current shared/section/block CSS and announcement runtime: 1920/1024/768/375px with desktop socials on/off passes centered message, no overflow and expected 41px desktop/37px mobile height; social hides on mobile. Repeated editor unload/load initialization and two-message slider navigation pass. Live Shopify rendering and Theme Editor save/reload were not verified.

Text color follow-up — 2026-10-09: Announcement bar uses `blocks/text.liquid` directly, so its Text color setting is the same shared setting (color with alpha support, no schema default) as Basic Text elsewhere. Local Chrome confirms custom color/alpha propagation to paragraphs and links and fallback to the color scheme body color when cleared. The existing saved white color is preserved.

## Marquee Heading Text color — 2026-10-09

Owner requested the same Text color option as Basic Heading. Replaced the heading/text role selector with Basic Heading’s exact `text_color` schema (color picker, alpha support, translated label and help). Uses the shared `--heading-block-color` override for marquee fill, outline stroke and inherited link color; empty values retain the scheme heading color. Legacy role values still render compatibly for existing remote compositions. Removed obsolete heading-role values from local Marquee presets and saved homepage headings, preserving their content, order, opacity and typography.

Marquee color validation: shared Heading and private Marquee Heading Text color schemas match exactly. Rendered Liquid checks pass for custom color, alpha and blank heading/body legacy fallbacks. Theme Check passes with zero errors and 38 warnings after removing obsolete heading-role values from `sections/text-marquee-custom.liquid` presets and `templates/page.about-us.json` instances as well.

## Mobile accessibility, SEO and component loading — 2026-10-09

Saved homepage blog metadata uses #737373 for readable contrast on white. Footer menu headings use h3 while retaining their typography. These are saved configuration changes. Component-only CSS no longer enters the global homepage stylesheet. Native Shopify metadata remains the source of canonical, social and structured data. Store URL Lighthouse redirected to the password page; no production homepage score is inferred from it.

## Header group upload repair — 2026-10-09

Preview log confirms `header-group.json` was rejected before Announcement bar schema uploaded. Readback from `layouthub-template-v2.myshopify.com`, development theme `192119800107` / Development (147b13-Mac-mini-cua-beae), confirms remote Announcement bar schema matches local exactly and allows `text`; remote Header group still referenced the removed static variant. Uploaded only `sections/header-group.json` with explicit theme ID and `--nodelete`. Post-upload pull matches local Header group semantically, including Announcement bar, Basic Text settings and social desktop toggle. This supersedes the no-store-deployment statement for this narrow repair: one Header group upload was made, no publication or unrelated file push. Pre-upload copy remains local in `/private/tmp/elara-header-upload-before` for rollback reference.

Follow-up measurement: removed the full Kaisei regular preload when that exact role uses the range-specific subset (other fonts/styles/weights retain their original preload). Article title context is also real hidden link text for SEO, using an optional shared-button suffix. Both desktop and mobile account owners check actual menu links before requesting the custom menu.

Font fallback refinement: the full regular face is limited to complementary supported-script ranges, so an unsupported emoji does not trigger a 1.9MB font download before the system emoji fallback. The combined ranges cover every original cmap entry; Japanese and supplementary CJK remain available.

Final local mobile Lighthouse 13.5 measurement: Performance 55, Accessibility 100, Best Practices 54, SEO 100; FCP 9.5s, LCP 10.3s, TBT 30ms, CLS 0.040, transferred 7,912KiB. The regular Kaisei request is now only the 36,453-byte subset, with no full regular font transfer. Baseline Performance 54 / LCP 14.2s / TBT 130ms / transfer 9,794KiB; results retain the page-load timeout warning, so this is diagnostic local evidence rather than a production guarantee. Remaining Best Practices failures concern insecure Shopify requests under localhost HTTP, Shopify account/GraphQL errors, Shop Pay third-party cookies and CSP. No Shopify runtime or security policy is stripped. Store-root audit redirected to the password page and cannot validate the homepage. Final Theme Check: zero errors, 38 warnings; customization coverage passes for 120 files; 31 selected behavior tests plus 23 final selected checks pass, and JavaScript/whitespace checks pass. CSS extracted into assets is identical after whitespace normalization. No commit or push performed.

## Remaining warning cleanup — 2026-10-09

Theme Check warnings decrease from 38 to 5 with zero errors. No check is disabled or threshold raised. The five remaining advisory settings-count warnings concern _bundle-summary (41), _comparison-table-features (41), carousel (55), comparison-table-column (46) and editorial-text (53); all existing merchant controls, definitions, presets and saved values remain intact. Three unreferenced legacy snippets (icon-account, icon-cart, product-list-promo-items) are removed. Shared stylesheet declarations match their previous owner declarations. Before/after Liquid rendering matches across 15 global CSS fixtures and 50 media/carousel/countdown variable fixtures; 42 selected existing behavior tests pass. Whitespace and customization coverage checks pass. No commit or push.


## First paint animation correction — 2026-10-09

Reproduced the reported flash using the actual previous runtime/CSS in Chrome with a one-second runtime delay: content is visible first, then hidden by entrance setup. Public Elvara CSS instead initializes reveal-component at opacity 0. The theme head now prepares a supported-JS/motion marker before body parsing; critical CSS hides valid uninitialized leaf effects, and the section controller prepares pending state before releasing the initial guard. Announcement/Marquee/multi-image owners and None remain readable. Focused content is exposed, and the asset-error/eight-second timeout fallback releases initial/prepared states; late runtime initialization skips entrances for the page already exposed. No settings, presets or animation timings changed.

Validation: Chrome fixtures pass initial paint for all six effects, delayed-runtime handoff, final rotated-word visibility, focus, below-fold gating, disabled global motion, simulated reduced-motion preference, error/late-runtime recovery, simulated editor boot and a real script-disabled sandbox frame. Browser reproduction uses a local fixture, not live Shopify save/reload. The 37 lifecycle, 27 editor-refresh, 54 schema/render and 11 bootstrap capability/timeout/error checks pass (129 assertions); JavaScript syntax, diff whitespace and customization coverage pass. Theme Check: zero errors, five existing settings-count warnings. Fixtures remain in /tmp. No commit, push or publication.

Typography scale correction — 2026-10-09: Theme Settings headings H1–H5 are labeled Extra large through Extra small; setting IDs, numeric values and H6 controls remain. Preset Heading sizes shift H2–H5 to preserve their old effective Hn role; existing XS choices remain XS, now following H5, without changing semantic HTML tags; slideshow headings explicitly use XL. Figma connector required reauthentication, so neither supplied frame was available for verifying numeric sizes or visual fidelity. No store push or Git commit/push.

### Retained custom paths through main fafdc8de

- `assets/announcement-bar.js`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/bundle-summary.css`
- `assets/carousel-block.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/comparison-table.css`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-collection-card.css`
- `assets/component-pagination.css`
- `assets/component-search-suggestions.css`
- `assets/component-social-links.css`
- `assets/editorial-text.js`
- `assets/featured-collection-banner.css`
- `assets/hotspot-full-width-carousel.css`
- `assets/image-comparison.css`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/marquee-countdown-timer.css`
- `assets/product-buy-buttons.js`
- `assets/product-callout.css`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/search-page.js`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_announcement-social-links.liquid`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/_slide_split.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/carousel_split.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_answer_text.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/grid.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/images.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/comparison-table-custom.liquid`
- `sections/countdown.liquid`
- `sections/email-signup-form.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection-horizontal.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/hello-world.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/image-comparison-custom.liquid`
- `sections/image-text-split-layout.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/press.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/testimonial-carousel.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/video-product-carousel-custom.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/localization-styles.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/quantity-icon.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/shoppy-x-ray.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/testimonial-split-arrow.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`

## Quantity Forms Input style binding (2026-10-11)

Compared the current theme with personal main: layout/theme.liquid maps settings.input_style to the body input-style--solid/outline class; critical.css maps that class to --input-border-width and --input-background-color. Removed the Featured product hardcoded border, radius, background and text color from assets/product-information.css so Default Quantity consumes those form tokens. The numeric input inherits the control text color. Explicit Default in the Featured product preset; homepage already uses Default. Keep 109x44px size, typography, icons and purchase layout. Verified the running localhost preview: Solid Quantity border 0px, background matches the inherited form token and size remains 109x44px.

At the owner's request, configured Forms through settings_data.json to match the Figma Quantity reference: Outline, Square, 44px desktop/mobile height and 1px border, with scheme-1 Border set to #e6e6e6. The running preview confirms the Outline body class, transparent control background over the white scheme surface, square corners, #e6e6e6 border and 109x44px geometry. Shared Forms and scheme-1 border consumers follow these settings. No additional CSS override was added for this configuration.

## Announcement bar first-paint stability (2026-10-11)

Move announcement layout, single-slide navigation, responsive padding/social visibility and social icon geometry into render-blocking assets/critical.css so delayed section CSS cannot resize the bar. Motion remains section-owned. Preserve the original slider runtime and settings. Before initialization, use one explicit minmax(0, 1fr) grid column and stretch text blocks to the viewport width: intrinsic grid sizing previously placed the text at the left of its cell before JS stretched it into the correct center position.

Verified the actual localhost storefront with frame-by-frame geometry readings before and after initialization: desktop height 41px with unchanged text bounds; mobile 390px height 37px; mobile 320px wrapped text height 58px. Mobile scrollbar appearance changes available page width before initialization, while announcement height stays constant. Removed the temporary measurement script after verification. Nine browser regressions cover delayed section CSS/runtime, text position/width, social visibility, wrapped content, navigation and editor unload/load at 320/390/1440px. Keep the critical geometry rules during base updates.

Follow-up paint regression: the remaining apparent brown overflow was the header-top surface, not a resize of the announcement. Recorded the actual first frame with header-top background rgb(67, 35, 21), then an animated fade to transparent after header wrapper initialization. Move overlay transparency from sections/header.liquid into critical.css and recognize the server-rendered overlay before the wrapper receives data-sticky-type/header--overlay. Match the transparent-scheme child before JS as well. Desktop and mobile frame traces now show fully transparent header surfaces from the first frame through initialization; announcement remains brown at 41px/37px. Eleven regressions pass, including delayed header CSS/runtime and restored base backgrounds for scrolled/submenu/search/cart states. Temporary paint probe removed.

Header position follow-up: live frame traces found the 40px logo pinned to the top of a 44px fallback track (2px vertical movement at column setup), a fallback icon display rule exposing the desktop Text cart's mobile icon (23.5px action-group movement), different mobile toggle/gap/cart margins, an asymmetric mobile logo grid, and scrollbar appearance changing the page width. Center fallback absolute items vertically, let block-owned icon visibility apply, match mobile spacing/toggle dimensions and zero cart margin, keep centered mobile logo columns symmetric, and reserve the root scrollbar gutter. Strengthen the header-column margin reset against later cart CSS. Preload the selected Accent base font when distinct from Body: header labels were swapping from fallback metrics because only Body was preloaded. Actual preview measurements now match before/after header initialization for logo, menu, localization, Search and Cart on desktop/mobile; mobile coordinates also remain identical as the scrollbar appears. Thirteen browser regressions pass, including actual header.js column setup and adding tall content after initialization. Temporary position probe removed.

### 2026-10-14 — Rebuild from personal main and reapply custom logic

- Previous main checkpoint: `75baa7c890ee43f9a7c97ad3aee49961ea295f2f`.
- Updated through main: `efbbac9e29963002df775cf40fd34ca6fe991bd8`.
- Main commits included: 2.
  - `e84d0689249b5ae26d3c5c066c90348e4aae06f4` — chore(base): update base with 4 upstream commits through 30d272ad
  - `efbbac9e29963002df775cf40fd34ca6fe991bd8` — chore(base): update base with 16 upstream commits through 0fa58707

- Scope: Carousel, Slide, Testimonial: split, Carousel split, Slide split, Columns/Column, promotion cards and Collection tabs. Main supplies implementation, ownership, slots and lifecycle. Theme templates supply content/order/layout; custom logic is re-applied additively after the rebuild.
- Placement/context: retain existing JSON templates, section-group composition and Shopify resource context. No store picker save, media upload or publish.
- Migration: `grid → columns` with `_columns-column` wrappers; `_slide_split → slide_split` preserving static `image`/`content` IDs. Former static generic header/carousel slots are converted to dynamic blocks on the new main owner without dropping their content/order.
- Layout compatibility: preserve desktop/tablet/mobile column counts through main custom breakpoint controls, gaps and padding values where the new contract supports them. Preserve saved pill/slightly-rounded Slide shapes. Carousel desktop gap supports 0–100px with step 1 to retain the existing 56px preset.
- Custom: common Carousel policy restores independent previews (Arche/Essen N + 2/7; Elara/Malandra 1.2 for one mobile column); Lighthouse Slide CSS loading on Arche/Essen; original Split SVGs on Elara/Malandra; Arche Columns metadata; tab rail/header styling and explicit style dependency; shared rounded progress and blog auto-height where recorded.
- Main lifecycle: elapsed-time autoplay, observer/destroy cleanup, versioned shared imports and deferred Collection tabs. Theme-specific global Press/entrance geometry behavior is retained outside the rebuild.
- Promotion cards keep saved media, content, position, alignment, column spans and padding; new overlay controls use main defaults.
- Presets captured from migrated templates:
  - `templates/collection.json#main` → `sections/collection.liquid` / **Elara: main**.
  - `templates/index.json#testimonial_split` → `sections/testimonial-carousel.liquid` / **Elara: testimonial split**.
  - `templates/index.json#inspiration_products` → `sections/video-product-carousel-custom.liquid` / **Elara: inspiration produc**.
  - `templates/index.spinel-sync.json#collection_tabs_ihC66t` → `sections/collection-tabs.liquid` / **Elara: collection tabs ih**.
  - `templates/index.spinel-sync.json#icon_text_inline_eN4cRW` → `sections/icon-text-inline.liquid` / **Elara: icon text inline e**.
  - `templates/index.spinel-sync.json#gallery_carousel_X7PGND` → `sections/gallery-carousel.liquid` / **Elara: gallery carousel X**.
  - `templates/index.spinel-sync.json#icon_text_cards_qT6mLV` → `sections/icon-text-cards.liquid` / **Elara: icon text cards qT**.
  - `templates/page.about-us.json#philosophy` → `sections/custom-section.liquid` / **Elara: philosophy**.
  - `templates/page.about-us.json#story_lifetime` → `sections/custom-section.liquid` / **Elara: story lifetime**.
  - `templates/page.about-us.json#story_gold` → `sections/custom-section.liquid` / **Elara: story gold**.
  - `templates/page.about-us.json#story_generations` → `sections/custom-section.liquid` / **Elara: story generations**.
  - `templates/page.about-us.json#service_promises` → `sections/custom-section.liquid` / **Elara: service promises**.

- Change statistics: 87 code/configuration/support-document paths plus this customization log; 2 obsolete block files removed after reference migration.
- Changed paths:
  - `assets/carousel-block.js`.
  - `assets/carousel-runtime.js`.
  - `assets/carousel-slide.js`.
  - `assets/column-background-video.js`.
  - `assets/product-collection-carousel.js`.
  - `assets/swiper-carousel.css`.
  - `assets/swiper-carousel.js`.
  - `assets/testimonial-split.js`.
  - `blocks/_columns-column.liquid`.
  - `blocks/_slide_split.liquid`.
  - `blocks/blog-grid.liquid`.
  - `blocks/blog-list.liquid`.
  - `blocks/carousel.liquid`.
  - `blocks/carousel_split.liquid`.
  - `blocks/collection-card.liquid`.
  - `blocks/collection-list-items.liquid`.
  - `blocks/collection-promo.liquid`.
  - `blocks/collection-tab.liquid`.
  - `blocks/columns.liquid`.
  - `blocks/comparison-table.liquid`.
  - `blocks/gallery-header-group.liquid`.
  - `blocks/grid.liquid`.
  - `blocks/images.liquid`.
  - `blocks/parallax-item.liquid`.
  - `blocks/product-list-banner.liquid`.
  - `blocks/product-list.liquid`.
  - `blocks/promo-card.liquid`.
  - `blocks/slide.liquid`.
  - `blocks/slide_split.liquid`.
  - `blocks/slideshow-slide.liquid`.
  - `docs/columns.md`.
  - `docs/swiper-carousel.md`.
  - `layout/theme.liquid`.
  - `locales/en.default.json`.
  - `locales/en.default.schema.json`.
  - `scripts/migrate-columns.cjs`.
  - `scripts/migrate-common-carousel-options.cjs`.
  - `scripts/migrate-testimonial-carousel.cjs`.
  - `sections/announcement-bar.liquid`.
  - `sections/blog-posts.liquid`.
  - `sections/bundle-builder.liquid`.
  - `sections/cart-recommendations.liquid`.
  - `sections/collection-list.liquid`.
  - `sections/collection-tabs.liquid`.
  - `sections/collection.liquid`.
  - `sections/collections-with-tabs.liquid`.
  - `sections/collections.liquid`.
  - `sections/comparison-table-custom.liquid`.
  - `sections/countdown.liquid`.
  - `sections/custom-section.liquid`.
  - `sections/email-signup-dual-image.liquid`.
  - `sections/email-signup-form.liquid`.
  - `sections/email-signup-single-image.liquid`.
  - `sections/faq-image-accordion.liquid`.
  - `sections/featured-blog-posts.liquid`.
  - `sections/featured-collection-banner.liquid`.
  - `sections/featured-collection-horizontal.liquid`.
  - `sections/featured-collection.liquid`.
  - `sections/footer.liquid`.
  - `sections/gallery-carousel.liquid`.
  - `sections/gallery-custom.liquid`.
  - `sections/header.liquid`.
  - `sections/hero.liquid`.
  - `sections/hotspot-gallery.liquid`.
  - `sections/hotspot.liquid`.
  - `sections/icon-text-cards.liquid`.
  - `sections/icon-text-inline.liquid`.
  - `sections/image-comparison-split-custom.liquid`.
  - `sections/image-text-card-grid.liquid`.
  - `sections/location-map.liquid`.
  - `sections/parallax.liquid`.
  - `sections/press.liquid`.
  - `sections/rich-text.liquid`.
  - `sections/scroll-reading-text.liquid`.
  - `sections/scrolling-cards.liquid`.
  - `sections/shop-the-look-section.liquid`.
  - `sections/testimonial-carousel.liquid`.
  - `sections/testimonials-background-custom.liquid`.
  - `sections/testimonials-horizontal-custom.liquid`.
  - `sections/timeline.liquid`.
  - `sections/video-product-carousel-custom.liquid`.
  - `snippets/product-list-promo-items.liquid`.
  - `snippets/theme-module-import-map.liquid`.
  - `templates/collection.json`.
  - `templates/index.json`.
  - `templates/index.spinel-sync.json`.
  - `templates/page.about-us.json`.
- Validation: full Theme Check at error level; 16 shared runtime/import-map tests per theme; Liquid/server-layout parity checks (20 Arche, 16 other themes); template content/media comparison showed no missing saved values. Static/dynamic slot references were checked. Tests/results stay local.
- Limit: storefront/browser and full interactive Theme Editor sessions have not been exercised for this batch.
- Retained code dependencies outside the rebuild remain listed in Customizations. No personal base-update-history file is propagated.

### 2026-10-14 — Align rebuilt option contracts with main

- Removed the accidental legacy `image_text_card_*`, parent border/radius, loop and transition controls from common Carousel. Removed the Theme carousel behavior header. Main setting order, choices, ranges and defaults are retained; the independent mobile preview checkbox is the only recorded custom addition. Old unused factory-preset gaps follow the supported main range; saved template gap values remain unchanged.
- Columns and `_columns-column` settings and child allow-lists were audited against main and already match; no extra optimization was introduced. Grid and `_slide_split` references have been migrated.
- Retained the existing Testimonial: split content/static slot IDs and original SVG custom. The new main structure is already in place; no redundant optimization or old Testimonial: Carousel factory preset is kept.
- Validation: main contract comparison, supported preset settings/children, shared lifecycle regressions and full Theme Check at error level. Test artifacts remain local.

- Slide audit: removed the non-custom legacy radius additions as well; `pill`/`slightly_rounded` saved choices map to main `rounded`. Layout/order/spacing and content remain preserved. Arche/Essen keep only the recorded CSS-loading customization; Elara/Malandra keep the recorded color simplification.


### 2026-10-14 — Update from personal main c8fab8a5

- Previous main SHA: `efbbac9e29963002df775cf40fd34ca6fe991bd8`.
- Updated main SHA: `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f`.
- Included main commits:
  - `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f` — chore(base): update base with 2 upstream commits through 73a1feac
- Owner explicitly approved removing `custom_columns` and `columns_per_breakpoint` from all four themes, schemas, presets and saved instances. Tablet now follows desktop from 768px; content and order are retained.
- Columns mobile swipe uses main Swiper with keyboard, reduced-motion and editor teardown. Unrelated custom implementations and existing local work are retained.
- Updated files:

```text
assets/columns-swipe.js
blocks/columns.liquid
docs/columns.md
locales/en.default.schema.json
scripts/migrate-columns.cjs
sections/custom-section.liquid
templates/page.about-us.json
```

- Preview statistics before this log line: 8 files, 147 additions, 105 deletions.


## Collection tabs deferred loading fix — 2026-10-14

- Owner authorized applying this scoped fix to all themes. Source: `shopify-theme-base` via personal `theme-base/main` (`c8fab8a5`).
- `blocks/tab-layout.liquid`: reuse base deferred-section request/cache and panel hydration; retain the current products until loading succeeds, preserve the last requested tab during observer updates, and abort stale requests on section unload.
- Keep theme markup, schema, configured collections, presets, layout, navigation and animation unchanged. Preserve this loading contract in future base updates.
- Validation: full Theme Check passes with zero errors; nine deferred-loading regression tests pass. Owner authorized committing and pushing this scoped fix. Tests stay local; existing theme customizations and unrelated work remain outside this commit.


## Autoplay pagination clock parity — 2026-10-14

- Owner requested all carousel Progress bar/Bullets to follow personal main. Source: `theme-base/main` (`c8fab8a5`).
- `assets/slideshow.js`: use main’s single elapsed-time clock, including hover, focus, visibility, drag and reduced-motion pauses; read number-ring progress from the slideshow root.
- `sections/slideshow.liquid`: remove the independent CSS animation clock; progress segments and bullets consume elapsed progress while preserving theme geometry, controls, schema and presets.
- `assets/swiper-carousel.css`: rounded native/manual progress fills consume the existing shared autoplay clock in horizontal, RTL and vertical modes. Non-autoplay behavior remains unchanged.
- Validation: 14 clock/lifecycle tests pass per theme; full Theme Check has zero errors (4–5 existing warnings). Browser QA fixtures load the actual theme JS/CSS and verify both pagination types on all four themes plus a mobile viewport. Arche storefront preview remains blocked by an unrelated icon-with-text preset upload error (`border_color`); full live Theme Editor QA was not completed.
- Preserve these clock bindings in future base updates. Tests remain local. Owner authorized commit/push after a passing Theme Check.

### 2026-10-15 — Apply shared icon, collection-tab and underline fixes

- Owner explicitly requests the new shared behavior in all variants, including customized files, while preserving their layout and preset content.
- Previous personal main: `c8fab8a5588b05f9577f3a2aaa2ac01744c1286f`. Updated through personal main: `c07753a29c860f64e60567a2fc0d58deb3429c3b` (one main commit; team source `a0ac2424`).
- Three-way integration preserves theme implementation outside the shared fixes. Custom SVG uses isolated image rendering and input validation; icon bounds use flex layout; shared underline uses positive internal padding and bottom zero.
- Collection tabs dynamically allow only Collection tab. Static controls remain; all section settings and presets, templates, section-group composition and saved config are preserved. No structural preset rebuild is needed for this source change.
- Scope: `assets/component-pagination.css`, `assets/component-search-suggestions.css`, `assets/critical.css`, `blocks/icon.liquid`, `sections/collection-tabs.liquid`, `snippets/css-variables.liquid`, `snippets/custom-icon-image.liquid`, `snippets/icon.liquid`, `snippets/tab-layout-styles.liquid`.

## Malandra variant update — 2026-10-15

Source: `../malandra-theme/docs/variant-updates/malandra-to-elara.md`, revision 1, source branch `theme/malandra-theme`, clean HEAD `a3aef5c8044e9e14443920da80e83b8358baf971`. Target: `theme/elara-theme`, before HEAD `bebd784bf4f236297b0a36c12c5ba6bbca9568a9`; after: local patch, not committed. User explicitly authorized the complete Malandra header preset with only the two Elara logo image links retained; this supersedes the source doc's earlier preset exclusion for this application.

| Update ID | Code status | Target evidence and patch |
| --- | --- | --- |
| MALANDRA-ELARA-HEADER-NAV-001 | applied | Target had legacy desktop click handler, 991.98px boundary gap and desktop nav scroll-clipping utility. Removed handler/utility; complementary 992px CSS/JS boundary and resize cleanup. Browser click/hover/resize tests pass at 767/768/991/992/1024/1149/1150/1280px. |
| MALANDRA-ELARA-HEADER-ACTIONS-001 | applied | Target repeated icon sizing and column gap; introduced icon variable, action padding, icon-relative cart badge and inspector inner targets. Browser square-icon/action-gap and LTR/RTL badge tests pass. Native signed-in Account and actual Editor inspector still require QA. |
| MALANDRA-ELARA-HEADER-COLOR-001 | applied | Header icon snippet uses currentColor; imported requested header geometry. Browser normal/transparent scheme fixture checks recorded separately from native storefront QA. |
| MALANDRA-ELARA-ACCOUNT-001 | applied | Native dialog part CSS extends mobile sheet to <992px; boundary close helper retained. Actual exported Shopify component parts, signed-in state and focus restoration need target storefront QA. |
| MALANDRA-ELARA-SEARCH-001 | applied | Target unstyled compact submit and input font/placeholder overrides remained. Uses theme-button, shared form settings and grid close placement; smart input background uses shared token. Search settings/history/page/suggestions regression suite run. |
| MALANDRA-ELARA-LOGO-001 | applied | Original target used global normal/transparent artwork. New requested header composition uses explicit block logo and transparent logo with those exact original links, no Malandra symbol; retains Malandra width/position/preset settings. |
| MALANDRA-ELARA-LIGHTHOUSE-HERO-001 | applied | Target image Hero lacked explicit first-section priority and art-directed preload despite compatible head extraction markers. Imported implementation/helper only; retained complete Elara Hero schema, preset, media and video path. Liquid validator passes with two explicit-preload advisories. Network/editor QA remains. |
| MALANDRA-ELARA-LIGHTHOUSE-CSS-002 | applied | All eight target owners still bundled CSS. Extracted the target's own CSS byte-for-byte (63,803 bytes), with synchronous asset dependencies. Hash ledger: docs/audits/elara-variant-update-2026-10-15.json. Existing horizontal collection work preserved: removing new asset link and reinserting its CSS reproduces the pre-update working file exactly. |
| MALANDRA-ELARA-LIGHTHOUSE-CONTRAST-003 | applied | Target inactive tab mixed #636363 at 48% onto #fff (approximately #b4b4b4, below 4.5:1). Changed only that mix to 95% against scheme background. No separator/layout additions from source. Palette contrast evidence recorded in audit. |
| MALANDRA-ELARA-LIGHTHOUSE-MARQUEE-004 | applied | Target actual runtime + marquee browser fixture reproduced 108 clone removals/600ms; after guarded class/data writes: 0, retaining 3 clones and one animation. Content update, resize, unload/reload and reduced motion pass. |
| MALANDRA-ELARA-LIGHTHOUSE-ANIMATION-005 | applied | Target before fixture initialized distant section immediately (new acceptance assertion failed). After patch: near/zero-height roots immediate, distant root deferred, editor/no-observer immediate, pending unload/reload and reduced motion pass. |

Header preset: `sections/header.liquid` and only the header entry of `sections/header-group.json` now match Malandra composition, except logo normal/transparent URLs and removal of Malandra symbol. Announcement and global settings are unchanged. The menu is intentionally `malandra-header`, with the source banner/collection resources; resource availability has not been checked against a deployed target. Header/footer block entrance animations remain None.

Validation: Theme Check 0 errors / 5 existing ExcessiveSettingsCount warnings; JavaScript syntax and diff whitespace checks pass. Scoped Liquid validator: header, logo, header-top, Search overlay, Hero pass; hero-image has two preload advisories. Mega banner validator rejects the existing conditional HTML tag pattern (`<{% if ... %}a...`), also present before this update; Theme Check accepts it. Browser fixtures do not establish actual Theme Editor inspector/native Shopify Account integration, resource availability, first-paint network parity or Lighthouse scores. Code status remains applied until that target QA is complete.

Preview: no explicit upload performed by this task; external watcher synchronization not verified. Publish: not performed. Git commit/push: not performed. No source scores claimed for Elara.

QA receipt bổ sung: 54 scoped Header/Search/Slideshow checks và 2 Hero render parity/cap checks pass sau điều chỉnh đường dẫn fixture và CSS owner đã tách. Hai logo fixtures dùng SVG hình học nguồn chỉ để kiểm tra layer/size; artwork Elara thực tế còn cần storefront QA. Contrast ratios từng scheme lưu trong audit JSON. Source preset equality (ngoại trừ các logo fields) và config/settings_data.json byte-identical được assert.

## Search visibility follow-up — 2026-10-15

Fixed `sections/search-overlay.liquid` after reproducing the reported click/visibility issue on local preview 9301 (existing development theme 192119800107). Transparent header section wrapper has zero height; measuring that wrapper positioned the Search panel at y=0 behind the 76px header. Measure `[data-header-root]` instead, reserve its height while scroll-up sticky header is revealing, and use the same calculation on resize. Verified actual preview panel begins at y=76, opens visibly, and query `ring` returns suggestions, Products/Collections and four product cards. No explicit push/publish performed; existing preview watcher synchronized the section.

### Retained custom paths through main 2cf6e5ab

- `assets/announcement-bar.js`
- `assets/block-press-quotes.css`
- `assets/block-slideshow-slide.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/bundle-summary.css`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.css`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-collection-card.css`
- `assets/component-pagination.css`
- `assets/component-search-suggestions.css`
- `assets/component-social-links.css`
- `assets/editorial-text.js`
- `assets/featured-collection-banner.css`
- `assets/hotspot-full-width-carousel.css`
- `assets/image-comparison.css`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/marquee-countdown-timer.css`
- `assets/product-buy-buttons.js`
- `assets/product-callout.css`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-featured-collection-horizontal.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-slideshow.css`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_announcement-social-links.liquid`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-mega-menu.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_answer_text.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/images.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/comparison-table-custom.liquid`
- `sections/countdown.liquid`
- `sections/email-signup-form.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection-horizontal.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hello-world.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/image-comparison-custom.liquid`
- `sections/image-text-split-layout.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/press.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/video-product-carousel-custom.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-figma-icon.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-image.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/localization-styles.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/quantity-icon.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/shoppy-x-ray.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/testimonial-split-arrow.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`


### Countdown composition migration — 2026-10-16

Owner-authorized migration from team `2a9a0caf`, personal main `2cf6e5ab`: rename preset to Countdown (custom), use dynamic blocks and the existing Custom section allow-list, unlock saved instances while preserving block IDs, order, content and all layout settings. Countdown timer runtime is unchanged.

### Retained custom paths through main 2593c6f2

- `assets/announcement-bar.js`
- `assets/block-press-quotes.css`
- `assets/block-slideshow-slide.css`
- `assets/block-timeline-slide.css`
- `assets/breadcrumbs.css`
- `assets/bundle-builder.js`
- `assets/bundle-summary.css`
- `assets/carousel-block.js`
- `assets/carousel-slide.js`
- `assets/cart-drawer-recommendations.js`
- `assets/cart-drawer.css`
- `assets/cart-page.css`
- `assets/cart-page.js`
- `assets/collections-with-background.js`
- `assets/collections-with-tabs.js`
- `assets/column-background-video.js`
- `assets/columns-swipe.js`
- `assets/comparison-table.css`
- `assets/comparison-table.js`
- `assets/component-bouncing-dots.css`
- `assets/component-collection-card.css`
- `assets/component-pagination.css`
- `assets/component-search-suggestions.css`
- `assets/component-social-links.css`
- `assets/editorial-text.js`
- `assets/featured-collection-banner.css`
- `assets/hotspot-full-width-carousel.css`
- `assets/image-comparison.css`
- `assets/image-text-card-grid.js`
- `assets/image-text-stacked-bands.js`
- `assets/marquee-countdown-timer.css`
- `assets/product-buy-buttons.js`
- `assets/product-callout.css`
- `assets/product-collection-carousel.js`
- `assets/product-description.js`
- `assets/product-information-extras.css`
- `assets/product-information-extras.js`
- `assets/product-information.css`
- `assets/product-inventory.js`
- `assets/product-list-promos.js`
- `assets/product-media.css`
- `assets/product-media.js`
- `assets/quick-add.js`
- `assets/quick-view.js`
- `assets/search-page.js`
- `assets/section-collection-banner.css`
- `assets/section-collection.css`
- `assets/section-collection.js`
- `assets/section-collections-with-background.css`
- `assets/section-collections-with-tabs.css`
- `assets/section-featured-collection-horizontal.css`
- `assets/section-parallax.css`
- `assets/section-parallax.js`
- `assets/section-slideshow.css`
- `assets/slideshow.js`
- `assets/swiper-12.2.0-effect-fade.min.css`
- `assets/timeline-list.css`
- `assets/timeline-list.js`
- `assets/variant-picker.js`
- `blocks/_announcement-social-links.liquid`
- `blocks/_bundle-product-list.liquid`
- `blocks/_bundle-summary.liquid`
- `blocks/_cart-content.liquid`
- `blocks/_cart-order-summary.liquid`
- `blocks/_cart-summary.liquid`
- `blocks/_collection-breadcrumb.liquid`
- `blocks/_collection-columns.liquid`
- `blocks/_collection-count.liquid`
- `blocks/_collection-filter.liquid`
- `blocks/_collection-pagination.liquid`
- `blocks/_collection-products.liquid`
- `blocks/_collection-sort.liquid`
- `blocks/_collection-toolbar.liquid`
- `blocks/_collections-list.liquid`
- `blocks/_collections-page-card.liquid`
- `blocks/_column.liquid`
- `blocks/_columns-column.liquid`
- `blocks/_comparison-table-features.liquid`
- `blocks/_header-account.liquid`
- `blocks/_header-cart.liquid`
- `blocks/_header-divider.liquid`
- `blocks/_header-localization.liquid`
- `blocks/_header-logo.liquid`
- `blocks/_header-mega-menu.liquid`
- `blocks/_header-menu-toggle.liquid`
- `blocks/_header-menu.liquid`
- `blocks/_header-search.liquid`
- `blocks/_header-top.liquid`
- `blocks/_marquee-button.liquid`
- `blocks/_marquee-countdown-timer.liquid`
- `blocks/_marquee-coupon-code.liquid`
- `blocks/_marquee-divider.liquid`
- `blocks/_marquee-group.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/_marquee-icon.liquid`
- `blocks/_marquee-image.liquid`
- `blocks/_marquee-text.liquid`
- `blocks/_mega-menu-banner.liquid`
- `blocks/_mega-menu-banners.liquid`
- `blocks/_overlay-product-media.liquid`
- `blocks/_product-collection-grid.liquid`
- `blocks/_product-details.liquid`
- `blocks/_product-media.liquid`
- `blocks/_search-input.liquid`
- `blocks/_search-products.liquid`
- `blocks/_search-results.liquid`
- `blocks/announcement-countdown-timer.liquid`
- `blocks/banner.liquid`
- `blocks/blog-card-button.liquid`
- `blocks/blog-card-description.liquid`
- `blocks/blog-card-meta.liquid`
- `blocks/blog-card-tag.liquid`
- `blocks/blog-card-title.liquid`
- `blocks/blog-card.liquid`
- `blocks/blog-grid.liquid`
- `blocks/blog-list.liquid`
- `blocks/blog-meta.liquid`
- `blocks/blog-tag-filter.liquid`
- `blocks/button-view-details.liquid`
- `blocks/button.liquid`
- `blocks/buttons.liquid`
- `blocks/carousel.liquid`
- `blocks/cart-free-shipping.liquid`
- `blocks/cart-items.liquid`
- `blocks/cart-order-note.liquid`
- `blocks/cart-shipping-estimator.liquid`
- `blocks/collection-background-item.liquid`
- `blocks/collection-card-button.liquid`
- `blocks/collection-card-description.liquid`
- `blocks/collection-card-title.liquid`
- `blocks/collection-card.liquid`
- `blocks/collection-list-items.liquid`
- `blocks/collection-promo.liquid`
- `blocks/collection-tab.liquid`
- `blocks/collection-thumbnail.liquid`
- `blocks/collections-with-tabs-item.liquid`
- `blocks/columns.liquid`
- `blocks/comments.liquid`
- `blocks/comparison-table-column.liquid`
- `blocks/comparison-table-row-value.liquid`
- `blocks/comparison-table-row.liquid`
- `blocks/comparison-table.liquid`
- `blocks/contact-field.liquid`
- `blocks/contact-form.liquid`
- `blocks/content.liquid`
- `blocks/countdown-timer.liquid`
- `blocks/discount-code.liquid`
- `blocks/divider.liquid`
- `blocks/editorial-text.liquid`
- `blocks/email-signup.liquid`
- `blocks/eyebrow.liquid`
- `blocks/faq_accordion.liquid`
- `blocks/faq_answer_text.liquid`
- `blocks/faq_item.liquid`
- `blocks/featured-image.liquid`
- `blocks/featured-post.liquid`
- `blocks/first-card.liquid`
- `blocks/gallery-hotspot.liquid`
- `blocks/gallery-image.liquid`
- `blocks/gallery-item.liquid`
- `blocks/gallery-strip-feature-item.liquid`
- `blocks/gallery-strip-item.liquid`
- `blocks/gallery-strip-overlay-group.liquid`
- `blocks/group.liquid`
- `blocks/header.liquid`
- `blocks/heading.liquid`
- `blocks/hotspot.liquid`
- `blocks/icon.liquid`
- `blocks/image-card.liquid`
- `blocks/image-comparison.liquid`
- `blocks/image-text-card-grid-item.liquid`
- `blocks/image-text-stacked-band.liquid`
- `blocks/image.liquid`
- `blocks/images.liquid`
- `blocks/localization.liquid`
- `blocks/logo.liquid`
- `blocks/marquee.liquid`
- `blocks/menu.liquid`
- `blocks/pagination.liquid`
- `blocks/parallax-item.liquid`
- `blocks/payment-icons.liquid`
- `blocks/policy-links.liquid`
- `blocks/popup.liquid`
- `blocks/press-item.liquid`
- `blocks/press-quotes.liquid`
- `blocks/previous-and-next-posts.liquid`
- `blocks/product-accordion.liquid`
- `blocks/product-badges.liquid`
- `blocks/product-buy-accelerated-checkout.liquid`
- `blocks/product-buy-add-to-cart.liquid`
- `blocks/product-buy-buttons.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-callout-gallery.liquid`
- `blocks/product-callout.liquid`
- `blocks/product-card-compact.liquid`
- `blocks/product-card.liquid`
- `blocks/product-description.liquid`
- `blocks/product-inventory.liquid`
- `blocks/product-list-banner.liquid`
- `blocks/product-list.liquid`
- `blocks/product-pickup-availability.liquid`
- `blocks/product-price.liquid`
- `blocks/product-recommendations.liquid`
- `blocks/product-sticky-add-to-cart.liquid`
- `blocks/product-title.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/promo-card-custom.liquid`
- `blocks/promo-card.liquid`
- `blocks/row.liquid`
- `blocks/scroll-to.liquid`
- `blocks/scrolling-card.liquid`
- `blocks/shop-the-look-product.liquid`
- `blocks/shop-the-look-products.liquid`
- `blocks/slide.liquid`
- `blocks/slide_split.liquid`
- `blocks/slideshow-slide.liquid`
- `blocks/social-links.liquid`
- `blocks/spacer.liquid`
- `blocks/tab-layout.liquid`
- `blocks/tabs-view-all-button.liquid`
- `blocks/tags-and-sharing.liquid`
- `blocks/testimonial-item.liquid`
- `blocks/text.liquid`
- `blocks/timeline-list.liquid`
- `blocks/timeline-slide.liquid`
- `blocks/video.liquid`
- `blocks/view-all-button.liquid`
- `sections/404.liquid`
- `sections/announcement-bar.liquid`
- `sections/article.liquid`
- `sections/blog-posts.liquid`
- `sections/breadcrumbs.liquid`
- `sections/bundle-builder.liquid`
- `sections/cart-drawer.liquid`
- `sections/cart.liquid`
- `sections/collection-banner.liquid`
- `sections/collection-page-breadcrumb.liquid`
- `sections/collection-tabs.liquid`
- `sections/collection.liquid`
- `sections/collections-with-background.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/comparison-table-custom.liquid`
- `sections/countdown.liquid`
- `sections/email-signup-form.liquid`
- `sections/faq-image-accordion.liquid`
- `sections/featured-blog-posts.liquid`
- `sections/featured-collection-banner.liquid`
- `sections/featured-collection-horizontal.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/footer.liquid`
- `sections/gallery-custom.liquid`
- `sections/header.liquid`
- `sections/hello-world.liquid`
- `sections/hero.liquid`
- `sections/hotspot-full-width-carousel.liquid`
- `sections/hotspot-gallery.liquid`
- `sections/hotspot.liquid`
- `sections/image-comparison-custom.liquid`
- `sections/image-text-split-layout.liquid`
- `sections/image-text-stacked-bands.liquid`
- `sections/parallax.liquid`
- `sections/password.liquid`
- `sections/press.liquid`
- `sections/product-information.liquid`
- `sections/product.liquid`
- `sections/quick-add.liquid`
- `sections/quick-view.liquid`
- `sections/recently-viewed-card.liquid`
- `sections/related-posts.liquid`
- `sections/search-overlay.liquid`
- `sections/search.liquid`
- `sections/shop-the-look-section.liquid`
- `sections/slideshow.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/video-product-carousel-custom.liquid`
- `snippets/accordion-details.liquid`
- `snippets/badge.liquid`
- `snippets/block-animation-attributes.liquid`
- `snippets/carousel-navigation-icon.liquid`
- `snippets/cart-surface-style.liquid`
- `snippets/collection-card-render.liquid`
- `snippets/collection-column-icon.liquid`
- `snippets/comparison-table-column-content.liquid`
- `snippets/comparison-table-column-shell.liquid`
- `snippets/comparison-table-row-content.liquid`
- `snippets/comparison-table-row-value-content.liquid`
- `snippets/comparison-table-value.liquid`
- `snippets/component-overlay.liquid`
- `snippets/deferred-stylesheet.liquid`
- `snippets/form-field.liquid`
- `snippets/gallery-strip-item-styles.liquid`
- `snippets/header-figma-icon.liquid`
- `snippets/heading-size-token.liquid`
- `snippets/hero-image.liquid`
- `snippets/hero-styles.liquid`
- `snippets/icon.liquid`
- `snippets/image-card-content.liquid`
- `snippets/image-comparison.liquid`
- `snippets/image-ratio-value.liquid`
- `snippets/image.liquid`
- `snippets/layout-flow-group-style.liquid`
- `snippets/layout-flow-style.liquid`
- `snippets/localization-overlay.liquid`
- `snippets/localization-styles.liquid`
- `snippets/marquee-letter-spacing.liquid`
- `snippets/media-background.liquid`
- `snippets/media-card.liquid`
- `snippets/overlay-background.liquid`
- `snippets/pagination-pages.liquid`
- `snippets/pickup-availability-stores.liquid`
- `snippets/price.liquid`
- `snippets/product-badges.liquid`
- `snippets/product-callout-hotspot.liquid`
- `snippets/product-callout-runtime.liquid`
- `snippets/product-card-image.liquid`
- `snippets/product-card-placeholder.liquid`
- `snippets/product-card-price.liquid`
- `snippets/product-card-quick-add-overlay.liquid`
- `snippets/product-card-quick-add.liquid`
- `snippets/product-card-quick-view.liquid`
- `snippets/product-card-swatches.liquid`
- `snippets/product-card-title.liquid`
- `snippets/product-card.liquid`
- `snippets/product-collection-grid.liquid`
- `snippets/product-hotspot.liquid`
- `snippets/product-inventory-status.liquid`
- `snippets/product-list-promo-items.liquid`
- `snippets/product-list-promo-styles.liquid`
- `snippets/product-media-lightbox.liquid`
- `snippets/product-media.liquid`
- `snippets/quantity-icon.liquid`
- `snippets/search-query-fields.liquid`
- `snippets/section-content-slot.liquid`
- `snippets/share-button.liquid`
- `snippets/shoppy-x-ray.liquid`
- `snippets/size-style.liquid`
- `snippets/slideshow-image.liquid`
- `snippets/social-icon.liquid`
- `snippets/social-links.liquid`
- `snippets/swatch-option.liquid`
- `snippets/swatch.liquid`
- `snippets/swiper-carousel.liquid`
- `snippets/swiper-navigation.liquid`
- `snippets/swiper-pagination.liquid`
- `snippets/tab-layout-styles.liquid`
- `snippets/testimonial-split-arrow.liquid`
- `snippets/theme-button.liquid`
- `snippets/tooltip.liquid`
- `snippets/variant-picker.liquid`
- `snippets/video.liquid`
- `snippets/view-all-button.liquid`
