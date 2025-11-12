<script setup>
import { ref, computed } from 'vue';

definePageMeta({ layout: "admin" });

const allOrders = [
  { id: '#1001', customer: 'Nguyễn Văn A', date: '2025-11-10', total: 1250000, totalDisplay: '1.250.000₫', status: 'Đã giao', statusClass: 'success' },
  { id: '#1002', customer: 'Trần Thị B', date: '2025-11-10', total: 550000, totalDisplay: '550.000₫', status: 'Đang xử lý', statusClass: 'warning' },
  { id: '#1003', customer: 'Lê Văn C', date: '2025-11-09', total: 2800000, totalDisplay: '2.800.000₫', status: 'Đã hủy', statusClass: 'danger' },
  { id: '#1004', customer: 'Phạm Thị D', date: '2025-11-09', total: 890000, totalDisplay: '890.000₫', status: 'Chờ thanh toán', statusClass: 'info' },
  { id: '#1005', customer: 'Hoàng Minh E', date: '2025-11-08', total: 3120000, totalDisplay: '3.120.000₫', status: 'Đang vận chuyển', statusClass: 'primary' },
  { id: '#1006', customer: 'Nguyễn Văn A', date: '2025-11-07', total: 750000, totalDisplay: '750.000₫', status: 'Đã giao', statusClass: 'success' },
  { id: '#1007', customer: 'Đặng Q. F', date: '2025-11-06', total: 100000, totalDisplay: '100.000₫', status: 'Đã hủy', statusClass: 'danger' },
  { id: '#1008', customer: 'Vũ Thị G', date: '2025-11-05', total: 4500000, totalDisplay: '4.500.000₫', status: 'Đang xử lý', statusClass: 'warning' },
  { id: '#1009', customer: 'Ngô V. H', date: '2025-11-05', total: 120000, totalDisplay: '120.000₫', status: 'Đã giao', statusClass: 'success' },
  { id: '#1010', customer: 'Lý A. K', date: '2025-11-04', total: 990000, totalDisplay: '990.000₫', status: 'Đang vận chuyển', statusClass: 'primary' },
  { id: '#1011', customer: 'Trịnh T. L', date: '2025-11-04', total: 1500000, totalDisplay: '1.500.000₫', status: 'Chờ thanh toán', statusClass: 'info' },
];

const orders = ref(allOrders);

const searchTerm = ref(''); // State cho ô tìm kiếm
const selectedStatus = ref('Tất cả'); // State cho lọc trạng thái
const currentPage = ref(1);
const itemsPerPage = 5; // Số đơn hàng tối đa mỗi trang

const sortKey = ref('date');
const sortOrder = ref('desc');

const filteredOrders = computed(() => {
  let tempOrders = orders.value;

  if (selectedStatus.value !== 'Tất cả') {
    tempOrders = tempOrders.filter(order => order.status === selectedStatus.value);
  }

  if (searchTerm.value) {
    const search = searchTerm.value.toLowerCase();
    tempOrders = tempOrders.filter(order =>
      order.id.toLowerCase().includes(search) ||
      order.customer.toLowerCase().includes(search)
    );
  }

  currentPage.value = 1;

  return tempOrders;
});

const sortedOrders = computed(() => {
  if (!sortKey.value) return filteredOrders.value;

  return [...filteredOrders.value].sort((a, b) => {
    const aValue = a[sortKey.value];
    const bValue = b[sortKey.value];

    let result = 0;
    
    if (aValue < bValue) result = -1;
    if (aValue > bValue) result = 1;

    return sortOrder.value === 'asc' ? result : -result;
  });
});

// Phân trang
const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedOrders.value.slice(start, end);
});

