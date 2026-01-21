import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function ChinhSachBaoMat() {
  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Chính sách bảo mật" },
        ]}
      />

      <main className="bg-white text-slate-800 py-12 px-6">
        <div className="max-w-[850px] mx-auto">
          {/* Heading */}
          <header className="mb-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#005244] mb-6">
              Chính sách bảo mật
            </h1>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="w-12 h-px bg-[#C9A24D]" />
              <p className="text-sm uppercase tracking-widest">
                Cập nhật lần cuối: 20 tháng 01, 2026
              </p>
            </div>
          </header>

          {/* Intro */}
          <p className="text-lg text-slate-600 italic mb-12 leading-relaxed">
            Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng
            khi truy cập và sử dụng website. Mọi dữ liệu được thu thập chỉ nhằm
            mục đích cung cấp dịch vụ, hỗ trợ chăm sóc khách hàng và nâng cao
            trải nghiệm người dùng.
          </p>

          {/* Section 1 */}
          <Section title="1. Thông tin chúng tôi thu thập">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Số điện thoại khi người dùng đăng ký / đăng nhập tài khoản
              </li>
              <li>Tên hiển thị và nội dung đánh giá sản phẩm</li>
              <li>Hình ảnh hoặc video do người dùng tải lên khi đánh giá</li>
              <li>Thông tin liên quan đến giỏ hàng (sản phẩm đã thêm)</li>
            </ul>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section title="2. Mục đích sử dụng thông tin">
            <ul className="list-disc pl-6 space-y-2">
              <li>Xác thực tài khoản và hỗ trợ đăng nhập bằng số điện thoại và mật khẩu</li>
              <li>Hiển thị đánh giá sản phẩm</li>
              <li>
                Hỗ trợ tư vấn và liên hệ khi người dùng đặt hàng qua Zalo,
                Facebook, Instagram hoặc điện thoại
              </li>
              <li>Cải thiện trải nghiệm và chất lượng dịch vụ</li>
            </ul>
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section title="3. Phạm vi chia sẻ thông tin">
            <p className="leading-relaxed">
              Chúng tôi{" "}
              <strong>không bán, không trao đổi, không chia sẻ</strong> thông
              tin cá nhân của người dùng cho bên thứ ba, ngoại trừ các trường
              hợp:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Có sự đồng ý của người dùng</li>
              <li>
                Theo yêu cầu của cơ quan nhà nước có thẩm quyền theo quy định
                pháp luật
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 4 */}
          <Section title="4. Bảo mật thông tin">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Thông tin số điện thoại được lưu trữ và bảo vệ bằng các biện
                pháp kỹ thuật phù hợp
              </li>
              <li>
                Chỉ những bộ phận có trách nhiệm mới được tiếp cận dữ liệu người
                dùng
              </li>
              <li>
                Chúng tôi cam kết không sử dụng thông tin cá nhân cho mục đích
                trái pháp luật
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 5 */}
          <Section title="5. Quyền của người dùng">
            <ul className="list-disc pl-6 space-y-2">
              <li>Yêu cầu xóa thông tin cá nhân</li>
              <li>Yêu cầu xóa đánh giá hoặc nội dung đánh giá đã đăng</li>
              <li>Ngừng sử dụng dịch vụ bất kỳ lúc nào (Nếu có)</li>
            </ul>
          </Section>

          <Divider />

          {/* Section 6 */}
          <Section title="6. Thay đổi chính sách">
            <p className="leading-relaxed">
              Chính sách bảo mật có thể được điều chỉnh, sửa đổi hoặc cập nhật
              để phù hợp với hoạt động của website. Các phiên bản mới sẽ có hiệu
              lực kể từ thời điểm được đăng tải lên website. Người dùng có trách
              nhiệm thường xuyên kiểm tra để đảm bảo nắm rõ nội dung mới nhất
              của chính sách.
            </p>
          </Section>

          {/* Contact box */}
          <div className="bg-[#005244] text-white rounded-xl p-10 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Bạn có thắc mắc về bảo mật?
            </h3>

            <p className="text-white/80 mb-8 text-center max-w-md mx-auto">
              Nếu có bất kỳ thắc mắc nào liên quan đến chính sách bảo mật, vui
              lòng liên hệ với chúng tôi qua các kênh hỗ trợ chính thức.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <ContactItem
                href="mailto:privacy@phuchau.vn"
                icon={<FaEnvelope />}
                label="example@gmail.com"
              />
              <ContactItem
                href="tel:19001234"
                icon={<FaPhoneAlt />}
                label="1900 1234"
              />
              <ContactItem
                href="https://zalo.me/0123456789"
                icon={<SiZalo />}
                label="Zalo"
              />
              <ContactItem
                href="https://facebook.com/phuchau"
                icon={<FaFacebookF />}
                label="Facebook"
              />
              <ContactItem
                href="https://instagram.com/phuchau"
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

/* ================= Components nhỏ ================= */

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
