<template>
  <div class="page">
    <!-- Banner -->
    <section class="banner">
      <div class="container">
        <h2 class="banner-title">Blog Đồ Gia Dụng</h2>
        <p class="banner-sub">Mẹo hay, kinh nghiệm và hướng dẫn chọn mua đồ gia dụng</p>
      </div>
    </section>

    <div class="container main">

      <!-- Categories -->
      <div class="categories">
        <button
          v-for="c in categories"
          :key="c.id"
          @click="activeCategory = c.id"
          :class="['cat-btn', activeCategory === c.id ? 'active' : '']"
        >
          <span class="icon">{{ c.icon }}</span>
          {{ c.name }}
        </button>
      </div>

      <div class="grid">

        <!-- Articles Left -->
        <div class="left">

          <!-- Featured -->
          <div class="featured">
            <img :src="featured.image" class="featured-img" />

            <div class="featured-tag">NỔI BẬT</div>

            <div class="featured-content">
              <div class="meta">
                <span class="badge">{{ featured.category }}</span>
                <span>{{ featured.date }}</span>
                <span>{{ featured.views }} 👁</span>
              </div>

              <h2 class="featured-title">{{ featured.title }}</h2>

              <p class="featured-desc">
                {{ featured.description }}
              </p>

              <div class="featured-author">
                <div class="avatar">{{ featured.author[0] }}</div>
                <div>
                  <p class="name">{{ featured.author }}</p>
                  <p class="time">{{ featured.readTime }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Articles list -->
          <div class="articles">
            <div v-for="a in articles" :key="a.id" class="article-card">
              <img :src="a.image" class="a-img" />

              <div class="a-content">
                <span class="a-cat">{{ a.category }}</span>

                <h3 class="a-title">{{ a.title }}</h3>

                <p class="a-desc">{{ a.description }}</p>

                <div class="a-footer">
                  <span>👤 {{ a.author }}</span>
                  <span>👁 {{ a.views }}</span>
                  <span>{{ a.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button>Trước</button>
            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Sau</button>
          </div>

        </div>

        <!-- Sidebar Right -->
        <div class="right">

          <!-- Hot products -->
          <div class="sidebar-card">
            <div class="side-title">
              <div class="line"></div>
              <h3>Sản phẩm HOT</h3>
            </div>

            <div v-for="p in hot" :key="p.id" class="product">
              <img :src="p.image" class="p-img" />
              <div class="p-info">
                <h4 class="p-name">{{ p.name }}</h4>

                <div class="p-price">
                  <span class="price">{{ p.price }}</span>
                  <span class="old">{{ p.originalPrice }}</span>
                </div>

                <div class="p-meta">
                  <span>⭐ {{ p.rating }}</span>
                  <span>•</span>
                  <span>Đã bán {{ p.sold }}</span>
                </div>
              </div>
            </div>

            <button class="view-all">Xem tất cả</button>
          </div>

          <!-- Trending topics -->
          <div class="sidebar-card">
            <h3 class="side-heading">Chủ đề nổi bật</h3>

            <div v-for="(t,i) in trending" :key="t.id" class="topic">
              <span class="topic-index">{{ i+1 }}</span>
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

const activeCategory = ref("all");

const categories = [
  { id: "all", name: "Tất cả", icon: "🏠" },
  { id: "kitchen", name: "Nhà bếp", icon: "🍳" },
  { id: "living", name: "Phòng khách", icon: "☕" },
  { id: "bedroom", name: "Phòng ngủ", icon: "💡" },
  { id: "cleaning", name: "Vệ sinh", icon: "🧹" }
];

const featured = {
  title: "Top 10 Đồ Gia Dụng Thông Minh...",
  description: "Khám phá những món đồ gia dụng thông minh...",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
  category: "Nhà bếp",
  author: "Nguyễn Thu Hà",
  date: "15/11/2024",
  views: "15.2K",
  readTime: "5 phút đọc"
};

const articles = ref([
  // ... bạn copy dữ liệu của bạn vào đây !
]);

const hot = ref([
  // ... copy dữ liệu của bạn
]);

const trending = ref([
  // ... copy dữ liệu của bạn
]);
</script>

<style scoped>
/* RESET + LAYOUT */
.page { background: #f5f5f5; min-height: 100vh; }
.container { max-width: 1200px; margin: auto; padding: 0 16px; }

/* Header */
.header { background: linear-gradient(90deg,#0a64ff,#0a5ce0); color: white; padding: 12px 0; }
.header-inner { display:flex; justify-content:space-between; align-items:center; }
.logo { font-size: 30px; font-weight: bold; }

/* Breadcrumb */
.breadcrumb { display:flex; gap:6px; font-size:14px; }
.sep { opacity: 0.7; }

/* Search */
.search-box { position:relative; }
.search-box input { padding:8px 12px 8px 32px; width:260px; border-radius:8px; border:none; }
.search-icon { position:absolute; left:10px; top:8px; opacity:.5; }

/* Banner */
.banner { background:white; padding:20px 0; border-bottom:1px solid #ddd; }
.banner-title { font-size:26px; font-weight:700; }
.banner-sub { color:#555; }

/* Categories */
.categories { background:white; padding:10px; border-radius:8px; margin-bottom:20px; display:flex; gap:10px; overflow-x:auto; }
.cat-btn { padding:8px 14px; border-radius:6px; background:#f0f0f0; border:none; cursor:pointer; display:flex; gap:6px; }
.cat-btn.active { background:#0a5ce0; color:white; }

/* Main layout */
.grid { display:grid; grid-template-columns:3fr 1fr; gap:20px; }

/* Featured */
.featured { background:white; border-radius:10px; overflow:hidden; position:relative; }
.featured-img { width:100%; height:260px; object-fit:cover; }
.featured-tag { position:absolute; top:10px; left:10px; background:red; color:white; padding:4px 10px; border-radius:6px; font-size:12px; }
.featured-content { padding:16px; }
.meta { display:flex; gap:10px; font-size:13px; color:#666; }
.badge { background:#e8f2ff; padding:2px 6px; border-radius:4px; color:#0a5ce0; }
.featured-title { font-size:20px; font-weight:700; margin:10px 0; }
.featured-desc { color:#555; }
.featured-author { display:flex; align-items:center; gap:10px; margin-top:12px; }
.avatar { width:36px; height:36px; border-radius:50%; background:#0a5ce0; color:white; display:flex; justify-content:center; align-items:center; }

/* Articles */
.article-card { background:white; display:flex; gap:12px; margin-bottom:12px; border-radius:8px; overflow:hidden; }
.a-img { width:150px; height:120px; object-fit:cover; }
.a-content { padding:10px; flex:1; }
.a-title { font-size:16px; font-weight:700; margin:6px 0; }
.a-desc { color:#555; font-size:13px; }
.a-footer { display:flex; gap:10px; font-size:12px; color:#666; }

/* Sidebar */
.sidebar-card { background:white; padding:16px; border-radius:10px; margin-bottom:20px; }
.side-title { display:flex; align-items:center; gap:6px; }
.side-title .line { width:4px; height:16px; background:#0a5ce0; border-radius:4px; }

/* Products */
.product { display:flex; gap:10px; margin-bottom:12px; }
.p-img { width:70px; height:70px; border-radius:8px; object-fit:cover; }
.price { color:red; font-weight:bold; }
.old { color:#aaa; text-decoration:line-through; }
.p-meta { font-size:12px; color:#666; }

/* Trending */
.topic { display:flex; gap:8px; margin-bottom:10px; }
.topic-index { width:22px; height:22px; background:#eef5ff; color:#0a5ce0; border-radius:4px; display:flex; justify-content:center; align-items:center; font-size:12px; }
.topic-title { font-weight:600; }
.topic-count { color:#777; font-size:12px; }

/* Banner Ad */
.side-banner { background:linear-gradient(130deg,#0a64ff,#0a5ce0); color:white; text-align:center; padding:20px; border-radius:10px; }
.sb-icon { font-size:40px; opacity:.9; }
.sb-btn { margin-top:10px; background:white; color:#0a5ce0; border:none; padding:8px 14px; border-radius:6px; cursor:pointer; }

/* Newsletter */
.news-input { width:100%; padding:8px; border:1px solid #ccc; border-radius:6px; margin-bottom:8px; }
.news-btn { width:100%; padding:8px; background:#0a5ce0; color:white; border:none; border-radius:6px; cursor:pointer; }

/* Pagination */
.pagination { display:flex; gap:8px; justify-content:center; margin:20px 0; }
.pagination button { padding:6px 12px; border:1px solid #ccc; background:white; border-radius:6px; cursor:pointer; }
.pagination .active { background:#0a5ce0; color:white; border-color:#0a5ce0; }
/* View all button */
.view-all {
  display: block;
  width: 100%;
  text-align: center;
  background: linear-gradient(90deg, #0a64ff, #0a5ce0);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;
  transition: 0.3s ease;
}

.view-all:hover {
  background: linear-gradient(90deg, #084ed8, #0840b8);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

</style>
