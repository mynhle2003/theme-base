# Lịch sử update variant — Essen

Theme đích: `essen-theme`, branch `theme/essen-theme`.

Doc này là nhật ký các đợt nhận update từ theme khác để đối chiếu mã, revision, nguồn và commit đích. Ghi thêm sự kiện khi apply, QA, commit/push hoặc upload; giữ lịch sử cũ. Hướng dẫn và trạng thái từng mã được duy trì trong [doc nguồn Arche → Essen](../../arche-theme/docs/variant-updates/arche-to-essen.md); bằng chứng đích nằm trong [receipt Essen](audits/arche-to-essen-2026-10-14.md). Khác biệt implementation được ghi tại [customization record](theme-customizations/essen-theme.md).

## Mốc update mới nhất — hoàn tất code đến đợt 5

Đã nhận code đến **đợt 3** (12 mã Header/Size Guide/Press/Lighthouse r1), **đợt 4** (ARCHE-ESSEN-HEADER-PRESET-007 r1) và **đợt 5** (ESSEN-HEADER-LOGO-FIGMA-001 r1). Tổng 14 mã mới sau commit 058c2b51. Trạng thái implementation/configuration: applied; kiểm tra local đã đạt. Đã commit/push tại `34a8ca27`; receipt release bên dưới ghi SHA đầy đủ.

Phần còn chưa hoàn tất: PRODUCT-BADGES-002 appearance/settings theo Figma nguồn; QA live storefront/Theme Editor và đo Lighthouse production. Upload preview/publish chưa thực hiện. Các thay đổi Header/Announcement riêng ngoài phạm vi và test tương ứng vẫn giữ local. Không đánh dấu verified cho các phần chưa QA live.

## Tra nhanh — cập nhật đến 2026-10-14

`applied` nghĩa là đã nhận code. `verified` chỉ dùng khi đủ QA đích theo acceptance; pass fixture hoặc Theme Check chưa thay thế QA live. Commit/push, upload preview và publish là các sự kiện riêng.

| Mã update | Revision đã nhận | Thay đổi | Commit đích / trạng thái |
| --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | Gap tab nhận setting desktop/mobile, gồm giá trị 0 | `116e03ed`; applied |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | Progress reveal giữ bán kính bo góc, không scale fill | `116e03ed`; applied |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | Sáu section `(custom)` mở public theme blocks bằng root `@theme` | `116e03ed`; applied |
| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | Đổi size giữ ảnh đang xem; đổi swatch mới chuyển gallery | `116e03ed`; applied |
| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | Header block kế thừa alignment từ section | `116e03ed`; applied |
| ARCHE-ESSEN-SIZE-GUIDE-001 | 1 | Size guide dùng Button Tertiary, bỏ CSS trigger riêng | `116e03ed`; applied |
| ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | 1 | Show tags mặc định false, tối đa ba tag, escape/prefix/tone | `116e03ed`; applied |
| ARCHE-ESSEN-FORM-INPUT-CSS-001 | 1 | Input modifier có owner trong foundation CSS | `116e03ed`; applied |
| ARCHE-ESSEN-BLOCK-ANIMATION-001 | 1 | Runtime về pinned personal main; giữ preset/saved animation | `116e03ed`; applied |
| ARCHE-ESSEN-PRODUCT-BADGES-002 | 1, một phần | Loại status tags trùng và primary tag text #111111 | `116e03ed`; shared logic applied, appearance/settings pending |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | Ảnh tràn 1px/cạnh để che khe do làm tròn pixel | `595a3548`; applied, đã commit/push |
| ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 | 1 | Legacy modal/invalid/default → popup | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-LOGO-002 | 1 | Independent desktop/mobile position | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-GAP-003 | 1 | Separate menu/column gap and action gap | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-SEARCH-004 | 1 | Text icon hidden at desktop | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-BUTTON-005 | 1 | Shared theme-button owns all three variants/icon/full-width/new-tab. Target saved banners have Primary, empty links/labels and bottom padding 40px | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-LOAD-006 | 1 | Visible logo/menu/actions align before/after initialization | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-PRESS-001 | 1 | Activate/reset Press scopes | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-LIGHTHOUSE-CSS-001 | 1 | Extracted 122749 raw CSS bytes from target owner stylesheet blocks, byte-identical | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002 | 1 | Per-scan membership/row-top caches | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003 | 1 | Hidden menu images loading=lazy, sizes auto with fallback | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-LIGHTHOUSE-RUNTIME-004 | 1 | Below-fold runtime marker/export and autoplay neighbor preload only | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-LIGHTHOUSE-ACCESS-005 | 1 | Meta description fallback, article-title link context, localized focus-visible skip link, existing account-menu guard. Main already has tabindex=-1 | `34a8ca27`; applied, đã commit/push, live QA pending |
| ARCHE-ESSEN-HEADER-PRESET-007 | 1 | Header preset/instance theo Arche, giữ logo Essen | `34a8ca27`; applied, đã commit/push, live QA pending |
| ESSEN-HEADER-LOGO-FIGMA-001 | 1 | Logo Header theo Figma 104/96/80px, giữ ảnh Essen | `34a8ca27`; applied, đã commit/push, live QA pending |

