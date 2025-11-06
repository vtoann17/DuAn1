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
        <span class="icon">{{ category.icon }}</span>
        <span class="name">{{ category.name }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
const categories = [
  { id: 1, name: 'Nhà Sách Tiki', icon: '📘', link: '/nha-sach-tiki' },
  { id: 2, name: 'Nhà Cửa - Đời Sống', icon: '🍲', link: '/nha-cua-doi-song' },
  { id: 3, name: 'Điện Thoại - Máy Tính Bảng', icon: '📱', link: '/dien-thoai-may-tinh-bang' },
  { id: 4, name: 'Đồ Chơi - Mẹ & Bé', icon: '🧸', link: '/do-choi-me-be' },
  { id: 5, name: 'Thiết Bị Số - Phụ Kiện Số', icon: '🎧', link: '/thiet-bi-so-phu-kien-so' },
  { id: 6, name: 'Điện Gia Dụng', icon: '🔌', link: '/dien-gia-dung' },
  { id: 7, name: 'Làm Đẹp - Sức Khỏe', icon: '💄', link: '/lam-dep-suc-khoe' },
  { id: 8, name: 'Ô Tô - Xe Máy - Xe Đạp', icon: '🛵', link: '/o-to-xe-may-xe-dap' },
  { id: 9, name: 'Thời trang nữ', icon: '👗', link: '/thoi-trang-nu' },
  { id: 10, name: 'Bách Hóa Online', icon: '🧴', link: '/bach-hoa-online' },
  { id: 11, name: 'Thể Thao - Dã Ngoại', icon: '⚽', link: '/the-thao-da-ngoai' },
  { id: 12, name: 'Thời trang nam', icon: '👕', link: '/thoi-trang-nam' },
  { id: 13, name: 'Cross Border - Hàng Quốc Tế', icon: '🌐', link: '/cross-border-hang-quoc-te' },
  { id: 14, name: 'Laptop - Máy Vi Tính', icon: '💻', link: '/laptop-may-vi-tinh' }
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

/* Icon */
.sidebar-item .icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
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
