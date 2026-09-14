import { useState } from "react";
import { Link } from "react-router-dom";
import { Ship, LayoutDashboard, LineChart, FileText, Users, Settings, LogOut, Bell, Search, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="h-24 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-longthuangroup.svg" alt="Long Thuan Group Logo" className="h-12 w-auto object-contain" />
            <span className="text-lg font-bold text-white tracking-tight font-serif">LTG Admin</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <LayoutDashboard className="h-5 w-5" /> Tổng quan
          </button>
          <button 
            onClick={() => setActiveTab("prices")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'prices' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <LineChart className="h-5 w-5" /> Cập nhật Giá than
          </button>
          <button 
            onClick={() => setActiveTab("news")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'news' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <FileText className="h-5 w-5" /> Quản lý Tin tức
          </button>
          <button 
            onClick={() => setActiveTab("b2b")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'b2b' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
          >
            <Users className="h-5 w-5" /> Yêu cầu Báo giá B2B
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link to="/" className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" /> Đăng xuất
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 w-96">
            <Search className="h-4 w-4 text-slate-500 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="bg-transparent border-none outline-none text-sm text-slate-200 w-full placeholder-slate-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="h-8 w-8 rounded-full bg-slate-700"></div>
              <div className="text-sm">
                <div className="font-medium text-slate-200">Admin User</div>
                <div className="text-slate-500 text-xs">Quản trị viên</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Workspace */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Tổng quan hệ thống</h1>
              
              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-medium text-slate-400 mb-1">Giá Long Thuận (Hôm nay)</div>
                      <div className="text-3xl font-bold text-white">$124.00</div>
                    </div>
                    <div className="p-2 bg-slate-800 rounded-md"><LineChart className="h-5 w-5 text-red-500" /></div>
                  </div>
                  <div className="text-sm text-green-500 flex items-center">
                    Cập nhật 2 giờ trước
                  </div>
                </div>
                
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-medium text-slate-400 mb-1">Yêu cầu B2B mới</div>
                      <div className="text-3xl font-bold text-white">12</div>
                    </div>
                    <div className="p-2 bg-slate-800 rounded-md"><Users className="h-5 w-5 text-blue-500" /></div>
                  </div>
                  <div className="text-sm text-yellow-500 flex items-center">
                    +3 yêu cầu so với hôm qua
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-medium text-slate-400 mb-1">Lượt xem tin tức</div>
                      <div className="text-3xl font-bold text-white">1,204</div>
                    </div>
                    <div className="p-2 bg-slate-800 rounded-md"><FileText className="h-5 w-5 text-yellow-500" /></div>
                  </div>
                  <div className="text-sm text-slate-500 flex items-center">
                    Tuần này
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Yêu cầu Báo giá gần đây</h3>
                  <div className="space-y-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex justify-between items-center p-4 bg-slate-950 rounded-lg border border-slate-800">
                        <div>
                          <div className="font-medium text-slate-200">Công ty Cổ phần Nhiệt điện XYZ</div>
                          <div className="text-sm text-slate-500">Nhu cầu: 50,000 tấn/tháng • 10 phút trước</div>
                        </div>
                        <button className="text-sm text-yellow-500 hover:text-yellow-400 font-medium">Xử lý ngay</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Cập nhật Giá nhanh (API/Manual)</h3>
                  <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">Trạng thái API Global Index</span>
                      <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded">Đang hoạt động</span>
                    </div>
                    <p className="text-xs text-slate-500">Lần đồng bộ cuối: 2026-09-13 23:15:00</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Điều chỉnh giá nội bộ ($/tấn)</label>
                      <div className="flex gap-2">
                        <input type="number" defaultValue="124.00" className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white w-full focus:outline-none focus:border-red-500" />
                        <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Lưu</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="flex items-center justify-center h-full text-slate-500">
              Module "{activeTab}" đang được phát triển.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
