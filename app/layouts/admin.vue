<script setup>
import { ref } from "vue";
import Slidebar from "~/components/Slidebar.vue";
import { Menu } from "lucide-vue-next";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <Slidebar :class="{ show: isSidebarOpen }" />

    <!-- Overlay khi mở sidebar mobile -->
    <div
      v-if="isSidebarOpen"
      class="overlay"
      @click="toggleSidebar"
    ></div>

    <!-- Nội dung -->
    <main class="admin-content">
      <button class="menu-btn" @click="toggleSidebar">
        <Menu />
      </button>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
  position: relative;
}

/* Nội dung chính */
.admin-content {
  flex: 1;
  padding: 24px;
  transition: all 0.3s ease;
}

/* Nút mở sidebar */
.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
}

.menu-btn svg {
  width: 28px;
  height: 28px;
  color: #111827;
}

/* Overlay tối khi mở menu mobile */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .admin-layout {
    flex-direction: column;
  }

  .admin-content {
    padding: 16px;
  }
}
</style>