Tất cả mục applied trên còn QA live storefront/Theme Editor trước verified. Chưa upload preview hoặc publish trong các đợt ghi bên dưới.

## 2026-10-14 — Đợt 1: đọc doc, audit và nhận shared updates

**Đích trước sửa:** `acb809562bf01eb1f301e88439504d3c93bfc141` trên `theme/essen-theme`.

**Nguồn:** doc Arche → Essen ngày 2026-10-13 và patch từ working tree Arche được đọc tại thời điểm thực hiện. Các patch shared chưa được chốt thành một source commit duy nhất trong receipt ban đầu; không suy ra source revision từ HEAD Arche ở lần đọc sau. Riêng animation lấy đúng personal main `e84d0689249b5ae26d3c5c066c90348e4aae06f4`, không lấy runtime custom Arche.

**Mã nhận:** TAB-LAYOUT-001 r1, SLIDESHOW-002 r2, CUSTOM-SECTIONS-001 r1, VARIANT-PICKER-001 r1, HEADER-ALIGNMENT-001 r1, SIZE-GUIDE-001 r1, PRODUCT-CARD-TAGS-001 r1, FORM-INPUT-CSS-001 r1, BLOCK-ANIMATION-001 r1; PRODUCT-BADGES-002 r1 chỉ nhận shared logic. Tất cả dùng prefix `ARCHE-ESSEN-` như bảng tra nhanh.

**Bảo toàn:** giữ đủ 424 Type/Delay entries với identity mapping; template và `config/settings_data.json` byte-identical trước/sau. Không chuyển layout Only icon, preset, ảnh/content hoặc catalog riêng của Arche. Badge appearance/settings vẫn theo Essen. Ba custom section đã có `@theme` được skipped; `custom-section` không có tên/preset `(custom)` nên không sửa.

**Pending tại thời điểm đợt 1:** IMAGE-CARD-001 chưa áp dụng vì chưa có bằng chứng lỗi tại Essen; PRODUCT-BADGES-002 chưa nhận appearance/settings Figma Arche. Lịch sử này giữ nguyên, dù Image card được nhận ở đợt 2.

**QA:** 39 scoped tests PASS; 82 Chrome cases PASS (40 progress, 42 gap/alignment/motion). Theme Check 0 errors / 5 existing settings-count warnings; JS syntax và diff check PASS. Ba assertions cũ trong `product-media-variant.test.cjs` thất bại cả runtime HEAD ban đầu và patch; không phải regression mới. Customization coverage còn thiếu Header/Footer ngoài scope. AI Toolkit Liquid validator thiếu dependency; dùng Shopify CLI Theme Check. Chi tiết và giới hạn QA ở receipt đích.

### Sự kiện release của đợt 1

Owner yêu cầu chạy Theme Check, sửa lỗi nếu có rồi commit/push. Full Theme Check pass ở error level trên cả workspace và bản dựng từ Git index; chỉ còn 5 warnings cũ.

