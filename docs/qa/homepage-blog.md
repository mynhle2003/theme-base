# Blog posts — Crop Figma hoàn tất / recheck 2026-10-28

[Sheet Homepage A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105): **10 Khớp, 1 Figma làm tròn, 0 Chưa khớp**. Đã sửa và recheck đạt đủ7 lỗi được giao Lần1/Lần2. Dòng crop96 nay Khớp/Lần2; giữ F/G ban đầu và toàn bộ lịch sử H. Kết luận crop Chưa khớp của checkpoint dưới đã được thay thế.

## Hướng xử lý mới đã thực hiện

Người dùng chỉ định copy section/layer sang Figma copy, export đúng khung đã crop rồi thay ảnh bằng `$setup-store` (skill nguồn `store-content-media`). Đã copy nguyên section Desktop47052:14436 từ file `vsUDZS8CZ0sa1pruNqu0eb` sang trang tạm **QA Blog crop 2026-10-28** trong file **Layouthub copy** `GUJw3Y8gUBn8C5rISC5FPV`; không sửa file nguồn. Chọn riêng Image4:3/Clip content của từng card, không export toàn card chứa chữ. Export PNG mặc định1x cho khung514.67×386 thành515×386px. File tại Downloads; không đặt binary trong repo.

**Đính chính quyền nguồn:** thao tác Copy bằng UI thực hiện được và giữ crop/variable; export từ bản copy cũng thành công. Nhận định trước về “khóa copy/export” chưa có đủ bằng chứng và không còn là blocker. MCP nguồn vẫn báo quota View-seat; MCP bản copy báo tài khoản connector không có edit access. Chrome tài khoản dự án đã xác minh ở phiên QA dùng được, không đổi sharing/tài khoản hay bypass bảo vệ. Trang tạm được giữ lại: automatic approval review từ chối thao tác Delete page vì user chưa cho phép trực tiếp xóa trang. Chưa retry hoặc dùng cách khác; chờ user duyệt riêng nếu muốn dọn. Nội dung có sẵn của Layouthub copy giữ nguyên.

| Card | Node ảnh ở bản copy | File Downloads | Shopify Files ID | Article |
| --- | --- | --- | --- | --- |
| 1 | 10098:1855 | novaire-blog-timeless-figma-crop.png | 46883349037355 | 633880576299 |
| 2 | 10098:1861 | novaire-blog-perfect-dress-figma-crop.png | 46883351396651 | 633880543531 |
| 3 | 10098:1869 | novaire-blog-dress-trends-figma-crop.png | 46883354607915 | 633880510763 |

Ba file có kích thước515×386; lần lượt437769/421572/355130bytes. Đã xem ảnh export đủ3 card và đúng phần crop nguồn, upload qua Shopify connector trên `layouthub-template-v2.myshopify.com`, thay riêng article.image/alt. Cả3 articleUpdate trả userErrors rỗng; không đổi body/summary/title/handle/blog/publication hay thứ tự.

## URL article cover đã đọc lại

- Article633880576299: https://cdn.shopify.com/s/files/1/1024/2192/2091/articles/novaire-blog-timeless-figma-crop.png?v=1793178766
- Article633880543531: https://cdn.shopify.com/s/files/1/1024/2192/2091/articles/novaire-blog-perfect-dress-figma-crop.png?v=1793178767
- Article633880510763: https://cdn.shopify.com/s/files/1/1024/2192/2091/articles/novaire-blog-dress-trends-figma-crop.png?v=1793178768

## Recheck storefront Desktop/Mobile

Desktop viewport1935×1080/client1920; Mobile390×812/client375; fonts loaded. Preview localhost9301/draft192827490603 đọc lại đúng cả3 URL mới, natural515×386 và complete=true. Desktop ba ảnh đã đối chiếu với canvas/source crop; Mobile swipe từng card1→2→3 và nhìn lại crop, không chỉ kiểm URL. Crop giữ đúng vị trí chủ thể/đầu/mũ/framing; sai số tỷ lệ515/386 so4/3 dưới1px do raster export làm tròn. Không dùng ảnh neo trên cũ để kết luận đạt.

