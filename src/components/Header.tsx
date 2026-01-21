import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (path?: string) =>
    `text-sm font-semibold transition-colors ${
      location.pathname === path
        ? "text-[#C9A24D]"
        : "text-white hover:text-[#C9A24D]"
    }`;

  const { totalQuantity } = useCart();

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          isScrolled
            ? "bg-[#0F3D2E]/95 backdrop-blur shadow-lg h-20"
            : "bg-[#0F3D2E] h-28"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between gap-12">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Phúc Hậu Nature"
            className={`object-contain transition-all duration-500 ${
              isScrolled ? "h-24" : "h-40"
            }`}
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className={navItemClass("/")}>
            TRANG CHỦ
          </Link>

          <Link to="/san-pham" className={navItemClass("/san-pham")}>
            SẢN PHẨM
          </Link>

          {/* DROPDOWN DANH MỤC */}
          <div className="relative group cursor-pointer py-6">
            <div
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                location.pathname.startsWith("/danh-muc")
                  ? "text-[#C9A24D]"
                  : "text-white group-hover:text-[#C9A24D]"
              }`}
            >
              DANH MỤC
              <span className="material-symbols-outlined text-lg">
                expand_more
              </span>
            </div>

            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute top-full left-0 w-56 bg-white shadow-xl border border-[#E7E5E4] rounded-lg overflow-hidden">
              <Link
                to="/danh-muc/sam-ngoc-linh"
                className="block px-6 py-4 text-sm font-medium text-[#1A4D3E] hover:bg-[#F9F9F8] hover:text-[#C9A24D]"
              >
                Sâm Ngọc Linh
              </Link>

              <Link
                to="/danh-muc/nhung-huou"
                className="block px-6 py-4 text-sm font-medium text-[#1A4D3E] hover:bg-[#F9F9F8] hover:text-[#C9A24D]"
              >
                Nhung Hươu
              </Link>
            </div>
          </div>

          <Link to="/gioi-thieu" className={navItemClass("/gioi-thieu")}>
            GIỚI THIỆU
          </Link>
        </nav>

        {/* SEARCH + ICONS */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          {/* SEARCH */}
          <div className="relative w-full max-w-xs group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white">
              search
            </span>

            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full h-11 pl-12 pr-4 rounded-full text-sm bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none focus:ring-2 focus:ring-[#C9A24D]/40 transition"
            />
          </div>

          {/* CART + USER */}
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            {/* CART */}
            <Link to="/gio-hang" className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white text-2xl">
                shopping_bag
              </span>
              {totalQuantity > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C9A24D] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* USER */}
            <Link to="/dang-nhap">
              <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/80">
                    person
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
