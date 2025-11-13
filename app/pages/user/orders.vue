<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="avatar">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div>
          <p class="small-text">Tài khoản của</p>
          <p class="username">Hoàng Văn Toàn</p>
        </div>
      </div>

      <!-- Menu -->
      <nav class="menu">
        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>Thông tin tài khoản</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span>Thông báo của tôi</span>
        </a>

        <a class="menu-item active">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          <span>Quản lý đơn hàng</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Quản lý đổi trả</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Số địa chỉ</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          <span>Thông tin thanh toán</span>
        </a>

        <a class="menu-item">
          <svg class="icon blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>Đánh giá sản phẩm</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Sản phẩm bạn đã xem</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>Sản phẩm yêu thích</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>Nhận xét của tôi</span>
        </a>

        <a class="menu-item">
          <svg class="icon blue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span>Chia sẻ có lời</span>
        </a>

        <a class="menu-item">
          <svg class="icon yellow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span>Mã giảm giá</span>
        </a>

        <a class="menu-item">
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
          </svg>
          <span>Hỗ trợ khách hàng</span>
        </a>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="content">
      <h1 class="title">Đơn hàng của tôi</h1>

      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="search-box">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          class="search-input"
        />
        <button class="search-btn">Tìm đơn hàng</button>
      </div>

      <div class="orders-list">
        <div v-for="order in orders" :key="order.id" class="order-card">
          <div class="order-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AB56" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span class="status-text">{{ order.statusText }}</span>
          </div>

          <div v-for="(p, i) in order.products" :key="i" class="product-item">
            <img :src="p.image" :alt="p.name" class="product-image" />
            <div class="product-info">
              <h3 class="product-name">{{ p.name }}</h3>
              <p class="product-seller">{{ p.seller }}</p>
            </div>
            <div class="product-quantity">x{{ p.quantity }}</div>
            <div class="product-price">{{ p.price.toLocaleString('vi-VN') }} ₫</div>
          </div>

          <div class="order-footer">
            <div class="order-total">
              <span>Tổng tiền:</span>
              <span class="total-amount">{{ order.total.toLocaleString('vi-VN') }} ₫</span>
            </div>
            <div class="order-actions">
              <button class="btn-secondary">Mua lại</button>
              <button class="btn-primary">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("all");
const searchQuery = ref("");

const tabs = [
    { id: "all", label: "Tất cả đơn" },
    { id: "pending", label: "Chờ thanh toán" },
    { id: "processing", label: "Đang xử lý" },
    { id: "shipping", label: "Đang vận chuyển" },
    { id: "delivered", label: "Đã giao" },
    { id: "cancelled", label: "Đã hủy" },
];

const orders = ref([
    {
        id: 1,
        status: "delivered",
        statusText: "Giao hàng thành công",
        products: [
            {
                name: "Bật Lửa Xăng Pink Lighter 217",
                seller: "Siêu thị Tính Giau",
                image: "https://via.placeholder.com/80x80/FFB6C1/ffffff?text=Lighter",
                quantity: 1,
                price: 37525,
            },
        ],
        total: 46525,
    },
    {
        id: 2,
        status: "delivered",
        statusText: "Giao hàng thành công",
        products: [
            {
                name: "Kính cường lực Full dành cho Realme C2",
                seller: "KANEN",
                image: "https://via.placeholder.com/80x80/00CED1/ffffff?text=Glass",
                quantity: 1,
                price: 30000,
            },
        ],
        total: 39000,
    },
]);
</script>

<style scoped>
.wrapper {
    display: flex;
    min-height: 100vh;
    background: #f5f6fa;
    font-family: Inter, 'Segoe UI', Arial, sans-serif;
    color: #222;
}

.sidebar {
    width: 260px;
    background: #fff;
    border-right: 1px solid #e0e0e0;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.sidebar-header {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    align-items: center;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #e4eafc;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007bff;
}

.sidebar-header p {
    margin: 0;
}

.small-text {
    font-size: 12px;
    color: #6b7280;
}

.username {
    font-weight: 600;
    font-size: 14px;
    color: #111827;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    color: #111827;
    cursor: pointer;
    transition: all 0.15s ease;
    text-decoration: none;
}

.menu-item:hover {
    background: #f0f4ff;
}

.menu-item.active {
    background: #e4eafc;
    font-weight: 600;
}

.menu-item .icon {
    width: 20px;
    height: 20px;
}

.menu-item .blue {
    color: #007bff;
}

.menu-item .yellow {
    color: #f59e0b;
}

.content {
    flex: 1;
    padding: 32px 40px;
    overflow-x: hidden;
}

.title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 24px;
}

.tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    border-bottom: 2px solid #e5e7eb;
    overflow-x: auto;
}

.tab {
    padding: 12px 20px;
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    margin-bottom: -2px;
}

.tab:hover {
    color: #111827;
}

.tab.active {
    color: #007bff;
    border-bottom-color: #007bff;
}

.search-box {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    background: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

.search-icon {
    color: #6b7280;
    flex-shrink: 0;
}

.search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    color: #111827;
}

.search-input::placeholder {
    color: #9ca3af;
}

.search-btn {
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #007bff;
    border-radius: 6px;
    color: #007bff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
}

.search-btn:hover {
    background: #eaf3ff;
}

.orders-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.order-card {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.order-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f3f4f6;
    margin-bottom: 16px;
}

.status-text {
    font-size: 14px;
    font-weight: 500;
    color: #00AB56;
}

.product-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
}

.product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #f3f4f6;
}

.product-info {
    flex: 1;
}

.product-name {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
    margin: 0 0 6px;
    line-height: 1.4;
}

.product-seller {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
}

.product-quantity {
    font-size: 14px;
    color: #6b7280;
    padding: 0 16px;
}

.product-price {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    min-width: 120px;
    text-align: right;
}

.order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid #f3f4f6;
    margin-top: 12px;
}

.order-total {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.order-total span:first-child {
    font-size: 13px;
    color: #6b7280;
}

.total-amount {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
}

.order-actions {
    display: flex;
    gap: 12px;
}

.btn-primary,
.btn-secondary {
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary {
    background: #007bff;
    color: #fff;
    border: none;
}

.btn-primary:hover {
    background: #0056b3;
}

.btn-secondary {
    background: #fff;
    color: #007bff;
    border: 1px solid #007bff;
}

.btn-secondary:hover {
    background: #eaf3ff;
}

@media (max-width: 1024px) {
    .wrapper {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
    }

    .content {
        padding: 20px;
    }

    .tabs {
        overflow-x: scroll;
    }
}

@media (max-width: 640px) {
    .search-box {
        flex-direction: column;
        align-items: stretch;
    }

    .search-btn {
        width: 100%;
    }

    .product-item {
        flex-wrap: wrap;
    }

    .product-quantity,
    .product-price {
        width: 50%;
        text-align: left;
    }

    .order-footer {
        flex-direction: column;
        gap: 16px;
        align-items: stretch;
    }

    .order-actions {
        flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
    }
}
</style>
