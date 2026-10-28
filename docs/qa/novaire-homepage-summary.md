# QA Novaire Homepage theo section

Tổng hợp các kết quả QA và lượt sửa ngày 28/10/2026 cho 19 nhóm trên Homepage: Announcement bar, Header, 16 section nội dung và Footer. Mỗi mục ghi kết quả mới nhất đã có bằng chứng, thay thế số đo cũ của cùng tiêu chí. Đây là bản tổng hợp hồ sơ, không phải lượt đo runtime mới hay kết luận toàn theme đã đạt.

Nguồn đối chiếu: [Sheet Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0), [Figma Clare](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare) và các hồ sơ QA từng section. Số hàng trên Sheet đã thay đổi qua các lượt chèn tiêu chí; tra theo tên section/thành phần thay vì dùng số hàng lịch sử.

Các lượt đo chủ yếu dùng Desktop client 1920px và Mobile client 375px, draft 192827490603 trên store `layouthub-template-v2.myshopify.com`. Một số lượt có client Desktop 1905px hoặc 1880px; số đo chỉ có giá trị trong viewport được ghi ở từng hồ sơ. Bản tổng hợp không chứa test, ảnh chụp, JSON/CSV đo đạc hoặc log thô.

## 1 Announcement bar

Instance `header-group/announcement-bar`, type `announcement-bar`.

- Đã khớp nội dung, typography, màu nền và căn giữa. Chiều cao Desktop 45px, Mobile 41px.
- Text rộng 314,03px so với Figma 310px được hồ sơ chấp nhận là sai khác metrics/làm tròn; vẫn một dòng và giữ căn giữa.

## 2 Header

Instance `header-group/header`, type `header`.

- Menu Desktop Outfit 400, 12px, tracking 2px và màu #3A3A3A đã được xác nhận sau sửa.
- Mobile logo căn giữa, Menu bên trái, Search và Cart bên phải; chiều cao 60px. Desktop giữ 76px.
- Icon đã đối chiếu path, viewBox và stroke nguồn; dùng currentColor #3A3A3A. Menu Mobile mở/đóng bằng Escape, Search mở và focus input, dropdown Desktop mở được.
- Chưa kiểm đầy đủ mọi trạng thái hover/focus và Theme Editor lifecycle. Các kiểm hành vi trên không thay cho bộ automated test Header.

## 3 Hero

Instance `index/hero`, type `hero`.

- Sau hiệu chỉnh token Medium và padding 80px mỗi phía, tổng chiều cao Desktop 800px = 640 + 80 × 2; Mobile 550px = 390 + 80 × 2, khớp nguồn.
- Không overflow ngang trong lượt đo; crop hai ảnh và nội dung căn giữa được giữ.
- Khung Button vẫn chưa xác minh. Không suy toàn section đạt chỉ từ chiều cao/padding.

## 4 Collection tabs

Instance `index/collection_tabs`, type `collection-tabs`.

- Ba tab tải đúng danh sách. Desktop có 5 sản phẩm/4 cột; Next/Previous hoạt động, navigation hiện khi hover theo chấp nhận của người dùng. Content Desktop 1600px.
- Giá thường sau sửa dùng Heading #3A3A3A trên Desktop/Mobile; sale và compare-at giữ token riêng.
- Mobile 1 card đầy đủ + preview, gap 12px được chấp nhận theo quy ước Homepage; không yêu cầu width card khớp tuyệt đối khi chưa có chuẩn chung.
- Chiều cao Mobile 749,75px so với nguồn 694px vẫn giữ Bỏ qua/Chưa khớp; không giảm padding để bù width card.

## 5 Collection list

Instance `index/categories`, type `collection-list`.

- Desktop 3 cột, gap 20px. Mobile giữ tỷ lệ ảnh 6:7, gap 10px, 1 card đầy đủ + preview.
- Mobile cao 387,52px so với nguồn 355px được chấp nhận theo quy ước preview tương đối; không ghi là khớp số đo tuyệt đối.
- Card 3 dùng CAVATION OUTFIT theo nội dung Desktop của cùng item khi phần Mobile nằm ngoài clip; đã xác nhận khớp.

## 6 Rich text

Instance `index/brands_intro`, type `rich-text`.

- Width Heading/Text Desktop đã sửa về 830px, khớp nguồn; Mobile 343px. Gap 16px, padding Desktop 80px và Mobile 56px.
- Chiều cao Desktop 375,19px so với 375px được chấp nhận làm tròn; Mobile 417px.
- Range width dùng chung Heading/Text đã đổi thành 320–1320px, step 10. Không thay global page width hoặc giá trị consumer khác; giới hạn tối đa mới cần được giữ khi chỉnh preset sau này.

## 7 Featured collection

Instance `index/featured_collection`, type `featured-collection`.

