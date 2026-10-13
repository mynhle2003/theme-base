# Essen typography preset migration — 2026-10-09

Scope: existing section/block presets and saved JSON template/section-group instances. Preserve names, block types/IDs/order, content, media, resource selections and all unrelated settings. No global named Theme Settings preset was changed. No Git commit/push or store upload.

## Mapping

| Former choice | Updated choice | Desktop / mobile |
| --- | --- | --- |
| Extra Large | Large | 40 / 32px |
| Large | Medium | 32 / 24px |
| Small | Extra Small | 18 / 16px |
| Medium | Small | 24 / 20px (tablet now 22px) |
| Extra Small | Custom, 16px | 16px; separate mobile control uses 14px where available |
| Display | Explicit role preserving previous resolution | Original Heading-kernel tag resolution or original 64px Display role |

Owner requested Custom and Custom size for unmatched roles. Converted 220 matching selections; after the owner clarified 24px equals Small, 33 former Medium selections use Small. The remaining 41 selections use Custom (31 through existing controls and 10 FAQ stored controls through additive Custom support). These counts include stored inactive mobile values. Setting defaults absent from instances were materialized only where a heading size migration required them.

## Responsive limits of existing Custom controls

Heading kernels with one Custom size use 16px at all breakpoints; they cannot also preserve the former 14px mobile size. Existing dual desktop/mobile Custom controls are used where available. Former 24px Custom selections now use Small 24/22/20px, following the owner’s correction.

There are 31 stored selections with one 16px Custom size:

- `sections/icon-text-inline.liquid/presets/0/blocks/1/blocks/0/blocks/1` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/icon-text-inline.liquid/presets/0/blocks/1/blocks/1/blocks/1` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/icon-text-inline.liquid/presets/0/blocks/1/blocks/2/blocks/1` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/icon-text-inline.liquid/presets/0/blocks/1/blocks/3/blocks/1` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/icon-text-inline.liquid/presets/0/blocks/1/blocks/4/blocks/1` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/press.liquid/presets/0/blocks/1/blocks/0/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/press.liquid/presets/0/blocks/1/blocks/1/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/press.liquid/presets/0/blocks/1/blocks/2/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer.liquid/presets/0/blocks/0/blocks/0/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer.liquid/presets/0/blocks/0/blocks/1/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer.liquid/presets/0/blocks/0/blocks/2/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `blocks/testimonial-item.liquid/presets/0/blocks/1/blocks/3` / `heading_size`: Custom 16px; former mobile 14px.
- `blocks/press-item.liquid/presets/0/blocks/0` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/page.about-us.json//sections/service_promises/blocks/promises_grid/blocks/warranty/blocks/heading` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/page.about-us.json//sections/service_promises/blocks/promises_grid/blocks/returns/blocks/heading` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/page.about-us.json//sections/service_promises/blocks/promises_grid/blocks/ethical/blocks/heading` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/page.about-us.json//sections/service_promises/blocks/promises_grid/blocks/circle/blocks/heading` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/collection.json//sections/press/blocks/quotes/blocks/item_1/blocks/item_1` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/collection.json//sections/press/blocks/quotes/blocks/item_2/blocks/item_1` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/collection.json//sections/press/blocks/quotes/blocks/item_3/blocks/item_1` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/press_LnhcgX/blocks/quotes/blocks/press_item_hLThFf/blocks/heading_Myr6Hw` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/press_LnhcgX/blocks/quotes/blocks/press_item_YYk47F/blocks/heading_3gA7Jj` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/press_LnhcgX/blocks/quotes/blocks/press_item_PMrkGh/blocks/heading_DXCtKb` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/icon_text_inline_eN4cRW/blocks/carousel/blocks/slide_TxM6pc/blocks/heading_wMLbjV` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/icon_text_inline_eN4cRW/blocks/carousel/blocks/slide_CRTWKV/blocks/heading_npQL86` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/icon_text_inline_eN4cRW/blocks/carousel/blocks/slide_zJ884x/blocks/heading_FNgVpV` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/icon_text_inline_eN4cRW/blocks/carousel/blocks/slide_iQpNMp/blocks/heading_3RnUjm` / `heading_size`: Custom 16px; former mobile 14px.
- `templates/index.spinel-sync.json//sections/icon_text_inline_eN4cRW/blocks/carousel/blocks/slide_GKiqGA/blocks/heading_zwVpUg` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer-group.json//sections/footer/blocks/footer-row-primary/blocks/footer-row-primary-column-1/blocks/footer-address-menu` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer-group.json//sections/footer/blocks/footer-row-primary/blocks/footer-row-primary-column-2/blocks/footer-info-menu` / `heading_size`: Custom 16px; former mobile 14px.
- `sections/footer-group.json//sections/footer/blocks/footer-row-primary/blocks/footer-row-primary-column-3/blocks/footer-social-menu` / `heading_size`: Custom 16px; former mobile 14px.

