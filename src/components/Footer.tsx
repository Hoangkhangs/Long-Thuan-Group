import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

export default function Footer() {
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-longthuangroup.svg" alt="Long Thuan Group Logo" className="h-20 w-auto object-contain" />
              <span className="text-2xl font-bold text-white tracking-tight font-serif">LONG THUẬN GROUP</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Đơn vị hàng đầu Việt Nam về nhập khẩu phân phối than đá, cung cấp dịch vụ logistics, cảng biển và xuất khẩu nông sản với chuỗi cung ứng khép kín.
            </p>
            <div className="space-y-6 text-slate-400 text-sm">
              <div>
                <h4 className="text-white font-medium mb-3 uppercase text-xs tracking-wider">Trụ sở chính</h4>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Lô R.03.35, Khu Swanbay 4, Đảo Đại Phước, Xã Đại Phước, Tỉnh Đồng Nai, Việt Nam.</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-4 w-4 text-red-500 shrink-0" />
                  <span>+84-2513570799 | Fax: +84-2513570199</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-red-500 shrink-0" />
                  <span>info@longthuan.com.vn</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3 uppercase text-xs tracking-wider">Văn phòng đại diện</h4>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Tầng 10 - Tòa nhà IPC, 1489 Nguyễn Văn Linh, P. Tân Hưng, TP.HCM, Việt Nam.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-red-500 shrink-0" />
                  <span>+84-2837753399 | Fax: +84-2837751199</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={handleSectionClick} className="text-slate-400 hover:text-red-500 transition-colors">Về chúng tôi</a></li>
              <li><a href="#pricing" onClick={handleSectionClick} className="text-slate-400 hover:text-red-500 transition-colors">Bảng giá</a></li>
              <li><a href="#services" onClick={handleSectionClick} className="text-slate-400 hover:text-red-500 transition-colors">Dịch vụ B2B</a></li>
              <li><a href="#partners" onClick={handleSectionClick} className="text-slate-400 hover:text-red-500 transition-colors">Đối tác chiến lược</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Nội bộ</h3>
            <ul className="space-y-2">
              <li><Link to="/admin-login" className="text-slate-400 hover:text-yellow-500 transition-colors">Đăng nhập Quản trị</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">Webmail</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Long Thuan Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
