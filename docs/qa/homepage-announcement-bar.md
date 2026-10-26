# 01. Announcement bar — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Announcement bar | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Nội dung; màu; weight/size/line-height/tracking; chiều cao; padding; gap marquee. |  |  |  | Khớp |
| 1 | Announcement bar | Chung (Desktop, Mobile) | Text | Font family | Roboto | Roboto Condensed | Preset font của Announcement bar: chọn Body/Roboto, giữ các thông số đã khớp. |  | Chưa khớp |


## Lịch sử — recheck-three-sections-2026-10-22.md

### 1. Announcement bar

Chiều cao đã về 31px, padding 8px trên/dưới, line-height 15px; inner/slides không còn min-height 20px. Không giữ lỗi cao 36px của lần trước. Text vẫn Roboto Condensed thay vì Roboto. Ưu tiên preset Body/Roboto của section, giữ weight 500, size 10px, tracking 2px, line-height 150%. Nội dung lặp cùng style: báo một lần; không lặp số đo từng bản clone. Border vô hình được chấp nhận theo quy ước đã huấn luyện.


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 1 | Announcement bar | `announcement-bar` trong header group |

### STT 1 — Announcement bar

Kiểm lại sau cập nhật ngày 22/10/2026, khoảng 13:41 (Asia/Ho_Chi_Minh). Kết luận: **Chưa khớp** trên Desktop và Mobile. Kết quả mới: **12 Khớp, 6 Chưa khớp**. Tracking và màu chữ đã khớp; còn font family và chiều cao section. Viền dưới đã được chấp nhận theo quy ước vô hình; các con số và vị trí Sheet trong mốc kiểm cũ dưới đây là lịch sử. Đã ghi lại đủ **18 tiêu chí** vào Sheet `A5:H22`: Desktop hàng 5–13, Mobile 14–22; nguồn vẫn ở hàng 24–27. Đã bỏ toàn bộ bốn dòng Kích thước Text phụ thuộc typography. Không sửa theme trong lượt QA.

##### Phương pháp và đối tượng

- Nguồn Figma đọc lại bằng CUA/Chrome trong phiên đã đăng nhập, vì không có công cụ Figma MCP khả dụng. Desktop: Homepage 2 → Header Type Top; Mobile: frame `48249:14513` → Header Type Top. Đọc riêng cả Shipping và Returns, container và section ở hai thiết bị.
- Preview `http://127.0.0.1:9300/`, instance `announcement-bar` trong `sections/header-group.json`, trước Header. Hai block có tên schema **Text**, báo cáo thêm ngữ cảnh Shipping/Returns. Clone marquee không phải block thiếu/thừa; pha animation không dùng để kết luận đảo thứ tự.
- Desktop: viewport CSS 1920×934, clientWidth 1905 do scrollbar 15px. Mobile: viewport override 390×812, clientWidth và section width **375px**, cùng chiều rộng nội dung frame Figma 375px; ghi rõ không phải device emulation 375px. Override đã reset sau đo. DPR 1; font status loaded. Screenshot chỉ lưu phần Announcement bar và Header lân cận.
- Trên cả hai breakpoint, đọc computed style của Text trực tiếp, không lấy parent. Render mới là **Roboto Condensed 500**, thay cho Roboto 400 trong báo cáo cũ. Sai lệch weight cũ đã được bỏ. Sau cập nhật mới, tracking 2px và màu #FFFFFF cũng đã khớp; lỗi typography hiện chỉ còn font family.
- Không tạo dòng Navigation/pagination vì Figma và kiểu scrolling đang kiểm không có control riêng.

##### Bảng đồng bộ Sheet

18 dòng dưới đây đã đối chiếu lại từng ô Nội dung/Trạng thái/Hướng xử lý trong bản Sheet xuất sau khi lưu. Trạng thái là dropdown năm lựa chọn trên `G5:G22`; chưa gán Browser render không khớp cho tiêu chí nào vì chưa có bằng chứng nguyên nhân từ browser.

