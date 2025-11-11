import { defineStore } from "pinia";
import axios from "axios";
import { useNotify } from "~/composables/useNotify";

export const useBrands = defineStore("brands", () => {
  const brands = ref([]);
  const totalPages = ref(0);
  const totalBrands = ref(0);
  const config = useRuntimeConfig();
  const notify = useNotify();
  const apiBase = config.public.apiBase;

  const loadAllBrands = async () => {
    try {
      const res = await axios.get(`${apiBase}/brands`);
      if (res.status === 200) {
        brands.value = res.data.data;
      }
    } catch (error) {
      console.log("Lỗi tải API loadAllBrands:", error);
    }
  };

  const loadBrands = async (query) => {
    try {
      const res = await axios.get(`${apiBase}/brands`, { params: query });
      if (res.status === 200) {
        brands.value = res.data.data;
        totalPages.value = res.data.meta.last_page;
        totalBrands.value = res.data.meta.total;
      }
    } catch (error) {
      console.log("Lỗi tải API loadBrands:", error);
    }
  };

  const createBrand = async (data) => {
    try {
      const res = await axios.post(`${apiBase}/brands`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.status === 201) {
        notify.toastSuccess("Thêm thương hiệu thành công");
        await loadAllBrands(); // cập nhật lại danh sách
      } else {
        notify.toastError("Lỗi không thêm được thương hiệu");
      }
    } catch (error) {
      console.log("Lỗi createBrand:", error);
    }
  };

  const updateBrand = async (data, id) => {
    try {
      const res = await axios.post(`${apiBase}/brands/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.status === 200) {
        notify.toastSuccess("Sửa thương hiệu thành công");
        await loadAllBrands(); // cập nhật lại danh sách
      } else {
        notify.toastError("Lỗi không sửa được thương hiệu");
      }
    } catch (error) {
      console.log("Lỗi updateBrand:", error);
    }
  };

  const deleteBrand = async (id) => {
    const check = await notify.swalConfirm(
      "Bạn có muốn xóa không?",
      "Bạn chắc chắn chứ"
    );
    if (!check) return;

    try {
      const res = await axios.delete(`${apiBase}/brands/${id}`);
      if (res.status === 200) {
        notify.toastSuccess("Xóa thương hiệu thành công");
        await loadAllBrands(); // cập nhật lại danh sách
      } else {
        notify.toastError("Lỗi không xóa được thương hiệu");
      }
    } catch (error) {
      console.log("Lỗi deleteBrand:", error);
    }
  };

  return {
    brands,
    totalPages,
    totalBrands,
    loadAllBrands,
    loadBrands,
    createBrand,
    updateBrand,
    deleteBrand,
  };
});
