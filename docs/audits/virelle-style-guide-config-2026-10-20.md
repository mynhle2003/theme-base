# Virelle Style Guide configuration — 20/10/2026

Status: **requested control upgrade/configuration implemented; local validation passed**. Storefront/font CDN readback remains unverified.

Sources supplied by the user: Style Guide `43001:11865`, Eyebrow `48002:1864`, Product card `48002:1881`, file `yTXlAfT0miBGgRuuYM4OMp`.

MCP design-context and Plugin API reads hit the View-seat quota. Read the actual Style Guide via native Chrome UI. Typo table selected at `43415:6890`; verified Heading 1 at `43001:11884`: Roboto Condensed Bold 700, uppercase, 120%, -1.2px. No Figma edits.

## Verified table

| Role | Desktop size px | Tablet size px | Mobile size px | Weight | Line height | Tracking px |
| --- | --- | --- | --- | --- | --- | --- |
| H1 | 68 | 54 | 40 | 700 | 120% | -1.2 |
| H2 | 50 | 32 | 30 | 700 | 120% | -0.6 |
| H3 | 28 | 26 | 22 | 700 | 130% | 0 |
| H4 | 18 | 18 | 18 | 700 | 140% | 0 |
| H5 | 14 | 14 | 14 | 700 | 150% | 0 |
| Body/16 | 16 | 16 | 16 | 400 | 150% | 0.1 |
| Body/14 | 14 | 14 | 14 | 400 | 150% | 0.1 |
| Body/12 | 12 | 12 | 12 | 400 | 150% | 0 |
| Body/p3 | 14 | 14 | 14 | 500 | 150% | 2 |

Body/p3 in the table is evidence only; it does not replace reading the supplied Eyebrow frame for Accent family/style. Family/style/weight of Heading verified from actual H1 text, not from the table's annotation font.

## Changes applied with sufficient evidence

- `type_heading_2_size_desktop`: `48` → `50` (Figma Style Guide Typo table 43415:6890, direct UI read 2026-10-20).
- `type_heading_2_line_height`: `normal` → `tight` (Figma Style Guide Typo table 43415:6890, direct UI read 2026-10-20).
- `type_heading_4_size_desktop`: `24` → `18` (Figma Style Guide Typo table 43415:6890, direct UI read 2026-10-20).
- `type_heading_5_size_desktop`: `18` → `14` (Figma Style Guide Typo table 43415:6890, direct UI read 2026-10-20).
- `type_heading_6_size_desktop`: `16` → `12` (inferred from H5 minus 2px; other properties follow H5).
- `type_heading_6_case`: `original` → `uppercase` (inferred from H5 minus 2px; other properties follow H5).

Extra small has no H6 sample: inferred 12px from H5 14px minus 2px, other attributes follow H5. Lowered the existing H6 range min 14→12, retained max22/step1/default16; current and saved range values remain valid. Existing Body size16/leading1.5, H1/H3 sizes and other matching Heading choices were retained. At this initial stage saved presets, composition and scheme values were preserved; the later authorized control-key migration is recorded below.

## Additional source reads and applied configuration

All sources are in the user-supplied Virelle file. Native Figma Properties reads; no Figma writes.

| Source / role | Verified design | Configuration outcome |
| --- | --- | --- |
| Eyebrow 48002:1864, Tagline | Roboto Condensed500,14px,150%,2px,uppercase | Accent role already matches; tracking Mega loose now2px |
| Card 48002:1881, title | Roboto Condensed500,18px,150%,0px,Title case | Heading→Accent; leading Normal→Loose; case Original→Capitalize |
| Card price, Body/14 | Roboto400,14px,150%,0.1px; sale #D82727 | Font/size/sale color retained; inherits Body tracking0.1px |
| Body/16 in Typo table | 16px,400,150%,0.1px | Existing size/leading/font retained; Body alias binds shared Relaxed0.1px |
| Button 43253:1566 | Roboto500,14px,150%,-0.2px,uppercase; height56px, inline padding24px | Tight=-0.2px; existing size/case/geometry retained; weight now500 via independent control |
| Card Sale badge | Roboto500,12px,150%,2px,uppercase | Mega loose=2px, uppercase; weight now500 via independent control |
| Tertiary label/Line | Text21px, parent23px, fixed gap2px, line layout height0 | Underline enabled retained; existing offset5→3: CSS bottom1px pseudo leaves2px clear gap; inferred runtime mapping, needs preview |
| Color table 43436:113 | Border Generated200/300/200 | scheme1/2/3 border→#CCCCCC/#B3B3B3/#CCCCCC |

