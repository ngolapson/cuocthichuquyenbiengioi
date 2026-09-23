import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  Trophy,
  Award,
  PlayCircle,
  BarChart3,
  Calendar,
  FileQuestion,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Flame,
  Users,
  Download,
  FolderArchive
} from 'lucide-react';
import { CONTEST_INFO, PRIZES } from '../data/contestInfo';
import { UserProfile } from '../types';
import { downloadAppZip } from '../utils/downloadZip';

interface HomeTabProps {
  onStartExam: () => void;
  onViewResults: () => void;
  currentUser: UserProfile | null;
  totalAttemptsCount: number;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onStartExam,
  onViewResults,
  currentUser,
  totalAttemptsCount,
}) => {
  // Real-time calculation / countdown timer simulation
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 17, hours: 8, minutes: 24, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Banner highlight badge */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-amber-900 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            <Flame className="w-5 h-5 text-yellow-200 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base">Cuộc thi đang diễn ra sôi nổi trên toàn địa bàn tỉnh Lạng Sơn!</h3>
            <p className="text-xs text-amber-800">
              Chào mừng cán bộ, chiến sĩ LLVT, đoàn viên, thanh niên và nhân dân các dân tộc tỉnh nhà tham gia dự thi.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold bg-white px-3 py-1.5 rounded-lg border border-amber-200 shadow-xs">
            <Users className="w-4 h-4 text-amber-600" />
            <span>{totalAttemptsCount.toLocaleString('vi-VN')} lượt thí sinh</span>
          </div>
          <button
            type="button"
            onClick={downloadAppZip}
            className="flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-yellow-300 px-3 py-1.5 rounded-lg shadow-sm transition-all hover:scale-105 cursor-pointer"
            title="Tải toàn bộ mã nguồn app về máy tính"
          >
            <Download className="w-3.5 h-3.5 text-yellow-300" />
            <span>Tải App về máy (.ZIP)</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Section as drawn in the sketch */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: 3 sections (HÌNH THỨC THI, THỜI GIAN THI, CƠ CẤU GIẢI THƯỞNG) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. HÌNH THỨC THI */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-red-800 to-red-700 px-5 py-3 border-b border-red-900 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <FileQuestion className="w-5 h-5 text-yellow-300" />
                HÌNH THỨC THI
              </h2>
              <span className="text-xs font-semibold text-yellow-200 uppercase tracking-wider">Trắc nghiệm</span>
            </div>
            <div className="p-5 sm:p-6 space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Thi trắc nghiệm trực tuyến</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Thí sinh truy cập hệ thống bằng máy tính hoặc điện thoại thông minh kết nối internet để làm bài.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Số lượng câu hỏi: 20 câu hỏi</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Mỗi lượt làm bài gồm <strong>20 câu hỏi trắc nghiệm kiến thức</strong> (chọn 1 trong 4 đáp án A, B, C, D) 
                    và <strong>01 câu hỏi phụ</strong> dự đoán tổng số lượt người tham gia cuộc thi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Thời gian làm bài: 20 phút</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Đồng hồ đếm ngược tự động, hết thời gian hệ thống sẽ tự động thu bài. Mỗi câu trả lời đúng được tính 01 điểm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THỜI GIAN THI */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-red-800 to-red-700 px-5 py-3 border-b border-red-900 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-300" />
                THỜI GIAN THI
              </h2>
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Đang diễn ra
              </span>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-1">
                    Bắt đầu từ:
                  </span>
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                    00h00 Thứ Hai
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Ngày 28 tháng 9 năm 2026
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-1">
                    Kết thúc vào:
                  </span>
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                    24h00 Chủ Nhật
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Ngày 11 tháng 10 năm 2026
                  </p>
                </div>
              </div>

              {/* Countdown timer ticker */}
              <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-yellow-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Thời gian còn lại của cuộc thi:
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-red-950/70 rounded-lg py-2 border border-red-700">
                    <span className="text-xl sm:text-2xl font-black text-yellow-400 block">{timeLeft.days}</span>
                    <span className="text-[10px] sm:text-xs text-red-200 uppercase font-semibold">Ngày</span>
                  </div>
                  <div className="bg-red-950/70 rounded-lg py-2 border border-red-700">
                    <span className="text-xl sm:text-2xl font-black text-yellow-400 block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-red-200 uppercase font-semibold">Giờ</span>
                  </div>
                  <div className="bg-red-950/70 rounded-lg py-2 border border-red-700">
                    <span className="text-xl sm:text-2xl font-black text-yellow-400 block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-red-200 uppercase font-semibold">Phút</span>
                  </div>
                  <div className="bg-red-950/70 rounded-lg py-2 border border-red-700">
                    <span className="text-xl sm:text-2xl font-black text-yellow-400 block">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-red-200 uppercase font-semibold">Giây</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 3. CƠ CẤU GIẢI THƯỞNG */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-red-800 to-red-700 px-5 py-3 border-b border-red-900 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-300" />
                CƠ CẤU GIẢI THƯỞNG
              </h2>
              <span className="text-xs font-semibold text-yellow-200 uppercase tracking-wider">Cá nhân</span>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIZES.map((prize, idx) => (
                  <div
                    key={prize.id}
                    className={`p-4 rounded-xl border transition-transform hover:-translate-y-0.5 ${prize.bgGradient}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-xs text-amber-900">
                          {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '🎖️'}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{prize.title}</h4>
                      </div>
                      <span className="text-xs font-bold text-slate-600 bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                        {prize.quantity}
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="text-xs text-slate-500 font-medium">Tiền thưởng:</span>
                      <span className="text-base sm:text-lg font-black text-red-700">
                        {prize.amount}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 italic">
                      + Giấy chứng nhận của Ban Tổ chức cuộc thi
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Nguyên tắc xét giải:</strong> Thí sinh đạt điểm số cao nhất (tối đa 20 điểm) qua 20 câu hỏi; 
                  trong trường hợp bằng điểm sẽ tính thời gian làm bài ngắn nhất và dự đoán câu hỏi phụ sát nhất.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: 2 Prominent Action Boxes ([ VÀO THI ] & [ KẾT QUẢ ]) as explicitly drawn */}
        <div className="lg:col-span-5 space-y-6">

          {/* VÀO THI CARD (Box 1 in handwritten note) */}
          <div className="relative group overflow-hidden rounded-2xl border-2 border-red-700 bg-gradient-to-b from-red-600 via-red-700 to-red-900 text-white p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-200">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-36 h-36 bg-red-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-yellow-400 text-red-950 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-300">
                  Sẵn sàng kiểm tra kiến thức
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1 drop-shadow font-serif">
                  VÀO THI
                </h3>
                <p className="text-xs sm:text-sm text-red-100 mt-2 font-medium leading-relaxed max-w-sm mx-auto">
                  Tham gia trả lời 20 câu hỏi trắc nghiệm về chủ quyền biên giới Lạng Sơn. Nhận kết quả và chứng nhận ngay sau khi nộp bài!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onStartExam}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-red-950 font-black text-base sm:text-lg uppercase tracking-wide shadow-lg hover:shadow-yellow-400/50 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>BẮT ĐẦU LÀM BÀI</span>
                  <ChevronRight className="w-5 h-5 font-bold" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-yellow-200/90 pt-1 font-semibold">
                <span>⏱️ 20 phút</span>
                <span>•</span>
                <span>📝 20 câu hỏi</span>
                <span>•</span>
                <span>🏆 Cấp chứng nhận</span>
              </div>
            </div>
          </div>

          {/* KẾT QUẢ CARD (Box 2 in handwritten note) */}
          <div className="relative group overflow-hidden rounded-2xl border-2 border-amber-600/70 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-950 text-white p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-200">
            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-950 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <BarChart3 className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Vinh danh & Tra cứu
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1 drop-shadow font-serif">
                  KẾT QUẢ
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium leading-relaxed max-w-sm mx-auto">
                  Tra cứu điểm thi cá nhân, xem bảng vàng vinh danh các thí sinh có thành tích xuất sắc nhất trên địa bàn tỉnh Lạng Sơn.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onViewResults}
                  className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-base sm:text-lg uppercase tracking-wide shadow-lg hover:shadow-white/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>XEM BẢNG XẾP HẠNG</span>
                  <ChevronRight className="w-5 h-5 font-bold" />
                </button>
              </div>

              <div className="text-xs text-slate-400 pt-1">
                Cập nhật liên tục kết quả từng giờ · Tra cứu theo Họ tên / SĐT / Đơn vị
              </div>
            </div>
          </div>

          {/* Fast Facts / Useful info widget for Lạng Sơn border */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Thông tin hỗ trợ thí sinh
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p>• <strong>Ban Tổ chức:</strong> Ban Chỉ đạo Công tác thông tin đối ngoại tỉnh Lạng Sơn</p>
              <p>• <strong>Bộ phận Thường trực:</strong> Ban Tuyên giáo Tỉnh ủy Lạng Sơn</p>
              <p>• <strong>Hỗ trợ kỹ thuật:</strong> 0205.3812.xxx (Giờ hành chính)</p>
              <p>• <strong>Tài liệu tham khảo:</strong> Luật Biên giới quốc gia, Luật Biên phòng Việt Nam 2020, Lịch sử Đảng bộ tỉnh Lạng Sơn.</p>
            </div>
          </div>

          {/* Download Full Source Code Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 p-5 text-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-yellow-400">
              <FolderArchive className="w-5 h-5 text-yellow-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Tải Toàn Bộ Ứng Dụng Về Máy Tính
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Gói ZIP chứa toàn bộ mã nguồn React + Vite + Tailwind, bộ 20 câu hỏi kiến thức biên cương Xứ Lạng và tài liệu hướng dẫn cài đặt chạy offline/server riêng.
            </p>
            <button
              type="button"
              onClick={downloadAppZip}
              className="w-full py-2.5 px-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Tải file .ZIP về máy ngay</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
