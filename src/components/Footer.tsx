import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2A1F] text-[#EDE9D5] pt-20">
      {/* TOP */}
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ABOUT */}
        <div>
          <h4 className="text-[#C9A24D] font-semibold mb-4">VỀ CHÚNG TÔI</h4>

          <p className="text-sm leading-relaxed text-[#D6D3B1] italic">
            “Chuyên cung cấp các giá trị tinh túy từ thiên nhiên đại ngàn, cam
            kết chất lượng và sự an tâm trong từng sản phẩm.”
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[#C9A24D] font-semibold mb-4">LIÊN HỆ</h4>

          <ul className="space-y-3 text-sm text-[#D6D3B1]">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#C9A24D]">
                call
              </span>
              0123 456 789
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#C9A24D]">
                chat
              </span>
              zalo.me/phuchau
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#C9A24D]">
                mail
              </span>
              contact@phuchau.vn
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#C9A24D]">
                location_on
              </span>
              Hà Tĩnh, Việt Nam
            </li>
          </ul>
        </div>

        {/* CATEGORY */}
        <div>
          <h4 className="text-[#C9A24D] font-semibold mb-4">DANH MỤC</h4>

          <ul className="space-y-3 text-sm text-[#D6D3B1]">
            <li className="hover:text-[#C9A24D] transition cursor-pointer">
              Sâm Ngọc Linh
            </li>
            <li className="hover:text-[#C9A24D] transition cursor-pointer">
              Nhung hươu
            </li>
          </ul>
        </div>

        {/* COMMITMENT */}
        <div>
          <h4 className="text-[#C9A24D] font-semibold mb-4">CAM KẾT</h4>

          <div className="space-y-4">
            {[
              { icon: "verified", text: "Hàng thật 100%" },
              { icon: "support_agent", text: "Tư vấn tận tâm" },
              { icon: "local_shipping", text: "Giao hàng toàn quốc" },
              { icon: "assignment_return", text: "Đổi trả nếu lỗi" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#143828] border border-[#C9A24D]/20 rounded-xl px-4 py-3"
              >
                <span className="material-symbols-outlined text-[#C9A24D]">
                  {item.icon}
                </span>
                <span className="text-sm text-[#D6D3B1]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#C9A24D]/20 mt-16" />

      {/* BOTTOM */}
      <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#D6D3B1]">
       <p className="text-center md:text-left">
  © 2026 <span className="text-[#C9A24D] font-medium">Phúc Hậu Nature</span>. 
  All rights reserved. <br />
  CÔNG TY SX&TM SÂM NHUNG PHÚC HẬU – Địa chỉ: Thôn Đại Đồng, xã Đông Lộc, Hà Tĩnh – 
  SĐT: 0966.528.025 – MST: 3002300685
</p>


        <div className="flex gap-6">
          <a
            href="/chinh-sach-bao-mat"
            className="hover:text-[#C9A24D] transition cursor-pointer"
          >
            Chính sách bảo mật
          </a>

          <a
            href="/chinh-sach-doi-tra"
            className="hover:text-[#C9A24D] transition cursor-pointer"
          >
            Chính sách đổi trả
          </a>

          <a
            href="/dieu-khoan-su-dung"
            className="hover:text-[#C9A24D] transition cursor-pointer"
          >
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
