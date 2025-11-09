

<script setup>
import { reactive } from "vue";

const formData = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    formData.name = formData.email = formData.phone = formData.subject = formData.message = "";
};

const contactMethods = [
    { icon: "📞", title: "Hotline", info: "1900-6035", subInfo: "Miễn phí 8:00 - 21:00", color: "dodgerblue" },
    { icon: "✉️", title: "Email", info: "hotro@tiki.vn", subInfo: "Phản hồi trong 24h", color: "green" },
    { icon: "💬", title: "Live Chat", info: "Chat ngay", subInfo: "Trực tuyến 24/7", color: "purple" },
    { icon: "📍", title: "Địa chỉ", info: "52 Út Tịch, P.4, Q.Tân Bình", subInfo: "TP. Hồ Chí Minh", color: "red" },
];

const offices = [
    {
        city: "Hồ Chí Minh",
        address: "52 Út Tịch, Phường 4, Quận Tân Bình, TP.HCM",
        phone: "(028) 7300 6200",
        hours: "8:00 - 17:00 (Thứ 2 - Thứ 6)",
    },
    {
        city: "Hà Nội",
        address: "Tầng 3, Tòa nhà VTC Online, 18 Tam Trinh, Hai Bà Trưng, Hà Nội",
        phone: "(024) 7300 6200",
        hours: "8:00 - 17:00 (Thứ 2 - Thứ 6)",
    },
    {
        city: "Đà Nẵng",
        address: "Số 1 Lê Đình Lý, Quận Thanh Khê, TP. Đà Nẵng",
        phone: "(0236) 7300 6200",
        hours: "8:00 - 17:00 (Thứ 2 - Thứ 6)",
    },
];
</script>

<template>
    <div class="contact-page">

        <!-- Hero -->
        <section class="hero">
            <h2>Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ Bạn</h2>
            <p>Mọi thắc mắc của bạn đều quan trọng với chúng tôi</p>
            <div class="hero-buttons">
    <a href="#formSection" class="hero-btn hero-btn-white">Gửi yêu cầu hỗ trợ</a>
    <a href="#faqSection" class="hero-btn hero-btn-outline">Xem câu hỏi thường gặp</a>
