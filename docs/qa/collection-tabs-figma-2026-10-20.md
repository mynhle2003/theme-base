# Collection tabs — Figma QA — 2026-10-20

Kết luận: **chưa khớp hoàn toàn**. Kiểm tra instance homepage Virelle `collection_tabs_ihC66t` trong `templates/index.json`, không phải preset mới trong Add section. Lượt này chỉ đọc theme/store, tạo báo cáo và evidence; không sửa theme/config/catalog, không Save Editor hay deploy.

## Nguồn và phương pháp

- Desktop: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48002-1687 — frame **1920 × 1098.5**.
- Mobile: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-20121 — frame **375 × 753**; card con `48096:20132`.
- Figma MCP trả về usage limit. Dùng CUA/Chrome profile đã xác minh đúng email sau khi người dùng cho phép đọc riêng popup profile. Figma account hiển thị Layouthub Dev. Không sửa Figma.
- Preview: http://127.0.0.1:9300/#shopify-section-template--28476595634475__collection_tabs_ihC66t
- Desktop: viewport CSS 1935 × 1250, scrollbar 15px, client width **1920**, visualViewport.scale 1, fonts loaded.
- Mobile: viewport CSS 390 × 1100, scrollbar 15px, client width **375**, scale 1. Có đọc bổ sung viewport 375/client 360. Đây là viewport override, **chưa có device emulation loại bỏ scrollbar**; các giá trị `vw` vẫn dựa trên 390, không được gọi là bản render mobile 375px tuyệt đối. Ví dụ font tab lên 30.3871px thay vì 30px ở viewport 375.
- Figma desktop zoom 60%, mobile 87%; kích thước dựa Properties/selection label, không suy từ thumbnail. Giá trị Gap/Padding dạng token số được giữ nguyên khi chưa resolve, không coi token 12 là 12px.
- Evidence mới: `output/collection-tabs-qa-2026-10-20/`: `figma-desktop.jpg`, `figma-mobile.jpg`, `figma-mobile-card-properties.txt`, `preview-desktop.jpg`, `preview-mobile.jpg`, `measurements.json`.

## Đối chiếu

| Thuộc tính | Figma | Thực tế | Độ lệch | Trạng thái | Evidence |
| --- | --- | --- | --- | --- | --- |
| Desktop section height | 1098.5px | 1130.5px | +32px | mismatch | Properties frame; measurements desktop.root |
| Desktop content width | 1820px | 1820px, inset 50px | 0 | matched | Properties Section header/Row; desktop.scope |
| Desktop header height | 97px | 129px = 21 + 48 + 60 | +32px | mismatch | Properties header; eyebrow/tab bounding boxes |
| Desktop eyebrow → tab gap | 16px, từ 97 − 21 − 60 | 48px | +32px | mismatch | Header/child Properties và DOM |
| Desktop product row height | 657.5px | 657.5px | 0 | matched | Properties Row; desktop.card |
| Mobile content width | 343px | 343px tại client 375 | 0 | matched | Properties header; mobile.scope |
| Mobile card width/height | 304 × 480px, portrait 4:5 | 284.5 × 455.625px; ảnh 284.5 × 355.625 | −19.5px width, −24.375px height | mismatch | Card Properties; mobile.card/image. Cần recheck device emulation nhưng chênh lệch carousel hiện rõ |
| Mobile header height | 69px = 21 + 12 + 36 | 89.46875px = 21 + 32 + 36.46875 | +20.46875px | mismatch | Header Properties; mobile eyebrow/tab rect |
| Mobile section height | 753px | 749.09375px tại client 375 | −3.90625px tổng; các sai lệch header/card bù nhau | mismatch | Frame Properties; mobile.root. Không dùng tổng gần nhau để kết luận khớp |
| Product order, tên 4 mẫu đầu | Bra → Halter → Long Sleeve → Jacket | Cùng thứ tự/tên | Không thấy sai thứ tự | matched | Hai screenshot desktop/preview và DOM |
| Giá 3 mẫu Bra/Halter/Jacket | $45.00 | $45.00 | 0 | matched | Screenshot và DOM |
| Giá Long Sleeve | $45.00 thường | Sale $45.00 + gạch $55.00 | Thêm compare-at và màu sale | mismatch | Screenshot desktop Figma/preview, DOM |
| Badge | Mẫu đầu Sold out, các mẫu sau không có New/Sale ở frame desktop | Bra New, Halter New, Long Sleeve Sale | Sai trạng thái/badge | mismatch | Figma first-card Sold out=true, custom badge=false; DOM/catalog inventory |
| Quick add mobile | Nền đen, icon trắng, card Quick add=true | Nền trắng rgb(255,255,255), icon tối rgb(28,28,28) | Đảo màu | mismatch | Figma mobile screenshot; computed quickAdd |
| Swatch | Desktop đầu xám/xám; mobile đầu xám/nâu; Halter đỏ; Long Sleeve xanh | Bra Black/Gray; Halter Burgundy/Taupe; Long Sleeve Charcoal | Khác màu/số lượng | mismatch | Screenshot và DOM label; không sửa catalog trong QA |
| Shop all mobile | 108 × 44px | 109.28125 × 44px, nền #1F1F1F | +1.28125px width | mismatch | Actions Properties và CTA computed/rect |
| Tab selected/outline | Best Sellers solid; 2 tab inactive outline, palette #181818/#999999 | Solid #181818, outline #999, white fill, stroke 2.5px paint-order stroke | Logic/màu cơ bản cùng; độ dày chuẩn chưa đọc đủ | unverified | Screenshot và computed getPropertyValue. Không kết luận pixel-perfect stroke |
| Shop all & chuyển tab | Có CTA trong frame, không có motion spec | CTA hiện; chọn Under $40 đổi selected và link; tab cuộn vào strip | Runtime đạt kiểm tra thao tác, không suy Figma motion | not-applicable | CUA click, selected/URL/scrollLeft readback |

