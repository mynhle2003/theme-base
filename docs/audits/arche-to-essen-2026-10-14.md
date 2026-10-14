# Arche → Essen local update receipt — 2026-10-14

## Tra nhanh update theo Arche

Tất cả mã dùng prefix **ARCHE-ESSEN**; `applied` là đã nhận code, chưa đồng nghĩa verified live. Bảng này là trạng thái mới nhất; receipt chi tiết bên dưới giữ bằng chứng và lịch sử.

| Mã update đầy đủ | Revision | Trạng thái mới nhất | Commit đích |
| --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | applied | 116e03ed |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | applied — local follow-up | after 116e03ed; uncommitted |
| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-SIZE-GUIDE-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-FORM-INPUT-CSS-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-BLOCK-ANIMATION-001 | 1 | applied | 116e03ed |
| ARCHE-ESSEN-PRODUCT-BADGES-002 | 1 | shared logic applied; appearance/settings pending | 116e03ed |

Source tracker: [Arche handoff](../../../arche-theme/docs/variant-updates/arche-to-essen.md). Target branch `theme/essen-theme`, HEAD before application `acb809562bf01eb1f301e88439504d3c93bfc141`. Shared patches read from the local Arche working tree; animation implementation comes exclusively from pinned personal main `e84d0689249b5ae26d3c5c066c90348e4aae06f4`. Initial application was committed and pushed as `116e03edddb1783ae6fdafb4ae7cc17e076636dc` on 2026-10-14. The Image card follow-up below is a subsequent local patch. Preview upload and publication were not performed.

| Update | Revision | Target status | Before / application evidence |
| --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | applied; live editor pending | Real Essen CSS returned desktop gaps 18/8px or 6.4px and mobile 14.4/7.2px despite 24/8px settings. Shared snippet now binds both axes to the desktop/mobile tokens; no blocking collection-tabs navigation override. Zero, wrap and 0/8/16/24/100px pass local Chrome QA. |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | applied; live editor pending | Segment fill at half cycle had scaleX(.5); native/manual-loop fills also scaled. Shared clip-path reveal now keeps radius and uses existing Essen track tokens. Native/manual-loop progress retains Essen’s original square fallback (0px); explicit radius tokens remain supported. Reconciled both the earlier bullet overrides and clock rules to prevent their higher specificity from blocking shared animation. Number clock, timer logic, dimensions, colors, hover/focus behavior and navigation settings preserved. No Only icon markup or source preset copied. |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | applied; live editor pending | Six qualifying section roots lacked @theme: icon-with-text-custom, text-marquee-custom, promo-grid-custom, gallery-custom, contact-form-custom, image-comparison-custom. Added root @theme; preserved private entries, @app, all settings/presets and nested allow-lists. Comparison table and both testimonials already complied and were skipped. Custom section has no actual `(custom)` name/preset and was left unchanged. |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | applied — local follow-up; live editor pending | Initially pending at 116e03ed. Owner subsequently reported the upper seam caused by pixel rounding and requested the Arche fix. Target DOM has the same media consumer; applied the exact image-only 1px overscan rule. See follow-up below. |
| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | applied; live editor pending | Target runtime fixture changed viewed media from 10 to 20 for a size choice. Fieldset now exposes resolved swatch intent, picker emits updateMedia and gallery guards filtering/rebuild/navigation while always updating currentVariantId. Commerce updates still run; missing intent retains old event semantics. |
| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | applied; live editor pending | Real target Header CSS returned start for parent Center/Right. Desktop/mobile fallback now reads --text-align-default; explicit Header alignment still wins. Block schema/preset unchanged. This is the composition Header block, separate from concurrently edited storefront Header section. |
| ARCHE-ESSEN-SIZE-GUIDE-001 | 1 | applied; live editor pending | Trigger lacked Tertiary classes and CSS forced accent color, font, underline and padding. Uses shared btn/btn-tertiary and label/text/underline contract; removed both private trigger rules. Dialog controls and shared opening runtime preserved. |
| ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | 1 | applied; live editor pending | No Show tags setting or card tag resolver existed. Added default-false checkbox/locale, caller gating, up to three escaped nonempty tags, legacy prefix stripping, primary/secondary tones. Preserved Essen badge geometry/typography and all saved settings. Product-page manual badges unchanged. |
| ARCHE-ESSEN-FORM-INPUT-CSS-001 | 1 | applied; live editor pending | First Theme Check reported only five settings-count warnings; post-patch full check reported the seven input modifier warnings described by the source. Added the documented subset selector to the existing foundation :where rule. Final check removes all seven; declarations, specificity and exclusions unchanged. |
| ARCHE-ESSEN-BLOCK-ANIMATION-001 | 1 | applied; live editor pending | Target runtime only selected explicit leaf hooks; target Chrome fixture gave zero article Image card animations. Runtime now byte-identical to pinned main and article animates once without child double transform. Restore body motion switch, remove old head boot and old Rotate words runtime CSS. No replacement schema exists at this main revision: identity mapping preserves existing controls/hooks and every preset/saved value. |
| ARCHE-ESSEN-PRODUCT-BADGES-002 | 1 | applied shared logic; appearance/settings pending | Status-tag exclusion transferred without consuming the three-tag limit; primary tag text uses #111111. Arche Poppins/10px geometry and current color/radius/Show tags values were not applied without confirming the target appearance gap; existing Essen appearance/settings remain intact. No catalog changes. |