</div>

        </section>

        <!-- Contact Methods -->
        <section class="container grid-4">
            <div class="card contact-card">
                <div class="icon" style="color: dodgerblue">📞</div>
                <h3>Hotline</h3>
                <p class="info">1900-6035</p>
                <p class="sub">Miễn phí 8:00 - 21:00</p>
            </div>

            <div class="card contact-card">
                <div class="icon" style="color: green">✉️</div>
                <h3>Email</h3>
                <p class="info">hotro@tiki.vn</p>
                <p class="sub">Phản hồi trong 24h</p>
            </div>

            <div class="card contact-card">
                <div class="icon" style="color: purple">💬</div>
                <h3>Live Chat</h3>
                <p class="info">Chat ngay</p>
                <p class="sub">Trực tuyến 24/7</p>
            </div>

            <div class="card contact-card">
                <div class="icon" style="color: red">📍</div>
                <h3>Địa chỉ</h3>
                <p class="info">52 Út Tịch, P.4, Q.Tân Bình</p>
                <p class="sub">TP. Hồ Chí Minh</p>
            </div>
        </section>

        <!-- Form & Map -->
        <section class="form-map" id="formSection">


            <!-- Form -->
            <div class="form">
                <h2>Gửi Tin Nhắn</h2>

                <label>Họ và tên *</label>
                <input type="text" placeholder="Nhập họ và tên" />

                <div class="two-col">
                    <div>
                        <label>Email *</label>
                        <input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                        <label>Số điện thoại *</label>
                        <input type="tel" placeholder="0xxxxxxxxx" />
                    </div>
                </div>

                <label>Chủ đề *</label>
                <select>
                    <option>Chọn chủ đề</option>
                    <option>Vấn đề đơn hàng</option>
                    <option>Thanh toán</option>
                    <option>Đổi trả hàng</option>
                    <option>Tài khoản</option>
                    <option>Khác</option>
                </select>

                <label>Nội dung *</label>
                <textarea rows="5" placeholder="Nhập nội dung cần hỗ trợ..."></textarea>

                <button class="btn btn-blue">Gửi yêu cầu hỗ trợ</button>
            </div>

            <!-- Map -->
            <div class="map">
                <iframe width="100%" height="100%" style="border:0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6335074787823!2d106.65238871533431!3d10.763377292329654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sTiki!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"></iframe>
            </div>

        </section>

        <!-- Offices -->
        <section class="container offices">
            <h2>Văn Phòng Tiki</h2>

            <div class="grid-3">
                <div class="card">
                    <h3>Hồ Chí Minh</h3>
                    <p>52 Út Tịch, Phường 4, Quận Tân Bình</p>
                    <p>📞 (028) 7300 6200</p>
                    <p>🕒 8:00 - 17:00 (Thứ 2 - Thứ 6)</p>
                </div>

                <div class="card">
                    <h3>Hà Nội</h3>
                    <p>Tòa nhà VTC Online, Tam Trinh, Hà Nội</p>
                    <p>📞 (024) 7300 6200</p>
                    <p>🕒 8:00 - 17:00 (Thứ 2 - Thứ 6)</p>
                </div>

                <div class="card">
                    <h3>Đà Nẵng</h3>
                    <p>Số 1 Lê Đình Lý, Quận Thanh Khê</p>
                    <p>📞 (0236) 7300 6200</p>
                    <p>🕒 8:00 - 17:00 (Thứ 2 - Thứ 6)</p>
                </div>
            </div>
        </section>
        <!-- FAQ Section -->
        <section class="container faq" id="faqSection">
    <h2>Câu Hỏi Thường Gặp</h2>

    <details class="faq-item">
        <summary>1. Làm sao để kiểm tra tình trạng đơn hàng?</summary>
        <p>Bạn có thể vào mục “Đơn hàng của tôi” để xem trạng thái giao hàng theo thời gian thực.</p>
    </details>

    <details class="faq-item">
        <summary>2. Tôi muốn đổi trả thì phải làm sao?</summary>
        <p>Chọn sản phẩm cần đổi/trả trong đơn hàng và nhấn “Yêu cầu đổi trả”.</p>
    </details>

    <details class="faq-item">
        <summary>3. Thời gian hoàn tiền là bao lâu?</summary>
        <p>3–5 ngày với ví/thẻ ngân hàng, 7–10 ngày đối với chuyển khoản.</p>
    </details>

    <details class="faq-item">
        <summary>4. Tôi muốn liên hệ tổng đài?</summary>
        <p>Hotline hỗ trợ: 1900-6035 (8:00 – 21:00).</p>
    </details>

    <details class="faq-item">
        <summary>5. Có hỗ trợ giao hàng nhanh trong ngày không?</summary>
        <p>Có, tùy khu vực sẽ hiển thị tùy chọn giao trong 2h hoặc giao trong ngày.</p>
    </details>
</section>



    </div>
</template>


<style scoped>
/* ==== Tổng thể ==== */
/* ===== RESET ===== */
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Segoe UI", sans-serif;
    background: #f3f7ff;
    color: #333;
    line-height: 1.6;
}

/* ===== Container ===== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ===== TYPOGRAPHY ===== */
h2 {
    font-size: 28px;
    font-weight: 700;
    color: #004c97;
    margin-bottom: 16px;
    text-transform: capitalize;
}

/* =========================
        HERO SECTION
   ========================= */
.hero {
    background: linear-gradient(120deg, #007bff, #00bfff);
    padding: 80px 20px;
    text-align: center;
    color: white;
    border-radius: 0 0 24px 24px;
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.25);
}