Media box Desktop514.65625×385.984375; Mobile283.828125×212.859375. Deferred carousel ready=true; Mobile vẫn1+preview/gap12, không overflow ngang. Section Desktop851.375/Mobile635.640625; spacing/nội dung/CTA giữ số đo đạt của lượt fix trước. Pointer hover có thể scale ảnh tạm thời; không coi bounding box trong transition là khung crop cố định.

## Đồng bộ và giới hạn

Đọc live Sheet trước ghi; chỉ thay H96/J96, thêm hướng xử lý mới + đính chính vào H, giữ I96=Lần2 và F/G gốc. Bỏ highlight F96/G96 thành trắng sau recheck đạt. CSV sau ghi xác nhận chỉ2 ô đổi; cả11 tiêu chí hiện10Khớp/1Figma làm tròn. XLSX xác nhận F/G/H/I/J96 nền trắng, wrap/middle, dropdown thật I/J còn đủ nhãn; validation hiện tới126 do chỉnh đồng thời ngoài phạm vi, không thu hẹp. Không ghi đè section khác.

Đây là thay cover resource và recheck Blog posts; không tuyên bố QA toàn theme/editor lifecycle. Không sửa code/preset thêm trong lượt này, không push/publish/Save Theme Editor/commit. Theme Check0errors/8warnings của lượt config trước vẫn là bằng chứng trước đó; không chạy lại test implementation cho thay media. Receipt/checkpoint tạm `/tmp/novaire-blog-fix/crop-receipt.json` và `browser.json`; bằng chứng crop/screenshot Desktop/Mobile trong transcript.

---

## Lịch sử — trước export đúng crop

# Blog posts — Fix Lần 1 + Lần 2, recheck 2026-10-28

STT16, `index/articles`, section `blog-posts`. [Sheet Homepage A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105).

**Đã xác minh sửa đạt 6/7 lỗi được giao: 5 Lần 1 và 1 Lần 2.** Tổng 11 tiêu chí hiện hành: **9 Khớp, 1 Figma làm tròn, 1 Chưa khớp**. Crop ảnh Lần 2 đã thử cải thiện nhưng còn lệch framing nguồn; không đánh dấu đạt. Giữ toàn bộ giá trị F/G ban đầu và cờ phân công; số đo hiện tại ở dưới, phần QA trước được lưu nguyên ở lịch sử.

Áp dụng skill nguồn mới `fix-qa-preset`, `build-preset`, `qa-theme` và `store-content-media` cho hai mục resource được giao. Nguồn Desktop47052:14436 (1920×852), Mobile47284:7374 (375×615) như lịch sử. Preview localhost9301/draft192827490603; không push, publish, Save Theme Editor hay commit. Chrome nguồn đọc canvas/Properties; không copy/export Figma hạn chế quyền.

## Mapping sửa và recheck

| Hàng | Vòng | Owner/setting hoặc resource | Trước → sau | Kết quả mới |
| --- | --- | --- | --- | --- |
| 96 | Lần 2 | Cover ba article trên store | Ảnh gốc tỉ lệ khác4:3 → crop4:3 neo trên từ chính asset Shopify | Đã thử; hình thoáng hơn, còn lệch nhẹ mép trên/framing so nguồn D/M; Chưa khớp |
| 97 | Lần 1 | blog-card-title-1.padding_top / padding_top_mobile | 8→4 | Ảnh→title20px cả D/M; Khớp |
| 98 | Lần 2 | Article633880576299.summary | femininity.→femini. | Khớp copy D/M; không đổi body |
| 99 | Lần 1 | blog-card-description-3.padding_bottom / padding_bottom_mobile | 12→5 | Description→Read more16px cả D/M; Khớp |
| 100 | Lần 1 | current.button_tertiary_underline_offset | 5→2 | Tertiary22.796875≈23px cả D/M; Khớp |
| 102 | Lần 1 | section.gap_desktop; Heading.padding_bottom | 48→32;0→16 | List→View all32px; Heading→list vẫn48px; Khớp |
| 104 | Lần 1 | Heading.customize_mobile_padding / padding_bottom_mobile | false→true;0→4 | Heading→list36px; list→View all32px; Khớp |

