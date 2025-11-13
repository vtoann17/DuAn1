<script setup>
import { ref } from 'vue'
// Đã xóa import Lucide Vue Next

// Thay thế các biến icon bằng tên class Bootstrap Icons
const iconMap = {
    Truck: 'bi-truck',
    CreditCard: 'bi-credit-card',
    Info: 'bi-info-circle',
    ChevronRight: 'bi-chevron-right',
    Promo: 'bi-ticket-detailed',
    Warning: 'bi-exclamation-triangle',
    Phone: 'bi-phone',
    Cash: 'bi-cash',
    Momo: 'bi-circle-fill', // Tùy chọn icon cho Momo
    Zalopay: 'bi-circle-fill', // Tùy chọn icon cho ZaloPay
    Product: 'bi-phone-fill' // Icon cho sản phẩm
}

const deliveryMethod = ref('economical')
const paymentMethod = ref('cash')

const orderData = {
    product: {
        name: 'Điện thoại Samsung Galaxy A06 5G (4/128GB), Màn hình 6.7", Pin 5000mAh',
        image: iconMap.Product, // Đã thay thế emoji
        quantity: 1,
        originalPrice: 3920000,
        price: 2750000
    },
    shipping: {
        method: 'TikiNOW Smart Logistics',
        from: 'Hà Nội',
        date: 'Giao thứ 2, trước 19h, 10/11',
        fee: 28700,
        feeDiscount: -28700
    },
    customer: {
        name: 'Hoàng Quyền',
        phone: '0383983952',
        address: 'Văn phòng - Trường mầm non Mỏ, Thị trấn Na Dương, Huyện Lộc Bình, Lạng Sơn'
    },
    discount: {
        direct: -1170000,
        shipping: -28700
    },
    total: 2750000,
    saved: 1198700
}

const paymentOptions = [
    { id: 'cash', name: 'Thanh toán tiền mặt khi nhận hàng', icon: iconMap.Cash }, // Đã thay thế emoji
    { id: 'momo', name: 'Ví Momo', icon: iconMap.Momo }, // Đã thay thế emoji
    { id: 'zalopay', name: 'ZaloPay', icon: iconMap.Zalopay }, // Đã thay thế emoji
    { id: 'card', name: 'Thẻ tín dụng / Ghi nợ', icon: iconMap.CreditCard } // Đã thay thế emoji/Lucide
]

// Promotions state
const selectedPromos = ref([
    { id: 'shop50k', title: 'Giảm 50K', desc: 'Ưu đãi từ Shop', active: true }
])
const availablePromos = ref([
    { id: 'shop50k', title: 'Giảm 50K', desc: 'Áp dụng cho đơn hàng', type: 'shipping' },
    { id: 'sale10', title: 'Giảm 10%', desc: 'Ưu đãi mùa sale', type: 'direct' }
])

const promoInput = ref('')
const appliedPromo = ref(selectedPromos.value.length ? selectedPromos.value[0] : null)

function applyPromoCode() {
    if (!promoInput.value.trim()) return
    // demo: giả lập áp dụng nếu nhập "GIAM50" thì apply 50k
    if (promoInput.value.trim().toUpperCase() === 'GIAM50') {
        appliedPromo.value = { id: 'manual-GIAM50', title: 'Giảm 50K (mã GIAM50)', desc: 'Mã nhập tay' }
    } else {
        appliedPromo.value = { id: 'manual', title: 'Mã không hợp lệ', desc: 'Không thể áp dụng' }
    }
    promoInput.value = ''
}

function removeAppliedPromo() {
    appliedPromo.value = null
}
</script>

