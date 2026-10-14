# Arche → Essen — đợt 3, 2026-10-14

Target `theme/essen-theme`, HEAD before update `058c2b511eba1f3e69842333ce7b205a19929494`. Source `theme/arche-theme`, clean HEAD `21e1dc5c` at audit; specific code revisions below. Source tracker: [Arche handoff](../../../arche-theme/docs/variant-updates/arche-to-essen.md). This is a subsequent local application, with no commit/push/upload/publish. Existing Header/Announcement worktree changes remain outside scope.

## Codes received

Every code below is revision 1, applied locally; live storefront/Theme Editor verification remains pending. Previous received revisions were not reapplied. PRODUCT-BADGES-002 appearance/settings stays pending as documented in the earlier receipt.

| Full code | Source revision | Target paths | Application / preservation |
| --- | --- | --- | --- |
| ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 | 4c01f5a8 | snippets/variant-picker.liquid | Legacy modal/invalid/default → popup; body-sm; drawer/mobile unchanged. |
| ARCHE-ESSEN-HEADER-LOGO-002 | 8cbc1913 | blocks/_header-logo.liquid; assets/header.js; blocks/_header-top.liquid; assets/critical.css | Independent desktop/mobile position; same nodes reparent on resize, retain focus, no duplicate. |
| ARCHE-ESSEN-HEADER-GAP-003 | ad3fc68d | blocks/_header-top.liquid; assets/critical.css; locales/en.default.schema.json | Separate menu/column gap and action gap; optional mobile overrides; 0 valid. Existing current/preset gap is 16; default action gap 16 preserves it. |
| ARCHE-ESSEN-HEADER-SEARCH-004 | ad3fc68d | blocks/_header-search.liquid | Text icon hidden at desktop; search_bar stays visible at 1024; mobile icon only. |
| ARCHE-ESSEN-HEADER-BUTTON-005 | 8cbc1913 + ad3fc68d | blocks/_mega-menu-banner.liquid | Shared theme-button owns all three variants/icon/full-width/new-tab. Target saved banners have Primary, empty links/labels and bottom padding 40px; no source Tertiary/6px settings copied. |
| ARCHE-ESSEN-HEADER-LOAD-006 | f4b52bb6 | assets/critical.css, Header first-paint rules only | Visible logo/menu/actions align before/after initialization; mobile toggle height matches existing 24px block. |
| ARCHE-ESSEN-PRESS-001 | c04c3a40 | assets/block-animations.js; assets/carousel-block.js | Activate/reset Press scopes; cancel finished fades, opacity-only selection transitions. |
| ARCHE-ESSEN-LIGHTHOUSE-CSS-001 | 04dc9f04 source owner inventory | 29 owner Liquid files and 29 target CSS assets | Extracted 122749 raw CSS bytes from target owner stylesheet blocks, byte-identical; synchronous stylesheet_tag; no source CSS geometry copied. |
| ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002 | f8433bb9 | assets/block-animations.js | Per-scan membership/row-top caches; no durable geometry cache; preserved timing datasets. |
| ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003 | f8433bb9 | blocks/_mega-menu-banner.liquid | Hidden menu images loading=lazy, sizes auto with fallback; original candidates/alt retained. |
| ARCHE-ESSEN-LIGHTHOUSE-RUNTIME-004 | 04dc9f04 | sections/scrolling-cards.liquid; assets/scrolling-cards.js; assets/slideshow.js | Below-fold runtime marker/export and autoplay neighbor preload only; no source Fade/Scale, sticky-centering or preset changes. Target module loader already equivalent and unchanged. |
| ARCHE-ESSEN-LIGHTHOUSE-ACCESS-005 | 04dc9f04 | snippets/meta-tags.liquid; snippets/theme-button.liquid; blocks/blog-card-button.liquid; layout/theme.liquid; assets/critical.css; locales/en.default.json; blocks/_header-account.liquid | Meta description fallback, article-title link context, localized focus-visible skip link, existing account-menu guard. Main already has tabindex=-1; kept it. |

## Before/after evidence

