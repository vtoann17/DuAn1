<script setup>
import {
  User,
  Package,
  Tags,
  ShoppingBag,
  Users,
  LayoutDashboard,
  Settings,
  Award 
} from "lucide-vue-next";


</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="avatar">
        <User class="icon-lg" />
      </div>
      <div>
        <p class="small-text">Trang quản trị</p>
      </div>
    </div>

    <nav class="menu">
      <NuxtLink to="/admin" class="menu-item active">
        <LayoutDashboard class="icon" /> Bảng điều khiển
      </NuxtLink>
      <NuxtLink to="/admin/categories" class="menu-item">
        <Tags class="icon" /> Quản lý danh mục
      </NuxtLink>
      <NuxtLink to="/admin/brands" class="menu-item">
        <Award  class="icon" /> Quản lý thương hiệu
      </NuxtLink>
      
      <NuxtLink to="/admin/products" class="menu-item">
        <Package class="icon" /> Quản lý sản phẩm
      </NuxtLink>
      <a class="menu-item">
        <ShoppingBag class="icon" /> Quản lý đơn hàng
      </a>
      <a class="menu-item">
        <Users class="icon" /> Quản lý người dùng
      </a>
      <a class="menu-item">
        <Settings class="icon" /> Cài đặt hệ thống
      </a>
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
