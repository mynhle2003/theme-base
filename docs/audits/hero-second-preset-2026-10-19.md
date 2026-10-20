# Second homepage Hero preset — Virelle, 2026-10-19

Sources: [desktop 48020:668](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48020-668), 1920 × 800; [mobile 48096:20368](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-20368), 375 × 720. Full Figma design context, screenshots and frame metadata were available.

Scope: `templates/index.json` → existing second Hero `virelle_video_banner`, and the single original `Hero` preset in `sections/hero.liquid`, category `t:general.banners`. The first homepage Hero, all unrelated sections and template order remain unchanged. Preset now represents the currently requested second Hero composition; no duplicate preset was added. No Liquid implementation, schema controls, CSS, JS or global settings changed.

| Design | Existing configuration |
| --- | --- |
| Full video background | Hero classic/full, media_type video; existing empty video pickers retained |
| Desktop content centered vertically, left aligned; mobile centered | desktop_position center_left; mobile_position center_center; content_width fill |
| No Roll. No Show. with square | Header → Eyebrow, show_icon true, icon square, no background |
| Move Freely, Live Fully | Header → Heading, display/H1, fill width; existing global 68px desktop / 40px mobile |
| Eyebrow to heading | Header gap 16px both viewports |
| Heading group to CTA | Hero gap 40px desktop / 32px mobile |
| Shop the collection | Primary button, no icon, fit width; destination empty because none was supplied |
| 800px / 720px surface | Medium desktop/mobile, reuses existing Hero calibration without changing mappings |
| White content / white CTA | Existing scheme-3 |

No media processing was requested. No asset download, upload, video selection or substitute photograph was performed. The runtime shows the native placeholder. Solid overlay uses the existing default; the Figma design context did not provide video/overlay metadata sufficient to establish exact opacity.

## Verification

- Local preview read at `http://127.0.0.1:9300` using the already running development preview. No new watcher, explicit push, publish, Theme Editor save, commit or Git push was run. The existing watcher reflected the local file edits.
- Shopify development theme readback: layouthub-template-v2.myshopify.com, theme 192119800107, role development. CLI Theme Check: **0 errors, 7 warnings** in unrelated files (five ExcessiveSettingsCount, LiquidComplexity in countdown-timer and css-variables).
- Structural validation passed: declared setting IDs, select values, range limits/steps, parent allow-lists, nested block orders, unique original preset, matching preset/instance settings and composition. Schema outside presets and Liquid before schema match before-edit copies. All other template instances and section order match before-edit copies.
- Scoped `git diff --check` passed.
- Desktop browser override 1920px gives a 1905px content area due to the 15px scrollbar. Hero surface measured 800px high; content gap 40px; heading Roboto Condensed 700, 68px/81.6px; eyebrow Roboto Condensed 500, 14px/21px. Content vertically centered within the surface.
- Mobile tested at 375px override (360px content area), then 390px override to compare the exact **375px content area** with Figma: Hero surface 375 × 720, content 343px wide at x=16, group height 209px centered vertically, gap 32px, heading 40px/48px over two lines, primary CTA 44px high. No overflow inside the Hero observed. Temporary browser viewport override reset after checks.
- Evidence: `output/hero-second/desktop.png`, `output/hero-second/mobile.png`. Desktop screenshot shows only part of the surface because of scroll position; DOM measurement confirms the full surface height.

## Remaining visible gaps (unimplemented under build-preset scope)

- Desktop content starts at the existing global 50px margin instead of the Figma 160px inset. Full/classic Hero suppresses page_content_padding; there is no independent desktop content-container max-width setting capable of the 1600px Figma container. Changing global margins or implementation for this single instance was not inferred.
- Eyebrow square is the existing outline icon rather than Figma's filled 8px square. Existing gap is 7px versus Figma 8px. No local controls express those details, and Figma returned no exported square SVG for an existing-icon replacement.
- At an exact 343px content width, the mobile heading wraps as “MOVE FREELY,” / “LIVE FULLY”; Figma wraps as “MOVE FREELY, LIVE” / “FULLY”. Existing heading tracking measures −1.28px versus Figma −1.2px. No global typography changes were inferred from this section; exact glyph/wrapping parity remains unresolved.
- Mobile CTA measures about 199px wide versus roughly 194px in Figma. Button height matches 44px; font/spacing comes from existing global button controls. No global change was inferred solely to correct this CTA.
- The display role maps to H1 to obtain the existing responsive H1 scale, so this second Hero adds another H1 on a homepage already containing H1 headings. The current block has no independent responsive H1 scale for an H2 tag.
- Background video, cropping and overlay fidelity cannot be verified while video pickers remain empty. CTA destination remains unselected.

Before-edit copies: `/tmp/virelle-hero-second-before/`. Existing unrelated worktree changes retained.

## Video setup completed — 2026-10-19

The owner subsequently requested setup/upload of the background video using store-content-media. Both Figma nodes expose the same original video, `Sequence 01_1_1_chf3_iris3.mp4`, through the supported download button. Source validated as 1920 × 800 H.264/AAC MP4, 60fps, 12.544 seconds, 17,592,298 bytes; first/middle/final frames inspected. Full original preserved in ignored `.shopify/media/hero-second/figma-source.mp4`.

No matching video existed in Shopify Files. Uploaded one file to `layouthub-template-v2.myshopify.com`: `gid://shopify/Video/46715052851499`, filename `virelle-hero-move-freely.mp4`. Readback confirmed fileStatus/status READY, duration 12,540ms, original 1920 × 800, generated MP4/HLS sources, no file/media errors. Original CDN URL: https://cdn.shopify.com/videos/c/o/v/e4b30045cc424d6b9e502d1570ecc02b.mp4.

Bound verified `shopify://files/videos/virelle-hero-move-freely.mp4` into the existing Hero preset and second homepage instance. Mobile uses the same source through existing fallback. Figma Properties also confirmed black 20% overlay on both frames; local preset/instance overlay now uses `#00000033`. No other composition was changed by this media step.

The existing development watcher reflected local settings. Liquid resolved the video reference successfully. Mobile content width 375px: readyState 4, paused false, time advanced from 0.447929 to 9.27694, muted/loop true, cover geometry, visible video frames confirmed. Evidence: `output/hero-second/video-mobile.png`. Desktop source loaded with readyState 4 and intrinsic 1728 × 720; sustained desktop playback was not verified because responsive resizing/scrolling moved the Hero outside the viewport. Native runtime pauses offscreen video. No implementation changes were made.

Theme Check: 0 errors, 7 unrelated warnings. JSON/preset reference checks and scoped whitespace checks passed; unrelated template instances/order retained. No explicit theme push, publish, Theme Editor save, commit or Git push. The earlier empty-media/unknown-overlay notes above describe the pre-setup state and are superseded by this entry. Remaining layout/icon/typography gaps are unchanged. Full receipt: `docs/audits/hero-second-video-2026-10-19.json`.
