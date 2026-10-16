# Featured collection preset — 2026-10-15

Workflow: user-selected `agents-build-themes/skills/build/preset/build-preset/SKILL.md` and `skills/setup-store/store-content-media/SKILL.md`. Configuration only. Branch `theme/mara-theme`.

Fresh Figma design context and screenshots: file `bH9A5237I07NWt19Cua9gL`, desktop `47015:20393` (1920px page, 1824px container), mobile `47228:13896` (375px page, 343px container). Product imagery is dynamic catalog content. No content creation/upload was explicitly requested; resource selectors remain empty.

Updated existing `Featured collection` preset and homepage `new_arrivals` instance together, retaining original translated name/category and all unrelated working-tree changes. No Liquid implementation, CSS, JS, global settings or schema controls changed.

| Region | Existing composition / configured values |
| --- | --- |
| Section | `featured-collection`, full width retaining global page margins, centered, white scheme-1 |
| Spacing | Top 96px desktop / 56px mobile; bottom 0; content gap 40px / corrected 28px |
| Header | Static `header`, centered, gap12; custom maximum width770px (nearest valid step to Figma768px) |
| Copy | `eyebrow`: latest items; `heading`: new arrivals, h2 with inherited H2 visual role |
| Products | Static `product-list` → `product-card`; carousel, max4, desktop4/mobile1 columns, gap8; no navigation/pagination/autoplay |
| Card background | Explicit existing block color override: scheme-2 (#F6F6F6), replacing inherited white |
| CTA | Static `view-all-button`, View all, text style both viewports, no icon, mobile not full width |

## Remaining gaps

- Collection is unselected. Products, prices, sale/sold-out state, swatches and source bag images are not bound or verified. Existing store documentation identifies `layouthub-template-v2.myshopify.com`; no store resources were changed or re-audited.
- Mobile Figma cards are280px wide with next-card preview. Product-list exposes only integer mobile columns and does not pass the shared carousel's mobile-preview argument; current configuration yields one full-width card. No suitable preset setting exists.
- Global product card ratio is portrait versus Figma square. Global desktop title18px versus16px; desktop content spacing10px versus20px horizontal/16px top/20px bottom. Product-card block exposes only color overrides, so these cannot be corrected locally through this preset.
- Figma mobile plus quick action differs from current global quick-add presentation. No local control exists.
- Heading tracking2px and button tracking0.6px are not locally configurable; inherited theme tokens differ as documented in the Style Guide audit.
- View all is conditionally rendered only when a selected collection has more products than max_products4. It is absent for empty or exactly-four-product collections; no always-show setting exists.
- Header maximum width770px approximates768px due to schema step10. Full-width container uses existing global margins; effective geometry remains unverified.

## Validation

- Theme Check:0 errors,6 existing warnings.
- Preset and homepage instance settings/block composition match.
- All configured section/block setting IDs, select options and range values validated against current schemas; single original preset name/category retained.
- `git diff --check` passes.
- Storefront visual verification remains pending: localhost:9300 has no listener. No preview upload, theme deployment, publish, commit or push performed. Desktop/mobile evidence above is Figma-to-configuration mapping, not a rendered storefront parity claim.

## Authorized custom follow-up

The later user request authorizes implementation beyond the original preset-only boundary. Mobile preview is now available and enabled for Featured collection via Product list; the earlier missing-control gap is superseded. Shared one-column policy is1.2 slides (about284.5px at343px content/gap8), rather than an exact fixed280px. See the shared mobile preview entry in `docs/theme-customizations/mara-theme.md` for ownership, affected consumers and update rules. Other media, card-style and CTA gaps above remain.

## Authorized Theme Settings follow-up — 2026-10-16

User authorized local `config/settings_data.json` edits and the corresponding build-preset skill update. Only existing `current` values were changed; saved theme presets and schema controls were preserved. These settings affect shared product cards across the theme; accent font also affects all accent-font consumers. Source: the desktop/mobile frames listed above.

| Setting | Before | After |
| --- | --- | --- |
| `type_accent_font` | `instrument_sans_n4` | `urbanist_n4` |
| `product_card_title_size_desktop` | `18` | `16` |
| `product_card_title_line_limit` | `none` | `1` |
| `product_card_ratio` | `portrait` | `square` |
| `product_card_content_spacing_desktop` | `10` | `16` |
| `product_card_content_spacing_mobile` | `16` | `12` |
| `product_card_content_gap_mobile` | `12` | `8` |
| `product_card_quick_add_style` | `text` | `icon` |
| `product_card_quick_add_full_width` | `True` | `False` |
| `product_card_swatch_width_desktop` | `30` | `16` |
| `product_card_swatch_width_mobile` | `30` | `16` |
| `product_card_swatch_ratio` | `3_1` | `1_1` |
| `badge_sold_out_text_color` | `#181818` | `#FFFFFF` |

Content spacing controls the standard card top gap, so 16px desktop / 12px mobile matches that measured gap; it cannot also supply Figma horizontal20/16px and bottom20/16px padding. Existing title controls do not independently select Medium500. Heading tracking2px and button tracking0.6px remain unsupported exact values. No code or schema was changed for these gaps. Storefront parity remains unverified because the existing development preview reports Failed to Upload Theme Files.

Catalog follow-up supersedes the initial empty-resource note: New Arrivals Mara (`new-arrivals-mara`, collection535340908843) is bound to the preset and homepage instance. Four products, eight color variants and24 AVIF media were created through the requested store-content-media workflow. Supplemental images are generated; four catalog originals came from Figma. Catalog media alt/focal-point audit remains pending.
