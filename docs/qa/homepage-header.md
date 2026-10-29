# Norden — Homepage — Header

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng7–17](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A7:J17); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:546 / M10012:1373 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Header cao132px; Search D768×48px / M343×44px, nền#F2F2F2, bo tròn; border1px#E6E6E6; menu9 nhãn,16/24px600 (Desktop)|Khớp các thuộc tính đã nêu; padding M16px, row gap12px; menu Mobile mở/đóng được|||Khớp|
|Chung (Desktop, Mobile)|Header logo|Chiều cao|D174×46px; M140×37px|D174×40px; M140×30px|Giới hạn max-height4rem/3rem; chưa có setting chiều cao||Chưa khớp|
|Chung (Desktop, Mobile)|Location link / Account / Cart|Màu icon action; Text Location (Desktop)|#1A1A1A|#4D4D4D|Dùng màu heading riêng cho action; tránh đổi body-color global làm lệch text khác||Chưa khớp|
|Chung (Desktop, Mobile)|Cart|Chiều rộng wrapper|44px|34px|_header-two-row.liquid đặt padding-inline-end:0; chưa có setting riêng||Chưa khớp|
|Chung (Desktop, Mobile)|Header Search / Chevron|Kích thước icon|20×20px|16×16px|Chevron hardcoded16px; chưa có setting kích thước riêng||Chưa khớp|
|Chung (Desktop, Mobile)|Header Search / All|Typo: line-height|24px (Body/16,150%)|16px (line-height:1)|Header Search đặt line-height:1; chưa có setting riêng||Chưa khớp|
|Chung (Desktop, Mobile)|Header Search / Input|Line-height control|24px|Input computed16px (line-height:1); pseudo-placeholder normal|Đặt input line-height24px theo Body16/150%; không suy chiều cao glyph placeholder từ khung input.||Chưa khớp|
|Desktop|Layout|Gap icon→label (Location link)|4px|3.5px|Gap .35rem trong _header-link.liquid; chưa có setting riêng||Chưa khớp|
|Desktop|Header Menu / Sale|Màu chữ|#C62E1A|#1A1A1A|Chưa có setting màu riêng cho link Sale; tránh đổi màu toàn menu||Chưa khớp|
|Mobile|Header Search / Category|Padding phải|12px|14px|Chỉnh padding phải12px scoped Mobile; giữ khung76px.||Chưa khớp|
|Mobile|Header Search / Category|Gap label → chevron|8px|10px|Chỉnh gap8px scoped Mobile; không đổi gap Desktop12px đang đúng.||Chưa khớp|

## Bằng chứng và diễn giải

Search input: Figma Body16/150%=24; runtime computed line-height16px, pseudo-placeholder normal. Dòng lỗi chốt ở thuộc tính line-height của input, không suy chiều cao glyph từ khung input. Category Desktop padding24/gap12 đúng; lỗi padding phải14vs12 và gap10vs8 chỉ Mobile. Border/radius/menu9nhãn và icon geometry đã kiểm; giữ các sai lệch đã ghi.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden Homepage — Header

Kiểm ngày 26/10/2026, STT2. Chỉ đọc; **chưa hoàn tất mọi thuộc tính; đã đồng bộ phần đã kiểm Desktop/Mobile lên Sheet hàng13–21 và xác minh style**.

## Kết quả Mobile mới nhất

Browser Use đã hoạt động lại. Tab riêng xác nhận preview **Norden local preview Draft**, theme192706117931. Viewport386px, scrollbar11px, vùng nội dung375px; số đo box theo content375px, không gọi innerWidth375px.

