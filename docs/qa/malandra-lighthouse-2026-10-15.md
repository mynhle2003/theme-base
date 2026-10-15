# Malandra Lighthouse — 2026-10-15

Owner xác nhận theme đúng là **192330498347 — Malandra template (Minhle)** trên `layouthub-template-v2.myshopify.com`, role `unpublished`. ID 192282820907 trong link đầu tiên là Arche và không được sửa. Nguồn local: branch `theme/malandra-theme`, HEAD `908780fb02b9ed61d9df0880f82284bdf853ae9f` + patch chưa commit.

## Kết quả đo

Lighthouse 13.5.0, Chrome headless, HTTPS draft thực tế; mobile dùng cấu hình mặc định (412×823, CPU slowdown 4×, simulated throttling); desktop truyền `desktop-config.js` trực tiếp. Mỗi lần chạy dùng browser mới, xác thực storefront, kiểm tra `Shopify.theme.id`, xóa network cache và chạy storage reset mặc định. Giữ preview bar, analytics, account và checkout runtime. Không lưu password, cookie hoặc request/response headers vào báo cáo.

| Chỉ số | Mobile trước | Mobile cuối | Desktop trước | Desktop cuối |
| --- | ---: | ---: | ---: | ---: |
| Performance | 66 | 86 | 84 | 97 |
| Accessibility | 93 | 96 | 93 | 96 |
| Best Practices | Không có điểm hợp lệ | Không có điểm hợp lệ | Không có điểm hợp lệ | Không có điểm hợp lệ |
| SEO | 92 | 100 | 92 | 100 |
| FCP | 2.32 s | 2.24 s | 1.14 s | 0.68 s |
| LCP | 4.03 s | 2.95 s | 1.44 s | 0.74 s |
| TBT | 351 ms | 52 ms | 5.5 ms | 0 ms |
| CLS | 0.043410 | 0.000040 | 0.004422 | 0.004302 |
| Speed Index | 14.61 s | 7.00 s | 5.46 s | 1.69 s |
| Tổng transfer | 2,708,448 B | 2,720,978 B | 2,223,524 B | 2,787,624 B |

Đây là các lần đo lab đơn lẻ, không phải median hay CrUX/production guarantee. Tổng transfer không giảm; lazy media/third-party timing khác nhau giữa các lần đo. SEO thay đổi ở audit robots.txt dù patch không sửa robots.txt/metadata; không quy mức tăng SEO cho code tối ưu.

Lần trung gian `after-mobile` (tab contrast 85%, trước khi hoàn thiện 95%) đạt Performance 68, FCP 2.25 s, LCP mô phỏng 10.19 s, TBT 90.5 ms, CLS 0, Speed Index 5.41 s. Trace thực tế của lần này ghi observed LCP 0.96 s; kết quả mô phỏng LCP lệch mạnh nên đã đo lại, không xóa hay che lần đo này. Mức dao động này giới hạn độ chắc chắn của so sánh score.

Mọi lần đo có cảnh báo preview URL redirect về `/`; runner xác minh đúng theme ID trước audit, asset dùng `t/37`. Best Practices là **null**, không phải 0: gatherer `ImageElements` lỗi `CSS.getMatchedStylesForNode: Could not find node with given id`, làm ba audit image-aspect-ratio/image-size-responsive/unsized-images không hoàn tất. Không báo Best Practices pass.

Bản tóm tắt có cấu hình, mọi lần đo, lỗi, CSS hashes và readback hashes: [audit JSON](../audits/malandra-lighthouse-2026-10-15.json). HTML/JSON gốc đã loại headers và ảnh QA nằm trong thư mục local được Git ignore `.shopify/lighthouse/malandra-2026-10-15/`: `before-mobile`, `before-desktop`, `after-mobile`, `final-mobile`, `final-desktop`.

## Patch

1. `sections/hero.liquid` + `snippets/hero-image.liquid`: hero ảnh ở `section.index == 1` xuất hai preload có media riêng, dùng đúng srcset/sizes như picture và `loading=eager`/`fetchpriority=high`. Hero ở dưới dùng lazy/auto. Cap candidate theo ảnh nguồn (desktop tối đa 2400px, mobile 1200px); không yêu cầu upscale, không thay artwork, crop, focal point hay video path. Dùng cơ chế `theme-lcp-preloads` đã có của layout. Với media hiện tại, desktop cap 1920px, mobile cap 750px; viewport 375px/DPR1 chọn nguồn 375px.
2. Tách nguyên CSS của tám owner dưới đây ra assets đồng bộ ngay đầu owner. Không đổi bất kỳ rule, selector, schema, preset hay JavaScript nào trong các owner. Component không render thì không tải stylesheet riêng; component được thêm trong Theme Editor vẫn xuất dependency cùng markup.
3. `snippets/tab-layout-styles.liquid`: inactive tab dùng 95% body/heading color trộn với scheme background, thay mức 48% transparent/44% background gây thiếu tương phản. Giữ kiểu chữ, kích thước, gap, underline, focus, active/hover và hành vi đổi tab. Lighthouse cuối xác nhận `color-contrast` pass cả mobile/desktop. Đây là thay đổi màu hiển thị có chủ đích để sửa accessibility.

