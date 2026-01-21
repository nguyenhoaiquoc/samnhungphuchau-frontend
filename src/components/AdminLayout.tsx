import { Outlet, Link, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/dang-nhap");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0F3D2E] text-white flex flex-col">
        <div className="h-16 flex items-center justify-center text-lg font-bold border-b border-white/20">
          ADMIN PANEL
        </div>

        <nav className="flex-1 px-4 py-6 space-y-3">
          <Link to="/admin" className="block px-4 py-2 rounded hover:bg-white/10">
            Dashboard
          </Link>
          <Link to="/admin/products" className="block px-4 py-2 rounded hover:bg-white/10">
            Sản phẩm
          </Link>
          <Link to="/admin/orders" className="block px-4 py-2 rounded hover:bg-white/10">
            Đơn hàng
          </Link>
          <Link to="/admin/users" className="block px-4 py-2 rounded hover:bg-white/10">
            Người dùng
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="m-4 py-2 rounded bg-red-500 hover:bg-red-600 text-sm font-semibold"
        >
          Đăng xuất
        </button>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
