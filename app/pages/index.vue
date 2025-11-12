<script setup>
import Appslidebar from '/components/AppSlidebar.vue';
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const totalSlides = 2
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}
const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides - 1 : currentSlide.value - 1
}
const goToSlide = (index) => (currentSlide.value = index)

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})
onUnmounted(() => clearInterval(interval))
const deals = [
  {
    id: 1,
    icon: '🎯',
    title: 'Deal riêng',
    subtitle: 'Giảm 50%'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Deal huyền thoại',
    subtitle: ''
  },
  {
    id: 3,
    icon: '🏪',
    title: 'Tiki Trading',
    subtitle: 'Chính hãng'
  },
  {
    id: 4,
    icon: '🏠',
    title: 'Combo nhà',
    subtitle: 'dụng'
  },
  {
    id: 5,
    icon: '🎁',
    title: 'Tiki Rẻ Có tật',
    subtitle: 'tận tật'
  },
  {
    id: 6,
    icon: '🎫',
    title: 'Hot coupon',
    subtitle: 'Giảm đến 11%'
  },
  {
    id: 7,
    icon: '🏫',
    title: 'Tri ân Thầy Cô',
    subtitle: '20.11'
  },
  {
    id: 8,
    icon: '💎',
    title: 'Xả kho Giá',
    subtitle: 'giảm 50%'
  },
  {
    id: 9,
    icon: '📚',
    title: 'Tháng 11 Tiki',
    subtitle: 'đọc gì?'
  },
  {
    id: 10,
    icon: '📱',
    title: 'Điện máy',
    subtitle: 'Giảm 50%'
  }
]
const products = [
  {
    id: 1,
    name: 'Sách Anh Em Bình Thường - Những Câu Chuyện Kinh ...',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/6e/18/4e/033c486071de5f7e11410aa5f6e5ddb3.jpg',
    price: 47300,
    originalPrice: 75000,
    discount: 37,
    rating: 5,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: false,
    isNow: true,
    deliveryTime: 'Giao siêu tốc 2h'
  },
  {
    id: 2,
    name: 'Sách Trò Chơi Vương Quyền 3C - Tử Hôn (Tái Bản)',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/7e/e6/49/5b1c6f8c949e83765ac8f229e63d3e0d.jpg',
    price: 142400,
    originalPrice: 199000,
    discount: 28,
    rating: 5,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: false,
    isNow: false,
    deliveryTime: 'Giao chủ nhật, 09/11'
  },
  {
    id: 3,
    name: 'Gối Memory Foam 50D Lock & Lock HLW114 (61 x ...',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/3e/27/9d/8b9b8c6c3b3a9c3e3f9b9b9b9b9b9b9b.jpg',
    price: 455000,
    originalPrice: 833000,
    discount: 45,
    rating: 5,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: true,
    isNow: true,
    deliveryTime: 'Giao siêu tốc 2h'
  },
  {
    id: 4,
    name: 'Sách Same As Ever: Quy Luật Bất Biến Về Bản Chất...',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/9f/6e/3c/6a0f0b2e3d5e7f9f8e7d6c5b4a3b2c1d.jpg',
    price: 151400,
    originalPrice: 219000,
    discount: 31,
    rating: 4,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: false,
    isNow: true,
    deliveryTime: 'Giao siêu tốc 2h'
  },
  {
    id: 5,
    name: '[ĐỘC QUYỀN ONLINE] Thùng 24 Hộp Sữa Bột Pha...',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/1f/2e/3d/4c5b6a7e8f9d0e1f2a3b4c5d6e7f8a9b.jpg',
    price: 198720,
    originalPrice: 295000,
    discount: 33,
    rating: 5,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: false,
    isNow: true,
    deliveryTime: 'Giao siêu tốc 2h'
  },
  {
    id: 6,
    name: 'Nồi nấu cháo chậm, ninh hầm cách thuỷ BEAR...',
    image: 'https://salt.tikicdn.com/cache/280x280/ts/product/a9/b8/c7/d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1.jpg',
    price: 716000,
    originalPrice: 1090000,
    discount: 34,
    rating: 5,
    isTopDeal: true,
    isAuthentic: true,
    isFreeShip: true,
    isNow: true,
    deliveryTime: 'Giao siêu tốc 2h'
  }
]

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}
</script>
<template>
  <div class="home-page">
    <!-- Sidebar bên trái -->
    <Appslidebar />

    <!-- Nội dung chính -->
    <main class="main-content">
      <section class="banner-slider">
        <div class="slider-container">
          <!-- Slider track -->
          <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- Slide 1 -->
            <div class="slide slide-red">
              <div class="slide-content">
                <div class="slide-left">
                  <div class="brand-logos">
                    <span class="logo-box">E</span>
                    <span class="logo-text blue">PHILIPS</span>
                    <span class="logo-text orange">CUCKOO</span>
                  </div>

                  <div class="timer">
                    <span class="dot"></span>
                    <span>3-7.11</span>
                  </div>

                  <h2 class="headline yellow">TIÊU CHUẨN CHÂU ÂU</h2>
                  <h2 class="headline blue">SĂN SALE</h2>
                  <h2 class="headline blue">TẠI CHÂU Á</h2>

                  <div class="features">
                    <div class="feature blue">FREESHIP<br>MỌI ĐƠN</div>
                    <div class="feature yellow">MUA LÀ<br>CÓ QUÀ</div>
                    <div class="feature blue">GIAO NHANH<br>2H</div>
                  </div>

                  <button class="btn-buy">Mua ngay →</button>
                </div>

                <div class="slide-right">
                  <img src="" alt="Products">
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="slide slide-yellow">
              <div class="slide-content">
                <div class="slide-left">
                  <div class="category">
                    🏠 <span>NHÀ CỬA<br>ĐỜI SỐNG</span>
                  </div>
                  <h2 class="headline dark">Nội thất thông minh</h2>
                  <h3 class="subheadline">Giá tốt mỗi ngày</h3>

                  <div class="stats">
                    <div>
                      <small>Chính hãng</small>
                      <strong>100%</strong>
                    </div>
                    <div>
                      <small>Freeship</small>
                      <strong>XTRA</strong>
                    </div>
                  </div>

                  <button class="btn-buy yellow">Mua ngay →</button>
                </div>

                <div class="slide-right">
                  <img src="" alt="Smart Furniture">
                </div>
              </div>
            </div>
          </div>

          <!-- Dots -->
          <div class="dots">
            <button v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)"
              :class="{ active: currentSlide === index }"></button>
          </div>

          <!-- Arrows -->
          <button class="arrow left" @click="prevSlide">‹</button>
          <button class="arrow right" @click="nextSlide">›</button>
        </div>
      </section>
       <section class="deals-section">
    <div class="container">
      <div class="deals-scroll">
        <div class="deals-wrapper">
          <div 
            v-for="deal in deals" 
            :key="deal.id"
            class="deal-item"
          >
            <div class="deal-icon">
              <img :src="deal.icon" :alt="deal.title" />
            </div>
            <div class="deal-title">{{ deal.title }}</div>
            <div class="deal-subtitle">{{ deal.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="top-deal-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <div class="header-left">
          <svg class="thumb-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15V4.46584C15 3.10399 13.896 2 12.5342 2C12.2093 2 11.915 2.1913 11.7831 2.48812L7.26394 12.5" stroke="#ED1C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2 class="section-title">
            <span class="title-main">Flash Sale</span>
            <span class="title-separator">•</span>
            <span class="title-sub">SIÊU RẺ</span>
          </h2>
        </div>
        <a href="#" class="view-all">
          Xem tất cả
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Products Grid -->
      <div class="products-scroll">
        <div class="products-wrapper">
          <div 
            v-for="product in products" 
            :key="product.id"
            class="product-card"
          >
            <!-- Image -->
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
              
              <!-- Badges -->
              <div class="product-badges">
                <span v-if="product.isTopDeal" class="badge badge-topdeal">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3.5 11V5.5M1 6.5V10C1 10.5523 1.44772 11 2 11H8.7131C9.4535 11 10.083 10.4599 10.1957 9.7281L10.7342 6.2281C10.874 5.31945 10.1709 4.5 9.2516 4.5H7.5V2.23292C7.5 1.55199 6.948 1 6.2671 1C6.10465 1 5.9575 1.09565 5.89155 1.24406L3.63197 6.25" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  TOP DEAL
                </span>
                <span v-if="product.isAuthentic" class="badge badge-authentic">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  CHÍNH HÃNG
                </span>
                <span v-if="product.isFreeShip" class="badge badge-freeship">
                  FREESHIP XTRA
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              
              <!-- Rating -->
              <div class="product-rating">
                <div class="stars">
                  <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= product.rating }">★</span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <span class="price-current">{{ formatPrice(product.price) }}<sup>₫</sup></span>
                <span class="price-discount">-{{ product.discount }}%</span>
              </div>
              <div class="price-original">{{ formatPrice(product.originalPrice) }}<sup>₫</sup></div>

              <!-- Delivery -->
              <div class="product-delivery">
                <span v-if="product.isNow" class="delivery-now">NOW</span>
                <span class="delivery-time">{{ product.deliveryTime }}</span>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <button class="scroll-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="product-list">
        <div class="container">
            <div class="sort-bar">
                <h2 class="sort-title">Sắp xếp theo</h2>
                <div class="filter-buttons">
                    <button class="filter-btn active">
                        <i class="fa-regular fa-star"></i> Phổ biến
                    </button>
                    <button class="filter-btn">
                        <i class="fa-solid fa-bolt"></i> Khuyến mãi HOT
                    </button>
                    <button class="filter-btn">
                        <i class="fa-solid fa-arrow-up-wide-short"></i> Giá Thấp - Cao
                    </button>
                    <button class="filter-btn">
                        <i class="fa-solid fa-arrow-down-short-wide"></i> Giá Cao - Thấp
                    </button>
                </div>
            </div>



            <div class="products-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <div class="badge-sale">Giảm 39%</div>
                    <div class="badge-installment">Trả góp 0%</div>
                    <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/e/c/ecovacs-deebot-t30c-1.jpg"
                        alt="">
                    <h3>Robot hút bụi lau nhà Ecovacs Deebot T30C</h3>
                    <div class="price">
                        <span class="current">12.650.000₫</span>
                        <span class="old">20.900.000₫</span>
                    </div>
                    <ul class="features">
                        <li>Lực hút 22000Pa</li>
                        <li>Sạc 4.5 giờ</li>
                        <li>Vượt vật cản 20mm</li>
                    </ul>
                    <button class="wishlist">🤍 Yêu thích</button>
                </div>

                <!-- Product 2 -->
                <div class="product-card">
                    <div class="badge-sale">Giảm 16%</div>
                    <div class="badge-installment">Trả góp 0%</div>
                    <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/r/o/roborock-q-revo-edge-5v1.jpg"
                        alt="">
                    <h3>Robot hút bụi lau nhà Roborock Q Revo EDGE 5V1</h3>
                    <div class="price">
                        <span class="current">16.700.000₫</span>
                        <span class="old">19.990.000₫</span>
                    </div>
                    <ul class="features">
                        <li>Lực hút 18500Pa</li>
                        <li>Dung 2.5 giờ</li>
                        <li>Điều khiển qua app</li>
                    </ul>
                    <button class="wishlist">🤍 Yêu thích</button>
                </div>

                <!-- Product 3 -->
                <div class="product-card">
                    <div class="badge-sale">Giảm 25%</div>
                    <div class="badge-installment">Trả góp 0%</div>
                    <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/r/dreame-aqua-10-pro-track.jpg"
                        alt="">
                    <h3>Robot hút bụi lau sàn Dreame Aqua 10 Pro Track</h3>
                    <div class="price">
                        <span class="current">29.900.000₫</span>
                        <span class="old">39.990.000₫</span>
                    </div>
                    <ul class="features">
                        <li>Lực hút 25000Pa</li>
                        <li>Bản đồ 3D</li>
                        <li>Điều khiển qua app</li>
                    </ul>
                    <button class="wishlist">🤍 Yêu thích</button>
                </div>

                <!-- Product 4 -->
                <div class="product-card">
                    <div class="badge-sale">Giảm 1%</div>
                    <div class="badge-installment">Trả góp 0%</div>
                    <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-vacuum-5.jpg" alt="">
                    <h3>Robot hút bụi lau nhà Xiaomi Vacuum 5</h3>
                    <div class="price">
                        <span class="current">16.890.000₫</span>
                        <span class="old">16.990.000₫</span>
                    </div>
                    <ul class="features">
                        <li>Lực hút 20000Pa</li>
                        <li>Chống rối tóc</li>
                        <li>Điều khiển qua app</li>
                    </ul>
                    <button class="wishlist">🤍 Yêu thích</button>
                </div>

                <!-- Product 5 -->
                <div class="product-card">
                    <div class="badge-sale">Giảm 31%</div>
                    <div class="badge-installment">Trả góp 0%</div>
                    <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-vacuum-x20-plus.jpg"
                        alt="">
                    <h3>Robot hút bụi lau nhà Xiaomi Vacuum X20+</h3>
                    <div class="price">
                        <span class="current">8.990.000₫</span>
                        <span class="old">12.990.000₫</span>
                    </div>
                    <ul class="features">
                        <li>Lực hút 6000Pa</li>
                        <li>Tự động thay nước</li>
                        <li>Lưu bản đồ</li>
                    </ul>
                    <button class="wishlist">🤍 Yêu thích</button>
                </div>
            </div>
        </div>
    </section>
    </main>
  </div>
</template>



<style scoped>
.home-page {
  display: flex;
  min-height: 100vh;
  background: #f8f8fc;
}

/* Sidebar */
.sidebar {
  flex-shrink: 0;
}

/* Nội dung chính */
.main-content {
  flex: 1;
  padding: 30px;
  background: #f8f8fc;
  overflow-x: hidden;
}

.main-content h1 {
  color: #007bff;
  margin-bottom: 10px;
}

.main-content p {
  color: #555;
}

/* banner */
.banner-slider {
  background: #fff;
  padding: 40px 0;
  user-select: none;
  font-family: Arial, sans-serif;
  border-radius: 20px;
}

.slider-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.slider-track {
  display: flex;
  transition: transform 0.6s ease;
}

/* ==== Slide ==== */
.slide {
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  position: relative;
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide-left {
  flex: 1;
  z-index: 2;
}

.slide-right img {
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  display: block;
}

/* ==== Màu nền mềm mại ==== */
.slide-red {
  background: linear-gradient(135deg, #ffeded, #ffe4e4);
  color: #333;
}

.slide-yellow {
  background: linear-gradient(135deg, #fff9e5, #fff3cc);
  color: #333;
}

/* ==== Logo thương hiệu ==== */
.brand-logos {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 40px;
  padding: 6px 12px;
  width: fit-content;
  margin-bottom: 16px;
}

.logo-box {
  background: #ff424f;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.logo-text.blue {
  color: #1a94ff;
  font-weight: bold;
}

.logo-text.orange {
  color: #ff9900;
  font-weight: bold;
}

/* ==== Thời gian sale ==== */
.timer {
  position: absolute;
  top: 30px;
  right: 40px;
  background: white;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 40px;
  padding: 6px 14px;
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.timer .dot {
  width: 8px;
  height: 8px;
  background: #ff424f;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

/* ==== Tiêu đề ==== */
.headline {
  display: inline-block;
  font-weight: 800;
  font-size: 30px;
  margin: 10px 0;
  padding: 8px 14px;
  border-radius: 8px;
  letter-spacing: 0.5px;
}

.headline.yellow {
  background: #fff04b;
  color: #d32f2f;
}

.headline.blue {
  background: #1a94ff;
  color: #fff;
}

.headline.dark {
  color: #3a2a00;
}

.subheadline {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}

/* ==== Tính năng sale ==== */
.features {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.feature {
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  line-height: 1.3;
}

.feature.blue {
  background: #1a94ff;
  color: #fff;
}

.feature.yellow {
  background: #ffeb3b;
  color: #222;
}

/* ==== Khối “chính hãng - freeship” ==== */
.stats {
  display: inline-flex;
  background: #1a94ff;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid #007ae6;
}

.stats div {
  padding: 10px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.stats div:last-child {
  border-right: none;
}

.stats small {
  display: block;
  font-size: 12px;
  opacity: 0.9;
}

.stats strong {
  font-size: 20px;
}

/* ==== Button “Mua ngay” ==== */
.btn-buy {
  background: #1a94ff;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 24px;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  transition: 0.25s;
  box-shadow: 0 3px 6px rgba(26, 148, 255, 0.2);
}

.btn-buy:hover {
  background: #007ae6;
}

.btn-buy.yellow {
  background: #fff;
  color: #1a94ff;
  border: 1px solid #1a94ff;
}

/* ==== Dots ==== */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
}

.dots button {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.dots button.active {
  width: 30px;
  background: #1a94ff;
  border-radius: 6px;
}

/* ==== Arrows ==== */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  font-size: 26px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  color: #555;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow:hover {
  background: #1a94ff;
  color: #fff;
}

.arrow.left {
  left: 16px;
}

.arrow.right {
  right: 16px;
}

/* ==== Hiệu ứng chấm đỏ nháy ==== */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

/* ==== Responsive ==== */
@media (max-width: 992px) {
  .slide {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .slide-right {
    margin-top: 20px;
  }

  .timer {
    position: static;
    margin-bottom: 10px;
  }

  .headline {
    font-size: 24px;
  }

  .subheadline {
    font-size: 20px;
  }

  .btn-buy {
    font-size: 14px;
  }
}
/* khuyễn mãi */
.deals-section {
  background: #ffffff;
  padding: 16px 0;
  border-bottom: 1px solid #efefef;
  margin-top: 20px;
  border-radius: 20px;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 16px;
}

.deals-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.deals-scroll::-webkit-scrollbar {
  display: none;
}

.deals-wrapper {
  display: flex;
  gap: 12px;
  min-width: min-content;
}

.deal-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;
  min-width: 90px;
  max-width: 110px;
}

.deal-item:hover {
  background-color: #f5f5f5;
}

.deal-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.deal-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.deal-title {
  font-size: 13px;
  color: #27272a;
  text-align: center;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 2px;
}

.deal-subtitle {
  font-size: 12px;
  color: #808089;
  text-align: center;
  line-height: 1.3;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 8px;
  }
  
  .deal-item {
    min-width: 80px;
    max-width: 90px;
  }
  
  .deal-icon {
    width: 44px;
    height: 44px;
  }
}
.top-deal-section {
  background: #ffffff;
  padding: 24px 0;
  margin-top: 20px;
  border-radius: 20px;
}

.container {
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.thumb-icon {
  color: #ED1C24;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.title-main {
  color: #ED1C24;
  font-weight: 600;
}

.title-separator {
  color: #ED1C24;
}

.title-sub {
  color: #ED1C24;
  font-weight: 600;
}

.view-all {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #0b74e5;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: opacity 0.2s;
}

.view-all:hover {
  opacity: 0.8;
}

/* Products */
.products-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: 0 -8px;
  padding: 0 8px;
}

.products-scroll::-webkit-scrollbar {
  display: none;
}

.products-wrapper {
  display: flex;
  gap: 12px;
  position: relative;
  padding-bottom: 8px;
}

.product-card {
  flex: 0 0 auto;
  width: 200px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #efefef;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.product-card:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Image */
.product-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-badges {
  position: absolute;
  top: 8px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 0 4px 4px 0;
}

.badge-topdeal {
  background: #ED1C24;
  color: #ffffff;
}

.badge-authentic {
  background: #0b74e5;
  color: #ffffff;
}

.badge-freeship {
  background: #16c784;
  color: #ffffff;
}

/* Info */
.product-info {
  padding: 12px;
}

.product-name {
  font-size: 13px;
  color: #27272a;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 8px;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
 
  -webkit-box-orient: vertical;
}

.product-rating {
  margin-bottom: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #dcdcdc;
  font-size: 12px;
}

.star.filled {
  color: #ffc400;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.price-current {
  font-size: 16px;
  font-weight: 500;
  color: #27272a;
}

.price-current sup {
  font-size: 12px;
  text-decoration: underline;
}

.price-discount {
  display: inline-block;
  padding: 2px 4px;
  background: #f5f5fa;
  color: #808089;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
}

.price-original {
  font-size: 13px;
  color: #808089;
  text-decoration: line-through;
  margin-bottom: 8px;
}

.price-original sup {
  font-size: 11px;
}

.product-delivery {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.delivery-now {
  display: inline-block;
  padding: 2px 6px;
  background: #ED1C24;
  color: #ffffff;
  font-weight: 600;
  border-radius: 2px;
  font-size: 10px;
}

.delivery-time {
  color: #808089;
}

/* Scroll Button */
.scroll-next {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  z-index: 10;
}

.scroll-next:hover {
  background: #f5f5f5;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 18px;
  }
  
  .product-card {
    width: 160px;
  }
  
  .scroll-next {
    display: none;
  }
}
/* ===== PRODUCT ===== */
/* ==== PRODUCT LIST (NEW STYLE) ==== */
/* ==== SECTION CHUNG ==== */
.product-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 24px;
  margin: 30px 0 50px;
  font-family: 'Inter', Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ==== THANH SẮP XẾP ==== */
.sort-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.sort-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn i {
  font-size: 13px;
  color: #666;
}

.filter-btn:hover {
  background: #f4faff;
  border-color: #1a94ff;
  color: #1a94ff;
}

.filter-btn.active {
  background: #e3f2fd;
  border-color: #1a94ff;
  color: #1a94ff;
  font-weight: 600;
}

/* ==== LƯỚI SẢN PHẨM ==== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

/* ==== THẺ SẢN PHẨM ==== */
.product-card {
  position: relative;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 14px;
  transition: all 0.3s ease;
  text-align: left;
  overflow: hidden;
}

.product-card:hover {
  border-color: #1a94ff;
  box-shadow: 0 4px 10px rgba(26, 148, 255, 0.15);
  transform: translateY(-3px);
}

/* ==== BADGE GIẢM GIÁ ==== */
.badge-sale {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff424f;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 6px;
  z-index: 2;
}

/* ==== BADGE TRẢ GÓP ==== */
.badge-installment {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1a94ff;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 6px;
  z-index: 2;
}

/* ==== ẢNH SẢN PHẨM ==== */
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

/* ==== TÊN SẢN PHẨM ==== */
.product-card h3 {
  font-size: 0.95rem;
  font-weight: 500;
  color: #222;
  line-height: 1.4;
  height: 40px;
  overflow: hidden;
  margin-bottom: 8px;
}

/* ==== GIÁ ==== */
.price {
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.price .current {
  color: #d70018;
  font-weight: 700;
  font-size: 1rem;
}

.price .old {
  color: #999;
  text-decoration: line-through;
  font-size: 0.85rem;
}

/* ==== ĐẶC ĐIỂM ==== */
.features {
  list-style: none;
  font-size: 0.82rem;
  color: #555;
  line-height: 1.5;
  margin: 10px 0 12px;
  padding-left: 0;
  min-height: 55px;
}

/* ==== NÚT YÊU THÍCH ==== */
.wishlist {
  background: #fff;
  border: 1px solid #ddd;
  color: #333;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
}

.wishlist:hover {
  background: #f4faff;
  border-color: #1a94ff;
  color: #1a94ff;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 768px) {
  .sort-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-buttons {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

</style>
