import React, { useRef } from 'react';
import { X, Printer, Download, Award, Shield, CheckCircle } from 'lucide-react';
import { ExamAttempt } from '../types';

interface CertificateModalProps {
  attempt: ExamAttempt;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ attempt, onClose }) => {
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const minutes = Math.floor(attempt.timeSpentSeconds / 60);
  const seconds = attempt.timeSpentSeconds % 60;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-amber-200 my-auto">
        
        {/* Header toolbar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-sm sm:text-base">Giấy chứng nhận điện tử</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>In giấy khen</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area (Stylized print view) */}
        <div ref={printAreaRef} className="p-4 sm:p-8 bg-amber-50/40">
          <div className="border-[8px] border-double border-amber-600 bg-white p-6 sm:p-10 rounded-lg shadow-inner relative text-center">
            
            {/* Corner traditional ornaments */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-700 pointer-events-none" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-700 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-700 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-700 pointer-events-none" />

            {/* National Header */}
            <div className="text-center space-y-1 mb-6">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-800 uppercase">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </p>
              <p className="text-xs font-semibold text-slate-700">
                Độc lập - Tự do - Hạnh phúc
              </p>
              <div className="w-24 h-0.5 bg-red-700 mx-auto mt-1" />
            </div>

            {/* Organizing Committee */}
            <p className="text-xs sm:text-sm font-bold uppercase text-red-800 tracking-wider">
              BAN CHỈ ĐẠO CÔNG TÁC THÔNG TIN ĐỐI NGOẠI TỈNH LẠNG SƠN
            </p>
            <p className="text-xs text-slate-600 italic mt-0.5">
              BAN TỔ CHỨC CUỘC THI TRỰC TUYẾN
            </p>

            {/* Title Certificate */}
            <div className="my-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-amber-700 font-serif tracking-tight">
                GIẤY CHỨNG NHẬN
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-widest font-semibold mt-1">
                Chứng nhận thành tích tham gia cuộc thi
              </p>
            </div>

            {/* Candidate Name */}
            <div className="space-y-2 mb-6">
              <p className="text-sm text-slate-700 italic">Chứng nhận đồng chí:</p>
              <h3 className="text-xl sm:text-2xl font-black text-red-900 uppercase font-serif tracking-wide border-b-2 border-amber-300 pb-1 max-w-md mx-auto">
                {attempt.userName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Đơn vị / Địa bàn: <strong>{attempt.unit || attempt.district}</strong>
              </p>
            </div>

            {/* Accomplishment description */}
            <div className="max-w-xl mx-auto space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Đã hoàn thành bài thi cuộc thi trực tuyến:
              </p>
              <p className="font-bold text-red-800 text-sm sm:text-base uppercase font-serif">
                "TÌM HIỂU KIẾN THỨC BẢO VỆ CHỦ QUYỀN BIÊN GIỚI TRÊN ĐỊA BÀN TỈNH LẠNG SƠN"
              </p>
              <div className="inline-flex items-center gap-3 bg-amber-100/70 border border-amber-300 px-4 py-2 rounded-lg font-semibold text-slate-900 mt-2">
                <span>Kết quả đạt: <strong className="text-red-700 text-base">{attempt.score} / {attempt.totalQuestions}</strong> câu đúng</span>
                <span>•</span>
                <span>Thời gian: <strong>{minutes} phút {seconds} giây</strong></span>
              </div>
            </div>

            {/* Signatures & Seal */}
            <div className="mt-8 pt-4 flex items-center justify-between px-4 sm:px-12 text-xs text-slate-800">
              <div className="text-left">
                <p className="italic text-slate-500">Mã dự thi:</p>
                <p className="font-mono font-bold text-slate-800">{attempt.id}</p>
                <div className="mt-3 flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Xác thực hệ thống số</span>
                </div>
              </div>

              <div className="text-center space-y-1">
                <p className="italic text-slate-600">Lạng Sơn, ngày {formattedDate}</p>
                <p className="font-bold uppercase text-red-900">TM. BAN TỔ CHỨC CUỘC THI</p>
                <p className="font-semibold text-slate-700 text-[11px]">TRƯỞNG BAN CHỈ ĐẠO</p>
                
                {/* Simulated Official Seal */}
                <div className="w-24 h-24 mx-auto my-2 rounded-full border-2 border-red-600 border-dashed p-1 flex items-center justify-center rotate-[-6deg] opacity-90">
                  <div className="w-full h-full rounded-full border border-red-600 flex flex-col items-center justify-center text-[8px] font-bold text-red-700 uppercase leading-tight">
                    <span>★ TỈNH LẠNG SƠN ★</span>
                    <span className="text-[10px] text-red-800 font-black">ĐÃ DUYỆT</span>
                    <span>BAN TỔ CHỨC</span>
                  </div>
                </div>
                
                <p className="font-bold text-slate-800 font-serif">Đã ký và đóng dấu điện tử</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-xs text-slate-500">
          Giấy chứng nhận điện tử có giá trị vinh danh kết quả tham gia cuộc thi trực tuyến của Ban Chỉ đạo tỉnh Lạng Sơn.
        </div>
      </div>
    </div>
  );
};
