<script setup>
import { ref, reactive, computed } from 'vue';

definePageMeta({ layout: "admin" });

/* ================================================
   🧩 MOCK DATA
================================================ */
const products = ref([
  { id: 1, name: "iPhone 15", img: "https://via.placeholder.com/80", idCategory: 1, idBrand: 1 },
  { id: 2, name: "Galaxy S23", img: "https://via.placeholder.com/80", idCategory: 1, idBrand: 2 },
  { id: 3, name: "MacBook Pro", img: "https://via.placeholder.com/80", idCategory: 2, idBrand: 1 },
  { id: 4, name: "AirPods Pro", img: "https://via.placeholder.com/80", idCategory: 3, idBrand: 1 },
  { id: 5, name: "ThinkPad X1", img: "https://via.placeholder.com/80", idCategory: 2, idBrand: 3 }
]);

const categories = [
  { id: 1, name: "Điện thoại" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Phụ kiện" }
];

const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Lenovo" }
];

/* ================================================
   ⚙️ STATE
================================================ */
const query = reactive({
  search: '',
  perPage: 5,
  sort: 'descID',
  page: 1
});

const dropdownOpen = reactive({
  perPage: false,
  sort: false
});

const sortLabels = {
  descID: 'Mới nhất',
  ascID: 'Cũ nhất',
  ascName: 'Tên A → Z',
  descName: 'Tên Z → A'
};

const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

const form = ref({
  id: null,
  name: '',
  img: null,
  preview: null,
  idCategory: null,
  idBrand: null
});

/* ================================================
   🧠 METHODS
================================================ */
const getSortLabel = (value) => sortLabels[value] || "Mới nhất";

const toggleDropdown = (type) => {
  dropdownOpen[type] = !dropdownOpen[type];
};

const closeDropdown = (type) => {
  setTimeout(() => dropdownOpen[type] = false, 200);
};

const selectOption = async (type, value) => {
  query[type] = value;
  if (type === 'perPage' || type === 'sort') query.page = 1;
  dropdownOpen[type] = false;
  await onChange?.(); // giữ lại nếu bạn có hàm onChange trong code chính
};

/* ---------- Modal actions ---------- */
const openAddModal = () => {
  isEditing.value = false;
  resetForm();
  showModal.value = true;
  document.body.classList.add("modal-open");
};

const openEditModal = (product) => {
  isEditing.value = true;
  form.value = {
    ...product,
    img: null,
    preview: product.img
  };
  showModal.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  showModal.value = false;
  resetForm();
  document.body.classList.remove("modal-open");
};

const resetForm = () => {
  form.value = {
    id: null,
    name: '',
    img: null,
    preview: null,
    idCategory: null,
    idBrand: null
  };
};

/* ---------- File upload ---------- */
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  form.value.img = file;
  if (file) form.value.preview = URL.createObjectURL(file);
};

/* ---------- CRUD ---------- */
const saveProduct = () => {
  if (isEditing.value) {
    const idx = products.value.findIndex(p => p.id === form.value.id);
    products.value[idx] = {
      id: form.value.id,
      name: form.value.name,
      img: form.value.preview,
      idCategory: form.value.idCategory,
      idBrand: form.value.idBrand
    };
  } else {
    products.value.push({
      id: products.value.length + 1,
      name: form.value.name,
      img: form.value.preview || 'https://via.placeholder.com/80',
      idCategory: form.value.idCategory,
      idBrand: form.value.idBrand
    });
  }
  closeModal();
};

const deleteProduct = (id) => {
  products.value = products.value.filter(p => p.id !== id);
};

/* ================================================
   📊 COMPUTED
================================================ */
const filteredProducts = computed(() => {
  let list = products.value.filter(p =>
    p.name.toLowerCase().includes(query.search.toLowerCase())
  );

  // Sắp xếp
  if (query.sort === 'ascID') list.sort((a, b) => a.id - b.id);
  if (query.sort === 'descID') list.sort((a, b) => b.id - a.id);
  if (query.sort === 'ascName') list.sort((a, b) => a.name.localeCompare(b.name));
  if (query.sort === 'descName') list.sort((a, b) => b.name.localeCompare(a.name));

  // Phân trang
  return list.slice((query.page - 1) * query.perPage, query.page * query.perPage);
});

