# Hero preset — Virelle

Source desktop: [48049:2486](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48049-2486&m=dev), 1920 × 800. Source mobile: [48864:12395](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48864-12395&m=dev), 375 × 720.

Figma MCP design context and screenshot both denied edit access. Design evidence was read in the existing authenticated Chrome Figma Inspect tab, including canvas screenshots and the CSS inspection panel. No Figma writes or asset downloads were performed.

## Composition mapping

The existing `hero` section uses its single original `Hero` preset, category `t:general.banners`. The existing homepage `slideshow` ID remains a Hero; all other instances and template order are preserved.

| Design | Existing control | Configuration |
| --- | --- | --- |
| Full background, bottom-left copy | Hero classic, full width | Bottom-left on both devices; content width fill |
| No roll. No show. with square | Header → Eyebrow | Existing square icon, no eyebrow background |
| Move freely. Live fully. | Header → Heading | H1, display role; no forced line break; existing H1 tokens 68px / 40px |
| Eyebrow to heading | Header gap | Desktop 16px, mobile 12px, verified in Inspect |
| Content to CTA | Hero gap | Desktop 40px, mobile 24px, verified in Inspect |
| Shop the collection | Button primary | Uppercase label, no arrow; link remains empty |
| Bottom inset | Button outer bottom padding | Desktop 64px, mobile override 48px; Hero full/classic suppresses its page-content-padding settings |
| Background shading | Hero gradient overlay | Figma 270deg transparent-to-20% black gradient |
| Photo | Hero image pickers | Unselected: media work was not requested |

No global settings were changed. Existing page margins provide 48px desktop / 16px mobile versus Figma 50px / 16px. The desktop 2px mismatch remains; changing a global margin for this section alone would affect unrelated sections. The existing accent font is Instrument Sans versus the design's typography; no global font change was inferred from this Hero. Exact tracking, eyebrow/icon geometry, button dimensions and wrapping remain subject to rendered comparison.

## Height-option calibration (configuration, not customization)

Branch: `theme/virelle-theme`. Scope: fixed height mappings in `snippets/hero-styles.liquid`, used by the existing Hero section. No setting IDs, options, defaults, breakpoints, Adapt or Full screen behavior changed.

Desktop Medium: 720 → 800px, scale 800/720. Mobile Medium: 620 → 720px, scale 720/620. Values rounded to the nearest pixel; Medium is exact. The surface's default fixed-height fallback also changes from 720 to 800px.

| Option | Desktop old → new (px) | Mobile old → new (px) |
| --- | --- | --- |
| Extra small | 420 → 467 | 400 → 465 |
| Small | 560 → 622 | 480 → 557 |
| Medium | 720 → 800 | 620 → 720 |
| Large | 900 → 1000 | 760 → 883 |
| Extra large | 1080 → 1200 | 900 → 1045 |

Preset and homepage Hero both select Medium on desktop and mobile. These are minimum heights; long content can expand the surface. The shared scale also affects the existing `virelle_video_banner` Hero consumer: its unchanged Medium/Large selections resolve to 800px / 883px. Its copy, settings and block composition were not edited. Future Hero instances inherit this theme-specific scale. Review upstream height mappings during base updates and preserve/reconcile these calibrated values explicitly.

## Validation and limits

- Shopify Theme Check: 0 errors, 6 existing warnings (five ExcessiveSettingsCount and one LiquidComplexity in css-variables).
- Configuration validation passed: existing IDs, select options, ranges/steps, allowed blocks, unique Hero preset, unchanged schema outside presets, unchanged unrelated homepage sections and section order.
- Fixed scales remain strictly ascending; source media dimensions verified independently for both devices.
- `git diff --check` passed.
- The Shopify plugin's separate validator could not start because its bundled `@shopify/theme-check-common` dependency is missing; CLI Theme Check was used successfully.
- Storefront preview is unverified: local browser access is disabled in Work settings. The existing preview supervisor metadata points at this worktree and port 9300; no new preview process was started. Media cropping cannot be verified while pickers remain empty.
- No explicit theme push/publish, Theme Editor save, store content mutation, commit or Git push was performed.

All pre-existing worktree changes were retained. Before-edit copies of the three touched theme files were saved in `/tmp/virelle-hero-before` for comparison.

## Hero media setup — completed 2026-10-19

The owner subsequently requested images matching Figma. Figma MCP now returns full design context and screenshots for both source nodes. The original photo is the same 4096 × 2730 JPEG on both devices; it was downloaded from the asset URL returned by get_design_context. No screenshot was used as a runtime asset. Only the background framing was prepared; text, CTA and gradient remain separate theme content.

Store verified through the Shopify connector: `layouthub-template-v2.myshopify.com`. A pre-upload Files search for `virelle*` and the original image filename found the two existing logo files and no Hero image. Two new, genuinely encoded AVIF files were uploaded and read back as READY:

| Slot | Shopify file | Dimensions | Picker reference |
| --- | --- | --- | --- |
| Desktop | `gid://shopify/MediaImage/46714012533035` | 2400 × 1000 | `shopify://shop_images/virelle-hero-desktop.avif` |
| Mobile | `gid://shopify/MediaImage/46714012860715` | 750 × 1440 | `shopify://shop_images/virelle-hero-mobile.avif` |

