# Elvara Layout reference inspection

Inspected 2026-10-08: Omnise theme `139629002837`, Custom section `7k3GtJ`. Editor Save was disabled after reload; storefront DOM and computed styles were read from the saved reference. No reference settings were saved. Only equivalent controls already available in this repository are mapped.

## Saved composition mapped into the split preset and homepage

| Surface | Saved reference | Repository setting |
| --- | --- | --- |
| Section width / height | Full (no padding) / Auto | `section_width: full_width_no_padding`, `height: fit` |
| Section Layout | Horizontal, Position Top, Alignment Left, Vertical on mobile on, mobile alignment Left | `direction: horizontal`, `position_horizontal: top`, `horizontal_alignment: left`, `customize_mobile_alignment: true`, `alignment_mobile: left` |
| Section gap / padding | 0 desktop, 30 mobile / 0 top and bottom | `gap_desktop: 0`, `gap_mobile: 30`, padding 0 |
| Left Group | Horizontal, Position Top, Alignment Left; mobile stack on, Left; Width Fill on both devices; Height Fill | Same semantic values under existing Group IDs |
| Right Group | Vertical, Alignment Center on both devices; Width Fill on both devices; Height Fit | `direction: vertical`, `alignment: center`, `alignment_mobile: center`, widths `fill`, `height: fit` |
| Both Group gaps | 20 desktop / 20 mobile | `gap_desktop: 20`, `gap_mobile: 20` |
| Right Group padding | 64 on all four edges; mobile override off | Padding 64, `customize_mobile_padding: false` |
| Left Image | Desktop Fill height; mobile Original; Width Fill on both devices | `image_ratio_desktop: fill_height`, `image_ratio_mobile: original`, widths `fill` |
| Right Image | Original; Width Fill; no width limit | Original on both devices, widths `fill`, limits false |
| Heading / Button | Width Fit; no block padding | Fit widths; padding reset to 0 |
| Right children | Heading → Image → Button | Direct siblings, no nested Group |

Existing Elara text, image selections, heading typography and button appearance are retained. The sample right image is a square placeholder; the real Elara image keeps its intrinsic ratio under Original, so its pixel height can differ. Section Full screen/Custom height and other reference-only controls are not added.

## Actual class and CSS mapping

| Option / case | Reference DOM and CSS | Repository equivalent |
| --- | --- | --- |
| Horizontal | `.layout-flex--row`, `--flex-direction: row` | `.layout-flow--horizontal`, `--layout-flow-direction: row` |
| Vertical | `.layout-flex--column`, `--flex-direction: column` | `.layout-flow--vertical`, default column |
| Horizontal Position | `--flex-align`, consumed by `align-items` | `--layout-flow-align-items`; Top/start, Center/center, Bottom/end |
| Horizontal Alignment | `--flex-justify`, consumed by `justify-content` | `--layout-flow-justify-content`; Left/start, Center/center, Right/end, Space between/space-between |
| Vertical Alignment | Cross-axis `align-items` | `--layout-flow-align-items` |
| Vertical Fill Position | Main-axis `justify-content`; exposed only with Fill height | `--layout-flow-justify-content` |
| Mobile stack | `.layout-flex--column-mobile`; direction column, main axis start, mobile alignment on cross axis | `.layout-flow--mobile-vertical`; mobile variables reset main axis to start |
| Vertical on mobile | Reference sets mobile main axis start even when desktop Position differs | Shared snippet explicitly emits mobile start for vertical layouts |
| Group Fit | `.stacked-block--height-fit`: height auto; flex `0 1 auto` in a column | Content-driven height; no `.height-fill` hook |
| Group Fill in row | `.stacked-block--height-fill`: height auto, `align-self: stretch` | Row `.height-fill` uses auto height and stretch |
| Group Fill in column | `.layout-flex--column > .stacked-block--height-fill`: flex `1 1 0%` | Column `.height-fill` uses flex `1 1 0%` |
| Row converted to column on mobile | Group keeps intrinsic flex sizing; no new main-axis grow rule | Mobile stack resets Group Fill to `0 1 auto` |
| Width Fill in row | `.size-style--width-fill-desktop/mobile`: flex `1 1 5rem`; Group outer grid and inner padding separate sizing from padding | Split uses equal grid tracks on the parent after gap; generic all-Fill Group uses equal grid tracks because local padding is on the Group root |
| Image Fill height | `.media-block--fill-height`: auto height, stretch, minimum 10rem (100px); media positioned absolute, image height 100% | Separate desktop/mobile Fill classes, minimum 100px, absolute media inset by block padding; column parent gives flex grow |
| Image Original | No Fill modifier; intrinsic image ratio (placeholder 1:1) | Original emits natural ratio/height, legacy Auto normalizes to Original |

Direction changes which axis Position and Alignment control. Section and Group use the same local variable helper. Fill needs available parent height for main-axis growth; it cannot manufacture free height in an Auto/Fit parent.

## Measurements

Reference desktop viewport 1905px: both Group outer widths 952.5px, height 1094.09px; right content width 824.5px after 64px padding per side. Left Fill image height equals the row height.

Reference mobile 390px: both Group widths 390px; section gap 30px; Group gaps 20px; right padding stays 64px, leaving content width 262px. Left image reverts to its source ratio, producing height 292.11px; right square placeholder is 262px tall.

Automated tests cover setting normalization and conditional controls for Section, Group and scrolling text, axis mapping, independent Image ratios, and preset/template parity. Browser fixture uses rendered repository Liquid and real CSS with synthetic image/text/button content; it verifies layout geometry, not Shopify editor lifecycle or visual identity of the retained Elara content.

Local fixture verification: desktop 1280px has two 640px outer columns and a 656px row/Fill image. Section gap 40 with child Group gap 20 has two 620px columns and exactly 40px between them. Mobile 390px keeps 30px section gap and 64px right padding; content is 262px wide. No horizontal overflow in these cases. 25 tests passed; customization coverage and whitespace checks passed. Full Theme Check inspected 337 files with zero errors and 40 existing warnings.
