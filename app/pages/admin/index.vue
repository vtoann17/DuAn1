<script setup>
definePageMeta({ layout: "admin" });

// Dữ liệu giả định (Mock Data)
const stats = [
  { label: 'Tổng Đơn 1 tháng', value: 4, icon: 'fa-file-invoice', color: 'bg-primary' },
  { label: 'Tổng Doanh Thu', value: '0₫', icon: 'fa-chart-line', color: 'bg-success' },
  { label: 'Tổng Sản Phẩm', value: 25, icon: 'fa-box-open', color: 'bg-danger' },
  { label: 'Tổng Khách Hàng', value: 4, icon: 'fa-user-tag', color: 'bg-warning' }
];

const financialSummary = [
  { label: 'TỔNG DOANH THU (MẪU)', value: '$35,210.43', change: 17, isPositive: true },
  { label: 'TỔNG CHI PHÍ (MẪU)', value: '$10,390.90', change: 0, isPositive: false },
  { label: 'TỔNG LỢI NHUẬN (MẪU)', value: '$24,813.53', change: 20, isPositive: true },
  { label: 'MỤC TIÊU (MẪU)', value: '1200', change: 18, isPositive: true }
];

const recentOrders = [
  { id: 'ORDER-002', customer: 'Trần Thị B', status: 'Đã hoàn', amount: 2500000 },
  { id: 'ORDER-003', customer: 'Lê Văn C', status: 'Đã hoàn', amount: 850000 },
  { id: 'ORDER-004', customer: 'Phạm Thị D', status: 'Đã hoàn', amount: 3200000 },
  { id: 'ORDER-005', customer: 'Hoàng Văn E', status: 'Đang hoàn', amount: 1200000 }
];

const newMembers = [
  { name: 'Nguyễn Trần Bình Minh', initials: 'N' },
  { name: 'Neuht', initials: 'H' },
  { name: 'Nguyễn Trần Bình Minh', initials: 'N' },
  { name: 'Nguyễn Trần Bình Minh', initials: 'N' }
];

const mockGoal = {
    title: 'Hoàn Thành Mục Tiêu (Dữ liệu mẫu)',
    items: [
        { label: 'Thêm Sản Phẩm vào Giỏ', current: 160, total: 200, color: 'bg-primary' },
        { label: 'Hoàn Tất Mua Hàng', current: 310, total: 400, color: 'bg-info' },
        { label: 'Truy Cập Trang Cao Cấp', current: 480, total: 800, color: 'bg-success' },
        { label: 'Gởi Yêu Cầu', current: 250, total: 500, color: 'bg-warning' },
    ]
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + '₫';
}

const renderStars = (rating) => {
  const fullStar = '★';
  const emptyStar = '☆';
  return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
}
</script>

