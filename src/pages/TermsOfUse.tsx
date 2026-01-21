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

export default function TermsOfUse() {
  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Điều khoản sử dụng" },
        ]}
      />

      <main className="bg-white text-slate-800 py-12 px-6">
        <div className="max-w-[850px] mx-auto">
          {/* Heading */}
          <header className="mb-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#005244] mb-6">
              Điều khoản sử dụng
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
            Khi truy cập và sử dụng website, người dùng được xem là đã đồng ý với
            các điều khoản sử dụng dưới đây.
          </p>

          {/* Section 1 */}
          <Section title="1. Tài khoản người dùng">
            <ul className="list-disc pl-6 space-y-2">
              <li>Người dùng đăng ký và đăng nhập bằng số điện thoại</li>
              <li>
                Người dùng chịu trách nhiệm bảo mật thông tin tài khoản của mình
              </li>
              <li>
                Không được sử dụng số điện thoại của người khác khi chưa có sự
                cho phép
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section title="2. Đánh giá sản phẩm">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Người dùng có thể gửi đánh giá bằng nội dung chữ, hình ảnh hoặc
                video
              </li>
              <li>
                Nội dung đánh giá phải trung thực, không vi phạm pháp luật,
                không xúc phạm cá nhân hoặc tổ chức
              </li>
              <li>
                Website có quyền ẩn hoặc xóa các đánh giá không phù hợp mà không
                cần báo trước
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section title="3. Giỏ hàng và mua sản phẩm">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Chức năng giỏ hàng chỉ mang tính hỗ trợ lựa chọn sản phẩm
              </li>
              <li>
                Website <strong>không hỗ trợ thanh toán trực tuyến</strong>
              </li>
              <li>Việc mua bán được thực hiện thông qua:</li>
            </ul>

            <ul className="list-disc pl-12 space-y-1 mt-3">
              <li>Zalo</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Hoặc liên hệ trực tiếp qua số điện thoại</li>
            </ul>

            <p className="mt-4 leading-relaxed">
              Giá và thông tin sản phẩm có thể thay đổi mà không cần thông báo
              trước.
            </p>
          </Section>

          <Divider />

          {/* Section 4 */}
          <Section title="4. Quyền và trách nhiệm của website">
            <ul className="list-disc pl-6 space-y-2">
              <li>Cung cấp thông tin sản phẩm rõ ràng, minh bạch</li>
              <li>
                Có quyền tạm ngưng hoặc chấm dứt tài khoản nếu người dùng vi phạm
                điều khoản
              </li>
              <li>
                Không chịu trách nhiệm trong trường hợp người dùng sử dụng sản
                phẩm sai mục đích
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 5 */}
          <Section title="5. Quyền và trách nhiệm của người dùng">
            <ul className="list-disc pl-6 space-y-2">
              <li>Tuân thủ các quy định khi sử dụng website</li>
              <li>
                Không thực hiện hành vi gây ảnh hưởng đến hoạt động của website
              </li>
              <li>
                Không sao chép nội dung website khi chưa có sự cho phép
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 6 */}
          <Section title="6. Thay đổi điều khoản">
            <p className="leading-relaxed">
              Website có quyền thay đổi điều khoản sử dụng để phù hợp với hoạt
              động kinh doanh. Các thay đổi sẽ được cập nhật công khai trên
              website.
            </p>

            <p className="mt-4 leading-relaxed">
              Việc tiếp tục sử dụng website sau khi điều khoản được cập nhật
              đồng nghĩa với việc người dùng chấp nhận các thay đổi đó.
            </p>
          </Section>

          {/* Contact box */}
          <div className="bg-[#005244] text-white rounded-xl p-10 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Cần hỗ trợ thêm?
            </h3>

            <p className="text-white/80 mb-8 text-center max-w-md mx-auto">
              Nếu có bất kỳ thắc mắc nào liên quan đến điều khoản sử dụng, vui
              lòng liên hệ với chúng tôi qua các kênh hỗ trợ chính thức.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <ContactItem
                href="mailto:support@phuchau.vn"
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

/* ===== Components dùng chung ===== */

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
