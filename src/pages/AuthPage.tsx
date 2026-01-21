import { useState } from "react";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SiZalo } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <>
      <Header />

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Đăng nhập/ Đăng ký" },
        ]}
      />

      {/* PAGE WRAPPER */}
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        {/* CARD */}
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex">
          {/* LEFT – BRAND PANEL */}
          <div
            className="
  hidden lg:flex 
  lg:w-1/2 
  flex-col 
  justify-between
  px-12 py-14
  bg-gradient-to-br from-[#1f3d2e] to-[#2f5d46]
  text-white
"
          >
            {/* TOP */}
            <div>
              <h3 className="text-xs tracking-widest text-yellow-300 mb-6">
                PHÚC HẬU NATURE
              </h3>

              <div className="space-y-6 max-w-md">
                <Feature
                  title="Di Sản Việt"
                  desc="Gìn giữ và phát triển giá trị tinh hoa từ nông sản và thảo dược Việt Nam."
                />
                <Feature
                  title="Tuyển Chọn & Chế Tác"
                  desc="Tuyển chọn nguyên liệu kỹ lưỡng, kết hợp quy trình chế tác hiện đại và truyền thống."
                />
                <Feature
                  title="Giá Trị Bền Vững"
                  desc="Mang lại giá trị thật cho sức khỏe, văn hóa và kinh tế người Việt."
                />
              </div>
            </div>

            {/* BOTTOM QUOTE */}
            <p className="text-sm italic text-gray-200 max-w-md leading-relaxed">
              “Nâng tầm nông sản Việt Nam bằng những sản phẩm mang giá trị bền
              vững.”
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
  w-full lg:w-1/2 
  flex items-center justify-center 
  px-10 py-12
  bg-gray-50
"
          >
            <div className="w-full max-w-md">
              {/* Tabs */}
              <div className="flex mb-8 border-b text-sm">
                <button
                  onClick={() => setTab("login")}
                  className={`flex-1 pb-3 ${
                    tab === "login"
                      ? "border-b-2 border-[#2f5d46] text-[#2f5d46]"
                      : "text-gray-400"
                  }`}
                >
                  ĐĂNG NHẬP
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`flex-1 pb-3 ${
                    tab === "register"
                      ? "border-b-2 border-[#2f5d46] text-[#2f5d46]"
                      : "text-gray-400"
                  }`}
                >
                  ĐĂNG KÝ
                </button>
              </div>

              {/* FORM */}
              {tab === "login" ? <LoginForm /> : <RegisterForm />}

              {/* Social */}
              <div className="mt-10 text-center">
                <p className="text-xs text-gray-400 mb-4">HỖ TRỢ NHANH QUA</p>
                <div className="flex justify-center gap-4">
                  <SocialIcon href="https://zalo.me/0909123456" label="Zalo">
                    <SiZalo size={18} />
                  </SocialIcon>

                  <SocialIcon
                    href="https://www.facebook.com/phuchau.nature"
                    label="Facebook"
                  >
                    <FaFacebookF size={18} />
                  </SocialIcon>

                  <SocialIcon
                    href="https://www.instagram.com/phuchau.nature"
                    label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </SocialIcon>

                  <SocialIcon href="tel:0909123456" label="Hotline">
                    <FaPhoneAlt size={16} />
                  </SocialIcon>
                </div>
              </div>

              <p className="text-[11px] text-center text-gray-400 mt-8">
                © 2024 Phúc Hậu Nature. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ================= COMPONENTS ================= */

type FeatureProps = {
  title: string;
  desc: string;
};

function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="flex gap-4">
      <div
        className="
        w-9 h-9 
        rounded-full 
        border border-yellow-400 
        flex items-center justify-center 
        text-yellow-400
        shrink-0
      "
      >
        ✓
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-200 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function Input({ label, placeholder, type = "text" }: InputProps) {
  return (
    <div className="mb-5">
      <label className="block text-xs mb-2 text-gray-600 font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full 
          rounded-xl 
          bg-white
          px-4 py-3 
          text-sm 
          border border-gray-200
          outline-none
          transition
          focus:border-[#2f5d46]
          focus:ring-2 focus:ring-[#2f5d46]/20
        "
      />
    </div>
  );
}

function LoginForm() {
  return (
    <>
      <Input label="SỐ ĐIỆN THOẠI" placeholder="0xxx xxx xxx" />
      <Input label="MẬT KHẨU" placeholder="••••••••" type="password" />

      <button className="w-full bg-[#2f5d46] text-white py-3 rounded-xl shadow hover:opacity-90 transition">
        TIẾP TỤC TRUY CẬP
      </button>
    </>
  );
}

function RegisterForm() {
  return (
    <>
      <Input label="HỌ VÀ TÊN" placeholder="Nguyễn Văn A" />
      <Input label="SỐ ĐIỆN THOẠI" placeholder="09xx xxx xxx" />
      <Input
        label="MẬT KHẨU MỚI"
        placeholder="Tối thiểu 8 ký tự"
        type="password"
      />

      <label className="flex items-start gap-2 text-xs text-gray-500 mb-6">
        <input type="checkbox" className="mt-1" />
        Tôi đồng ý với các{" "}
        <span className="text-[#2f5d46] underline cursor-pointer">
          Điều khoản sử dụng
        </span>{" "}
        và{" "}
        <span className="text-[#2f5d46] underline cursor-pointer">
          Chính sách bảo mật
        </span>
      </label>

      <button className="w-full bg-[#2f5d46] text-white py-3 rounded-xl shadow hover:opacity-90 transition">
        TẠO TÀI KHOẢN NGAY
      </button>
    </>
  );
}

type SocialIconProps = {
  children: ReactNode;
  href: string;
  label: string;
};

function SocialIcon({ children, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-11 h-11 rounded-full 
        bg-gray-100 
        flex items-center justify-center
        text-[#2f5d46]
        shadow-sm
        transition
        hover:bg-[#2f5d46]
        hover:text-white
        hover:scale-110
        active:scale-95
      "
    >
      {children}
    </a>
  );
}
