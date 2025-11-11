<script setup>
import { ref, computed, reactive } from 'vue';
import { useCategories } from '~/store/categories';
import { onMounted } from 'vue';
definePageMeta({ layout: "admin" });
const storeCategories = useCategories()
const loading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const categories = computed(() => storeCategories.categories);
const totalCategories = computed(() => storeCategories.totalCategories);
const totalPages = computed(() => storeCategories.totalPages);

const query = reactive({
    search: '',
    sort: 'descID',
    perPage: 5,
    page: 1
})

const dropdownOpen = reactive({
    perPage: false,
    sort: false
})

const sortLabels = {
    'descID': 'Mới nhất',
    'ascID': 'Cũ nhất',
    'ascName': 'Tên A → Z',
    'descName': 'Tên Z → A'
}

const getSortLabel = (value) => sortLabels[value] || "Mới nhất";

const toggleDropdown = (type) => dropdownOpen[type] = !dropdownOpen[type];
const closeDropdown = (type) => setTimeout(() => dropdownOpen[type] = false, 200);

const selectOption = async (type, value) => {
    query[type] = value;
    dropdownOpen[type] = false;
    await onChange();
};

const form = ref({
    id: null,
    name: "",
    image: null,
    preview: null
});

// Modal ===========================
const openAddModal = () => {
    isEditing.value = false;
    resetForm();
    showModal.value = true;
    document.body.classList.add("modal-open");
};

