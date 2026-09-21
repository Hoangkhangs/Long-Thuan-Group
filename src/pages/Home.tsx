import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactApexChart from "react-apexcharts";
import { ArrowRight, Anchor, Truck, TrendingUp, Flame, Globe2, Wheat, ShieldCheck, MapPin, BarChart3, LineChart as LineChartIcon, CandlestickChart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, type MouseEvent } from "react";

// Real-time market tracking data simulation
const barLineData = {
  categories: ["Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9"],
  series: [
    { name: "Than Newcastle", data: [129.5, 135.2, 132.8, 138.4, 142.1, 140.5] },
    { name: "Than Nga (CFR)", data: [125.0, 128.5, 126.0, 131.5, 135.0, 133.5] },
    { name: "Nội địa VN", data: [135.0, 138.5, 136.0, 141.2, 145.5, 143.0] }
  ]
};

const ohlcData = [
  { x: new Date('2024-04-01').getTime(), y: [125, 135, 120, 129.5] },
  { x: new Date('2024-05-01').getTime(), y: [129.5, 138, 125, 135.2] },
  { x: new Date('2024-06-01').getTime(), y: [135.2, 137, 130, 132.8] },
  { x: new Date('2024-07-01').getTime(), y: [132.8, 140, 131, 138.4] },
  { x: new Date('2024-08-01').getTime(), y: [138.4, 145, 136, 142.1] },
  { x: new Date('2024-09-01').getTime(), y: [142.1, 144, 138, 140.5] }
];

const videoData = [
  { id: "ghKoQj7iTso", title: "Video giới thiệu Long Thuận Group" },
  { id: "1tZ82A0p2KU", title: "Long Thuận Group - Video hoạt động" },
  { id: "1ZXc8NmVS8w", title: "Long Thuận Group - Video doanh nghiệp" }
];

