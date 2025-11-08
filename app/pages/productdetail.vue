<script setup>
import { ref } from 'vue'

const product = {
    name: 'Điện thoại Samsung Galaxy A06 5G (4/128GB), Màn Hình Cực Đại HD+ 6.7", 5G Kết nối cực nhanh - Hàng chính hãng',
    brand: 'Samsung',
    rating: 5.0,
    reviewCount: 1,
    soldCount: '1k',
    price: 2750000,
    originalPrice: 3920000,
    discount: 30,
    images: [
        'https://salt.tikicdn.com/cache/750x750/ts/product/6e/18/4e/033c486071de5f7e11410aa5f6e5ddb3.jpg',
        'https://salt.tikicdn.com/cache/750x750/ts/product/7e/e6/49/5b1c6f8c949e83765ac8f229e63d3e0d.jpg',
        'https://salt.tikicdn.com/cache/750x750/ts/product/3e/27/9d/8b9b8c6c3b3a9c3e3f9b9b9b9b9b9b9b.jpg',
        'https://salt.tikicdn.com/cache/750x750/ts/product/9f/6e/3c/6a0f0b2e3d5e7f9f8e7d6c5b4a3b2c1d.jpg',
        'https://salt.tikicdn.com/cache/750x750/ts/product/1f/2e/3d/4c5b6a7e8f9d0e1f2a3b4c5d6e7f8a9b.jpg'
    ],
    colors: [
        { id: 1, name: 'Xanh', image: 'https://salt.tikicdn.com/cache/100x100/ts/product/6e/18/4e/033c486071de5f7e11410aa5f6e5ddb3.jpg' },
        { id: 2, name: 'Xám', image: 'https://salt.tikicdn.com/cache/100x100/ts/product/7e/e6/49/5b1c6f8c949e83765ac8f229e63d3e0d.jpg' },
        { id: 3, name: 'Đen', image: 'https://salt.tikicdn.com/cache/100x100/ts/product/3e/27/9d/8b9b8c6c3b3a9c3e3f9b9b9b9b9b9b9b.jpg' }
    ],
    shippingLocation: 'Tam Kỳ, P. Tân Thạnh, Quảng Nam',
    shippingDate: '11/11',
    shippingFee: 32700,
    storeRating: 4.7,
    storeReviewCount: '5.5tr+ đánh giá'
}

const selectedImage = ref(product.images[0])
const selectedColor = ref(2)
const quantity = ref(1)

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price)
}

const increaseQty = () => {
    quantity.value++
}

const decreaseQty = () => {
    if (quantity.value > 1) {
        quantity.value--
    }
}


