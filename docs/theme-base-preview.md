# Shopify preview cho repo base cá nhân

Preview chạy theme của nhánh đang checkout trên store `layouthub-template-v2.myshopify.com`.
Không cần đổi cổng thủ công: supervisor dò cổng trống trong dải `9300-9399`, tách
khỏi cổng `9292` của repo team, rồi mở preview tại địa chỉ loopback `127.0.0.1`.

```sh
# Giữ terminal mở, chờ đăng nhập, rồi theo dõi log/thay đổi như shopify theme dev
node theme-base preview start

# Xem trạng thái và link preview/editor khi cần
node theme-base preview status
# Xem 40 dòng log cuối khi cần chẩn đoán thêm
node theme-base preview logs

# Dừng preview
node theme-base preview stop
```

Mặc định lệnh dùng store `layouthub-template-v2.myshopify.com`. Có thể đổi store
bằng `--store <store>` hoặc truyền đầy đủ domain, ví dụ
`node theme-base preview start --store another-store.myshopify.com`.
Nếu gõ nhầm `lauyouthub-template-v2`, lệnh tự chuẩn hóa thành store chính thức
`layouthub-template-v2.myshopify.com` và báo lại trước khi khởi động preview.
Shopify CLI `theme dev` theo dõi checkout hiện tại và tự đồng bộ các thay đổi file
lên development theme của store. Supervisor tự khởi động lại CLI sau khi tiến trình
bị thoát hoặc cổng bị mất; thời gian chờ tăng dần tối đa 60 giây khi lỗi lặp lại.
Khi terminal `preview start` còn mở, launcher cũng tự khởi động lại supervisor nếu
supervisor thoát bất thường. Phiên cũ được dọn theo process/store/cổng đã ghi trong
lock; process con còn giữ cổng sau khi CLI chính chết cũng được dọn trước khi chạy lại.
Dừng bằng `Ctrl+C`, `preview stop`, đổi nhánh hoặc lỗi quyền truy cập không kích hoạt
phục hồi. Nếu đóng terminal và cả launcher lẫn supervisor đã dừng, chạy `start` lại.
`preview start` hoạt động như `shopify theme dev`: chờ Shopify CLI đăng nhập và
kết nối xong mới in link Preview và Theme Editor, sau đó giữ terminal mở để hiện
log liên tục và theo dõi thay đổi file. Nhấn `Ctrl+C` để dừng phiên preview. Nếu
cần đăng nhập, terminal hiển thị link và mã xác thực để hoàn tất đăng nhập. Nếu storefront bật
mật khẩu, lệnh tự hỏi ẩn mật khẩu storefront trong terminal và thử lại; đây không
phải mật khẩu Shopify Admin. Mật khẩu không được ghi vào log hoặc tham số dòng lệnh.
Sau khi CLI kết nối, preview storefront và Theme Editor tự mở trong trình duyệt.
Nếu chạy trong môi trường không tương tác, có thể đặt `SHOPIFY_FLAG_STORE_PASSWORD`
trước khi chạy `preview start`. Nếu CLI báo không có quyền vào store, supervisor
dừng và chờ sửa domain/quyền thay vì tự lặp lại đăng nhập.

`preview status` hiển thị lỗi gần nhất; `preview logs` chỉ in 40 dòng cuối và ẩn
mã xác thực Shopify.
Nếu chuyển sang nhánh khác, supervisor dừng để tránh đẩy code nhánh mới vào preview
cũ. Hãy chạy `stop`, checkout nhánh muốn xem, rồi chạy `start` lại.

Lệnh tự chọn cổng trống trong dải `9300-9399`, tránh cổng mặc định `9292` để có
thể theo dõi riêng request của preview này. Lệnh dùng `--nodelete`, không chỉ định theme đang publish và không publish theme.
Shopify CLI có thể tạo/reuse development theme chưa publish trên store. Các file
preview được upload tới store nhưng file trong repo không bị thay đổi bởi thao tác
này. Đảm bảo Shopify CLI đã đăng nhập tài khoản có quyền với store.

Tiến trình/log/lock được lưu trong `.shopify/theme-base-preview/`, thư mục đã được
Git ignore. Preview chỉ phản ánh code đang có trong checkout local; nó không tự
fetch hoặc merge commit mới từ GitHub.
