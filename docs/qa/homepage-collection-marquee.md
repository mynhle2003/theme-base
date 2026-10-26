# 04. Collection marquee — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 4 | Collection marquee | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Nội dung/thứ tự 3 nhóm; typography; màu; 6 ảnh/crop, tỷ lệ/kích thước, radius 0px; padding section; gap header/list và ảnh–text trong vùng Mobile nhìn thấy. |  |  |  | Khớp |
| 4 | Collection marquee | Chung (Desktop, Mobile) | Eyebrow | Chiều rộng sau khi typography khớp | 172px | 172.98px | Không cần sửa; suy luận chênh nhẹ do làm tròn/metrics. |  | Figma làm tròn |
| 4 | Collection marquee | Chung (Desktop, Mobile) | Heading | Chiều rộng text đại diện | T-shirts & Tops: 463px (Desktop); 266px (Mobile) | 461.27px (Desktop); 263.92px (Mobile) | Typography khớp; suy luận làm tròn/metrics, không bù width. |  | Figma làm tròn |
| 4 | Collection marquee | Desktop | Heading | Chiều cao text đại diện | 82px | 81.59px | 68 × 120% = 81.6px; Figma làm tròn 82px. Không liệt kê lại sai lệch layout phụ thuộc. |  | Figma làm tròn |


## Lịch sử — collection-marquee-2026-10-23.md

### QA STT4 — Collection marquee / Explore collections

Ngày: 23/10/2026. Chỉ Homepage Kinetra; không sửa theme.

### Nguồn và điều kiện đo

- Figma Desktop: collection list 31, file yTXlAfT0miBGgRuuYM4OMp, nguồn chi tiết trong collection-marquee-figma.json.
- Figma Mobile: collection list 31 Mobile, cùng file. Frame gốc 375px.
- Preview: http://127.0.0.1:9300/ ; instance kinetra_collection_marquee.
- Desktop: innerWidth 1935 / clientWidth 1920. Mobile: viewport yêu cầu 375 / clientWidth 360 do scrollbar. Không dùng chênh viewport để kết luận width lỗi.

### Bằng chứng và kết luận

Ba nhóm T-shirts & Tops, Jogger & Bottoms, Jackets & Hoodies đúng nội dung/thứ tự. Heading Roboto Condensed 700, Desktop 68px/120%, Mobile 40px/120%, tracking -1.2px. Eyebrow 500, 14px/150%, tracking 2px; icon 8px, gap 8px. Nền trắng, text #181818.

Padding Desktop 96/96; Mobile 48/12. Header–list 40/20; row gap 32/20. Ảnh 200×100 / 120×60, tỷ lệ 2:1; gap trong nhóm ảnh–solid heading 24/20. Root cao 617/321 tương ứng Figma. Không suy ảnh ẩn ở row Desktop chưa active là thiếu ảnh; Mobile marquee đang chạy nên không kết luận lệch theo phase.

**Cập nhật theo hướng dẫn vùng hiển thị:** Bỏ kết luận gap outer 32px/20px và gợi ý custom trước đó: gap này ở ngoài vùng clip Mobile, chưa có bằng chứng nó gây lệch trong viewport. Chỉ đối chiếu gap ảnh mép trái → solid heading → ảnh mép phải nhìn thấy; gap trong nhóm 20px khớp. Không dùng bản unclipped làm chuẩn để bắt lỗi phần ẩn.

**Radius đã khớp:** Bản Collection có sẵn trong Layouthub-copy, node 9992-234, ảnh200×100 hiển thị “0, variable value for lg”. Chốt0px đúng theme theo hướng dẫn; không suy số từ nhãn lg. Mobile cùng kiểu ảnh/token lg, không tạo lỗi radius riêng từ tag breakpoint.

**6 ảnh/crop đã đối chiếu:** T-shirt đen kéo vạt; tank top taupe; jogger trắng/sneaker; jogger burgundy; jacket trắng; hoodie xanh phía sau. Bản Mobile tạm bỏ clip cho thấy đủ 6 crop; đã mở riêng cả6 URL ảnh200×100 của theme đối chiếu trực quan, cùng tỷ lệ2:1 Mobile120×60. Khớp nội dung và crop hiển thị; không kết luận pixel identity của file nén.

**Cleanup:** Tạo bản Mobile tạm “Collection list32”, root9995-297 từ source48249-14526. Chỉ bỏ clip trên bản tạm để xem ảnh, sau đó đã xóa root này và xác nhận không còn Collection list32. Giữ Collection list31 và ảnh Skinora có sẵn. Evidence: collection-radius-copy.png, collection-mobile-unclipped-copy.png, collection-copy-cleanup.png.

**Figma làm tròn:** Eyebrow 172 vs 172.98; text đại diện Desktop 463 vs 461.27, Mobile 266 vs 263.92 khi typography khớp, suy luận metrics/làm tròn. Chiều cao Desktop 68×120%=81.6, DOM81.59, Figma82 là làm tròn theo công thức. Không bù kích thước và không lặp thành lỗi layout cha.

### Evidence

- output/qa/collection-marquee-figma.json
- output/qa/collection-marquee-desktop.json
- output/qa/collection-marquee-mobile.json

Sheet: STT4, 4 dòng (A16:I19); radius/6 ảnh gộp vào đã khớp, xóa lỗi gap ngoài viewport và hai dòng chưa xác minh.


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 4 | Explore collections | `kinetra_collection_marquee` |

### STT4 — Collection marquee (23/10/2026)

[Chi tiết QA](homepage-collection-marquee.md). Đã xác minh radius0px và6 ảnh/crop; bỏ lỗi gap ngoài viewport Mobile theo hướng dẫn. Sheet A16:I19, giữ các phần trước. Không sửa theme.