- Giá thường dùng Heading #3A3A3A sau sửa chung.
- Progress Desktop đã xác nhận track cao 0,5px, radius 10px, màu #E6E6E6; fill #3A3A3A/radius 1px; gap 32px. Pagination Mobile đã tắt trong instance và preset.
- Width track Desktop 1122px so với nguồn 1124px vẫn Bỏ qua/Chưa khớp; không tự quy thành làm tròn. Không suy toàn section đạt từ các tiêu chí pagination đã sửa.

## 8 Image cards

Instance `index/new_collections`, type `image-cards`.

- Hai ảnh/overlay, Eyebrow, Heading, Button, nội dung, typography và màu đã khớp. Desktop hai cột, Mobile xếp dọc; tỷ lệ ảnh 5:4.
- Chiều cao Desktop 798,39px so với 798,4px; Mobile 616,78px so với 616,8px: chấp nhận làm tròn.
- Inset overlay Desktop chưa xác minh: text wrapper 866px so với nguồn 834px cần đo đúng parent/ownership padding trước khi kết luận lỗi.

## 9 Countdown

Instance `index/spring_sale`, type `countdown`.

- Padding Desktop đã sửa thành 64px mỗi phía. Chiều cao 253,98px so với nguồn 255px được người dùng chấp nhận khớp tương đối; không gọi là khớp tuyệt đối hoặc làm tròn Figma.
- Heading Mobile đã resolve đúng token: Outfit Light 26px, line-height 140%, tracking 2,56px. Hai dòng khoảng 72,78px so với box nguồn 72px được chấp nhận theo làm tròn từng dòng.
- Timer là số minh họa khi thiết kế không quy định deadline chiến dịch; không thay ngày kết thúc chỉ để khớp số mẫu. Pending token Mobile đã được giải quyết.

## 10 Shop the look carousel banners

Instance `index/statement_stacks`, type `shop-the-look-carousel-banners`.

- Heading đã sửa dùng token xl: Desktop 32px/44,8px, Mobile 26px/36,4px, tracking 2,56px ở cả hai breakpoint.
- Ảnh Steele, tên/giá, typography product card, View product và hai dot đã được xác nhận; content Desktop 1600px.
- Gallery của lượt look thứ hai/biến thể xanh chưa đối chiếu đầy đủ.

## 11 Text marquee

Instance `index/values_marquee`, type `custom-section`.

- Nội dung ba Heading, font Outfit, màu #C7876B và ảnh xen giữa đã khớp.
- Còn lệch tracking Desktop: nguồn 10px, runtime 1,44px.
- Mobile còn lệch font size 44px/68px, tracking 6px/1,44px và weight hai Heading đầu/cuối 400/300; Heading New Season Edit giữ 300 theo nguồn.
- Gap ở cùng phase chuyển động và giá trị px của radius token chưa được xác minh. Các khoảng thiếu control không được coi là đã sửa.

## 12 Scrolling cards

Instance `index/scrolling_cards`, type `scrolling-cards`. Our Story và Our Value là hai card trong cùng section; không tách lại thành hai section QA.

- Hai card có đúng ảnh/nội dung, Desktop nằm ngang, Mobile ảnh trước text. Text Our Value đã sửa thành 14px/21px ở hai breakpoint.
- Padding trên/dưới đã xác minh từ wrapper Figma và runtime: Desktop 80/80px, Mobile 56/56px.
- Phạm vi QA hiện hành gồm nội dung/style trong card và padding trên/dưới. Padding ngang, gap giữa hai card và chiều cao tổng không nằm trong phạm vi chốt này.

## 13 Video with products

Instance `index/founder_testimonials`, type `video-with-products`.

- Có 5 poster và 5 nguồn MP4 riêng; bản lặp trong carousel dùng lại các nguồn đó. Đạt yêu cầu thumbnail/video đã gán theo quy ước QA video hiện hành.
- Text đã sửa 14px/21px. Heading Desktop 32px/44,8px; Mobile 26px/36,4px, tracking 2,56px, màu #3A3A3A.
- Heading Mobile còn xuống hai dòng so với một dòng ở nguồn; giữ Chưa khớp dù typography đã khớp. Quy ước hiện hành không yêu cầu phát/dừng từng clip, nên không suy playback toàn bộ đã được kiểm.

## 14 Featured product

Instance `index/featured_product`, type `featured-product`.

