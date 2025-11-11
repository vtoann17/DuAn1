// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],

  // 🧩 Thêm CSS Bootstrap & Icons
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  // ⚙️ Thêm script JS Bootstrap (cho các thành phần động như dropdown, modal...)
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          defer: true,
        },
      ],
    },
  },

  // 🔐 Biến môi trường runtime
  runtimeConfig: {
    apiSecret: '', // => process.env.NUXT_API_SECRET
    public: {
      apiBase: '', // => process.env.NUXT_PUBLIC_API_BASE
    },
  },
});
