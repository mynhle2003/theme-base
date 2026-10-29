# Norden — Homepage QA

**Cập nhật28/10/2026 — Fix Lần1:** 30/30 dòng được giao đã sửa bằng preset/config và xác nhận Khớp trên [preview local9300](http://127.0.0.1:9300/) ở Desktop1920/Mobile375px. Sheet hiện49Khớp,67Chưa khớp,1Figma làm tròn. Quick add/Quick view Mobile đã ẩn theo yêu cầu mới nhất. Đã bỏ nền F/G của30 dòng đạt, giữ số đo gốc/cờ Lần1 và lịch sử.

Chốt lượt QA thiết kế đầu tiên: **27/10/2026**. Đã đối chiếu Desktop1920px/Mobile375px cho **16section**:13section nội dung, Announcement bar, Header, Footer. **97dòng chưa khớp**,19dòng khớp (gồm3dòng tổng quan và16summary),1dòng Figma làm tròn. 30dòng được gắn Lần1 vì có preset/composition phù hợp; chưa thực hiện fix.

- [Google Sheet Norden → Homepage](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0) — tài khoản `minhle@beae.com`, gid0.
- [Preview public](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931) — xác minh Norden local preview Draft, theme192706117931; không dùng localhost9300.
- [Figma Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323), [Figma Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382).
- [Dữ liệu báo cáo](homepage-qa-data.json). Nguồn/phạm vi/preview public đã lưu cuối Sheet tại122–129.

## Kết quả cần chú ý

Our Favorites có4card cao0px ở cả Desktop/Mobile, cần sửa render trước khi kiểm lại chi tiết. Các nhóm lỗi lặp gồm typography Eyebrow, Product card/Price, progress bar, padding Button Mobile và localization Footer. Lỗi được tách theo thuộc tính; không tăng padding/height cha để bù lỗi con.

## Danh mục đã kiểm

|STT|Section|Sheet|Doc|
|---|---|---|---|
|1|Announcement bar|[Hàng6–6](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A6:J6)|[Chi tiết](homepage-announcement-bar.md)|
|2|Header|[Hàng7–17](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A7:J17)|[Chi tiết](homepage-header.md)|
|3|Slideshow|[Hàng18–26](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A18:J26)|[Chi tiết](homepage-slideshow.md)|
|4|Collection list (Shop by Room)|[Hàng27–30](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A27:J30)|[Chi tiết](homepage-shop-by-room.md)|
|5|Scrolling text|[Hàng31–32](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A31:J32)|[Chi tiết](homepage-scrolling-text.md)|
|6|Featured collection (The Everyday Comfort Sofa)|[Hàng33–52](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A33:J52)|[Chi tiết](homepage-featured-collection-banner.md)|
|7|Hotspot (Shop the Look)|[Hàng53–56](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A53:J56)|[Chi tiết](homepage-hotspot.md)|
|8|Featured collection (New Arrivals)|[Hàng57–76](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A57:J76)|[Chi tiết](homepage-new-arrivals.md)|
|9|Collection list (3 cards)|[Hàng77–79](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A77:J79)|[Chi tiết](homepage-collection-cards.md)|
|10|Hero banner (Outdoor Furniture)|[Hàng80–91](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A80:J91)|[Chi tiết](homepage-outdoor.md)|
|11|Content box (Testimonial)|[Hàng92–94](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A92:J94)|[Chi tiết](homepage-testimonial.md)|
|12|Our Favorites|[Hàng95–96](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A95:J96)|[Chi tiết](homepage-our-favorites.md)|
|13|Collapsible content (FAQs)|[Hàng97–102](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A97:J102)|[Chi tiết](homepage-faq.md)|
|14|Collection list (Follow Us)|[Hàng103–107](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A103:J107)|[Chi tiết](homepage-follow-us.md)|
|15|Icon with text (Benefits)|[Hàng108–108](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A108:J108)|[Chi tiết](homepage-benefits.md)|
|16|Footer|[Hàng109–119](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A109:J119)|[Chi tiết](homepage-footer.md)|

## Điều kiện và giới hạn kết luận

Đo qua Computer Use/DOM computed styles với innerWidth1931/386, scrollbar11px, content1920/375, DPR1. Đã đọc thông số nguồn qua Figma UI; cuối lượt Figma MCP hoạt động, dùng đọc xác nhận vector, typography, textCase và manifest. Detach text style chỉ trên hai root tạm được cho phép, sau đó Undo; không sửa file gốc.

Phạm vi là hai frame homepage được giao và control hiện diện trên trang. Đã thử menu Mobile, swipe carousel, pin Hotspot, Next/Previous/pagination, FAQ và Footer accordion. Không kết luận pixel-perfect các trạng thái không có frame riêng (drawer, search overlay, slide2, success newsletter). Không gửi newsletter, tạo đơn hay mở rộng thành release/editor QA.

Hoàn tất QA nghĩa là hoàn tất kiểm và báo cáo phạm vi này; các dòng Chưa khớp vẫn cần fix và QA lại. Không có code/config/theme asset nào được sửa trong lượt QA. Các thay đổi implementation có sẵn trong worktree không thuộc báo cáo này.

## Xác minh báo cáo

CSV export từ Google Sheets đọc lại khớp toàn bộ cột E–J của117hàng dữ liệu (3–119); merge nhóm section/device/component, Arial10, wrap/middle, freeze2, header navy, chip I/J và highlight F/G đã kiểm bằng ảnh Google-rendered. Nền ô trạng thái trắng, chỉ chip có màu. Style version5.

Raw evidence và ảnh Sheet: `/private/tmp/norden-homepage-qa-20261026/`. Các checkpoint cũ trong doc section được giữ như lịch sử; bảng hiện hành ở đầu doc và Sheet là kết luận cuối.

## Cleanup

Đã xóa đúng hai root tạm `10012:544` (676descendant) và `10012:1371` (505descendant) trong Layouthub-copy sau khi lưu bằng chứng. MCP trả `temporaryRootsAbsent=true`, `preservedOtherRoots=true`; Homepage2 `10017:1613` và Homepage3 `10017:2513` còn nguyên. Không sửa file Figma gốc.


## Fix Lần 1 — 28/10/2026: đã áp local, chờ QA preview

Đã áp 14 mapping preset/config vào `config/settings_data.json` và `templates/index.json`, tương ứng **26 dòng lỗi**. Quick view và Quick add **giữ luôn hiện trên Mobile** theo yêu cầu người dùng; 4 dòng51/52/75/76 không áp đề xuất ẩn. Giữ nguyên Figma/Hiện tại, cờ Lần1 và trạng thái lịch sử; ghi tiến độ vào note ô J của30 dòng được giao. Mapping chi tiết nằm trong đúng doc section ở danh mục trên và `fix_cycles` của JSON báo cáo.

- Eyebrow:14→16px, weight500→600, tracking0.5px→0em; consumer Homepage: hai slide Slideshow, Featured Banner, Outdoor, Follow Us.
- H4 line-height:1.4→1.5; consumer Product card ở Featured Banner, New Arrivals, Outdoor và những card Hotspot/Our Favorites nếu dùng chung. Các consumer H4 khác toàn theme (collection/product pickup/countdown) cần kiểm thêm ngoài manifest Homepage; chưa tuyên bố đã QA những trang đó.
- Padding nút Mobile:24→28px; rà toàn bộ button Homepage gồm Slideshow, Banner, Outdoor, FAQ và Footer newsletter. Giữ Desktop32px và chiều cao nút.
- Marquee: scheme riêng nền trắng/heading#28313D, không đổi scheme1 dùng chung.
- Banner: Group Eyebrow+Heading gap12px; gap nhóm→Button24px; Mobile padding ngang28px/dọc32px; Desktop padding40px giữ nguyên.
- FAQ: gap description→CTA Mobile32→36px; Desktop36px giữ nguyên.

Validation: JSON parse, option/range/type của setting, tham chiếu block_order và control có sẵn đều đạt. Shopify Theme Check hoàn tất0error/0warning. Số lượng/thứ tự section JSON giữ nguyên. Không sửa Liquid/CSS/JS/schema/asset/store data.

**Chưa QA lại preview**: chưa upload cấu hình mới lên Shopify. Tiến trình watcher Norden PID81441 đã tạm dừng SIGSTOP để ngăn tự upload; không tiếp tục watcher nếu chưa có quyền deployment. Cần deploy đúng draft192706117931 rồi đo mới toàn bộ16section Desktop/Mobile; không dùng preview cũ để đổi trạng thái sang Khớp. Hiện vẫn97dòng Chưa khớp theo lượt QA ban đầu, không có lỗi nào được chứng nhận đã đạt sau sửa.

Snapshot trước sửa và log validation: `/private/tmp/norden-preset-fix-20261028/`. Snapshot Sheet trước mutation: `/private/tmp/norden-preset-fix-20261028-sheet-before.json`. Các file khác đang dirty từ trước được giữ nguyên.


## Xác minh Fix Lần 1 — 28/10/2026

Preview người dùng chỉ định: http://127.0.0.1:9300/. Owner preview xác nhận checkout Norden, draft192706117931. Người dùng đã khởi động lại preview trước lượt kiểm này. Đã đo output mới, font loaded/Instrument Sans; Desktop viewport1931/client1920, Mobile386/client375, scrollbar11px. Chrome extension bị ngắt nhiều lần; chuyển sang Computer Use in-app browser cùng URL local để đo ổn định. Viewport override được reset sau đo.

**30/30 tiêu chí Lần1 đã Khớp**, gồm4dòng Quick view/Quick add51/52/75/76 được giao sửa lại trong yêu cầu mới. Cấu hình false đã xác minh bằng computed display:none của action wrappers, không chỉ nhìn setting; Desktop enabled giữ nguyên. Marquee cần áp scheme trên section chứa thay vì block để runtime nhận màu. Các mapping khác đã xác minh bằng số đo mới; xem doc của8section tương ứng.

Đã quét16section trên Desktop/Mobile, lưu heading/eyebrow/button/card/image geometry và ảnh qua toàn trang để rà consumer global. Slideshow vẫn D800/M670; Outdoor D700/M470; Benefits D123/M368. Our Favorites vẫn mất chiều cao card, không được sửa trong phạm vi preset. Chưa chứng nhận67dòng còn lại đã đạt; các vấn đề price/badge/material/swatches, progress/icon, Header/Footer và constraint/media cũ tiếp tục giữ Chưa khớp. Đây là QA Homepage và consumer bị ảnh hưởng, không phải release/editor QA hay xác nhận các page khác đạt.

Sheet: cập nhật đúng30ô J thànhKhớp, xóa user background F/G; rule highlight chỉ áp Chưa khớp nên nền hiệu dụng của60ô đối chiếu đã trắng. API đọc lại xác nhận A:I nguyên vẹn, native validation giữ nguyên,117dòng vẫn còn. Snapshot trước/sau và số đo mới ở `/private/tmp/norden-preset-fix-20261028/qa/`. Số đo F/G ban đầu được giữ như lịch sử, kết quả mới ở note ô J/doc section.

Skill fix-qa-preset đã có quy tắc chỉ đánh dấu sau QA và bỏ nền hai cột; áp dụng quy tắc hiện hành, không thêm bản sao. Không publish, commit hay chạy lệnh push toàn theme. Preview hiện hành phản ánh file local qua tiến trình người dùng đã chạy.
