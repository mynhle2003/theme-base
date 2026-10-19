# Zevra variant updates

- Relationship: Mara (`theme/mara-theme`) ↔ Zevra (`theme/zevra-theme`).
- Fork: `b99df73e385d9acc37872335f6d58abad3dc1a79` on 2026-10-16; source local HEAD equals origin.
- Shared: all inherited section/block/snippet/CSS/JS implementations and dependencies.
- Separate: homepage/header/footer composition, content/media and brand identity. Style Guide inherited unchanged.
- Base checkpoint stays in customization record; variant SHAs do not replace it.
- Peer registration: `peer-registration-pending`; this request authorizes Zevra, not edits to Mara.
- Reverse direction Zevra → Mara starts at fork SHA; no post-fork changes applied.

| Source branch | Fork SHA | Reviewed through SHA | Last applied source SHA | Target result commit | Pending IDs |
| --- | --- | --- | --- | --- | --- |
| theme/mara-theme | b99df73e385d9acc37872335f6d58abad3dc1a79 | b99df73e385d9acc37872335f6d58abad3dc1a79 | b99df73e385d9acc37872335f6d58abad3dc1a79 | inherited at fork; no new commit | none |

| Fix ID / origin branch + SHA | Symptom and shared files | Direction | Decision | Target files / result | Validation | Next action |
| --- | --- | --- | --- | --- | --- | --- |

| zevra-product-card-title-20261019 / theme/zevra-theme, local uncommitted | Product card titles inherited uppercase heading styling, weight400 and22.4px line-height instead of the supplied Figma | Zevra only; no transfer to Mara | Retain as theme-specific custom | `assets/critical.css`, `.product-card__title`: weight500, line-height1.5 (24px at16px), letter-spacing0, text-transform:capitalize. Existing font-family mapping and desktop/mobile16px title-size settings retained. | Theme Check:0 errors,6 inherited warnings; git diff --check passed. Browser verification unavailable because local browser use was disabled in Work settings. | Preserve this scoped override during base/variant updates; do not copy it to Mara without a separate request. |

## Custom riêng Zevra — Product card title (2026-10-19)

Yêu cầu: title sản phẩm trên Product card giống Figma desktop `47062:13287` và mobile `47230:15718`, file `bH9A5237I07NWt19Cua9gL`.

- Phạm vi: tất cả Product card sử dụng `.product-card__title` trong theme Zevra.
- Typography: giữ size16px desktop/mobile theo cấu hình hiện có; font weight500; line-height1.5 tương đương24px; letter-spacing0; `text-transform: capitalize` thay cho uppercase toàn bộ.
- Giữ mapping font-family, giới hạn dòng và dữ liệu tên sản phẩm hiện có; không sửa typography heading toàn theme.
- File implementation: `assets/critical.css`. Chi tiết ownership nằm trong [customization record](../theme-customizations/zevra-theme.md#2026-10-19--product-card-title-typography).
- Khi update base hoặc đồng bộ variant: giữ custom này ở Zevra; review riêng nếu upstream chạm cùng selector. Không tự chuyển sang Mara, không ghi nhận là shared fix đã được chuyển giữa hai branch.
- Chưa commit/push; chưa có SHA triển khai cho thay đổi này. Các mốc fork/review/applied SHA ở trên được giữ nguyên.

## Image card — Đồng bộ ratio và thêm Custom (2026-10-19)

- Phạm vi: `blocks/image-card.liquid`, cho cả desktop và mobile.
- Đồng bộ value, tên hiển thị và thứ tự ratio theo block Image hiện tại: Square (1:1); Portrait (4:5), (3:4), (2:3), (9:16); Landscape (16:9), (3:2), (4:3), (5:4). Giữ các value `ratio_*`, option Fill và default `ratio_1_1` để bảo toàn cấu hình đã lưu.
- Thêm option `custom` với label dùng chung `t:options.image_ratio.custom` cho `height_desktop` và `height_mobile`.
- Desktop: `image_ratio_custom_width_desktop` (W) và `image_ratio_custom_height_desktop` (H) chỉ hiện khi `device == 'desktop'` và `height_desktop == 'custom'`.
- Mobile: `image_ratio_custom_width_mobile` (W (mobile)) và `image_ratio_custom_height_mobile` (H (mobile)) chỉ hiện khi `device == 'mobile'` và `height_mobile == 'custom'`.
- W/H mặc định 16/9; render qua snippet dùng chung `image-ratio-value`, fallback về 16 hoặc 9 khi giá trị tương ứng không dương. Chỉ xuất CSS ratio custom cho thiết bị đang chọn Custom; desktop/mobile được cấu hình độc lập.
- Validation: schema JSON hợp lệ; kiểm tra điều kiện hiển thị với desktop/mobile × Custom/Fill/preset đạt; `git diff --check` đạt; Theme Check không có lỗi. Block có cảnh báo `ExcessiveSettingsCount`: 42 settings, vượt ngưỡng khuyến nghị 40. Chưa kiểm tra trực tiếp trong Theme Editor/storefront.
- Trạng thái: thay đổi local chưa commit/push; chưa chuyển sang Mara. Khi đồng bộ variant, review cả schema và mapping CSS ratio; giữ nguyên các mốc fork/review/applied SHA ở trên cho đến khi thực sự áp dụng.


## Image cards — Focal point theo Figma (2026-10-19)

- Sửa crop bằng focal point trong Shopify Files: `zevra-hero-by-the-way.avif` → `50.0017% 0.3731%`; `zevra-hero-peekaboo.avif` → `50% 0.5597%`. Không sửa Liquid/CSS/JS.
- Desktop Figma neo ảnh sát mép trên; mobile dùng Fill với tâm ngang 50%. Giữ ratio Custom 960/800 desktop, 375/500 mobile trong preset và homepage đầu template.
- Focal point là metadata media trên store, không nằm trong theme preset. Khi chuyển store hoặc upload lại ảnh, đặt lại focal point; giữ metadata khi đồng bộ base/variant. Manifest: `docs/theme-init/zevra-media.json`.
- Đã xác nhận storefront nhận object-position mới và cả hai ảnh tải thành công trên desktop 1280px. Chi tiết và giới hạn: `docs/audits/image-cards-preset-2026-10-19.md`.