Mobile Button44px height/22px padding already has historical supplied mobile source48096:20121 in `virelle-global-settings-2026-10-19.json`; retained, not remeasured this run. Current card source does not prove a new mobile override.

### Shared tracking calibration

Existing eleven primitives only, ascending in px (Normal0em equals0px): Extra tight -2; Super tight -1.5; Ultra tight -1.2; Tighter -0.6; Tight -0.2; Normal0; Relaxed0.1; Loose0.4; Extra loose0.8; Ultra loose1.2; Mega loose2. Unused -2/-1.5/0.4/0.8/1.2 slots are inferred ordered fillers, not claimed Figma styles. No new token/enum/option. All typography groups use the same scale. The scale contains the Heading target values; the new per-level controls now assign them independently.

`--font-body-letter-spacing` now selects Relaxed0.1px: inherited by text and Price, including card/PDP/cart. Existing `.tracking-tight`/`.tracking-relaxed` and any other shared primitive consumers also receive calibrated values; local controls with independent literal tracking are unchanged. Saved preset JSON remains unchanged (its spacing settings are Normal0); global role/token calibration still affects its inherited Body tracking. Current section/block data and composition were not edited.

Generated palette read directly from Layouthub using Heading #181818: 50 #F2F2F2,100 #E6E6E6,200 #CCCCCC,300 #B3B3B3,500 #808080,600 #666666. Only Border has a matching evidenced field to change. Background/Heading/Text already match the table; Overlay/Bg Bar/Bg Component do not justify changing Shadow or other fields.

## Control upgrade implemented after user approval (20/10)

This supersedes the earlier keep-limits decision and pending H1/H2/weight/price-gap entries above.

| Area | Final behavior |
| --- | --- |
| Heading tracking | Six selects `type_heading_1_letter_spacing`…`type_heading_6_letter_spacing`, each in its existing Display→Extra small group, same11 enums/tokens. Current H1 Ultra tight=-1.2px, H2 Tighter=-0.6px, H3–H6 Normal0. Old `type_letter_spacing` schema/data removed. Generic/Custom aliases inherit Medium. |
| Saved presets | Copy old common tracking choice to each missing per-level key; remove old key. Button/Badge weight initialize to inherit. Other preset values unchanged. |
| Button/Badge weight | Independent selects `button_font_weight`/`badge_font_weight`, inherit / body +300…700; current500 each. Family/style still selected role. Body remains400, Accent remainsRoboto Condensed500, card title keepsAccent. Loader derives real font variant with font_modify/font_face and emits each face once. Unsupported weight falls back to picker role and is a match gap. |
| Heading tablet | Excluded from task by user. Existing desktop/mobile fluid implementation retained. |
| Compare-at | Existing rule font-size1em, opacity1; existing root/scheme token #808080. At card price14px compare-at is14px. Opaque target avoids the previous extra0.72 fade; alpha/visual output still awaits storefront readback. Shared card/PDP/cart behavior; existing bundle-local Body-color override retained. No commerce/data changes. |
| Price gap | User confirmed Figma token1 follows Tailwind default spacing:1=4px,2=8px. Existing shared token/fallback now4px; supersedes historical6px. |
| Hover | Existing scheme hover fields derived from normal palette, mix12% toward white for dark background and black for light background. Keep normal text if contrast≥4.5; otherwise choose readable dark/light palette text. Tertiary text mixed12% toward scheme background. Normal colors, scheme IDs and assignments unchanged. These are derived-hover colors, not Figma-measured states. |

