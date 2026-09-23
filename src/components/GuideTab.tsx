import React from 'react';
import { HelpCircle, UserPlus, PlayCircle, CheckSquare, Trophy, ChevronRight, Laptop, Smartphone, Wifi, Download } from 'lucide-react';
import { downloadAppZip } from '../utils/downloadZip';

interface GuideTabProps {
  onStartExam: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const GuideTab: React.FC<GuideTabProps> = ({ onStartExam, onOpenAuth }) => {
  const steps = [
    {
      step: "01",
      title: "Đăng ký / Xác thực thông tin",
      desc: "Bấm vào 'Tạo tài khoản' hoặc khi bấm 'Vào thi', điền chính xác Họ tên, Số điện thoại và Đơn vị/Huyện (Lạng Sơn) để hệ thống ghi nhận thành tích chính chủ.",
      icon: UserPlus,
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      step: "02",
      title: "Bắt đầu làm bài thi",
      desc: "Bấm nút 'VÀO THI' tại Trang chủ. Màn hình thi hiển thị thời gian làm bài đếm ngược 20 phút và 20 câu hỏi trắc nghiệm.",
      icon: PlayCircle,
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      step: "03",
      title: "Trả lời câu hỏi & Câu hỏi phụ",
      desc: "Chọn đáp án đúng nhất (A, B, C hoặc D) cho từng câu. Sử dụng bảng số bên phải để chuyển nhanh giữa các câu hoặc cắm cờ xem lại. Điền số dự đoán ở câu hỏi phụ.",
      icon: CheckSquare,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      step: "04",
      title: "Nộp bài & Nhận Giấy chứng nhận",
      desc: "Kiểm tra lại toàn bộ câu hỏi và bấm 'Nộp bài'. Hệ thống tự động chấm điểm, hiển thị đáp án giải thích chi tiết và cấp Giấy chứng nhận điện tử có thể in/tải về.",
      icon: Trophy,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700">
            CỔNG THÔNG TIN CUỘC THI TỈNH LẠNG SƠN
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 font-serif">
            HƯỚNG DẪN THAM GIA CUỘC THI TRỰC TUYẾN
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Các bước đơn giản để cán bộ, đoàn viên, học sinh và nhân dân tham gia dự thi dễ dàng trên mọi thiết bị.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-red-300 transition-all shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-md bg-red-100 text-red-800">
                    BƯỚC {item.step}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device compatibility notice */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <Laptop className="w-4 h-4 text-red-700" />
              <span>Máy tính</span>
              <span>·</span>
              <Smartphone className="w-4 h-4 text-red-700" />
              <span>Điện thoại di động</span>
              <span>·</span>
              <Wifi className="w-4 h-4 text-emerald-600" />
              <span>Mạng 4G/Wifi</span>
            </div>
          </div>
          <span className="text-slate-500 italic">Hỗ trợ đầy đủ trên trình duyệt Chrome, Safari, Edge, Cốc Cốc</span>
        </div>

        {/* Action */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenAuth('register')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
          >
            Tạo tài khoản mới
          </button>
          <button
            type="button"
            onClick={downloadAppZip}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-red-700" />
            <span>Tải App về máy (.ZIP)</span>
          </button>
          <button
            onClick={onStartExam}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-yellow-300 font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Vào thi ngay</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
