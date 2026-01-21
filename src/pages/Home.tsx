import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/banner.jpg";
import ProductCard from "../components/ProductCard";

import { PRODUCTS } from "../constants";

const Home = () => {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section
          className="relative h-[80vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Phúc Hậu Nature
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 mb-8">
              Tinh hoa thiên nhiên, khởi nguồn sức khỏe. Khám phá bí quyết
              trường thọ từ đại ngàn.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#b8913f] text-black font-semibold px-8 py-3 rounded-md transition">
              Tư vấn qua Zalo
            </button>
          </div>
        </section>

        {/* SẢN PHẨM NỔI BẬT */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest text-[#C9A24D] uppercase mb-2">
                Thượng phẩm thiên nhiên
              </p>
              <h2 className="text-3xl font-semibold">Sản Phẩm Nổi Bật</h2>
            </div>

            <a
              href="/san-pham"
              className="text-sm text-[#C9A24D] hover:underline"
            >
              Xem tất cả sản phẩm →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-semibold">Sản Phẩm mới nhất</h2>
            </div>

            <a
              href="/san-pham"
              className="text-sm text-[#C9A24D] hover:underline"
            >
              Xem tất cả sản phẩm →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CAM KẾT */}
        <section className="bg-[#F5F5F0] py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              {
                title: "Chất lượng thượng hạng",
                desc: "Cam kết mang đến trải nghiệm tốt nhất cho khách hàng",
              },
              {
                title: "Nguồn gốc minh bạch",
                desc: "Trực tiếp từ vùng nguyên liệu quý",
              },
              {
                title: "Tư vấn tận tâm",
                desc: "Tư vấn phù hợp theo nhu cầu từng khách hàng",
              },
              {
                title: "Giao hàng toàn quốc",
                desc: "Đóng gói kỹ lưỡng, vận chuyển nhanh",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] font-bold">
                  ✓
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1F2F2A] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Cùng Phúc Hậu Nature nâng tầm chất lượng sống?
            </h2>
            <p className="text-sm text-gray-300 mb-8">
              Từ thiên nhiên thuần khiết đến sức khỏe bền vững, chúng tôi mong
              muốn mang lại sự an tâm trong từng sản phẩm bạn lựa chọn.
            </p>

            <button className="bg-[#C9A24D] hover:bg-[#b8913f] text-black font-semibold px-10 py-4 rounded-md transition">
              Liên hệ tư vấn ngay
            </button>

            <div className="flex justify-center gap-6 mt-6 text-xs text-gray-300">
              <span>✓ Miễn phí tư vấn</span>
              <span>✓ Cam kết sản phẩm rõ nguồn gốc</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
