# Main → Arche: Update animation block

Ngày: 2026-10-13. Nguồn: personal `main` của repo `arche-theme`; revision sẽ được chốt khi áp dụng. Đích: repo `arche-theme`, branch `theme/arche-theme`.

Doc này ghi yêu cầu update **cho Arche**, độc lập với [handoff cho Essen](arche-to-essen.md). Chỉ ghi doc; trạng thái implementation, QA, upload preview và publish được theo dõi riêng.

Quy tắc: `agents-build-themes/skills/build/new/build-theme/references/variant-updates.md`. Trước update phải audit gap ở chính Arche; nếu đã đáp ứng thì ghi `skipped` kèm bằng chứng, chưa xác minh thì giữ `pending`, contract không tương thích thì ghi `conflict`.

| Mã update | Revision | Phạm vi | Trạng thái Arche | Dependency |
| --- | --- | --- | --- | --- |
| MAIN-ARCHE-BLOCK-ANIMATION-001 | 1 | Rebuild animation theo main → khôi phục preset cũ tương ứng → clear doc custom animation sau QA | applied — local; live QA pending | Contract main và mapping block/setting cũ → mới đã xác minh |

## MAIN-ARCHE-BLOCK-ANIMATION-001 — Animation block theo main và khôi phục preset

Ngày: 2026-10-13. Revision: 1. Owner yêu cầu bổ sung vào doc update variant. Nguồn implementation là personal `main` của repo theme; chốt branch/commit nguồn và commit đích trong receipt khi thực hiện update. Đích `arche-theme` (repo hiện tại), branch `theme/arche-theme`: **pending**, chưa rebuild, sửa preset, dọn doc custom, upload hoặc publish.

### Phạm vi và trình tự áp dụng

1. Audit animation block ở theme đích và contract trên `main` tại revision được chọn. Nếu đích đã theo main, preset đã được bảo toàn và không còn ghi chú custom animation lỗi thời, ghi `skipped` cùng bằng chứng. Nếu main chưa có contract animation thay thế hoặc mapping chưa xác minh được, giữ `pending`/ghi `conflict` theo nguyên nhân; không copy runtime custom Arche để thay main.
2. Trước rebuild, snapshot giá trị animation cũ của từng block trong section/block presets, template JSON, section-group JSON và saved compositions/settings có liên quan. Ghi đường dẫn, block type/ID, ngữ cảnh và giá trị thực tế, gồm `animation_type`, `animation_delay`, các giá trị `none`/`0` và trường tương đương nếu contract đích dùng ID khác. Snapshot là dữ liệu của theme đích, không lấy default main hoặc cadence của biến thể khác để ghi đè.
3. Rebuild phần implementation/schema animation theo main, rồi **set lại giá trị preset cũ tương ứng** trên block/setting mới bằng mapping tường minh đã kiểm tra. Khôi phục cả saved instances liên quan; giữ content, media, thứ tự và các setting không thuộc animation. Giữ block ID khi contract cho phép. Chỉ dùng default main cho trường mới không có giá trị cũ tương ứng; không reset toàn bộ preset về default main hoặc suy đoán mapping chỉ theo vị trí block. Giá trị/type cũ không còn được hỗ trợ phải được báo rõ để giải quyết trước khi áp dụng.
4. Sau khi rebuild, khôi phục giá trị và QA đạt, **clear doc custom liên quan đến animation đã được thay bằng main** trong customization record và build plan của theme đích. Xóa hoặc sửa riêng mô tả/entry animation lỗi thời; nếu cùng file còn typography, token/font helpers, performance hoặc custom khác thì giữ record cho phần còn khác main. Không xóa nguyên dòng/file chỉ vì có nhắc animation. Preset-only không tính là custom implementation. Giữ lịch sử/receipt và mã update này để truy vết nguồn main, mapping và QA; dọn mô tả custom đang áp dụng không đồng nghĩa xóa lịch sử.

Owner cho phép đưa phần animation custom cũ về main trong mã update này; đây là ngoại lệ có phạm vi đối với luật giữ custom khi update base. Các custom ngoài animation vẫn theo [Theme customization policy](../theme-customization-policy.md). Không thực hiện cleanup trước khi migration thành công.

