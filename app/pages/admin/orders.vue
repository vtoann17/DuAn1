<script setup>
import { ref, reactive, computed } from 'vue';

definePageMeta({ layout: "admin" });

/* ================================================
   🧩 MOCK DATA
================================================ */
const orders = ref([
  { 
    id: 1, 
    customerName: "Nguyễn Văn A", 
    phone: "0901234567",
    total: 25000000, 
    status: "pending",
    orderDate: "2025-11-10",
    products: 3,
    disabled: false
  },
  { 
    id: 2, 
    customerName: "Trần Thị B", 
    phone: "0912345678",
    total: 15500000, 
    status: "confirmed",
    orderDate: "2025-11-11",
    products: 2,
    disabled: false
  },
  { 
    id: 3, 
    customerName: "Lê Văn C", 
    phone: "0923456789",
    total: 48000000, 
    status: "shipping",
    orderDate: "2025-11-09",
    products: 5,
    disabled: false
  },
  { 
    id: 4, 
    customerName: "Phạm Thị D", 
    phone: "0934567890",
    total: 12000000, 
    status: "completed",
    orderDate: "2025-11-08",
    products: 1,
    disabled: false
  },
  { 
    id: 5, 
    customerName: "Hoàng Văn E", 
    phone: "0945678901",
    total: 8500000, 
    status: "cancelled",
    orderDate: "2025-11-12",
    products: 2,
    disabled: true
  },
  { 
    id: 6, 
    customerName: "Nguyễn Văn A", 
    phone: "0901234567",
    total: 25000000, 
    status: "pending",
    orderDate: "2025-11-10",
    products: 3,
    disabled: false
  }
]);

const statusLabels = {
  pending: 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  shipping: 'Đang giao',
  completed: 'Hoàn thành',
  cancelled: 'Đã hủy'
};

const statusColors = {
  pending: '#f59e0b',
  confirmed: '#3b82f6',
  shipping: '#8b5cf6',
  completed: '#10b981',
  cancelled: '#ef4444'
};

/* ================================================
   ⚙️ STATE
================================================ */
const query = reactive({
  search: '',
  perPage: 5,
  sort: 'descID',
  page: 1,
  statusFilter: 'all'
});

const dropdownOpen = reactive({
  perPage: false,
  sort: false,
  status: false
});

const sortLabels = {
  descID: 'Mới nhất',
  ascID: 'Cũ nhất',
  descTotal: 'Giá cao → thấp',
  ascTotal: 'Giá thấp → cao'
};

const showModal = ref(false);
const isViewing = ref(false);
const loading = ref(false);

const selectedOrder = ref(null);

/* ================================================
   🧠 METHODS
================================================ */
const getSortLabel = (value) => sortLabels[value] || "Mới nhất";
const getStatusLabel = (value) => value === 'all' ? 'Tất cả' : statusLabels[value] || "Tất cả";

const toggleDropdown = (type) => {
  dropdownOpen[type] = !dropdownOpen[type];
};

const closeDropdown = (type) => {
  setTimeout(() => dropdownOpen[type] = false, 200);
};

const selectOption = async (type, value) => {
  query[type] = value;
  if (type === 'perPage' || type === 'sort' || type === 'statusFilter') query.page = 1;
  dropdownOpen[type] = false;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

/* ---------- Modal actions ---------- */
const viewOrderDetail = (order) => {
  selectedOrder.value = { ...order };
  isViewing.value = true;
  showModal.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  showModal.value = false;
  selectedOrder.value = null;
  isViewing.value = false;
  document.body.classList.remove("modal-open");
};

const updateStatus = (orderId, newStatus) => {
  const order = orders.value.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
  }
};

const toggleOrderStatus = (orderId) => {
  const order = orders.value.find(o => o.id === orderId);
  if (order) {
    order.disabled = !order.disabled;
  }
};

const deleteOrder = (id) => {
  if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
    orders.value = orders.value.filter(o => o.id !== id);
  }
};

/* ================================================
   📊 COMPUTED
================================================ */
const filteredOrders = computed(() => {
  let list = orders.value.filter(o => {
    const matchSearch = o.customerName.toLowerCase().includes(query.search.toLowerCase()) ||
                       o.phone.includes(query.search);
    const matchStatus = query.statusFilter === 'all' || o.status === query.statusFilter;
    return matchSearch && matchStatus;
  });

  // Sắp xếp
  if (query.sort === 'ascID') list.sort((a, b) => a.id - b.id);
  if (query.sort === 'descID') list.sort((a, b) => b.id - a.id);
  if (query.sort === 'ascTotal') list.sort((a, b) => a.total - b.total);
  if (query.sort === 'descTotal') list.sort((a, b) => b.total - a.total);

  // Phân trang
  return list.slice((query.page - 1) * query.perPage, query.page * query.perPage);
});

