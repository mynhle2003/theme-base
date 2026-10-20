# Countdown preset — Virelle

References: [desktop 48089:778](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48089-778), [mobile 48096:26088](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-26088). Both high-fidelity design contexts and screenshots were available. Desktop reference is 1920px wide; mobile is 375px wide.

## Changes

Only `sections/countdown.liquid` presets and the existing `templates/index.json` instance `virelle_flash_sale` were changed. The single Add section preset is named `Countdown`, as requested, replacing the inherited `Count down (Custom)` label. Original content category and placement guards remain. Template section order and unrelated sections are preserved. No global settings, implementation, styles, scripts, locale files, or schema definitions were edited by this task.

| Design region | Existing composition/settings |
| --- | --- |
| Dark surface and spacing | Countdown, page width, scheme-3, padding 96px desktop / 48px mobile |
| Equal desktop columns, stacked mobile | Columns with two `_columns-column` children; desktop gap 0; mobile vertical gap 40px; swipe off |
| Copy at top, timer at bottom | Fill-height Group, vertical, space-between, minimum gap 32px; left desktop / center mobile |
| Intro and CTA | Group gap 40px desktop / 32px mobile |
| Intro text | Group gap 16px / 12px; max width 690px (nearest existing range step to 688px) |
| Eyebrow and heading | Header gap 20px / 8px; Ends Tonight, existing square icon; Flash Sale, display heading |
| CTA | Existing primary Button, SHOP SALE; URL unset |
| Timer | Countdown timer, with labels, transparent background, display-size numbers, small labels |
| Image | Existing Image block; custom ratio 7:6 on both viewports; picker unset |

The heading uses `html_tag: h1` because the current Heading kernel remaps display size according to the semantic tag. This produces the Figma H1 scale of 68px desktop / 40px mobile; an h2 would resolve to 48px / 30px. This introduces another H1 after the homepage Hero. Independent H2 semantics with the responsive H1 scale would require implementation work.

Timer duration is illustrative: recurring 12 hours 18 minutes using the existing runtime. It advances and persists across reload. No actual campaign deadline was supplied; Ends Tonight is design copy, not a configured fixed midnight deadline. Set the intended campaign schedule before use. CTA has no destination until configured.

## Rendered checks and remaining gaps

Previewed the running worktree at `http://127.0.0.1:9300/` using browser viewport widths 1920 and 375. Both show correct copy, CTA, ticking timer, desktop side-by-side columns and mobile content → timer → image ordering. Temporary viewport override was reset. Desktop heading and timer numbers resolve to 68px; mobile resolves to 40px. Image placeholder keeps 7:6 ratio. No media was downloaded or uploaded: build-preset explicitly leaves media selectors unset unless media work is requested. Photo content, crop and focal point therefore remain unverified.

- Figma numbers are outlined with colon separators and labels Days / Hrs / Mins / Secs. Existing timer uses solid numbers, no separators, padded units, uppercase labels DAYS / HOURS / MIN / SEC, and reduced label opacity. No controls expose these differences; custom follow-up is unimplemented.
- Figma desktop content width is 1600px, with 800px columns. Existing page-width includes its 48px side padding, leaving 1504px content and 752px columns. The measured image placeholder is approximately 752 × 644.6px instead of 800 × 685.7px. Global container settings were preserved to avoid affecting other sections.
- At the 375px browser viewport, the desktop browser reserves 15px for its scrollbar, leaving 328px inside the 16px side margins instead of the Figma 343px. This is a browser-emulation limitation; scrollbar-free mobile hardware was not tested.
- Eyebrow uses the existing outlined square and current accent font/tracking instead of Figma's filled 8px square and Roboto Condensed Medium. Body weight/tracking, button typography and 45px mobile button height differ from the 44px reference. Shared global styles were preserved.
- Heading tracking is the current theme token (-1.28px), compared with Figma -1.2px. Existing Header alignment, intro gaps and responsive size controls were used without custom CSS.
- Add section registration and nested allow-lists were validated from schema. Interactive Theme Editor add/duplicate/save/reload testing was not performed.

## Validation

- Shopify Theme Check: 0 errors, 6 existing warnings (five ExcessiveSettingsCount, one LiquidComplexity).
- Configuration checks passed: all setting IDs, options, range bounds/steps, nested block allow-lists; unchanged unrelated template sections and order; unchanged schema outside presets and implementation before schema.
- Scoped `git diff --check -- sections/countdown.liquid templates/index.json` passed. Whole-worktree check detects a concurrent/out-of-scope blank line at EOF in `assets/critical.css`; that file was not edited here.
- Shopify plugin validator could not start: bundled `@shopify/theme-check-common` dependency missing. CLI Theme Check and explicit configuration validation were used.
- Before-edit copies: `/tmp/virelle-countdown-before`. Preview captures: `/tmp/virelle-countdown-desktop.png`, `/tmp/virelle-countdown-mobile.png`.
- No explicit theme push/publish, Theme Editor save, store media mutation, commit or Git push was performed. Existing preview supervisor was reused.

## Media follow-up — 2026-10-19

The owner subsequently requested image upload using setup-store. Downloaded the original Figma photo for `48089:810` / `48096:26113` and prepared a 7:6 AVIF crop, 1638 × 1404px, source box (0, 108, 1638, 1512). Uploaded one file to `layouthub-template-v2.myshopify.com`: `gid://shopify/MediaImage/46714376061227`, read back READY. Add section preset and existing homepage instance now reference `shopify://shop_images/virelle-countdown-flash-sale.avif`. Earlier empty-media statements above describe the original preset-only delivery and are superseded by this follow-up.

Receipt: `docs/audits/countdown-media-2026-10-19.json`. Source AVIF was decoder-verified. Shopify CDN negotiates its output: the default download decoded as JPEG; the AVIF Accept request decoded as WEBP. Both are 1638 × 1404px. The AVIF filename alone does not guarantee the response format.

Theme Check: 0 errors, 6 existing warnings. JSON readback confirms the identical picker reference in preset and homepage, preserving the responsive 7:6 ratio. Fresh visual comparison is unavailable because browser use is disabled in Work settings. The existing port-9300 preview also returns Failed to Upload Theme Files due an out-of-scope `sections/collection-list.liquid` preset using a static block ID without `static: true`; no collection-list edits were made by this task. No explicit theme push/publish or Theme Editor save was performed.

## Custom timer follow-up — 2026-10-19

The owner separately authorized implementation of colon separators and an Outline text checkbox. The earlier preset-only gap for solid digits and missing colons is superseded: the Countdown preset and homepage now use `with_labels_colon` with `outline_text: true`. See the theme customization record for ownership, preserved defaults, accessibility fallback, tests and base merge rules. Remaining label/crop/layout gaps are not claimed resolved by this change.
