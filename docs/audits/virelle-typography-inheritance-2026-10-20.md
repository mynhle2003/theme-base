# Typography Virelle: kế thừa và Product card — 20/10/2026

## Bằng chứng theme mẫu

Đọc CSS công khai của theme `161667842133`, [theme.css](https://omnise-theme-base.myshopify.com/cdn/shop/t/23/assets/theme.css?v=38309492858434362481792050786). Đây là nguồn tham khảo kiến trúc, không sao chép stylesheet hoặc preset của mẫu.

| Phần | Cách theme mẫu xử lý | Áp dụng tại Virelle |
| --- | --- | --- |
| Body | `body` dùng family/style/weight/size/line-height theo role Body; `.body-typography` áp tracking từ alias Body | `body` dùng `--font-body-size`, các thuộc tính role và `--font-body-letter-spacing`; con kế thừa nếu không có control riêng |
| Heading | `.heading-typography` lấy family/weight Heading; H1–H6/size class lấy size và tracking từ token | Giữ nhãn Display → Extra small và semantics; gom H1–H6 vào cùng rule với class size tương ứng, không nhân đôi khai báo |
| Eyebrow | `.subheading-typography` dùng bộ subheading token; font role có thể lấy Accent | Giữ tên UI Eyebrow và namespace `--font-eyebrow-*`, liên kết family/style/weight với role được chọn |
| Card title | `.product-card__title` dùng `--pcard-title-*` cho đủ typography, màu Heading | Một rule `.product-card__title` dùng `--product-card-title-*`; mọi biến thể card cùng nhận setting |
| Card price | `.product-card__price` chọn family/size/weight qua `--pcard-price-*`; component giá sở hữu sale/compare-at và gap | Token `--product-card-price-font-*` lấy từ setting card, map vào contract `--price-font-*` của component dùng chung; không tạo scale tracking/line-height riêng |

Mẫu dùng compare-at 0.85em, opacity 0.7, gap fallback 6px. Virelle giữ contract component hiện hữu 0.9em/0.72/0.5rem; không coi các số này là typography setting hoặc tự thêm option để sao chép mẫu.

## Token và quyền sở hữu sau tối ưu

- `type_primary_font`, `type_heading_font`, `type_accent_font` → family/style/weight của Body/Heading/Accent. Một role có một nguồn font picker. Không hardcode weight 500 trên card khi font role khác weight.
- `type_body_size` → `--font-body-size`; `--font-body-md` chỉ là alias về cùng nguồn để các utility/component cũ vẫn hoạt động. Các size phụ xs/sm/lg/xl/xxl giữ cơ chế hiện hữu.
- Tracking và leading dùng chung primitive `--letter-spacing-*`, `--line-height-*`. Body tracking vẫn là `--font-body-letter-spacing`; chưa calibrate Figma hay đổi trị số token/preset trong lượt này.
- `product_card_title_size_desktop` → **`--product-card-title-font-size`**. Thay tên `--product-card-title-size`; bỏ `--product-card-title-size-mobile` và rule mobile dư vì hiện có một setting size cho mọi thiết bị. Các consumer runtime đã chuyển sang tên mới.
- Title dùng family/style/weight, font-size, line-height, letter-spacing, text-transform tại một rule trong `assets/critical.css`; không emit CSS consumer trong snippet variables nữa. H2/H3 thực và placeholder paragraph nhận cùng visual typography; link kế thừa từ title.
- `product_card_price_font` → `--product-card-price-font-family/style/weight`; `product_card_price_size` → `--product-card-price-font-size`. `.price--product-card` map bốn token này vào `--price-font-*`; không đổi nguồn root/PDP/cart.
- Price tracking kế thừa computed Body tracking; line-height tiếp tục dùng Body qua `--price-line-height`. Chọn Accent cho Price không đồng nghĩa lấy tracking hoặc size Eyebrow. Sale/compare-at/unit/tiền tệ/variant JS không đổi.
- Utility tracking và các lựa chọn tracking đã có của PDP Price dùng primitive chung, thay literal. `extra_loose` PDP trước là 0.08em, nay dùng đúng `--letter-spacing-extra-loose` = 0.06em của scale hiện tại; Tight/Normal/Relaxed/Loose giữ trị số hiện tại. Đây là đồng bộ ý nghĩa token, không thêm select value.

## Các override đã gỡ

| File | Typography gỡ | Giữ lại |
| --- | --- | --- |
| `assets/virelle.css` | Title Shop the look: 500/1.5/0/none; card badge: 12px/2px/1.5/uppercase | Geometry, swatch/media/navigation, badge padding/màu/min-height |
| `blocks/product-card-single.liquid` | Title 18px, mobile 16px, weight 500, leading/tracking/case cứng | Picker, card renderer, layout ngang mobile, quick add |
| `blocks/product-card-compact.liquid` | Title line-height 1.5 | Ellipsis, nowrap, spacing, layout |
| `sections/video-with-products.liquid` | Title size clamp/leading/case; Price size clamp | Product switching, variant, overlay, media, actions, margins và wrapping |

Typography trên card nhỏ/popup có thể thay đổi so với custom cũ; setting chung hiện là nguồn chủ đích. Không tự thêm option responsive, không giữ style cũ bằng token trùng vai trò. Chưa đổi typography của cart title `.card-title-text`, các component ngoài card hoặc control PDP riêng thành setting card.

## File cần chuyển khi cập nhật base

`snippets/css-variables.liquid`, `assets/critical.css`, `assets/product-information.css` cùng token/consumer liên quan. Phần gỡ override cần đối chiếu riêng với `assets/virelle.css`, hai block single/compact và section Video with products. Không chép toàn bộ các file custom Virelle vào base. `config/settings_schema.json` và `config/settings_data.json` không thay trong lượt tối ưu này. Không đổi nhãn UI, enum, markup, layout hoặc logic commerce.

## Kiểm chứng

- 37 test Typography/token/font weight, card animation và Video reviews đạt, gồm thay role font cho title/price và kiểm tra không còn typography override ở các biến thể card.
- 6 test `product-card-tags.test.cjs` lỗi; tái hiện cùng 6 lỗi trên snapshot trước sửa trong thư mục tạm. Không sửa logic badge/tag trong task này.
- Theme Check: 0 error, 7 warning. Diff whitespace hợp lệ; consumer runtime không còn tham chiếu hai token title-size cũ.
- Browser bị tắt trong Work settings, chưa đối chiếu computed style/ảnh desktop-mobile. Chỉ cấu hình và kiểm chứng local; không Save, push hoặc publish.


## Bổ sung: token Price gap theo yêu cầu tiếp theo

Thay gap cứng 0.5rem của `.price` bằng `column-gap: var(--compare-at-price-spacing, 6px)`, row-gap 0. Root token 6px dựa trên evidence Figma `48002:1687` / `48096:20121` đã lưu; không phải mới đọc lại Figma. Trước 5px theo root rem10px, sau 6px. Mọi Price consumer dùng token chung, không thêm option UI. Kết luận giữ gap 0.5rem ở phần phân tích trước được thay thế bởi cập nhật này. Skill phải đo sale–compare-at gap và ghi token/scope/breakpoint/ảnh hưởng trước khi đổi; thiếu nguồn thì hỏi.
