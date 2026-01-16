import React, { useState } from 'react';

// Đảm bảo bạn đã thêm link font này vào file index.html trong thư mục public của dự án React:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Đường dẫn đến file ảnh logo bạn đã upload (đặt file này trong thư mục public)
  const logoSrc = "/Gemini_Generated_Image_j8de59j8de59j8de.jpg"; 

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f7] dark:bg-[#161c18] font-sans text-white antialiased">
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl w-full bg-[#222b25] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] border border-[#366345]/20">
          
          {/* --- LEFT SIDE (IMAGE & BRANDING) --- */}
          <div className="relative lg:w-1/2 hidden lg:block overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI6frfSbAbiUTEJqXD4b_q_dYjBj_PLcFRbqH7sv2WWgylWgTupbriP9aJSJA7Aov8o-dKavMazraHqqQ2hDBI86CojuYpJob8tQdAoIix1X50MJliPb4VY8r75g61CLPiMcpbq1SzaVylfRDX241Sg45zPQZwvUNQ7EgzMA0TdjgkMVgiinyERKHKcYpUGxRyT9MmTQ4hoIp12OQYvkATuq4Ky6cXadJhbDEKE8oARRC6yQ30XoW2kb86sqMbnSRnqvoeWZ6Ppmo")' }} // Bạn có thể thay ảnh nền rừng núi ở đây
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#161c18]/90 via-[#161c18]/20 to-transparent"></div>
            </div>

            <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center gap-3">
                {/* LOGO MỚI CỦA BẠN */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#222b25]/50 backdrop-blur-sm border border-[#C9A961]/30 p-1">
                    <img 
                        src={logoSrc} 
                        alt="Phúc Hậu Nature Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl font-serif font-bold tracking-tight leading-none">Phúc Hậu Nature</span>
                  <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.2em] font-medium mt-1">Sâm Ngọc Linh & Nhung Hươu</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-12">
              <span className="text-[#C9A961] font-serif italic text-lg mb-2 block">Tinh hoa đại ngàn</span>
              <h2 className="text-4xl font-serif font-bold leading-tight mb-4">Phúc Hậu Nature: Sức khỏe từ báu vật thiên nhiên</h2>
            </div>
          </div>

          {/* --- RIGHT SIDE (FORMS) --- */}
          <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 overflow-y-auto">
            <div className="w-full max-w-[400px] mx-auto">
              
              {/* Mobile Logo Header */}
              <div className="lg:hidden flex flex-col items-center gap-3 mb-10 justify-center">
                 <div className="w-20 h-20 rounded-full overflow-hidden bg-[#222b25] border border-[#C9A961]/30 p-1">
                    <img 
                        src={logoSrc} 
                        alt="Phúc Hậu Nature Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="text-white text-lg font-serif font-bold tracking-tight">Phúc Hậu Nature</span>
              </div>

              {/* Greeting */}
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-white font-serif text-3xl font-bold mb-2">Xin chào</h2>
                <p className="text-[#a4b7aa] text-sm">Vui lòng đăng nhập hoặc đăng ký để khám phá những báu vật từ thiên nhiên.</p>
              </div>

              {/* Tabs Switcher */}
              <div className="flex mb-8">
                <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-[#161c18] p-1 border border-[#366345]/20">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${
                      isLogin ? 'bg-[#366345] text-white' : 'text-[#a4b7aa] hover:text-white'
                    }`}
                  >
                    Đăng nhập
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${
                      !isLogin ? 'bg-[#366345] text-white' : 'text-[#a4b7aa] hover:text-white'
                    }`}
                  >
                    Đăng ký
                  </button>
                </div>
              </div>

              {/* Form Container */}
              <div className="form-container">
                {isLogin ? (
                  /* --- LOGIN FORM --- */
                  <form className="space-y-6 animate-in fade-in zoom-in duration-300">
                    <div className="space-y-2">
                      <label className="block text-white/90 text-sm font-medium">Email</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] text-lg select-none">mail</span>
                        <input 
                          type="email" 
                          required 
                          className="w-full pl-12 pr-4 py-3 bg-[#161c18] border border-[#435649] rounded-xl text-white placeholder:text-[#a4b7aa]/50 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none transition-all" 
                          placeholder="Nhập địa chỉ email" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="block text-white/90 text-sm font-medium">Mật khẩu</label>
                        <a href="#" className="text-[#C9A961] text-xs font-medium hover:underline">Quên mật khẩu?</a>
                      </div>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] text-lg select-none">lock</span>
                        <input 
                          type="password" 
                          required 
                          className="w-full pl-12 pr-12 py-3 bg-[#161c18] border border-[#435649] rounded-xl text-white placeholder:text-[#a4b7aa]/50 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none transition-all" 
                          placeholder="Nhập mật khẩu" 
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg select-none">visibility</span>
                        </button>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-[#366345] hover:bg-[#366345]/90 text-white font-serif font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 group">
                      Đăng nhập ngay
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                  </form>
                ) : (
                  /* --- REGISTER FORM --- */
                  <form className="space-y-5 animate-in fade-in zoom-in duration-300">
                    <div className="space-y-2">
                      <label className="block text-white/90 text-sm font-medium">Họ tên</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] text-lg select-none">person</span>
                        <input 
                          type="text" 
                          required 
                          className="w-full pl-12 pr-4 py-3 bg-[#161c18] border border-[#435649] rounded-xl text-white placeholder:text-[#a4b7aa]/50 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none transition-all" 
                          placeholder="Nhập họ và tên" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-white/90 text-sm font-medium">Email</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] text-lg select-none">mail</span>
                        <input 
                          type="email" 
                          required 
                          className="w-full pl-12 pr-4 py-3 bg-[#161c18] border border-[#435649] rounded-xl text-white placeholder:text-[#a4b7aa]/50 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none transition-all" 
                          placeholder="Nhập địa chỉ email" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-white/90 text-sm font-medium">Mật khẩu</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] text-lg select-none">lock</span>
                        <input 
                          type="password" 
                          required 
                          className="w-full pl-12 pr-12 py-3 bg-[#161c18] border border-[#435649] rounded-xl text-white placeholder:text-[#a4b7aa]/50 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none transition-all" 
                          placeholder="Tạo mật khẩu" 
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a4b7aa] hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-lg select-none">visibility</span>
                        </button>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#a4b7aa] leading-relaxed">
                      Bằng cách đăng ký, bạn đồng ý với <a href="#" className="text-[#C9A961] hover:underline">Điều khoản sử dụng</a> và <a href="#" className="text-[#C9A961] hover:underline">Chính sách bảo mật</a> của Phúc Hậu Nature.
                    </p>
                    <button type="submit" className="w-full bg-[#366345] hover:bg-[#366345]/90 text-white font-serif font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 group">
                      Đăng ký tài khoản
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">how_to_reg</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;