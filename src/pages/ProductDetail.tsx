import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import { PRODUCTS } from "../constants";
import type { Product } from "../../types";
import { Facebook, Instagram, MessageSquare, Phone } from "lucide-react";

import { useState } from "react";
import { X, ZoomIn, Play } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const product: Product | undefined = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/san-pham" replace />;
  }

  const mediaList = [
    { type: "image", src: product.mainImage },
    { type: "image", src: product.hoverImage },
    { type: "video", src: product.video },
  ];

  const [activeMedia, setActiveMedia] = useState(mediaList[0]);
  const [openZoom, setOpenZoom] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"info" | "usage" | "reviews">(
    "info",
  );
  const [rating, setRating] = useState(0);

  const { addToCart } = useCart();

  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: product.name },
        ]}
      />

      <section className="bg-[#FAFAFA] pt-12 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ===== LEFT: IMAGE ===== */}
          <div>
            {/* MAIN MEDIA */}
            <div className="relative rounded-2xl overflow-hidden bg-white border group">
              {product.oldPrice && (
                <span className="absolute top-4 left-4 bg-[#C9A24D] text-white text-xs px-4 py-1 rounded-full font-semibold z-10">
                  ƯU ĐÃI
                </span>
              )}

              {/* IMAGE / VIDEO */}
              {activeMedia.type === "image" ? (
                <img
                  src={activeMedia.src}
                  alt={product.name}
                  className="w-full h-[520px] object-contain"
                />
              ) : (
                <video
                  src={activeMedia.src}
                  controls
                  className="w-full h-[520px] object-contain bg-black"
                />
              )}

              {/* ZOOM ICON */}
              <button
                onClick={() => setOpenZoom(true)}
                className="absolute top-4 right-4 bg-black/70 text-white p-3 rounded-full
                 opacity-0 group-hover:opacity-100
                 transition duration-300"
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-6">
              {mediaList.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveMedia(item)}
                  className={`
          relative w-24 h-24 rounded-xl overflow-hidden cursor-pointer border
          transition duration-300
          ${
            activeMedia.src === item.src
              ? "border-[#C9A24D]"
              : "border-gray-200 hover:border-[#C9A24D]"
          }
        `}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        muted
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="text-white" size={24} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* ZOOM MODAL */}
            {openZoom && (
              <div
                onClick={() => setOpenZoom(false)}
                className="
        fixed inset-0 z-50 bg-black/80
        flex items-center justify-center
        transition-opacity duration-300
        animate-in fade-in
      "
              >
                <button
                  onClick={() => setOpenZoom(false)}
                  className="absolute top-6 right-6 text-white hover:opacity-80"
                >
                  <X size={28} />
                </button>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="
          w-full max-w-5xl px-6
          transform transition-all duration-300
          animate-in zoom-in-95
        "
                >
                  {activeMedia.type === "image" ? (
                    <img
                      src={activeMedia.src}
                      alt=""
                      className="w-full max-h-[80vh] object-contain"
                    />
                  ) : (
                    <video
                      src={activeMedia.src}
                      controls
                      autoPlay
                      className="w-full max-h-[80vh] object-contain bg-black"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ===== RIGHT: INFO ===== */}
          <div>
            <div className="flex items-center justify-between mb-3">
              {/* Category */}
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs uppercase tracking-widest text-gray-600">
                {product.category}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">★ ★ ★ ★ ★</div>
                <span className="text-xs text-gray-500">
                  Đánh giá từ khách hàng (128)
                </span>
              </div>
            </div>

            <h1 className="text-4xl font-semibold text-gray-900 mb-4 leading-snug">
              {product.name}
            </h1>

            {product.description && (
              <p className="text-gray-600 max-w-xl mb-6 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* PRICE */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl font-bold text-[#C9A24D]">
                {product.price.toLocaleString("vi-VN")}đ
              </span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("vi-VN")}đ
                </span>
              )}
            </div>

            <p className="text-xs text-gray-500 mb-6">
              * Giá có thể thay đổi theo thời điểm
            </p>

            {/* QUANTITY + ADD CART */}
            <div className="flex items-center gap-4 mb-5">
              {/* Quantity */}
              <div className="flex items-center border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Add cart */}
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-emerald-900 text-white py-4 rounded-xl font-semibold hover:opacity-90"
              >
                🛒 THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-5">
              <p className="text-center text-xs tracking-widest text-gray-400 uppercase">
                Liên hệ chuyên gia để đặt hàng
              </p>

              <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
                <MessageSquare size={20} />
                Nhận tư vấn qua Zalo
              </button>

              <button className="w-full flex items-center justify-center gap-3 border-2 border-emerald-700 text-emerald-700 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition">
                <Phone size={20} />
                Gọi điện ngay: 0123456789
              </button>

              <div className="pt-2 space-y-3">
                <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
                  Hoặc nhắn tin qua
                </p>

                <div className="flex justify-center gap-8 text-sm text-gray-600">
                  <a className="flex items-center gap-2 hover:text-black transition">
                    <Facebook size={16} />
                    Facebook
                  </a>
                  <a className="flex items-center gap-2 hover:text-black transition">
                    <Instagram size={16} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT TABS ===== */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* TAB HEADER */}
          <div className="flex gap-10 border-b mb-10">
            <button
              onClick={() => setActiveTab("info")}
              className={`pb-4 text-sm uppercase tracking-widest font-semibold transition
          ${
            activeTab === "info"
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-black"
          }
        `}
            >
              Thông tin sản phẩm
            </button>

            <button
              onClick={() => setActiveTab("usage")}
              className={`pb-4 text-sm uppercase tracking-widest font-semibold transition
          ${
            activeTab === "usage"
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-black"
          }
        `}
            >
              Hướng dẫn sử dụng
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 text-sm uppercase tracking-widest font-semibold transition
          ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-black"
          }
        `}
            >
              Đánh giá khách hàng
            </button>
          </div>

          {/* ===== TAB CONTENT ===== */}
          {/* INFO */}
          {activeTab === "info" && (
            <div className="space-y-10 text-gray-700 leading-relaxed animate-in fade-in">
              {/* THÀNH PHẦN */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Thành phần</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sâm Ngọc Linh trên 10 năm tuổi: 10g</li>
                  <li>Mật ong thiên nhiên: 150ml</li>
                </ul>
              </div>

              {/* GIÁ TRỊ DINH DƯỠNG */}
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Giá trị dinh dưỡng (trong 100ml)
                </h3>
                <ul className="space-y-2">
                  <li>Năng lượng: 280 kcal</li>
                  <li>Chất đạm (Protein): 0.4g</li>
                  <li>Carbohydrate: 69g</li>
                  <li>Natri: 1.8mg</li>
                </ul>
              </div>

              {/* ĐỐI TƯỢNG */}
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Đối tượng sử dụng
                </h3>
                <p>Người từ 14 tuổi trở lên.</p>
              </div>

              {/* CẢNH BÁO */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
                <b>Thông tin cảnh báo:</b> Không sử dụng cho người bị dị ứng
                hoặc mẫn cảm với các thành phần của sản phẩm.
              </div>
            </div>
          )}

          {/* USAGE */}
          {activeTab === "usage" && (
            <div className="space-y-6 text-gray-700 leading-relaxed animate-in fade-in">
              <h3 className="font-semibold text-lg">Cách dùng</h3>
              <p>
                Dùng trực tiếp mỗi lần 1–2 thìa nhỏ mật ong (10–15ml) và 1–2 lát
                sâm hòa tan với 100–150ml nước ấm. Sử dụng vào buổi sáng.
              </p>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-12 animate-in fade-in">
              {/* REVIEW ITEM */}
              <div className="border-b pb-8 space-y-3">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">Nguyễn Văn A</p>
                    <p className="text-xs text-gray-400">12/01/2026 • 09:45</p>
                  </div>

                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>

                <p className="text-gray-600">
                  Sản phẩm rất chất lượng, mùi thơm tự nhiên, tư vấn kỹ càng.
                </p>

                <div className="flex gap-3 flex-wrap">
                  {/* IMAGE 1 */}
                  <img
                    src="https://imgs.search.brave.com/oreFg4MYZL3qwXe7q0MSt3mOciCmVjtoXlmRnHC0EwY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MTAvbmFydXRvLXNo/aXBwdWRlbi1hbmlt/ZS1mZWF0dXJlZC1p/bWFnZS1uYXJ1dG8t/dXp1bWFraS1mcm9t/LW5hcnV0by1zaGlw/cHVkZW4ucG5nP3E9/NDkmZml0PWNyb3Am/dz0zNjAmaD0yNDAm/ZHByPTI"
                    onClick={() => {
                      setActiveMedia({
                        type: "image",
                        src: "https://imgs.search.brave.com/oreFg4MYZL3qwXe7q0MSt3mOciCmVjtoXlmRnHC0EwY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MTAvbmFydXRvLXNo/aXBwdWRlbi1hbmlt/ZS1mZWF0dXJlZC1p/bWFnZS1uYXJ1dG8t/dXp1bWFraS1mcm9t/LW5hcnV0by1zaGlw/cHVkZW4ucG5nP3E9/NDkmZml0PWNyb3Am/dz0zNjAmaD0yNDAm/ZHByPTI",
                      });
                      setOpenZoom(true);
                    }}
                    className="w-40 h-40 object-cover rounded-xl border cursor-zoom-in"
                  />

                  {/* IMAGE 2 */}
                  <img
                    src="https://imgs.search.brave.com/oreFg4MYZL3qwXe7q0MSt3mOciCmVjtoXlmRnHC0EwY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MTAvbmFydXRvLXNo/aXBwdWRlbi1hbmlt/ZS1mZWF0dXJlZC1p/bWFnZS1uYXJ1dG8t/dXp1bWFraS1mcm9t/LW5hcnV0by1zaGlw/cHVkZW4ucG5nP3E9/NDkmZml0PWNyb3Am/dz0zNjAmaD0yNDAm/ZHByPTI"
                    onClick={() => {
                      setActiveMedia({
                        type: "image",
                        src: "https://imgs.search.brave.com/oreFg4MYZL3qwXe7q0MSt3mOciCmVjtoXlmRnHC0EwY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MTAvbmFydXRvLXNo/aXBwdWRlbi1hbmlt/ZS1mZWF0dXJlZC1p/bWFnZS1uYXJ1dG8t/dXp1bWFraS1mcm9t/LW5hcnV0by1zaGlw/cHVkZW4ucG5nP3E9/NDkmZml0PWNyb3Am/dz0zNjAmaD0yNDAm/ZHByPTI",
                      });
                      setOpenZoom(true);
                    }}
                    className="w-40 h-40 object-cover rounded-xl border cursor-zoom-in"
                  />

                  {/* VIDEO */}
                  <div
                    onClick={() => {
                      setActiveMedia({
                        type: "video",
                        src: "https://www.w3schools.com/html/mov_bbb.mp4",
                      });
                      setOpenZoom(true);
                    }}
                    className="relative w-40 h-40 rounded-xl border bg-black cursor-zoom-in overflow-hidden"
                  >
                    <video
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      className="w-full h-full object-cover opacity-70"
                      muted
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                      <span className="mt-1 text-xs text-white font-medium">
                        Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* REVIEW FORM */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                <h3 className="font-semibold text-base">Gửi đánh giá</h3>

                {/* STAR SELECT */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-xl transition ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}

                  <span className="text-xs text-gray-500 ml-2">
                    {rating > 0 ? `${rating} sao` : "Chọn số sao"}
                  </span>
                </div>

                {/* INPUT */}
                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  placeholder="Tên của bạn"
                />

                <textarea
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  rows={3}
                  placeholder="Nội dung đánh giá"
                />

                {/* UPLOAD BUTTONS */}
                <div className="flex gap-3 flex-wrap">
                  {/* IMAGE UPLOAD */}
                  <label className="cursor-pointer border border-dashed rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-black hover:text-black transition">
                    Ảnh đánh giá
                    <input type="file" multiple className="hidden" />
                  </label>

                  {/* VIDEO UPLOAD */}
                  <label className="cursor-pointer border border-dashed rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-black hover:text-black transition">
                    Video đánh giá
                    <input type="file" accept="video/*" className="hidden" />
                  </label>
                </div>

                <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 w-fit">
                  Gửi đánh giá
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SẢN PHẨM LIÊN QUAN */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest text-[#C9A24D] uppercase mb-2">
                Gợi ý cho bạn
              </p>
              <h2 className="text-3xl font-semibold">Sản Phẩm Liên Quan</h2>
            </div>

            <a
              href="/san-pham"
              className="text-sm text-[#C9A24D] hover:underline"
            >
              Xem thêm →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
