# Email signup form — Virelle

Design references: [desktop 48002:2605](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48002-2605), [mobile 48096:26212](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-26212). Both design contexts and screenshots inspected. Requested build-preset workflow applied.

## Configuration

Updated the existing single `t:general.email_signup_form` preset in `sections/email-signup-form.liquid` and homepage instance `virelle_newsletter` in `templates/index.json`. Retained original name/category (`t:general.forms`), static Header and Email signup blocks, schema definitions, implementation, homepage section order and unrelated configuration.

- Section: centered, horizontal composition, scheme-1; padding 96px desktop / 48px mobile; header-to-form gap 48px / 32px.
- Header: custom maximum width 770px (nearest range step to 768px), fill mobile; gap 8px; existing square eyebrow enabled, GET LATEST DEALS; H2/XL heading JOIN OUR NEWSLETTER.
- Description: Sign up today and get special product releases and exclusive sales! Body md; 4px top padding adds to Header gap for the reference 12px heading-to-description spacing.
- Email signup: Your email, Subscribe, primary, no icon or subscription preferences; 12px field gap; maximum width 580px (nearest available step to 576px); horizontal desktop, vertical mobile; existing large field-height option.

No global settings, media, CSS, JS, Liquid implementation or other schema content changed. Design has no image assets. No setup-store work required.

## Verification and gaps

Previewed existing development server at 127.0.0.1:9300 using 1920×1000 and 375×850 viewport overrides, then reset override. Captures: `output/email-signup/desktop.png`, `output/email-signup/mobile.png`. Measured desktop Header width 770px; form width 580px, field/button height 56px, field gap 12px and header/form gap 48px. Mobile form input and button stack, gap 12px; no component overflow observed. Browser's 15px scrollbar leaves 328px content inside 16px margins instead of Figma's 343px.

Remaining preset-only differences, unimplemented:

- Mobile button remains content width (~120px) and centered, while Figma requires full width. Existing horizontal-plus-vertical-on-mobile behavior has no button-width control. Desktop needs horizontal layout, so the globally vertical variant is unsuitable.
- Large field-height option produces 56px desktop / 48px mobile versus Figma 56px / 44px. Medium gives 48px / 44px. Kept desktop match; shared block height mapping was preserved because it also affects footer and other consumers.
- H2 global scale is 48px desktop / 30px mobile versus Figma 50px / 30px. Other sections share this token; no global change based on this single section. Heading tracking and some body/button weight/tracking differ.
- Input resolves to 16px rather than Figma 14px; existing runtime does not expose a local input-font control. Input border is lighter than Figma #ccc.
- Existing eyebrow square is outlined and uses an em-sized wrapper/7px gap, versus Figma's filled 8px square/8px gap. No local controls expose those details.
- Max widths round to 770px and 580px rather than 768px and 576px due existing range steps.

Schema/range/option/nested allow-list checks passed. Verified unchanged implementation and schema outside presets, unchanged unrelated homepage sections and section order. Scoped diff whitespace check passed. Shopify Theme Check: 0 errors, 7 warnings in existing out-of-scope files (five ExcessiveSettingsCount, two LiquidComplexity). Bundled Shopify skill documentation search failed to fetch; its validator could not start because @shopify/theme-check-common is missing. CLI Theme Check and explicit configuration checks completed instead.

Did not submit a newsletter, save Theme Editor configuration, explicitly push/publish a theme, commit or Git push. Existing preview process automatically reflects local files. Theme Editor add/duplicate/save lifecycle was not exercised.

## Eyebrow consistency follow-up

User requested matching other homepage sections. Newsletter preset and homepage now reuse the exact light-surface composition from Featured collection banner: horizontal Group, fit width/height, 8px desktop/mobile gap, centered cross-axis; Custom SVG Icon with filled #181818 8×8 square and zero padding; existing Eyebrow text with built-in icon disabled. This supersedes the outlined-square/7px-gap issue above. All implementation and other configuration remain unchanged. Setting IDs/options/ranges and nested block allow-lists passed; Theme Check has 0 errors. Fresh browser verification could not run because local browser use is disabled in Work settings; prior screenshots predate this follow-up.
