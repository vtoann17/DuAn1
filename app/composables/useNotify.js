import { useToast } from "vue-toastification";
import Swal from "sweetalert2";

export const useNotify = () => {
  // --- Khởi tạo toast ---
  let toast = null;
  if (process.client) {
    toast = useToast();
  }

  // --- Toast (vue-toastification) ---
  const toastSuccess = (msg = "Thành công!") => toast?.success(msg);
  const toastError = (msg = "Đã có lỗi xảy ra!") => toast?.error(msg);
  const toastInfo = (msg = "Thông báo!") => toast?.info(msg);
  const toastWarning = (msg = "Cảnh báo!") => toast?.warning(msg);

  // --- SweetAlert2 ---
  const swalSuccess = (title = "Thành công", text = "") => {
    Swal.fire({
      icon: "success",
      title,
      text,
      confirmButtonColor: "#3085d6",
    });
  };

  const swalError = (title = "Lỗi", text = "") => {
    Swal.fire({
      icon: "error",
      title,
      text,
      confirmButtonColor: "#d33",
    });
  };

  const swalConfirm = async (title = "Bạn có chắc không?", text = "") => {
    const result = await Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có",
      cancelButtonText: "Không",
    });
    return result.isConfirmed;
  };

  return {
    // Toast
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    // Swal
    swalSuccess,
    swalError,
    swalConfirm,
  };
};