<template>
    <div class="payment-container">
        <div class="left">
            <div class="section">
                <h2>Chọn hình thức giao hàng</h2>

                <label class="radio-box" tabindex="0">
                    <input type="radio" v-model="deliveryMethod" value="economical" />
                    <div class="radio-content">
                        <div class="product-preview">
                            <div class="product-img"><i :class="['bi', orderData.product.image]"></i></div>
                            <div class="product-info">
                                <div class="product-name">{{ orderData.product.name }}</div>
                                <div class="product-price">
                                    <span class="old">{{ orderData.product.originalPrice.toLocaleString() }}₫</span>
                                    <span class="new">{{ orderData.product.price.toLocaleString() }}₫</span>
                                    <span class="qty">x{{ orderData.product.quantity }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="delivery-info">
                            <div class="radio-title">Giao tiết kiệm</div>
                            <div class="radio-sub">
                                <i :class="['bi', iconMap.Truck]" class="icon"></i>
                                <span>{{ orderData.shipping.date }}</span>
                            </div>
                            <div class="price-line">
                                <span class="strike">{{ orderData.shipping.fee.toLocaleString() }}₫</span>
                                <span class="free">MIỄN PHÍ</span>
                            </div>
                            <div class="info-line">
                                <i :class="['bi', iconMap.Info]" class="icon-small"></i>
                                <span>Được giao bởi {{ orderData.shipping.method }} (từ {{ orderData.shipping.from
                                }})</span>
                            </div>
                        </div>
                    </div>
                </label>

                <button class="promo-shop-btn" title="Thêm mã khuyến mãi của Shop">
                    <i :class="['bi', iconMap.Promo]" class="promo-btn-icon"></i> Thêm mã khuyến mãi của Shop
                    <i :class="['bi', iconMap.ChevronRight]" class="chev"></i>
                </button>
            </div>



            <div class="section">
                <h2>Chọn hình thức thanh toán</h2>

                <div v-for="option in paymentOptions" :key="option.id" class="radio-box">
                    <input type="radio" v-model="paymentMethod" :value="option.id" />
                    <div class="radio-content-row">
                        <div class="left-inline">
                            <i :class="['bi', option.icon]" class="emoji"></i>
                            <div>
                                <div class="opt-name">{{ option.name }}</div>
                            </div>
                        </div>
                        <div class="right-inline">
                            <span class="text-muted" v-if="option.id === 'card'">Visa, Mastercard, JCB</span>
                        </div>
                    </div>
                </div>

                <div v-if="paymentMethod === 'card'" class="card-section">
                    <div class="card-offer">
                        <i :class="['bi', iconMap.CreditCard]" class="icon-small"></i>
                        <div>
                            <div class="small-bold">Ưu đãi thanh toán thẻ</div>
                            <div class="small-muted">Xem các ưu đãi khi thanh toán bằng thẻ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="section">
                <div class="header-line">
                    <h3>Giao tới</h3>
                    <button class="link-btn">Thay đổi</button>
                </div>
                <p><b>{{ orderData.customer.name }}</b> | {{ orderData.customer.phone }}</p>
                <p class="address">{{ orderData.customer.address }}</p>
                <div class="note">Lưu ý: Sử dụng địa chỉ nhận hàng trước sáp nhập</div>
            </div>

            <div class="section">
                <div class="promo-header">
                    <span class="bold">Tiki Khuyến Mãi</span>
                    <span class="muted">Có thể chọn 2 <i :class="['bi', iconMap.Info]" class="info-mini"></i></span>
                </div>

                <div v-if="appliedPromo" class="selected-promo">
                    <div class="promo-left">
                        <i :class="['bi', iconMap.Truck]" class="promo-icon"></i>
                        <div>
                            <div class="promo-title">{{ appliedPromo.title }}</div>
                            <div class="promo-desc">{{ appliedPromo.desc }}</div>
                        </div>
                    </div>
                    <div class="promo-actions">
                        <button class="ghost-btn" @click="removeAppliedPromo">Bỏ Chọn</button>
                    </div>
                </div>

                <div class="promo-input-row">
                    <input v-model="promoInput" placeholder="Nhập mã khuyến mãi" />
                    <button class="apply-btn" @click="applyPromoCode">Áp dụng</button>
                </div>

                <div class="promo-list">
                    <div v-for="p in availablePromos" :key="p.id" class="promo-item">
                        <div>
                            <div class="promo-title">{{ p.title }}</div>
                            <div class="promo-desc">{{ p.desc }}</div>
                        </div>
                        <div>
                            <button class="choose-btn" @click="appliedPromo = p">Chọn</button>
                        </div>
                    </div>
                </div>

                <button class="full-btn" title="Chọn hoặc nhập mã khác">
                    Chọn hoặc nhập mã khác
                    <i :class="['bi', iconMap.ChevronRight]" class="chev"></i>
                </button>
            </div>

            <div class="section small-info">
                <div class="muted">Thứ ngày: Giảm giá cho đơn hàng bằng ASA</div>
                <div class="warn-row">
                    <span class="warn"><i :class="['bi', iconMap.Warning]"></i></span>
                    <div>
                        <div class="small-bold">Chưa áp dụng giảm giá</div>
                        <div class="small-muted">Vì chưa đạt đủ số lượng ASA</div>
                    </div>
                </div>
                <div class="warn-row">
                    <span class="warn"><i :class="['bi', iconMap.Warning]"></i></span>
                    <div>
                        <div class="small-bold">Chưa áp dụng giảm giá</div>
                        <div class="small-muted">Vì số hữu chưa đủ tối thiểu 1000 Xu</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="summary-head">
                    <h3>Đơn hàng</h3>
                    <button class="link-btn">Thay đổi</button>
                </div>
                <div class="muted mb">1 sản phẩm. <button class="link-inline">Xem thông tin</button></div>

                <div class="summary-row">
                    <span class="muted">Tổng tiền hàng</span>
                    <span>{{ orderData.product.originalPrice.toLocaleString() }}₫</span>
                </div>
                <div class="summary-row">
                    <span class="muted">Phí vận chuyển</span>
                    <span>{{ orderData.shipping.fee.toLocaleString() }}₫</span>
                </div>
                <div class="summary-row green">
                    <span>Giảm giá trực tiếp</span>
                    <span>{{ orderData.discount.direct.toLocaleString() }}₫</span>
                </div>
                <div class="summary-row green">
                    <span class="flex-center">Giảm giá vận chuyển
                        <i :class="['bi', iconMap.Info]" class="info-mini"></i>
                    </span>
                    <span>{{ orderData.discount.shipping.toLocaleString() }}₫</span>
                </div>

                <div class="summary-total">
                    <span class="big">Tổng tiền thanh toán</span>
                    <span class="total">{{ orderData.total.toLocaleString() }}₫</span>
                </div>
                <div class="save-text">Tiết kiệm {{ orderData.saved.toLocaleString() }}₫</div>

                <button class="order-btn">Đặt hàng</button>
            </div>
        </div>
    </div>
</template>

<style>
/* Container */

.payment-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 22px;
    background: #f6f7fb;
    padding: 22px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    color: #222;
}

