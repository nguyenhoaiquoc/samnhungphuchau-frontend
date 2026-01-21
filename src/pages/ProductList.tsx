import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { PRODUCTS } from "../constants";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import { useEffect } from "react";
import Pagination from "../components/Pagination";

const CATEGORIES = ["Tất cả", "Sâm Ngọc Linh", "Nhung Hươu"];

const MIN_PRICE = 0;
const MAX_PRICE = 20000000;

const ProductList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [sort, setSort] = useState("new");
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);


  /** FILTER + SORT */
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category
    if (activeCategory !== "Tất cả") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Sort
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, minPrice, maxPrice, sort]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, minPrice, maxPrice, sort]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          {
            label:
              activeCategory === "Tất cả" ? "Tất cả sản phẩm" : activeCategory,
          },
        ]}
      />

      <section className="pt-10 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle
            subtitle="Danh mục sản phẩm"
            title="Sản Phẩm Của Chúng Tôi"
          />

          <div className="flex flex-col lg:flex-row gap-12 mt-16">
            {/* ===== FILTER SIDEBAR ===== */}
            <ProductFilterSidebar
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLimit={MIN_PRICE}
              maxLimit={MAX_PRICE}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
            />

            {/* ===== PRODUCT AREA ===== */}
            <div className="lg:w-3/4 w-full">
              {/* SORT */}
              <div className="flex justify-end mb-8">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-sm border px-4 py-2"
                >
                  <option value="new">Mới nhất</option>
                  <option value="low">Giá thấp → cao</option>
                  <option value="high">Giá cao → thấp</option>
                </select>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* EMPTY */}
              {filteredProducts.length === 0 && (
                <p className="text-center text-gray-400 mt-20">
                  Không có sản phẩm phù hợp
                </p>
              )}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductList;