- Header target Chrome regression baseline: 10/41 pass, 31 fail. After: 41/41 pass, including independent Left/Center combinations, 320/375/768px resize round trips, Search types at 375/1024/1440px, gap inheritance, underline global toggle and 20 first-paint comparisons at 375/768/1024/1440/1920px. First-paint visible-content displacement <=1px.
- Press target baseline: 0/4 pass. After: 4/4 pass, including hidden quote activated after prior intersection callback, 1→2→1, animation none, fade cancellation and rapid final selection. Runtime/lifecycle/card suite 24/24 pass. Source old custom runtime was not restored.
- Product controls/overlay/modules/heading suite: 41/41 pass against target. Scrolling cards adapted lifecycle suite: 3/3 pass, asserting the existing Essen scale effect rather than unrequested source centering/Fade. Total scoped tests: 80 pass (including 12 target blog tests). Fixtures remain outside delivery.
- Real Liquid Size Guide + target overlay runtime: 25 Chrome cases pass at 320/375/768/1024/1440px for default/modal/popup/invalid/drawer, centered desktop popup, bottom sheet mobile, body-sm font, Escape and focus return. One additional actual module-loader Chrome case confirms no Scrolling cards request while 5000px below fold, then one import and scale initialization near viewport. Together with Header: 67 Chrome cases pass.
- Six direct before/after animation cache comparisons pass: 1/24/100 cards at 4/2 columns. For 24 cards, row reads 600→24 and list queries 24→1; for 100, 10100→100 and 100→1. Type/delay/stagger datasets and played delays are identical. These are fixture read counts, not Lighthouse score gains.
- [CSS manifest](arche-to-essen-round-3-2026-10-14-css.json) records owner, asset, bytes and SHA256. All 29 asset bodies are byte-identical to the target stylesheet content before extraction; owner changes are solely stylesheet replacement. No duplicate inline owner stylesheet remains. Raw extracted byte count does not equal measured production-bundle savings. Owners already using dedicated CSS were not recaptured, and source-only assets were not copied.
- All non-Header schemas, every section/block preset and all template/group/settings JSON remain byte-identical to the pre-update snapshot. Header control IDs/constraints remain; only position_mobile and independent action/mobile gap controls were added. No saved resource/color/content/order/animation was changed. Logo source 1200px image-candidate changes were excluded.
- Six additional Liquid contract cases pass: description/fallback escaping, accessible article context, account menu absent/present and lazy banner sizes/candidates.
- Full Theme Check: 0 errors / 5 existing ExcessiveSettingsCount warnings; rules/threshold unchanged. JS syntax and diff whitespace pass.

## Outstanding verification

Live Theme Editor add/remove/duplicate/reorder/select/deselect/save/reload; full long-content and zoom-200% Size Guide; all menu widths/controls, sticky and transparency states on live Essen; lazy banner network/cold-cache quality and no-JS menu behavior; every extracted owner’s live initial geometry and Section Rendering API; repeated runtime/editor unloading and all autoplay states; measured Lighthouse cold-cache before/after. No claim of production performance score improvement.

HEADER-BUTTON-005 renderer is applied; no clipping configuration migration was required by current saved Essen banners. Existing padding controls remain available for a future target-specific Tertiary clipping case. Theme-module-loader.js is unchanged because it already supports the required marker, cached module initialization, boxed-ancestor observation and editor replay/unload contract.

Customization coverage: update-owned paths are recorded; checker still reports sections/footer.liquid and sections/header.liquid outside this update, as in the prior baseline. Do not report full coverage PASS.

## Subsequent Header preset request

The preservation receipt above describes đợt 3 at application time. Owner subsequently authorized Arche Header preset parity, preserving only the current Essen logos. ARCHE-ESSEN-HEADER-PRESET-007 revision 1 in [history đợt 4](../variant-update-history.md) tracks that separate configuration change. It intentionally updates saved Header/preset values after the earlier no-preset-change receipt; these new values were not part of đợt 3.

## Release checkpoint — 2026-10-14

Đợt 3–5 đã commit và push trên `origin/theme/essen-theme` tại `34a8ca27bbcc0c525b84bc8f4f9cf8b4f3c105cd`. Code hoàn tất đến đợt 5; 14 mã mới, gồm Header preset Arche và logo Figma 104/96/80px với tài nguyên Essen giữ nguyên. Full Theme Check workspace/index 0 errors / 5 warnings cũ. Chi tiết và phần pending xem [lịch sử variant](../variant-update-history.md). Live QA và upload/publish chưa thực hiện.