| Owner | Asset |
| --- | --- |
| sections/collections-with-background.liquid | assets/section-collections-with-background.css |
| sections/collections-with-tabs.liquid | assets/section-collections-with-tabs.css |
| sections/collection-banner.liquid | assets/section-collection-banner.css |
| sections/featured-collection-horizontal.liquid | assets/section-featured-collection-horizontal.css |
| sections/slideshow.liquid | assets/section-slideshow.css |
| blocks/slideshow-slide.liquid | assets/block-slideshow-slide.css |
| blocks/press-quotes.liquid | assets/block-press-quotes.css |
| blocks/timeline-slide.liquid | assets/block-timeline-slide.css |

Tổng source CSS tách khỏi bundle: **63,803 B** (byte-identical với HEAD). Bundle homepage thực tế đã minify giảm **416,943 → 362,805 B** decoded (54,138 B, 13.0%); transfer mobile **46,002 → 40,823 B**. Không gọi raw bytes là compressed savings.

## Validation và giới hạn

- Liquid validator: 10 file Hero/CSS owner pass, hai advisory ở preload gợi ý dùng `image_tag preload`; giữ explicit media-qualified preload để khớp art direction. Snippet tab được validate riêng sau chỉnh cuối. Theme Check: 0 errors, 5 ExcessiveSettingsCount warnings có sẵn; không tắt check.
- 13/13 scoped image tests pass: preload/picture parity, first/later hero, missing mobile, source-size caps, focal point/video path và slideshow mobile presets. Test slideshow đọc CSS tại asset owner mới.
- Batch bổ sung có 5 lỗi fixture cũ: một kỳ vọng marquee preset `show_top_divider`, bốn Press tests dựa trên runtime API cũ. Các runtime/preset liên quan không đổi so với HEAD (`blocks/marquee.liquid`, `sections/text-marquee-custom.liquid`, `assets/block-animations.js`, `assets/carousel-block.js`); không trình bày full suite pass.
- CSS của cả tám owner đối chiếu byte-for-byte với HEAD; schema/runtime giữ nguyên. `git diff --check` pass.
- Storefront thật: 375px mobile và 1280px desktop không tràn ngang; hero load thành công với high priority, giữ frame 620px mobile; ảnh desktop/mobile đúng nguồn. NEW IN tab chọn thành công, panel tải xong hiển thị bốn product cards. Tám stylesheet optional không xuất hiện trên homepage. Screenshot `mobile-after.png`, `desktop-after.png` nằm cùng thư mục báo cáo.
- Chưa QA đầy đủ các owner optional trên mọi template hoặc Theme Editor add/remove/duplicate/reorder/select/save/reload; không gọi toàn theme release-ready. Header/footer animation settings, delay và interactions giữ nguyên.
- Accessibility còn heading h4 nhảy cấp tại Quality That Lasts và iframe preview bar thiếu title. Không sửa iframe Shopify để làm đẹp điểm; không upload template homepage đang có chỉnh sửa riêng của owner.

## Upload ledger

Store/target duy nhất: `layouthub-template-v2.myshopify.com`, draft `192330498347`.

| Batch ngày 15/10/2026 (giờ Việt Nam) | Scope | Kết quả |
| --- | --- | --- |
| 12:06:46 | Tám CSS assets + snippets/hero-image.liquid | Uploaded; dependency trước caller |
| 12:08:00 | Tám CSS owners + sections/hero.liquid + snippets/tab-layout-styles.liquid | Uploaded; chỉ 10 file, `--only`, `--nodelete` |
| 12:10:14 | snippets/tab-layout-styles.liquid | Uploaded follow-up contrast 95% |

Pull snapshot của 10 file cũ trước upload khớp HEAD; backup local `/tmp/malandra-lighthouse-remote-before`. Readback sau upload của toàn bộ **19/19 file** khớp local, hashes trong audit JSON. Rollback bằng snapshot của đúng 10 caller cũ; các dependency assets mới không được tham chiếu sau rollback, không cần xóa. Không đổi theme live, không publish; không Git commit/push.

Doc chuyển fix dùng chung: [Malandra → Elara](../variant-updates/malandra-to-elara.md), ba mã Lighthouse mới đều **pending** ở Elara; chưa sửa hoặc upload Elara.

## Git release follow-up — 2026-10-15

Owner yêu cầu commit/push toàn bộ thay đổi hiện có, trừ test. Full Theme Check release gate pass (0 errors/5 existing warnings), 13 scoped image tests pass local; năm lỗi Marquee/Press nêu trên tái hiện nguyên trạng trong snapshot HEAD riêng. Các test được giữ local và không nằm trong commit. Shopify đã đồng bộ patch Lighthouse lên remote bằng `ace7cd08`, `eb8da206`, `c3e4661a`; release tiếp theo giữ các commit này và gộp tài liệu/preset/custom-section/rich-text còn lại, bảo toàn normalization JSON/locale từ remote. Đây là Git release, không publish Shopify theme hoặc áp dụng Elara.
