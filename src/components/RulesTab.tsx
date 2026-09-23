import React from 'react';
import { BookOpen, Award, Clock, Users, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTEST_INFO, PRIZES } from '../data/contestInfo';

interface RulesTabProps {
  onStartExam: () => void;
}

export const RulesTab: React.FC<RulesTabProps> = ({ onStartExam }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Title Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-6 border-b border-slate-200">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700">
            BAN CHỈ ĐẠO CÔNG TÁC THÔNG TIN ĐỐI NGOẠI TỈNH LẠNG SƠN
          </p>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 font-serif">
            THỂ LỆ CUỘC THI TRỰC TUYẾN
          </h2>
          <p className="text-sm sm:text-base font-bold text-red-700 uppercase">
            "TÌM HIỂU KIẾN THỨC BẢO VỆ CHỦ QUYỀN BIÊN GIỚI TRÊN ĐỊA BÀN TỈNH LẠNG SƠN"
          </p>
          <p className="text-xs text-slate-500 italic">
            (Ban hành kèm theo Kế hoạch số 45/KH-BCĐ của Ban Chỉ đạo tỉnh)
          </p>
        </div>

        <div className="pt-6 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Điều 1 */}
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">I</span>
              MỤC ĐÍCH, Ý NGHĨA CUỘC THI
            </h3>
            <p>
              1. Tuyên truyền, phổ biến sâu rộng các chủ trương, đường lối của Đảng, chính sách, pháp luật của Nhà nước 
              về biên giới quốc gia; Nghị quyết số 33-NQ/TW của Bộ Chính trị về Chiến lược bảo vệ biên giới quốc gia; 
              Luật Biên giới quốc gia; Luật Biên phòng Việt Nam và 03 văn kiện pháp lý biên giới trên đất liền Việt Nam - Trung Quốc.
            </p>
            <p>
              2. Nâng cao nhận thức, trách nhiệm của cán bộ, đảng viên, lực lượng vũ trang, đoàn viên, thanh niên và nhân dân 
              các dân tộc tỉnh Lạng Sơn trong công tác quản lý, xây dựng và bảo vệ vững chắc chủ quyền lãnh thổ, an ninh biên giới quốc gia.
            </p>
          </section>

          {/* Điều 2 */}
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">II</span>
              ĐỐI TƯỢNG THAM GIA DỰ THI
            </h3>
            <p>
              Toàn thể cán bộ, công chức, viên chức, người lao động; cán bộ, chiến sĩ các đơn vị lực lượng vũ trang (Bộ đội Biên phòng, Quân sự, Công an); 
              đoàn viên, thanh niên, học sinh, sinh viên và nhân dân các dân tộc đang sinh sống, học tập, làm việc trên địa bàn tỉnh Lạng Sơn.
            </p>
          </section>

          {/* Điều 3 */}
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">III</span>
              HÌNH THỨC VÀ NỘI DUNG THI
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <p><strong>1. Hình thức thi:</strong> Thi trắc nghiệm trực tuyến trên cổng điện tử của cuộc thi.</p>
              <p>
                <strong>2. Số lượng câu hỏi:</strong> Mỗi lượt thi gồm <strong>20 câu hỏi trắc nghiệm</strong> kiến thức 
                (thời gian làm bài tối đa <strong>20 phút</strong>) và <strong>01 câu hỏi phụ</strong> dự đoán số lượt người tham gia.
              </p>
              <p>
                <strong>3. Số lần dự thi:</strong> Thí sinh được tham gia thi nhiều lần trong thời gian diễn ra cuộc thi; 
                Ban Tổ chức sẽ lấy kết quả lượt thi có điểm số cao nhất và thời gian làm bài nhanh nhất để xét giải.
              </p>
            </div>
          </section>

          {/* Điều 4 */}
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">IV</span>
              THỜI GIAN TỔ CHỨC CUỘC THI
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
                <span className="font-bold text-red-800 block text-xs">Thời điểm bắt đầu:</span>
                <span className="font-extrabold text-slate-900">{CONTEST_INFO.startDateString}</span>
              </div>
              <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-xl">
                <span className="font-bold text-red-800 block text-xs">Thời điểm kết thúc:</span>
                <span className="font-extrabold text-slate-900">{CONTEST_INFO.endDateString}</span>
              </div>
            </div>
          </section>

          {/* Điều 5 */}
          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">V</span>
              CƠ CẤU GIẢI THƯỞNG
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRIZES.map((prize) => (
                <div key={prize.id} className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">{prize.title} ({prize.quantity})</span>
                    <span className="text-xs text-slate-500">{prize.rewardDesc}</span>
                  </div>
                  <span className="font-black text-red-700 text-base">{prize.amount}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Điều 6 */}
          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase text-red-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-xs font-black">VI</span>
              CÁCH THỨC XÉT GIẢI THƯỞNG
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-2">
              <li>Thí sinh đạt số câu trả lời đúng nhiều nhất (tối đa 20/20 câu).</li>
              <li>Trong trường hợp nhiều thí sinh có cùng số điểm, xét thời gian hoàn thành bài thi ngắn nhất.</li>
              <li>Nếu tiếp tục bằng nhau về thời gian, xét câu dự đoán số lượt người tham gia có đáp số gần đúng nhất.</li>
            </ol>
          </section>

        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center">
          <button
            onClick={onStartExam}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-yellow-300 font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Đã hiểu thể lệ · Vào làm bài ngay</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
