



<template>
  <div class="page">
    <!-- Header banner -->
    <section class="banner">
      <div class="container">
        <h2 class="banner-title">{{ post.title }}</h2>
        <p class="banner-sub">{{ post.subtitle }}</p>
      </div>
    </section>

    <div class="container main">
      <div class="grid">
        <!-- LEFT: Content -->
        <div class="left">
          <img :src="post.image" class="detail-img" />

          <div class="meta">
            <span class="badge">{{ post.category }}</span>
            <span>{{ post.date }}</span>
            <span>👁 {{ post.views }}</span>
            <span>🕒 {{ post.readTime }}</span>
          </div>

          <div class="author-box">
            <div class="avatar">{{ post.author[0] }}</div>
            <div>
              <p class="name">{{ post.author }}</p>
              <p class="role">Tác giả</p>
            </div>
          </div>

          <div class="content">
            <h3>Giới thiệu</h3>
            <p>
              {{ post.description }}
            </p>

            <h3>Chi tiết bài viết</h3>
            <p>
              Trong thời đại công nghệ, các sản phẩm đồ gia dụng thông minh giúp
              cuộc sống dễ dàng và tiện lợi hơn bao giờ hết. Từ robot hút bụi,
              nồi chiên không dầu, đến máy lọc không khí – tất cả đều được tích hợp
              các tính năng hiện đại giúp bạn tiết kiệm thời gian và công sức.
            </p>

            <p>
              Bài viết này sẽ chia sẻ cho bạn những sản phẩm đáng mua nhất năm nay,
              cùng mẹo chọn mua sao cho phù hợp với ngân sách và không gian sống.
            </p>

            <img
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800"
              class="content-img"
            />

            <h3>Kết luận</h3>
            <p>
              Hy vọng qua bài viết, bạn sẽ có thêm gợi ý hữu ích để chọn lựa những
              món đồ gia dụng phù hợp cho gia đình. Hãy chia sẻ bài viết này nếu bạn
              thấy hữu ích nhé!
            </p>
          </div>

          <button class="back-btn" @click="goBack">← Quay lại Blog</button>
        </div>

        <!-- RIGHT: Sidebar -->
        <div class="right">
          <!-- Trending topics -->
          <div class="sidebar-card">
            <h3 class="side-heading">Chủ đề nổi bật</h3>
            <div
              v-for="(t, i) in trending"
              :key="t.id"
              class="topic"
            >
              <span class="topic-index">{{ i + 1 }}</span>
              <div>
                <p class="topic-title">{{ t.title }}</p>
                <p class="topic-count">{{ t.count }}</p>
              </div>
            </div>
          </div>

          <!-- Banner ad -->
          <div class="side-banner">
            <div class="sb-icon">🛒</div>
            <h3>Ưu đãi đặc biệt</h3>
            <p>Giảm đến 50% các sản phẩm đồ gia dụng</p>
            <button class="sb-btn">Mua ngay</button>
          </div>

          <!-- Newsletter -->
          <div class="sidebar-card">
            <h3>Đăng ký nhận tin</h3>
            <p class="news-desc">Nhận bài viết và ưu đãi mới nhất</p>
            <input placeholder="Email của bạn" class="news-input" />
            <button class="news-btn">Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const post = ref({
  title: "Top 10 Đồ Gia Dụng Thông Minh Nên Mua Năm 2025",
  subtitle: "Khám phá xu hướng mới giúp cuộc sống tiện nghi hơn",
  category: "Đồ gia dụng",
  author: "Nguyễn Thu Hà",
  date: "15/11/2024",
  views: "15.2K",
  readTime: "5 phút đọc",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200",
  description:
    "Công nghệ ngày càng phát triển, các thiết bị gia dụng thông minh trở thành trợ thủ đắc lực trong mọi gia đình..."
});

const trending = ref([
  { id: 1, title: "Bí quyết chọn máy hút bụi phù hợp", count: "1.2K lượt xem" },
  { id: 2, title: "Top 5 nồi chiên không dầu bán chạy", count: "890 lượt xem" },
  { id: 3, title: "So sánh máy giặt inverter và thường", count: "740 lượt xem" }
]);

function goBack() {
  router.push("/blog");
}
</script>

<style scoped>
.page {
  background: #f5f5f5;
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
}

/* Banner */
.banner {
  background: white;
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
}
.banner-title {
  font-size: 28px;
  font-weight: 700;
}
.banner-sub {
  color: #555;
}

/* Layout */
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 20px;
}
.left {
  background: white;
  border-radius: 10px;
  padding: 20px;
}
.detail-img {
  width: 100%;
  height: 340px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
}
.meta {
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
}
.badge {
  background: #e8f2ff;
  padding: 2px 6px;
  border-radius: 4px;
  color: #0a5ce0;
}

/* Author */
.author-box {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0a5ce0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.name {
  font-weight: 600;
}
.role {
  font-size: 13px;
  color: #777;
}

/* Content */
.content h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 16px 0 6px;
}
.content p {
  line-height: 1.6;
  color: #444;
  margin-bottom: 10px;
}
.content-img {
  width: 100%;
  border-radius: 8px;
  margin: 16px 0;
}

/* Back button */
.back-btn {
  background: #0a5ce0;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
}
.back-btn:hover {
  background: #084ed8;
}

/* Sidebar */
.sidebar-card {
  background: white;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.side-heading {
  font-weight: 700;
  margin-bottom: 10px;
}
.topic {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.topic-index {
  width: 22px;
  height: 22px;
  background: #eef5ff;
  color: #0a5ce0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.topic-title {
  font-weight: 600;
}
.topic-count {
  color: #777;
  font-size: 12px;
}

/* Banner Ad */
.side-banner {
  background: linear-gradient(130deg, #0a64ff, #0a5ce0);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}
.sb-icon {
  font-size: 40px;
  opacity: 0.9;
}
.sb-btn {
  margin-top: 10px;
  background: white;
  color: #0a5ce0;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

/* Newsletter */
.news-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 8px;
}
.news-btn {
  width: 100%;
  padding: 8px;
  background: #0a5ce0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