Tất cả setting riêng section/block được sửa đồng thời trong instance `templates/index.json:sections.articles` và preset Blog posts trong `sections/blog-posts.liquid`. So sánh semantic với backup trước lượt: chỉ8 setting ở instance,8 setting tương ứng trong preset và1 global setting; phần implementation Liquid/schema control không đổi. Giữ các thay đổi khác có sẵn.

## Số đo mới

Desktop viewport1935×1080/client1920; Mobile390×812/client375; zoom100%, fonts loaded, không overflow ngang. Chỉ chốt sau khi carousel vào viewport và deferred controller initialized; số343px/card trước init không dùng làm kết quả.

- Desktop: content1600px; gap28px;3 cột; card514.65625×523.578125; ảnh514.65625×385.984375; title18/28.8px, desc14/21px×2. Ảnh→title20; title→desc8; desc→anchor16; anchor22.796875px. Heading32/44.8px, gap text→list48, list→View all32; View all128.421875×43. Section851.375px so nguồn852 do làm tròn từng text/box, không sửa height.
- Mobile: clip343px; card283.828125×379.25; ảnh283.828125×212.859375; gap12;1 card+preview. Heading26/36.4 (DOM36.390625), text→list36; ảnh→title20; title57.59375; desc42; title→desc8; desc→anchor16; anchor22.796875; list→View all32; View all120.421875×40. Section635.640625px; chênh20.64 với nguồn615 được giải thích chủ yếu ảnh cao20.86 do card width283.83 thay256 đã được chấp nhận theo mẫu preview một section. Không báo height hệ quả thành lỗi độc lập.
- Nội dung bài1 hiện đúng “Dresses have always been a symbol of elegance and femini. From casual sundresses to glamorous evening.”; bài2/3, thứ tự và link giữ nguyên. Outfit300/#3A3A3A cho heading/title, Poppins40014/21/#6C6C6C cho description. Không arrows/pagination trong Blog ở cả2 thiết bị.

## Resource receipt và crop còn lại

Store `layouthub-template-v2.myshopify.com`. Ba mutation articleUpdate trả userErrors rỗng; storefront readback xác nhận URL version mới, ảnh tải được và4:3. Không export/copy thiết kế; dùng CDN transform crop=top từ ảnh store đã có. Alt/handle/body/order/publish date giữ nguyên.

| Article ID | Cover | Bản trước | Bản sau |
| --- | --- | --- | --- |
| 633880576299 | clare-banner-4.png | 840×720,v1793063437 | 840×630,v1793175692 |
| 633880543531 | novaire-our-story.jpg | 1536×1280,v1793063434 | 1536×1152,v1793175693 |
| 633880510763 | clare-banner-5.png | 840×720,v1793063431 | 840×630,v1793175695 |

Crop neo trên giảm cắt đầu/mũ so bản center trước. Đối chiếu canvas Desktop/Mobile vẫn còn lệch nhẹ khoảng trống mép trên/framing (đặc biệt card3 Desktop). Article cover không có focal/crop control riêng. Để chốt đúng cần đúng bản crop được phép cung cấp; không bypass quyền Figma, không thêm implementation hoặc dùng chỉnh chiều cao để bù. H96 giữ hướng xử lý người dùng và ghi kết quả attempted; I96 vẫn Lần2/J96 Chưa khớp.

## Hồi quy và validation

Trước đổi global đã inventory consumer Homepage: Collection tabs View all, Countdown Shop the sale, Blog3 Read more. Nguồn Collection tabs Tertiary23px; Countdown đã có override2px. Sau đổi Desktop/Mobile: cả3 nhóm anchor22.796875px, text padding-bottom2px, không clipping; Countdown giữ hình dạng cũ. Collection tabs width Desktop70.421875px, Mobile link full-width343 với label căn giữa là cấu hình có sẵn. Không đổi CTA Primary/Secondary. Tertiary View details trong popup ẩn chưa xác minh trạng thái mở ở vòng này.

