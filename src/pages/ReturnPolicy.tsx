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

export default function ChinhSachDoiTra() {
  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Chính sách đổi trả" },
        ]}
      />

      <main className="bg-white text-slate-800 py-12 px-6">
        <div className="max-w-[850px] mx-auto">
          {/* Heading */}
          <header className="mb-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#005244] mb-6">
              Chính sách đổi trả
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
            Chúng tôi cam kết bảo vệ quyền lợi của khách hàng trong quá trình
            mua sản phẩm thông qua các kênh hỗ trợ chính thức, bao gồm Zalo,
            Facebook, Instagram và số điện thoại liên hệ.
          </p>

          {/* Section 1 */}
          <Section title="1. Điều kiện áp dụng đổi trả">
            <p className="mb-4 leading-relaxed">
              Chúng tôi áp dụng{" "}
              <strong>chính sách đổi 1 đổi 1 trong vòng 10 ngày</strong> kể từ
              ngày khách hàng nhận được sản phẩm trong các trường hợp:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sản phẩm bị lỗi do nhà sản xuất</li>
              <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
              <li>
                Sản phẩm giao không đúng với thông tin đã thỏa thuận (nhầm loại,
                nhầm số lượng)
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section title="2. Điều kiện sản phẩm được đổi">
            <ul className="list-disc pl-6 space-y-2">
              <li>Còn trong thời hạn 10 ngày kể từ ngày nhận hàng</li>
              <li>
                Sản phẩm chưa qua sử dụng hoặc sử dụng không ảnh hưởng đến việc
                kiểm tra lỗi
              </li>
              <li>Còn đầy đủ bao bì, tem nhãn (nếu có)</li>
              <li>
                Có bằng chứng xác nhận lỗi (hình ảnh, video) gửi cho bộ phận hỗ
                trợ
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section title="3. Trường hợp không áp dụng đổi trả">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Sản phẩm bị hư hỏng do người sử dụng (rơi vỡ, bảo quản không
                đúng hướng dẫn, sử dụng sai mục đích)
              </li>
              <li>Sản phẩm đã quá thời hạn đổi trả 10 ngày</li>
              <li>Không cung cấp được bằng chứng hợp lý về lỗi sản phẩm</li>
              <li>
                Sản phẩm thuộc chương trình khuyến mãi đặc biệt có thông báo
                không áp dụng đổi trả (nếu có)
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 4 */}
          <Section title="4. Hình thức đổi trả">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Áp dụng <strong>đổi 1 đổi 1</strong>, không hoàn tiền
              </li>
              <li>
                Sản phẩm đổi là sản phẩm cùng loại hoặc tương đương (trong
                trường hợp sản phẩm cũ tạm hết hàng)
              </li>
              <li>
                Thời gian xử lý đổi trả sẽ được thông báo cụ thể sau khi xác
                nhận tình trạng sản phẩm
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 5 */}
          <Section title="5. Quy trình đổi trả">
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Liên hệ với chúng tôi qua các kênh hỗ trợ chính thức (Zalo,
                Facebook, Instagram hoặc điện thoại)
              </li>
              <li>
                Cung cấp thông tin đơn hàng và hình ảnh/video mô tả lỗi sản phẩm
              </li>
              <li>Chờ xác nhận từ bộ phận hỗ trợ</li>
              <li>Thực hiện gửi sản phẩm theo hướng dẫn (nếu cần)</li>
            </ol>
          </Section>

          <Divider />

          {/* Section 6 */}
          <Section title="6. Chi phí vận chuyển">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Trường hợp lỗi từ nhà sản xuất hoặc quá trình vận chuyển:{" "}
                <strong>chúng tôi chịu chi phí</strong>
              </li>
              <li>
                Các trường hợp khác (nếu có): khách hàng tự thanh toán chi phí
                phát sinh theo thỏa thuận
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Section 7 */}
          <Section title="7. Thay đổi chính sách">
            <p className="leading-relaxed">
              Chính sách đổi trả có thể được điều chỉnh, sửa đổi hoặc cập nhật
              để phù hợp với hoạt động kinh doanh. Các thay đổi sẽ có hiệu lực
              kể từ thời điểm được đăng tải công khai trên website.
            </p>
          </Section>

          {/* Contact box */}
          <div className="bg-[#005244] text-white rounded-xl p-10 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Cần hỗ trợ đổi trả?
            </h3>

            <p className="text-white/80 mb-8 text-center max-w-md mx-auto">
              Nếu có bất kỳ thắc mắc nào liên quan đến chính sách đổi trả, vui
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