### Hover readback

| Scheme | Primary bg / label | Secondary bg / label | Tertiary label | Contrast Primary / Secondary / Tertiary |
| --- | --- | --- | --- | --- |
| scheme-1 | #3A3A3A / #ffffff | #D0D0D0 / #111111 | #2E2E2E | 11.37 / 12.24 / 13.58 |
| scheme-2 | #2E2E2E / #ffffff | #BEBEBE / #111111 | #2C2C2C | 13.58 / 10.16 / 12.81 |
| scheme-3 | #E0E0E0 / #111111 | #2E2E2E / #ffffff | #E3E3E3 | 14.3 / 13.58 / 13.84 |

## Validation and remaining scope

53/53 tests pass:15 Theme Settings tests include independent Heading choices, weight control inheritance/override, unavailable variants, deduplicated faces, shared spacing, compare-at and contrast; remaining tests cover Overlay/cart. Theme Check:0 errors/7 existing warnings. Diff check passes. Data readback confirms saved presets only have the authorized key migration, all normal scheme colors unchanged, composition untouched. Tests simulate Shopify font filters; actual CDN font requests and storefront visual preview are not yet verified. Product cards layout/mobile and other normal-color source gaps remain outside this specific control upgrade.

Skills theme-style-guide/init-theme and common guide now document the authorized control migration, weights/font loading, Tailwind gap, skipping Heading tablet, compare-at exception and derived-hover contrast. Build-preset routes to the same rules. No commit, explicit push, publication or Theme Editor Save.

## H6 range minimum clarification

User clarified the fix is to lower the H6 range minimum to12 rather than raise current to14. Local `type_heading_6_size_desktop` range is min12/max22/step1/default16; current is restored to12 and saved preset remains16. Temporary current14 compatibility change is superseded. Shopify still reporting min14 indicates its schema needs syncing with the local schema alongside settings_data; no store upload performed.

### H6 dev upload readback

Confirmed the active dev path is Virelle and schema is not ignored. Re-saved the existing min12 schema before re-saving data12 so the dev watcher retries both assets. The dev process restarted during verification. Local preview127.0.0.1:9300 then returned HTTP200, title Layouthub template v2, with no Failed to Upload Theme Files page or H6 min14 error. Current H6 stays12px. This verifies the upload-error resolution, not full visual Figma matching. No explicit push or publish.

### Weight options refinement

Button/Badge weight now offers Default (selected font picker role), Body,300,400,500,600,700. Removed helper text from both controls and its unused locale entry. Body follows `--font-body-weight` while keeping the chosen family/style; the corresponding supported variant is loaded. Numeric current500 and presetinherit are unchanged. Unsupported variants keep the existing role fallback.

HTML tag helper text (`info.heading_html_tag`) now reads: “Use headings in order (H1 → H2 → H3) for better SEO and readability. If unsure, choose Paragraph.” Font weight helper text remains removed.

Final weight UI: Body/300/400/500/600/700 only; removed Default, schema/runtime defaultBody, migrated savedinherit→body. Current Button/Badge500 retained.

Weight label correction: the `body` option is displayed as **Default** for Button/Badge. It follows Body weight; the removed `inherit` option is not restored.

### Sale price owner cleanup

Removed Badges → Product status / Sale price (`badge_sale_price_color`) from schema,current and saved presets. Removed its Liquid resolver and `--badge-sale-price` alias. Root and per-scheme `--price-sale-color` now resolve `--sale-price-color`; `.price__current--sale` remains the consumer. Existing scheme sale_price values, Sale/Sold out badge background/text and commerce behavior are unchanged.