Manifest/hồ sơ hiện tại chỉ Homepage/header/footer. Đã rà composition runtime đủ16 main sections đúng thứ tự, kèm announcement/header/footer, không overflow D/M. QA chi tiết mới tập trung Blog và consumer global; **chưa QA lại từng thuộc tính Figma toàn19 nhóm hoặc mọi popup/editor lifecycle**, không tuyên bố toàn Homepage/theme đạt. Các page/template khác thiếu mapping nguồn trong scope và chưa kiểm; các lỗi cũ section khác giữ nguyên.

Theme Check: **0errors/8warnings**, exit0; không có lỗi mới ở Blog. JSON/schema parse đạt; semantic diff đã xác minh như trên. `git diff --check` chạy sau cập nhật docs.

## Đồng bộ Sheet

Đã ghi H96:J104 đúng phạm vi; chỉ J97/98/99/100/102/104 đổi Khớp. F/G và cờ I giữ nguyên. Bỏ highlight F/G6 hàng đạt; F96#D9EAD3/G96#F4CCCC vẫn giữ. CSV/XLSX readback:9Khớp/1Figma làm tròn/1Chưa khớp; merge A95:A105/B95:B105,C95:C100,C101:C102,C103:C105,D98:D99 giữ nguyên; Arial10/wrap/middle; nền ô I/J trắng, dropdown một lựa chọn còn hiệu lực. Vùng validation hiện I3:I125/J3:J125 do chỉnh Sheet đồng thời ngoài phạm vi; không thu hẹp. Snapshot trước/sau có một thay đổi live khác C107 (Gallery, chung→trống); không ghi đè hoặc phục hồi.

Evidence tạm `/tmp/novaire-blog-fix/`: backup trước sửa, Theme Check JSON, snapshot Sheet và mapping; export CSV/XLSX trong thư mục browser-use tạm. Canvas/preview screenshots và số đo mới trong tool transcript. Không đưa output thử vào repo.

---

## Lịch sử — QA trước fix (giữ nguyên)

# Blog posts — QA hiện hành 2026-10-28

STT **16**; theme Novaire; template `index`, instance `articles`, type `blog-posts`.
Sheet [Novaire / Homepage — A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105).

Đã recheck Desktop/Mobile theo skill nguồn `agents-build-themes/skills/qa/qa-theme/SKILL.md` hiện hành. Kết quả: **3 Khớp, 1 Figma làm tròn, 7 Chưa khớp**; 5 mục **Lần 1** sau khi kiểm control; 2 mục **Lần 2** theo chỉnh sửa live của người dùng, chưa thực hiện sửa. Chưa đạt hoàn toàn.

## Nguồn và điều kiện

- Desktop: [47052:14436](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-14436), 1920×852.
- Mobile: [47284:7374](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7374), 375×615.
- Preview: `http://127.0.0.1:9301/#shopify-section-template--28697873875243__articles`; draft192827490603, store layouthub-template-v2.myshopify.com. [Preview public](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192827490603).
- Runtime đo mới: Desktop viewport1935×1080/client1920; Mobile390×812/client375; DPR1, zoom100%, fonts loaded; không overflow ngang. Preview Chrome ban đầu client1905 chỉ dùng kiểm tổng thể; số đo chốt Desktop lấy ở client1920 qua browser in-app vì viewport override Chrome không tác dụng. Carousel được đưa vào viewport và đã initialized trước khi đo.
- Figma MCP trả View-seat quota; đọc Properties/canvas qua Chrome, tài khoản dự án minhle@beae.com. Không sửa nguồn/copy/export thiết kế. Quyền nguồn hạn chế export/copy đã được ghi ở doc init; không bypass. Nguồn font-size32/26/18 kế thừa evidence init/QA trước, cùng Properties font/weight/tracking/line-height và box được đọc lại trong lượt này.
- Style Sheet v5 được giữ; không có connector Google Sheets hay connected document session, cập nhật qua CUA. Snapshot live trước ghi, export CSV/XLSX sau ghi để đọc lại values, merge, fill, alignment/wrap, validation. Tài khoản Google trên Sheet được UI xác minh minhle@beae.com.

