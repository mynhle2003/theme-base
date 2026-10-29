# Norden — Homepage — Collection list (Shop by Room)

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng27–30](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A27:J30); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:593 / M10012:1400 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Heading căn giữa; 4 card đúng thứ tự. D: container1600,4 cột,gap16,padding80,gap Heading→grid40. M: container343,1 card,padding56,gap32. Ảnh6:7,bo12,gap ảnh→nhãn20.|Nội dung, ảnh/crop, bố cục và khoảng cách khớp; Instrument Sans700: Heading D32/130%,M22/130%; nhãn D18/150%,M16/150%,#1A1A1A. Mobile vuốt đủ4 card,progress25%→100%,rộng343,cao2,gap32 khớp.|||Khớp|
|Desktop, Mobile|Heading|Chiều cao dòng|D42px / M29px (UI Figma)|D41.594px / M28.594px; CSS32×130%=41.6 và22×130%=28.6|Figma hiển thị làm tròn line box; không sửa kích thước để bù.||Figma làm tròn|
|Mobile|Navigation/pagination|Màu active progress|#1A1A1A|#4D4D4D|Below progress đang dùng body-color; cần override scoped sang heading-color. Không đổi màu body toàn theme.||Chưa khớp|
|Mobile|Navigation/pagination|Border radius|Track10px; active4px|Track0px; active0px|Chưa có setting bo riêng cho progress; cần CSS scoped cho track/fill.||Chưa khớp|

## Bằng chứng và diễn giải

Source1cardMobile không nextpeek. Track343×2 và các trạng thái25→100% đã kiểm. Typography khớp; chiều cao linebox22×130%=28.6 hiển thị29 nguồn là làm tròn; không báo lỗi chiều cao cha.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden — Homepage — Collection list (Shop by Room)

Cập nhật27/10/2026. QA chỉ đọc theme, không sửa config/CSS.

Sheet: https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0 — hàng30–33.
Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931 — UI xác nhận Norden local preview Draft.
Instance: `template--28659888619819__aike_categories`.
Figma nguồn Desktop47227:7323 / Mobile47557:4382 trong file9770x6Fo149ZeyWbvWwjk2; inspect bản copy Desktop10012:593 / Mobile10012:1400 trong GUJw3Y8gUBn8C5rISC5FPV.

## Kết quả

- Khớp nội dung và thứ tự4card Living Room, Kitchen & Dining, Bedroom, Outdoor; Desktop4cột trong1600px,gap16; Mobile1card343px, không có next-item peek trong nguồn.
- Padding trên/dưới Desktop80px / Mobile56px. Gap Heading→grid Desktop40 / Mobile32; ảnh→nhãn20; nhãn căn trái, Heading căn giữa.
- Heading Instrument Sans Bold700, Desktop32px/130%, Mobile22px/130%, tracking0,#1A1A1A. Nhãn Bold700, Desktop18px/150%, Mobile16px/150%, tracking0,#1A1A1A. Đã detach style tạm trong đúng frame được cấp quyền, đọc giá trị rồi Undo; xác nhận style nguồn phục hồi.
- Media đúng bố cục/crop, portrait6:7, cover/center, bo12px, không overlay. Desktop388×452.67px theo UI Figma vs388×452.65625px runtime; Mobile343×400.17 vs343×400.15625. Sai số tỷ lệ/subpixel không cần sửa box.
- Figma line box Heading D42/M29; CSS lần lượt41.6/28.6px, DOM41.59375/28.59375. Figma làm tròn, không custom height hoặc bù gap. Chênh parent D741.67 vs741.25 và M651.17 vs650.75 được giải thích bởi các con, không lặp lỗi section.
- Mobile progress rộng343px,cao2px,gap phía trên32px; track#E6E6E6. Vuốt thực từ Living Room→Kitchen & Dining→Bedroom→Outdoor, phần active tăng85.75→171.5→343px tương ứng25%→50%→100%. Desktop progress ẩn đúng nguồn.

| Thuộc tính | Figma | Runtime | Trạng thái / hướng xử lý |
|---|---|---|---|
| Mobile active progress color | #1A1A1A | #4D4D4D | Chưa khớp. `assets/swiper-carousel.css` below progress dùng `--swiper-pagination-color:var(--body-color)`; cần scoped override sang heading, không đổi global body. |
| Mobile progress border radius | track10px, active4px | track0px, active0px | Chưa khớp. Không thấy setting radius riêng trong collection-list-items; cần scoped CSS. |

Không gắn Lần1 cho hai lỗi cần custom. Không thay đổi theme.

## Bằng chứng và Sheet

- `/private/tmp/norden-homepage-qa-20261026/shop-room-figma.json`: UI Properties của card/heading/pagination D/M.
- `shop-room-title-desktop.json`: font nhãn Desktop thực sau detach tạm, đã Undo.
- `shop-room-runtime-desktop-20261027.json`, `shop-room-runtime-mobile-20261027.json`: computed DOM mới, width nội dung1920/375, scrollbar11px, font loaded.
- `sheet-shop-room-styled.png`: Google-rendered Sheet90%, đủ10cột; màu chip, F/G conditional highlight, group merge, wrap/middle đã thấy trên UI. Connector CellData readback xác nhận giá trị, validation, effective background đúng.
- Lưu ý: `shop-room-runtime-mobile.json` từ lần trước bị viewport chưa ổn định (progress0box); không dùng làm kết luận Mobile. Dùng bản20261027.

QA section này hoàn tất trong phạm vi thiết kế mặc định và swipe; còn2mismatch. QA homepage tổng thể tiếp tục Scrolling text. Hai root Figma tạm10012:544/10012:1371 vẫn chờ cleanup sau toàn bộ QA.

</details>
