# 05. Image text card grid — Confidence in every move — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Image text card grid | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Nội dung; typography/màu; gap8/12px; Text→Button24/16px; padding/grid; Button; crop3 ảnh (đã sửa shorts); video phát. |  |  |  | Khớp |


## Lịch sử — confidence-2026-10-23.md

### STT5 — Image text card grid / Confidence in every move

QA23/10/2026, chưa hoàn tất: 3 sai lệch và2 mục cần xác minh, không sửa theme.

Figma Mobile48622:21452. Đã đọc card343×288, padding32/20, gap16; Row gap8, section48/48. Heading Roboto Condensed700, LH120%, tracking-.6, height72. Text Roboto40016/24tracking.1#626262; button tertiary Roboto50014/21tracking-.2#1E1E1E. Desktop card520×416,padding ngang40,gap24; Heading440×120; Text440×48. Eyebrow Roboto Condensed50014/21tracking2#181818. Bản copy Mobile cho thấy card radius0px dù token2xl; đã xóa đúng root Image with text1 vừa tạo, giữ ảnh Skinora/Collectionlist31 có sẵn.

Preview đang mở: Desktop inner1920/client1905, Mobile375/client360. Không dùng viewport/client lệch để kết luận width lỗi. Tab mới localhost9300 trả unauthorized; tab cũ còn DOM/computed styles, chưa xác minh kết quả sau tải mới. Chưa kiểm đầy đủ crop/video/icon/card geometry nên giữ2 mục chưa xác minh, không báo toàn section pass.

Button label hiện #111111, line-height14 so với Figma#1E1E1E/21. Đây là Tertiary nên ngoại lệ bỏ line-height Primary/Secondary không áp dụng. Schema có Scheme →button_tertiary_text; preset đổi màu có ảnh hưởng nút khác cùng scheme. Block không có LH riêng; cần scopedCSS nếu preset không đáp ứng. Không báo lặp kích thước text/button phụ thuộc LH. Group copy gap Desktop32 thay vì24; hướng xử lý preset gap_desktop24, giữ gap_mobile16. Card theme Desktop padding64/40,gap32; Mobile32/20,gap16. Desktop card chiều cao405 vs Figma416: chưa chốt lỗi vì còn button/cấu trúc/điều kiện width cần xác minh; không tự sửa padding.

Evidence: output/qa/confidence-mobile-figma-partial.json, confidence-figma.json, confidence-desktop-preview.json, confidence-mobile-preview.json. Sheet A20:I25; các phần trước giữ nguyên, nguồn cuối26:29.

### Kiểm lại khi preview đã khởi động

Preview tải mới hoạt động, instance template--28650216325419__kinetra_collage. Button đã đổi sang#1E1E1E và line-height21px, hai lỗi trước đã sửa. Desktop gap copy32px vẫn khác Figma24px; gap header hiện24px (lần trước16px), cần đối chiếu tiếp. Card hiện423px ở width588.34. Video readyState4 nhưng paused khi đang ngoài viewport, không kết luận lỗi autoplay. Chưa đo lại Mobile/chốt media. Sheet chưa được cập nhật lượt này vì tab cũ không còn; không coi dữ liệu Sheet trước là kết quả mới.

### Kết luận hiện hành sau kiểm lại (thay thế lỗi cũ)

Preview đã reload thành công. Button #1E1E1E/LH21 đạt cả hai; copy gap Desktop24/Mobile16 đạt. Rút lỗi ngoài32px cũ. Video ready4 paused=false, time tăng0.310→1.046 khi đổi viewport. Không còn blocker localhost.

Desktop Figma Heading group209 = Content149 + gap12 + Text48; Content149 = Eyebrow21 + gap8 + Heading120. Theme nhóm phẳng237 =21+24+120+24+48. Hai lỗi gap24 thay vì8/12, sửa bằng Group preset lồng nhau. Không bù padding/chiều cao box cha. Theme card415/295; chưa gọi mọi chênh lệch là làm tròn vì còn các gap/khung button. Grid20/8, Mobile padding32/20 đúng. Mobile cần đọc lại Content để chốt gap đầu, không suy từ Desktop; Inspect Figma tab báo Debugger unattached trong lần tiếp tục.

