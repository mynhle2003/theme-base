# Norden — Homepage — Announcement bar

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng6–6](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A6:J6); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:545 / M10012:1372 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Nội dung, Typo, Màu, Layout|Text; Instrument Sans 400 14/21px; #FFF trên #28313D; cao 37px; padding 8px; Social D4icon18px/gap12, đúng glyph/fill trắng; Localization14/21,trắng,flag18,padding10,gap8/4,chevron16/stroke1.5|Khớp các thuộc tính đã nêu; Desktop localization mở/đóng được. Mobile ẩn Social/Localization. Bounds4social đối chiếu nguồn và SVG runtime khớp.|||Khớp|

## Bằng chứng và diễn giải

MCP kiểm đủ4vector social: bounds Facebook14.4×14.4, X13.3443×12.9537, TikTok12.5226×14.4009, Instagram14.4×14.4036 trong frame18; runtime cùng geometry/fill trắng. Localization country107×21/language88×21, flag18, padding10, gap8/4 và chevron16/stroke1.5 khớp. Mở/đóng country được; không đổi locale/currency.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden Homepage — Announcement bar

Kiểm ngày 26/10/2026, chỉ đọc. Instance `sections/header-group.json` → Announcement bar. Sheet: [Homepage, hàng 11–12](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A11:J12).

## Kết quả hiện hành

**Đã xác minh các thuộc tính Text và khung section; chưa hoàn tất social/localization Desktop.** Không kết luận toàn section pixel-perfect.

| Thuộc tính | Figma Desktop / Mobile | Preview Desktop / Mobile | Kết luận |
| --- | --- | --- | --- |
| Nội dung | Free shipping on orders over $100. Shop Now | Cùng nội dung, dấu câu/case | Khớp |
| Font | Instrument Sans Regular 400 | Instrument Sans 400; font-face Instrument Sans n4 từ CDN Shopify; FontFaceSet status loaded, check 14px Instrument Sans true | Khớp |
| Size / line-height | 14px / 150% = 21px | 14px / 21px | Khớp |
| Tracking / alignment | 0 / center | normal / center | Khớp |
| Màu chữ / nền | #FFFFFF / #28313D | rgb(255,255,255) / rgb(40,49,61) | Khớp |
| Chiều cao / padding dọc | 37px / 8px trên dưới | 37px / 8px trên dưới | Khớp |
| Desktop text box | Fill 1285×21px trong Content 1600px | 1285×21px; x272, y8 | Khớp |
| Mobile text | Text frame fill 343×21px, căn giữa | Text render 288.46875×21px; center trong viewport 375px | Không báo lỗi width từ khác biệt fill/hug; chưa dùng box chữ để kết luận toàn layout |
| Social / localization Mobile | Ẩn | Ẩn | Khớp |
| Social Desktop | 4 item, nhóm108×18px, gap12px, màu trắng | Nhóm108×18px, 4 icon, gap12px | Đã xác minh khung/gap; glyph/stroke và localization chưa kiểm xong |

## Nguồn và bằng chứng

- [Desktop nguồn](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323), [Mobile nguồn](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382).
- Bản tạm Desktop `10012:544` / Mobile `10012:1371`, giữ mode sau copy; chưa detach/unbind.
- [Public preview](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931), preview bar xác nhận Norden local preview Draft.
- Đo qua CUA: innerWidth1931 / document clientWidth1920, và innerWidth386 / clientWidth375; DPR1.
- Evidence local `/private/tmp/norden-homepage-qa-20261026/`: `announcement-desktop.json`, `announcement-mobile.json`, `announcement-desktop-text-ui.txt`, hai file `*-copied-section-properties.json`.
- Font kiểm bằng font-face hiển thị trong DOM, FontFaceSet status/check; không dùng kết quả Array.from(document.fonts) vì API proxy không expose iterable.

## Cần kiểm tiếp

Glyph/stroke/kích thước hiển thị từng social icon; hai localization controls gồm label, font, icon, gap và khung. Chưa thao tác đổi locale/currency. Không sửa theme/config.

</details>
