interface FilterSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;

  minPrice: number;
  maxPrice: number;
  minLimit: number;
  maxLimit: number;

  onMinPriceChange: (v: number) => void;
  onMaxPriceChange: (v: number) => void;
}

const ProductFilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  minLimit,
  maxLimit,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <aside className="lg:w-1/4 w-full">
      {/* CATEGORY */}
      <div className="mb-10">
        <h3 className="font-semibold uppercase text-xs mb-4 tracking-widest">
          Danh mục
        </h3>

        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-left text-sm transition
                ${
                  activeCategory === cat
                    ? "text-brand-gold font-semibold"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="border-t border-black/10 pt-6">
        <h3 className="font-semibold uppercase text-xs mb-6 tracking-widest">
          Giá
        </h3>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={500000}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-brand-gold mb-4"
        />

        <div className="flex justify-between text-sm mb-4">
          <span>{minPrice.toLocaleString("vi-VN")}đ</span>
          <span>{maxPrice.toLocaleString("vi-VN")}đ</span>
        </div>

        <div className="space-y-3">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => onMinPriceChange(Number(e.target.value))}
            className="w-full border px-3 py-2 text-sm"
            placeholder="Giá thấp nhất"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full border px-3 py-2 text-sm"
            placeholder="Giá cao nhất"
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
