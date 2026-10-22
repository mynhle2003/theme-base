# Icon with text (custom) — Kinetra, 2026-10-21

Skill: `agents-build-themes/skills/build/preset/build-preset/SKILL.md`. Explicit custom pagination work precedes preset configuration. Branch: `theme/kinetra-theme`.

## Design evidence

Figma file `yTXlAfT0miBGgRuuYM4OMp`, desktop48190:2443 and mobile48249:14884. MCP returned missing edit access; owner explicitly requested computer use. Read the exact frames and descendants through existing Chrome/beae.com Figma UI. Screenshots and Properties show desktop1920×241 and mobile375×217, bottom spacing96/48px, centered leaf48×48, heading H4 (18px /25.2px), Body/16, icon–heading12px, heading–body8px, body–dot20px. Container gap token5 =20px; card gap2 =8px; icon-heading gap3 =12px. Visible first slide: PFAS-FREE FINISHES and the existing PFAS-free safety/sustainability copy. Three dots, active dark/inactive pale,8px circles with24px center spacing. Desktop child nodes inspected:2444 Container,2446 Row,2447 Card,2448 icon-heading,2449 leaf frame,2450 Vector. Leaf vector bounds28.95px within48px frame, top9.85px/left9.05px, color#181818. Existing homepage SVG matches these bounds, color and48px slot and was reused; no new media or replacement asset needed. Other slide content is retained from the existing homepage, since only the first slide is exposed by the supplied frames.

## Configuration

- Registered exactly `Icon with text (custom)` in `sections/custom-section.liquid`, category `t:general.content`. Existing named presets and placement guards preserved.
- Updated existing homepage instance `icon_text_cards_qT6mLV` in place; type remains `custom-section`, order and every other section unchanged.
- Composition reuses existing Carousel → three Slide blocks → Group (existing Icon + Heading on first slide) + Text. Copy, original SVG and entrance settings preserved.
- One slide desktop/mobile, no navigation, dot pagination both viewports. Existing autoplay default remains off.
- Dot controls keep24×24px button hit areas with8px visuals. Stored pagination padding12px plus8px internal centering produces20px visible body-to-dot spacing. Stored section bottom88/40px plus8px after the centered dot produces96/48px visual bottom spacing. This preserves full touch geometry without internal scrolling on button focus. Explicit measured desktop/mobile spacing takes precedence over the skill's usual48px desktop pagination convention.

## Custom pagination

Added `dot` to all13 carousel type selectors with Bullets; kept their defaults/options and all unrelated schemas. Liquid allow-lists preserve the value through shared renderers. Shared Swiper pagination creates normal clickable bullets for dot; dedicated CSS keeps both states round8px, center spacing24px, hit area24px and visible focus. Dot does not use autoplay progress clipping. Manual-loop Carousel and Slideshow accept dot and retain their cleanup. Existing Product media `dots` stays available. Resource page pagination and Timeline controls remain unchanged.

## Verification and limits

- Existing development preview9300 picked up local files. Measured section height241.1875px desktop /217.1875px mobile, matching reference rounding. First icon loaded48×48;3 dot buttons render with8×8px visuals and24px hit width; no section horizontal overflow. Clicking the second dot changed active slide and clicking first restored PFAS content.
- Found a focus-scroll issue in an intermediate8px pagination row: the24px hit area overflowed and scrolled Swiper16px, clipping the icon. Final CSS uses the natural24px row and compensated configuration described above. Chrome computer-use connection subsequently timed out; final post-correction desktop/mobile screenshots and focus-scroll recheck remain unverified. Earlier screenshot `/tmp/kinetra-icon-text-mobile.png` is intermediate evidence, not final approval.
- All existing schema fields/defaults/options/presets were compared with pre-task snapshots; only new dot options and the requested named preset were added. Homepage sections/order outside the target remain unchanged.
-32 relevant existing tests pass (shared Carousel, autoplay clock, product-media pagination, slideshow images). Additional isolated manual-loop runtime checks pass for dot, bullets and progress_bar: rendering, accessible labels, logical selection, click navigation and teardown.
- Broader Testimonial suite has one pre-existing failure: expects `sections/testimonial-carousel.liquid` max_blocks1 but current schema is50. That file was not touched.
- Shopify CLI Theme Check:0 errors,8 warnings in existing unrelated files. Shopify toolkit validator unavailable because bundled `@shopify/theme-check-common` is missing.
- Full Add section/duplicate/reorder/save/reload Theme Editor testing and all13 consumers' visual matrix were not performed. No Theme Editor Save, explicit theme push, publication, Git commit or Git push.

Remaining preset gaps: mobile desktop-browser scrollbar yields328px content at requested375px viewport, compared with343px Figma; first-slide wrapping remains two lines and height matches. Other two slides retain their existing text-only content; no unobserved Figma icons were invented. Final visual/focus recheck is pending the Chrome connection recovering.

## Template synchronization follow-up

Owner requested synchronizing template configuration too. Updated the matching `icon_text_cards_qT6mLV` instance in `templates/index.spinel-sync.json` from the current `templates/index.json` composition, preserving template-specific disabled state, unrelated sections and order. Also normalized the registered Add section preset to ordered block arrays (template block maps/block_order are not the preset schema format). Recursive normalized comparison confirms the named preset and both template instances match in settings, block order, nested settings, copy and SVG. About-us service promises share a display name but have different content and are outside the supplied homepage Figma scope.

## Remaining benefit icons — owner follow-up

Owner supplied Figma48190:8554 and48002:1657 and requested the remaining two icons with the first icon color. Read exact48190:8554 through CUA/Chrome after MCP edit-access failure: three-column reference visibly pairs partly-cloudy-day-outline with Opacity tested in daylight and cool-to-dry-outline with Sweat-wicking verified. Reused the corresponding original48×48 Figma exports already downloaded in `/tmp/virelle-icon-text-assets/daylight.svg` and `sweat.svg`; retained their paths/viewBox/root dimensions, changing only white fill to#181818 as explicitly requested. Added the existing Icon block before Heading in the second/third intro Group in the registered `Icon with text (custom)` preset and matching instances in both index templates. All other content/settings/order are preserved. Recursive comparison passes for the preset and both templates; SVG XML/dimensions/path presence/color and diff whitespace checks pass. Both preview-tab access and fresh preview navigation timed out, so rendered final verification remains unavailable. This supersedes the earlier gap stating these two slides have no icon. No implementation edits, new icon library values, store Save, explicit push, publication or commit.
