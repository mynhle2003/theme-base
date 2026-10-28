# Novaire — Video with products

2026-10-27. Owner authorized port from Virelle and new matching demo products. Sources: Figma vsUDZS8CZ0sa1pruNqu0eb desktop47064:15176 (1920×842.8) and mobile47284:7284 (375×697), inspected CUA/Chrome minhle@beae.com. Figma MCP unavailable in this session.

## Section Build Plan

- Role/placement: dynamic content section `video-with-products` in homepage `index/founder_testimonials`; keep instance identity and page order. Add/remove/reorder allowed across JSON templates by inherited placement guard.
- Context: five existing Novaire Shopify videos and block-owned product lists; no inferred global product. Store layouthub-template-v2.myshopify.com, USD; new stock at Shop location117337850155 only.
- Ownership: section owns columns, gap, active emphasis, video autoplay, pagination, schemes and spacing; `_video-review` owns media and up to2 products; shared Header owns heading/text; Theme Settings retain typography/colors/commerce tokens.
- Slots: one fixed static Header plus up to12 dynamic private video blocks (max13 total); no app support added. Blank media uses existing placeholder, blank products omit popups.
- Output/runtime: Virelle section/block/snippet and guarded `video-reviews` custom element, existing Swiper, variant picker and buy-button contracts. Accessible play/mute/product links, popup focus return/Escape; reduced motion and editor teardown retained.
- Responsive: five centered desktop cards, one centered mobile card with neighboring previews, emphasized active surface and bullet pagination.
- QA: schema/preset/template mapping, Theme Check; actual desktop/mobile rendering, video controls, carousel navigation, popup variants/focus/close and cart behavior. Report unverified editor lifecycle cases.
- Port source: Virelle HEAD53229999752df65f8f475c89511d6bc87a382434, clean selected source files. New implementation/dependencies only; reuse compatible shared consumers without overwriting target customizations. SVG source icon shapes move into a rendered snippet per repo policy.


## Owner correction — direct Compact product

Owner requested no in-video slide-up product overlay: use the existing Product compact component directly, exposing its33 settings in each Video block. Extracted the shared renderer and CSS from the current Novaire Compact block; both original block and Video reuse them. Block product picker is single `product`; old temporary `products[]` bindings migrated preserving each video. Removed the temporary product popup markup/CSS/JS and task-created product-popup snippet. Shared quick-add behavior remains owned by Product compact, including its existing variant chooser. Play/pause/mute controls remain icon-only with translated accessible names.

Generation: three gpt-6-luna/max agents produced4 separate photos per new product using exact video stills. Catalog/lifestyle/front-three-quarter/detail inspected; no unsupported back view or size options invented. User explicitly allowed demo prices. Twelve image files uploaded; three new products ACTIVE and published on Online Store322604237099. Receipt: `novaire-video-products.json`. Coastal and Romilly reused without stock changes.


## SVG source verification

Figma MCP became available; session43d5d265-59c5-440b-935c-4a4737fc221d returned View-seat quota. CUA/Chrome exported original SVGs from `lucide/play`47064:15182 and `lucide/volume-x`47064:15266 via Properties → Export → SVG. Downloads retained in `~/Downloads/✅ Claré - Nhung.zip` and `✅ Claré - Nhung (1).zip`; archive entries lucide/play.svg and lucide/volume-x.svg verified24×24, stroke1.5px. Copied exact paths into video-review-icon snippet; only stroke color normalized to currentColor, aria-hidden/class added. No new SVG asset files. Pause/unmuted use existing runtime icons; these states are not shown in supplied Figma frames.


## Final verification — 2026-10-27