const totalPages = computed(() =>
  Math.ceil(
    products.value.filter(p =>
      p.name.toLowerCase().includes(query.search.toLowerCase())
    ).length / query.perPage
  )
);

const changePage = (page) => {
  query.page = page;
};
</script>



<template>
<div class="container py-4">
  <h1 class="mb-4 fw-bold">Quản lý sản phẩm</h1>
  <div class="d-flex justify-content-end mb-3">
    <button class="btn btn-primary" @click="openAddModal"><i class="fa-solid fa-plus me-2"></i> Thêm sản phẩm</button>
  </div>

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
              <i class="fas fa-check check-icon"></i>
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
              <i class="fas fa-check check-icon"></i>
              <span>{{ label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toolbar-right">
      <input type="text" v-model="query.search" placeholder="Tìm kiếm sản phẩm...">
    </div>
  </div>
  <div class="table-responsive bg-white shadow-sm rounded-4 p-3 mt-3">
    <table class="table table-borderless align-middle text-center mb-0">
      <thead class="table-light">
        <tr>
          <th>#</th>
          <th>Ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Danh mục</th>
          <th>Thương hiệu</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, idx) in filteredProducts" :key="p.id" class="shadow-sm rounded-3 hover-lift">
          <td>{{ (query.page-1)*query.perPage + idx + 1 }}</td>
          <td><img :src="p.img" class="rounded-3 cat-img"></td>
          <td>{{ p.name }}</td>
          <td>{{ categories.find(c=>c.id===p.idCategory)?.name }}</td>
          <td>{{ brands.find(b=>b.id===p.idBrand)?.name }}</td>
          <td>
            <button class="btn-action btn-edit" @click="openEditModal(p)"><i class="fa-solid fa-pen"></i> Sửa</button>
            <button class="btn-action btn-delete" @click="deleteProduct(p.id)"><i class="fa-solid fa-trash"></i> Xóa</button>
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

  <!-- Modal -->
  <div v-if="showModal" class="modal d-flex" tabindex="-1" @click.self="closeModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">{{ isEditing ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới' }}</h5>
          <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-semibold">Ảnh sản phẩm</label>
            <div class="d-flex gap-2 align-items-center">
              <label class="btn btn-sm btn-primary mb-0" for="productImage"><i class="fa-solid fa-upload me-1"></i> Chọn ảnh</label>
              <input type="file" accept="image/*" id="productImage" @change="handleFileUpload" hidden>
              <div v-if="form.preview"><img :src="form.preview" class="rounded-3 cat-img-preview"></div>
            </div>
          </div>
          <div class="mb-3"><label class="form-label fw-semibold">Tên sản phẩm</label><input v-model="form.name" type="text" class="form-control form-control-lg" placeholder="Nhập tên sản phẩm"></div>
          <div class="mb-3"><label class="form-label fw-semibold">Danh mục</label><select v-model="form.idCategory" class="form-select"><option v-for="c in categories" :key="c.id" :value="c.id">{{ c.name }}</option></select></div>
          <div class="mb-3"><label class="form-label fw-semibold">Thương hiệu</label><select v-model="form.idBrand" class="form-select"><option v-for="b in brands" :key="b.id" :value="b.id">{{ b.name }}</option></select></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal" :disabled="loading">Hủy</button>
          <button class="btn btn-primary" @click="saveProduct" :disabled="loading">{{ isEditing ? 'Cập nhật' : 'Thêm mới' }}</button>
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
    content: "\f07a"; /* icon sản phẩm */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 48px;
    color: #3b82f6;
}

/* ===================== BUTTON: ADD ===================== */
.btn.btn-primary {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    border: none;
    border-radius: 16px;
    font-weight: 700;
    font-size: 15px;
    padding: 12px 26px;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
    transition: all 0.3s ease;
}

.btn.btn-primary:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 14px 35px rgba(59, 130, 246, 0.35);
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

.custom-options::-webkit-scrollbar {
    width: 6px;
}

.custom-options::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%);
    border-radius: 10px;
}

