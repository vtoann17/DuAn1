<template>
  <div class="book-page-wrapper">
    <!-- Sidebar bên trái -->
    <AppSlidebar />

    <!-- Nội dung chính -->
    <div class="book-page">
      <!-- Tiêu đề -->
      <h1 class="page-title">Nhà Sách Tiki</h1>

      <!-- Slider sách top -->
      <section class="slider-section">
        <div v-for="slide in slides" :key="slide.id" class="slide-card">
          <img :src="slide.brandImg" class="brand-img" />
          <div class="slide-content">
            <h3>top bán chạy</h3>
            <p class="provider">Tài trợ bởi 1980 Books Tại Tiki Trading ⭐5/5</p>

            <div class="products">
              <div v-for="book in slide.books" :key="book.id" class="book-item">
                <img :src="book.img" />
                <span class="discount">-33%</span>
              </div>
            </div>
          </div>
        </div>
        <div v-for="slide in slides" :key="slide.id" class="slide-card">
          <img :src="slide.brandImg" class="brand-img" />
          <div class="slide-content">
            <h3>sản phẩm</h3>
            <p class="provider">Tài trợ bởi 1980 Books Tại Tiki Trading  ⭐5/5</p>

            <div class="products">
              <div v-for="book in slide.books" :key="book.id" class="book-item">
                <img :src="book.img" />
                <span class="discount">-33%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Khám phá theo danh mục -->
      <section class="category-section">
        <h2>Khám phá theo danh mục</h2>
        <div class="category-list">
          <div v-for="cat in categories" :key="cat.id" class="category-item">
            <img :src="cat.img" />
            <p>{{ cat.name }}</p>
          </div>
        </div>
      </section>

      <!-- Thanh lọc và sắp xếp -->
      <h1>Tất cả sản phẩm</h1>
      <div class="filter-bar">
        <div class="filter-left">
          <div class="brand-filter">
            <h2 class="brand-title">Thương hiệu</h2>
            <div class="brand-list">
              <span class="brand-item active">Deli</span>
              <span class="brand-item">Thiên Long</span>
              <span class="brand-item">MAGIX</span>
              <span class="brand-item">K&B Handmade</span>
            </div>
          </div>
        </div>

        <div class="filter-right">
          <span>Sắp xếp</span>
          <select v-model="sortOption" class="sort-select">
            <option value="popular">Phổ biến</option>
            <option value="asc">Giá thấp đến cao</option>
            <option value="desc">Giá cao đến thấp</option>
          </select>
        </div>

        <!-- ✅ Ô tìm kiếm thêm vào -->
       <!-- Ô tìm kiếm sản phẩm -->
 <div class="search-box">
      <input type="text" v-model="searchQuery" placeholder="🔍 Tìm kiếm sản phẩm..." />
    </div>
      </div>

      <!-- Danh sách sản phẩm -->
           <section class="product-section">
    <!-- Sản phẩm 1 -->
    <div class="product-card">
      <img
        src="https://salt.tikicdn.com/cache/400x400/ts/product/5c/5f/ed/bf6311.jpg"
        alt="Hành trình nuôi con"
        class="product-img"
      />
      <div class="product-info">
        <div class="brand-line">
          <img
            src="https://salt.tikicdn.com/cache/100x100/ts/upload/ee/1a/fb/9c4a1e9b.png"
            alt="chính hãng"
            class="verified"
          />
          <span class="verified-text">CHÍNH HÃNG</span>
        </div>
        <p class="price">
          471.800<span class="currency">đ</span> <span class="product-discount">-33%</span>
        </p>
        <p class="title">Sách Hành Trình Nuôi Con Mang Thai - Cẩm Nang Thai Sản Đầy Đủ Nhất</p>
        <p class="author">Heidi Murkoff</p>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="sold">Đã bán 656</span>
        </div>
        <p class="shipping">Giao chủ nhật, 09/11</p>
      </div>
    </div>

    <!-- Sản phẩm 2 -->
    <div class="product-card">
      <img
        src="https://salt.tikicdn.com/cache/400x400/ts/product/1d/8b/bc/2f4a12.jpg"
        alt="Cổ tích"
        class="product-img"
      />
      <div class="product-info">
        <div class="brand-line">
          <img
            src="https://salt.tikicdn.com/cache/100x100/ts/upload/ee/1a/fb/9c4a1e9b.png"
            alt="chính hãng"
            class="verified"
          />
          <span class="verified-text">CHÍNH HÃNG</span>
        </div>
        <p class="price">117.950<span class="currency">đ</span></p>
        <p class="title">
          Sách Cổ Tích Việt Nam Bằng Thơ (Ấn Bản Kỉ Niệm 60 Năm NXB Kim Đồng)
        </p>
        <p class="author">Thái Bá Tân</p>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="sold">Đã bán 40</span>
        </div>
        <p class="shipping">Giao chủ nhật, 09/11</p>
      </div>
    </div>

    <!-- Sản phẩm 3 -->
    <div class="product-card">
      <img
        src="https://salt.tikicdn.com/cache/400x400/ts/product/d2/6f/8a/cae9c3.jpg"
        alt="Thức tỉnh"
        class="product-img"
      />
      <div class="product-info">
        <div class="brand-line">
          <img
            src="https://salt.tikicdn.com/cache/100x100/ts/upload/ee/1a/fb/9c4a1e9b.png"
            alt="chính hãng"
            class="verified"
          />
          <span class="verified-text">CHÍNH HÃNG</span>
        </div>
        <p class="price">
          91.400<span class="currency">đ</span> <span class="product-discount">-33%</span>

        </p>
        <p class="title">Sách Thức Tỉnh</p>
        <p class="author">Đức Đạt Lai Lạt Ma</p>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="sold">Đã bán 196</span>
        </div>
        <p class="shipping">Giao chủ nhật, 09/11</p>
      </div>
    </div>

    <!-- Sản phẩm 4 -->
    <div class="product-card">
      <img
        src="https://salt.tikicdn.com/cache/400x400/ts/product/2e/5a/27/7d89c8.jpg"
        alt="Ba lô bé gái"
        class="product-img"
      />
      <div class="product-info">
        <div class="brand-line">
          <img
            src="https://salt.tikicdn.com/cache/100x100/ts/upload/ee/1a/fb/9c4a1e9b.png"
            alt="chính hãng"
            class="verified"
          />
          <span class="verified-text">CHÍNH HÃNG</span>
        </div>
        <p class="price">
          271.600<span class="currency">đ</span> <span class="product-discount">-33%</span>

        </p>
        <p class="title">
          Ba lô bé gái siêu nhẹ chống nước cao cấp phong cách mới - BEE GEE HS1068
        </p>
        <p class="author">Bee Gee</p>
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="sold">3 Màu</span>
        </div>
        <p class="shipping">Giao thứ 3, 11/11</p>
      </div>
    </div>
  </section>
  <!-- ✅ Nút Xem thêm giữa 2 section -->