## Kết quả đã đồng bộ

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Tổng quan layout | Đã kiểm và khớp | Heading → 3 bài → View all; ảnh 4:3; không arrows/pagination; nền #F6F0EC | Đủ và đúng thứ tự; Heading/card title: Outfit300 #3A3A3A; mô tả: Poppins400 14/21 #6C6C6C; View all căn giữa, link hợp lệ |  |  | Khớp |
| Chung (Desktop, Mobile) | Blog card — Image | Crop ảnh | Khung hình thoáng, giữ trọn đầu/mũ ở card 1–2 | Đúng ảnh và thứ tự; center crop chặt hơn, đầu/mũ sát hoặc cắt mép trên | Không có control crop/focal riêng cho article cover; cần ảnh crop Figma được phép xuất. Không vượt hạn chế export. dùng skill $setup-store | Lần 2 | Chưa khớp |
| Chung (Desktop, Mobile) | Blog card — Title | Khoảng cách ảnh–tiêu đề | 20px (Card gap5) | 24px = content padding16 + Title padding8 | Dùng $build-preset: Title.padding_top và padding_top_mobile 8→4; giữ Card padding16. | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Blog card — Description | Nội dung bài 1 | ...elegance and femini. From casual... | ...elegance and femininity. From casual... | Nội dung lấy từ article summary; cần thống nhất copy với nguồn trước khi dùng $setup-store. Không sửa nội dung store trong lượt QA. | Lần 2 | Chưa khớp |
| Chung (Desktop, Mobile) | Blog card — Description | Khoảng cách mô tả–Read more | 16px (Content gap4) | 23px tới mép nút = gap8 + padding_bottom12 + baseline3 | Dùng $build-preset: Description.padding_bottom và padding_bottom_mobile 12→5; giữ gap8. Đo lại sau điều chỉnh underline. | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Blog card — Button | Chiều cao / underline | Button Tertiary 23px; underline sát label | Nút25,80px; .btn__text có padding-bottom5px | Theme Settings button_tertiary_underline_offset 5→2 (trước khi fix xem toàn trang button tertiary có thống nhất như vậy không) cho khung≈23px; ảnh hưởng mọi nút Tertiary. Nếu cần chỉ Blog posts thì thiếu control riêng. | Lần 1 | Chưa khớp |
| Desktop | Grid/slide | Cột / gap / chiều rộng | 3 cột; gap28px; content1600px; card514,67px | 3 cột; gap28px; content1600px; card514,66px. Container1696px gồm padding48×2 |  |  | Khớp |
| Desktop | Layout | Khoảng cách danh sách–View all | 32px (Content gap8) | 48px | Dùng $build-preset: section.gap_desktop48→32; Heading.padding_bottom16 để giữ khoảng Header–ảnh48px. | Lần 1 | Chưa khớp |
| Mobile | Heading | Line-height | 26px ×140% =36,4px; Figma box36px | Computed36,4px; DOM36,39px | Không cần sửa |  | Figma làm tròn |
| Mobile | Layout | Khoảng cách Heading–danh sách | 36px (Container gap9) | 32px | Dùng $build-preset: Heading.customize_mobile_padding=true; padding_bottom_mobile0→4. Giữ section.gap_mobile32 để khoảng danh sách–View all vẫn32px. | Lần 1 | Chưa khớp |
| Mobile | Grid/slide | Số item / gap / preview | 1 card + preview card2; gap12px; card cha Fixed256px | 1 card + preview card2; gap12px; card283,83px. Chấp nhận preview tương đối theo quy ước QA một section |  |  | Khớp |