- Romilly, giá $15/$30, description, 5 media/thumbnails và options đã hiện đúng. Sticky Desktop đã bật và xác nhận bằng computed position.
- Thumbnail Desktop 80×100px/gap 16px; Mobile 64×80px/gap 6px; main–thumbnail Mobile 8px. Ảnh sở hữu ratio 4:5, viền chọn inset 1px dùng Heading #3A3A3A. Click thumbnail chuyển đúng media.
- Option chưa chọn dùng #3A3A3A; nhãn Colour đã đổi từ resource sản phẩm. M vẫn Sold out theo dữ liệu thật, không sửa inventory để khớp hình mẫu.
- Sold-out mask nối đúng hai góc ở các khung thử, opacity 60%. Size chart đã có icon thước; Desktop căn giữa và Mobile bottom sheet được người dùng chấp nhận. Popup mở/đóng được; nội dung bảng số đo chưa có nguồn chuẩn riêng để kết luận khớp.
- Chiều cao Mobile còn cần phân rã spacing/composition; không ép height hoặc tính Buy it now đã được yêu cầu ẩn thành lỗi thiếu thành phần. Chưa audit lại crop mọi slide và toàn bộ focus/Escape/scroll của popup.

## 15 Press logos

Instance `index/press_logos`, type `custom-section`.

- Sáu logo Mobile đã sửa về 160×80px và xác nhận cả sáu ảnh tải xong. Desktop giữ 185×92,5px; không overflow ngang.
- Vùng nhìn/opacity Marquee vẫn Bỏ qua/Chưa khớp. Kết quả sửa kích thước logo không đóng tiêu chí này.

## 16 Blog posts

Instance `index/articles`, type `blog-posts`.

- Kết quả mới nhất: 10 Khớp, 1 Figma làm tròn, 0 Chưa khớp trong 11 tiêu chí đã ghi; đủ 7 lỗi được giao đã sửa và recheck.
- Ba cover được export đúng khung crop 4:3 từ bản Figma copy, thay vào đúng article; kích thước ảnh 515×386px. Đã kiểm đủ 3 card ở Desktop/Mobile, gồm swipe từng card.
- Kết luận crop còn lệch và blocker copy/export ở checkpoint cũ đã được thay thế. Trang Figma copy tạm vẫn được giữ; chưa có quyền xóa trang đó.

## 17 Gallery carousel

Instance `index/instagram`, type `gallery-carousel`.

- Kết quả mới nhất: 6 Khớp, 1 Chưa khớp/Bỏ qua, 1 Chưa xác minh. Bốn mục được giao đều đã sửa: Tag line-height 24px; Header–ảnh Mobile 36px; icon/button Mobile 24px; overlay gap 8px.
- Desktop 5 ảnh vuông đúng thứ tự, gap 16px; Mobile 1 ảnh + preview/gap 12px được chấp nhận theo quy ước. Không arrows/pagination và không overflow ngang.
- Inset Desktop 48px so với nguồn 20px giữ Bỏ qua/Chưa khớp. Radius token 2xl chưa resolve số px; giữ Chưa xác minh.

## 18 Benefits

Instance `index/benefits`, type `custom-section`.

- Desktop 4 benefit; Mobile 1 slide và dot. Heading/Text slide đầu đúng typography/màu; chiều cao ghi nhận Desktop 220,8px, Mobile 260,8px.
- Nội dung Easy returns đã sửa thành “Free return for 30 days for any order delivered in France quickly” trong instance và preset, recheck Khớp.
- Bốn icon SVG 36px đã có nhưng chưa đo riêng biên nhìn thấy/stroke từng hình; không nhận toàn bộ icon đã đạt.

## 19 Footer

Instance `footer-group/footer`, type `footer`.

- Privacy policy, Terms of service và Cookies Settings đã hiện đủ ở Desktop/Mobile, cỡ chữ 12px, không overflow ngang. Cookies Settings dùng native privacy API, có retry/fallback và cleanup listener.
- Cookie banner của store đã được cấu hình 299/299 khu vực theo yêu cầu trước đó. Cấu hình này áp dụng toàn store.
- Popup consent trên HTTPS còn chưa xác minh vì storefront khóa mật khẩu; localhost báo lỗi native service. Chỉ chốt nội dung/hiển thị ba liên kết, không chốt popup đã đạt.
- Hai mục Mobile giữ quyết định Bỏ qua: Text/font size còn Chưa khớp; Menu heading/nội dung ghi Design lỗi.

## Kiểm tra chung và việc còn lại

Theme Check gần nhất ngày 28/10/2026: 404 file, 0 lỗi, 8 cảnh báo. Các lượt smoke ghi nhận không overflow ngang tại viewport đã kiểm; không thay cho QA mọi template hoặc Theme Editor lifecycle.

Ưu tiên còn lại là các lệch đã xác minh của Text marquee và wrap Heading Mobile của Video. Các mục cần bằng chứng thêm gồm Hero Button, Image cards overlay inset, Gallery radius, look thứ hai, Benefits icon và Footer consent trên HTTPS. Các mục người dùng đặt Bỏ qua được giữ nguyên; chỉ sửa khi được giao lại.

Khi cập nhật báo cáo, gom thay đổi vào đúng section và thay kết luận cũ của cùng tiêu chí. Commit chỉ chứa tài liệu QA tổng hợp này; test, output thô, lịch sử thao tác và tài liệu local khác không thuộc phạm vi đẩy lên.