<div class="view-more-box">
  <button class="view-more-btn">Xem thêm</button>
</div>

    </div>
  </div>
  <!-- ✅ Sản phẩm đã xem -->
<section class="viewed-wrapper">
  <div class="viewed-section">
    <h2 class="viewed-title">Sản Phẩm Đã Xem</h2>

    <div class="viewed-box">
      <div class="viewed-item">

        <img
          src="https://salt.tikicdn.com/cache/400x400/ts/product/d2/6f/8a/cae9c3.jpg"
          class="viewed-img"
        />

        <p class="viewed-price">199.000 đ</p>

        <p class="viewed-name">
          Sách Trò Chơi Vương Quyền 3C - Tử Hôn (Tái Bản 2019)
        </p>

        <div class="viewed-rate">
          ⭐ 4.8 <span class="count">(12)</span>
        </div>

      </div>
    </div>
  </div>
</section>
<section class="top-sell-wrapper">
  <div class="top-sell-box">
    <h2 class="top-sell-title">Top Bán Chạy Sản Phẩm Nhà cửa & Đời sống</h2>

    <ol class="top-sell-list">
      <li>
        Đèn Pha LED Ô Tô - Xe Máy H4 36W: Siêu Sáng Với 3 Nhiệt Màu AUTO Tiết Kiệm Năng Lượng Loại Tốt
        <span class="price">280.427đ</span>
      </li>
      <li>
        Thiết Bị Tiết Kiệm Điện Thông Minh Nhật Bản – Bí Kíp Vàng Cho Mọi Gia Đình Việt
        <span class="price">164.000đ</span>
      </li>
      <li>
        Nồi phủ sứ chống dính Elmich Olive Classic EL- 55350V - Hàng chính hãng
        <span class="price">292.302đ</span>
      </li>
      <li>
        Nắp Đậy Cống Thoát Nước Chống Mùi Hôi, Côn Trùng – Chuyên Dùng Cho Sàn Nhà Tắm, Nhà Vệ Sinh - HÀNG CHÍNH HÃNG MININ
        <span class="price">29.000đ</span>
      </li>
      <li>
        Bình Nước Thuỷ Tinh Kèm Nắp Pha Trà Thông Minh Cao Cấp Có Lọc Trà Inox Sang Trọng Tặng Túi Chống Nóng Quai Đeo
        <span class="price">135.000đ</span>
      </li>
      <li>
        Bộ hộp cơm giữ nhiệt LocknLock Tower Vacuum Lunch Box - LHC8058 - Hàng chính hãng
        <span class="price">285.200đ</span>
      </li>
      <li>
        Hạt giống Xà Lách các loại, nảy mầm tốt, dễ trồng, nhanh thu hoạch, cây khoẻ - Hạt giống Rau Đồng
        <span class="price">23.167đ</span>
      </li>
      <li>
        Khăn giấy cuộn đa năng lau bếp bắt dính đồ gia dụng kích thước 20×25cm thấm hút tốt, dai khó rách, có thể tái sử dụng
        <span class="price">48.000đ</span>
      </li>
      <li>
        COMBO 3 Bóng Giặt Silicon Cầu Gai Chống Nhăn Quần Áo Quả Banh To 5.5CM Hamart Giặt Sạch Vượt Trội
        <span class="price">45.000đ</span>
      </li>
      <li>
        Bình Gas Bơm Bật Lửa Bluesky 5 Đầu Bơm Dung Tích 150gr/275ml Siêu Tiện Dụng, Bình Bơm Gas Bật Lửa Hàn Quốc
        <span class="price">65.000đ</span>
      </li>
    </ol>
  </div>
