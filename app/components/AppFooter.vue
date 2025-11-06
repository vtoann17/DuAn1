<template>
  <footer class="tiki-footer">
    <div class="footer-container">
      <!-- Top columns -->
      <div class="footer-top">
        <!-- Cột 1 -->
        <div class="footer-col">
          <h4>Hỗ trợ khách hàng</h4>
          <ul>
            <li><strong>Hotline:</strong> <a href="tel:19006035">1900-6035</a></li>
            <li>(1000 đ/phút, 8-21h kể cả T7, CN)</li>
            <li><a href="#">Các câu hỏi thường gặp</a></li>
            <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
            <li><a href="#">Hướng dẫn đặt hàng</a></li>
            <li><a href="#">Phương thức vận chuyển</a></li>
            <li><a href="#">Chính sách kiểm hàng</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Hướng dẫn trả góp</a></li>
            <li><a href="#">Chính sách hàng nhập khẩu</a></li>
            <li><a href="#">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
            <li><a href="#">Báo lỗi bảo mật: security@tiki.vn</a></li>
          </ul>
        </div>

        <!-- Cột 2 -->
        <div class="footer-col">
          <h4>Về Tiki</h4>
          <ul>
            <li><a href="#">Giới thiệu Tiki</a></li>
            <li><a href="#">Tiki Blog</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Chính sách bảo mật thanh toán</a></li>
            <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
            <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Giới thiệu Tiki Xu</a></li>
            <li><a href="#">Tiếp thị liên kết cùng Tiki</a></li>
            <li><a href="#">Bán hàng doanh nghiệp</a></li>
            <li><a href="#">Điều kiện vận chuyển</a></li>
          </ul>
        </div>

        <!-- Cột 3 -->
        <div class="footer-col">
          <h4>Hợp tác và liên kết</h4>
          <ul>
            <li><a href="#">Quy chế hoạt động Sàn GDTMĐT</a></li>
            <li><a href="#">Bán hàng cùng Tiki</a></li>
          </ul>
          <h4>Chứng nhận bởi</h4>
          <div class="certifications">
            <img src="https://salt.tikicdn.com/ts/upload/ef/cc/b4/ed17e933f268b7c9969e99f83b5188de.png" alt="Bộ công thương">
            <img src="https://salt.tikicdn.com/ts/upload/ef/cc/b4/ed17e933f268b7c9969e99f83b5188de.png" alt="Đã đăng ký">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/DMCA_logo-grn-btn120w.png" alt="DMCA">
          </div>
        </div>

        <!-- Cột 4 -->
        <div class="footer-col">
          <h4>Phương thức thanh toán</h4>
          <div class="payments">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/tiki.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/momo.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/zalopay.svg" alt="">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/vnpay.svg" alt="">
          </div>

          <h4>Dịch vụ giao hàng</h4>
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/tikinow.png" alt="TikiNow" class="tikinow-logo">
        </div>

        <!-- Cột 5 -->
        <div class="footer-col">
          <h4>Kết nối với chúng tôi</h4>
          <div class="socials">
            <a href="#">🔵</a>
            <a href="#">🔴</a>
            <a href="#">💬</a>
          </div>
          <h4>Tải ứng dụng trên điện thoại</h4>
          <div class="apps">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/appstore.png" alt="App Store">
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/playstore.png" alt="Google Play">
          </div>
        </div>
      </div>

      <!-- Bottom Info -->
      <div class="footer-bottom">
        <p><strong>Công ty TNHH TIKI</strong></p>
        <p>52 Út Tịch, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh, Việt Nam</p>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở KHĐT TP Hồ Chí Minh cấp lần đầu ngày 06/01/2010.
        </p>
        <p>Hotline: <a href="tel:19006035">1900 6035</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Không cần import gì cả
</script>

<style scoped>
.tiki-footer {
  background: #fff;
  border-top: 1px solid #eee;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px 20px;
}

/* TOP FOOTER */
.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
}

.footer-col {
  flex: 1 1 200px;
  min-width: 200px;
}

.footer-col h4 {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 6px;
  line-height: 1.5;
}

.footer-col a {
  color: #0066cc;
  text-decoration: none;
}

.footer-col a:hover {
  text-decoration: underline;
}

/* CHỨNG NHẬN */
.certifications img {
  width: 80px;
  height: auto;
  margin-right: 6px;
}

/* THANH TOÁN */
.payments img {
  width: 45px;
  height: auto;
  margin: 4px;
}

/* TIKINOW */
.tikinow-logo {
  width: 120px;
  margin-top: 6px;
}

/* MẠNG XÃ HỘI */
.socials a {
  font-size: 24px;
  margin-right: 10px;
  text-decoration: none;
}

.apps img {
  width: 130px;
  margin: 6px 0;
  display: block;
}

/* BOTTOM FOOTER */
.footer-bottom {
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 10px;
  font-size: 13px;
  color: #555;
}
.footer-bottom a {
  color: #0066cc;
  text-decoration: none;
}
.footer-bottom a:hover {
  text-decoration: underline;
}
</style>
