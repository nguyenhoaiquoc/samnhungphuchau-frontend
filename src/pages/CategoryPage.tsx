import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import { CATEGORY, PRODUCTS } from "../constants";
import Pagination from "../components/Pagination";

const MIN_PRICE = 0;
const MAX_PRICE = 20000000;

const CategoryPage: React.FC = () => {
  const { slug } = useParams();

  const categoryFromSlug = slug ? CATEGORY[slug] : "Tất cả";

  const [activeCategory, setActiveCategory] = useState(
    categoryFromSlug || "Tất cả",
  );
  const [sort, setSort] = useState("new");
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  /** Sync category when URL changes */
  useEffect(() => {
    if (categoryFromSlug) {
      setActiveCategory(categoryFromSlug);
    }
  }, [categoryFromSlug]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "Tất cả") {
      result = result.filter((p) => p.category === activeCategory);
    }

    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, minPrice, maxPrice, sort]);

  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, minPrice, maxPrice, sort]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);


  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Danh mục" },
          { label: activeCategory },
        ]}
      />

      <section className="pt-10 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle subtitle="Danh mục sản phẩm" title={activeCategory} />

          <div className="flex flex-col lg:flex-row gap-12 mt-16">
            <ProductFilterSidebar
              categories={["Tất cả", ...Object.values(CATEGORY)]}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLimit={MIN_PRICE}
              maxLimit={MAX_PRICE}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
            />

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

              {filteredProducts.length === 0 && (
                <p className="text-center text-gray-400 mt-20">
                  Không có sản phẩm trong danh mục này
                </p>
              )}
              {totalPages > 1 && (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
  />
)}

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CategoryPage;