const openEditModal = (category) => {
    isEditing.value = true;
    form.value = {
        id: category.id,
        name: category.name,
        image: null,
        preview: category.img
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
    form.value = { id: null, name: "", image: null, preview: null };
};


</script>

<template>
    <div class="container py-4">

        <h1 class="mb-4 fw-bold">Quản lý thương hiệu</h1>

        <!-- ✅ Nút thêm DANH MỤC nằm bên phải -->
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary mb-3 add-btn" @click="openAddModal">
                <i class="fa-solid fa-plus me-2"></i> Thêm thương hiệu
            </button>
        </div>

        <!-- ✅ Toolbar -->
        <div class="toolbar d-flex align-items-center justify-content-between flex-wrap gap-3">

            <!-- Bộ lọc bên trái -->
            <div class="d-flex align-items-center gap-4 flex-wrap">

                <!-- Hiển thị -->
                <div class="toolbar-item d-flex align-items-center gap-2">
                    <label class="fw-semibold">Hiển thị:</label>
                    <div class="custom-select" tabindex="0" @click="toggleDropdown('perPage')"
                        @blur="closeDropdown('perPage')">
                        <div class="custom-select-trigger">
                            <span>{{ query.perPage }}</span>
                            <i class="fas fa-chevron-down arrow-icon" :class="{ rotated: dropdownOpen.perPage }"></i>
                        </div>
                        <div class="custom-options" :class="{ show: dropdownOpen.perPage }">
                            <div class="custom-option" v-for="num in [5, 10, 20]" :key="num"
                                :class="{ selected: query.perPage === num }"
                                @mousedown.prevent="selectOption('perPage', num)">
                                <i class="fas fa-check check-icon"></i>
                                <span>{{ num }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sắp xếp -->
                <div class="toolbar-item d-flex align-items-center gap-2">
                    <label class="fw-semibold">Sắp xếp:</label>
                    <div class="custom-select" tabindex="0" @click="toggleDropdown('sort')"
                        @blur="closeDropdown('sort')">
                        <div class="custom-select-trigger">
                            <span>{{ getSortLabel(query.sort) }}</span>
                            <i class="fas fa-chevron-down arrow-icon" :class="{ rotated: dropdownOpen.sort }"></i>
                        </div>
                        <div class="custom-options" :class="{ show: dropdownOpen.sort }">
                            <div class="custom-option" v-for="(label, value) in sortLabels" :key="value"
                                :class="{ selected: query.sort === value }"
                                @mousedown.prevent="selectOption('sort', value)">
                                <i class="fas fa-check check-icon"></i>
                                <span>{{ label }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tìm kiếm -->
            <div class="toolbar-right">
                <input v-model="query.search" type="text" @keyup.enter="search" placeholder="Tìm kiếm thương hiệu...">
            </div>
        </div>

        <!-- Table -->
        <div class="table-responsive bg-white shadow-sm rounded-4 p-3 mt-3">
            <table class="table table-borderless align-middle text-center mb-0">
                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Ảnh</th>
                        <th>Tên thương hiệu</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cat, index) in categories" :key="cat.id" class="shadow-sm rounded-3 hover-lift">
                        <td>{{ (query.page - 1) * query.perPage + index + 1 }}</td>
                        <td><img :src="cat.img" class="rounded-3 cat-img"></td>
                        <td class="text-center">{{ cat.name }}</td>

                        <td>
                            <button class="btn-action btn-edit" @click="openEditModal(cat)">
                                <i class="fa-solid fa-pen"></i> Sửa
                            </button>
                            <button class="btn-action btn-delete" @click="deleteCategory(cat.id)">
                                <i class="fa-solid fa-trash"></i> Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <nav v-if="totalPages > 1" class="mt-3">
                <ul class="pagination justify-content-center mb-0">
                    <li v-for="page in totalPages" :key="page" class="page-item"
                        :class="{ active: query.page === page }">
                        <button class="page-link" @click="changePage(page)" :disabled="query.page === page">
                            {{ page }}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- ✅ MODAL (luôn đứng giữa không bị di chuyển) -->
        <div v-if="showModal" class="modal d-flex" tabindex="-1" @click.self="closeModal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title fw-bold">{{ isEditing ? 'Chỉnh sửa danh mục' : 'Thêm danh thương hiệu' }}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
                    </div>

                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Ảnh thương hiệu</label>
                            <div class="d-flex gap-2 align-items-center">
                                <label class="btn btn-sm btn-primary mb-0" for="categoryImage">
                                    <i class="fa-solid fa-upload me-1"></i> Chọn ảnh
                                </label>
                                <input type="file" accept="image/*" id="categoryImage" @change="handleFileUpload"
                                    hidden>
                                <div v-if="form.preview">
                                    <img :src="form.preview" class="rounded-3 cat-img-preview">
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Tên thương hiệu</label>
                            <input v-model="form.name" type="text" class="form-control form-control-lg"
                                placeholder="Nhập tên thương hiệu">
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" @click="closeModal" :disabled="loading">Hủy</button>
                        <button class="btn btn-primary" @click="saveCategory" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                            <i v-else class="fa-solid fa-save me-2"></i>
                            {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* ===================== NÚT + MODAL CỐ ĐỊNH ===================== */
.modal {
    position: fixed !important;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

/* Chặn scroll nền */
:global(body.modal-open) {
    overflow: hidden;
}

/* Giữ modal ở giữa */
.modal-dialog {
    margin: 0 !important;
    max-width: 650px;
    width: 100%;
}

/* ===================== PAGE WRAPPER ===================== */
.container {
    animation: fadeUp 0.6s ease forwards;
    background: linear-gradient(145deg, #e8f0ff, #fdfdff);
    min-height: 100vh;
    padding: 60px 32px 80px;
    font-family: 'Inter', sans-serif;
}

/* ============================================================
   PREMIUM ADMIN UI — DASHBOARD CATEGORY PAGE v2
   ============================================================ */

/* ===================== PAGE WRAPPER ===================== */
.container {
    animation: fadeUp 0.45s ease;
    background: #f9fafb;
    min-height: 100vh;
    padding-bottom: 40px;
}

h1 {
    font-size: 32px;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 12px;
}

h1::before {
    content: "\f02e";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 28px;
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
    border: 1px solid #e2e8f0;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
}

.toolbar-item label {
    font-size: 14px;
    color: #475569;
    font-weight: 600;
    white-space: nowrap;
}

.toolbar-right input {
    width: 280px;
    padding: 12px 18px 12px 44px;
    border-radius: 14px;
    border: 2px solid #e2e8f0;
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
    border-color: #2563eb;
    box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.1);
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
    border: 2px solid #e2e8f0;
    border-radius: 14px;
    font-size: 14px;
    color: #1e293b;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-select-trigger:hover {
    border-color: #3b82f6;
    background-color: #f1f5ff;
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.12);
    transform: translateY(-1px);
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    background: #f0f9ff;
    color: #0369a1;
    font-weight: 600;
}

.custom-option.selected {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #ffffff;
    font-weight: 700;
}

.check-icon {
    font-size: 13px;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.custom-option.selected .check-icon {
    opacity: 1;
}

/* Scrollbar */
.custom-options::-webkit-scrollbar {
    width: 6px;
}

.custom-options::-webkit-scrollbar-track {
    background: #f8fafc;
}

.custom-options::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
    border-radius: 10px;
}

/* ===================== TABLE ===================== */
.table-responsive {
    background: #ffffff;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
    border: 1px solid #eef1f4;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 16px;
}

thead th {
    background: #f1f5f9;
    color: #0f172a;
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
    background: #eaf2ff;
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(37, 99, 235, 0.18);
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
    border: 2px solid #e2e8f0;
    transition: 0.3s ease;
}

.cat-img:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.25);
}

/* ===================== ACTION BUTTONS ===================== */
.btn-action {
    border-radius: 14px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    transition: 0.3s ease;
    color: #ffffff;
    margin: 0 4px;
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
    content: "\f044";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 10px;
}

.cat-img-preview {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    border: 2px solid #e2e8f0;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* ===================== ANIMATIONS ===================== */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===================== MISC ===================== */
.add-btn {
    float: right;
    margin-bottom: 20px;
}

/* ===================== ICON CHO PAGE TITLE ===================== */
h1::before {
    content: "\f02e";
    /* list icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 50px;
    /* tăng size */
    color: #2563eb;
    margin-right: 14px;
}

/* ===================== ICON CHO TABLE HEADER ===================== */
thead th::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 28px;
    /* tăng size */
    margin-right: 12px;
}

thead th:nth-child(1)::before {
    content: "\f0ae";
    color: #2563eb;
}

/* # */
thead th:nth-child(2)::before {
    content: "\f03e";
    color: #3b82f6;
}

/* ảnh */
thead th:nth-child(3)::before {
    content: "\f02b";
    color: #16a34a;
}

/* tags */
thead th:nth-child(4)::before {
    content: "\f085";
    color: #ef4444;
}

/* cogs */

/* ===================== ICON CHO BUTTONS ===================== */
.btn.btn-primary i.fa-plus {
    font-size: 24px;
    /* tăng size */
    margin-right: 10px;
    color: #fff;
}

.btn-action.btn-edit i.fa-pen {
    font-size: 22px;
    /* tăng size */
    margin-right: 8px;
    color: #ffffff;
}

.btn-action.btn-delete i.fa-trash {
    font-size: 22px;
    /* tăng size */
    margin-right: 8px;
    color: #ffffff;
}

/* ===================== ICON CHO MODAL HEADER ===================== */
.modal-header h5::before {
    content: "\f044";
    /* edit icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 32px;
    /* tăng size */
    margin-right: 14px;
    color: #fff;
}

/* ===================== ICON CHO DROPDOWN ===================== */
.custom-select-trigger::before {
    content: "\f0dc";
    /* sort icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 24px;
    /* tăng size */
    color: #3b82f6;
    margin-right: 12px;
    display: inline-block;
    vertical-align: middle;
}

/* ===================== ICON CHO FILE UPLOAD ===================== */
#categoryImage+div img::before {
    content: "\f03e";
    /* image icon */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 30px;
    /* tăng size */
    color: #3b82f6;
    margin-right: 10px;
}

