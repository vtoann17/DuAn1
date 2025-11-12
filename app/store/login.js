import { defineStore } from "pinia";
import axios from "axios";
import { useNotify } from "~/composables/useNotify";

export const useLogin = defineStore("login", () => {
    const config = useRuntimeConfig();
    const notify = useNotify();
    const apiBase = config.public.apiBase;

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiBase}/login`, data);
            if (res.status == 200) {
               notify.toastSuccess("Đăng nhập thành công");
               localStorage.setItem("token", res.data.token);
            } else {
                console.log("Lỗi tải API");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const register = async (data) => {
        try {
            const res = await axios.post(`${apiBase}/register`, data);
            if (res.status == 200) {
                console.log(res);
                notify.toastSuccess("Đăng ký thành công");
            } else {
                console.log("Lỗi tải API");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        register,
        login
    };
});

