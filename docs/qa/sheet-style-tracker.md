# Norden — Sheet style tracker

Chốt27/10/2026, style version5. Tab Homepage: Arial10, header navy11bold, freeze2, zoom90%, wrap/middle toàn bảng; merge theo section/device/component. I/J dùng dropdown chip màu; nền ô dữ liệu trắng. F/G dùng conditional highlight khi J=Chưa khớp. Bảng dữ liệu3–119; nguồn/phạm vi122–129. Đọc lại CSV khớp toàn bộ E–J, không HTML thô. Link preview public có theme ID192706117931 ở F126:J126; link Sheet ở F127:J127.

Evidence cuối: `/private/tmp/norden-homepage-qa-20261026/sheet-final-footer.png`, `sheet-final-sources.png`. Doc [Homepage](homepage-qa.md).

<details><summary>Lịch sử định dạng trước bản chốt</summary>

# Norden QA — Sheet style

- Sheet [Norden / Homepage](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0), tài khoản minhle@beae.com.
- Áp dụng `sheet-style.json` version5. Đã xác minh UI ngày26/10/2026: Arial10, header11bold navy#1F4E78, freeze2,10 cột, merge nhóm, wrap/fit row và middle. Zoom UI90% để xem đủ10 cột.
- I3:I117: chip Lần1–5/Bỏ qua, màu theo mẫu. J3:J117: chip Khớp/Chưa khớp/Chưa xác minh/Figma làm tròn/Browser render không khớp, màu theo mẫu. Giữ lựa chọn đơn và từ chối dữ liệu không hợp lệ; không tô nền ô I/J.
- Rule F3:F117 với công thức `=$J3="Chưa khớp"`: nền#D9EAD3, chữ đen. Rule G3:G117 cùng công thức: nền#F4CCCC, chữ đen. Mục Khớp/Chưa xác minh không có highlight so sánh.
- Sau mỗi section: ghi nội dung, mở rộng/kế thừa style/rule khi cần, đọc lại và xác minh giao diện trước section tiếp. Không coi style hoàn chỉnh là QA giao diện theme đã đạt.
- Proof: `/private/tmp/norden-homepage-qa-20261026/sheet-header-slideshow-styled.png`. Header13–21, Slideshow22–29, Our Favorites30–31 tại checkpoint này.
- Kinh nghiệm UI: HEX tùy chỉnh cần Enter để commit, kiểm RGB trước OK. Dùng editor gắn đúng tab; native paste có thể trỏ cửa sổ khác. Một lần HTML thô rơi A3 đã sửa0, đọc lại CSV sạch; không dùng snapshot trước sửa làm báo cáo cuối.

- 27/10/2026: Shop by Room30–33 được ghi qua connector, kế thừa validation chip, F/G conditional formatting. CellData và screenshot sheet-shop-room-styled.png xác nhận style; Favorites chuyển34–35, G3:G4 cập nhật tham chiếu35.

</details>