All rows marked applied remain unverified on a live storefront/Theme Editor. Badge appearance/settings remain pending target evidence. Image seam follow-up is now applied locally as explicitly requested by the owner. Do not treat source QA or local fixtures as live verification.

## Preservation and QA

- Snapshot compared all 424 actual Type/Delay entries in section/block presets, template/group JSON and saved settings before/after; every entry is identical, including None/zero. Actual saved delays: 0/50/100/150ms. Mapping is identity by file and setting path. No block ID, content, media, order or non-animation setting was migrated/reset. All template JSON and config/settings_data.json are byte-identical to target HEAD.
- 39 scoped tests pass against target code: picker media intent, gallery modes, overlay modules, native/fallback/translated swatches, product controls, tag escaping/gating/status precedence, animation lifecycle and card ownership. Five tag render tests use the target snippets rather than source snippets.
- 40 Chrome progress cases pass using actual target CSS/JS and Swiper vendor modules: 375/768/1920px, LTR/RTL, bullets/segments, reduced motion, grouped native loop/non-loop, horizontal/vertical/opposite, destroy/reinit. 42 additional cases pass for gap 0/8/16/24/100px with target collection-tabs CSS/wrapping, inherited/explicit Header alignment and image-card motion on/off/reduced motion. Initial before/after fixture also confirms parent alignment and half-cycle progress at all three widths.
- Final Shopify CLI Theme Check: **0 errors / 5 existing ExcessiveSettingsCount warnings**. Recommended rules and threshold unchanged. JS syntax and git diff --check pass. AI Toolkit Liquid validation could not start because its bundled @shopify/theme-check-common dependency is absent; used installed Shopify CLI Theme Check instead.
- Existing tests/product-media-variant.test.cjs has three failures on both original HEAD runtime and updated runtime; these older assertions assume Featured product media behavior absent from target HEAD. Two other cases pass. No new failures introduced and no assertion was weakened.
- Customization checker: update-owned implementation paths are recorded; whole-repo coverage remains incomplete for sections/footer.liquid and sections/header.liquid outside this update. Header/Announcement work appearing concurrently was preserved and excluded from this receipt.
- Live desktop/mobile storefront, keyboard interactions, opening/closing/reopening overlays and size guide, all gallery layouts, Theme Editor add/remove/duplicate/reorder/select/deselect/save/reload remain outstanding. Manual-loop clone-edge behavior also needs live QA beyond the transferred logical-index binding. Tests/fixtures stayed outside delivery files.

## Lịch sử ARCHE-ESSEN-IMAGE-CARD-001 — follow-up 2026-10-14

- **Mã/revision:** ARCHE-ESSEN-IMAGE-CARD-001, revision 1. Nguồn `arche-theme`, branch `theme/arche-theme`, commit được đối chiếu `4fd63fc3e87089e59538dbeb134af2518b485941`, rule trong `blocks/image-card.liquid`. Link hướng dẫn: [fix mép ảnh của Arche](../../../arche-theme/docs/variant-updates/arche-to-essen.md#arche-essen-image-card-001--vệt-đen-ở-mép-ảnh).
- **Lịch sử:** commit Essen `116e03ed` chưa nhận mã này (pending vì chưa tái hiện live). Owner sau đó báo vệt/border trên ảnh do làm tròn pixel và yêu cầu chuyển fix Arche. Đích vẫn là branch `theme/essen-theme`, patch local sau `116e03ed`; trạng thái mới **applied**, chưa verified live. Không tạo mã mới cho cùng fix.
- **Thay đổi:** chỉ thêm `.image-card__media > .background-media:has(.background-media__image)` với `inset: -1px`, `width: calc(100% + 2px)`, `height: calc(100% + 2px)`. Khớp rule source; kích thước phải cộng 2px vì media nền vốn có width/height 100%. Khung card vẫn clip phần ảnh tràn, che khe nền tối ở tọa độ pixel lẻ. Đây là xử lý khe render; không tắt border merchant chọn.
- **Phạm vi:** giữ nguyên schema/preset, ảnh/content, aspect ratio, overlay, radius và hover. Crop tăng tối đa 1px mỗi cạnh. Video không có background-media__image nên không nhận rule. Promo-grid không có override selector media riêng cần reconcile.
- **QA Essen:** 36 Chrome fixture cases PASS dùng stylesheet Image card/media-background thật: 375/768/1920px, ratios 1:1/5:4/4:5, tọa độ 13.5px và width 287.5px, square/rounded, ảnh/video, overlay và hover. Ảnh overscan đúng 1px/cạnh, video giữ inset 0 và kích thước card; khung/overlay không đổi. Theme Check 0 errors/5 existing warnings; git diff --check PASS. QA fixture xác minh hình học của patch, không thay cho screenshot trước/sau trên storefront hoặc Theme Editor save/reload.
- **Release:** follow-up chưa commit/push/upload/publish. Các thay đổi Header/Announcement ngoài scope giữ nguyên.