- Commit: [`116e03edddb1783ae6fdafb4ae7cc17e076636dc`](https://github.com/mynhle2003/theme-base/commit/116e03edddb1783ae6fdafb4ae7cc17e076636dc).
- Message: `fix(theme): apply shared Arche updates to Essen`.
- Phạm vi: 29 file thuộc đợt shared update; commit này **không có fix Image card**.
- Push: `origin/theme/essen-theme`; đã xác minh remote trỏ đúng commit.
- Header/Announcement đang sửa riêng và test liên quan được giữ local, ngoài commit này.
- Upload preview/publish: chưa thực hiện. Live QA: chưa verified.

## 2026-10-14 — Đợt 2: Image card theo Arche

**Mã:** `ARCHE-ESSEN-IMAGE-CARD-001`, revision 1; tiếp tục mã đã pending ở đợt 1.

**Nguồn:** `arche-theme`, branch `theme/arche-theme`, commit đối chiếu `4fd63fc3e87089e59538dbeb134af2518b485941`; rule trong `blocks/image-card.liquid`. **Đích:** patch local trên `theme/essen-theme` sau commit `116e03ed`.

Owner báo vệt/border phía trên ảnh do làm tròn pixel và yêu cầu áp dụng fix Arche. Essen có cùng consumer `.image-card__media > .background-media` nhưng chưa có overscan. Đã thêm riêng rule image-only:

```css
.image-card__media > .background-media:has(.background-media__image) {
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
}
```

Khung card clip phần tràn để che khe nền tối ở pixel lẻ. Không tắt border merchant chọn; giữ video, overlay, hover, radius, aspect ratio, schema/preset và tài nguyên. Crop tăng tối đa 1px mỗi cạnh.

**File thay đổi:** `blocks/image-card.liquid`; receipt và customization record được cập nhật cùng mã. Doc nguồn Arche cũng nhận lịch sử follow-up. Không chuyển ảnh/preset Arche.

**QA:** 36 Chrome fixture cases PASS với CSS Essen thật tại 375/768/1920px; ratios 1:1/5:4/4:5; tọa độ/kích thước pixel lẻ; ảnh/video, square/rounded, overlay và hover. Theme Check 0 errors / 5 warnings cũ; diff check PASS. Fixture xác minh hình học của patch; chưa có QA storefront/Theme Editor save/reload.

**Trạng thái:** applied; đã commit/push, live QA chưa verified. Chưa upload preview/publish. Fix Image card thuộc commit `595a3548`, không thuộc commit `116e03ed`.

### Sự kiện release của đợt 2 — 2026-10-14

- Commit code: [`595a354876e0e66cf381a3cb01d566c4a51bb809`](https://github.com/mynhle2003/theme-base/commit/595a354876e0e66cf381a3cb01d566c4a51bb809).
- Message: `fix(image-card): prevent fractional pixel seams`.
- Phạm vi: Image card và ba doc audit/customization/history, tổng cộng 4 file.
- Full Theme Check workspace và bản từ Git index: 0 errors / 5 warnings cũ; diff check PASS.
- Đã push tới `origin/theme/essen-theme`. Doc follow-up ghi SHA thực tế trong commit documentation kế tiếp.
- Các thay đổi Header/Announcement riêng vẫn local, ngoài release này.

## 2026-10-14 — Đợt 3: Header, Size Guide, Press và Lighthouse

Đích trước sửa: `058c2b511eba1f3e69842333ce7b205a19929494`. Nguồn Arche `theme/arche-theme`, HEAD `21e1dc5c` tại audit. [Receipt đợt 3](audits/arche-to-essen-round-3-2026-10-14.md) ghi nguồn theo từng mã, file đích, bằng chứng và giới hạn QA.

Nhận 12 mã revision 1 trong bảng tra nhanh: SIZE-GUIDE-DIALOG-002; HEADER-LOGO-002/GAP-003/SEARCH-004/BUTTON-005/LOAD-006; PRESS-001; LIGHTHOUSE-CSS-001/ANIMATION-002/MEDIA-003/RUNTIME-004/ACCESS-005 (prefix đầy đủ ARCHE-ESSEN). Đối chiếu các mã cũ đã nhận, không áp lại hoặc đổi preset theo source. Badge appearance/settings cũ tiếp tục pending.

Header baseline 31/41 case fail → 41/41 pass; Press 4/4 fail → 4/4 pass. QA đích: 80 scoped tests, 67 Chrome cases và sáu cache-parity comparisons PASS. Theme Check 0 errors/5 warnings cũ; JS syntax/diff check PASS. Trích nguyên CSS Essen của 29 owner thành asset synchronous, 122749 raw bytes, có SHA256 trong manifest. Đây không phải số đo production bundle hoặc điểm Lighthouse.

Giữ nguyên mọi preset/template/group/settings JSON và tài nguyên. Header có controls bổ sung, IDs/ranges cũ giữ nguyên; chỉ chuyển lazy marker/export của Scrolling cards, không lấy Fade/Scale/centering/preset Arche. Phần Header/Announcement đang sửa riêng vẫn giữ trong worktree.

Trạng thái: applied local; live storefront/Theme Editor QA chưa verified. Chưa commit/push/upload/publish đợt 3. Khi release, bổ sung SHA thực tế vào đợt này và doc nguồn theo cùng mã/revision.

## 2026-10-14 — Đợt 4: Header preset theo Arche, giữ logo Essen

**Mã:** ARCHE-ESSEN-HEADER-PRESET-007, revision 1. Owner yêu cầu Header preset giống Arche và chỉ giữ logo hiện tại. Đây là authorization riêng cho preset/content/resources Header vốn được loại khỏi phạm vi đợt 3.

Nguồn: Arche theme/arche-theme, code HEAD 21e1dc5c4e462625efd267ebb9b7ef641a8473a4, section preset và Header instance hiện hành. Đích: Essen theme/essen-theme, local sau 058c2b51 cùng các patch đợt 3 chưa commit. Chỉ chuyển presets của sections/header.liquid và sections.header trong sections/header-group.json; Header implementation và Announcement giữ nguyên.

- Sticky Always; separator Line; transparent header bật, scheme-3.
- Logo desktop Left/mobile Center; giữ hai file logo Essen thường/transparent, width desktop 104px/mobile 140px. config/settings_data.json byte-identical; không chuyển logo Arche hoặc logo mới từ Figma.
- Gap menu/actions desktop 64/24px; mobile customize bật 8/4px; vertical padding desktop 16px/mobile 10px.
- Navigation arche-header: body/sm, gap 28px, bỏ chevron; Search text/body/sm, Account text/body/sm, Cart icon/primary badge; bỏ Localization/divider như preset nguồn.
- Mega menu Menswear, submenu hai cột, banner width 49%, gap 32px; hai ảnh/copy Sweaters và T-Shirts cùng link search theo Arche. Banner content dưới ảnh, heading Custom 18px, Shop now Tertiary, bottom padding 6px. Đây là thay đổi preset được owner yêu cầu, không tạo menu hay upload ảnh mới trên store.

QA: preset và saved Header khớp chính xác nguồn; 20 block instances kiểm tra đệ quy theo types/setting IDs/options/ranges/order. Logo/config, Header implementation và phần group ngoài Header không đổi. Full Theme Check 0 errors/5 warnings cũ; diff check PASS. Resource readback và QA live storefront/editor còn pending. Trạng thái applied local; chưa commit/push/upload/publish đợt 4.

## 2026-10-14 — Đợt 5: preset width logo theo Figma

**Mã:** ESSEN-HEADER-LOGO-FIGMA-001, revision 1. Nguồn là [Figma Page người dùng gửi](https://www.figma.com/design/v6iKvP4OuW3y0A9bbxel5U/?node-id=44390-7749). Đọc high-fidelity context và screenshot Header Classic 47129:7653, Tablet 47180:13714, Mobile 47180:13713; logo slots 49592:12386 / 49592:12390 / 49592:12394. Kích thước design: 104×45px desktop, 96×42px tablet, 80×35px mobile.

Cập nhật current và named theme preset Spinel: logo_width=104, logo_width_tablet=96, logo_width_mobile=80. Theme trước chỉ có width desktop/mobile, nên thêm control global Tablet logo width, token --logo-width-tablet và sizes mapping tại Header: desktop >=992, tablet 768–991.98, mobile <=767.98px. Loại max-height 40/30px làm thu nhỏ artwork dù width đúng; giữ height auto và tỷ lệ ảnh gốc, không kéo méo hoặc crop logo.

Giữ nguyên references essen-header-logo.avif và essen-header-logo-transparent-white.avif; chỉ cập nhật width settings. Các settings khác và Header preset ở đợt 4 giữ nguyên. Width mobile 140px ở receipt đợt 4 là lịch sử; đợt 5 thay nó bằng 80px theo Figma. Đây là follow-up Figma cho Essen, không phải revision mới của patch nguồn Arche.

QA: 8 Chrome cases tại 320/375/767/768/991/992/1440/1920px với artwork Essen gốc 416×180 xác nhận width 80/96/104px, không bị max-height clip, height tự nhiên khoảng 34.62/41.54/45px. Các giá trị nằm đúng range/step schema. So sánh settings chỉ thay ba width, mọi resource/giá trị ngoài width giữ nguyên. Theme Check 0 errors/5 warnings cũ; diff check PASS. Applied local, live storefront/editor QA pending; chưa commit/push/upload/publish đợt 5.

## Cách ghi đợt update tiếp theo

Mỗi đợt mới ghi ngày, theme/branch nguồn và đích, source commit hoặc trạng thái working tree, HEAD đích trước sửa, mã/revision được yêu cầu, gap đã xác nhận, file sửa, dữ liệu được bảo toàn, QA đích và phần pending/conflict/skipped. Dẫn tới receipt chi tiết thay vì chép lại toàn bộ bằng chứng.

Khi đã commit/push hoặc upload/publish, bổ sung sự kiện với SHA hoặc theme ID thực tế. Giữ mã của cùng fix; ghi revision mới khi nguồn thay đổi sau lần đích đã nhận. Khi tra cứu, đối chiếu **mã + revision + commit đích**, không chỉ tên file hoặc ngày. Cập nhật bảng tra nhanh theo sự kiện mới nhất và giữ các đợt cũ để truy vết.

## 2026-10-14 — Release đợt 3–5: hoàn tất code đến đợt 5

- Commit code: [34a8ca27bbcc0c525b84bc8f4f9cf8b4f3c105cd](https://github.com/mynhle2003/theme-base/commit/34a8ca27bbcc0c525b84bc8f4f9cf8b4f3c105cd).
- Message: `feat(theme): apply Arche updates and Header presets`; 86 file, 14 mã mới thuộc đợt 3–5.
- Push thành công: `origin/theme/essen-theme`. Đợt 3 nhận 12 mã r1 từ Arche; đợt 4 nhận HEADER-PRESET-007 r1; đợt 5 nhận ESSEN-HEADER-LOGO-FIGMA-001 r1.
- Header preset theo Arche; kích thước logo theo Figma desktop/tablet/mobile 104/96/80px, giữ tài nguyên logo Essen.
- QA local: 80 scoped tests, 67 Chrome cases đợt 3, 8 logo breakpoint cases đợt 5 và 6 Liquid contract cases PASS. Full Theme Check trên workspace và snapshot Git index: 0 errors / 5 warnings ExcessiveSettingsCount cũ; staged diff check PASS.
- Các sửa Header/Announcement riêng trong assets/critical.css, sections/header.liquid, sections/announcement-bar.liquid và tests/announcement-bar-layout.test.cjs giữ local, ngoài release.
- Pending: PRODUCT-BADGES-002 appearance/settings; live storefront/Theme Editor QA và đo Lighthouse production. Chưa upload/publish; chưa đánh dấu verified.

Mốc tiếp tục lần sau: đọc bảng tra nhanh trước; code đã nhận đến đợt 5, không apply lại 14 mã trên. Hoàn tất phần pending hoặc nhận revision/mã mới rồi bổ sung sự kiện lịch sử.