/* Left / Right column */
.left,
.right {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Card/section */
.section {
    background: #fff;
    border-radius: 10px;
    padding: 16px;
    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);
}

/* Headings */
.section h2 {
    font-size: 16px;
    margin-bottom: 12px;
    color: #111827;
}

.section h3 {
    font-size: 15px;
    margin: 0 0 8px 0;
    color: #111827;
}

/* Radio box */
.radio-box {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    border: 1px solid #e5e7eb;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: border-color .15s ease, box-shadow .15s ease;
}

.radio-box:hover {
    border-color: #3b82f6;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);
}

.radio-box input[type="radio"] {
    margin-top: 4px;
}

/* Radio content */
.radio-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.radio-content-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.left-inline {
    display: flex;
    gap: 10px;
    align-items: center;
}

.right-inline {
    font-size: 13px;
    color: #6b7280;
}

/* Titles */
.radio-title {
    font-weight: 600;
    color: #111827;
}

.radio-sub {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #6b7280;
    font-size: 13px;
}

.price-line {
    margin-top: 6px;
    font-size: 14px;
}

.strike {
    text-decoration: line-through;
    color: #9ca3af;
    margin-right: 6px;
}

.free {
    color: #059669;
    font-weight: 700;
}

/* Info line */
.info-line {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    font-size: 13px;
}

/* icon sizes */
.icon {
    width: 18px;
    height: 18px;
    color: #059669;
}

/* Thêm style cho icon Bootstrap */
.icon.bi {
    width: auto;
    height: auto;
    font-size: 18px;
}


.icon-small {
    width: 14px;
    height: 14px;
    color: #6b7280;
}

/* Thêm style cho icon Bootstrap */
.icon-small.bi {
    width: auto;
    height: auto;
    font-size: 14px;
}

.promo-icon {
    width: 28px;
    height: 28px;
    color: #059669;
}

/* Thêm style cho icon Bootstrap */
.promo-icon.bi {
    width: auto;
    height: auto;
    font-size: 28px;
}

