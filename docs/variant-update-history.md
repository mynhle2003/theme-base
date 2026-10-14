# Lịch sử update variant — Essen

Theme đích: `essen-theme`, branch `theme/essen-theme`.

Doc này là nhật ký các đợt nhận update từ theme khác để đối chiếu mã, revision, nguồn và commit đích. Ghi thêm sự kiện khi apply, QA, commit/push hoặc upload; giữ lịch sử cũ. Hướng dẫn và trạng thái từng mã được duy trì trong [doc nguồn Arche → Essen](../../arche-theme/docs/variant-updates/arche-to-essen.md); bằng chứng đích nằm trong [receipt Essen](audits/arche-to-essen-2026-10-14.md). Khác biệt implementation được ghi tại [customization record](theme-customizations/essen-theme.md).

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
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | Ảnh tràn 1px/cạnh để che khe do làm tròn pixel | Patch local sau `116e03ed`; applied, chưa commit/push |

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

**Trạng thái:** applied local. Chưa có commit đích riêng, chưa push/upload/publish. Khi release, thêm sự kiện với commit thực tế vào đợt này; không gán fix Image card cho commit `116e03ed`.

## Cách ghi đợt update tiếp theo

Mỗi đợt mới ghi ngày, theme/branch nguồn và đích, source commit hoặc trạng thái working tree, HEAD đích trước sửa, mã/revision được yêu cầu, gap đã xác nhận, file sửa, dữ liệu được bảo toàn, QA đích và phần pending/conflict/skipped. Dẫn tới receipt chi tiết thay vì chép lại toàn bộ bằng chứng.

Khi đã commit/push hoặc upload/publish, bổ sung sự kiện với SHA hoặc theme ID thực tế. Giữ mã của cùng fix; ghi revision mới khi nguồn thay đổi sau lần đích đã nhận. Khi tra cứu, đối chiếu **mã + revision + commit đích**, không chỉ tên file hoặc ngày. Cập nhật bảng tra nhanh theo sự kiện mới nhất và giữ các đợt cũ để truy vết.