</script>
<template>
    <div class="product-detail-page">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
            <a href="#">Trang chủ</a>
            <span class="separator">›</span>
            <a href="#">Điện Thoại - Máy Tính Bảng</a>
            <span class="separator">›</span>
            <a href="#">Điện thoại Smartphone</a>
            <span class="separator">›</span>
            <span class="current">{{ product.name }}</span>
        </nav>

        <div class="product-container">
            <!-- Left Column - Images -->
            <div class="product-images">
                <div class="brand-banner">
                    <img src="https://via.placeholder.com/460x80/000000/FFFFFF?text=TIKI+TRADING+x+SAMSUNG"
                        alt="Brand Banner" />
                </div>

                <div class="main-image">
                    <img :src="selectedImage" :alt="product.name" />
                    <span class="new-badge">Mới</span>
                </div>

                <div class="thumbnail-list">
                    <button v-for="(image, index) in product.images" :key="index" class="thumbnail"
                        :class="{ active: selectedImage === image }" @click="selectedImage = image">
                        <img :src="image" :alt="`${product.name} - ${index + 1}`" />
                    </button>
                    <button class="thumbnail thumbnail-more">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <div class="product-reviews-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L17 18V14C17.6254 12.9632 18 11.7597 18 10C18 5.58172 14.4183 2 10 2Z"
                            stroke="#0B74E5" stroke-width="1.5" />
                    </svg>
                    Xem thêm Ưu điểm & lưu ý của sản phẩm
                </div>
            </div>

            <!-- Middle Column - Product Info -->
            <div class="product-info">
                <div class="product-badges">
                    <span class="badge badge-topdeal">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M4.66667 14.6667V7.33333M1.33333 8.66667V13.3333C1.33333 14.0697 1.92724 14.6667 2.66667 14.6667H11.6175C12.5427 14.6667 13.3549 14.0263 13.5219 13.1162L14.2911 8.44956C14.4972 7.30526 13.6224 6.33333 12.3867 6.33333H10V2.9772C10 2.06933 9.264 1.33333 8.35613 1.33333C8.13953 1.33333 7.94333 1.46087 7.85547 1.65875L4.84263 8.33333"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        TOP DEAL
                    </span>
                    <span class="badge badge-guarantee">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5" />
                            <path d="M6 8L7.5 9.5L10.5 6.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        30 NGÀY ĐỔI TRẢ
                    </span>
                    <span class="badge badge-authentic">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3333 6L6 11.3333L2.66667 8" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        CHÍNH HÃNG
                    </span>
                    <span class="badge-brand">
                        Thương hiệu: <a href="#">{{ product.brand }}</a>
                    </span>
                </div>

                <h1 class="product-title">{{ product.name }}</h1>

                <div class="product-rating">
                    <div class="rating-stars">
                        <span class="rating-score">{{ product.rating }}</span>
                        <div class="stars">
                            <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= product.rating }">★</span>
                        </div>
                        <span class="rating-count">({{ product.reviewCount }})</span>
                    </div>
                    <span class="divider">|</span>
                    <span class="sold-count">Đã bán {{ product.soldCount }}</span>
                </div>

                <div class="product-price">
                    <span class="price-current">{{ formatPrice(product.price) }}<sup>₫</sup></span>
                    <span class="price-discount">-{{ product.discount }}%</span>
                    <span class="price-original">{{ formatPrice(product.originalPrice) }}<sup>₫</sup></span>
                    <button class="price-info">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" />
                            <path d="M8 7V11M8 5V5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <!-- Color Selection -->
                <div class="product-options">
                    <div class="option-label">Màu</div>
                    <div class="color-options">
                        <button v-for="color in product.colors" :key="color.id" class="color-option"
                            :class="{ active: selectedColor === color.id }" @click="selectedColor = color.id">
                            <img :src="color.image" :alt="color.name" />
                            <span>{{ color.name }}</span>
                        </button>
                    </div>
                </div>

                <!-- Shipping Info -->
                <div class="shipping-info">
                    <h3>Thông tin vận chuyển</h3>
                    <div class="shipping-location">
                        <span>Giao đến TP. {{ product.shippingLocation }}</span>
                        <button class="change-location">Đổi</button>
                    </div>

                    <div class="shipping-methods">
                        <div class="shipping-method">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M13 16V6C13 4.89543 13.8954 4 15 4H19C20.1046 4 21 4.89543 21 6V16M13 16H21M13 16H3M21 16V18C21 19.1046 20.1046 20 19 20H18M13 16V18C13 19.1046 12.1046 20 11 20H10M3 16V6C3 4.89543 3.89543 4 5 4H9C10.1046 4 11 4.89543 11 6V16M3 16V18C3 19.1046 3.89543 20 5 20H6"
                                    stroke="#808089" stroke-width="1.5" />
                                <circle cx="8" cy="20" r="2" stroke="#808089" stroke-width="1.5" />
                                <circle cx="16" cy="20" r="2" stroke="#808089" stroke-width="1.5" />
                            </svg>
                            <div class="shipping-details">
                                <div class="shipping-title">Giao Thứ Ba</div>
                                <div class="shipping-date">Trước 19h, {{ product.shippingDate }}</div>
                                <div class="shipping-fee">Miễn phí {{ formatPrice(product.shippingFee) }}<sup>₫</sup>
                                </div>
                            </div>
                        </div>

                        <div class="freeship-info">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                                    stroke="#00AB56" stroke-width="1.5" />
                                <path d="M7 10L9 12L13 8" stroke="#00AB56" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</span>
                            <button class="info-icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" />
                                    <path d="M8 7V11M8 5V5.5" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column - Store & Actions -->
            <div class="product-actions">
                <div class="store-info">
                    <div class="store-header">
                        <img src="https://via.placeholder.com/48x48/0B74E5/FFFFFF?text=T" alt="Tiki Trading"
                            class="store-logo" />
                        <div class="store-details">
                            <div class="store-name">
                                Tiki Trading
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="verified-icon">
                                    <circle cx="8" cy="8" r="7" fill="#0B74E5" />
                                    <path d="M5 8L7 10L11 6" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="official-badge">OFFICIAL</span>
                            </div>
                            <div class="store-rating">
                                <span class="rating-score">{{ product.storeRating }}</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFC400">
                                    <path
                                        d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.885L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" />
                                </svg>
                                <span class="rating-count">({{ product.storeReviewCount }})</span>
                            </div>
                        </div>
                        <button class="chat-button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M17.5 8.75C17.5 12.8921 14.1421 16.25 10 16.25C8.6193 16.25 7.32892 15.8868 6.22783 15.2502L2.5 16.25L3.49979 12.5222C2.86321 11.4211 2.5 10.1307 2.5 8.75C2.5 4.60786 5.85786 1.25 10 1.25C14.1421 1.25 17.5 4.60786 17.5 8.75Z"
                                    stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </button>
                    </div>

                    <div class="color-preview">
                        <img :src="product.colors.find(c => c.id === selectedColor)?.image" alt="Xám" />
                        <span>Xám</span>
                    </div>
                </div>

                <div class="quantity-section">
                    <div class="quantity-label">Số Lượng</div>
                    <div class="quantity-control">
                        <button class="qty-btn" @click="decreaseQty" :disabled="quantity <= 1">-</button>
                        <input type="number" v-model.number="quantity" min="1" class="qty-input" />
                        <button class="qty-btn" @click="increaseQty">+</button>
                    </div>
                </div>

                <div class="total-section">
                    <div class="total-label">Tạm tính</div>
                    <div class="total-price">{{ formatPrice(product.price * quantity) }}<sup>₫</sup></div>
                </div>

                <div class="action-buttons">
                    <button class="btn btn-primary">Mua ngay</button>
                    <button class="btn btn-outline">Thêm vào giỏ</button>
                    <button class="btn btn-outline">Mua trước trả sau</button>
                </div>

                <div class="store-banner">
                    <img src="https://via.placeholder.com/370x120/0B74E5/FFFFFF?text=TIKI+Store+Banner"
                        alt="Store Banner" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.product-detail-page {
    background: #f5f5fa;
    min-height: 100vh;
    padding: 16px 0;
}