## Figma homepage verification

Sources: desktop node 46002:5779 and mobile node 46240:8549 in Essen v6iKvP4OuW3y0A9bbxel5U; design context and screenshots read on 2026-10-09.

| Region | Role | Desktop / mobile |
| --- | --- | --- |
| Slideshow heading, all three slides (owner override) | Extra Large | 64 / 40px |
| Featured collection tabs; wardrobe heading | Medium | 32 / 24px |
| Tops/Pants; Shop the Look; Trending; Flash sale; Everyday uniform; banner; Blog heading | Large | 40 / 32px |
| Featured product title; service card headings; blog card titles | Extra Small | 18 / 16px |
| Wardrobe collection labels | Custom | 14px |

Homepage already uses the Featured product preset with an 18/16px product title; the separate generic preset variant remains distinct. Preset and saved Slideshow headings are all XL after the explicit instruction to match slide one. Content, media and composition remain existing theme values; this work concerns typography selections.

19 homepage desktop/mobile selection pairs match Figma (including slide overrides). 54 Chrome computed-style assertions pass at 1920/1024/375px. JSON/schema parse and Theme Check pass with zero errors and five existing settings-count warnings. This verification uses local typography fixtures and saved settings; it is not full live storefront or Theme Editor visual QA.

## FAQ Custom implementation plan and result

Global typography remains owned by Theme Settings; FAQ Accordion owns local question font size. Existing template/section/block composition, resource/context and editor lifecycle are unchanged. Add Custom to its existing desktop/mobile question-size selects and two bounded 10–100px ranges. Liquid accepts Custom and emits bounded pixel sizes using XS leading/tracking/case. Preserve the existing mobile-override enable flag; inactive stored values remain inactive. QA: schema/options/ranges, preset consumers, Theme Check and customization coverage. This narrow implementation is necessary to honor the owner's requested Custom fallback where the existing FAQ control lacked it.

## Final Theme Settings names and Display contract

The owner clarified that Typography group/option names must match personal main: Display, Extra large, Large, Medium, Small, Extra small. All setting/option translation keys and their schema locale values match main; setting IDs, option values, ranges and defaults are retained.

| Typography group | Desktop / tablet / mobile | When Heading size is Display |
| --- | --- | --- |
| Display | 80 / 64 / 48px | HTML H1 |
| Extra large | 64 / 52 / 40px | HTML H2 = Figma Heading 1 |
| Large | 40 / 32 / 32px | HTML H3 = Figma Heading 2 |
| Medium | 32 / 26 / 24px | HTML H4 = Figma Heading 3 |
| Small | 24 / 22 / 20px | HTML H5 = Figma Heading 4 |
| Extra small | 18 / 16 / 16px | HTML H6 = Figma Heading 5 |

Display 80/64/48px is a theme choice satisfying the owner's instruction that Display exceed Figma Heading 1; the supplied Figma typography table does not define a separate Display size. Explicit size choices continue to override the tag-based default. All three Slideshow headings remain explicitly Extra large (64/52/40px). The final mapping supersedes earlier interim H1–H6 mapping notes. Browser checks pass for final tag/Display and explicit role sizes at 1920/1024/375px; full live storefront/Theme Editor verification remains outstanding.
