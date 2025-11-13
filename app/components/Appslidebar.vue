<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Danh mục</h2>
    </div>

    <nav class="sidebar-nav">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="category.link"
        class="sidebar-item"
      >
        <i :class="['icon bi', category.icon]"></i>
        <span class="name">{{ category.name }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
const categories = [
  // Cập nhật trường 'icon' với tên class của Bootstrap Icons
  { id: 1, name: 'Nhà Sách Tiki', icon: 'bi-book', link: '/nha-sach-tiki' },
  { id: 2, name: 'Nhà Cửa - Đời Sống', icon: 'bi-house-door', link: '/nha-cua-doi-song' },
  { id: 3, name: 'Điện Thoại - Máy Tính Bảng', icon: 'bi-phone', link: '/dien-thoai-may-tinh-bang' },
  { id: 4, name: 'Đồ Chơi - Mẹ & Bé', icon: 'bi-balloon', link: '/do-choi-me-be' },
  { id: 5, name: 'Thiết Bị Số - Phụ Kiện Số', icon: 'bi-headset', link: '/thiet-bi-so-phu-kien-so' },
  { id: 6, name: 'Điện Gia Dụng', icon: 'bi-plug', link: '/dien-gia-dung' },
  { id: 7, name: 'Làm Đẹp - Sức Khỏe', icon: 'bi-heart', link: '/lam-dep-suc-khoe' },
  { id: 8, name: 'Ô Tô - Xe Máy - Xe Đạp', icon: 'bi-truck', link: '/o-to-xe-may-xe-dap' },
  { id: 9, name: 'Thời trang nữ', icon: 'bi-bag', link: '/thoi-trang-nu' },
  { id: 10, name: 'Bách Hóa Online', icon: 'bi-basket', link: '/bach-hoa-online' },
  { id: 11, name: 'Thể Thao - Dã Ngoại', icon: 'bi-bicycle', link: '/the-thao-da-ngoai' },
  { id: 12, name: 'Thời trang nam', icon: 'bi-person', link: '/thoi-trang-nam' },
  { id: 13, name: 'Cross Border - Hàng Quốc Tế', icon: 'bi-globe', link: '/cross-border-hang-quoc-te' },
  { id: 14, name: 'Laptop - Máy Vi Tính', icon: 'bi-laptop', link: '/laptop-may-vi-tinh' }
];
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  overflow-y: auto;
  font-family: Arial, sans-serif;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.05);
}

/* Header */
.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
}
.sidebar-header h2 {
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  margin: 0;
}

/* Navigation */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
}

/* Item */
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.sidebar-item:hover {
  background: #f0f7ff;
  color: #007bff;
}

/* Icon - Điều chỉnh CSS để phù hợp với Bootstrap Icons */
.sidebar-item .icon {
  font-size: 18px; /* Kích thước icon */
  width: 24px; /* Đảm bảo căn chỉnh đều */
  text-align: center;
  /* Font-weight: bold; - Có thể thêm nếu muốn icon đậm hơn */
}

/* Active link */
.router-link-active {
  background: #e6f0ff;
  color: #007bff;
  font-weight: 600;
}

/* Scrollbar */
.sidebar::-webkit-scrollbar {
  width: 6px;
}
.sidebar::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
.sidebar::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>