/* Breadcrumb */
.breadcrumb {
    max-width: 1270px;
    margin: 0 auto 16px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #808089;
}

.breadcrumb a {
    color: #808089;
    text-decoration: none;
    transition: color 0.2s;
}

.breadcrumb a:hover {
    color: #0b74e5;
}

.breadcrumb .separator {
    color: #808089;
}

.breadcrumb .current {
    color: #27272a;
}

/* Main Container */
.product-container {
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: 460px 1fr 370px;
    gap: 16px;
}

/* Left Column - Images */
.product-images {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
}

.brand-banner {
    margin-bottom: 16px;
}

.brand-banner img {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.main-image {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    background: #f5f5f5;
}

.main-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.new-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 12px;
    background: #ED1C24;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
}

.thumbnail-list {
    display: flex;
    gap: 8px;
    overflow-x: auto;
}

.thumbnail {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    border: 2px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    background: #f5f5f5;
    transition: border-color 0.2s;
}

.thumbnail:hover {
    border-color: #dcdcdc;
}

.thumbnail.active {
    border-color: #0b74e5;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.thumbnail-more {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808089;
}

.product-reviews-link {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    padding: 12px;
    background: #f5f5fa;
    border-radius: 4px;
    color: #0b74e5;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
}

.product-reviews-link:hover {
    background: #ebebf0;
}

/* Middle Column - Product Info */
.product-info {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
}

.product-badges {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
}

.badge {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 4px;
}

.badge-topdeal {
    background: #ED1C24;
    color: #ffffff;
}

.badge-guarantee {
    background: #27B550;
    color: #ffffff;
}

.badge-authentic {
    background: #0b74e5;
    color: #ffffff;
}

.badge-brand {
    font-size: 13px;
    color: #808089;
}

.badge-brand a {
    color: #0b74e5;
    text-decoration: none;
}

.product-title {
    font-size: 20px;
    font-weight: 400;
    color: #27272a;
    line-height: 1.4;
    margin: 0 0 12px;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 13px;
}

.rating-stars {
    display: flex;
    align-items: center;
    gap: 6px;
}

.rating-score {
    font-weight: 600;
    color: #27272a;
}

.stars {
    display: flex;
    gap: 2px;
}

.star {
    color: #dcdcdc;
    font-size: 14px;
}

.star.filled {
    color: #ffc400;
}

.rating-count {
    color: #808089;
}

.divider {
    color: #ebebf0;
}

.sold-count {
    color: #808089;
}

.product-price {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.price-current {
    font-size: 32px;
    font-weight: 500;
    color: #27272a;
}

.price-current sup {
    font-size: 18px;
    text-decoration: underline;
}

.price-discount {
    padding: 4px 8px;
    background: #f5f5fa;
    color: #808089;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
}

.price-original {
    font-size: 16px;
    color: #808089;
    text-decoration: line-through;
}

.price-original sup {
    font-size: 14px;
}

.price-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    color: #808089;
    cursor: pointer;
}

/* Options */
.product-options {
    margin-bottom: 24px;
}

