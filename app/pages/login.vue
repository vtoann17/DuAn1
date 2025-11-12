<script setup>
import { ref } from "vue";
import { useLogin } from "~/store/login";

const useAuth = useLogin();
const register = ref({
    name: "",
    email: "",
    password: ""
});
const login = ref({
    email: "",
    password: ""
});


const handleLogin = () => {
     useAuth.login(login.value);
};

const handleSignup = () => {
   useAuth.register(register.value);
};
</script>

<template>
    <div class="auth-page">
        <div class="auth-container">
            <!-- Cột đăng nhập -->
            <div class="auth-column">
                <div class="auth-header">
                    <h2>Đăng nhập</h2>
                    <p class="auth-subtitle">Đăng nhập hoặc Tạo tài khoản</p>
                </div>

                <div class="auth-form">
                    <input type="email" placeholder="Email" v-model="login.email" class="auth-input" />
                    <input type="password" placeholder="Mật khẩu" v-model="login.password" class="auth-input" />
                    <button class="btn-primary" @click="handleLogin">Đăng Nhập</button>

                    <p class="terms-text">
                        Bằng việc tiếp tục, bạn đã đồng ý với
                        <a href="#">điều khoản sử dụng</a> và
                        <a href="#">chính sách bảo mật</a>.
                    </p>
                </div>
            </div>

            <!-- Cột đăng ký -->
            <div class="auth-column promo-column">
                <div class="auth-header">
                    <h2>Đăng ký</h2>
                    <p class="auth-subtitle">Tạo tài khoản mới</p>
                </div>

                <div class="auth-form">
                    <input type="text" placeholder="Họ và tên" v-model="register.name" class="auth-input" />
                    <input type="email" placeholder="Email" v-model="register.email" class="auth-input" />
                    <input type="password" placeholder="Mật khẩu" v-model="register.password" class="auth-input" />

                    <button class="btn-primary" @click="handleSignup">Đăng Ký</button>

                    <div class="divider">
                        <span>Hoặc tiếp tục bằng</span>
                    </div>

                    <div class="social-buttons">
                        <button class="social-btn facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path
                                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
                            </svg>
                        </button>
                        <button class="social-btn google">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4" />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853" />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05" />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

.auth-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 20px;
    min-height: calc(100vh - 160px);
    background: #f5f5fa;
}

.auth-container {
    background: #fff;
    border-radius: 16px;
    max-width: 900px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Cột trái và phải */
.auth-column {
    padding: 48px 40px;
}

.promo-column {
    background: #fff;
    border-left: 1px solid #ebebf0;
}

/* Header */
.auth-header {
    margin-bottom: 32px;
}

.auth-header h2 {
    font-size: 28px;
    font-weight: 500;
    color: #27272a;
    margin: 0 0 8px;
}

.auth-subtitle {
    font-size: 15px;
    color: #808089;
    margin: 0;
}

/* Form */
.auth-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 340px; /* giới hạn chiều rộng đẹp */
    margin: 0 auto;   /* canh giữa */
}

.auth-input,
.btn-primary,
.social-btn {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-size: 15px;
    box-sizing: border-box;
}

/* Input */
.auth-input {
    padding: 0 16px;
    border: 1px solid #dcdcdc;
    transition: all 0.2s;
}

.auth-input:focus {
    border-color: #1a94ff;
    box-shadow: 0 0 0 3px rgba(26, 148, 255, 0.1);
    outline: none;
}

/* Button chính */
.btn-primary {
    background: #1a94ff;
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary:hover {
    background: #0f7ae5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(26, 148, 255, 0.3);
}

/* Các nút MXH cũng canh đều */
.social-buttons {
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
}

.social-btn {
    flex: 1;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
}

.facebook {
    background: #1877f2;
}

.google {
    background: #fff;
    border: 1px solid #dcdcdc;
}

.google:hover {
    background: #f8f8f8;
}

.facebook:hover {
    background: #0f68d6;
}

/* Căn lại cột cho cân hai bên */
.auth-column {
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    align-items: center; /* canh giữa theo chiều ngang */
}

/* Text điều khoản */
.terms-text {
    font-size: 12px;
    color: #808089;
    line-height: 1.5;
}

.terms-text a {
    color: #1a94ff;
    text-decoration: none;
}

.terms-text a:hover {
    text-decoration: underline;
}
.divider {
    position: relative;
    text-align: center;
    margin: 20px 0;
}

.divider::before,
.divider::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: #e0e0e0; /* màu xám rất nhạt */
}

.divider::before {
    left: 0;
}

.divider::after {
    right: 0;
}

.divider span {
    background: #fff;
    color: #9e9e9e; /* giống màu trong ảnh */
    font-size: 13px;
    font-weight: 400;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 12px;
    letter-spacing: 0.2px; /* nhìn hiện đại hơn */
}


/* Responsive */
@media (max-width: 768px) {
    .auth-container {
        grid-template-columns: 1fr;
    }

    .auth-column {
        padding: 32px 24px;
    }
}
</style>
