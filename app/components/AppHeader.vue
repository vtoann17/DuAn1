<template>
  <header class="tiki-header">
    <!-- Top Header -->
    <div class="header-top">
      <!-- Logo -->
      <div class="logo">
        <div class="logo-box">
          <div class="block blue">T</div>
          <div class="block blue">T</div>
          <div class="block yellow">H</div>
          <div class="block blue">B</div>
          <div class="block blue">A</div>
        </div>
        <!-- <img src="/img/logo.png" alt=""> -->
        <div class="slogan">Tốt & Nhanh</div>
      </div>

      <!-- Search Bar -->
      <div class="search">
        <input type="text" placeholder="Freeship đơn từ 45k" />
        <button>Tìm kiếm</button>
      </div>

      <!-- Right Buttons -->
      <div class="right-nav">
        <a href="#"><span class="icon"></span> Tài khoản</a>
        <a href="#" class="cart">
          <i class="icon bi bi-cart4"></i>
          <span class="cart-count">0</span>
        </a>
      </div>
    </div>

    <div class="category-row">
      <div class="categories">
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
        <a href="#">Tin tức</a>
      </div>

      <div class="delivery">
        <i class="icon bi bi-geo-alt"></i>
        <span>Giao đến:</span>
        <span class="address">TP. Tam Kỳ, P. Tân Thạnh, Quảng Nam</span>
      </div>
    </div>

    <!-- Commitment Bar -->
    <!-- <div class="header-bottom">
      <div class="commitments">
        <span class="label">Cam kết</span>
        <span>100% hàng thật</span>
        <span>Freeship mọi đơn</span>
        <span>Hoàn 200% nếu hàng giả</span>
        <span>30 ngày đổi trả</span>
        <span>Giao nhanh 2h</span>
        <span>Giá siêu rẻ</span>
      </div>
    </div> -->
  </header>
</template>

<script setup>
// Không cần import gì cả
</script>

<style scoped>
.tiki-header {
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
}

/* TOP HEADER */
.header-top {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo img {
  height: 70px;
  width: 100px;
  /* kích thước hợp lý với header */
  width: auto;
  display: block;
}

.slogan {
  font-size: 14px;
  font-weight: 600;
  color: #007bff;
  margin-top: 2px;
  white-space: nowrap;
  /* không xuống dòng */
}

.logo-box {
  display: flex;
  gap: 4px;
}

.logo-box .block {
  width: 34px;
  height: 34px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.blue {
  background-color: #007bff;
}

.yellow {
  background-color: #ffcc00;
}

.slogan {
  font-size: 13px;
  font-weight: 600;
  color: #007bff;
}

/* SEARCH */
.search {
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  max-width: 600px;
}

.search input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.search button:hover {
  background-color: #005fd4;
}

/* RIGHT NAV */
.right-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.right-nav a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.right-nav a:hover {
  color: #007bff;
}

.cart {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CATEGORY + DELIVERY ON ONE ROW */
.category-row {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 6px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.categories {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #555;
  margin: 0 auto;
  flex: 1;
}

.categories a {
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
}

.categories a:hover {
  color: #007bff;
}

.delivery {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #555;
}

.delivery .address {
  font-weight: 600;
  color: #222;
}

/* COMMITMENTS BAR */
.header-bottom {
  border-top: 1px solid #eee;
  background: #f8f8f8;
  padding: 10px 30px;
}

.commitments {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
  font-size: 13px;
  color: #444;
}

.commitments .label {
  color: #007bff;
  font-weight: 600;
}
</style>
