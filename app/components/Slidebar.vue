<script setup>
import {
  User,
  Bell,
  CreditCard,
  MapPin,
  DollarSign,
  Eye,
  Heart,
  Star,
  Tag,
  Headphones
} from "lucide-vue-next";
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="avatar">
        <User class="icon-lg" />
      </div>
      <div>
        <p class="small-text">Tài khoản của</p>
        <p class="username">Hoàng Nguyễn Quang Huy</p>
      </div>
    </div>

    <nav class="menu">
      <a class="menu-item active"><User class="icon" /> Thông tin tài khoản</a>
      <a class="menu-item"><Bell class="icon" /> Thông báo của tôi</a>
      <a class="menu-item"><CreditCard class="icon" /> Quản lý đơn hàng</a>
      <a class="menu-item"><MapPin class="icon" /> Quản lý đổi trả</a>
      <a class="menu-item"><MapPin class="icon" /> Sổ địa chỉ</a>
      <a class="menu-item"><CreditCard class="icon" /> Thông tin thanh toán</a>
      <a class="menu-item"><Star class="icon blue" /> Đánh giá sản phẩm</a>
      <a class="menu-item"><Eye class="icon" /> Sản phẩm bạn đã xem</a>
      <a class="menu-item"><Heart class="icon" /> Sản phẩm yêu thích</a>
      <a class="menu-item"><Star class="icon" /> Nhận xét của tôi</a>
      <a class="menu-item"><DollarSign class="icon blue" /> Chia sẻ có lời</a>
      <a class="menu-item"><Tag class="icon yellow" /> Mã giảm giá</a>
      <a class="menu-item"><Headphones class="icon" /> Hỗ trợ khách hàng</a>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
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
}

.avatar svg {
  width: 28px;
  height: 28px;
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
  display: flex;
  align-items: center;
  gap: 12px;
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

/* Mobile hidden by default */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 50;
    width: 240px;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  }

  .sidebar.show {
    transform: translateX(0);
  }
}
</style>
