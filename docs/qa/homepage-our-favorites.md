# Norden — Homepage — Our Favorites

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng95–96](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A95:J96); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:720 / M10012:1490 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Padding section|Desktop: trên/dưới 80px; Mobile: trên/dưới 56px|Desktop: 80px; Mobile: 56px|||Khớp|
|Chung (Desktop, Mobile)|Image card|Hiển thị / khung card|4 card có ảnh và product card; section D 612.67px / M 1784.67px|Recheck 27/10: cả 4 card vẫn cao0px sau khi cuộn vào viewport; section D160px/M184px, nội dung không hiển thị.|Kiểm tra CSS Image card và cách cấp chiều cao trong Columns; chưa kết luận sửa được bằng preset||Chưa khớp|

## Bằng chứng và diễn giải

Đã cuộn vào viewport và đợi qua các thao tác khác:4card vẫn cao0px, Dsection160/M184. Có tên/ảnh trong DOM không chứng minh đã hiển thị. Không chấm thuộc tính card bị ẩn là đạt. Đây là lỗi render cần sửa trước khi QA lại chi tiết card.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden Homepage — Our Favorites

Kiểm ngày 26/10/2026. Template `templates/index.json`, instance `aike_favorites`, type `custom-section`, STT12 trong toàn homepage (gồm Announcement bar/Header). [Sheet hàng66–67](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A60:J61).

## Recheck27/10/2026

Cuộn trực tiếp vào section và đo khi font loaded, animation đã ổn định: Dcontent1920,section160,4card0px; Mcontent375,section184,4card0px, aspect-ratio auto. Screenshot vẫn không có card. Giữ Chưa khớp, cập nhật G61 ngay; G3:G4 thamchiếu61. Nhận định từ DOM có image/text không chứng minh card hiển thị.

Bằng chứng mới trong `/private/tmp/norden-homepage-qa-20261026/`: `favorites-recheck-desktop-20261027.json`, `favorites-recheck-mobile-20261027.json`, PNG cùng tên, `sheet-favorites-recheck.png`. Sheet được đọc lại CSV sau cập nhật, style giữ đúng.

## Kết quả hiện hành

**Chưa khớp: bốn Image card đều cao0px trên Desktop và Mobile, mất toàn bộ nội dung card trên giao diện.** Padding section đã khớp. Chưa hoàn tất typography, màu, crop/radius và product card con do lỗi render này.

| Tiêu chí | Figma | Preview | Trạng thái |
| --- | --- | --- | --- |
| Layout Desktop | 4 card trên một hàng, section1920×612.67px | 4 cột rộng388px nhưng card cao0; section1920×160px chỉ còn padding | Chưa khớp |
| Layout Mobile | 4 card xếp dọc, section375×1784.67px | Card rộng343px, cao0; section375×184px =112px padding +3 gap24px | Chưa khớp |
| Padding trên/dưới | D80px; M56px | D80px; M56px | Khớp |

## Truy nguyên chỉ đọc và hướng xử lý

- Cả4 `.image-card` có computed `aspect-ratio:auto`, height0px, `visibility:visible`, opacity1; ancestor Columns và media cũng bị co chiều cao. Đây không chỉ là ảnh lazy-load chưa tải: kích thước card đã0 và nội dung bị clip ngay cả sau cuộn tới vùng card.
- DOM chứa tên/giá sản phẩm: Wishbone recess chair $419, Desk lamp $139, Modern Desk $595, Seoul dining chair $415. Không coi DOM có nội dung là đã hiển thị đúng.
- Config đã chọn `height_desktop/mobile:custom` và tỷ lệ6:7; inline custom properties ratio0.8571428571428571 hiện trên DOM. Bốn cột `height:fill`.
- Không thấy link stylesheet `component-blocks-image-card.css` trong DOM preview. Local `assets/component-blocks-image-card.css` có rule aspect-ratio cho Image card; `snippets/image-card-content.liquid` xuất biến ratio. Đây là dấu vết chẩn đoán, chưa kết luận duy nhất rằng asset thiếu là nguyên nhân gốc.
- Hướng xử lý: kiểm tra việc nạp CSS Image card và cách cấp chiều cao trong Columns trước; chưa xác minh có thể sửa bằng preset nên **Lần fix để trống**. Không đề xuất đổi padding đúng để bù. Không thực hiện sửa code/config trong QA.

## Nguồn và bằng chứng

- [Desktop nguồn](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323), [Mobile nguồn](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382).
- Bản copy được phép: Desktop10012:544, Mobile10012:1371, pageDraft4:3; Collection list thứ3 trong mỗi frame là Our Favorites. Giá trị section/padding đọc từ UI, không suy từ thumbnail.
- [Public preview](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931), bar hiển thị Norden local preview Draft. Viewport content1920px và375px; DPR1.
- Local evidence `/private/tmp/norden-homepage-qa-20261026/`: `desktop-boxes.json`, `mobile-boxes.json`, `our-favorites-mobile.json`, `our-favorites-mobile.png`, `desktop-copied-section-properties.json`, `mobile-copied-section-properties.json`.
- Screenshot Mobile đã chụp khi card nằm trong viewport, section rect top168.0625px, bottom352.0625px; cả4 card vẫn height0.

</details>
