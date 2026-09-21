import { Link } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { cn } from "../lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Trang chủ", href: "#pricing" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Đối tác", href: "#partners" },
    { name: "Tin tức", href: "#news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      {/* Ticker Giá Than Đầu Trang */}
      <div className="bg-slate-800 text-white text-xs py-1.5 px-4 hidden sm:block border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1 text-red-400">
              <TrendingUp className="h-3 w-3" /> CẬP NHẬT GIÁ THAN:
            </span>
            <span className="text-slate-300">
              Than Newcastle (Úc): <strong className="text-white">$140.50/tấn</strong> <span className="text-red-500">(▼ -1.1%)</span>
            </span>
            <span className="text-slate-300">
              Than Nga nhập khẩu: <strong className="text-white">$133.50/tấn</strong> <span className="text-green-500">(▲ +1.5%)</span>
            </span>
          </div>
          <div className="text-slate-400 hidden lg:block">Hotline: +84-2513570799</div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo-longthuangroup.svg" alt="Long Thuan Group Logo" className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform" />
              <span className="text-2xl font-bold text-white tracking-tight hidden md:block font-serif">LONG THUẬN GROUP</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleSectionClick(event, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-red-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/admin-login"
              className="px-4 py-2 text-sm font-medium text-slate-900 bg-yellow-500 hover:bg-yellow-400 rounded transition-colors"
            >
              Nội bộ
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleSectionClick(event, link.href)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-red-500 hover:bg-slate-800 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/admin-login"
            className="block px-3 py-2 mt-4 text-base font-medium text-slate-900 bg-yellow-500 hover:bg-yellow-400 rounded-md text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Đăng nhập Nội bộ
          </Link>
        </div>
      </div>
    </header>
  );
}
