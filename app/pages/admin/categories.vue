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

const form = ref({
    id: null,
    name: "",
    image: null,
    preview: null
});

// Modal
const openAddModal = () => {
    isEditing.value = false;
    resetForm()
    showModal.value = true;
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
};

const closeModal = () => {
    showModal.value = false
    resetForm()
};

const resetForm = () => {
    form.value = { id: null, name: "", image: null, preview: null };
}

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    form.value.image = file;
    if (file) form.value.preview = URL.createObjectURL(file);
};

// Save category
const saveCategory = async () => {
    loading.value = true;
    const formData = new FormData();

    if (form.value.image) {
        formData.append('img', form.value.image);
    }
    formData.append('name', form.value.name);

    try {
        if (form.value.id) {
            await storeCategories.updateCategories(formData, form.value.id);
        } else {
            await storeCategories.createCategories(formData);
        }
        await onChange();
        closeModal();
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

// Delete category
const deleteCategory = async (id) => {
    try {
        await storeCategories.deleteCategories(id);
        await onChange();
    } catch (error) {
        console.error(error);
    }
};

// Search / pagination
const search = async () => {
    query.page = 1
    await onChange();
}
const changePage = async (page) => {
    query.page = page
    await onChange();
}
const onChange = async () => {
    await storeCategories.loadCategories(query)
}

onMounted(async () => {
    await onChange()
})
</script>

<template>

    <h1 class="page-title">Quản lý danh mục</h1>


    <!-- Nút thêm -->
    <button class="btn btn-primary btn-add" @click="openAddModal">
        <i class="fa-solid fa-plus me-2"></i> Thêm danh mục
    </button>

    <!-- THANH CÔNG CỤ -->
    <div class="toolbar d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <div class="d-flex align-items-center gap-3 flex-wrap">
            <div class="limit-box d-flex align-items-center gap-2">
                <label for="limit" class="fw-semibold">Hiển thị:</label>
                <select v-model="query.perPage" id="limit" @change="onChange" class="form-select form-select-sm">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div class="sort-box d-flex align-items-center gap-2">
                <label for="sort" class="fw-semibold">Sắp xếp:</label>
                <select v-model="query.sort" id="sort" @change="onChange" class="form-select form-select-sm">
                    <option value="">Mặc định</option>
                    <option value="descID">Mới nhất</option>
                    <option value="ascID">Cũ nhất</option>
                    <option value="descName">Tên A → Z</option>
                    <option value="ascName">Tên Z → A</option>
                </select>
            </div>
        </div>
        <div class="search-box">
            <input v-model="query.search" type="text" @keyup.enter="search" class="form-control form-control-sm"
                placeholder="Tìm kiếm danh mục...">
        </div>
    </div>

    <!-- DANH SÁCH DANH MỤC -->
    <div class="table-wrapper">
        <table class="table-category">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ảnh</th>
                    <th>Tên danh mục</th>
                    <th class="text-end">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cat, index) in categories" :key="cat.id">
                    <td>{{ (query.page - 1) * query.perPage + index + 1 }}</td>
                    <td><img :src="cat.img" class="cat-img"></td>
                    <td>{{ cat.name }}</td>
                    <td class="text-end">
                        <button class="btn-action btn-edit me-2" @click="openEditModal(cat)">
                            <i class="fa-solid fa-pen"></i> Sửa
                        </button>
                        <button @click="deleteCategory(cat.id)" class="btn-action btn-delete">
                            <i class="fa-solid fa-trash"></i> Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav v-if="totalPages > 1" class="mt-3">
            <ul class="pagination justify-content-center mb-0">
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: query.page === page }">
                    <button :disabled="query.page === page" class="page-link" @click="changePage(page)">
                        {{ page }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>

    <!-- MODAL -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content animate-fade">
            <div class="modal-header">
                <h5 class="modal-title fw-bold">
                    {{ isEditing ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới' }}
                </h5>
                <button class="btn-close" @click="closeModal">✕</button>
            </div>

            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label fw-semibold">Ảnh danh mục</label>
                    <div class="image-upload">
                        <label for="categoryImage">
                            <i class="fa-solid fa-upload me-1"></i> Chọn ảnh
                        </label>
                        <input type="file" accept="image/*" id="categoryImage" @change="handleFileUpload">
                    </div>

                    <div v-if="form.preview" class="preview-container">
                        <img :src="form.preview" class="preview-img">
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label fw-semibold">Tên danh mục</label>
                    <input v-model="form.name" type="text" class="form-control" placeholder="Nhập tên danh mục">
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
</template>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* Notification Toast */
.toast-notify {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 8px;
    color: #fff;
    font-weight: 500;
    z-index: 9999;
    opacity: 0.95;
    transition: all 0.3s;
}

.toast-notify.success {
    background-color: #28a745;
}

.toast-notify.error {
    background-color: #dc3545;
}

/* Modal & table styles (nếu chưa có) */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 400px;
    max-width: 90%;
}

.animate-fade {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.preview-img {
    max-width: 100%;
    border-radius: 4px;
    margin-top: 10px;
}

/* ===================== PAGE TITLE ===================== */
.page-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
}

/* ===================== NÚT THÊM ===================== */
.btn-add {
    margin-bottom: 18px;
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
}

/* ===================== TABLE WRAPPER ===================== */
.table-wrapper {
    background: #ffffff;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    margin-top: 20px;
    overflow: hidden;
}

/* ===================== TABLE ===================== */
.table-category {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 14px;
    /* tạo khoảng cách giữa các dòng */
}

.table-category thead tr {
    background: #f1f4f9;
}

.table-category th {
    padding: 16px 20px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
    font-size: 13px;
}

.table-category tbody tr {
    background: #ffffff;
    transition: 0.25s ease;
    border-radius: 14px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
}

/* ✅ bo góc dòng */
.table-category tbody tr td:first-child {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
}

.table-category tbody tr td:last-child {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
}

/* ===================== HOVER = nhảy lên ===================== */
.table-category tbody tr:hover {
    transform: translateY(-4px);
    /* nhảy lên */
    background: #f6f9ff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

/* ===================== TABLE CELLS ===================== */
.table-category td {
    padding: 16px 20px;
    vertical-align: middle;
    font-size: 15px;
    color: #333;
    border: none;
    /* bỏ line cổ điển */
}

/* Ảnh danh mục */
.cat-img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    object-fit: cover;
    border: 2px solid #e3e6eb;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: 0.25s;
}

/* Khi hover ảnh phóng nhẹ */
.table-category tbody tr:hover .cat-img {
    transform: scale(1.05);
}


/* Ảnh danh mục */
.cat-img {
    width: 55px;
    height: 55px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #ddd;
}

/* ===================== MODAL OVERLAY ===================== */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(3px);
}

/* ===================== MODAL CONTENT ===================== */
.modal-content {
    width: 720px;
    background: #ffffff;
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0 12px 45px rgba(0, 0, 0, 0.22);
    animation: fadeUp 0.25s ease;
}

/* Animation */
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

/* ===================== MODAL HEADER ===================== */
.modal-header {
    padding: 28px;
    background: linear-gradient(135deg, #007bff, #2f8bff);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 19px;
    font-weight: 650;
}

/* ✅ GIỮ LẠI CHỈ 1 `.btn-close` */
.btn-close {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.25);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
}

.btn-close i {
    font-size: 20px;
    color: white;
}

.btn-close:hover {
    background: rgba(255, 255, 255, 0.45);
    transform: scale(1.1);
}

/* ===================== MODAL BODY ===================== */
.modal-body {
    padding: 30px;
    background: #ffffff;
}

.modal-body .form-label {
    font-weight: 600;
    color: #333;
    margin-bottom: 6px;
}

.modal-body input[type="text"] {
    height: 54px;
    border-radius: 14px;
    padding-left: 16px;
    width: 100%;
    border: 1px solid #d0d5dd;
    transition: 0.25s;
    font-size: 16px;
}

.modal-body input[type="text"]:hover {
    border-color: #bcd1ff;
}

.modal-body input[type="text"]:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.18);
}