## Số đo và truy nguyên

Nguồn Desktop: Row47052:14440 content1600px, gap7=28px; Card47052:14441 width514,67px/height524px, gap5 được copy Properties thành20; Content47052:14443 height118px/gap4=16px; Button47052:14447 Tertiary88×23px, bottom border1px. Content47052:14439 height599px = Row524 + gap32 + View all43. Heading47052:14437/14438 box45px, Outfit300/140%/tracking2,56/#3A3A3A. Typography thẻ: Outfit30018px/160%/tracking1,44, mô tả Poppins40014px/150%/tracking0/#6C6C6C. Ba tiêu đề, bài2/3 và thứ tự media khớp; bài1 Figma ghi “femini.”, resource hiện tại “femininity.” nên không gom nội dung đó vào Khớp.

Nguồn Mobile: Card47284:7379 **Fixed256px**, height359px; Row47284:7378 width343px/gap3=12px; Content47284:7381 height147px/gap4=16px; title+description group47284:7382 height108px/gap2=8px; Title47284:7383 width256/height58px, font Outfit300,160%,tracking1,44,#3A3A3A. Container47284:7375 height503px/gap9; Heading được đọc tiếp qua Enter/Tab là36px; Content47284:7377 height431px. Do đó khoảng Header→Content =503−36−431=**36px**, độc lập việc resolve tên token. Content431 = Card359 +32 + View all40. Nguồn section có padding14=56px trên/dưới. Không còn pending “chưa chốt parent card”.

Runtime Desktop: content1600px, container1696=1600+48×2, inset160px; card514,65625×537,578125; ảnh514,65625×385,984375, object-fit cover/center. Header44,796875 (computed44,8); section881,375; gap Header→list48px, list→View all48px; View all128,42×43px, nền#3A3A3A/chữ trắng/radius0, Poppins40013px/tracking1,95. Không arrows/pagination. Section padding80px trên/dưới.

Runtime Mobile: clip343px, card283,828125×393,25; ảnh283,828125×212,859375; gap12px, S=1,2. P=343−(283,833+12)=47,167px, R≈16,62%; Figma card256px, P trong343px clip=75px, R≈29,30% (canvas còn thấy tới mép frame375px; tách clip nội dung với phần overflow tới mép section). Cả hai có1 card đầy đủ + preview card2. Theo ngoại lệ kiểm mẫu preview trong phạm vi một section của skill, chấp nhận tỷ lệ tương đối; không khẳng định %/width khớp chính xác hoặc đã phân loại carousel toàn theme. Chênh image height20,859px do width chia item được miễn; lỗi spacing/crop/CTA độc lập vẫn giữ. Section645,640625; Heading26px/36,4px/DOM36,390625; title18px/28,8px×2=57,59375; View all120,42×40px căn giữa; gap trên32/dưới32px, padding56px trên/dưới, không arrows/pagination.

Ảnh→Title runtime24px = `.blog-card__content` padding-top16 + title padding-top8; Figma Card gap20px. Control title padding step1 cho phép8→4 cả Desktop/Mobile. Title→Description8px đã khớp.

Description→Read more: actual mép nút23px = parent gap8 + Description padding-bottom12 + inline baseline3; Figma Content gap16px. Control Description padding step1 cho phép12→5, giữ gap8; remeasure sau thay underline vì baseline có thể đổi. `.blog-card-button` line-height24/display:block, wrapper28,796875px; anchor inline-flex25,796875; `.btn__text` line-height20,8 + padding-bottom5. Figma Button23px. Global Theme Settings `button_tertiary_underline_offset` hiện5, schema có control;2px cho button22,8≈23 do làm tròn. Thay global ảnh hưởng mọi Tertiary; baseline wrapper có thể còn phần dư cần kiểm sau chỉnh, không kéo chiều cao section để bù. Chỉ đề xuất, chưa chỉnh global hoặc custom.