/* ===================== ICON CHO DROPDOWN OPTIONS ===================== */
.custom-options .custom-option::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 22px;
    /* tăng size */
    color: #3b82f6;
    margin-right: 12px;
    display: inline-block;
    vertical-align: middle;
}

/* ===================== ICON CHO LABELS ===================== */
.toolbar-item label::before,
.toolbar-item:nth-child(2) label::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 20px;
    /* tăng size */
    color: #3b82f6;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}

/* Icon bên trái chữ Hiển thị */
.toolbar-item label::before {
    content: "\f06e";
    /* Font Awesome icon: eye (hiển thị) */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 6px;
    font-size: 14px;
    color: #3b82f6;
    vertical-align: middle;
}

/* Icon bên trái chữ Hiển thị */
.toolbar-item label::before {
    content: "\f06e";
    /* Font Awesome icon: eye */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 20px;
    /* tăng size */
    color: #3b82f6;
    vertical-align: middle;
}

/* Riêng cho label Sắp xếp */
.toolbar-item:nth-child(2) label::before {
    content: "\f161";
    /* Font Awesome icon: sort */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 20px;
    /* tăng size */
    color: #3b82f6;
    vertical-align: middle;
}

.custom-options .custom-option:nth-child(1)::before {
    content: "\f017";
    /* clock icon cho "Mới nhất" */
}

.custom-options .custom-option:nth-child(2)::before {
    content: "\f017";
    /* clock-rotate-left cho "Cũ nhất" */
}

.custom-options .custom-option:nth-child(3)::before {
    content: "\f0de";
    /* arrow-up-wide-short cho "Tên A→Z" */
}

.custom-options .custom-option:nth-child(4)::before {
    content: "\f0dd";
    /* arrow-down-wide-short cho "Tên Z→A" */
}

.custom-options .custom-option::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 8px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    color: #3b82f6;
}
</style>