</section>


</template>

<script setup>
import { ref, computed } from "vue";
import Appslidebar from "/components/AppSlidebar.vue";
const searchQuery = ref("");
const sortOption = ref("popular");

const slides = [
  {
    id: 1,
    title: "Top Sách Bán Chạy",
    provider: "1980 Books Tại Tiki Trading",
    brandImg: "https://salt.tikicdn.com/cache/w200/ts/product/f7/7d/90/e06651.png",
    books: [
      { id: 1, img: "https://salt.tikicdn.com/cache/200x280/ts/product/65/1a/df/...jpg", discount: 36 },
      { id: 2, img: "https://salt.tikicdn.com/cache/200x280/ts/product/a8/...jpg", discount: 31 },
      { id: 3, img: "https://salt.tikicdn.com/cache/200x280/ts/product/89/...jpg", discount: 33 }
    ]
  }
];

const categories = [
  { id: 1, name: "English Books", img: "https://salt.tikicdn.com/cache/280x280/ts/product/92/66/95/...jpg" },
  { id: 2, name: "Sách tiếng Việt", img: "https://salt.tikicdn.com/cache/280x280/ts/product/e3/0e/f7/...jpg" },
  { id: 3, name: "Văn phòng phẩm", img: "https://salt.tikicdn.com/cache/280x280/ts/product/ce/a1/36/...jpg" },
  { id: 4, name: "Quà lưu niệm", img: "https://salt.tikicdn.com/cache/280x280/ts/product/7b/8b/ef/...jpg" }
];

