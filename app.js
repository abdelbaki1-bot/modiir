/* إعدادات المتجر التي قد تحتاج إلى تغييرها */
const STORE_NAME = "MODiiR";
const PHONE = "213000000000";
const SOCIAL_LINKS = { instagram: "", facebook: "", tiktok: "" };

/* بيانات آراء فارغة عمدًا؛ يُخفى القسم حتى تُضاف آراء حقيقية. */
const REVIEWS = [];
const CATEGORIES = [
  { name: "هواتف", icon: "phone" },
  { name: "إكسسوارات", icon: "accessories" },
  { name: "عطور", icon: "bottle" },
  { name: "هدايا", icon: "gift" },
  { name: "ورود", icon: "flower" },
  { name: "حلويات وشوكولاتة", icon: "candy" }
];
const FALLBACK_IMAGE = "images/fallback.svg";
const STORAGE_KEYS = { cart: "modiir-cart-v1", favorites: "modiir-favorites-v1" };

const ICONS = {
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
  heart: '<path d="M20.8 8.6c0 5.3-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.6A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z"></path>',
  cart: '<path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 1.9-1.4L20 8H6"></path><circle cx="10" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"></rect><path d="M10 5h4M11 18.5h2"></path>',
  accessories: '<path d="M8 3v6a4 4 0 0 0 8 0V3M6 3h4M14 3h4M12 13v4a4 4 0 0 0 8 0v-2"></path><circle cx="20" cy="13" r="1"></circle>',
  bottle: '<path d="M9 3h6v3l2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2V3Z"></path><path d="M9 6h6m-8 5h10"></path>',
  gift: '<path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15"></path><path d="M12 6H7.5a2.5 2.5 0 1 1 2.2-3.7L12 6Zm0 0h4.5a2.5 2.5 0 1 0-2.2-3.7L12 6Z"></path>',
  flower: '<path d="M12 21v-8m0 0c-4 0-6-2.5-6-5.5 3.4 0 5.4 1.5 6 4.5m0 1c4 0 6-2.5 6-5.5-3.4 0-5.4 1.5-6 4.5"></path><circle cx="12" cy="5" r="2"></circle><path d="M9.5 4a2 2 0 1 1 3.4-1.4A2 2 0 1 1 16.5 4a2 2 0 1 1-1.4 3.4A2 2 0 1 1 11.7 9 2 2 0 1 1 9.5 4Z"></path>',
  candy: '<path d="m8 8-4-4-2 2 4 4m8 8 4 4 2-2-4-4"></path><path d="M8 8a5.7 5.7 0 0 1 8 0l0 0a5.7 5.7 0 0 1 0 8l0 0a5.7 5.7 0 0 1-8 0l0 0a5.7 5.7 0 0 1 0-8Z"></path>',
  'arrow-left': '<path d="M5 12h14m-6-6 6 6-6 6"></path>',
  'arrow-right': '<path d="M19 12H5m6 6-6-6 6-6"></path>',
  close: '<path d="m18 6-12 12M6 6l12 12"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  minus: '<path d="M5 12h14"></path>',
  trash: '<path d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3"></path>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.8-.9L4 20l1.3-3.2A7 7 0 0 1 4 12c0-4.1 3.6-7.5 8-7.5s8 3.1 8 7Z"></path><path d="M8 11h8m-8 3h5"></path>',
  box: '<path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z"></path><path d="m4 7 8 4 8-4M12 11v10"></path>',
  clipboard: '<rect x="5" y="5" width="14" height="17" rx="2"></rect><path d="M9 5V3h6v2M8 10h8m-8 4h8m-8 4h5"></path>',
  headset: '<path d="M4 13v-2a8 8 0 0 1 16 0v2"></path><rect x="3" y="12" width="4" height="7" rx="2"></rect><rect x="17" y="12" width="4" height="7" rx="2"></rect><path d="M18 20a6 6 0 0 1-5 2h-1"></path>',
  whatsapp: '<path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.6A8.5 8.5 0 1 1 20.5 11.7Z"></path><path d="M8 8.2c.5 2.9 2.8 5.3 5.8 6l1.1-1.2 2 .9c-.3 1.4-1.3 2.2-2.7 2.2-3.7-.6-6.8-3.8-7.3-7.4 0-1.2.8-2.1 2-2.4l1 2-1.1 1Z"></path>'
};

