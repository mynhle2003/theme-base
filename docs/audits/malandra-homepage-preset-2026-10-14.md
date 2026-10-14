# Malandra homepage preset — 2026-10-14

Configured `templates/index.json` using the build-preset skill at `agents-build-themes/skills/build/preset/build-preset/SKILL.md`. Only template configuration changed; section/block implementations, schemas, global settings and header/footer groups remain unchanged. No store writes, theme upload, commit or push were performed.

References: [desktop 1920 × 11950](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52325-1223), [mobile 375 × 11193](https://www.figma.com/design/7BbUHDzKGaMGMkyRpu0YZ8/Malandra?node-id=52393-8986). Inspected both screenshots and individual design-context responses for all 15 content regions. The hidden desktop Collection list 49 was excluded.

## Composition and ownership

All sections occupy the homepage JSON template, own their section spacing, and use existing block allow-lists. Existing block implementations own content, interactions and editor lifecycle. Global typography/schemes remain owned by Theme Settings. All resource and media pickers are unset: inherited Elara resources were removed from this homepage composition. No media was requested or downloaded.

| Figma region | Existing section / blocks | Desktop / mobile configuration |
| --- | --- | --- |
| Hero banner 02 | slideshow / slideshow-slide, header, button | One split slide, bottom-left copy, existing medium heights 800/600; secondary media hidden by native mobile behavior |
| Scrolling text 2 | text-marquee-custom / marquee | Five benefit phrases, existing decorative icons; 20/16 vertical padding |
| Featured collection 14 | collection-tabs / collection-tab | Necklaces, Rings, Bracelets; 4/2 product columns, centered tabs, no pagination |
| Collection list 27 | collection-list / collection-list-items, collection-card | Shop By Category, three desktop columns, mobile carousel with next-card preview, 6:7 media ratio |
| Shop the look 2 | shop-the-look-section / image, header, shop-the-look-products | Statement Stacks, image first on mobile, one product at a time, progress pagination |
| Birthstones | custom-section / row, _column, image-card, product-list | Banner requested width 25%, products fill remaining space with three columns; mobile stacks banner before carousel |
| Collection list 50 | image-cards / image-card | Two 5:4 cards side by side; stacked on mobile; separate content schemes/positions |
| Our mission | custom-section / row, _column, group, grid, image | Media before copy on mobile; two side-by-side images |
| Spring sale | countdown / static group, countdown-timer, button | Horizontal desktop and native centered mobile flow; timer labels without background |
| Collection list 21 | image-cards / image-card | Two 5:4 cards; mobile stacked with 12px gap |
| Love, Always | hero / header, button | Video picker unset; centered content; existing medium/small height options |
| Founder quotation | custom-section / icon, editorial-text, text | Centered quotation with 920px max width, reveal disabled, local #f9f9f9 background |
| Blog post 13 | blog-posts / header, view-all-button, blog-list | Three article cards, three desktop columns and one mobile column |
| Gallery 04 | gallery-image-grid / gallery-header-group, gallery-grid | Eight image slots, 4/2 columns, 16/4px gaps |
| Icon with text 1 | icon-text-cards / carousel, slide, icon, header | Four desktop cards, one mobile card with bullets; Figma copy |

## Validation

- Theme Check: 0 errors; six `ExcessiveSettingsCount` warnings in existing unchanged blocks (`_bundle-summary`, `_comparison-table-features`, `carousel`, `comparison-table-column`, `editorial-text`, `image-card`).
- Checked configured setting IDs, select options, range bounds/steps, child allow-lists, block order, capacity and actual static `content_for` calls against the repository schemas. Fifteen sections and 134 blocks; no static mapping issues.
- `git diff --check` passed.
- Both Figma viewports were reviewed against existing responsive implementation contracts. Storefront rendering, measured geometry and Theme Editor lifecycle were not exercised: local preview was stopped and starting it uploads to a development theme, outside build-preset's local-only authorization. This is configuration validation, not a verified pixel match.
- Shopify toolkit documentation search failed with `fetch failed`; its validator could not load `@shopify/theme-check-common`. Used installed Shopify CLI Theme Check and repository schema checks instead.
- Existing slideshow height options already supply the target 800/600 dimensions; no height calibration was needed.

## Visible gaps and unfinished follow-up

| Figma expectation | Configured behavior | Missing control / follow-up |
| --- | --- | --- |
| Jewelry imagery, video, product cards, named categories and article content | Unselected pickers; sections show their native empty/placeholder behavior | Explicit media/resource work is needed to populate them; eight gallery slots are prepared |
| Birthstones tabs Rings / Necklaces / Earrings sharing a quarter-width promo banner | Banner plus one product collection carousel | No existing composition exposes tabs with that banner layout; custom follow-up unimplemented |
| Collection tabs separators and Figma mobile card geometry | Existing underline-style tabs and two-column carousel | No independent separator or exact mobile card-width control |
| Overlapping mission images | Two adjacent images | Existing grid has no overlap/offset setting; custom follow-up unimplemented |
| Three full-width editorial blog rows, text left and image right on desktop, image first on mobile | Native three-column article grid, stacked mobile cards | Existing blog-list requires at least two desktop columns; no row-order composition control |
| Exact 720/500 Love, Always hero height | Existing hero medium/small options use 720/560 | The mobile 500px scale is not available; calibration deferred because it affects shared hero consumers |
| Spring campaign duration | Existing fixed-time default of 2026-12-25 12:00 | Merchant must supply the real campaign end; the Figma countdown values are static reference numbers |
| Figma spark, earth, gift and quotation artwork | Existing theme library icons | Exact decorative artwork requires separately requested asset work |
| Figma header and footer layouts | Inherited Elara header/footer section groups | Outside the homepage template composition; still require separate group configuration |
| Exact spacing, cropping, wrapping and pagination at both widths | Closest existing controls and inherited global tokens | Must compare a rendered preview after media/resource assignment; shop-the-look product width and hotspot positions remain preset defaults |

The configuration is ready for resource assignment and an authorized preview. Custom implementation for the gaps above has not been added.

## Shopify sync correction

Read the GitHub integration logs for draft theme `192330498347` through the authenticated Shopify Admin browser. Shopify rejected `templates/index.json` because generated dynamic block IDs started with `_` (`_marquee-text-*`, `_marquee-icon-*`, `_column-*`). The initial theme import saved the other files but omitted the homepage template, causing `/` to resolve to 404. Local Theme Check did not detect this server validation rule.

Renamed fourteen dynamic block IDs to remove their leading underscore and updated the corresponding `block_order` arrays. Block types retain their required underscores. Checked for key collisions, dangling order entries and remaining leading-underscore IDs. This correction changes IDs only, preserving settings, content and composition.