const totalPages = computed(() => {
  const filtered = orders.value.filter(o => {
    const matchSearch = o.customerName.toLowerCase().includes(query.search.toLowerCase()) ||
                       o.phone.includes(query.search);
    const matchStatus = query.statusFilter === 'all' || o.status === query.statusFilter;
    return matchSearch && matchStatus;
  });
  return Math.ceil(filtered.length / query.perPage);
});

const changePage = (page) => {
  query.page = page;
};
</script>

<template>
<div class="container py-4">
  <h1 class="mb-4 fw-bold">Quản lý đơn hàng</h1>

  <div class="toolbar d-flex align-items-center justify-content-between flex-wrap gap-3">
    <div class="d-flex align-items-center gap-4 flex-wrap">
      <div class="toolbar-item d-flex align-items-center gap-2">
        <label>Hiển thị:</label>
        <div class="custom-select" tabindex="0" @click="toggleDropdown('perPage')" @blur="closeDropdown('perPage')">
          <div class="custom-select-trigger">
            <span>{{ query.perPage }}</span>
            <i class="fas fa-chevron-down arrow-icon" :class="{ rotated: dropdownOpen.perPage }"></i>
          </div>
          <div class="custom-options" :class="{ show: dropdownOpen.perPage }">
            <div class="custom-option" v-for="num in [5,10,20]" :key="num" :class="{ selected: query.perPage===num }" @mousedown.prevent="selectOption('perPage', num)">
              <span>{{ num }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="toolbar-item d-flex align-items-center gap-2">
        <label>Sắp xếp:</label>
        <div class="custom-select" tabindex="0" @click="toggleDropdown('sort')" @blur="closeDropdown('sort')">
          <div class="custom-select-trigger">
            <span>{{ getSortLabel(query.sort) }}</span>
            <i class="fas fa-chevron-down arrow-icon" :class="{ rotated: dropdownOpen.sort }"></i>
          </div>
          <div class="custom-options" :class="{ show: dropdownOpen.sort }">
            <div class="custom-option" v-for="(label,value) in sortLabels" :key="value" :class="{ selected: query.sort===value }" @mousedown.prevent="selectOption('sort',value)">
              <span>{{ label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="toolbar-item d-flex align-items-center gap-2">
        <label>Trạng thái:</label>
        <div class="custom-select" tabindex="0" @click="toggleDropdown('status')" @blur="closeDropdown('status')">
          <div class="custom-select-trigger">
            <span>{{ getStatusLabel(query.statusFilter) }}</span>
            <i class="fas fa-chevron-down arrow-icon" :class="{ rotated: dropdownOpen.status }"></i>
          </div>
          <div class="custom-options" :class="{ show: dropdownOpen.status }">
            <div class="custom-option" :class="{ selected: query.statusFilter==='all' }" @mousedown.prevent="selectOption('statusFilter','all')">
              <span>Tất cả</span>
            </div>
            <div class="custom-option" v-for="(label,value) in statusLabels" :key="value" :class="{ selected: query.statusFilter===value }" @mousedown.prevent="selectOption('statusFilter',value)">
              <span>{{ label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toolbar-right">
      <input type="text" v-model="query.search" placeholder="Tìm kiếm đơn hàng...">
    </div>
  </div>

  <div class="table-responsive bg-white shadow-sm rounded-4 p-3 mt-3">
    <table class="table table-borderless align-middle text-center mb-0">
      <thead class="table-light">
        <tr>
          <th>#</th>
          <th>Mã ĐH</th>
          <th>Khách hàng</th>
          <th>SĐT</th>
          <th>Ngày đặt</th>
          <th>Tổng tiền</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(o, idx) in filteredOrders" :key="o.id" class="shadow-sm rounded-3 hover-lift" :class="{ 'disabled-row': o.disabled }">
          <td>{{ (query.page-1)*query.perPage + idx + 1 }}</td>
          <td class="fw-bold text-primary">#{{ String(o.id).padStart(5, '0') }}</td>
          <td>{{ o.customerName }}</td>
          <td>{{ o.phone }}</td>
          <td>{{ formatDate(o.orderDate) }}</td>
          <td class="fw-bold text-success">{{ formatCurrency(o.total) }}</td>
          <td>
            <span class="status-badge" :style="{ backgroundColor: statusColors[o.status] }">
              {{ statusLabels[o.status] }}
            </span>
            <span v-if="o.disabled" class="ms-2 badge bg-secondary">Vô hiệu hóa</span>
          </td>
          <td>
            <div class="action-buttons">
              <button class="btn-action btn-view" @click="viewOrderDetail(o)" :disabled="o.disabled">
                <i class="fa-solid fa-eye"></i> Xem
              </button>
              <button class="btn-action btn-delete" @click="deleteOrder(o.id)">
                <i class="fa-solid fa-trash"></i> Xóa
              </button>
              <div class="toggle-switch" @click="toggleOrderStatus(o.id)" :class="{ active: !o.disabled }">
                <div class="toggle-slider"></div>
                <span class="toggle-label">{{ o.disabled ? 'OFF' : 'ON' }}</span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <nav v-if="totalPages>1" class="mt-3">
      <ul class="pagination justify-content-center mb-0">
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: query.page===page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Modal Chi tiết đơn hàng -->
  <div v-if="showModal && selectedOrder" class="modal d-flex" tabindex="-1" @click.self="closeModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Chi tiết đơn hàng #{{ String(selectedOrder.id).padStart(5, '0') }}</h5>
          <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold">Khách hàng</label>
              <p class="form-control-plaintext">{{ selectedOrder.customerName }}</p>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Số điện thoại</label>
              <p class="form-control-plaintext">{{ selectedOrder.phone }}</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold">Ngày đặt hàng</label>
              <p class="form-control-plaintext">{{ formatDate(selectedOrder.orderDate) }}</p>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Số sản phẩm</label>
              <p class="form-control-plaintext">{{ selectedOrder.products }} sản phẩm</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold">Tổng tiền</label>
              <p class="form-control-plaintext fw-bold text-success fs-5">{{ formatCurrency(selectedOrder.total) }}</p>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Trạng thái</label>
              <div class="mt-2">
                <span class="status-badge" :style="{ backgroundColor: statusColors[selectedOrder.status] }">
                  {{ statusLabels[selectedOrder.status] }}
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label fw-semibold">Cập nhật trạng thái</label>
            <select class="form-select" v-model="selectedOrder.status" @change="updateStatus(selectedOrder.id, selectedOrder.status)">
              <option v-for="(label, value) in statusLabels" :key="value" :value="value">{{ label }}</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* ===================== PAGE WRAPPER ===================== */
.container {
    animation: fadeUp 0.45s ease;
    background: #f5f7ff;
    min-height: 100vh;
    padding: 60px 32px 80px;
    font-family: 'Inter', sans-serif;
}

/* PAGE TITLE */
h1 {
    font-size: 32px;
    font-weight: 900;
    color: #1e3a8a;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 12px;
}

h1::before {
    content: "\f07a"; /* shopping cart icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 48px;
    color: #3b82f6;
}

/* ===================== TOOLBAR ===================== */
.toolbar {
    width: 100%;
    padding: 16px 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #dbeafe;
    box-shadow: 0 6px 18px rgba(59, 130, 246, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
}

.toolbar-item label {
    font-size: 14px;
    color: #334155;
    font-weight: 600;
    white-space: nowrap;
}

/* Search input */
.toolbar-right input {
    width: 280px;
    padding: 12px 18px 12px 44px;
    border-radius: 14px;
    border: 2px solid #dbeafe;
    font-size: 14px;
    background-color: #ffffff;
    background-image: url("https://cdn-icons-png.flaticon.com/512/622/622669.png");
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 14px center;
    transition: all 0.3s ease;
}

.toolbar-right input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.15);
}

/* ===================== CUSTOM DROPDOWN ===================== */
.custom-select {
    position: relative;
    min-width: 180px;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
}

.custom-select-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    background: #ffffff;
    border: 2px solid #dbeafe;
    border-radius: 14px;
    font-size: 14px;
    color: #1e3a8a;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
    transition: all 0.3s ease;
}

.custom-select-trigger:hover {
    border-color: #3b82f6;
    background-color: #eff6ff;
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.12);
}

.arrow-icon {
    font-size: 12px;
    color: #3b82f6;
    transition: transform 0.3s ease;
}

.arrow-icon.rotated {
    transform: rotate(180deg);
}

.custom-options {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: #ffffff;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 12px 36px rgba(15, 23, 42, 0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    transition: all 0.3s ease;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
}

.custom-options.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.custom-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    font-size: 14px;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s ease;
}

.custom-option:hover {
    background: #eff6ff;
    color: #3b82f6;
    font-weight: 600;
}

.custom-option.selected {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: #ffffff;
    font-weight: 700;
}

/* ===================== TABLE ===================== */
.table-responsive {
    background: #ffffff;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 14px 36px rgba(59, 130, 246, 0.1);
    border: 1px solid #e2e8f0;
    overflow: visible;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 16px;
    table-layout: auto;
}

thead th {
    background: #eff6ff;
    color: #1e3a8a;
    padding: 14px 8px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 14px;
    text-transform: uppercase;
    white-space: nowrap;
}

thead th::before {
    display: inline-block;
    width: 20px;
    font-size: 18px;
}

tbody tr {
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
}

tbody tr:hover {
    background: #eff6ff;
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(59, 130, 246, 0.18);
}

td {
    padding: 16px 8px;
    font-size: 13px;
    white-space: nowrap;
}

/* ===================== STATUS BADGE ===================== */
.status-badge {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* ===================== ACTION BUTTONS ===================== */
.action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-wrap: nowrap;
}

.btn-action {
    border-radius: 10px;
    padding: 7px 12px;
    font-weight: 600;
    font-size: 12px;
    border: none;
    color: #ffffff;
    transition: 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0;
}

.btn-action i {
    font-size: 14px;
    margin-right: 4px;
}

.btn-view {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
}

.btn-view:hover {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    transform: translateY(-2px) scale(1.02);
}

.btn-warning {
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
}

.btn-warning:hover {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    transform: translateY(-2px) scale(1.02);
}

.btn-delete {
    background: linear-gradient(135deg, #ef4444, #f87171);
}

.btn-delete:hover {
    background: linear-gradient(135deg, #dc2626, #ef4444);
    transform: translateY(-2px) scale(1.02);
}

.btn-action:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

/* ===================== TOGGLE SWITCH ===================== */
.toggle-switch {
    position: relative;
    width: 55px;
    height: 28px;
    background: linear-gradient(135deg, #94a3b8, #cbd5e1);
    border-radius: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
}

.toggle-switch.active {
    background: linear-gradient(135deg, #10b981, #34d399);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.toggle-slider {
    position: absolute;
    left: 3px;
    width: 22px;
    height: 22px;
    background: #ffffff;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.toggle-switch.active .toggle-slider {
    left: calc(100% - 25px);
}

.toggle-label {
    position: absolute;
    font-size: 9px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.5px;
    z-index: 1;
    transition: all 0.3s ease;
}

.toggle-switch:not(.active) .toggle-label {
    right: 6px;
}

.toggle-switch.active .toggle-label {
    left: 6px;
}

/* ===================== DISABLED ROW ===================== */
.disabled-row {
    opacity: 0.6;
    background: #f1f5f9 !important;
}

.disabled-row:hover {
    background: #e2e8f0 !important;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05) !important;
}

/* ===================== MODAL ===================== */
.modal {
    position: fixed !important;
    inset: 0;
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(6px);
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

:global(body.modal-open) {
    overflow: hidden;
}

.modal-dialog {
    margin: 0 !important;
    max-width: 650px;
    width: 100%;
}

.modal-content {
    border-radius: 28px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
}

.modal-header {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    padding: 22px;
    color: #fff;
}

.modal-header h5::before {
    content: "\f07a";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 32px;
    margin-right: 14px;
}

/* ===================== PAGINATION ===================== */
.pagination {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.page-item {
    list-style: none;
}

.page-link {
    padding: 10px 16px;
    border: 2px solid #dbeafe;
    border-radius: 12px;
    background: #ffffff;
    color: #3b82f6;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.page-link:hover {
    background: #eff6ff;
    border-color: #3b82f6;
}

.page-item.active .page-link {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: #ffffff;
    border-color: transparent;
}

/* ===================== ICONS ===================== */
thead th::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 18px;
    margin-right: 6px;
    color: #3b82f6;
}

thead th:nth-child(1)::before { content: "\f0ae"; }
thead th:nth-child(2)::before { content: "\f02d"; }
thead th:nth-child(3)::before { content: "\f007"; }
thead th:nth-child(4)::before { content: "\f095"; }
thead th:nth-child(5)::before { content: "\f073"; }
thead th:nth-child(6)::before { content: "\f155"; }
thead th:nth-child(7)::before { content: "\f058"; }
thead th:nth-child(8)::before { content: "\f085"; }

.toolbar-item label::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 6px;
    font-size: 16px;
    vertical-align: middle;
    color: #3b82f6;
}

.toolbar-item:nth-child(1) label::before { content: "\f06e"; }
.toolbar-item:nth-child(2) label::before { content: "\f161"; }
.toolbar-item:nth-child(3) label::before { content: "\f058"; }

.custom-select-trigger::before {
    content: "\f0dc";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 16px;
    color: #3b82f6;
    margin-right: 8px;
}

.btn-action i {
    font-size: 14px;
    margin-right: 4px;
}

/* ===================== ANIMATIONS ===================== */
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===================== ICON DROPDOWN OPTIONS ===================== */
.custom-options .custom-option::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 10px;
    font-size: 18px;
    display: inline-block;
    vertical-align: middle;
    color: #3b82f6;
    opacity: 1;
    transition: 0.2s ease;
}

.custom-options .custom-option:nth-child(1)::before {
    content: "\f017"; /* clock */
}

.custom-options .custom-option:nth-child(2)::before {
    content: "\f017"; /* clock */
}

.custom-options .custom-option:nth-child(3)::before {
    content: "\f0de"; /* sort-amount-up */
}

.custom-options .custom-option:nth-child(4)::before {
    content: "\f0dd"; /* sort-amount-down */
}
</style>