# 14. Timeline — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 14 | Timeline | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Ảnh và nội dung mốc2010; đủ4 mốc; bố cục ngang Desktop/dọc Mobile; padding96/48px; chuyển mốc2015 hoạt động (Mobile). |  |  |  | Khớp |
| 14 | Timeline | Chung (Desktop, Mobile) | Timeline pagination | Dấu mốc chưa chọn | Chấm xám đặc | Vòng tròn rỗng | Fix lần 2: Kiểm preset pagination; nếu không hỗ trợ fill thì custom scoped dấu chưa chọn. | Lần 2 | Khớp |


## Lịch sử — timeline-color-schemes-2026-10-22.md

### Timeline color schemes — 2026-10-22

Scope: Timeline preset and homepage instance on localhost:9300. Tested scheme-1 (white), scheme-2 (light gray), and scheme-3 (dark), at 1440px desktop and 375px mobile.

### Findings and changes

- The preset's explicit active color `#181818` matched scheme-3's background, hiding the active milestone label/dot and progress. Removed preset and homepage active/inactive color overrides so existing scheme fallbacks resolve dynamically.
- The explicit inactive `#CCCCCC` made clickable year labels too faint on light schemes. Inactive labels and dot outlines now default to `--body-color`. The decorative connecting track continues to use the border token.
- Heading, body, eyebrow square and primary navigation buttons already followed their scheme correctly. Custom active/inactive color settings remain available and retain precedence.

### Verification

Read computed foreground/background styles in the real preview for all three schemes on desktop and mobile; switched selected milestones using their buttons.

| Scheme | Background | Body/inactive label | Contrast | Heading/active label | Contrast |
| --- | --- | --- | --- | --- | --- |
| 1 | #FFFFFF | #626262 | 6.10:1 | #181818 | 17.76:1 |
| 2 | #F5F5F5 | #626262 | 5.59:1 | #181818 | 16.29:1 |
| 3 | #181818 | #DFDFDF | 13.32:1 | #FFFFFF | 17.76:1 |

Primary arrow buttons resolve white-on-dark in schemes 1/2 and dark-on-white in scheme 3. Eyebrow icons follow heading/accent colors. Mobile milestone selection retains the same scheme colors. Screenshot: `output/timeline/qa-scheme-3.png`.

Restored the original scheme-2 after testing and reset the browser viewport. Theme Check: 425 files, zero errors, nine warnings elsewhere in the worktree. `git diff --check` passed. This audit covers Timeline, not every section in the repository.


## Lịch sử — remaining-homepage-2026-10-23.md

### 14 — Timeline

Ảnh và nội dung mốc2010; đủ4 mốc; bố cục ngang Desktop/dọc Mobile; padding96/48px; chuyển mốc2015 hoạt động (Mobile).


| Thiết bị | Thành phần / Tiêu chí | Figma | Hiện tại | Hướng xử lý | Trạng thái |

| --- | --- | --- | --- | --- | --- |

| Chung (Desktop, Mobile) | Timeline pagination / Dấu mốc chưa chọn | Chấm xám đặc | Vòng tròn rỗng | Kiểm preset pagination; nếu không hỗ trợ fill thì custom scoped dấu chưa chọn. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 14 | Timeline | `kinetra_timeline` |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 67 | Timeline · Dấu mốc chưa chọn | Inactive Timeline dot fill#B3B3B3; active#181818, đổi2010/2015 vẫn hoạt động. |