/* ===================== TABLE ===================== */
.table-responsive {
    background: #ffffff;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 14px 36px rgba(59, 130, 246, 0.1);
    border: 1px solid #e2e8f0;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 16px;
}

thead th {
    background: #eff6ff;
    color: #1e3a8a;
    padding: 16px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 14px;
    text-transform: uppercase;
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
    padding: 18px 16px;
    font-size: 15px;
}

.cat-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 16px;
    border: 2px solid #bfdbfe;
    transition: 0.3s ease;
}

.cat-img:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 22px rgba(96, 165, 250, 0.35);
}

/* ===================== ACTION BUTTONS ===================== */
.btn-action {
    border-radius: 14px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    color: #ffffff;
    margin: 0 4px;
    transition: 0.3s ease;
}

.btn-edit {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
}

.btn-edit:hover {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    transform: translateY(-2px) scale(1.02);
}

.btn-delete {
    background: linear-gradient(135deg, #ef4444, #f87171);
}

.btn-delete:hover {
    background: linear-gradient(135deg, #dc2626, #ef4444);
    transform: translateY(-2px) scale(1.02);
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

/* Product preview */
.cat-img-preview {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    border: 2px solid #dbeafe;
    box-shadow: 0 6px 18px rgba(59, 130, 246, 0.3);
}

/* ===================== ICONS IN TABLE HEADER ===================== */
thead th::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 22px;
    margin-right: 10px;
}

thead th:nth-child(1)::before { content: "\f0ae"; color: #3b82f6; }
thead th:nth-child(2)::before { content: "\f03e"; color: #2563eb; }
thead th:nth-child(3)::before { content: "\f02b"; color: #1d4ed8; }
thead th:nth-child(4)::before { content: "\f022"; color: #0ea5e9; }
thead th:nth-child(5)::before { content: "\f5b0"; color: #3b82f6; }
thead th:nth-child(6)::before { content: "\f085"; color: #ef4444; }

/* ===================== ICON LABEL TOOLBAR ===================== */
.toolbar-item label::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 18px;
    vertical-align: middle;
    color: #3b82f6;
}

.toolbar-item label::before { content: "\f06e"; } /* icon mắt */
.toolbar-item:nth-child(2) label::before { content: "\f161"; } /* sort */

/* ===================== ICON DROPDOWN ===================== */
.custom-select-trigger::before {
    content: "\f0dc";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 18px;
    color: #3b82f6;
    margin-right: 10px;
}

/* ===================== ANIMATIONS ===================== */
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}


/* ===========================================================
   ✅ ĐỒNG BỘ ICON CHUẨN THEO TRANG DANH MỤC
   CHO TRANG QUẢN LÝ SẢN PHẨM
   =========================================================== */

/* ===================== ICON PAGE TITLE ===================== */
h1::before {
    content: "\f466"; /* box icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 48px;
    color: #3b82f6; /* xanh da trời */
    margin-right: 14px;
    vertical-align: middle;
    transition: transform 0.3s ease, color 0.3s ease;
}

h1:hover::before {
    transform: scale(1.1) rotate(-5deg);
    color: #2563eb;
}


/* ===================== ICON TABLE HEADER ===================== */
thead th::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 22px;
    margin-right: 10px;
    color: #3b82f6; /* xanh da trời */
}

/* ===================== ICON BUTTONS (TRẮNG) ===================== */
.btn.btn-primary i.fa-plus,
.btn-action.btn-edit i.fa-pen,
.btn-action.btn-delete i.fa-trash {
    font-size: 18px;
    margin-right: 8px;
    color: #ffffff; /* trắng */
}

/* ===================== ICON LABEL TOOLBAR ===================== */
.toolbar-item label::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 18px;
    vertical-align: middle;
    color: #3b82f6; /* xanh da trời */
}

/* Icon cho chữ "Hiển thị" */
.toolbar-item label::before {
    content: "\f06e"; /* icon con mắt */
}

/* Icon cho chữ "Sắp xếp" */
.toolbar-item:nth-child(2) label::before {
    content: "\f161"; /* icon sort */
}

/* ===================== ICON DROPDOWN ===================== */
.custom-select-trigger::before {
    content: "\f0dc"; /* dropdown icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 18px;
    color: #3b82f6; /* xanh da trời */
    margin-right: 10px;
}

/* ===================== ICON DROPDOWN OPTION ===================== */
.custom-options .custom-option::before {
    content: "\f00c"; /* check icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    opacity: 0;
    margin-right: 8px;
    font-size: 16px;
    color: #3b82f6; /* xanh da trời */
    transition: 0.2s ease;
}

.custom-option.selected::before {
    opacity: 1;
}

/* ===================== ICON CHO UPLOAD FILE ===================== */
label.btn.btn-primary[for="productImage"] i,
label[for="productImage"]::before {
    content: "\f093"; /* upload icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 6px;
    color: #3b82f6; /* xanh da trời */
}
/* ===================== ICON CHO NÚT CHỌN ẢNH ===================== */
label.btn.btn-primary[for="productImage"] i {
    color: #ffffff; /* icon upload màu trắng */
    font-size: 16px;
    margin-right: 6px;
}

/* ======================================================
   ✅ STYLE NÚT CHỌN ẢNH - ĐỒNG BỘ THEO TRANG DANH MỤC
   ====================================================== */

label.btn.btn-primary[for="productImage"] {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #3b82f6, #60a5fa) !important;
    border: none;
    padding: 10px 18px;
    font-weight: 600;
    border-radius: 12px;
    transition: 0.3s ease;
}

label.btn.btn-primary[for="productImage"]:hover {
    background: linear-gradient(135deg, #2563eb, #3b82f6) !important;
    transform: translateY(-2px);
}

/* ✅ Xóa icon CSS thừa làm bị 2 icon */
label[for="productImage"]::before {
    content: none !important;
}

/* ===================== ICON NÚT THÊM/SỬA/XÓA ===================== */
.btn.btn-primary i.fa-plus,
.btn-action.btn-edit i.fa-pen,
.btn-action.btn-delete i.fa-trash,
label.btn.btn-primary[for="productImage"] i.fa-upload {
    font-size: 20px; /* tăng từ 16-18px lên 20px */
    margin-right: 8px;
    color: #ffffff; /* vẫn trắng */
}

/* ===================== ICON TABLE HEADER ===================== */
thead th::before {
    font-size: 26px; /* tăng từ 22px lên 26px */
    margin-right: 12px;
}

/* ===================== ICON TOOLBAR ===================== */
.toolbar-item label::before {
    font-size: 20px; /* tăng từ 18px lên 20px */
    margin-right: 10px;
}

/* ===================== ICON DROPDOWN ===================== */
.custom-select-trigger::before {
    font-size: 20px; /* tăng từ 18px lên 20px */
    margin-right: 12px;
}

/* ===================== ICON DROPDOWN OPTION (check) ===================== */
.custom-options .custom-option::before {
    font-size: 18px; /* tăng từ 16px lên 18px */
    margin-right: 10px;
}

/* ===================== ICON MODAL HEADER ===================== */
.modal-header h5::before {
    font-size: 36px; /* tăng từ 32px lên 36px */
    margin-right: 16px;
}


/* ===================== ICON DROPDOWN OPTION: HIỂN THỊ LUÔN ===================== */
.custom-options .custom-option::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 16px; /* tăng size cho rõ */
    display: inline-block;
    vertical-align: middle;
    color: #3b82f6;
    opacity: 1; /* luôn hiển thị */
    transition: 0.2s ease;
}

/* Icon riêng cho từng option theo thứ tự */
.custom-options .custom-option:nth-child(1)::before {
    content: "\f017"; /* clock icon cho "Mới nhất" */
}

.custom-options .custom-option:nth-child(2)::before {
    content: "\f017"; /* clock-rotate-left cho "Cũ nhất" */
}

.custom-options .custom-option:nth-child(3)::before {
    content: "\f0de"; /* arrow-up-wide-short cho "Tên A→Z" */
}

.custom-options .custom-option:nth-child(4)::before {
    content: "\f0dd"; /* arrow-down-wide-short cho "Tên Z→A" */
}

/* Hover option */
.custom-options .custom-option:hover {
    color: #1e40af;
    font-weight: 600;
}

</style>
