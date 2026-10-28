# Novaire Hero preset and height calibration

## Current correction — 2026-10-28

Re-read original Figma nodes desktop `47052:10820` and mobile `47284:7125` in file `vsUDZS8CZ0sa1pruNqu0eb`. Desktop MCP succeeded; mobile reached the View-seat call limit, so both nodes were checked in CUA/Chrome Properties. Banner sizes remain1920×800 and375×550. The displayed padding **20 is a variable name, resolving to80px top and bottom on both nodes** (`data-tooltip="80px"`; desktop MCP also returned `py-[var(--20,80px)]`). This supersedes the historical20px interpretation below.

Hero full/classic adds section padding outside the grid row controlled by `--hero-min-height`. Keep that box model and set existing controls in both `sections/hero.liquid` preset and `templates/index.json` hero instance: top/bottom80px, mobile top/bottom80px, customize_mobile_padding=true, heights=medium. Medium desktop=800−80×2=640px (64rem); mobile=550−80×2=390px (39rem). Root rem=10px. No implementation changes beyond existing fixed-height calibration.

| Device | extra_small | small | medium | large | extra_large | Scale from prior calibration |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Desktop before px | 467 | 622 | 800 | 1000 | 1200 | |
| Desktop after px | 374 | 498 | 640 | 800 | 960 | 640/800 |
| Mobile before px | 355 | 426 | 550 | 674 | 798 | |
| Mobile after px | 252 | 302 | 390 | 478 | 566 | 390/550 |

Other options are proportionally scaled from the pre-task values and rounded to whole pixels. Adapt/Full screen and non-preset schema unchanged. No global tokens or other sections changed.

Read-only preview verification used the already-running local preview `http://127.0.0.1:9301/` for unpublished192827490603, store layouthub-template-v2.myshopify.com. Its CLI watcher reflected local edits; no separate push/publish or Theme Editor save was run. Desktop viewport1935×1080/client1920: grid container640px, surface padding80/80px, total Hero800px, client/scroll1920px. Mobile viewport390×812/client375: container390px, padding80/80px, total550px, client/scroll375px. Original two-woman media crops and centered content remain visually consistent at both sizes; no horizontal overflow. This validates the height/padding correction, not all outstanding Hero criteria.

Theme Check: exit0, zero errors, eight warnings outside the changed Hero files. Skill now resolves token px, subtracts actual padding, and uses fallback40px desktop /20px mobile per side only when Figma has no Hero padding.

Sheet Homepage H18:J19 updated and A16:J20 read back: Lần2/Khớp, formulas and measured totals recorded in H; original F/G historical measurements and unrelated criteria retained. Button box remains Chưa xác minh.

## Historical calibration — superseded above

Date: 2026-10-27. Branch: `theme/novaire-theme`. Configuration under build-preset; no custom implementation or theme deployment.

## Source and mapping

Figma file `vsUDZS8CZ0sa1pruNqu0eb`, desktop `47052:10820`, mobile `47284:7125`. MCP View-seat quota blocked design context. CUA/Chrome read the original source frames and screenshots: desktop 1920×800; mobile 375×550; centered NEW COLLECTION / SUMMER & BEYOND / SHOP NOW. Properties show vertical flow, 20px top/bottom inset and color scheme 3. Both frames use the same two-woman photograph with separate crops.

The first homepage section retains ID `hero` and order, now type `hero`. Existing group → header → eyebrow/heading and button blocks express the centered composition. Group gaps remain 40px desktop / 32px mobile, header gap 16px. Hero uses existing classic/full/image controls, medium heights, centered positions, custom 960px content width, scheme-3, transparent overlay (the source export already contains the gradient). Removed duplicate group horizontal inset because Hero supplies page margins. Add section preset and template share settings and the ordered block tree. Slideshow presets equal local `main` exactly; non-preset schema and implementation preserved.

## Existing height-option scale

File: `snippets/hero-styles.liquid`. Only fixed `--hero-min-height` mappings changed; root rem unit is 10px. Medium maps to the measured source height; rounded other values retain increasing order. Adapt, Full screen, IDs, defaults, labels and breakpoints remain unchanged.

| Device | Option | Before px | After px |
| --- | --- | ---: | ---: |
| Desktop | extra_small | 420 | 467 |
| Desktop | small | 560 | 622 |
| Desktop | medium | 720 | 800 |
| Desktop | large | 900 | 1000 |
| Desktop | extra_large | 1080 | 1200 |
| Mobile | extra_small | 400 | 355 |
| Mobile | small | 480 | 426 |
| Mobile | medium | 620 | 550 |
| Mobile | large | 760 | 674 |
| Mobile | extra_large | 900 | 798 |

Scale desktop 800/720; mobile 550/620. Review upstream Hero height mappings on base updates; retain this theme calibration deliberately.

## Store media reuse

Store `layouthub-template-v2.myshopify.com` verified from this theme initialization record and preview target. Reused existing media ledger entries; no duplicate upload or content mutation needed:

- Desktop: `gid://shopify/MediaImage/46827221385515`, `shopify://shop_images/novaire-hero-desktop.avif`, 1920×800.
- Mobile: `gid://shopify/MediaImage/46827236917547`, `shopify://shop_images/novaire-hero-mobile.avif`, 375×550.

Both permanent CDN URLs in `docs/theme-init/novaire-media.md` returned HTTP 200 on this task. CDN reports source image/avif. Collection CTA retains `shopify://collections/new-in-novaire`.

## Validation and limits

- Passed: settings IDs/options/ranges; Slideshow presets equality to main; unchanged non-preset schemas/Liquid; unchanged other homepage sections and section order; git diff --check.
- Theme Check: exit 0, zero errors and seven warnings outside the changed Hero/Slideshow files (five ExcessiveSettingsCount, one OrphanedSnippet, one LiquidComplexity).
- Desktop/mobile final rendered crop, type, wrapping, spacing and button geometry remain UNVERIFIED. Local preview port 9300 is closed; starting the Shopify preview would upload local code, outside this local-only request. No claim of visual parity is made. Existing typography/palette may still differ from Figma.
- No Git commit/push, theme upload, publication, or Theme Editor save.