.option-label {
    font-size: 14px;
    font-weight: 500;
    color: #27272a;
    margin-bottom: 12px;
}

.color-options {
    display: flex;
    gap: 12px;
}

.color-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border: 2px solid #ebebf0;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
    transition: border-color 0.2s;
}

.color-option:hover {
    border-color: #0b74e5;
}

.color-option.active {
    border-color: #0b74e5;
}

.color-option img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.color-option span {
    font-size: 13px;
    color: #27272a;
}

/* Shipping Info */
.shipping-info {
    border-top: 1px solid #ebebf0;
    padding-top: 24px;
}

.shipping-info h3 {
    font-size: 16px;
    font-weight: 500;
    color: #27272a;
    margin: 0 0 12px;
}

.shipping-location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 14px;
    color: #27272a;
}

.change-location {
    color: #0b74e5;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
}

.shipping-methods {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.shipping-method {
    display: flex;
    gap: 12px;
    padding: 12px;
    border: 1px solid #ebebf0;
    border-radius: 8px;
}

.shipping-details {
    flex: 1;
}

.shipping-title {
    font-size: 14px;
    font-weight: 500;
    color: #27272a;
    margin-bottom: 4px;
}

.shipping-date {
    font-size: 13px;
    color: #27272a;
    margin-bottom: 4px;
}

.shipping-fee {
    font-size: 13px;
    color: #00AB56;
}

.shipping-fee sup {
    font-size: 11px;
    text-decoration: underline;
}

.freeship-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #f0f8ff;
    border-radius: 8px;
    font-size: 13px;
    color: #27272a;
}

.info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #808089;
    cursor: pointer;
}

/* Right Column - Actions */
.product-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.store-info {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
}

.store-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.store-logo {
    width: 48px;
    height: 48px;
    border-radius: 8px;
}

.store-details {
    flex: 1;
}

.store-name {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #27272a;
    margin-bottom: 4px;
}

.verified-icon {
    flex-shrink: 0;
}

.official-badge {
    padding: 2px 6px;
    background: #0b74e5;
    color: #ffffff;
    font-size: 10px;
    font-weight: 600;
    border-radius: 2px;
}

.store-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: #808089;
}

.store-rating .rating-score {
    color: #27272a;
    font-weight: 500;
}

.chat-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #ebebf0;
    border-radius: 8px;
    color: #0b74e5;
    cursor: pointer;
    transition: background 0.2s;
}

.chat-button:hover {
    background: #f5f5fa;
}

.color-preview {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: #f5f5fa;
    border-radius: 8px;
}

.color-preview img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 4px;
}

.color-preview span {
    font-size: 14px;
    color: #27272a;
}

.quantity-section {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
}

.quantity-label {
    font-size: 14px;
    font-weight: 500;
    color: #27272a;
    margin-bottom: 12px;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 0;
    width: fit-content;
    border: 1px solid #ebebf0;
    border-radius: 8px;
    overflow: hidden;
}

.qty-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: none;
    color: #27272a;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.2s;
}

.qty-btn:hover:not(:disabled) {
    background: #f5f5fa;
}

.qty-btn:disabled {
    color: #dcdcdc;
    cursor: not-allowed;
}

.qty-input {
    width: 60px;
    height: 40px;
    border: none;
    border-left: 1px solid #ebebf0;
    border-right: 1px solid #ebebf0;
    text-align: center;
    font-size: 16px;
    color: #27272a;
    outline: none;
}

.qty-input::-webkit-inner-spin-button,
.qty-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.total-section {
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
}

.total-label {
    font-size: 14px;
    color: #808089;
    margin-bottom: 8px;
}

.total-price {
    font-size: 24px;
    font-weight: 500;
    color: #27272a;
}

.total-price sup {
    font-size: 16px;
    text-decoration: underline;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
}

.btn-primary {
    background: #ff424e;
    color: #ffffff;
}

.btn-primary:hover {
    background: #e6303c;
}

.btn-outline {
    background: #ffffff;
    color: #0b74e5;
    border: 1px solid #0b74e5;
}

.btn-outline:hover {
    background: #f0f8ff;
}

.store-banner {
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
}

.store-banner img {
    width: 100%;
    height: auto;
    display: block;
}

/* Responsive */
@media (max-width: 1200px) {
    .product-container {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .product-actions {
        max-width: 400px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .breadcrumb {
        font-size: 12px;
        overflow-x: auto;
        white-space: nowrap;
    }

    .product-title {
        font-size: 18px;
    }

    .price-current {
        font-size: 24px;
    }

    .color-options {
        overflow-x: auto;
    }

    .action-buttons {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        padding: 12px 16px;
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
        z-index: 100;
    }
}
</style>