| Thiết bị | Thành phần | Tiêu chí | Nội dung đối chiếu | Trạng thái | Hướng xử lý |
| --- | --- | --- | --- | --- | --- |
| Desktop | Tổng quan layout | Thành phần và bố cục | Đủ 2 Text; padding 8/8px khớp.<br>Chưa khớp:<br>- Chiều cao: Theme 36px; Figma 31px (inner/track min-height 20px). | Chưa khớp | - Chiều cao: giữ padding 8/8; không có preset min-height, custom inner/track bỏ min-height 20px để ôm Text 15px; đo lại box. |
| Desktop | Section | Màu nền | #181818 | Khớp |  |
| Desktop | Text (Shipping) | Nội dung | FREE STANDARD SHIPPING ON ALL ORDERS | Khớp |  |
| Desktop | Text (Shipping) | Typo | 500; 10/15px; tracking 2px; chữ hoa.<br>Chưa khớp:<br>- Font: Theme Roboto Condensed; Figma Roboto. | Chưa khớp | - Font: preset Font = Body (Roboto); kiểm weight 500 và ảnh hưởng chung; custom cục bộ nếu preset không đáp ứng. |
| Desktop | Text (Shipping) | Màu | #FFFFFF | Khớp |  |
| Desktop | Text (Returns) | Nội dung | FREE RETURNS WITHIN 30 DAYS | Khớp |  |
| Desktop | Text (Returns) | Typo | 500; 10/15px; tracking 2px; chữ hoa.<br>Chưa khớp:<br>- Font: Theme Roboto Condensed; Figma Roboto. | Chưa khớp | - Font: preset Font = Body (Roboto); kiểm weight 500 và ảnh hưởng chung; custom cục bộ nếu preset không đáp ứng. |
| Desktop | Text (Returns) | Màu | #FFFFFF | Khớp |  |
| Desktop | Grid/slide | Khoảng cách và lặp ngang | Gap 144px; 2 nội dung lặp ngang, cắt ở mép viewport. | Khớp |  |
| Mobile | Tổng quan layout | Thành phần và bố cục | Đủ 2 Text; padding 8/8px khớp.<br>Chưa khớp:<br>- Chiều cao: Theme 36px; Figma 31px (inner/track min-height 20px). | Chưa khớp | - Chiều cao: giữ padding 8/8; không có preset min-height, custom inner/track bỏ min-height 20px để ôm Text 15px; đo lại box. |
| Mobile | Section | Màu nền | #181818 | Khớp |  |
| Mobile | Text (Shipping) | Nội dung | FREE STANDARD SHIPPING ON ALL ORDERS | Khớp |  |
| Mobile | Text (Shipping) | Typo | 500; 10/15px; tracking 2px; chữ hoa.<br>Chưa khớp:<br>- Font: Theme Roboto Condensed; Figma Roboto. | Chưa khớp | - Font: preset Font = Body (Roboto); kiểm weight 500 và ảnh hưởng chung; custom cục bộ nếu preset không đáp ứng. |
| Mobile | Text (Shipping) | Màu | #FFFFFF | Khớp |  |
| Mobile | Text (Returns) | Nội dung | FREE RETURNS WITHIN 30 DAYS | Khớp |  |
| Mobile | Text (Returns) | Typo | 500; 10/15px; tracking 2px; chữ hoa.<br>Chưa khớp:<br>- Font: Theme Roboto Condensed; Figma Roboto. | Chưa khớp | - Font: preset Font = Body (Roboto); kiểm weight 500 và ảnh hưởng chung; custom cục bộ nếu preset không đáp ứng. |
| Mobile | Text (Returns) | Màu | #FFFFFF | Khớp |  |
| Mobile | Grid/slide | Khoảng cách và lặp ngang | Gap 80px; 2 nội dung lặp ngang, cắt ở mép viewport. | Khớp |  |

##### Số đo và truy nguyên

| Thuộc tính | Figma Desktop / Mobile | Render Desktop / Mobile |
| --- | --- | --- |
| Nền section | #181818 | #181818 |
| Chiều cao section | 31px / 31px | 36px / 36px |
| Padding trên/dưới | Token 2/2, tương ứng 8px/8px | 8px/8px |
| Vùng nội dung trong | 15px | 20px |
| Viền dưới (được chấp nhận) | Stroke 1px trùng nền, không ảnh hưởng khung/layout, tổng thể không nhìn thấy | 0px, bottom_separator=false; coi như không có viền theo quy ước người dùng |
| Gap dòng lặp | Token 36 / 20, tương ứng 144px / 80px | 144px / 80px |
| Font Text | Roboto 500, 10px, line-height 15px | Roboto Condensed 500, 10px, line-height 15px |
| Tracking Text | 2px | 2px |
| Màu Text | #FFFFFF | #FFFFFF |

Figma Properties hiển thị token spacing; dùng scale đã có trong hồ sơ init: 1 = 4px. Nội dung Shipping/Returns, uppercase, weight 500, size 10px, line-height 15px đã khớp. Theo hướng dẫn của người dùng, không thêm lỗi kích thước Text khi font family còn sai. Chỉ bổ sung sau khi typography và constraint khớp mà box vẫn lệch; trạng thái Browser render không khớp cần bằng chứng render/làm tròn, không suy từ việc chưa tìm ra nguyên nhân.