## Nguyên nhân và hướng xử lý

1. **P2 — Header spacing, cả hai breakpoint.** `templates/index.json` instance đặt `gap_desktop=48`, `gap_mobile=32`. `sections/collection-tabs.liquid` dùng cùng gap cho cả composition và controls group. Group eyebrow/tab vì vậy có khoảng cách 48/32 thay vì 16/12. Desktop sai đúng +32px trong tổng section. Hướng sửa: tách spacing bên trong header/tab khỏi gap giữa header, product row và CTA; không giảm mọi gap cùng lúc.
2. **P2 — Card mobile nhỏ hơn mẫu.** `assets/product-collection-carousel.js` dùng slidesPerView=1.2 cho chế độ peek; tại content343 và gap8, card = (343 − 0.2×8)/1.2 = 284.5px. Figma card304px. Hướng sửa: hỗ trợ kích thước peek/card theo thiết kế cho Collection tabs; kiểm tra lại device 375px không scrollbar trước khi chốt CSS. Không đổi global carousel cho mọi section thiếu kiểm tra consumer.
3. **P2 — Catalog/badge/price/swatch.** Product đầu có inventory20 trong rendered DOM nên không sold out, có tag New; Long Sleeve có compare-at55 nên giá sale là đúng theo dữ liệu nhưng khác frame. Khác biệt nằm ở catalog/config hiển thị, chưa chứng minh lỗi tính giá. Cần quyết định demo stock/badge và màu biến thể theo đúng frame; giữ nguyên store trong lượt QA.
4. **P2 — Mobile quick add.** Wrapper dùng scheme-3 và button computed nền trắng; Figma là nền đen. Liên quan `config/settings_data.json`, product-card action scheme, `assets/virelle.css` và stylesheet product card. Hướng sửa: chỉnh override riêng theme theo đúng consumer, tránh đảo toàn bộ button scheme.
5. **P3 — CTA width mobile.** Cao44 đúng; chênh rộng1.28125px có thể do font/weight/padding. Truy nguyên typography/button tokens trước khi cố định width.

## Chưa xác minh

- Chưa đối chiếu đầy đủ font Figma đã resolve, line-height/tracking từng text và numeric stroke alignment/width. Preview đọc Roboto Condensed 700 50/60 desktop, 700 ~30.387/36.4645 mobile; title500 18/27, priceRoboto14/21. Không đánh dấu typography pixel-perfect chỉ vì tên font có vẻ đúng.
- Chưa đối chiếu toàn bộ Style Guide modes/schemes; chỉ palette và output liên quan section.
- Chưa kiểm tra Add section preset mới, lifecycle Theme Editor, save/reload, keyboard/a11y đầy đủ, full carousel swipe hay release/performance.
- Screenshot preview có độ mềm ở bản capture; không tự kết luận source ảnh hoặc filter runtime bị mờ dựa trên capture này.
- Không chạy lại Theme Check vì lượt này không sửa code/config; kết quả test lượt trước là evidence lịch sử, không thay visual QA.

