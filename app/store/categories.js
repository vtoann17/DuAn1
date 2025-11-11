import { defineStore } from "pinia";
import axios from "axios";
import { useNotify } from "~/composables/useNotify";

export const useCategories = defineStore("categories", () => {
  const categories = ref([]);
  const totalPages = ref(0);
  const totalCategories = ref(0);
  const config = useRuntimeConfig();
  const notify = useNotify();
  const apiBase = config.public.apiBase;

  const loadAllCategories = async () => {
    try {
      const res = await axios.get(`${apiBase}/categories`);
      if (res.status == 200) {
        categories.value = res.data.data;
      } else {
        console.log("Lỗi tải API");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loadCategories = async (query) => {
    try {
      const res = await axios.get(`${apiBase}/categories`, { params: query });
      if (res.status == 200) {
        categories.value = res.data.data;
        totalPages.value = res.data.meta.last_page;
        totalCategories.value = res.data.meta.total;
      } else {
        console.log("Lỗi tải API");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createCategories = async (data) => {
    try {
      const res = await axios.post(`${apiBase}/categories`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status == 201) {
        notify.toastSuccess("Thêm danh mục thành công");
      } else {
        notify.toastError("Lỗi không thêm được danh mục");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateCategories = async (data, id) => {
    try {
      const res = await axios.post(`${apiBase}/categories/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status == 200) {
        notify.toastSuccess("Sửa danh mục thành công");
      } else {
         notify.toastError("Lỗi không sửa được danh mục");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCategories = async (id) => {
    const check = await notify.swalConfirm(
      "Bạn có muốn xóa không ?",
      "Bạn chắc chắn chứ"
    );
    if (!check) return;
    try {
      const res = await axios.delete(`${apiBase}/categories/${id}`);
      if (res.status == 200) {
        notify.toastSuccess("Xóa danh mục thành công");
      } else {
        notify.toastError("Lỗi không xóa được danh mục");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    categories,
    totalPages,
    totalCategories,
    loadAllCategories,
    loadCategories,
    createCategories,
    updateCategories,
    deleteCategories,
  };
});