const products = [
  {
    id: 1,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/5c/5f/ed/bf6311.jpg",
    title: "Sách Hành Trình Nuôi Con Mang Thai",
    brand: "Heidi Murkoff",
    price: 471800,
    discount: 33,
    sold: "656"
  },
  {
    id: 2,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/1d/8b/bc/2f4a12.jpg",
    title: "Sách Cổ Tích Việt Nam Bằng Thơ",
    brand: "Thái Bá Tân",
    price: 117950,
    discount: 0,
    sold: "40"
  },
  {
    id: 3,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/d2/6f/8a/cae9c3.jpg",
    title: "Sách Thức Tỉnh",
    brand: "Đức Đạt Lai Lạt Ma",
    price: 91400,
    discount: 34,
    sold: "196"
  },
  {
    id: 4,
    img: "https://salt.tikicdn.com/cache/400x400/ts/product/2e/5a/27/7d89c8.jpg",
    title: "Ba lô bé gái siêu nhẹ chống nước",
    brand: "Bee Gee",
    price: 271600,
    discount: 3,
    sold: "3 Màu"
  }
];

const filteredProducts = computed(() => {
  let res = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (sortOption.value === "asc") res.sort((a, b) => a.price - b.price);
  if (sortOption.value === "desc") res.sort((a, b) => b.price - a.price);

  return res;
});
</script>

<style scoped>
.book-page-wrapper {
  display: flex;
  background: #f5f7fa;
  min-height: 100vh;
}

/* Sidebar cố định bên trái */
.book-page-wrapper > *:first-child {
  flex: 0 0 250px;
  border-right: 1px solid #eee;
  background: #fff;
  height: 100vh;
  position: sticky;
  top: 0;
}

/* Nội dung chính */
.book-page {
  flex: 1;
  padding: 20px 30px;
}

/* Tiêu đề trang */
.page-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* --- KHỐI SLIDER --- */
.slider-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.slide-card {
  background: #fafafa;
  padding: 16px;
  border-radius: 10px;
  display: flex;
  width: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  transition: 0.2s;
}

.slide-card:hover {
  transform: translateY(-3px);
}

.brand-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 12px;
}

.slide-content h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.provider {
  font-size: 13px;
  color: #555;
  margin-bottom: 12px;
}

.products {
  display: flex;
  gap: 10px;
}

.book-item {
  position: relative;
  width: 70px;
}

.book-item img {
  width: 100%;
  border-radius: 6px;
}

.discount {
  position: absolute;
  bottom: -4px;
  left: 0;
  background: red;
  color: #fff;
  font-size: 11px;
  padding: 2px 4px;
  border-radius: 4px;
}

/* --- KHỐI DANH MỤC --- */
.category-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.category-section h2 {
  font-size: 20px;
  margin-bottom: 16px;
}

.category-list {
  display: flex;
  gap: 40px;
}

.category-item {
  text-align: center;
  transition: 0.2s;
}

.category-item:hover {
  transform: translateY(-3px);
}

.category-item img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}

.category-item p {
  font-size: 14px;
}