- Draft192827490603 was automatically updated by the already-running development supervisor; no standalone theme push, commit, publish, or Theme Editor save. Direct authenticated Chrome preview used after localhost briefly showed an unrelated `custom-section` upload error.
- Desktop viewport1935×1080/content1920: five cards, active center342.4×513.6px; gap28px, outer inset48px. Inactive surface inset8% approximates source40px side offset; inactive Compact hidden when active emphasis enabled. Original video3 autoplay/muted readyState4. Play/pause and mute/unmute toggles verified; icon buttons contain no text and use transparent backgrounds. Exact Play/volume-x SVG paths verified in render.
- Mobile viewport390×812/content375: centered carousel with adjacent peeks and Product compact, no horizontal document overflow. Active card271.2×406.8px, Compact247.2×76px. Video5 autoplay readyState4 and correct Pink Garden product; video4 bound Romilly and readyState4. Video1 and2 product bindings/heading and navigation verified; shared quick-add opens correct Ivory product with4 images and linked Color, closes by Close button. No cart item was submitted.
- No `[data-review-popup]` markup or in-video popup logic remains. Existing standalone Compact markup/CSS is preserved exactly after substituting explicit settings/editor-attribute parameters. All33 Compact setting definitions transferred unchanged to Video; IDs, enums, ranges, static Header and Add section preset synchronization pass.
- Theme Check0errors/8warnings, all outside this port; JavaScript syntax and git diff --check pass. Custom audit recognizes all port paths, but the overall audit reports6unrelated paths changed by other work as missing records; those were preserved. Full Theme Editor add/duplicate/reorder/save/reload lifecycle not exercised.
- Remaining visual differences: inherited mobile heading26px/tracking2.56px wraps over2lines vs one line in source; Virelle native mobile Layout2 card271px vs source approximately288px. Five functional pagination bullets follow five videos, while source shows3dots. Shared Compact global price/button typography, sale colors and square quick-add button remain theme-controlled. These are documented differences, not a pixel-perfect claim. Pause/unmuted icons are existing fallback states absent from supplied source frames.
- Screenshots visually inspected in tool output; no persistent screenshot files saved. Original downloaded SVG archives retained in Downloads; generated source images retained by ImageGen, with permanent uploaded media IDs in receipt.


## Sound button and editor groups follow-up — 2026-10-27

CUA/Chrome inspected original parent Frame3 node47064:15265: fixed40×40px, padding8px, radius999px, white20% background, child icon24×24px. Sound button CSS now reproduces those values, including hover; top/right inset12px follows visible source geometry. Play remains a transparent icon-only control. Video schema group headers now explicitly identify Product thumbnail/content/add-to-cart/gap/size/appearance/padding; setting IDs, values, defaults and Compact renderer unchanged.

Rendered draft preview reloaded and computed styles verified on all five sound buttons: width/height40px, padding8px, radius999px, background rgba(255,255,255,0.2). Theme Check reports0errors; git diff --check passes.

Product button radius follow-up: shared Compact and Video expose Corner radius with Theme default plus Theme Settings square/slightly_rounded/rounded/pill values and translated labels. Shared renderer maps to existing radius tokens; Video preset and all five homepage Video blocks use pill for circular quick-add buttons. Regular Compact price follows heading color.

Pagination follow-up: Video with products Type adds Dots, using the existing accessible per-video pagination runtime with circular8px indicators. Add section preset and homepage instance select dots; five videos retain five navigable indicators.

Loop UX fix: replaced transition-end clone-to-original teleport with native Swiper loop over the buffered slide set, including loopAdditionalSlides equal to review count. Playback and controls now operate on the actual active occurrence, pagination resolves logical source and chooses nearest occurrence, active duplicate controls remain accessible, and teardown pauses all videos. Desktop preview verified full five-card coverage across source4→0 boundary and only the active source0 video playing. JS syntax and diff checks pass.

Swipe follow-up: exclude video from Swiper focusableElements so the video swipe surface cannot capture native focus and interrupt drag; disable A11y scrollOnFocus and limit custom focus navigation to focus-visible keyboard controls. Ignore media clicks during drag/transition, remove redundant active-card slideTo, use stable slideToLoop indices for pagination, and use the native default loop buffer. Desktop pointer gestures verified logical3→4→5→1 and1→5→4, with centered settled cards. Mobile touch/device validation remains unverified.

Compact Add to cart follow-up: remove the multi-variant picker branch. The icon submits the selected_or_first_available_variant directly through shared quick-add, with quantity_rule.min (fallback1); label remains Add to cart for available products. Sold-out disabled state retained.
