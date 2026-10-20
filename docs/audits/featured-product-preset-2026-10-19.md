# Featured product preset — 2026-10-19

Reference: Figma yTXlAfT0miBGgRuuYM4OMp, desktop 48063:10282 (1920px), mobile 48096:20308 (375px). Both high-fidelity design contexts and screenshots inspected. Configuration-only build using the requested build-preset skill.

## Configuration

- Existing Featured product section, original translated name/category retained, one Add section preset. Homepage instance `featured_product_YkjKMT` uses the same settings/composition. No implementation/schema-control changes.
- Full width with existing page margins; large (65%) media share, 60px desktop and 32px mobile column gaps, 96px desktop and 48px mobile vertical padding. Sticky disabled to follow normal reference flow.
- Static Product media: desktop Grid (two equal columns), mobile Slider with bullets, 12px configured media gap. Existing selected product `virelle-softmotion-sports-bra` retained; no media/resource selection or catalog writes.
- Product details: no width cap, left aligned; 20px content gaps. Group contains square-icon eyebrow “Product of the week”, uppercase H2 product title and Body XXL (24px) price, with 8px gaps. Removed badges and description from this composition.
- Existing variant picker uses Body MD (16px) labels and SM (14px) inputs. Quantity label enabled and radius 0; Add to cart price disabled; accelerated checkout Secondary. View details centered through existing Group, arrow_up_right at 16px, 24px separation including group padding.

## Global settings mapping

Only local `current` changed; saved presets/schema unchanged. These settings affect shared product variant pickers, including product-page/overlay consumers. Product-card swatch controls are independent and unchanged.

| Setting | Before | After | Figma evidence |
| --- | --- | --- | --- |
| variant_picker_style | dropdown | button | Size pills |
| variant_picker_height_desktop/mobile | 44 | 40 | 40px pills |
| variant_picker_label_spacing | 16 | 8 | label/input spacing |
| swatch_width_desktop/mobile | 40 | 32 | 32px color circles |
| swatch_height_ratio | 3_1 | 1_1 | circular swatches |
| swatch_selected_style | underline | border | selected ring |

## Verification and limitations

- All configured section/block IDs, enum values, ranges/steps and checkbox types validated; all 13 blocks and preset/instance composition synchronized before final width/price adjustments; final adjustments use existing valid Full/XXL options in both locations.
- Shopify CLI Theme Check: 0 errors, 7 existing warnings. `git diff --check` passed for changed configuration. Toolkit search failed with fetch error; toolkit validator unavailable because @shopify/theme-check-common is missing. CLI provides validation evidence.
- Read-only preview reused at http://127.0.0.1:9300/. Desktop 1920px inspected: original front/back photographs, eyebrow/title/price, swatches, Size buttons, quantity and purchase controls visible. Final Full width and 24px price adjustments were made after this screenshot and have not been visually rechecked.
- Mobile viewport request at 375px timed out; reconnect and viewport-reset attempts also timed out. Mobile render, slider interaction, overflow and editor add/duplicate/reorder/save/reload remain unverified. Browser viewport may require manual restoration if the timed-out override applied.

## Material gaps left unimplemented

1. Quantity and Add to cart share a row at both breakpoints. Figma stacks Quantity, then full-width Add to cart with a 32px gap. Buy buttons exposes no layout option.
2. Product has five media items; desktop grid renders all five rather than just the two reference images, and mobile therefore has five slides/dots. No media-count limit setting. Existing resource/media order retained (Black before Gray; Figma shows Gray before Black).
3. Large media width is fixed at 65%; reference is approximately 66.4%. Desktop image-to-image configured gap 12px falls through to the global 24px grid gap because the block omits its default variable. No implementation changed to fix this.
4. Size guide requires a selected Page; existing picker is empty and remains unset. Size labels include the selected value, unlike reference. Native sold-out styling and pill widths differ from Figma.
5. H2 uses shared 48px desktop/30px mobile; reference is 50/30px. Price Body font weight/color and Quantity label weight follow existing tokens rather than exact reference weights. No global typography was changed from this one section.
6. Existing square eyebrow icon renders outlined instead of filled. Native icon artwork and button outlines/heights follow current theme controls; exact static asset replacement was not attempted.

Changed paths: sections/featured-product.liquid (presets only), templates/index.json (target instance only), config/settings_data.json (current mapping above). Preserved unrelated working-tree edits. No explicit theme push/publish, Theme Editor save, commit, or catalog mutation.


## Authorized follow-up — two-image desktop slider

User requested custom Product media referencing Essen. Added `desktop_layout: carousel_two_items` (Carousel 2 items (custom)) to Virelle Product media and selected it in Featured product preset and homepage instance. Mobile remains one-image Slider with bullets. This supersedes the grid-specific parts of gaps 2 and 3: all five media now occupy one horizontal slider row with two visible images, and Swiper uses the configured 12px gap. Media count/order is unchanged, so mobile still has five slides rather than the reference's two.

Implementation and base-merge instructions: `docs/theme-customizations/virelle-theme.md`, Product media entry. Tests: 18 pass, including two-item desktop → one-item mobile → desktop rebuild, filtered counts one/two/three, controls locking and reinitialization, plus existing variant/pointer/overlay coverage. Preview attempt was blocked because local browser use is disabled in Work settings; no new screenshot or visual/editor pass claimed.

Follow-up Theme Check: 1 errors, 7 warnings. New schema value, unchanged factory default and preset/instance media settings synchronization verified. Scoped diff whitespace check passed.

The full-theme error is outside Product media: templates/index.json references a missing `video-reviews` section (JSONMissingSection). That concurrent/unrelated composition was retained. All Product media files have no Theme Check errors. Breakpoint handler also refreshes overflow controls so a two-image desktop gallery regains its mobile navigation.


## Purchase controls follow-up

Selected Vertical (custom) / purchase_layout stacked in preset and homepage, with gap_desktop/gap_mobile 32. Opt-in flex column adapts Essen composition: Quantity precedes full-width Add to cart. Set show_back_in_stock_button false and show_accelerated_checkout false; defaults preserve other consumers. This supersedes gap 1 and the original Buy it now composition. Sticky remains true. Two new Liquid render tests pass. Browser comparison pending.

Final purchase-controls Theme Check: 0 errors, 11 warnings.


## Quantity appearance follow-up

Configured current global input_height_desktop 56→44 (mobile remains 44); this affects all consumers of global input height. Featured product Quantity preset/homepage use existing Custom style controls: background #fff, text #181818, border #ccc/1px, radius 0. Existing form input SM/14px and label MD/16px retained. Virelle-only CSS supplies missing width/action-column sizing, border-aware 44px geometry, regular label and 0.1px tracking; scoped to Featured product and still reads setting-driven height/colors/border/radius. See customization record for consumer impact and merge rules. Browser visual QA unavailable because browser use is disabled.

Quantity follow-up Theme Check: 0 errors, 11 warnings.