const totalItems = computed(() => filteredOrders.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const sortBy = (key) => {
  if (sortKey.value === key) {
    // Đảo ngược thứ tự nếu nhấp lại vào cột hiện tại
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    // Sắp xếp theo cột mới, mặc định là giảm dần (desc)
    sortKey.value = key;
    sortOrder.value = 'desc';
  }
};

// Hàm lấy icon sắp xếp
const getSortIcon = (key) => {
  if (sortKey.value !== key) {
    return 'bi-filter'; // Icon chung khi chưa được chọn
  }
  return sortOrder.value === 'asc' ? 'bi-sort-up' : 'bi-sort-down';
};
</script>

<template>
  <div class="admin-orders container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="fw-bold display-6 mb-0">📦 Danh Sách Đơn Hàng</h1>
      <button class="btn btn-primary shadow-sm">
        <i class="bi bi-file-earmark-arrow-down-fill me-2"></i>Xuất Excel
      </button>
    </div>
    <p class="text-muted mb-4">Quản lý và theo dõi các đơn hàng gần đây</p>

    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
        <div class="input-group w-auto me-3 search-input">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Tìm kiếm theo mã ĐH, khách hàng..." 
                v-model="searchTerm"
            >
            <button class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
        </div>
        <div class="dropdown">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Trạng thái: {{ selectedStatus }}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Tất cả'">Tất cả</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Đang xử lý'">Đang xử lý</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Đang vận chuyển'">Đang vận chuyển</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Đã giao'">Đã giao</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Chờ thanh toán'">Chờ thanh toán</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="selectedStatus = 'Đã hủy'">Đã hủy</a></li>
            </ul>
        </div>
      </div>
      
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col" @click="sortBy('id')" class="sortable">
                  Mã ĐH <i :class="`bi ${getSortIcon('id')}`"></i>
                </th>
                <th scope="col" @click="sortBy('customer')" class="sortable">
                  Khách hàng <i :class="`bi ${getSortIcon('customer')}`"></i>
                </th>
                <th scope="col" @click="sortBy('date')" class="sortable">
                  Ngày đặt <i :class="`bi ${getSortIcon('date')}`"></i>
                </th>
                <th scope="col" @click="sortBy('total')" class="sortable text-end">
                  Tổng tiền <i :class="`bi ${getSortIcon('total')}`"></i>
                </th>
                <th scope="col" class="text-center">Trạng thái</th>
                <th scope="col" class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in paginatedOrders" :key="order.id">
                <th scope="row">{{ order.id }}</th>
                <td>{{ order.customer }}</td>
                <td>{{ order.date }}</td>
                <td class="fw-bold text-end">{{ order.totalDisplay }}</td>
                <td class="text-center">
                  <span :class="`badge text-bg-${order.statusClass} rounded-pill`">
                    {{ order.status }}
                  </span>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-outline-info me-2" title="Chi tiết">
                    <i class="bi bi-eye-fill"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger" title="Xóa">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr v-if="paginatedOrders.length === 0">
                <td colspan="6" class="text-center py-4 text-muted">Không tìm thấy đơn hàng nào khớp với tiêu chí tìm kiếm/lọc.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="card-footer bg-white border-top d-flex justify-content-between align-items-center py-3">
        <div class="text-muted small">
            Hiển thị {{ paginatedOrders.length }} đơn hàng trên tổng số {{ totalItems }}
        </div>
        
        <nav aria-label="Order pagination">
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" aria-label="Trước" @click.prevent="changePage(currentPage - 1)">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li 
                class="page-item" 
                v-for="page in totalPages" 
                :key="page" 
                :class="{ active: currentPage === page }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" aria-label="Sau" @click.prevent="changePage(currentPage + 1)">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hiệu ứng tổng thể */
.admin-orders {
    animation: fadeIn 0.5s ease-in-out;
}

/* Bảng và Sắp xếp */
.table th, .table td {
    vertical-align: middle;
}

.sortable {
    cursor: pointer;
    user-select: none; /* Ngăn chọn văn bản khi nhấp để sắp xếp */
    padding-right: 0.5rem; /* Tăng khoảng cách cho icon sắp xếp */
}

.sortable i {
    font-size: 0.8rem;
    margin-left: 0.3rem;
    transition: transform 0.2s;
}

.table th:first-child, .table td:first-child {
    padding-left: 1.5rem;
}

.table th:last-child, .table td:last-child {
    padding-right: 1.5rem;
}

/* Nút Hành động */
.btn-sm i {
    font-size: 0.8rem;
}

/* Tăng độ rộng cho ô tìm kiếm */
.search-input {
    min-width: 300px;
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