## Quy tắc gom thiết bị — 2026-10-28, style v6

Yêu cầu mới: mỗi section chỉ có các nhóm liền mạch `Chung (Desktop, Mobile) → Desktop → Mobile`, mỗi nhãn tối đa một nhóm; bỏ nhóm rỗng. Kiểm Desktop trước và ghi nháp local, kiểm Mobile rồi ghi nháp riêng; đối chiếu xong mới render Sheet. Chung chứa cùng tiêu chí có kết quả tương thích ở cả hai màn, gồm Khớp, Chưa khớp hoặc Chưa xác minh theo evidence. Khác trạng thái/vấn đề giữ ở nhóm thiết bị tương ứng. Mục chỉ Khớp ở một màn nằm trong nhóm màn đó; không gom vào Chung bằng hậu tố. Giữ số đo, ghi chú và lịch sử fix.

Nguồn style v6: `agents-build-themes/skills/qa/qa-theme/assets/sheet-style.json`; quy trình chi tiết tại `qa-theme/references/sheet-report.md`. Đây là cập nhật quy tắc cho các lượt render/recheck tiếp theo; chưa tái render dữ liệu live hay thực hiện lượt QA mới trong lần cập nhật này. Các snapshot bên dưới là lịch sử, không đại diện phạm vi hàng hiện tại.

## Blog posts recheck — 2026-10-28

Phạm vi cập nhật A95:J105, thêm7 dòng trước Gallery; style v5 giữ nguyên. Merge A/B95:105, C95:100/101:102/103:105, D98:99; Arial10/middle/wrap; F/G mismatch #D9EAD3/#F4CCCC, I/J nền trắng. Export XLSX xác minh validation I/J3:123 kế thừa. Đã kiểm UI zoom90%. Không reset bảng hoặc ghi đè chỉnh sửa live.

# QA Sheet style tracker

Snapshot 2026-10-28 — style version 5, working default từ `agents-build-themes/skills/qa/qa-theme/assets/sheet-style.json`.

Đích: [Novaire / Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), gid 0. Phạm vi task A1:J100; body tiêu chí 3:95, sources 96:100.

- 10 cột, widths 56/141/151/191/221/300/300/301/100/140 px.
- Header hai tầng: F1:G1 Nội dung, F2 Figma/G2 Hiện tại; các header khác gộp dọc. Arial 11 bold white trên #1F4E78.
- Body Arial 10, wrap, vertical middle; gộp STT/Section/Thiết bị/Thành phần khi cùng nhóm.
- Ô thường nền trắng; chỉ mismatch F/G xanh #D9EAD3 và đỏ #F4CCCC; không tô cả hàng trạng thái.
- I3:I95 dropdown single-select Lần 1–Lần 5, Bỏ qua. J3:J95 single-select Khớp, Chưa khớp, Chưa xác minh, Không áp dụng, Browser render không khớp, Figma làm tròn, Bỏ qua. Cả hai dùng kiểu Khối; xanh/đỏ/vàng/xanh lam cho các trạng thái đang dùng.
- API dùng khởi tạo; khi connector không còn khả dụng, hoàn thiện bằng CUA. UI xác minh merge, wrap, middle, màu, chip, phạm vi validation và Drive saved. Dữ liệu đã đọc lại đủ 98 dòng body.

Không đổi sharing, không tạo file đích thay thế.
