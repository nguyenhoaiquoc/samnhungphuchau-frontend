import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import {
  X,
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const clearSelected = () => {
    selectedIds.forEach((id) => removeFromCart(id));
    setSelectedIds([]);
  };

  return (
    <>
      <Header />
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "Trang chủ", href: "/" }, { label: "Giỏ hàng" }]}
      />
      <section className="bg-[#FAFAFA] pt-10 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold">Giỏ hàng</h1>
            </div>

            {/* DELETE ALL */}
            {items.length > 0 && (
              <button
                onClick={() => {
                  items.forEach((i) => removeFromCart(i.id));
                  setSelectedIds([]);
                }}
                className="flex items-center gap-2 px-5 py-2 rounded-xl border border-red-500 text-red-600 hover:bg-red-50"
              >
                <Trash2 size={16} />
                Xóa tất cả
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500">Giỏ hàng của bạn đang trống.</p>
          ) : (
            <>
              <div className="space-y-6">
                {items.map((item) => {
                  const selected = selectedIds.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`relative flex gap-6 bg-white p-6 rounded-2xl border shadow-xl hover:shadow-md transition ${
                        selected ? "border-black bg-gray-50" : ""
                      }`}
                    >
                      {/* CHECKBOX */}
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleSelect(item.id)}
                        className="mt-2 w-5 h-5 accent-black"
                      />

                      {/* IMAGE */}
                      <img
                        src={item.mainImage}
                        className="w-28 h-28 object-contain rounded-lg"
                      />

                      {/* INFO */}
                      {/* LEFT: INFO */}
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>

                        <p className="text-[#C9A24D] font-semibold">
                          {item.price.toLocaleString("vi-VN")}đ
                        </p>

                        {/* QUANTITY */}
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                          >
                            −
                          </button>

                          <span className="w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* RIGHT: CONTACT */}
                      <div className="grid grid-cols-2 gap-3 w-[240px] self-center">
                        <a
                          href="https://zalo.me/0332544610"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:opacity-90"
                        >
                          <MessageCircle size={16} /> Zalo
                        </a>

                        <a
                          href="tel:0123456789"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                        >
                          <Phone size={16} /> Gọi
                        </a>

                        <a
                          href="https://facebook.com/hoaiquoc2005"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-800 text-white hover:opacity-90"
                        >
                          <Facebook size={16} /> Facebook
                        </a>

                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border hover:bg-gray-50"
                        >
                          <Instagram size={16} /> Instagram
                        </a>
                      </div>

                      {/* REMOVE ONE */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-4 text-gray-400 hover:text-black"
                      >
                        <X />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
                {/* TOTAL */}
                <p className="text-xl font-semibold">
                  Tổng tiền:{" "}
                  <span className="text-[#C9A24D]">
                    {totalPrice.toLocaleString("vi-VN")}đ
                  </span>
                </p>

                <div className="flex gap-4">
                  {/* DELETE SELECTED */}
                  {selectedIds.length > 0 && (
                    <button
                      onClick={clearSelected}
                      className="flex items-center gap-2 text-base text-red-600 hover:underline transition-colors cursor-pointer"
                    >
                      <Trash2 size={18} />
                      Xóa đã chọn
                    </button>
                  )}

                  {/* CONTINUE SHOPPING */}
                  <a
                    href="/san-pham"
                    className="text-base text-[#C9A24D] hover:underline"
                  >
                    Tiếp tục xem sản phẩm →
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
