import { Link } from "react-router-dom";
import type { Product } from "../../types";

type ProductCardProps = {
  product: Product;
  highlight?: string;
};

function highlightText(text: string, keyword?: string) {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="bg-yellow-200 text-[#1A4D3E] px-1 rounded">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function ProductCard({ product, highlight }: ProductCardProps) {
  const { name, category, price, oldPrice, mainImage, hoverImage } = product;

  return (
    <Link to={`/san-pham/${product.id}`} className="group">
      <div className="group bg-white overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
        <div className="relative h-72 overflow-hidden bg-white p-4">
          <img
            src={mainImage}
            alt={name}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-90 group-hover:translate-y-8"
          />

          <img
            src={hoverImage}
            alt={name}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-700 -translate-x-full group-hover:translate-x-0"
          />

          {oldPrice && (
            <div className="absolute top-4 left-4 bg-[#C9A24D] text-white text-[10px] px-2 py-1 font-bold">
              ƯU ĐÃI
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            {category}
          </p>

          <h3 className="mt-3 mb-2 font-semibold text-sm text-[#1A4D3E] group-hover:text-[#C9A24D] line-clamp-2">
            {highlightText(name, highlight)}
          </h3>

          <div className="mt-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#C9A24D] font-semibold">
                {price.toLocaleString("vi-VN")}đ
              </span>
              {oldPrice && (
                <span className="text-gray-400 text-xs line-through">
                  {oldPrice.toLocaleString("vi-VN")}đ
                </span>
              )}
            </div>

            <button className="text-xs font-bold uppercase tracking-widest text-[#1A4D3E] border-b border-[#1A4D3E] pb-1 hover:text-[#C9A24D] hover:border-[#C9A24D]">
              Thông tin chi tiết
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
