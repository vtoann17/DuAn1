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

        <a class="menu-item">
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

        <a class="menu-item active">
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
      <h1 class="title">Mã giảm giá</h1>

      <!-- Tabs -->
      <div class="tabs">
        <button class="tab active">Tất cả</button>
        <button class="tab">Tiki</button>
        <button class="tab">Nhà bán</button>
        <button class="tab">Ưu đãi thanh toán</button>
        <button class="tab">Hết hiệu lực</button>
      </div>

      <!-- Nếu có mã giảm giá -->
      <div v-if="vouchers.length" class="voucher-list">
        <div v-for="(voucher, index) in vouchers" :key="index" class="voucher-item">
          <div class="voucher-info">
            <h3 class="voucher-code">{{ voucher.ma }}</h3>
            <p>Giảm {{ voucher.phanTramGiam }}%</p>
            <p>Hạn sử dụng: {{ voucher.hanSuDung }}</p>
          </div>
          <button class="btn-primary">Sử dụng ngay</button>
        </div>
      </div>

      <!-- Nếu trống -->
      <div v-else class="empty">
        <img
          src="https://salt.tikicdn.com/ts/upload/3e/f9/bb/93dd485b6ef1c3a8b6cb30b6eaffc302.png"
          alt="no vouchers"
          class="empty-img"
        />
        <p>Bạn chưa có mã giảm giá nào</p>
        <button class="btn-primary">Khám phá thêm</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const vouchers = ref([
  // Nếu muốn trống thì để mảng rỗng []
  {
    ma: 'GIAM10',
    phanTramGiam: 10,
    hanSuDung: '2025-12-31',
  },
  {
    ma: 'SALE20',
    phanTramGiam: 20,
    hanSuDung: '2025-11-30',
  },
])
</script>

<style scoped>
/* Dùng lại toàn bộ style từ trang yêu thích */
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
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  transition: all 0.15s ease;
}

.menu-item:hover {
  background: #f0f4ff;
}

.menu-item.active {
  background: #e4eafc;
  font-weight: 600;
  color: #007bff;
}

.content {
  flex: 1;
  padding: 32px 40px;
}

.title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
}

.tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.tab {
  background: none;
  border: none;
  font-size: 15px;
  padding: 6px 12px;
  cursor: pointer;
  color: #555;
  border-bottom: 2px solid transparent;
}

.tab.active {
  color: #007bff;
  border-color: #007bff;
  font-weight: 600;
}

.voucher-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.voucher-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.voucher-info h3 {
  margin: 0 0 8px;
  color: #007bff;
  font-weight: 600;
}

.voucher-info p {
  margin: 0;
  color: #555;
}

.empty {
  text-align: center;
  background: #fff;
  padding: 50px;
  border-radius: 12px;
  color: #6b7280;
}

.empty-img {
  width: 120px;
  margin-bottom: 20px;
}

.btn-primary {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary:hover {
  background: #0056b3;
}
</style>
