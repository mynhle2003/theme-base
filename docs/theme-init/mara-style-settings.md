# Mara — Style Guide configuration

Source: Figma bH9A5237I07NWt19Cua9gL, Style Guide 43001:11865; typography 43415:6890, inspected in signed-in Chrome. Urbanist regular handle urbanist_n4 verified in Shopify font picker.

Applied before homepage reset: Urbanist 400 body/headings; H1–H5 responsive sizes/case/leading; body 16px/150%; normal colors of schemes 1–3; button font 500/14px/uppercase, heights 48/44px, horizontal padding 24/22px, square corners, 1px borders. Saved presets and unproven values preserved.

## Existing-control gaps

- H1 tablet 36px → 40px minimum. H3 desktop 26px → 28px minimum. H4 desktop 20px → 24px minimum; no tablet-specific control for 18px. H5 desktop 16px → 18px minimum.
- H2 tablet normal runtime leading is 130%, source 120%.
- Heading tracking 2px (H1–H3), .4px (H4–H5) has no matching role controls.
- Button tracking .6px → closest existing relaxed value .28px.
- Border/hover/highlight/accent/overlay colors and accent font lack verified role evidence; preserved. Sale/sold-out colors observed only in scheme 1; global badge colors preserved pending cross-scheme verification.
- Storefront visual comparison pending; no theme deployment.

Changed top-level current keys: type_heading_font, type_primary_font, type_heading_1_size_desktop, type_heading_1_size_tablet, type_heading_1_size_mobile, type_heading_1_case, type_heading_2_size_desktop, type_heading_2_size_tablet, type_heading_2_size_mobile, type_heading_2_case, type_heading_3_size_desktop, type_heading_3_size_tablet, type_heading_3_size_mobile, type_heading_3_case, type_heading_4_case, type_heading_5_size_tablet, type_heading_5_size_mobile, type_heading_5_case, button_height_desktop, button_height_mobile, button_padding_inline_desktop, button_padding_inline_mobile, button_font_size, button_font_size_mobile, button_letter_spacing, button_primary_text_case, button_secondary_text_case, button_tertiary_text_case, color_schemes, button_font_weight

Homepage initialization: removed 18 inherited demo instances after Style Guide validation; preserved section preset registrations, header/footer groups, other templates and JSON header. Local backup: .shopify/mara-home-before-reset.json.