/* --- KHỐI BỘ LỌC --- */
h1 {
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 14px;
}
.filter-bar {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Bên trái: danh sách thương hiệu */
.filter-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.brand-title {
  font-size: 13px;
  color: #808089;
  font-weight: 600;
  line-height: 1;
}

.brand-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.brand-item {
  padding: 6px 14px;
  font-size: 13px;
  border-radius: 20px;
  border: 1px solid #d1d1d1;
  background: #fff;
  color: #4a4a4a;
  cursor: pointer;
  transition: 0.2s ease;
}

.brand-item:hover,
.brand-item.active {
  border-color: #007bff;
  color: #007bff;
  background: #eaf4ff;
}

/* Bên phải: phần sắp xếp */
.filter-right {
  display: flex;
  align-items: center;
  gap: 10px;
  order: 1;
}

.sort-select {
  border: 1px solid #ddd;
  background: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
}

/* Ô tìm kiếm - xuống hàng riêng */
.search-box {
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 30px;
  padding: 6px 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease;
  width: 100%; /* 🟢 chiếm full chiều ngang */
  order: 2; /* 🟢 đẩy xuống hàng dưới */
}

.search-box input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  padding: 6px;
  font-size: 14px;
}

.search-box:focus-within {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
}

/* --- RESPONSIVE --- */
@media (max-width: 880px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .filter-right {
    margin-left: 0;
    justify-content: flex-end;
  }
}
.product-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  padding: 10px;
  transition: 0.2s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}
/* --- GIẢM GIÁ TRONG THẺ SẢN PHẨM --- */
.product-discount {
  display: inline-block;
  background: #ff424e;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 6px;
  vertical-align: middle;
}

.product-img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.brand-line {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
}

.verified {
  width: 20px;
  height: 20px;
}

.verified-text {
  font-size: 12px;
  color: #0d6efd;
  font-weight: 600;
}

.price {
  font-size: 16px;
  font-weight: 700;
  color: #d70018;
  margin-top: 6px;
}

.currency {
  font-size: 12px;
}

.discount {
  color: #555;
  font-size: 13px;
  margin-left: 6px;
}

.title {
  font-size: 13px;
  color: #333;
  font-weight: 500;
  line-height: 1.3;
  margin: 6px 0;
}

.author {
  font-size: 12px;
  color: #666;
}

.rating {
  font-size: 12px;
  color: #f59e0b;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.sold {
  color: #777;
}

.shipping {
  font-size: 12px;
  color: #555;
  margin-top: 6px;
}
/* ✅ nền ngoài nhạt giống Tiki */
.viewed-wrapper {
  background: #f5f6fa; /* trắng pha xám nhạt */
  padding: 40px 0;
  border-radius: 12px;
}

/* ✅ khối trắng chứa sản phẩm */
.viewed-section {
  background: #ffffff;
  width: 90%;
  margin: auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* tiêu đề */
.viewed-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
}

/* box hiển thị sản phẩm */
.viewed-box {
  display: flex;
  justify-content: center;
}

/* sản phẩm */
.viewed-item {
  text-align: center;
  max-width: 250px;
}

.viewed-img {
  width: 180px;
  border-radius: 8px;
}

.viewed-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
}

.viewed-name {
  font-size: 14px;
  color: #333;
  margin-top: 6px;
}

.viewed-rate {
  font-size: 13px;
  color: #f5a623;
  margin-top: 5px;
}

.count {
  color: #777;
}
.top-sell-wrapper {
  background: #f5f6fa;        /* nền xám nhạt */
  padding: 40px 0;
  border-radius: 12px;
}

.top-sell-box {
  background: #fff;           /* khối trắng */
  width: 90%;
  margin: auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.top-sell-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}

.top-sell-list {
  margin-left: 20px;
  color: #1a73e8;         /* màu xanh giống ảnh */
  font-size: 15px;
}

.top-sell-list li {
  margin-bottom: 12px;
  position: relative;
}

.price {
  float: right;
  color: #333;
}
/* ✅ Box để canh giữa */
.view-more-box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

/* ✅ Nút Xem thêm */
.view-more-btn {
  background: #fff;
  border: 1px solid #0d63f3;
  color: #0d63f3;
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease;
}

.view-more-btn:hover {
  background: #0d63f3;
  color: #fff;
}



</style>  






