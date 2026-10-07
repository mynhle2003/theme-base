<!-- theme-base-sync-state: {"sha":"d887dac2d2f637e2aae15f59272634f8fd3d1e32"} -->
# Customization record: elara-theme

Theme branch: `theme/elara-theme`
Personal base at creation: `d887dac2d2f637e2aae15f59272634f8fd3d1e32`
Theme update source: this repository's `main` branch

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `assets/critical.css` | Shared selected swatches have a body-color outer border and fixed inner inset; inactive swatches have a muted border. | Match Figma nodes `52164:10240` and `52020:28836`: card selection border follows the actual swatch color; product/overlay selection uses the heading token. Inner background frame targets the 4px design inset but shrinks with rendered height to keep flat ratios visible. Inactive color swatches have no visible frame. Width, ratio, radius, gap and border/underline choice remain settings-driven, including local picker overrides. | Match card and featured product/quick view/quick add without freezing merchant options. | Preserve native/fallback color ownership and settings cascade; review upstream changes to shared swatch selection and container sizing before merging. |
| `snippets/css-variables.liquid` | H1–H4 letter-spacing is hard-coded to -1.28/-0.8/-0.64/-0.48px; H5/H6 use zero; H2 normal line-height becomes 130% on tablet. | All heading roles consume the existing shared `type_letter_spacing` option; H2 tablet inherits its selected line-height without an override. Current normal spacing is 0px and H2 normal is 120% at every breakpoint. | Match Malandra typography node `43415:6890` and make existing settings control their output, as requested on 2026-10-06. | Review overlapping upstream typography token changes; preserve the existing setting IDs and shared setting behavior. Reconcile changed line-height/spacing semantics with the owner before merging. |
| `sections/slideshow.liquid` | Fixed desktop heights: 420, 560, 640, 900, 1080px. Fixed mobile heights: 320, 440, 560, 680, 820px. Progress segments stretch across the content inset, with 4px gaps and 2–3px tracks. | Medium is 800px desktop and 600px mobile; fixed height options scale proportionally. Progress pagination uses 50 × 4px tracks, 16px gaps and a 40px bottom inset at both viewports, with 44px button hit areas. Adapt and Full screen retain their existing behavior. | Match the supplied Figma slideshow heights and progress pagination, as authorized on 2026-10-06. | Review overlapping upstream slideshow implementation changes before merging. Preserve the calibrated height scale and local progress geometry; keep shared carousel styles unchanged. Reconcile any changed height or pagination semantics with the owner. |
| `snippets/product-card.liquid` | Swatches render above or below details; manual badges are not passed to the badge renderer. | Accepts an optional `inline` swatch position and opts into the existing configurable manual badge rules. | Match right-side swatches and the Round Topaz Best Seller badge. | Preserve existing variant image/price selection and quick-add behavior; reconcile overlapping markup changes before merging. |
| `assets/critical.css` | Product details and swatches occupy separate rows; price uses the shared size and smaller faded compare-at value. | Inline cards use a two-column information row. Product-card price reads desktop/mobile size tokens; compare-at uses the same size and full opacity. Titles read a weight token; inline titles have 1.5 line-height. | Match Figma's 16px medium titles, 14px prices, and compact swatches. | Scope changes to product cards; retain inherited money colors, shared prices elsewhere, focus and variant states. |
| `snippets/css-variables.liquid` | Product-card typography exposes only title size; swatch position normalizes to top/bottom. | Adds title weight, desktop/mobile price-size tokens and supports the optional inline position, in addition to the earlier typography customization above. | Ensure new Theme Editor settings control rendered values. | Preserve both the earlier heading-token customization and this card-token mapping when reconciling upstream changes. |
| `snippets/swatch.liquid` | Gold/Silver fallback colors are fixed; native Shopify swatch colors take precedence. | Configurable fallback Gold/Silver colors, selected as #dabe79/#e6e6e6 for this theme. Native data continues to take precedence. | Match Figma colors while retaining the existing Color option fallback contract. | Preserve native priority; settings affect only exact Gold/Silver names, not other shared color aliases. |
| `blocks/collection-card-title.liquid` | Displays the full resource title. | Optional exact end suffix can be hidden in the displayed heading; selected value is ` - Elara`. Resource title and URL remain intact. | Category cards display Earrings/Bracelets/Necklaces/Rings as in Figma while Admin names retain the required suffix. | Keep suffix hiding opt-in and exact; preserve count and heading semantics. |
| `snippets/collection-card-render.liquid` | Supports standard ratios and custom ratio in 0.1 increments. | Adds explicit `portrait_6_7` ratio for category cards. | Match Figma's 600:700 category images precisely. Product cards keep the existing 4:5 portrait setting. | Keep all existing ratio values and bounds; preserve the added ratio when merging media logic. |
| `blocks/gallery-item.liquid` | Square social image with profile footer. | Optional product picker replaces the footer with a linked 70px thumbnail, shared title/price and an accessible cart form; optional 5:7 media ratio. Empty product preserves the social footer. | Compose the four inspiration cards using the existing Gallery Carousel and Carousel runtime. | Preserve social mode and carousel/editor ownership; product prices and cart routes must remain Shopify-derived. |
| `blocks/product-list.liquid` | Applies the translation filter to an actual collection title. | Uses the collection title verbatim; translates only the empty fallback label. | Prevent missing-translation carousel labels after attaching Elara collections. | Keep resource titles separate from translation keys when merging. |
| `snippets/product-collection-grid.liquid` | Translates a supplied carousel label a second time. | Preserves the supplied accessible name and translates only an absent label. | Correct shared carousel accessibility names for real product collections. | Preserve caller ownership of accessible labels and the localized empty fallback. |
| `blocks/product-price.liquid` | Price size uses fixed body roles and inherits shared weight. | Optional custom size 10–48px and weight override; Popular item selects 22px/500. | Match Figma detail price without changing prices on other surfaces. | Preserve existing role values, money formatting and variant price templates. |
| `blocks/_product-media.liquid` | Main product media uses its natural image ratio. | Optional square main-image setting emits a scoped data attribute; thumbnails and video retain existing behavior. | Match the square Popular item media shown in Figma. | Preserve gallery state, variant filtering and editor/runtime bindings. |
| `assets/product-media.css` | Product media has natural height. | Image-only square cropping when the owning block opts in. | Match Figma while retaining original source AVIF assets. | Keep rules scoped to the block data attribute and image media; do not crop video/model media. |

| `blocks/product-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/blog-list.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/carousel.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `blocks/product-callout-gallery.liquid` | Desktop preview control/render path without an independent mobile preview. | Add/forward an independent mobile preview checkbox, default false, through the existing Swiper viewport. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `assets/carousel-block.js` | Separate carousel owners use integer mobile columns; Collection list alone supports 1.2 mobile slides. | Share Collection list mobile sizing: preview on + one mobile column gives 1.2 slides; two columns remain two. Desktop uses its own breakpoint configuration. Mobile preview uses slide transition. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |
| `snippets/product-collection-grid.liquid` | Only forwards desktop preview to shared Swiper. | Forward optional mobile preview from Product list without changing grid rendering. | User requested consistent mobile next-slide preview on Elara, 2026-10-07. | Review overlapping upstream carousel/schema changes before merging; preserve independent flags, 768px breakpoint, 1.2 sizing, existing loops, editor lifecycle and prior custom behavior in this file. |

## Figma catalog and card composition — 2026-10-07

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