### Acceptance và trạng thái

- Implementation animation theo đúng commit main được ghi trong receipt; không còn runtime/schema custom cũ trong phạm vi đã thay thế hoặc dependency dư.
- Đối chiếu snapshot trước/sau: mỗi giá trị preset/saved instance cũ được khôi phục vào trường tương ứng hoặc có mapping được giải quyết rõ ràng; `none` và delay `0` không bị thay bằng default. Content/media/order và setting ngoài animation giữ nguyên.
- Parse JSON/schema, chạy Theme Check và customization coverage; QA animation desktop/mobile, motion on/off, reduced motion, nội dung vẫn đọc được, Theme Editor add/remove/duplicate/reorder/select/deselect/save/reload và teardown/reinit theo contract main. Không đánh dấu verified khi chưa có QA đích.
- Doc custom hiện hành chỉ còn các khác biệt thực tế so với main; ghi receipt cho phần animation trở về main và preset được bảo toàn. Upload preview/publish theo dõi riêng.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | MAIN-ARCHE-BLOCK-ANIMATION-001 | chưa áp dụng | pending | Chỉ bổ sung yêu cầu rebuild theo main → khôi phục preset cũ tương ứng → dọn doc custom animation sau QA; chưa sửa implementation/preset hoặc upload/publish Arche. |


## Receipt áp dụng local — 2026-10-13

- Nguồn: personal main `e84d0689249b5ae26d3c5c066c90348e4aae06f4`, đã fetch kiểm tra origin/main. Đích: Arche `theme/arche-theme`, HEAD trước sửa `212709929a45f3b454dea46fe657031f678f3ed7`; patch local chưa commit.
- Gap xác nhận: runtime Arche chỉ quét leaf có data-block-animation; main tự quét Image card và các card/list. Đã thay runtime bằng đúng file main, phục hồi body motion switch và CSS pending state. Không copy layout/critical.css toàn file.
- Main revision này không có schema animation thay thế cho sáu leaf block. Mapping block/setting là identity; giữ control/snippet tương thích để preset cũ vẫn hoạt động trên runtime main. Không xóa setting hoặc bịa block/option mới. Không rebuild composition khi contract không đổi.
- Đối chiếu 276 file schema/preset/composition byte-identical; giữ đủ 399 animation entries, None/0, content/media/ID/order. Runtime main xử lý Image card toàn article và bỏ animation child để tránh double transform, giữ giá trị saved child cho trường hợp block được dùng ở context khác.
- Dọn entry runtime custom đã trở về main, cập nhật mô tả layout/build plan và đánh dấu các receipt Elara cũ đã được thay thế. Giữ record CSS/leaf hooks còn khác main và custom ngoài animation.
- QA: 23 main regression tests PASS; JS syntax PASS; full Theme Check 0 errors / 5 existing warnings. Live storefront/Theme Editor save/reload/lifecycle QA pending nên trạng thái `applied`, chưa `verified`. Không commit/push/upload/publish.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | MAIN-ARCHE-BLOCK-ANIMATION-001 | revision 1, patch local tại HEAD 212709929a45f3b454dea46fe657031f678f3ed7 | applied | Runtime đúng main, 399 giá trị giữ nguyên; QA local đạt, live editor pending. |

Browser QA local: 8 Chrome cases PASS tại 375/1920px — Image card entrance, nested child ownership, Rotate words, motion on/off, reduced motion và no-JS. Đây là fixture dùng CSS/JS thật, không phải QA storefront/Theme Editor live.

Customization coverage: checker báo các path ngoài phạm vi migration chưa được ghi nhận (gồm extracted component CSS và các section/block khác); không đánh dấu full coverage PASS. Các implementation path của migration là assets/block-animations.js (đã bằng main), assets/critical.css và layout/theme.liquid (vẫn có record).

### Preset follow-up — 2026-10-13

Owner subsequently requested new animation types/delays for existing Arche presets, excluding Header/Footer/FAQ/scroll. The old-value preservation receipt above remains historical; current configuration follows [Arche animation preset audit](../audits/arche-animation-presets-2026-10-13.md). This follow-up changes configuration only, with no upload/publish.