Source hiện tại: `font=accent`, `font_size=xxs`; `type_accent_font=roboto_condensed_n5`, `type_primary_font=roboto_n4`. Section và block hiện chọn typography class theo Font: Body → body-text, Heading → heading-text, Accent → eyebrow-text. Text đang dùng eyebrow-text nên tracking 2px và màu #FFFFFF đã đi theo Accent; inline font-size vẫn 10px. Font Accent vẫn Roboto Condensed 500, khác Roboto 500 trong Figma. Không còn lỗi tracking/màu/weight cũ. `.announcement-bar__inner` và track có min-height 2rem, đo 20px; tổng cao 20+8+8=36px. Đây là sai lệch khung section độc lập, vẫn cần báo.

##### Hướng xử lý chi tiết, preset trước

1. **Chiều cao:** inspect lại Desktop/Mobile xác nhận Text 15px từ 10px × 150%, padding section 8px/8px khớp. `assets/critical.css` đặt cả `.announcement-bar__inner` và `.announcement-bar__slides` min-height 2rem = 20px. Text ở y=10.5px thay vì inset nội dung 8px: wrapper 20px căn giữa Text 15px thêm 2.5px mỗi phía. Tổng hiện 20+8+8=36px, trong khi nội dung 15+8+8=31px. Schema không có control min-height nên không đề xuất giảm preset Padding đã đúng; custom scoped cho scrolling để bỏ min-height 20px ở cả inner/track (ví dụ min-height:0 để chiều cao theo nội dung), rồi đo lại Text/section/inset và các breakpoint. Không ép height 31px hoặc đổi token toàn theme để che lỗi.
2. **Viền dưới — chấp nhận:** theo hướng dẫn người dùng, stroke Figma trùng nền, không làm tăng kích thước/đổi layout và không nhìn thấy tổng thể nên coi như không có border. Rút đề xuất bật `Show bottom separator`; bỏ dòng lỗi trên Sheet Desktop/Mobile. Số đo stroke 1px / CSS 0px chỉ giữ làm dữ liệu nguồn, không phải lỗi. Chiều cao 36px so với31px do min-height là lỗi độc lập vẫn giữ.
3. **Font:** thử preset Font = Body để lấy Roboto. Body hiện weight 400 nên phải kiểm chọn Roboto 500 trong theme font setting và ảnh hưởng các consumer; không đổi global chỉ để khắc phục một section. Nếu preset không đáp ứng cục bộ mà giữ weight 500, mới đề xuất custom scoped. Accent hiện Roboto Condensed 500, không còn báo weight hiện tại sai.
Tracking và màu chữ đã khớp nên bỏ các hướng sửa tương ứng. Khi thử đổi Font sang Body, cần đo lại weight, tracking và màu vì typography class thay đổi; không coi preset sửa font là đạt nếu làm lệch các thuộc tính vừa khớp.

Các hướng trên là đề xuất QA. Kết luận STT 0 theo quy ước người dùng vẫn được giữ nguyên.

##### Kinh nghiệm bổ sung sau đối chiếu lại

Đã đọc lại Properties Figma Desktop/Mobile và inspect preview trong cùng lượt: Figma Text 10px/150% = 15px, section 31px, padding token 2/2 (8/8); theme Text 15px, padding 8/8 nhưng hai wrapper min-height 20px. Sai lệch chiều cao section đã chứng minh do constraint CSS, không phải padding hoặc browser render. Font family vẫn là lỗi độc lập. Chỉ điều chỉnh thuộc tính gây sai lệch; ưu tiên preset đúng thuộc tính, custom sau khi xác minh preset không có.

Bằng chứng: [inspect Desktop](../../output/qa/announcement-minheight-desktop.json), [inspect Mobile](../../output/qa/announcement-minheight-mobile.json), [Figma Desktop](../../output/qa/announcement-minheight-figma-desktop.png), [Figma Mobile](../../output/qa/announcement-minheight-figma-mobile.png).

##### Bằng chứng lần kiểm sau cập nhật

- [Số đo Desktop](../../output/qa/announcement-v2-desktop.json), [ảnh Desktop](../../output/qa/announcement-v2-desktop.png).
- [Số đo Mobile, clientWidth 375px](../../output/qa/announcement-v2-mobile.json), [ảnh Mobile](../../output/qa/announcement-v2-mobile.png).
- [Figma Desktop section](../../output/qa/announcement-recheck-figma-desktop.png), [Figma Mobile Text](../../output/qa/announcement-recheck-figma-mobile.png).
- [Sheet sau khi ghi lại](../../output/qa/announcement-v2-sheet.png), [Sheet Mobile và nguồn cuối](../../output/qa/announcement-v2-sheet-footer.png).
- Bản JSON báo cáo: `output/qa/announcement-report-rows.json`. Render mới lưu với tiền tố `announcement-v2-`; `announcement-recheck-*` và JSON v1 là lịch sử. Figma desktop/mobile được tái sử dụng từ lượt đối chiếu ngay trước, không gọi là thiết kế đọc mới trong lượt này.
