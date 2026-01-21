import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import Pagination from "../components/Pagination";
import { PRODUCTS } from "../constants";

const ITEMS_PER_PAGE = 9;
const MIN_PRICE = 0;
const MAX_PRICE = 20000000;

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const keywordRaw = searchParams.get("q") || "";
  const keyword = keywordRaw.toLowerCase();

  const [sort, setSort] = useState("new");
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [currentPage, setCurrentPage] = useState(1);

  /** RESET PAGE WHEN SEARCH / FILTER CHANGE */
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [keyword, minPrice, maxPrice, sort]);

  /** FILTER + SORT */
  const filteredProducts = useMemo(() => {
    if (!keyword) return [];

    let result = PRODUCTS.filter((p) => p.name.toLowerCase().includes(keyword));

    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [keyword, minPrice, maxPrice, sort]);

  /** PAGINATION */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const categoriesFromResult = useMemo(() => {
    const set = new Set<string>();
    filteredProducts.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [filteredProducts]);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tìm kiếm" },
  ];

  if (keywordRaw) {
    breadcrumbItems.push({ label: `"${keywordRaw}"` });
  }

  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <Breadcrumb items={breadcrumbItems} />

      <section className="pt-10 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle
            subtitle="KẾT QUẢ TÌM KIẾM"
            title={
              keywordRaw ? `Từ khóa: "${keywordRaw}"` : "Vui lòng nhập từ khóa"
            }
          />

          {keywordRaw && (
            <p className="mt-4 text-sm text-gray-600">
              Tìm thấy <b>{filteredProducts.length}</b> sản phẩm
            </p>
          )}

          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* FILTER SIDEBAR (chỉ giá) */}
            <ProductFilterSidebar
              categories={categoriesFromResult}
              activeCategory=""
              onCategoryChange={() => {}}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLimit={MIN_PRICE}
              maxLimit={MAX_PRICE}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
            />

            {/* PRODUCT AREA */}
            <div className="lg:w-3/4 w-full">
              {/* SORT */}
              <div className="flex justify-end mb-8">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border px-4 py-2 text-sm"
                >
                  <option value="new">Mới nhất</option>
                  <option value="low">Giá thấp → cao</option>
                  <option value="high">Giá cao → thấp</option>
                </select>
              </div>

              {/* GRID */}
              {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      highlight={keywordRaw}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 mt-20">
                  Không tìm thấy sản phẩm phù hợp
                </p>
              )}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
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

export default SearchPage;