.hero h2 {
    font-size: 38px;
    margin-bottom: 10px;
}

.hero p {
    font-size: 18px;
    opacity: 0.95;
}

/* ==== Hero Buttons ==== */
.hero-buttons {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 16px;
}

.hero-btn {
    padding: 12px 26px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    transition: all .25s ease;
    text-decoration: none;
}

.hero-btn-white {
    background: white;
    color: #007bff;
    border: 2px solid transparent;
}

.hero-btn-white:hover {
    background: #e9f4ff;
}

.hero-btn-outline {
    border: 2px solid white;
    color: white;
}

.hero-btn-outline:hover {
    background: rgba(255,255,255,0.2);
}

/* =========================
        GRID CARD SECTION
   ========================= */
.grid-4, .grid-3 {
    display: grid;
    gap: 20px;
}

.grid-4 {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin-top: 50px;
}

/* Card Contact */
.card {
    background: white;
    border-radius: 14px;
    padding: 22px;
    box-shadow: 0 3px 14px rgba(0, 123, 255, 0.12);
    transition: .3s ease;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 22px rgba(0, 123, 255, 0.23);
}

/* icon */
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px 0;
  flex-wrap: wrap;
}

.contact-card {
  flex: 1;
  min-width: 260px;
  max-width: 350px;
  background: #fff;
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.3s ease;
  border: 1px solid rgba(230, 230, 230, 0.4);
  position: relative;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
}

/* Icon căn đều và không bị lệch */
.contact-card img {
  width: 45px;
  height: 45px;
  object-fit: contain;
  margin-bottom: 15px;
}

/* Title */
.contact-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #222;
}

/* Text */
.contact-card p {
  font-size: 15px;
  margin: 2px 0;
  color: #444;
}


/* =========================
        FORM - MAP SECTION
   ========================= */
.form-map {
    display: flex;
    gap: 25px;
    margin: 60px 0;
}

.form {
    flex: 0 0 38%;
    background: white;
    border-radius: 14px;
    padding: 25px;
    box-shadow: 0 3px 14px rgba(0, 123, 255, 0.18);
}

.map {
    flex: 1;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 3px 14px rgba(0, 123, 255, 0.15);
}

.map iframe {
    width: 100%;
    height: 100%;
    display: block;
}

/* Input & Textarea */
.form label {
    font-weight: 600;
    margin-top: 14px;
}

.form input,
.form textarea,
.form select {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #cddfff;
    border-radius: 8px;
    margin-top: 6px;
    font-size: 15px;
    transition: .2s ease;
}

.form input:focus,
.form textarea:focus,
.form select:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.18);
}

/* 2 cột */
.two-col {
    display: flex;
    gap: 12px;
}

/* Submit Button */
.btn-blue {
    margin-top: 18px;
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(120deg, #007bff, #00bfff);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: .25s ease;
}

.btn-blue:hover {
    background: linear-gradient(120deg, #0065d0, #00a1e0);
    transform: translateY(-3px);
}

/* =========================
        OFFICES SECTION
   ========================= */
.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* =========================
        FAQ SECTION
   ========================= */
.faq-item {
    background: white;
    padding: 16px 20px;
    border-radius: 14px;
    margin-bottom: 14px;
    box-shadow: 0 3px 12px rgba(0, 123, 255, 0.18);
    cursor: pointer;
}

.faq-item summary {
    font-size: 18px;
    font-weight: 600;
    color: #0066cc;
    list-style: none;
    position: relative;
}

.faq-item summary::after {
    content: "+";
    position: absolute;
    right: 0;
    font-size: 24px;
    transition: .25s ease;
}

.faq-item[open] summary::after {
    content: "-";
    transform: rotate(180deg);
}

/* =========================
        RESPONSIVE
   ========================= */
@media (max-width: 900px) {
    .form-map {
        flex-direction: column;
    }
    .form {
        flex: 100%;
    }
}

</style>