<template>
  <div class="thinkhub-admin-dashboard-content bg-light min-vh-100 p-3 p-lg-4">
    
    <section class="row g-3 mb-4">
      <div v-for="(stat, index) in stats" :key="index" class="col-6 col-md-3">
        <div :class="['card shadow-sm h-100 border-start-0 border-top-0 border-end-0 rounded-0', `border-start-${stat.color.replace('bg-', '')}-5`]">
          <div class="card-body d-flex align-items-center justify-content-between p-3">
            <div>
              <div class="text-muted text-uppercase fw-semibold mb-1 small">{{ stat.label }}</div>
              <div class="fs-4 fw-bold text-dark">{{ stat.value }}</div>
            </div>
            <div :class="['p-3 rounded-circle text-white', stat.color, 'stat-icon-bg']">
              <i :class="['fas', stat.icon, 'fa-lg']"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row g-4">
      
      <div class="col-lg-8">
        <div class="card shadow-sm mb-4">
          <div class="card-header bg-white py-3">
            <h2 class="card-title fs-5 fw-semibold mb-0">Báo Cáo Tóm Tắt Hàng Tháng</h2>
          </div>
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
              <div class="fw-bold text-primary small">Doanh Số (Dữ liệu mẫu): 1 Thg 1 - 30 Thg 7, 2025</div>
              <a href="#" class="btn btn-sm btn-outline-secondary d-none d-md-block">Xem chi tiết báo cáo</a>
            </div>

            <div class="row row-cols-2 row-cols-md-4 g-2 mb-4">
              <div v-for="(item, index) in financialSummary" :key="index" class="col text-center">
                <div class="border rounded h-100 p-2 d-flex flex-column justify-content-center">
                    <div class="d-flex align-items-center justify-content-center small fw-bold mb-1"
                        :class="item.isPositive ? 'text-success' : 'text-danger'">
                      <i :class="['fas', item.isPositive ? 'fa-caret-up' : 'fa-caret-down', 'me-1']"></i>
                      {{ item.change }}%
                    </div>
                    <div class="fs-5 fw-bold text-dark">{{ item.value }}</div>
                    <div class="text-muted small text-uppercase">{{ item.label }}</div>
                </div>
              </div>
            </div>

            <h3 class="fs-6 fw-bold mb-3 pb-2 border-bottom">Đơn Hàng Mới Nhất</h3>
            <div class="table-responsive">
              <table class="table table-hover table-sm recent-orders-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Mã ĐH</th>
                    <th scope="col">Khách Hàng</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Tổng Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, index) in recentOrders" :key="index">
                    <td><a href="#" class="text-primary fw-medium text-decoration-none">{{ order.id }}</a></td>
                    <td>{{ order.customer }}</td>
                    <td><span :class="['badge', order.status === 'Đã hoàn' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning', 'py-2 px-3 rounded-pill']">{{ order.status }}</span></td>
                    <td class="fw-medium text-end">{{ formatPrice(order.amount) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-end mt-3">
              <button class="btn btn-sm btn-outline-primary">Xem Tất Cả Đơn Hàng <i class="fas fa-arrow-right ms-1"></i></button>
            </div>
          </div>
        </div>

        <div class="card shadow-sm">
           <div class="card-header bg-white py-3">
             <h3 class="card-title fs-5 fw-semibold mb-0">Đánh Giá Mới Nhất</h3>
           </div>
           <div class="card-body p-3">
             <div class="table-responsive">
              <table class="table table-hover table-sm reviews-table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Người gửi</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td class="text-warning fw-bold small-stars">{{ renderStars(4) }}</td>
                    <td>Sản phẩm 5 sao, chất lượng tuyệt vời...</td>
                  </tr>
                   <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td class="text-warning fw-bold small-stars">{{ renderStars(5) }}</td>
                    <td>Sản phẩm 5 sao, chất lượng tuyệt vời...</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-end mt-3">
              <button class="btn btn-sm btn-outline-primary">Xem Tất Cả Đánh Giá <i class="fas fa-arrow-right ms-1"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        
        <div class="card shadow-sm mb-4">
          <div class="card-header bg-white py-3">
            <h3 class="card-title fs-5 fw-semibold mb-0">{{ mockGoal.title }}</h3>
          </div>
          <div class="card-body p-3">
            <div v-for="(item, index) in mockGoal.items" :key="index" class="goal-item mb-3">
                <div class="d-flex justify-content-between align-items-center small">
                    <span class="text-muted">{{ item.label }}</span>
                    <span class="fw-bold">{{ item.current }}/{{ item.total }}</span>
                </div>
                <div class="progress mt-1" style="height: 7px;">
                    <div :class="['progress-bar', item.color]" role="progressbar" :style="{ width: (item.current / item.total) * 100 + '%' }" :aria-valuenow="item.current" aria-valuemin="0" :aria-valuemax="item.total"></div>
                </div>
            </div>
          </div>
        </div>

        <div class="card shadow-sm mb-4">
          <div class="card-header bg-white py-3">
            <h3 class="card-title fs-5 fw-semibold mb-0">Tình Trạng Đơn Hàng</h3>
          </div>
          <div class="card-body p-3 text-center text-muted small py-5">
              <i class="fas fa-chart-pie fa-3x mb-3 text-info"></i>
              <p>Dữ liệu biểu đồ sẽ hiển thị tại đây.</p>
              <button class="btn btn-sm btn-outline-info">Tải dữ liệu</button>
          </div>
        </div>
        
        <div class="card shadow-sm">
          <div class="card-header bg-white py-3">
            <h3 class="card-title fs-5 fw-semibold mb-0">Thành Viên Mới Nhất</h3>
          </div>
          <div class="card-body p-3">
            <ul class="list-unstyled mb-0">
                <li v-for="(member, index) in newMembers" :key="index" class="d-flex align-items-center mb-3">
                    <div :class="['member-initials text-white rounded-circle d-flex align-items-center justify-content-center me-3', index % 2 === 0 ? 'bg-info' : 'bg-secondary']" style="width: 38px; height: 38px;">
                        {{ member.initials }}
                    </div>
                    <span class="fw-medium text-dark">{{ member.name }}</span>
                </li>
            </ul>
            <div class="text-end mt-3 border-top pt-3">
              <a href="#" class="text-primary small text-decoration-none">Xem tất cả khách hàng <i class="fas fa-arrow-right ms-1"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <footer class="admin-footer text-muted small mt-5 pt-3 border-top text-center text-md-start">
      THINKHUB CÔNG NGHỆ ĐỈNH COUT TRI NĂNG OUTPLAY.
      <span class="float-md-end mt-2 mt-md-0">Hi guys</span>
    </footer>

  </div>
</template>

<style scoped>
/* GENERAL LAYOUT & BACKGROUND */
.thinkhub-admin-dashboard-content {
  font-family: 'Segoe UI', Arial, sans-serif; /* Font chữ hiện đại hơn */
  line-height: 1.6;
  color: #333;
}

/* CARDS & SHADOWS */
.card {
  border-radius: 0.5rem; /* Góc bo tròn nhẹ cho card */
  border: none; /* Bỏ border mặc định của Bootstrap card */
}

/* CUSTOM BORDER FOR STATS CARDS (Left border) */
/* Cần định nghĩa các biến màu của Bootstrap trong file CSS chính hoặc cấu hình Sass */
/* Hoặc sử dụng màu trực tiếp nếu không muốn phụ thuộc biến */
.border-start-primary-5 { border-left: 5px solid var(--bs-primary) !important; }
.border-start-success-5 { border-left: 5px solid var(--bs-success) !important; }
.border-start-danger-5 { border-left: 5px solid var(--bs-danger) !important; }
.border-start-warning-5 { border-left: 5px solid var(--bs-warning) !important; }


/* STATS SECTION ICONS */
.stat-icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px; /* Kích thước cố định cho icon nền tròn */
    height: 60px;
}

/* FINANCIAL SUMMARY */
.financial-summary .summary-item .border {
    border-color: #e9ecef !important; /* Màu border nhẹ hơn */
}
.financial-summary .summary-item .fs-5 {
    font-size: 1.35rem !important; /* Hơi nhỏ hơn fs-4 mặc định */
}

/* TABLES */
.recent-orders-table, .reviews-table {
    font-size: 0.875rem; /* Chữ nhỏ hơn một chút trong bảng */
}
.recent-orders-table th, .reviews-table th {
    font-weight: 600;
    color: #6c757d; /* Màu chữ header bảng */
    border-bottom: 2px solid #e9ecef !important; /* Border đẹp hơn */
}
.recent-orders-table td, .reviews-table td {
    vertical-align: middle; /* Căn giữa theo chiều dọc */
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
}

/* BADGES (ORDER STATUS) */
/* Bootstrap 5 đã có bg-*-subtle và text-* để tạo badge đẹp hơn */
/* Nếu bạn muốn màu tùy chỉnh, có thể giữ lại như cũ */
/*
.bg-success-light {
    background-color: #d4edda;
    color: #155724;
    padding: 0.4em 0.7em;
    border-radius: 0.375rem;
    white-space: nowrap;
    font-weight: 500;
}
.bg-warning-light {
    background-color: #fff3cd;
    color: #856404;
    padding: 0.4em 0.7em;
    border-radius: 0.375rem;
    white-space: nowrap;
    font-weight: 500;
}
*/

/* PROGRESS BARS */
.progress {
    background-color: #e9ecef;
    border-radius: 0.25rem;
}
.progress-bar {
    border-radius: 0.25rem;
}

/* MEMBER INITIALS */
.member-initials {
    font-weight: bold;
    font-size: 1rem; /* Kích thước chữ to hơn */
    flex-shrink: 0;
}

/* RATING STARS */
.small-stars {
    font-size: 1.1rem; /* Kích thước ngôi sao to hơn một chút */
    letter-spacing: 0.1em;
}

/* FOOTER */
.admin-footer {
  font-size: 0.8rem;
  color: #888;
}

/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 767.98px) {
  .financial-summary .summary-item {
    border-right: none;
    border-bottom: 1px solid #eee; /* Thêm border dưới trên mobile */
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .financial-summary .summary-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
  }
}
</style>