Permanent URLs: [desktop](https://cdn.shopify.com/s/files/1/1024/2192/2091/files/virelle-hero-desktop.avif?v=1792385934), [mobile](https://cdn.shopify.com/s/files/1/1024/2192/2091/files/virelle-hero-mobile.avif?v=1792385946).

Framing uses the measured Figma image transforms. Desktop rendered source: 2067.0528 × 1376.688 at offset −73.528, −345 inside 1920 × 800. Mobile: 1498.8675 × 999 at offset −620.926, −225.563 inside 375 × 720. These translate to original-photo crop boxes `(145.7005, 684.1419, 3950.3058, 2270.5580)` and `(1696.8230, 616.4034, 2721.5967, 2583.9710)`. Separate crops preserve the intended framing with the existing `<picture>` implementation. At other aspect ratios the existing cover behavior still applies.

AVIF decoder verification passed locally. Desktop upload: 406821 bytes, SHA-256 `a4cb2ed60490e5c62c6010d667b146d557fd458d121f90c83da87ec9dcc913e6`; mobile: 250295 bytes, SHA-256 `db23ada424b49af8fe2805fb6a18cd4d90bc2c8525c7038cd5329e89d46f90dc`. Direct CDN downloads returned HTTP success, correct dimensions, and `image/jpeg` for the curl client despite the AVIF source names. The response was decoded as JPEG; AVIF delivery is not claimed for that client.

Updated local files: `sections/hero.liquid` preset settings, `templates/index.json` existing `slideshow` Hero settings, and the Hero entry in `docs/theme-init/virelle-store-setup.json`. Both pickers are populated with the read-back filenames; `media_type` is image. No theme configuration was saved through the connector or Theme Editor. No explicit theme push or publish was run.

Theme Check after binding: 0 errors, 6 existing warnings. Preset/instance references match; prepared crops were visually inspected against the Figma screenshots. Storefront geometry remains unverified because local browser use is disabled in Work settings. Scoped whitespace checks passed; the broad worktree check reports an unrelated trailing blank line in the concurrently modified `assets/critical.css`, which was left untouched.

## Wrap correction and rendered color QA — 2026-10-20

Browser preview is now available at `http://127.0.0.1:9300/`. Owner explicitly requested a fix and subsequently confirmed it must remain custom to Virelle. Added only `.hero__content .heading-block p { text-wrap: wrap; }` to this theme's `snippets/hero-styles.liquid`, with a corresponding customization table entry. Global paragraphs retain `pretty`; other sections and base/theme checkouts were not edited.

Rendered mobile Hero was checked at 375px content width (390px desktop browser viewport including its 15px scrollbar). DOM word rectangles confirm Move, freely. and Live share the first line, with fully. on the second. Hero height is 720px, content width 343px, left inset 16px, CTA height 44px and bottom inset 48px. The viewport-based fluid font resolves to 40.54px in this scrollbar-compensated desktop test, so this is not a claim about a device-emulated 375px viewport font size. Desktop content width 1920px keeps the heading on one line at 68px / 81.6px line height. No forced line break was added.

Computed colors on both viewports: heading and eyebrow #FFFFFF; primary CTA background/border #FFFFFF, label #111111; overlay transparent-to-black 20%, 270deg, stops 0.14% and 99.9%. No opacity or filter darkens the CTA. Figma design-context evidence obtained earlier specifies #1C1C1C for the primary label, so that slight label-color mismatch remains reported. The new Figma MCP read was denied edit access; no new color value was inferred from that failed call. Global scheme-3 label color was not changed as part of this scoped wrap fix.

Theme Check for the current working tree: 0 errors, 7 warnings. Scoped whitespace check passed. Screenshots are under `output/hero-wrap-colors-2026-10-20/`. No commit, explicit push, publish or Theme Editor save was performed.

## Section-owned padding — 2026-10-20

Owner requested applying build-preset again and moving spacing from the Button to the section. This supersedes the earlier Button-padding mapping above. Homepage image Hero (`slideshow`) now uses section `padding_top`/`padding_bottom` = 64/64px and mobile = 48/48px. Button bottom padding is 0 on both devices, with its mobile padding override disabled.

The currently registered `Hero` Add section preset was changed independently to the video composition before this request; its Button has no padding workaround. That video composition and its settings were preserved. Only the requested homepage image instance's composition settings were changed.

The existing Hero grid adds section padding outside its fixed grid track. Using the height-option calibration exception in build-preset, full-width classic Heroes with an actual picture receive their own fixed scale in `snippets/hero-styles.liquid`. This is a calibration, not a new height setting or custom layout behavior. Adapt/Full screen, option IDs, defaults and breakpoints remain unchanged. Existing generic/video/placeholder mappings remain unchanged. The scope uses existing width/layout classes and the picture rendered by the image setting, without template IDs.

Desktop image Medium track is 672px, plus 64px top and 64px bottom = 800px total. Mobile Medium track is 624px, plus 48px top and 48px bottom = 720px total. Fixed tracks were scaled from the prior desktop image scale by 672/800 and mobile by 624/720, rounded to pixels:

| Option | Desktop track old → new (px) | Mobile track old → new (px) |
| --- | --- | --- |
| Extra small | 467 → 392 | 465 → 403 |
| Small | 622 → 522 | 557 → 483 |
| Medium | 800 → 672 | 720 → 624 |
| Large | 1000 → 840 | 883 → 765 |
| Extra large | 1200 → 1008 | 1045 → 906 |

Rendered QA at 1920px and 375px content widths confirms unchanged coordinates relative to the Hero: desktop eyebrow y=521.406, heading y=558.406, CTA y=680/h=56; mobile eyebrow y=473.688, heading y=506.688, CTA y=628/h=44. CTA bottom insets remain 64/48px. Both Button wrappers now measure exactly their visible button height, without bottom padding. The existing video Hero remains 800px desktop / 720px mobile. The previous Virelle-only heading-wrap custom remains intact.

No global settings, schema definitions, media references, video composition, store content or Theme Editor configuration were changed. Preserve the image-track calibration separately from the wrap customization when reviewing base updates. Screenshots and geometry evidence: `output/hero-section-padding-2026-10-20/`.