const newsData = [
  {
    id: 1,
    title: "Từng bước hiện đại hóa công nghệ vận tải than, giảm ô nhiễm môi trường khu vực cảng Làng Khánh",
    description: "Cập nhật tình hình hoàn thiện hệ thống băng tải dài gần 9km, công suất 4,2 triệu tấn/năm từ các mỏ vùng Hòn Gai về cảng để cắt giảm xe tải chở than gây ô nhiễm.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bituminous_Coal.JPG",
    category: "LOGISTICS & MÔI TRƯỜNG",
    link: "https://www.vietnam.vn/"
  },
  {
    id: 2,
    title: "Từ 15/9/2026, Bộ Công Thương quản lý nhà nước về địa chất và khoáng sản",
    description: "Công bố sự thay đổi quan trọng trong cơ quan điều hành quản lý khai thác tài nguyên mỏ bắt đầu áp dụng từ ngày mai, theo thông tin trên trang Luật Việt Nam.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2942&auto=format&fit=crop",
    category: "CHÍNH SÁCH & PHÁP LUẬT",
    link: "https://luatvietnam.vn/"
  },
  {
    id: 3,
    title: "TKV sáp nhập thêm 2 công ty, dự kiến vận hành từ cuối tháng 9",
    description: "Phản ánh quá trình tinh gọn bộ máy của Tập đoàn Công nghiệp Than - Khoáng sản Việt Nam (TKV) khi sáp nhập Công ty Chế biến than Quảng Ninh vào Công ty Tuyển than Hòn Gai.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Ashtabulacoalcars_e2.jpg",
    category: "TIN TỨC TẬP ĐOÀN",
    link: "https://laodong.vn/"
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [chartType, setChartType] = useState<"line" | "bar" | "candlestick">("candlestick");
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "80%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-red-500/30 font-sans">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-yellow-500 origin-left z-[60]" 
        style={{ scaleX }} 
      />
      <Header />

      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-900">
          <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40 z-10" />
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1587293852726-692b5e5ee736?q=80&w=2940&auto=format&fit=crop" 
              alt="Industrial Port" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
          </motion.div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              style={{ y: heroTextY, opacity: heroOpacity }}
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">Hệ sinh thái B2B Đa ngành</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-serif">
                Năng lượng bền vững,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Động lực phát triển.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                Long Thuan Group Corporation - Đơn vị hàng đầu trong lĩnh vực nhập khẩu phân phối than đá, cung cấp dịch vụ logistics, cảng biển và xuất khẩu nông sản với chuỗi cung ứng khép kín tại Việt Nam.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <a href="#services" onClick={handleSectionClick} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  Khám phá Giải pháp
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#pricing" onClick={handleSectionClick} className="inline-flex items-center gap-2 glass-panel hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300">
                  Xem Bảng giá Real-time
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION: COMPANY VIDEO */}
        <section id="about" className="scroll-mt-28 py-24 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 max-w-3xl"
            >
              <div className="text-red-500 font-semibold tracking-wider text-sm mb-3 uppercase">Long Thuận Group</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">Kết nối năng lượng, mở rộng tương lai</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Cùng nhìn lại năng lực vận hành và hệ sinh thái dịch vụ của Long Thuận Group qua các video giới thiệu.
              </p>
            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videoData.map((video) => (
                <div key={video.id} className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: PRICE TRACKER (DASHBOARD) */}
        <section id="pricing" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Thị trường Hàng hóa</h2>
              <p className="text-lg text-slate-400">
                Dashboard cập nhật biến động giá than thực tế theo thời gian thực. Nguồn dữ liệu tham khảo cho các doanh nghiệp B2B và nhà máy nhiệt điện.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {[
                { title: "Than Newcastle", tag: "FOB Úc", price: "$140.50", change: "-1.1%", trend: "down", color: "blue" },
                { title: "Than Nga (6000 NAR)", tag: "CFR VN", price: "$133.50", change: "+1.5%", trend: "up", color: "red" },
                { title: "Thị Trường Nội Địa", tag: "Bán buôn", price: "$143.00", change: "-1.7%", trend: "down", color: "yellow" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-slate-600 transition-colors">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`} />
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{item.title}</div>
                    <span className="px-2 py-1 rounded text-[10px] font-bold bg-slate-900 text-slate-300 border border-slate-700">{item.tag}</span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-3 flex items-baseline gap-1">
                    {item.price}<span className="text-sm font-normal text-slate-500">/tấn</span>
                  </div>
                  <div className={`flex items-center text-sm font-medium ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    <TrendingUp className={`h-4 w-4 mr-1 ${item.trend === 'down' ? 'transform rotate-180' : ''}`} />
                    {item.change} <span className="text-slate-500 ml-1 font-normal">(30 ngày)</span>
                  </div>
                </motion.div>
              ))}
              
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-red-900/40 to-slate-900 border border-red-900/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
                <div className="relative z-10 w-full">
                  <div className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Báo giá Doanh nghiệp</div>
                  <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 group-hover:shadow-red-600/40 transform group-hover:-translate-y-1">
                    Liên hệ B2B
                  </button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {chartType === 'candlestick' ? 'Biểu đồ Nến (OHLC) - Than Newcastle' : 'Biểu đồ So sánh Giá các loại Than'}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {chartType === 'line' && 'Biểu đồ đường (Line chart): Nối các mức giá đóng cửa theo thời gian để thấy rõ xu hướng chung.'}
                    {chartType === 'bar' && 'Biểu đồ cột/thanh (Bar chart): So sánh trực quan mức giá giữa các loại than qua từng tháng.'}
                    {chartType === 'candlestick' && 'Biểu đồ nến Nhật (Candlestick chart): Trực quan hóa biến động giá (Mở, Đóng, Cao, Thấp) nhận diện lực mua và bán rõ ràng hơn.'}
                  </p>
                </div>
                
                <div className="flex bg-slate-800/50 p-1 rounded-lg mt-4 md:mt-0 border border-slate-700">
                  <button 
                    onClick={() => setChartType('line')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${chartType === 'line' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'}`}
                  >
                    <LineChartIcon className="w-4 h-4" /> Đường
                  </button>
                  <button 
                    onClick={() => setChartType('bar')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${chartType === 'bar' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'}`}
                  >
                    <BarChart3 className="w-4 h-4" /> Cột
                  </button>
                  <button 
                    onClick={() => setChartType('candlestick')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${chartType === 'candlestick' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'}`}
                  >
                    <CandlestickChart className="w-4 h-4" /> Nến Nhật
                  </button>
                </div>
              </div>

              <div className="h-[400px] w-full text-black">
                {chartType === 'candlestick' ? (
                  <ReactApexChart 
                    options={{
                      chart: { type: 'candlestick', background: 'transparent', toolbar: { show: false } },
                      theme: { mode: 'dark' },
                      xaxis: { type: 'datetime', labels: { style: { colors: '#94a3b8' } }, axisBorder: { show: false }, axisTicks: { show: false } },
                      yaxis: { tooltip: { enabled: true }, labels: { style: { colors: '#94a3b8' } } },
                      grid: { borderColor: '#1e293b', strokeDashArray: 4 },
                      plotOptions: { candlestick: { colors: { upward: '#22c55e', downward: '#ef4444' } } },
                      tooltip: { theme: 'dark' }
                    }}
                    series={[{ data: ohlcData }]} 
                    type="candlestick" 
                    height="100%" 
                  />
                ) : (
                  <ReactApexChart 
                    options={{
                      chart: { type: chartType, background: 'transparent', toolbar: { show: false } },
                      theme: { mode: 'dark' },
                      colors: ['#eab308', '#ef4444', '#3b82f6'],
                      xaxis: { categories: barLineData.categories, labels: { style: { colors: '#94a3b8' } }, axisBorder: { show: false }, axisTicks: { show: false } },
                      yaxis: { labels: { style: { colors: '#94a3b8' } } },
                      grid: { borderColor: '#1e293b', strokeDashArray: 4 },
                      stroke: { curve: 'smooth', width: chartType === 'line' ? 3 : 0 },
                      legend: { position: 'top', labels: { colors: '#94a3b8' } },
                      dataLabels: { enabled: false },
                      tooltip: { theme: 'dark' },
                      plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } }
                    }}
                    series={barLineData.series} 
                    type={chartType} 
                    height="100%" 
                  />
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: IMPORTED COAL */}
        <section className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="text-red-500 font-semibold tracking-wider text-sm mb-3 uppercase">Năng lượng Cốt lõi</motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">Than Nhập Khẩu Nga <br/>Chất Lượng Cao</motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Long Thuận tự hào là đối tác chiến lược của các mỏ than lớn nhất tại Liên bang Nga. Nguồn than được khai thác từ vùng Kemerovo (Kuzbass) - vựa than lớn nhất nước Nga, đảm bảo chất lượng vượt trội cho các ngành công nghiệp nặng.
                </motion.p>
                <motion.ul variants={staggerContainer} className="space-y-6 mb-8">
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-red-900/30 flex items-center justify-center border border-red-500/20 mr-4">
                      <Flame className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Nhiệt trị cao (CV)</h4>
                      <p className="text-slate-400">Đạt từ 5500 - 6500 kcal/kg, tối ưu hóa triệt để hiệu suất cho lò hơi công nghiệp.</p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 mr-4">
                      <ShieldCheck className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Độ tro & Lưu huỳnh cực thấp</h4>
                      <p className="text-slate-400">Đạt chuẩn môi trường khắt khe, giảm thiểu tối đa chi phí xử lý khí thải và xỉ than.</p>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/60/Coal_Mine.jpg" 
                  alt="Russian Coal Mine" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[600px] w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: B2B LOGISTICS & SEAPORT */}
        <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="text-blue-500 font-semibold tracking-wider text-sm mb-3 uppercase">Hạ tầng Logistics</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Chuỗi Cung Ứng Khép Kín</h2>
              <p className="text-lg text-slate-400">
                Lợi thế cạnh tranh tuyệt đối của Long Thuận: Sở hữu bến phao nổi, cẩu trang bị hiện đại và đội xe vận tải chuyên dụng, kiểm soát 100% rủi ro logistics.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="glass-panel p-10 rounded-2xl group hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                <Globe2 className="h-12 w-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4">Cảng & Bến Phao Gò Gia</h3>
                <p className="text-slate-400 leading-relaxed">
                  Đủ năng lực tiếp nhận các siêu tàu tải trọng lên đến <strong>120,000 DWT</strong>, giúp giảm mạnh chi phí cước biển quốc tế trên mỗi tấn hàng nhập khẩu.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-panel p-10 rounded-2xl group hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20">
                <Anchor className="h-12 w-12 text-red-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4">Hệ Thống Cẩu Nổi</h3>
                <p className="text-slate-400 leading-relaxed">
                  Trang thiết bị xếp dỡ công suất lớn hoạt động 24/7. Đảm bảo tốc độ giải phóng tàu cực nhanh, lưu kho bãi chuyên nghiệp giữ nguyên phẩm cấp hàng.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-panel p-10 rounded-2xl group hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-900/20">
                <Truck className="h-12 w-12 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4">Đội Xe Vận Tải Nội Địa</h3>
                <p className="text-slate-400 leading-relaxed">
                  Sở hữu hơn <strong>50 đầu kéo</strong> chuyên dụng và <strong>6 sà lan 4.500 tấn</strong>. Vận chuyển đa phương thức an toàn, đúng hẹn đến kho nhà máy.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: AGRICULTURE */}
        <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 -ml-40 -mt-40 w-96 h-96 rounded-full bg-green-900/10 blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-green-600/20 to-transparent rounded-2xl transform -translate-x-4 translate-y-4" />
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop" 
                  alt="Agricultural Export" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full hover:scale-105"
                />
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="order-1 lg:order-2"
              >
                <motion.div variants={fadeInUp} className="text-green-500 font-semibold tracking-wider text-sm mb-3 uppercase">Đa dạng hóa Kinh doanh</motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">Xuất Khẩu Nông Sản <br/>Tiêu Chuẩn Quốc Tế</motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Phát huy lợi thế khổng lồ về kho bãi và cảng biển, Long Thuận Group đã mở rộng mạnh mẽ sang lĩnh vực thu mua, chế biến và xuất khẩu nông sản Việt Nam vươn ra thị trường toàn cầu.
                </motion.p>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp} className="glass-panel p-6 rounded-xl">
                    <Wheat className="h-8 w-8 text-green-500 mb-4" />
                    <h4 className="text-white font-bold mb-2">Chất lượng GlobalGAP</h4>
                    <p className="text-sm text-slate-400">Quy trình kiểm định khắt khe từ vùng trồng đến cảng xuất.</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="glass-panel p-6 rounded-xl">
                    <MapPin className="h-8 w-8 text-green-500 mb-4" />
                    <h4 className="text-white font-bold mb-2">Thị trường Đa dạng</h4>
                    <p className="text-sm text-slate-400">Xuất khẩu ổn định sang Trung Đông, Châu Âu và Châu Á.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PARTNERS (MARQUEE) */}
        <section id="partners" className="py-16 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Đối tác Chiến lược & Khách hàng Doanh nghiệp</h2>
          </div>
          
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-marquee">
              {[1, 2].map((loop) => (
                <div key={loop} className="flex items-center space-x-24 mx-12">
                  <li className="text-3xl font-black tracking-tighter text-slate-600 grayscale hover:text-white hover:grayscale-0 transition-all duration-300 cursor-default">SUEK</li>
                  <li className="text-3xl font-bold font-serif text-slate-600 grayscale hover:text-white hover:grayscale-0 transition-all duration-300 cursor-default">KUZBASSRAZREZUGOL</li>
                  <li className="text-3xl font-bold text-slate-600 grayscale hover:text-red-500 hover:grayscale-0 transition-all duration-300 cursor-default">EVN</li>
                  <li className="text-3xl font-bold text-slate-600 grayscale hover:text-blue-500 hover:grayscale-0 transition-all duration-300 cursor-default">PVN</li>
                  <li className="text-3xl font-black italic text-slate-600 grayscale hover:text-yellow-500 hover:grayscale-0 transition-all duration-300 cursor-default">TKV</li>
                </div>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: NEWS */}
        <section id="news" className="py-24 bg-slate-900 border-t border-slate-800">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Tin Tức Thị Trường</h2>
                <p className="text-lg text-slate-400">Báo cáo phân tích chuyên sâu và cập nhật cung cầu.</p>
              </div>
              <a href="https://www.thitruonghanghoa.com/tin-tuc" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-sm font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-wider">
                Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {newsData.map((news) => (
                <motion.a 
                  variants={fadeInUp}
                  key={news.id} 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block cursor-pointer glass-panel p-4 rounded-2xl hover:bg-slate-800/50 transition-colors"
                >
                  <article>
                    <div className="relative h-56 mb-6 overflow-hidden rounded-xl bg-slate-800">
                      <img 
                        src={news.image}
                        alt={news.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="text-xs text-red-500 font-bold mb-3 tracking-wider">{news.category}</div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-3 leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {news.description}
                    </p>
                  </article>
                </motion.a>
              ))}
            </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
