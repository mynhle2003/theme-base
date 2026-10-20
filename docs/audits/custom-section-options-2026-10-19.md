# Custom section option inventory — 2026-10-19

Reference: [Custom section editor](https://admin.shopify.com/store/omnise-theme-base/themes/161667842133/editor?section=template--23269704728661__custom_section_xhfjnz). Target: Virelle, branch `theme/virelle-theme`, existing development theme `192119800107` on `layouthub-template-v2.myshopify.com`.

## Scope and evidence

Reimplemented against visible reference controls and conditional branches. Source schema/code was not downloaded. Reference current values observed: Page / Auto / Vertical / Left, gap 40 / 30, no media, pixel top/bottom 50. Hidden values observed: custom height 100%, full-width divider enabled, boxed padding 70 / 70 desktop and 40 / 16 mobile, border 0, shadow None, Overlay enabled, parallax None, percent spacing 20 for desktop/mobile. These are current editor values; source defaults were not independently verified.

All three Virelle preset objects compare equal before/after. Existing setting IDs and current homepage composition retained. Additional legacy alignment, gap and background-color options remain available. The entire original Padding group is retained verbatim, including labels/order/ranges/defaults/visibility; reference percent/unit controls are intentionally excluded by owner request. Layout is the first group; Section width and Section height are its first two controls.

## Local schema and render bindings

| Group | Setting ID | Label | Type / values | Default | Visible if |
| --- | --- | --- | --- | --- | --- |
| Layout | section_width | Section width | select: Page, Full, Full (no padding) | page_width | always |
| Layout | height | Section height | select: Auto, Full screen, Custom | auto | always |
| Layout | custom_height | Custom height | range (0–100, step 1, %) | 100 | {{ section.settings.height == 'custom' }} |
| Layout | direction | Direction | select: Horizontal, Vertical | vertical | always |
| Layout | alignment | Alignment | select: Left, Center, Right | left | {{ section.settings.direction != 'horizontal' }} |
| Layout | position | Position | select: Top, Center, Bottom, Space between | top | {{ section.settings.direction == 'vertical' and section.settings.height != 'auto' }} |
| Layout | horizontal_alignment | Alignment | select: Left, Center, Right, Space between | left | {{ section.settings.direction == 'horizontal' }} |
| Layout | position_horizontal | Position | select: Top, Center, Bottom | center | {{ section.settings.direction == 'horizontal' }} |
| Layout | vertical_on_mobile | Vertical on mobile | checkbox | True | {{ section.settings.direction == 'horizontal' }} |
| Layout | horizontal_alignment_mobile | Mobile alignment | select: Left, Center, Right | left | {{ section.settings.direction == 'horizontal' and section.settings.vertical_on_mobile }} |
| Layout | customize_mobile_alignment | Customize for mobile | checkbox | False | {{ section.settings.direction != 'horizontal' }} |
| Layout | alignment_mobile | Mobile alignment | select: Left, Center, Right | left | {{ section.settings.direction != 'horizontal' and section.settings.customize_mobile_alignment }} |
| Layout | enable_sticky_content | Enable sticky content | checkbox | False | {{ section.settings.direction == 'horizontal' }} |
| Divider | show_top_divider | Show top divider | checkbox | False | always |
| Divider | show_bottom_divider | Show bottom divider | checkbox | False | always |
| Divider | divider_full_width | Full-width divider | checkbox | True | {{ section.settings.section_width != 'full_width_no_padding' and section.settings.show_top_divider or section.settings.show_bottom_divider }} |
| Gap | content_gap | Desktop | range (0–100, step 1, px) | 16 | always |
| Gap | customize_mobile_gap | Customize for mobile | checkbox | False | always |
| Gap | content_gap_mobile | Mobile | range (0–100, step 1, px) | 12 | {{ section.settings.customize_mobile_gap }} |
| Background | background_media | Media | select: None, Image, Video | none | always |
| Background | background_image | Background image | image_picker | unset | {{ section.settings.background_media == 'image' }} |
| Background | background_image_mobile | Mobile Image (optional) | image_picker | unset | {{ section.settings.background_media == 'image' }} |
| Background | background_video | Video | video | unset | {{ section.settings.background_media == 'video' }} |
| Background | show_overlay | Overlay | checkbox | True | {{ section.settings.background_media != 'none' }} |
| Background | overlay_color | Overlay color | color | #00000080 | {{ section.settings.background_media != 'none' and section.settings.show_overlay }} |
| Background | parallax_effect | Parallax effect | select: None, Fixed, Vertical, Horizontal, Zoom | none | {{ section.settings.background_media != 'none' }} |
| Color | color_scheme | Color scheme | color_scheme | scheme-1 | always |
| Color | background_color | Background | color | unset | always |
| Padding | padding_top | Top | range (0–100, step 1, px) | 0 | always |
| Padding | padding_bottom | Bottom | range (0–100, step 1, px) | 0 | always |
| Padding | customize_mobile_padding | Customize for mobile | checkbox | False | always |
| Padding | padding_top_mobile | Top (mobile) | range (0–100, step 1, px) | 0 | {{ section.settings.customize_mobile_padding }} |
| Padding | padding_bottom_mobile | Bottom (mobile) | range (0–100, step 1, px) | 0 | {{ section.settings.customize_mobile_padding }} |

## Block compatibility

All 23 previously allowed types remain. Added available shared types: Product card: Compact, Payment icons, Comparison table, Popup, Social links, Discount code and FAQ accordion. Reference labels map to existing local block contracts where available; this work does not rebuild leaf-block settings. The reference also offers Colors, Custom Liquid, Page, Masonry and Product finder quiz, which have no corresponding local block implementation and are not advertised as supported. Existing Eyebrow serves the Subheading role.

## Verification

- Seven tests pass in `tests/custom-section.test.cjs`: original Padding schema/pixel/mobile behavior, flow axes and stale hidden settings, stale removed boxed values, height/dividers, preset/block validity, and per-instance runtime/reduced motion.
- `node --check assets/custom-section.js` passes.
- Shopify Theme Check: 0 errors, 7 warnings. New warning: ExcessiveSettingsCount (33 settings); seven pre-existing warnings.
- Additional toolkit validator unavailable: missing bundled `@shopify/theme-check-common`.
- Desktop/mobile computed-style and full editor add/remove/duplicate/reorder/save/reload checks remain pending. Preview initially blocked by existing Shop the look pagination_max_width upload failures, then browser access disabled in Work settings.
- Reference temporary control changes undone; no source Save, explicit theme push/publish or Git commit.

## Ownership

Section owns container, external spacing, flex composition, divider, media. Existing shared blocks retain their content/attributes and internal contracts. Shared foundation files were not edited by this work. Custom element disconnect/reconnect owns motion cleanup.

Owner follow-up: removed all eight section-owned boxed controls, including Enable boxed layout, Appearance/Boxed padding headings, Liquid branches, scheme/padding/border/shadow bindings and scoped CSS. The child Product card: Compact blocks retain their own independent boxed options and presets. Layout, text alignment selectors and the entire original Padding group remain intact.

Layout repair: an unclosed mobile media query after boxed removal leaked into subsequent sections in Shopify compiled CSS. Fixed the closing scope and restored mobile sticky reset. Added a CSS scope regression test. Live port-9300 HTML and compiled stylesheet were read back; the aggregate stylesheet is balanced and the following divider section is at root scope. Screenshot verification remains pending because browser control is disabled.
