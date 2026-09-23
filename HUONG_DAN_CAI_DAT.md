# HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY ỨNG DỤNG TRÊN MÁY TÍNH

Ứng dụng: **Cuộc thi trực tuyến Tìm hiểu kiến thức Bảo vệ chủ quyền biên giới trên địa bàn tỉnh Lạng Sơn**

---

### 1. Yêu cầu hệ thống:
- Đã cài đặt **Node.js** (phiên bản 18, 20 hoặc mới hơn).
  - Tải tại: https://nodejs.org/ (khuyến nghị bản LTS).

---

### 2. Các bước khởi chạy:

#### Bước 1: Giải nén mã nguồn
- Giải nén tệp `.zip` bạn vừa tải về vào một thư mục trên máy tính (ví dụ: `cuoc-thi-bien-gioi-lang-son`).

#### Bước 2: Mở Terminal / Command Prompt tại thư mục vừa giải nén
- Trên Windows: Nhấp chuột phải vào khoảng trống trong thư mục > Chọn "Open in Terminal" (hoặc gõ `cmd` trên thanh địa chỉ rồi nhấn Enter).
- Trên macOS/Linux: Mở Terminal và `cd` tới thư mục dự án.

#### Bước 3: Cài đặt các gói phụ thuộc (dependencies)
Chạy lệnh:
```bash
npm install
```

#### Bước 4: Chạy ứng dụng ở chế độ phát triển (Dev)
Chạy lệnh:
```bash
npm run dev
```
Sau đó mở trình duyệt và truy cập:
`http://localhost:3000` (hoặc cổng hiển thị trên màn hình terminal).

---

### 3. Đóng gói cho môi trường thực tế (Build Production):
Nếu muốn xuất ra thư mục tĩnh HTML/CSS/JS để tải lên hosting, web server (Nginx, Apache, Vercel, Netlify):
```bash
npm run build
```
Thư mục `dist` sinh ra sẽ chứa toàn bộ sản phẩm đã được tối ưu hóa.

---
© 2026 Bản quyền thuộc Ban Chỉ đạo Công tác thông tin đối ngoại tỉnh Lạng Sơn.
