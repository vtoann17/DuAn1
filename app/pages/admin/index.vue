<script setup>
definePageMeta({ layout: "admin" });

// Dữ liệu thống kê demo
const stats = [
  { title: "Sản phẩm", value: 120, icon: "bi-box-seam", color: "primary", desc: "Tổng số sản phẩm hiện có" },
  { title: "Người dùng", value: 45, icon: "bi-people-fill", color: "success", desc: "Thành viên đã đăng ký" },
  { title: "Đơn hàng", value: 32, icon: "bi-cart-check-fill", color: "warning", desc: "Đơn hàng đang xử lý" },
  { title: "Doanh thu", value: "52.000.000₫", icon: "bi-cash-stack", color: "danger", desc: "Tổng doanh thu tháng" },
];
</script>

<template>
  <div class="admin-dashboard container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold display-5 mb-2">📊 Trang Quản Trị</h1>
      <p class="text-muted">Tổng quan tình hình hoạt động của hệ thống</p>
    </div>

    <!-- Cards thống kê -->
    <div class="row g-4">
      <div
        v-for="(item, index) in stats"
        :key="index"
        class="col-12 col-md-6 col-xl-3"
      >
        <div :class="`card stat-card border-0 shadow-sm h-100 text-${item.color}`">
          <div class="card-body text-center p-4">
            <div :class="`icon-circle bg-${item.color}-subtle mb-3`">
              <i :class="`bi ${item.icon}`"></i>
            </div>
            <h5 class="fw-semibold mb-1">{{ item.title }}</h5>
            <h3 class="fw-bold mb-2">{{ item.value }}</h3>
            <p class="text-muted small mb-0">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hoạt động gần đây -->
    <div class="card mt-5 border-0 shadow-sm">
      <div class="card-header bg-primary text-white fw-semibold py-3">
        <i class="bi bi-clock-history me-2"></i>Hoạt động gần đây
      </div>
      <div class="card-body px-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-0 border-bottom">
            ✅ Người dùng <b>Nguyễn Văn A</b> đã đăng nhập hệ thống
          </li>
          <li class="list-group-item border-0 border-bottom">
            🛒 Đơn hàng <b>#1025</b> đã được xác nhận
          </li>
          <li class="list-group-item border-0 border-bottom">
            📦 Thêm mới sản phẩm <b>Adidas Predator 2025</b>
          </li>
          <li class="list-group-item border-0">
            💰 Doanh thu tăng <b>10%</b> so với tuần trước
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hiệu ứng nền tổng thể */
.admin-dashboard {
  animation: fadeIn 0.5s ease-in-out;
}

/* Card thống kê */
.stat-card {
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: #fff;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Icon tròn */
.icon-circle {
  width: 70px;
  height: 70px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.stat-card:hover .icon-circle {
  transform: scale(1.1);
}

/* Hiệu ứng fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
