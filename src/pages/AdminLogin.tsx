import { useState, FormEvent } from "react";
import { Ship, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay">
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex flex-col justify-center items-center gap-3 mb-6">
          <img src="/logo-longthuangroup.svg" alt="Long Thuan Group Logo" className="h-28 w-auto object-contain drop-shadow-xl" />
          <span className="text-2xl font-bold text-white tracking-tight font-serif text-center drop-shadow-md">LONG THUẬN GROUP</span>
        </div>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-white">
          Hệ Thống Quản Trị
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Dành riêng cho nhân sự nội bộ Long Thuận Group
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-4 shadow-2xl shadow-black sm:rounded-2xl sm:px-10 border border-slate-800">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email nội bộ
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-slate-700 bg-slate-950/50 px-3 py-2 text-slate-200 placeholder-slate-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="name@longthuan.com.vn"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Mật khẩu
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-slate-700 bg-slate-950/50 px-3 py-2 pr-10 text-slate-200 placeholder-slate-500 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-red-600 focus:ring-red-500 focus:ring-offset-slate-900"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              >
                <Lock className="h-4 w-4 mr-2" /> Đăng nhập hệ thống
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-xs text-slate-500 border-t border-slate-800 pt-6">
            Bảo mật cấp độ 1 - Giao thức mã hóa 256-bit
          </div>
        </div>
      </div>
    </div>
  );
}
