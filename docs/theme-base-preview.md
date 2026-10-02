# Shopify preview cho repo base cá nhân

Preview chạy theme của nhánh đang checkout trên store `layouthub-template-v2.myshopify.com`.
Không cần đổi cổng thủ công: supervisor dò cổng trống trong dải `9300-9399`, tách
khỏi cổng `9292` của repo team, rồi mở preview tại địa chỉ loopback `127.0.0.1`.

```sh
# Chạy preview nền cho code của nhánh hiện tại
node theme-base preview start --store layouthub-template-v2

# Xem trạng thái và link preview/editor khi cần
node theme-base preview status
# Chỉ xem log dài khi cần chẩn đoán lỗi
node theme-base preview logs

# Dừng preview
node theme-base preview stop
```

Có thể truyền đầy đủ domain bằng `--store layouthub-template-v2.myshopify.com`.
Shopify CLI `theme dev` theo dõi checkout hiện tại và tự đồng bộ các thay đổi file
lên development theme của store. Supervisor tự khởi động lại CLI sau khi tiến trình
bị thoát hoặc cổng bị mất; thời gian chờ tăng dần tối đa 60 giây khi lỗi lặp lại.
Sau khi CLI kết nối store thành công, preview storefront tự mở trong trình duyệt;
Theme Editor cũng tự mở khi Shopify CLI trả link. `preview status` hiển thị các link
ngắn gọn, nên không cần đọc toàn bộ log để tìm link. Nếu CLI báo không có quyền vào
store, supervisor dừng và chờ sửa domain/quyền thay vì tự lặp lại đăng nhập.
Nếu chuyển sang nhánh khác, supervisor dừng để tránh đẩy code nhánh mới vào preview
cũ. Hãy chạy `stop`, checkout nhánh muốn xem, rồi chạy `start` lại.

Lệnh dùng `--nodelete`, không chỉ định theme đang publish và không publish theme.
Shopify CLI có thể tạo/reuse development theme chưa publish trên store. Các file
preview được upload tới store nhưng file trong repo không bị thay đổi bởi thao tác
này. Đảm bảo Shopify CLI đã đăng nhập tài khoản có quyền với store.

Tiến trình/log/lock được lưu trong `.shopify/theme-base-preview/`, thư mục đã được
Git ignore. Preview chỉ phản ánh code đang có trong checkout local; nó không tự
fetch hoặc merge commit mới từ GitHub.
