<template>
  <div class="home-page">
    <!-- Sidebar bên trái -->
    <Appslidebar />

    <!-- Nội dung chính -->
    <main class="main-content">
      <h1>Chào mừng đến với Tiki Clone</h1>
      <p>Chọn danh mục bên trái để khám phá sản phẩm.</p>
    </main>
  </div>
</template>

<script setup>
import Appslidebar from '~/components/AppSlidebar.vue';
</script>

<style scoped>
.home-page {
  display: flex;
  min-height: 100vh;
  background: #f8f8fc;
}

/* Sidebar */
.sidebar {
  flex-shrink: 0;
}

/* Nội dung chính */
.main-content {
  flex: 1;
  padding: 30px;
  background: #f8f8fc;
}

.main-content h1 {
  color: #007bff;
  margin-bottom: 10px;
}

.main-content p {
  color: #555;
}
</style>