Button khung130.47×24 so với Figma124×23, gap theme5, source token0.5; chưa chốt icon/stroke/underline, không gộp toàn button thành pass. Media crop chưa đủ. SheetA20:I25 đã thay kết quả cũ, giữ3 mục chưa xác minh cụ thể; không gọi full section pass.


## Lịch sử — confidence-scrolling-2026-10-23.md

### STT5 — Confidence in every move

Đã đọc lại source Mobile Content: gap8px, Heading group gap12px, height185px; preview đã khớp bằng gap8 và padding-top4px của Text. Desktop cũng đạt8/12. Rút hai lỗi gap24 cũ và mục Mobile chưa xác minh. Typography, padding/grid, Button khung123.47×23px gần124×23px được chấp nhận sau typography khớp; không giữ lỗi khung130.47×24px cũ.

Ảnh shorts vẫn sai crop cả hai thiết bị: Figma cận hông/quần; preview hiện đầu và lưng trên. Ưu tiên chọn đúng asset/crop/focal point bằng preset.

Lần QA mới nhất: Text→Button đã đạt24/16px, thay thế lỗi wrapper26/18px cũ. Không còn đề xuất custom wrapper.

### QA lại Image text card grid — kết quả mới nhất23/10/2026

Desktop đo inner1920/client1905: Text box kết thúc369px, Button bắt đầu393px →24px. Mobile inner375/client360: Text box kết thúc274.328125px, Button bắt đầu290.328125px →16px. Button wrapper hiện cao27px, padding-top2px, Group gap hiệu dụng20/12px; tổng khoảng nhìn thấy đã đúng. Không yêu cầu các thuộc tính cấu thành trùng riêng Figma; không sửa wrapper hay gap đã khớp. Đã xóa dòng lỗi Layout cũ khỏi Sheet và gộp vào pass.

Ảnh shorts vẫn crop khác: nguồn Figma Mobile48622:21452 và Desktop48622:21390 cận phần hông/quần, preview hiển thị đầu/lưng. Giữ1 lỗi Chung; hướng preset chọn đúng ảnh/crop/focal point. Các ảnh back/together vẫn đúng chủ thể và thứ tự; video ready4, paused=false, time tăng1.98→2.89, không so khác phase thành crop lỗi. Typography vẫn50/60Desktop,30/36Mobile; Text16/24; Eyebrow14/21; gap8/12đạt. Button123.47×23 gần124×23 được chấp nhận như trước; không tạo lỗi kích thước phụ thuộc.

Bằng chứng mới: output/qa/confidence-latest-measure.json; confidence-latest-mobile.png. Chỉ sửa báo cáo, không sửa theme.


## Lịch sử — recheck-latest-three-2026-10-23.md

### STT5 Image text card grid

Ảnh shorts đã crop cận phần hông/quần cả Desktop/Mobile, rút lỗi crop cũ. Back/together đúng chủ thể và thứ tự. Gap8/12 và Text→Button24/16 vẫn đạt. Button123.47×23px gần124×23, không đề xuất bù kích thước. Typography Heading50/60 Desktop,30/36Mobile; Body16/24; Eyebrow14/21. Video phát, ready4. Sheet chỉ còn summary đạt.


## Lịch sử — check-perfect-homepage.md

### QA lại STT5 — mới nhất23/10/2026

[Confidence: khoảng Text→Button đã khớp, còn crop shorts](homepage-qa.md). Thay thế lỗi Layout wrapper cũ; bảng Sheet đã đồng bộ.

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 5 | Confidence in every move | `kinetra_collage` |

### STT5 — Confidence in every move (23/10/2026)

[Chi tiết](homepage-image-text-card-grid.md). Đang kiểm: Button màu/LH và gap Desktop chưa khớp; Media và geometry sau tải mới chưa xác minh do preview mới unauthorized. SheetA20:I25.


##### STT5 — QA lại và đồng bộ Sheet

Bảng A20:I25 hiện hành: Button màu/LH và gap ngoài24px Desktop đã khớp. Hai lỗi gap bên trong cụm chữ Desktop: Eyebrow→Heading8/24; Heading→Text12/24. Media crop, khung/icon/underline Button và gap Content Mobile còn chưa xác minh; không giữ blocker preview cũ. Đã ghi/đọc lại Sheet, dropdown giữ nguyên. Skill nguồn đã bổ sung quy tắc mỗi lượt QA lại phải cập nhật Sheet/MD, mở lại URL khi tab cũ mất.