function icon(name, className = "") {
  const shape = ICONS[name] || ICONS.grid;
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${shape}</svg>`;
}
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function safeRead(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch (_) { return fallback; }
}
function safeWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (_) { showToast("تعذّر حفظ التغيير على هذا الجهاز."); }
}

const products = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
const savedCart = safeRead(STORAGE_KEYS.cart, {});
let cart = savedCart && typeof savedCart === "object" && !Array.isArray(savedCart) ? savedCart : {};
const savedFavorites = safeRead(STORAGE_KEYS.favorites, []);
let favorites = new Set(Array.isArray(savedFavorites) ? savedFavorites : []);
let activeCategory = "الكل";
let searchTerm = "";
let showFavoritesOnly = false;
let toastTimer;

const els = {
  categoryTrack: document.getElementById("category-track"),
  productTrack: document.getElementById("product-track"),
  productViewport: document.getElementById("product-viewport"),
  productsEmpty: document.getElementById("products-empty"),
  filterStatus: document.getElementById("filter-status"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartBackdrop: document.getElementById("drawer-backdrop"),
  cartItems: document.getElementById("cart-items"),
  cartEmpty: document.getElementById("cart-empty"),
  cartCheckout: document.getElementById("cart-checkout"),
  toast: document.getElementById("toast")
};

function displayPrice(price) {
  if (typeof price !== "number" || !Number.isFinite(price)) return "اسأل عن السعر";
  return `${new Intl.NumberFormat("ar-DZ").format(price)} دج`;
}
function filteredProducts() {
  return products.filter(product => {
    const matchesCategory = activeCategory === "الكل" || product.category === activeCategory;
    const searchString = `${product.name} ${product.category}`.toLocaleLowerCase("ar");
    const matchesSearch = !searchTerm || searchString.includes(searchTerm.toLocaleLowerCase("ar"));
    const matchesFavorite = !showFavoritesOnly || favorites.has(product.id);
    return matchesCategory && matchesSearch && matchesFavorite;
  });
}
function renderCategories() {
  const buttons = CATEGORIES.map(item => `
    <button class="category-button ${activeCategory === item.name ? "is-active" : ""}" type="button" data-category="${escapeHTML(item.name)}" aria-pressed="${activeCategory === item.name}">
      <span class="category-icon">${icon(item.icon)}</span><span class="category-label">${escapeHTML(item.name)}</span>
    </button>`).join("");
  els.categoryTrack.innerHTML = `${buttons}<button class="category-button view-all ${activeCategory === "الكل" ? "is-active" : ""}" type="button" data-category="الكل" aria-pressed="${activeCategory === "الكل"}"><span class="category-icon">${icon("grid")}</span><span class="category-label">عرض الكل</span></button>`;
}
function renderProducts() {
  const visible = filteredProducts();
  els.productTrack.innerHTML = visible.map(product => {
    const available = product.available === true;
    const favorite = favorites.has(product.id);
    return `<article class="product-card" data-product-id="${escapeHTML(product.id)}">
      <button class="favorite-button ${favorite ? "is-favorite" : ""}" type="button" data-favorite="${escapeHTML(product.id)}" aria-label="${favorite ? "إزالة من المفضلة" : "أضف إلى المفضلة"}" aria-pressed="${favorite}">${icon("heart")}</button>
      ${available ? "" : `<span class="product-status unavailable">غير متوفر</span>`}
      <div class="product-image image-frame"><img src="${escapeHTML(product.image || FALLBACK_IMAGE)}" alt="${escapeHTML(product.name)}" loading="lazy"></div>
      <div class="product-info"><h3 class="product-name">${escapeHTML(product.name)}</h3>
        <div class="product-bottom"><span class="product-price">${displayPrice(product.price)}</span><button class="add-cart" type="button" data-add="${escapeHTML(product.id)}" aria-label="أضف ${escapeHTML(product.name)} إلى السلة" ${available ? "" : "disabled"}>${icon("cart")}</button></div>
      </div>
    </article>`;
  }).join("");
  els.productsEmpty.hidden = visible.length > 0;
  els.productViewport.hidden = visible.length === 0;
  els.filterStatus.textContent = showFavoritesOnly ? "المفضلة" : activeCategory !== "الكل" ? activeCategory : "";
  els.productTrack.querySelectorAll("img").forEach(attachImageFallback);
  els.productTrack.scrollTo({ left: 0, behavior: "auto" });
  renderCategories();
  updateHeaderCounts();
}
function attachImageFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "true";
    img.src = FALLBACK_IMAGE;
  }, { once: true });
}
function updateHeaderCounts() {
  const count = Object.values(cart).reduce((sum, qty) => sum + Number(qty || 0), 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("drawer-count").textContent = `(${count})`;
  document.getElementById("favorite-count").textContent = favorites.size;
}
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2300);
}
function setCategory(category) {
  activeCategory = category;
  showFavoritesOnly = false;
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
}
function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product || product.available !== true) return;
  cart[id] = (Number(cart[id]) || 0) + 1;
  safeWrite(STORAGE_KEYS.cart, cart);
  renderCart();
  updateHeaderCounts();
  showToast("أُضيف المنتج إلى السلة.");
}
function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  safeWrite(STORAGE_KEYS.favorites, [...favorites]);
  renderProducts();
}
function renderCart() {
  const entries = Object.entries(cart).filter(([, qty]) => Number(qty) > 0);
  const count = entries.reduce((sum, [, qty]) => sum + Number(qty), 0);
  els.cartEmpty.hidden = count > 0;
  els.cartItems.hidden = count === 0;
  els.cartCheckout.hidden = count === 0;
  els.cartItems.innerHTML = entries.map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    if (!product) return "";
    return `<article class="cart-row">
      <img src="${escapeHTML(product.image || FALLBACK_IMAGE)}" alt="" loading="lazy">
      <div><h3>${escapeHTML(product.name)}</h3><p>${displayPrice(product.price)}</p>
        <div class="quantity-control"><button type="button" data-qty="${escapeHTML(id)}" data-change="-1" aria-label="إنقاص الكمية">${icon("minus")}</button><span>${Number(qty)}</span><button type="button" data-qty="${escapeHTML(id)}" data-change="1" aria-label="زيادة الكمية">${icon("plus")}</button></div>
      </div><button class="remove-item" type="button" data-remove="${escapeHTML(id)}" aria-label="حذف المنتج">${icon("trash")}</button>
    </article>`;
  }).join("");
  els.cartItems.querySelectorAll("img").forEach(attachImageFallback);
  const allPricesKnown = entries.every(([id]) => {
    const product = products.find(item => item.id === id);
    return typeof product?.price === "number" && Number.isFinite(product.price);
  });
  const total = allPricesKnown ? entries.reduce((sum, [id, qty]) => sum + products.find(item => item.id === id).price * Number(qty), 0) : null;
  document.getElementById("cart-total").textContent = total === null ? "يُحدّد بعد تأكيد الأسعار" : displayPrice(total);
  updateHeaderCounts();
}
function changeQuantity(id, delta) {
  const next = (Number(cart[id]) || 0) + delta;
  if (next <= 0) delete cart[id]; else cart[id] = next;
  safeWrite(STORAGE_KEYS.cart, cart);
  renderCart();
}
function openCart() {
  els.cartBackdrop.hidden = false;
  els.cartDrawer.classList.add("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-visible");
  document.getElementById("cart-close").focus();
}
function closeCart() {
  els.cartDrawer.classList.remove("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  els.cartBackdrop.hidden = true;
  document.body.classList.remove("drawer-visible");
}
function sendOrder() {
  const name = document.getElementById("customer-name").value.trim();
  const wilaya = document.getElementById("customer-wilaya").value.trim();
  if (!name || !wilaya) {
    showToast("اكتب اسمك والولاية لإكمال رسالة الطلب.");
    (!name ? document.getElementById("customer-name") : document.getElementById("customer-wilaya")).focus();
    return;
  }
  const entries = Object.entries(cart).filter(([, qty]) => Number(qty) > 0);
  if (!entries.length) { showToast("السلة فارغة."); return; }
  const lines = entries.map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    return `- ${product.name} × ${Number(qty)} — ${displayPrice(product.price)}`;
  });
  const allPricesKnown = entries.every(([id]) => typeof products.find(item => item.id === id)?.price === "number");
  const total = allPricesKnown
    ? `المجموع: ${displayPrice(entries.reduce((sum, [id, qty]) => sum + products.find(item => item.id === id).price * Number(qty), 0))}`
    : "المجموع: يُحدّد بعد تأكيد أسعار المنتجات.";
  const message = `السلام عليكم، أود الاستفسار وتأكيد هذا الطلب من ${STORE_NAME}:\n\n${lines.join("\n")}\n\n${total}\nاسم الزبون: ${name}\nالولاية: ${wilaya}`;
  const digits = PHONE.replace(/\D/g, "");
  if (!digits || digits === "213000000000") {
    showToast("عدّل رقم واتساب في أعلى app.js قبل إرسال الطلب.");
    return;
  }
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function initHeroSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = document.getElementById("hero-dots");
  let current = 0;
  dots.innerHTML = slides.map((_, index) => `<button class="hero-dot ${index === 0 ? "is-active" : ""}" type="button" aria-label="عرض الشريحة ${index + 1}" aria-pressed="${index === 0}" data-dot="${index}"></button>`).join("");
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.classList.toggle("is-active", i === current); slide.setAttribute("aria-hidden", String(i !== current)); });
    dots.querySelectorAll(".hero-dot").forEach((dot, i) => { dot.classList.toggle("is-active", i === current); dot.setAttribute("aria-pressed", String(i === current)); });
  };
  document.getElementById("hero-prev").addEventListener("click", () => show(current - 1));
  document.getElementById("hero-next").addEventListener("click", () => show(current + 1));
  dots.addEventListener("click", event => { const dot = event.target.closest("[data-dot]"); if (dot) show(Number(dot.dataset.dot)); });
  let startX = 0;
  const slider = document.getElementById("hero-slider");
  slider.addEventListener("touchstart", event => { startX = event.changedTouches[0].clientX; }, { passive: true });
  slider.addEventListener("touchend", event => { const dx = event.changedTouches[0].clientX - startX; if (Math.abs(dx) > 45) show(current + (dx > 0 ? 1 : -1)); }, { passive: true });
}
function scrollProductSlider(direction) {
  const card = els.productTrack.querySelector(".product-card");
  if (!card) return;
  const gap = parseFloat(getComputedStyle(els.productTrack).columnGap) || 14;
  const delta = (card.getBoundingClientRect().width + gap) * 2 * direction;
  els.productViewport.scrollBy({ left: document.documentElement.dir === "rtl" ? -delta : delta, behavior: "smooth" });
}
function setupSocialLinks() {
  const node = document.getElementById("social-links");
  const socialIcons = { instagram: "◎", facebook: "f", tiktok: "♪" };
  const available = Object.entries(SOCIAL_LINKS).filter(([, url]) => /^https?:\/\//i.test(url));
  node.innerHTML = available.map(([name, url]) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(name)}">${socialIcons[name]}</a>`).join("");
  if (!available.length) node.hidden = true;
}
function initReviews() {
  const section = document.getElementById("reviews");
  if (!REVIEWS.length) { section.hidden = true; return; }
  section.hidden = false;
  document.getElementById("reviews-track").innerHTML = REVIEWS.map(review => `<article class="review-card"><div><strong>${escapeHTML(review.name)}</strong><p>${escapeHTML(review.text)}</p></div></article>`).join("");
}