- Header375×132px, padding16px; Search343×44px tại(16,109), nền#F2F2F2; gap hai hàng12px, khớp nguồn.
- Logo nguồn140×37px, runtime140×30px do max-height3rem. Cùng nguyên nhân với Desktop; đã gộp hàng14.
- Actions nguồn171.5×44px (Fill), căn phải, gap4px; runtime140×44px (Hug), gap4px. Chênh wrapper Fill/Hug không tự là lỗi vì các icon vẫn căn phải; Cart độc lập34×44px so với44×44px. Location/Account wrapper44×44px khớp.
- Icon Menu/Location/Account/Cart nguồn frame24×24px; màu nguồn#1A1A1A, runtime#4D4D4D. Cart nguồn xác nhận qua selection colors trong riêng node shopping-cart. Đã gộp lỗi màu action ở hàng15; không suy màu từ tên component.
- Search category nguồn76×44px, padding trái16/phải12px, gap8px; chevron20×20px. Runtime category76×44px, padding16/14px, gap10px; chevron16×16px (hardcoded). Báo kích thước chevron riêng; không gộp mọi gap/padding thành lỗi nhiều thuộc tính.
- Nhãn All nguồn Body/16,150%=24px, màu#1A1A1A. Runtime Instrument Sans16px, line-height16px; ghi lỗi line-height, không báo thêm box chữ lệch do typography. Nguồn text rộng20px, runtime19.328px không làm đổi dòng; không custom width để bù metrics.
- Placeholder nguồn Body/16,24px, #999999; runtime font16px, input line-height16px, pseudo-placeholder normal. Chưa chốt line-height placeholder từ box input; giữ chưa xác minh.
- Menu Mobile đã mở/đóng qua UI, đủ9 link. Không kết luận style drawer khớp vì chưa có frame drawer trong nguồn được giao.
- Evidence: `/private/tmp/norden-homepage-qa-20261026/header-figma-mobile-new.json`, `header-runtime-mobile-new.json`. Bản native cũ có mixed selections không dùng cho các thông số trên.
- Còn cần đọc radius Search, bounds/stroke icon, border Header và một số chi tiết Desktop trước khi kết luận toàn section.

### Bổ sung sau đối chiếu chung

- Search chevron nguồn20×20px ở cả Desktop/Mobile; runtime16×16px. Lỗi chuyển sang Chung.
- Nhãn All cùng Body/16, line-height24px; runtime line-height16px ở cả hai viewport. Lỗi chuyển sang Chung.
- Radius source Search type ngoài trái9999px, field ngoài phải9999px; runtime form1000px, hai bên bo tròn hoàn toàn tương đương. Không báo khác số radius khi hình bo tròn đã khớp.
- Border Header nguồn1px#E6E6E6. Desktop runtime border-bottom cùng màu; Mobile dùng inset box-shadow0 -1px#E6E6E6, tương đương hiển thị. Không kết luận thiếu border từ CSS border:0 riêng lẻ.
- Đã đọc đủ9 nhãn menu nguồn; typography chung Instrument Sans SemiBold60016px/150%, tracking0 khớp runtime. Sale là ngoại lệ màu: nguồn#C62E1A, runtime#1A1A1A. `_header-menu.liquid` không có setting màu riêng cho một link Sale; không đổi màu toàn menu để bù.
- Menu Mobile nguồn24×24px, vector(4,6), stroke1.5px; Location vector(4,2), Cart vector(2.05,2.05), stroke1.5px. Source màu#1A1A1A, runtime action#4D4D4D. Placeholder line-height vẫn cần kiểm riêng; không gọi toàn Header hoàn tất.

## Desktop đã xác minh

- Header hiển thị đủ hai hàng: logo/search/action và menu9 mục. Khung hiển thị từ y37 đến y169 =132px, khớp Figma. Outer wrapper DOM chỉ68px vì hàng dưới overflow/sticky; không báo68px thành lỗi chiều cao Header.
- Menu Bestsellers: Figma Instrument Sans600 SemiBold16px/150%=24px, tracking0, #1A1A1A; preview cùng family/weight/size/line-height/color. Box chữ Figma83px vs runtime82.59375px gần sát, không đổi layout; chênh width được chấp nhận theo quy ước metrics/làm tròn.
- Menu nguồn9 link, gap token8=32px; khoảng cách các link runtime32px. Các label runtime: Bestsellers, Living Room, Bedroom, Dining & Kitchen, Outdoor, Office, Rugs & Decor, Sale, About Us. Chưa đọc từng label nguồn nên chưa kết luận nội dung9/9.
- Search nguồn768×48px (Search type140px, field627px, gap1px), nền#F2F2F2; runtime768×48px, category140px, nền#F2F2F2. Placeholder đúng nội dung và màu#999999; nguồn Instrument Sans40016px/24px, runtime font16px400 nhưng input line-height16px/placeholder normal, chưa chốt tiêu chí line-height/box text.
- Store Locator nguồn Instrument Sans40016/24px, #1A1A1A; preview family/weight/size/line-height khớp nhưng chữ và icon #4D4D4D. Account/Cart SVG runtime cũng#4D4D4D; source vector Account#1A1A1A. Chưa đo Mobile nên chưa gộp lỗi Chung.
- Account source frame24×24px, vector nội bộ16×18px tại(4,3), stroke1.5px; preview icon assigned slot SVG24×24 với path cùng hình user, tọa độ tương ứng x4..20/y3..21, stroke1.5px. Kích thước SVG phải tính stroke; không đổi frame xuống16×18px.