Desktop Card =385,984375+24+28,796875+8+42+20+28,796875=537,578125. Figma =386+20+29+8+42+16+23=524. Mobile =212,859375+24+57,59375+8+42+20+28,796875=393,25; Figma =192+20+58+8+42+16+23=359. Phần dư độc lập tách thành spacing/Button; không báo height tổng lặp. Desktop section =160+44,796875+48+537,578125+48+43=881,375; nguồn160+45+48+524+32+43=852. Mobile =112+36,390625+32+393,25+32+40=645,640625; nguồn112+36+36+359+32+40=615.

## Đồng bộ, giới hạn và lịch sử

- Sheet cũ Blog posts ở95:98. Chèn7 hàng trước Gallery, ghi11 tiêu chí95:105; các section sau dịch+7. Merge A95:A105/B95:B105; C95:C100,C101:C102,C103:C105; D98:D99. Arial10/wrap/middle, nền trắng; chỉ F/G của7 mismatch highlight #D9EAD3/#F4CCCC; I/J giữ colored dropdown. Validation I3:I123 Lần1–5/Bỏ qua; J3:J123 gồm các trạng thái hiện hành. Đã kiểm export và UI.
- Khi khôi phục phiên browser, một thao tác native trỏ sai focus đã đổi H115 thành19. Đã phục hồi đúng nội dung từ snapshot live trước lượt; sau chèn hàng ô đó làH122, đọc lại đúng nguyên bản. Không thay đổi kết quả Footer.
- Đã rút pending width Mobile và lỗi height615/645,64 khỏi báo cáo hiện hành. Số cũ được giữ ở lịch sử dưới. Đây là QA lại, không phải lượt fix; không sửa theme/config/media/store, Save Theme Editor, commit/push/publish. Không kết luận editor lifecycle hoặc release-ready.
- Evidence ảnh/số đo trong tool transcript của lượt; các JSON/ảnh được hồ sơ cũ tham chiếu là evidence lịch sử. Snapshot export/checkpoint tạm ở `/tmp/novaire-blog-recheck/`; không thuộc commit. Browser checkpoint cùng thư mục. Cleanup: tab mới Figma8344 đóng thành công; hai tab cũ8238/8241 mất debugger nên chưa đóng/reset được. Sheet8341 giữ làm kết quả.

Chỉnh sửa live được giữ nguyên: Image crop và Description content được người dùng gắn Lần2; Image dùng $setup-store; trước khi đổi underline global phải kiểm các nút Tertiary trên toàn trang có thống nhất không. Đây là hướng xử lý được lưu, chưa phải yêu cầu thực thi fix trong lượt QA. Kiểm ngoài phạm vi: dữ liệu giữ nguyên sau dịch hàng, ngoại trừ cờ Bỏ qua Newsletter do chỉnh sửa live khác; không ghi đè.

### Snapshot trước recheck — được thay thế

## QA hiện hành — 2026-10-28

STT 16 — **Blog posts**. Instance `index/articles`; type `blog-posts`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A74:J77. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-14436
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7374
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-15.png`, `figma-m-15.png`, `final-desktop-15.png`, `final-mobile-15.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Ba ảnh/bài đúng thứ tự; Heading và card title/excerpt: font/weight/màu; nút Read more và View all | Ba ảnh/bài đúng thứ tự; Heading và card title/excerpt: font/weight/màu; nút Read more và View all |  |  | Khớp |
| Desktop | Grid/slide | Chiều rộng nội dung | 1600px; card 514.67px | 1600px; container border-box 1696px = 1600 + 48 × 2; inset nội dung 160px; Blog card 514.66px (Figma 514.67px) |  |  | Khớp |
| Mobile | Grid/slide | Chiều rộng card | Khoảng 256px theo title wrapper; chưa chốt parent card | 283.83px; cần đo parent trước khi kết luận sai width |  |  | Chưa xác minh |
| Mobile | Layout | Chiều cao section | 615px | 645.64px | Chốt card width / excerpt trước; không giảm padding bù ảnh |  | Chưa khớp |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
