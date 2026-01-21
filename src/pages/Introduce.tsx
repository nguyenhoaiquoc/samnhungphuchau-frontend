import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function Introduce() {
  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu" },
        ]}
      />

      <main className="bg-white text-slate-800 py-12 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* ===== Heading ===== */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#005244] mb-4">
              Giới thiệu
            </h1>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="w-12 h-px bg-[#C9A24D]" />
              <p className="text-sm uppercase tracking-widest">
                Về chúng tôi
              </p>
            </div>
          </header>

          {/* ===== Intro ===== */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Chúng tôi là đơn vị kinh doanh các sản phẩm tiêu dùng và đặc sản được
            chọn lọc kỹ lưỡng, hướng đến việc mang lại giá trị thực tế và trải
            nghiệm tốt nhất cho khách hàng. Với sứ mệnh nâng tầm nông sản Việt
            Nam, chúng tôi không ngừng cải tiến để phục vụ người tiêu dùng một
            cách tận tâm và minh bạch.
          </p>

          {/* ===== Section: Who we are ===== */}
          <Section title="Chúng tôi là ai">
            <p className="leading-relaxed">
              Website được xây dựng nhằm giúp khách hàng dễ dàng tìm hiểu thông
              tin sản phẩm, so sánh, đánh giá và liên hệ tư vấn trước khi quyết
              định mua hàng.
            </p>
            <p className="leading-relaxed mt-4">
              Chúng tôi không chỉ bán sản phẩm, mà còn đặt trọng tâm vào sự minh
              bạch và niềm tin lâu dài trong từng giao dịch.
            </p>
          </Section>

          <Divider />

          {/* ===== Section: Core values ===== */}
          <Section title="Giá trị cốt lõi">
            <ul className="space-y-3">
              {[
                "Chất lượng sản phẩm là ưu tiên hàng đầu",
                "Thông tin rõ ràng, minh bạch",
                "Tôn trọng trải nghiệm và phản hồi của khách hàng",
                "Hỗ trợ tận tâm trước và sau khi mua",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#C9A24D] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Divider />

          {/* ===== Section: Purchase method ===== */}
          <Section title="Hình thức mua hàng">
            <p className="leading-relaxed mb-4">
              Website hiện <strong>không hỗ trợ thanh toán trực tuyến</strong>.
              Khách hàng có thể liên hệ mua hàng thông qua các kênh chính thức:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zalo</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Hoặc liên hệ trực tiếp qua số điện thoại</li>
            </ul>

            <p className="leading-relaxed">
              Chúng tôi luôn tư vấn rõ ràng và xác nhận đầy đủ thông tin trước khi
              giao hàng.
            </p>
          </Section>

          <Divider />

          {/* ===== Section: Company info ===== */}
          <Section title="Địa chỉ công ty & cửa hàng">
            <div className="space-y-3">
              <p className="font-semibold uppercase">
                CÔNG TY SX & TM SÂM NHUNG PHÚC HẬU
              </p>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C9A24D] mt-1" />
                <span>
                  Thôn Đại Đồng, xã Đông Lộc, tỉnh Hà Tĩnh
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C9A24D]" />
                <span>
                  0966 528 025 – MST: 3002300685
                </span>
              </p>
            </div>
          </Section>

          <Divider />

          {/* ===== Section: Commitment ===== */}
          <Section title="Cam kết với khách hàng">
            <ul className="space-y-3">
              {[
                "Sản phẩm đúng mô tả",
                "Chính sách đổi trả rõ ràng",
                "Hỗ trợ nhanh chóng khi phát sinh vấn đề",
                "Tôn trọng và bảo mật thông tin cá nhân người dùng",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#C9A24D] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-medium">
              Chúng tôi tin rằng sự hài lòng của khách hàng chính là nền tảng cho
              sự phát triển bền vững của thương hiệu.
            </p>
          </Section>

          {/* ===== Contact box ===== */}
          <div className="bg-[#005244] text-white rounded-xl p-10 mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Kết nối với chúng tôi
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <ContactItem
                href="tel:0966528025"
                icon={<FaPhoneAlt />}
                label="0966 528 025"
              />
              <ContactItem
                href="https://zalo.me/0966528025"
                icon={<SiZalo />}
                label="Zalo"
              />
              <ContactItem
                href="https://facebook.com"
                icon={<FaFacebookF />}
                label="Facebook"
              />
              <ContactItem
                href="https://instagram.com"
                icon={<FaInstagram />}
                label="Instagram"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ===== Components nhỏ ===== */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-[#005244] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#005244]/20 to-transparent" />
  );
}

function ContactItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition rounded px-4 py-3 font-medium"
    >
      <span className="text-[#C9A24D] text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