/* Buttons */
.promo-shop-btn {
    margin-top: 10px;
    background: none;
    border: none;
    color: #2563eb;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.promo-btn-icon.bi {
    font-size: 16px;
    color: #2563eb;
}

.chev {
    width: 14px;
    height: 14px;
    color: #2563eb;
}

/* Thêm style cho icon Bootstrap */
.chev.bi {
    width: auto;
    height: auto;
    font-size: 14px;
}

/* Payment options */
.emoji {
    font-size: 18px
}

/* Thêm style cho icon Bootstrap */
.emoji.bi {
    font-size: 18px;
    /* Điều chỉnh màu cho Momo/Zalopay */
    color: initial;
}

.emoji.bi-circle-fill:nth-child(1) {
    color: #ae00ff;
    /* Momo color */
}

.emoji.bi-circle-fill:nth-child(2) {
    color: #0087ff;
    /* Zalopay color */
}

/* Card offer */
.card-section {
    margin-top: 12px;
    border-top: 1px solid #eef2f7;
    padding-top: 12px;
}

.card-offer {
    display: flex;
    gap: 8px;
    align-items: center;
    background: #eef2ff;
    padding: 10px;
    border-radius: 8px;
    color: #0f172a;
}

/* Right column specifics */
.header-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.link-btn {
    background: none;
    border: none;
    color: #2563eb;
    cursor: pointer;
    font-weight: 600;
}

/* Promo area */
.promo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.bold {
    font-weight: 700;
}

.muted {
    color: #6b7280;
    font-size: 13px;
}

/* Info icon trong promo header */
.muted .info-mini.bi {
    font-size: 14px;
    margin-left: 4px;
    color: #6b7280;
}


.selected-promo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ecfdf5;
    border: 1px solid #bbf7d0;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
}

.promo-left {
    display: flex;
    gap: 10px;
    align-items: center;
}

.promo-title {
    font-weight: 700;
    color: #065f46;
}

.promo-desc {
    color: #065f46;
    font-size: 13px;
}

.promo-actions .ghost-btn {
    background: none;
    border: none;
    color: #2563eb;
    cursor: pointer;
    font-weight: 600;
}

/* promo input */
.promo-input-row {
    display: flex;
    gap: 8px;
    margin: 8px 0 12px 0;
}

.promo-input-row input {
    flex: 1;
    padding: 8px 10px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
}

.apply-btn {
    background: #059669;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
}

/* promo list */
.promo-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
}

.promo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eef2f7;
    padding: 10px;
    border-radius: 8px;
}

.choose-btn {
    background: #2563eb;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
}

/* full button */
.full-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    margin-top: 6px;
}

/* discount info */
.small-info .muted {
    margin-bottom: 8px;
}

.warn-row {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-top: 8px;
}

.warn {
    font-size: 16px;
    color: #f59e0b;
}

/* Thay thế emoji ⚠️ bằng icon Bootstrap */
.warn .bi {
    font-size: 16px;
    color: #f59e0b;
}

.small-bold {
    font-weight: 600;
}

.small-muted {
    color: #6b7280;
    font-size: 13px;
}

/* Order summary */
.summary-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mb {
    margin-bottom: 8px;
}

.link-inline {
    background: none;
    border: none;
    color: #2563eb;
    cursor: pointer;
    padding: 0;
    font-weight: 600;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    color: #374151;
    font-size: 14px;
}

.green {
    color: #059669;
}

.info-mini {
    width: 14px;
    height: 14px;
    color: #6b7280;
    margin-left: 6px;
}

/* Thêm style cho icon Bootstrap */
.info-mini.bi {
    width: auto;
    height: auto;
    font-size: 14px;
    color: #6b7280;
}

.summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eef2f7;
    font-weight: 700;
    font-size: 16px;
}

.total {
    color: #b91c1c;
    font-size: 20px;
    font-weight: 800;
}

.save-text {
    text-align: right;
    color: #059669;
    margin-top: 6px;
    font-size: 13px;
}

/* Order button */
.order-btn {
    width: 100%;
    padding: 12px;
    background: #ef4444;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 12px;
}

.order-btn:hover {
    background: #dc2626;
}

/* Responsive */
@media (max-width: 900px) {
    .payment-container {
        grid-template-columns: 1fr;
        padding: 14px;
    }
}
</style>
