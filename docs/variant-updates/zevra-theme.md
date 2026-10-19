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

## ZEVRA-PAGINATION-001 — Tách Show pagination theo thiết bị (2026-10-19)

- Source: Zevra, branch `theme/zevra-theme`; thay đổi đã có trong commit `78e41958` (`feat(zevra): refine section presets and carousel controls`), hiện được giữ tại HEAD `f3b626435482dc4da9f35e4ceea0f99820fd851b`.
- Phạm vi chuyển: contract bật/tắt pagination độc lập Desktop/Mobile ở mọi section/block có pagination trên cả hai thiết bị. Không chuyển layout, nội dung, media hoặc lựa chọn preset riêng Zevra cùng với contract này.
- Target: chưa chỉ định cho lần áp dụng; quan hệ variant hiện được theo dõi là Mara ↔ Zevra. Trạng thái `pending`: chỉ ghi nhận nguồn, chưa audit hoặc áp dụng contract này vào Mara; chưa có target commit/QA. Không thay đổi các mốc fork/review/applied SHA ở đầu tài liệu.

### Contract và phạm vi file

- Checkbox `show_pagination_on_desktop` và `show_pagination_on_mobile` điều khiển riêng từng viewport, giống Collection tabs. Type dùng chung; spacing/position theo thiết bị chỉ hiện khi checkbox tương ứng bật. Các điều kiện `visible_if` phải nằm trong giới hạn 250 ký tự.
- Section owners: `sections/collection-tabs.liquid`, `sections/collection-list-thumbnails.liquid`, `sections/slideshow.liquid`, `sections/hotspot-full-width-carousel.liquid`.
- Block owners: `blocks/collection-list-items.liquid`, `blocks/blog-list.liquid`, `blocks/product-callout-gallery.liquid`, `blocks/shop-the-look-products.liquid`, `blocks/product-list.liquid`. `blocks/collection-tab.liquid` nhận cấu hình từ section; không tạo checkbox trùng ownership.
- Dependency: `snippets/pagination-visibility.liquid`, `snippets/swiper-pagination.liquid`, `snippets/product-collection-grid.liquid`, `assets/critical.css`, `assets/swiper-carousel.css`, cùng consumer `sections/related-posts.liquid`. Chuyển mapping runtime/markup và navigation offsets theo thiết bị cùng schema; không chỉ copy checkbox.
- `blocks/carousel.liquid` đã có hai checkbox độc lập. Press (`blocks/press-quotes.liquid`) hiện cũng có hai checkbox và CSS theo breakpoint; kiểm tra contract thực tế ở đích trước khi quyết định cần patch.
- `blocks/_product-media.liquid` và `sections/promo-grid-custom.liquid` chỉ có slider trên mobile: giữ setting mobile hiện có, dùng nhãn Show pagination on mobile; không thêm checkbox Desktop không có consumer. Pagination phân trang resource và navigation Timeline không phải checkbox Show pagination dùng chung cần tách.

### Migration và hành vi

- Giữ ID desktop có sẵn; với Slideshow/Hotspot, chuyển giá trị cũ `show_pagination` sang `show_pagination_on_desktop`. Checkbox mobile mới mặc định true cho các owner trước đây dùng chung.
- Khi có giá trị lưu rõ ràng, migrate checkbox cũ sang cả hai thiết bị trong section/block presets, JSON templates và group/settings liên quan: false → false/false, true → true/true. Giữ các giá trị độc lập nếu đích đã có contract tương đương.
- Related posts chuyển hành vi mobile luôn bật thành default trong preset/cấu hình, để merchant có thể tắt. Không mang theo lựa chọn pagination riêng của homepage Zevra khi chuyển implementation.
- Render pagination khi ít nhất một thiết bị bật; bỏ markup khi cả hai tắt. Dùng `data-pagination-visible-desktop` / `data-pagination-visible-mobile` và breakpoint 768px; ẩn bằng `display: none`, không còn spacing hoặc bullet nhận focus ở viewport đã tắt. Fraction controls cũng phải theo visibility này.
- Navigation offsets theo đúng checkbox của từng thiết bị; lời gọi snippet không truyền visibility vẫn tương thích consumer cũ. Giữ lifecycle resize và Theme Editor của theme đích.

### Cách áp dụng và acceptance

1. Kiểm tra theme đích còn dùng checkbox chung trong từng owner. Nếu đã tách tương đương, ghi `skipped` kèm bằng chứng; không copy nguyên file đè custom của variant.
2. Chuyển schema, mapping Liquid, dependency snippet/CSS/runtime và migration cấu hình cùng nhau. Review preset riêng với merchant trước khi đổi lựa chọn hiển thị của theme đích.
3. Test đủ bốn tổ hợp Desktop/Mobile: on/on, on/off, off/on, off/off; kiểm tra markup, computed visibility, spacing, keyboard focus và navigation offsets trên hai viewport. Kiểm tra thêm resize, Theme Editor checkbox/save/reload và nhiều instance.
4. Chạy test pagination và Theme Check ở đích; ghi target revision và QA thực tế trước khi đổi trạng thái sang `applied` hoặc `verified`.

Bằng chứng nguồn: [audit pagination](../audits/pagination-visibility-2026-10-19.md), [customization record](../theme-customizations/zevra-theme.md#2026-10-19--independent-pagination-visibility), `tests/pagination-visibility.test.cjs`. Lần kiểm tra lại trong phiên này: 5/5 test pagination pass. Audit gốc nêu rõ giới hạn browser/mobile và Theme Editor QA; chưa xác nhận toàn bộ owner bằng trình duyệt.

Preset riêng Zevra: Collection tabs homepage/Add section có Desktop on, Mobile off. Yêu cầu mới tắt Mobile cho cả 4 Featured collection trong templates và preset Add section được đưa vào cùng commit với bản ghi này (`sections/featured-collection.liquid`, `templates/index.json`, `templates/collection.json`, `templates/index.spinel-sync.json`); tra commit bằng `git log -- sections/featured-collection.liquid`. Đây là cấu hình riêng, không thuộc patch contract chia sẻ mặc định.
