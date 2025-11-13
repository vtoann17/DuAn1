<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="avatar">
          <User class="icon-lg" />
        </div>
        <div>
          <p class="small-text">Tài khoản của</p>
          <p class="username">Hoàng Nguyễn Quang Huy</p>
        </div>
      </div>

      <nav class="menu">
        <a class="menu-item active">
          <User class="icon" />
          <span>Thông tin tài khoản</span>
        </a>

        <a class="menu-item">
          <Bell class="icon" />
          <span>Thông báo của tôi</span>
        </a>

        <a class="menu-item">
          <CreditCard class="icon" />
          <span>Quản lý đơn hàng</span>
        </a>

        <a class="menu-item">
          <MapPin class="icon" />
          <span>Quản lý đổi trả</span>
        </a>

        <a class="menu-item">
          <MapPin class="icon" />
          <span>Số địa chỉ</span>
        </a>

        <a class="menu-item">
          <CreditCard class="icon" />
          <span>Thông tin thanh toán</span>
        </a>

        <a class="menu-item">
          <Star class="icon blue" />
          <span>Đánh giá sản phẩm</span>
        </a>

        <a class="menu-item">
          <Eye class="icon" />
          <span>Sản phẩm bạn đã xem</span>
        </a>

        <a class="menu-item">
          <Heart class="icon" />
          <span>Sản phẩm yêu thích</span>
        </a>

        <a class="menu-item">
          <Star class="icon" />
          <span>Nhận xét của tôi</span>
        </a>

        <a class="menu-item">
          <DollarSign class="icon blue" />
          <span>Chia sẻ có lời</span>
        </a>

        <a class="menu-item">
          <Tag class="icon yellow" />
          <span>Mã giảm giá</span>
        </a>

        <a class="menu-item">
          <Headphones class="icon" />
          <span>Hỗ trợ khách hàng</span>
        </a>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="content">
      <h1 class="title">Thông tin tài khoản</h1>

      <div class="layout">
        <!-- LEFT: Personal Info -->
        <section class="personal-box">
          <h2>Thông tin cá nhân</h2>

          <div class="avatar-section">
            <div class="avatar-big">
              <User class="big-icon" />
            </div>

            <div class="info-fields">
              <label>Họ & Tên</label>
              <input v-model="form.fullName" type="text" />

              <label>Nickname</label>
              <input v-model="form.nickname" type="text" placeholder="Thêm nickname" />
            </div>
          </div>

          <div class="form-section">
            <label>Ngày sinh</label>
            <div class="dob">
              <select v-model="form.day">
                <option value="">Ngày</option>
                <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
              </select>

              <select v-model="form.month">
                <option value="">Tháng</option>
                <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
              </select>

              <select v-model="form.year">
                <option value="">Năm</option>
                <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
              </select>
            </div>

            <label class="mt">Giới tính</label>
            <div class="gender">
              <label><input type="radio" value="male" v-model="form.gender" /> Nam</label>
              <label><input type="radio" value="female" v-model="form.gender" /> Nữ</label>
              <label><input type="radio" value="other" v-model="form.gender" /> Khác</label>
            </div>

            <label>Quốc tịch</label>
            <select v-model="form.country">
              <option value="">Chọn quốc tịch</option>
              <option value="vn">Việt Nam</option>
            </select>

            <button class="btn-save">Lưu thay đổi</button>
          </div>
        </section>

        <!-- RIGHT: Contact + Security -->
        <section class="right-side">
          <!-- Phone & Email -->
          <div class="card">
            <h3>Số điện thoại và Email</h3>

            <div class="item">
              <div>
                <p class="label">Số điện thoại</p>
                <p class="bold">{{ form.phone }}</p>
              </div>
              <button class="btn">Cập nhật</button>
            </div>

            <div class="item">
              <div>
                <p class="label">Địa chỉ email</p>
                <p class="bold">{{ form.email }}</p>
              </div>
              <button class="btn">Cập nhật</button>
            </div>
          </div>

          <!-- Security -->
          <div class="card">
            <h3>Bảo mật</h3>

            <div class="item">
              <span>Thiết lập mật khẩu</span>
              <button class="btn">Cập nhật</button>
            </div>

            <div class="item">
              <span>Thiết lập mã PIN</span>
              <button class="btn">Thiết lập</button>
            </div>

            <div class="item border-top">
              <span>Yêu cầu xóa tài khoản</span>
              <button class="btn">Yêu cầu</button>
            </div>
          </div>

          <!-- Social -->
          <div class="card">
            <h3>Liên kết mạng xã hội</h3>

            <div class="item">
              <span>Facebook</span>
              <button class="btn">Liên kết</button>
            </div>

            <div class="item">
              <span>Google</span>
              <span class="blue">Đã liên kết</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { User, Bell, CreditCard, MapPin, DollarSign, Eye, Heart, Star, Tag, Headphones } from "lucide-vue-next";

const form = ref({
  fullName: "Hoàng Nguyễn Quang Huy",
  nickname: "",
  phone: "0356208805",
  email: "hoangnqhpk04092@gmail.com",
  day: "",
  month: "",
  year: "",
  gender: "",
  country: ""
});

const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
</script>

<style scoped>
/* ===== Layout ===== */
.wrapper {
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  color: #222;
}

/* ===== Sidebar ===== */
.sidebar {
  width: 260px;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #e4eafc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar svg {
  width: 28px;
  height: 28px;
  color: #007bff;
}

.sidebar-header p {
  margin: 0;
}

.small-text {
  font-size: 12px;
  color: #6b7280;
}

.username {
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  transition: all 0.15s ease;
}

.menu-item:hover {
  background: #f0f4ff;
}

.menu-item.active {
  background: #e4eafc;
  font-weight: 600;
}

.menu-item .icon {
  width: 20px;
  height: 20px;
}

.menu-item .blue {
  color: #007bff;
}

.menu-item .yellow {
  color: #f59e0b;
}

/* ===== Main Content ===== */
.content {
  flex: 1;
  padding: 32px 40px;
  overflow-x: hidden;
}

.title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 28px;
}

/* Layout grid for left + right */
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
}

/* ===== LEFT: Personal Box ===== */
.personal-box {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.avatar-section {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
}

.avatar-big {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #eaf4ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.big-icon {
  width: 44px;
  height: 44px;
  color: #007bff;
}

.info-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-fields label {
  font-size: 13px;
  color: #374151;
  font-weight: 500;
}

.info-fields input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  transition: border 0.2s;
}

.info-fields input:focus {
  outline: none;
  border-color: #3b82f6;
}

/* DOB */
.dob {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

/* Gender */
.gender {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.gender label {
  font-size: 14px;
  color: #374151;
}

/* Country */
select {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  margin-bottom: 20px;
}

/* Save button */
.btn-save {
  width: 100%;
  padding: 12px;
  background: #007bff;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-save:hover {
  background: #0056b3;
}

/* ===== RIGHT: Cards ===== */
.card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 20px;
}

.card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #111827;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.item span,
.item p {
  font-size: 14px;
  color: #374151;
}

.item .bold {
  font-weight: 600;
  color: #111827;
}

.item .blue {
  color: #007bff;
  font-weight: 500;
}

.item .btn {
  padding: 6px 14px;
  border: 1px solid #007bff;
  border-radius: 8px;
  background: white;
  color: #007bff;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.item .btn:hover {
  background: #eaf3ff;
}

.border-top {
  border-top: 1px solid #e5e7eb;
  padding-top: 14px;
  margin-top: 14px;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .sidebar {
    width: 220px;
    padding: 20px 12px;
  }

  .content {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
}

</style>