**Bàn giao:** bố cục chính, thứ tự sản phẩm, desktop row height, content width và CTA đã có; section còn mismatch spacing, mobile card size, badge/price/swatch và màu quick add. Không đạt kết luận giống Figma hoàn toàn.

## Cập nhật: sửa bằng setting/preset

Đã đổi `current.product_card_quick_add_color_scheme` từ `scheme-3` sang `scheme-1` trong `config/settings_data.json`. Đây là Theme Setting dùng chung Product cards, không phải setting riêng của preset Collection tabs. Browser readback mới xác nhận nền #1F1F1F, icon #FFFFFF và wrapper scheme-1. Mismatch Quick add trong bảng QA phía trên đã được xử lý; các số đo cũ được giữ làm lịch sử.

Evidence: `output/collection-tabs-qa-2026-10-20/quick-add-settings-fix.jpg`. Theme Check: 0 errors, 7 warnings. Không đổi CSS, JS, schema/preset hay catalog trong lượt sửa này.

Còn lại chưa giải quyết bằng preset hiện có:

- Spacing eyebrow/tab: cần tách gap trong implementation. Giảm gap section sẽ đồng thời làm sai khoảng cách tới product row/CTA; header.gap chỉ điều khiển nội dung nằm bên trong header, không điều khiển tab-layout là sibling.
- Card mobile 304px: peek 1.2 đang tính trong JS; preset chỉ bật/tắt peek và chọn số cột.
- Badge, giá compare-at, swatch: cần sửa catalog.
- Shop all lệch rộng khoảng 1.28px: block chỉ có fit/fill, padding là wrapper; chưa có width hoặc padding riêng nút. Chưa đổi Button token toàn theme để chữa sai lệch chưa truy nguyên typography.
- Outline/font: còn thiếu số đo Figma nên chưa đủ cơ sở sửa.

## Shop all: truy nguyên Theme Settings và Style Guide

Đối chiếu ngày 20/10 sau câu hỏi về chiều rộng. Nguồn thiết kế: node `43253:1566`; dùng thêm evidence đã đọc trực tiếp trước đó trong `docs/audits/virelle-style-guide-config-2026-10-20.md` và JSON cùng tên. Lượt này MCP yêu cầu retry sau authentication rồi trả usage limit; Browser báo disabled trong Work settings, native CUA không điều khiển được. Vì vậy đây là **đối chiếu source/config với evidence thiết kế đã lưu**, chưa có measurement render mới.

| Thuộc tính | Bằng chứng Style Guide đã lưu | Current config/code | Kết luận |
| --- | --- | --- | --- |
| Family | Roboto | button_primary_font=body, Body Roboto | Config khớp; cần xác minh font-face thực tải |
| Weight | 500 | button_font_weight=500; loader có font_modify/font_face riêng | Config khớp; không chỉ suy weight từ Body400 |
| Size | 14px | button_font_size_px=14 | Khớp |
| Tracking | −0.2px | tight → --letter-spacing-tight: −0.2px | Khớp |
| Case | Uppercase | uppercase | Khớp |
| Height desktop/mobile | 56px / historical mobile44px | 56 / 44 | Khớp evidence hiện có |
| Padding ngang | Desktop24px / historical mobile22px | 24 / 22 mỗi bên | Khớp evidence hiện có |
| Line height | 150% =21px | .btn line-height:1 =14px | Implementation mismatch; không phải setting và không trực tiếp giải thích lệch width |
| Border của primary | Chưa có bằng chứng numeric/alignment đủ trong receipt | 1px mỗi bên, CSS border tham gia intrinsic width | Cần đo/đọc Figma trước khi kết luận config sai |

Chiều rộng tự nhiên được tính từ chiều rộng label đã shaping/tracking + padding hai bên + border hai bên (trừ khi min-width/constraint khác chi phối). Với setting mobile hiện tại là **label +44px padding +2px border**. Outline focus vẽ bên ngoài, không cộng vào layout; outline chữ của tab không áp dụng CTA.

**Điều chỉnh kết luận trước:** chưa chứng minh cần thêm control width cho Shop all. Không nên ép width108px hoặc giảm padding chỉ để khớp một số đo trước đó. Số109.28125px là measurement lịch sử, không phải readback mới sau các cập nhật tracking/font-face. Cần đo label rect, padding, border và loaded font trên runtime hiện tại; đối chiếu bounds label/border Figma để phân biệt config, font metrics và rounding. Không tự quy phần1.28px cho outline hay Theme Settings.

Không đổi theme/config trong lượt truy nguyên này. Đã yêu cầu bật Browser để hoàn tất phần runtime bị thiếu.
