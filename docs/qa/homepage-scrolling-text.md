# Norden — Homepage — Scrolling text

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng31–32](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A31:J32); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:609 / M10012:1408 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|6 nhãn Sofas,Chairs,Tables,Storage,Lamps,Rugs xen6 ảnh tròn96×96; Instrument Sans700 D40/48,M30/36,tracking0. Cao D136/M104; padding D20/M4.|Nội dung/ảnh, hình tròn, căn giữa dọc, font và kích thước khớp. Khoảng nhìn thấy D56px=gap40+padding16; M40px=24+16. Marquee di chuyển và clip đúng; không lấy lệch phase làm lỗi.|||Khớp|
|Chung (Desktop, Mobile)|Heading|Màu chữ|#28313D|#1A1A1A|Dùng color_type=scheme và scheme riêng nền trắng/heading#28313D; giữ các consumer scheme-1. Schema đã hỗ trợ scheme và color_role=heading.|Lần 1|Khớp|

## Bằng chứng và diễn giải

Các số đo chi tiết và hướng xử lý được giữ trong bảng hiện hành.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden — Homepage — Scrolling text

QA27/10/2026. Chỉ đọc theme. Sheet hàng34–35: https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0
Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931
Figma copy D10012:609 / M10012:1408, nguồn homepage D47227:7323 / M47557:4382 file9770x6Fo149ZeyWbvWwjk2.

## Kết quả

- Đủ6nhãn Sofas,Chairs,Tables,Storage,Lamps,Rugs xen6ảnh sản phẩm cùng thứ tự; ảnh tròn96×96px, không overlay. Vùng hiển thị clip theo section, marquee di chuyển.
- Font nguồn và runtime Instrument Sans Bold700, D40/48px, M30/36px,tracking0,căn giữa dọc. Detach style chỉ trên bản tạm được cho phép, Undo ngay và xác nhận style trở lại.
- Section cao136D/104M, padding trên/dưới20D/4M. Không có nav/pagination trong thiết kế này.
- Gap nhìn thấy Desktop=40gap+16padding text=56px; Mobile=24+16=40px. Theme dùng toàn bộ56/40 ởgap, textpadding0; chấp nhận theo quy ước marquee đã được người dùng hướng dẫn. Không yêu cầu thêm padding riêng hoặc sửa gap đang khớp.
- Nguồn ảnh bo9999px và runtimewrapper1000px đều tròn ở96px, không báo sai khác số radius.
- **Chưa khớp màu chữ**, nguồn#28313D vsruntime#1A1A1A trên D/M. SourceText613/1412, Properties fill hex28313D. Runtime computed#1A1A1A ở6nhãn cùng class.
- Hướng xử lý: block `marquee` hỗ trợ color_type=scheme/color_scheme, Heading hỗ trợ color_role heading/body. Tạo scheme riêng nền trắng,heading#28313D và chỉ gán marquee; không đổi scheme-1 đang dùng nơi khác. Gắn Lần1 do giải pháp config hiện có; chưa sửa theme.

## Bằng chứng

`/private/tmp/norden-homepage-qa-20261026/scrolling-text-figma-desktop.json`, `scrolling-text-figma-mobile.json`, `scrolling-text-runtime-desktop.json` (nội dung1920px), `scrolling-text-runtime-mobile.json` (nội dung375px), `sheet-scrolling-text-styled.png`.

Đã đọc lại CellData A34:J35, validation và effective highlight đúng; ảnh Google-rendered xác nhận merge/wrap/middle, chip Khớp/Lần1/Chưakhớp màu chuẩn. Section còn1mismatch. Tiếp tục Featured collection (The Everyday Comfort Sofa).

</details>


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|32|`aike_brands/marquee: scheme riêng scheme-qa-marquee, heading #28313D, nền #FFFFFF`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|32|Desktop/Mobile #28313D; scheme-qa-marquee áp trên aike_brands (Custom section), nền#FFFFFF|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.

Điều chỉnh mapping sau QA thực tế: override color_type/color_scheme ở block không xuất scope màu runtime; chuyển scheme-qa-marquee sang `aike_brands.settings.color_scheme` của Custom section và bỏ override không hiệu lực. Đo lại cả Desktop/Mobile đúng rgb(40,49,61). Không sửa implementation.
