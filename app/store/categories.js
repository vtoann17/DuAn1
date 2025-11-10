import { defineStore } from "pinia";
import axios from "axios";

export const useCategories = defineStore("categories", () => {
  const categories = ref([]);
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  const loadCategories = async () => {
    try {
      const res = await axios.get(`${apiBase}/categories`);
      if (res.status == 200) {
        categories.value = res.data.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { categories, loadCategories };
});