/* ===================== UPLOAD IMAGE ===================== */
.image-upload label {
    display: inline-block;
    padding: 12px 18px;
    background: linear-gradient(135deg, #007bff, #3393ff);
    color: #fff;
    border-radius: 14px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: 0.25s;
    border: none;
}

.image-upload label:hover {
    opacity: 0.9;
}

.image-upload input {
    display: none;
}

.preview-container {
    margin-top: 14px;
}

.preview-img {
    width: 150px;
    height: 150px;
    border-radius: 16px;
    object-fit: cover;
    border: 2px solid #e5e7eb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ===================== MODAL FOOTER ===================== */
.modal-footer {
    padding: 22px 30px;
    background: #f7f8fa;
    display: flex;
    justify-content: flex-end;
    gap: 14px;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
}

.btn-secondary {
    height: 48px;
    padding: 0 28px;
    border-radius: 14px;
    font-size: 16px;
    background: #e3e5e8;
    color: #2d2d2d;
    font-weight: 600;
    border: none;
    transition: 0.25s;
}

.btn-secondary:hover {
    background: #d2d4d9;
}

.btn-primary {
    height: 48px;
    padding: 0 28px;
    border-radius: 14px;
    font-size: 16px;
    background: linear-gradient(135deg, #007bff, #3094ff);
    font-weight: 600;
    border: none;
    color: #fff;
    box-shadow: 0 4px 14px rgba(0, 123, 255, 0.3);
    transition: 0.25s;
}

.btn-primary:hover {
    opacity: 0.9;
    box-shadow: 0 6px 22px rgba(0, 123, 255, 0.35);
}

/* ===================== ACTION BUTTONS ===================== */
.btn-action {
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    transition: 0.25s ease-in-out;
    min-width: 70px;
}

/* ✅ Núts màu xanh dương (Sửa) */
.btn-edit {
    background: linear-gradient(135deg, #2f81f7, #007bff);
    color: #fff;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.35);
}

.btn-edit:hover {
    background: linear-gradient(135deg, #0066d6, #0056b3);
    transform: translateY(-2px);
}

/* ✅ Nút Xóa màu xanh nhạt (để đồng bộ theme) */
.btn-delete {
    background: linear-gradient(135deg, #8dc6ff, #4aa3ff);
    color: #fff;
    box-shadow: 0 4px 12px rgba(74, 163, 255, 0.35);
}

.btn-delete:hover {
    background: linear-gradient(135deg, #5c9df7, #2d87f5);
    transform: translateY(-2px);
}

/* ✅ Table căn giữa chữ và icon */
/* Bảng cố định kích thước cột */
.table-category {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 14px;
    table-layout: fixed;
    /* ✅ FIX QUAN TRỌNG */
}

/* Định nghĩa width từng cột chuẩn đẹp */
.table-category th:nth-child(1),
.table-category td:nth-child(1) {
    width: 80px;
    /* ID */
    text-align: left;
}

.table-category th:nth-child(2),
.table-category td:nth-child(2) {
    width: 120px;
    /* Ảnh */
    text-align: center;
}

.table-category th:nth-child(3),
.table-category td:nth-child(3) {
    width: auto;
    /* Tên danh mục – tự giãn */
    text-align: left;
}

.table-category th:nth-child(4),
.table-category td:nth-child(4) {
    width: 180px;
    /* Hành động */
    text-align: center;
}

/* Căn giữa toàn bộ tiêu đề và dữ liệu */
.table-category th,
.table-category td {
    text-align: center !important;
}

/* Bảng cố định layout tránh lệch */
.table-category {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 14px;
    table-layout: fixed;
}

/* Cột ảnh – giữ size cố định */
.table-category td:nth-child(2) img {
    margin: 0 auto;
    /* đảm bảo ảnh vào giữa */
}

.pagination .page-link {
    color: #333;
    border-radius: 6px;
    margin: 0 2px;
}

.pagination .page-item.active .page-link {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
}
</style>
