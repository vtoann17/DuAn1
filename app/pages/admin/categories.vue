<script setup>
import { ref } from 'vue';
definePageMeta({ layout: "admin" });
const loading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
// Open Form
const openAddModal = () => {
    isEditing.value = false;

    showModal.value = true;
};

//Edit Category
const openEditModal = (category) => {
    isEditing.value = true;

    showModal.value = true;
};

// Close form
const closeModal = () => {
    showModal.value = false;

};
</script>
<template>
    <h1>Đây là categories</h1>
    <button class="btn btn-primary btn-add" @click="openAddModal">
        <i class="fa-solid fa-plus me-2"></i>
        Thêm
    </button>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title fw-bold">
                    {{ isEditing ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới' }}
                </h5>
                <button class="btn-close" @click="closeModal">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label fw-semibold">Ảnh danh mục <span class="text-danger"></span></label>
                    <div class="image-upload">
                        <label for="categoryImage"><i class="fa-solid fa-upload me-1"></i> Chọn ảnh</label>
                        <input type="file" id="categoryImage" @change="handleFileUpload" />
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label fw-semibold">Tên danh mục <span class="text-danger"></span></label>
                    <input type="text" class="form-control" placeholder="Nhập tên danh mục">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" @click="closeModal" :disabled="loading">
                    Hủy
                </button>
                <button class="btn btn-primary" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="fa-solid fa-save me-2"></i>
                    {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>


</style>