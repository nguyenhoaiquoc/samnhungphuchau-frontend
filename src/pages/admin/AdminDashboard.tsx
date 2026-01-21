import { useEffect } from "react";

export default function AdminDashboard() {
  useEffect(() => {
    document.title = "Trang quản trị - Phúc Hậu Nature";
  }, []);

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full">
      {/* ===== TIÊU ĐỀ ===== */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Tổng quan hệ thống
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Thống kê nhanh hoạt động website
        </p>
      </div>

      {/* ===== THỐNG KÊ NHANH ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        <StatCard title="Tổng sản phẩm" value="128" icon="inventory_2" />
        <StatCard title="Tổng người dùng" value="2,341" icon="group" />
        <StatCard title="Tổng đánh giá" value="856" icon="star_rate" />
        <StatCard title="Báo cáo chờ xử lý" value="3" icon="flag" />
        <StatCard title="Banner đang hiển thị" value="5" icon="gallery_thumbnail" />
      </div>

      {/* ===== HOẠT ĐỘNG GẦN ĐÂY ===== */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Hoạt động gần đây
            </h2>
            <p className="text-sm text-slate-500">
              Theo dõi các sự kiện mới nhất
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                  Hoạt động
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                  Người dùng
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-center">
                  Loại
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                  Thời gian
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-right">
                  Trạng thái
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              <ActivityRow
                icon="star_rate"
                title="Đánh giá mới cho Sâm Ngọc Linh"
                user="Nguyễn Văn A"
                type="Đánh giá"
                time="2 phút trước"
                status="Hoàn tất"
                statusColor="green"
              />
              <ActivityRow
                icon="support_agent"
                title="Yêu cầu tư vấn sản phẩm"
                user="Trần Thị B"
                type="Liên hệ"
                time="15 phút trước"
                status="Chưa xử lý"
                statusColor="yellow"
              />
              <ActivityRow
                icon="flag"
                title="Báo cáo đánh giá vi phạm"
                user="Lê Văn C"
                type="Báo cáo"
                time="1 giờ trước"
                status="Đang xử lý"
                statusColor="red"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ===== COMPONENT PHỤ ===== */

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-slate-700">
            {icon}
          </span>
        </div>
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
        {title}
      </p>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}

function ActivityRow({
  icon,
  title,
  user,
  type,
  time,
  status,
  statusColor,
}: {
  icon: string;
  title: string;
  user: string;
  type: string;
  time: string;
  status: string;
  statusColor: "green" | "yellow" | "red";
}) {
  const statusMap = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">
              {icon}
            </span>
          </div>
          <span className="text-sm font-semibold text-slate-900">
            {title}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">{user}</td>
      <td className="px-6 py-4 text-center">
        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
          {type}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">{time}</td>
      <td className="px-6 py-4 text-right">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${statusMap[statusColor]}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