## Sai lệch Desktop có bằng chứng

| Thành phần | Figma | Preview | Hướng xử lý |
| --- | --- | --- | --- |
| Header logo | Frame ảnh174×46px | IMG174×40px, object-fit contain; asset intrinsic174×45px | Local `_header-logo.liquid` giới hạn max-height4rem=40px. Chỉ có setting logo width, chưa có height; không gắn Lần1 khi chưa chứng minh preset sửa được. |
| Store Locator Text / icon | #1A1A1A | #4D4D4D | `_header-link.liquid` dùng body-color; phải xem tác động scheme/global trước khi đề xuất đổi body color. |
| Account icon | #1A1A1A | #4D4D4D | `_header-account.liquid` dùng body-color; chưa sửa. |
| Layout gap icon→label Store Locator | 4px (token1) | 3.5px (.35rem) | Khoảng cách riêng trong `_header-link.liquid`; schema chưa có gap control. Không bù bằng padding section. |
| Cart wrapper |44×44px|Anchor34×44px, SVG24×24px|Đã có số đo nhưng cần truy constraint trước khi chốt cách sửa.|

## Bằng chứng và phần còn lại

- Nguồn [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323), [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382).
- Preview public [Norden local preview Draft](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931), content width1920px, DPR1.
- Evidence local `/private/tmp/norden-homepage-qa-20261026/header-figma-desktop.json`, `header-runtime-desktop.json`. Các số đo bổ sung trong lượt CUA đã đọc nhưng chưa lưu mọi chi tiết vào JSON; bảng trên giữ kết quả được quan sát.
- Copy as SVG thử qua UI không trả dữ liệu clipboard; đã xóa file SVG rỗng của lượt. Đối chiếu icon qua UI zoom2738%, thông số vector và SVG runtime hiển thị trong DOM; không ghi đã export SVG thành công.
- Cần kiểm: Cart hình/stroke/màu nguồn, Search type label/icon/radius/padding cụ thể, toàn bộ Menu labels, border dưới Header, Mobile tất cả phần con và trạng thái menu/search.
- Tab Figma nguồn mới2048916195 và preview2048916198 đã bị đóng khi lượt bị ngắt; Browser Use sau đó bị tắt. Tiếp tục native Computer Use, xác minh đúng tab trước mọi thao tác. Bản tạm chung hiện có thêm Homepage2/3 do công việc khác: chỉ node10012:544 và10012:1371 thuộc cleanup QA Norden; giữ mọi node khác.

### Checkpoint kết nối mới nhất

Người dùng đã xác nhận tạm dừng agent khác và bật Browser Use. Sau reset CUA, getState vẫn trả browsers=[] và lỗi Browser Use bị tắt trong Work settings; điều khiển app Codex để xác minh settings bị chặn vì lý do an toàn. Chưa ghi các hàng Header lên Sheet. Payload dự thảo `/private/tmp/norden-homepage-qa-20261026/header-pending-sheet.tsv`, dự kiến chèn6 hàng trước13 sau khi đọc live lại. Native menu chèn hàng đã thử nhưng chưa xác minh thành công; screenshot cuối xác minh Our Favorites vẫn ở13–14.

### Đồng bộ Sheet đã xác minh

Đã chèn6 hàng trước Our Favorites bằng Google Sheets menu search, ghi và đọc lại Header ở13–18. Our Favorites chuyển tới19–20; G3:G4 đã sửa tham chiếu lỗi thành hàng20 và UI báo Đã lưu vào Drive. Đã bật wrap, các hàng tự giãn đủ nội dung. Bằng chứng `/private/tmp/norden-homepage-qa-20261026/sheet-header-synced.png`. Merge nhóm Header và chip màu vẫn cần hoàn thiện; dropdown validation kế thừa hiện diện.

Cart width34px do `_header-two-row.liquid` đặt padding-inline-end:0 trong khi paddingkhung10px; chưa có setting riêng, chưa gắn Lần1.

</details>
