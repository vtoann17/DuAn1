<template>
  <div class="cart-page">
    <h2>GIỎ HÀNG</h2>

    <div class="cart-container">
      <div class="cart-left">
        <div class="cart-header">
          <label><input type="checkbox" checked /> Tất cả (1 sản phẩm)</label>
          <div class="header-right">
            <span>Đơn giá</span>
            <span>Số lượng</span>
            <span>Thành tiền</span>
          </div>
        </div>

        <div class="cart-item">
          <div class="shop">
            <input type="checkbox" checked />
            <span class="shop-name">Tiki Trading</span>
          </div>

          <div class="item-content">
            <input type="checkbox" checked />
            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/4a/35/df/ba33b54b9294c06736fa59c478cb944d.jpg" alt="Book" />

            <div class="item-info">
              <p class="title">Sách Trò Chơi Vương Quyền 3C - Tử Hôn (Tái Bản 2019)</p>
              <p class="note">Có thể bọc bằng Bookcare</p>
            </div>

            <div class="item-price">
              <span class="current">142.400₫</span>
              <span class="old">199.000₫</span>
            </div>

            <div class="item-quantity">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </div>

            <div class="item-total">142.400₫</div>
          </div>
        </div>

        <div class="cart-promo">
          <i class="bi bi-plus-circle"></i> Thêm mã khuyến mãi của Shop
        </div>

        <div class="cart-freeship">
          <i class="bi bi-truck"></i> Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k
        </div>
      </div>

      <div class="cart-right">
        <div class="promo-box">
          <div class="promo-header">
            <strong>Tiki Khuyến Mãi</strong>
            <span>Có thể chọn 2</span>
          </div>
          <div class="promo-item">
            <div class="icon"><i class="bi bi-truck-flatbed"></i></div>
            <div class="text">Giảm 50K</div>
            <button class="select-btn">Bỏ chọn</button>
          </div>
        </div>

        <div class="summary">
          <div class="row">
            <span>Tổng tiền hàng</span>
            <span>199.000₫</span>
          </div>
          <div class="row">
            <span>Giảm giá trực tiếp</span>
            <span class="discount">-56.600₫</span>
          </div>
          <hr />
          <div class="row total">
            <strong>Tổng tiền thanh toán</strong>
            <strong class="price">142.400₫</strong>
          </div>
          <p class="save">Tiết kiệm 56.600₫</p>

          <button class="buy-btn">Mua Hàng (1)</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  font-family: "Arial", sans-serif;
  background: #f8f8fc;
  padding: 20px 60px;
  color: #333;
}

h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

.cart-container {
  display: flex;
  gap: 20px;
}

.cart-left {
  flex: 2;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 12px;
}

.header-right {
  display: flex;
  gap: 60px;
}

.cart-item {
  border-top: 1px solid #eee;
  padding-top: 12px;
}

.shop {
  font-weight: 600;
  margin-bottom: 10px;
}

.item-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-content img {
  width: 70px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.item-info {
  flex: 1;
}

.item-info .title {
  font-weight: 600;
  margin: 0;
}

.item-info .note {
  color: #777;
  font-size: 13px;
}

.item-price {
  width: 100px;
  text-align: right;
}

.item-price .current {
  color: #e53935;
  font-weight: 600;
}

.item-price .old {
  text-decoration: line-through;
  color: #999;
  font-size: 13px;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 90px;
  justify-content: center;
}

.item-quantity button {
  border: 1px solid #ccc;
  background: white;
  width: 25px;
  height: 25px;
  border-radius: 4px;
}

.item-quantity input {
  width: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.item-total {
  color: #e53935;
  font-weight: 600;
  width: 80px;
  text-align: right;
}

.cart-promo,
.cart-freeship {
  margin-top: 12px;
  font-size: 14px;
}

.cart-freeship {
  color: #008000;
}

.cart-right {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  height: fit-content;
}

.promo-box {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.promo-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.promo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f8ff;
  border: 1px solid #cce3ff;
  border-radius: 6px;
  padding: 10px;
}

.promo-item .icon {
  font-size: 22px;
}

/* Thêm style để icon Bootstrap hiển thị đúng kích thước */
.cart-promo .bi {
  font-size: 16px;
  color: #007bff; /* Màu xanh cho icon */
  margin-right: 4px;
}
.cart-freeship .bi {
  font-size: 16px;
  color: #008000; /* Màu xanh lá cây cho icon */
  margin-right: 4px;
}
.promo-item .icon .bi {
  font-size: 22px;
  color: #007bff;
}

.select-btn {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 5px 12px;
  cursor: pointer;
}

.summary .row {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
}

.summary .discount {
  color: #00a000;
}

.summary .total .price {
  color: #e53935;
  font-size: 20px;
}

.save {
  text-align: right;
  color: #00a000;
  margin-bottom: 10px;
}

.buy-btn {
  width: 100%;
  background: #1a9cff; /* Màu xanh da trời Tiki */
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;
}

.buy-btn:hover {
  background: #008ee6; /* Màu xanh đậm hơn khi hover */
}
</style>