/* أحداث الصفحة */
document.addEventListener("click", event => {
  const category = event.target.closest("[data-category]");
  if (category) setCategory(category.dataset.category);
  const add = event.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) toggleFavorite(favorite.dataset.favorite);
  const qty = event.target.closest("[data-qty]");
  if (qty) changeQuantity(qty.dataset.qty, Number(qty.dataset.change));
  const remove = event.target.closest("[data-remove]");
  if (remove) changeQuantity(remove.dataset.remove, -Number(cart[remove.dataset.remove] || 0));
  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    event.preventDefault();
    setCategory(categoryLink.dataset.categoryLink);
  }
});

document.getElementById("search-form").addEventListener("submit", event => { event.preventDefault(); searchTerm = document.getElementById("search-input").value.trim(); renderProducts(); document.getElementById("products").scrollIntoView({ behavior: "smooth" }); });
document.getElementById("search-input").addEventListener("input", event => { searchTerm = event.target.value.trim(); renderProducts(); });
document.getElementById("show-all-products").addEventListener("click", () => { activeCategory = "الكل"; showFavoritesOnly = false; searchTerm = ""; document.getElementById("search-input").value = ""; renderProducts(); });
document.getElementById("favorites-shortcut").addEventListener("click", () => { showFavoritesOnly = true; activeCategory = "الكل"; renderProducts(); document.getElementById("products").scrollIntoView({ behavior: "smooth" }); });
document.getElementById("nav-categories").addEventListener("click", () => document.getElementById("categories").scrollIntoView({ behavior: "smooth" }));
document.getElementById("products-next").addEventListener("click", () => scrollProductSlider(1));
document.getElementById("products-prev").addEventListener("click", () => scrollProductSlider(-1));
document.getElementById("cart-open").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
document.getElementById("continue-shopping").addEventListener("click", closeCart);
els.cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", event => { if (event.key === "Escape" && els.cartDrawer.classList.contains("is-open")) closeCart(); });
document.getElementById("checkout-whatsapp").addEventListener("click", sendOrder);
document.getElementById("whatsapp-float").addEventListener("click", () => {
  const digits = PHONE.replace(/\D/g, "");
  if (!digits || digits === "213000000000") { showToast("عدّل رقم واتساب في أعلى app.js لإتاحة التواصل."); return; }
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن منتجات ${STORE_NAME}.`)}`, "_blank", "noopener,noreferrer");
});
document.getElementById("footer-whatsapp").addEventListener("click", event => {
  event.preventDefault();
  const digits = PHONE.replace(/\D/g, "");
  if (!digits || digits === "213000000000") { showToast("عدّل رقم واتساب في أعلى app.js لإتاحة التواصل."); return; }
  window.open(`https://wa.me/${digits}`, "_blank", "noopener,noreferrer");
});
document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("newsletter-message").textContent = "لم يُرسل البريد؛ يلزم ربط نموذج الاشتراك بخدمة بريدية أولًا.";
});

/* معالجة الأيقونات والصور المحلية غير الموجودة. */
document.querySelectorAll("[data-icon]").forEach(node => { node.innerHTML = icon(node.dataset.icon); });
document.querySelectorAll("img").forEach(attachImageFallback);
renderProducts();
renderCart();
initHeroSlider();
initReviews();
setupSocialLinks();
document.getElementById("current-year").textContent = new Date().getFullYear();
document.title = `${STORE_NAME} | متجر متنوع`;
