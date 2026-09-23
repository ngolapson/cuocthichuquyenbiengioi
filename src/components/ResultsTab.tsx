import React, { useState } from 'react';
import {
  Trophy,
  Search,
  Filter,
  Award,
  Clock,
  CheckCircle2,
  Calendar,
  Building2,
  ArrowUpDown,
  Download
} from 'lucide-react';
import { ExamAttempt } from '../types';
import { DISTRICTS } from '../data/contestInfo';

interface ResultsTabProps {
  attempts: ExamAttempt[];
  onOpenCertificate: (attempt: ExamAttempt) => void;
  onStartExam: () => void;
}

export const ResultsTab: React.FC<ResultsTabProps> = ({
  attempts,
  onOpenCertificate,
  onStartExam,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');

  // Filter and sort attempts
  const filteredAttempts = attempts
    .filter((att) => {
      const matchSearch =
        att.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        att.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        att.district.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDistrict =
        selectedDistrict === 'ALL' || att.district === selectedDistrict;
      return matchSearch && matchDistrict;
    })
    .sort((a, b) => {
      // Sort by score desc, then by timeSpentSeconds asc
      if (b.score !== a.score) return b.score - a.score;
      return a.timeSpentSeconds - b.timeSpentSeconds;
    });

  const topThree = filteredAttempts.slice(0, 3);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}p ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-300 flex items-center justify-center md:justify-start gap-1.5">
              <Trophy className="w-4 h-4 text-yellow-400" />
              Bảng Vàng Danh Dự
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-serif">
              BẢNG XẾP HẠNG & KẾT QUẢ CUỘC THI
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Cập nhật thành tích của các thí sinh tham gia cuộc thi Tìm hiểu kiến thức bảo vệ chủ quyền biên giới trên địa bàn tỉnh Lạng Sơn.
            </p>
          </div>

          <button
            onClick={onStartExam}
            className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black text-sm uppercase tracking-wide shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Award className="w-4 h-4" />
            <span>Vào thi để ghi danh</span>
          </button>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      {topThree.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Rank 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs order-2 md:order-1 relative flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xl mx-auto shadow-inner mb-2 border-2 border-slate-300">
              🥈
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Hạng Nhì</span>
              <h4 className="font-bold text-slate-900 text-base mt-1">{topThree[1].userName}</h4>
              <p className="text-xs text-slate-500 truncate">{topThree[1].unit}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-red-700 text-sm">{topThree[1].score}/20 điểm</span>
              <span className="text-slate-500">{formatTime(topThree[1].timeSpentSeconds)}</span>
            </div>
          </div>

          {/* Rank 1 (Tallest / Highlighted) */}
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-xl border-2 border-amber-400 p-6 text-center shadow-md order-1 md:order-2 relative flex flex-col justify-between -mt-2">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-black text-2xl mx-auto shadow-md mb-2 border-2 border-amber-300">
              🥇
            </div>
            <div>
              <span className="text-xs font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                Hạng Nhất Toàn Tỉnh
              </span>
              <h4 className="font-black text-slate-900 text-lg mt-2">{topThree[0].userName}</h4>
              <p className="text-xs text-slate-600 font-medium truncate">{topThree[0].unit}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold">
              <span className="font-black text-red-700 text-base">{topThree[0].score}/20 điểm</span>
              <span className="text-slate-600">{formatTime(topThree[0].timeSpentSeconds)}</span>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs order-3 relative flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-amber-700/20 text-amber-900 flex items-center justify-center font-bold text-xl mx-auto shadow-inner mb-2 border-2 border-amber-700/40">
              🥉
            </div>
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase">Hạng Ba</span>
              <h4 className="font-bold text-slate-900 text-base mt-1">{topThree[2].userName}</h4>
              <p className="text-xs text-slate-500 truncate">{topThree[2].unit}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-red-700 text-sm">{topThree[2].score}/20 điểm</span>
              <span className="text-slate-500">{formatTime(topThree[2].timeSpentSeconds)}</span>
            </div>
          </div>

        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo họ tên, đơn vị..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-hidden"
          />
        </div>

        {/* District filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden bg-white"
          >
            <option value="ALL">Tất cả địa bàn / Huyện ({attempts.length})</option>
            {DISTRICTS.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 text-slate-700 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 text-center w-14">Thứ hạng</th>
                <th className="py-3 px-4">Họ và tên</th>
                <th className="py-3 px-4">Đơn vị / Địa bàn</th>
                <th className="py-3 px-4 text-center">Điểm số</th>
                <th className="py-3 px-4 text-center">Thời gian</th>
                <th className="py-3 px-4 text-center hidden sm:table-cell">Dự đoán</th>
                <th className="py-3 px-4 text-right">Chứng nhận</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAttempts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500 text-xs">
                    Không tìm thấy thí sinh nào phù hợp với điều kiện tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredAttempts.map((attempt, index) => {
                  return (
                    <tr
                      key={attempt.id}
                      className="hover:bg-amber-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-center font-bold">
                        {index === 0 ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs leading-6">
                            1
                          </span>
                        ) : index === 1 ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-slate-300 text-slate-900 font-black text-xs leading-6">
                            2
                          </span>
                        ) : index === 2 ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-amber-700/30 text-amber-900 font-black text-xs leading-6">
                            3
                          </span>
                        ) : (
                          <span className="text-slate-500 font-semibold">{index + 1}</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {attempt.userName}
                      </td>

                      <td className="py-3.5 px-4 text-slate-600">
                        <div className="font-medium text-slate-800">{attempt.unit}</div>
                        <div className="text-[11px] text-slate-500">{attempt.district}</div>
                      </td>

                      <td className="py-3.5 px-4 text-center font-black text-red-700">
                        {attempt.score} <span className="text-slate-400 font-normal text-xs">/ 20</span>
                      </td>

                      <td className="py-3.5 px-4 text-center font-mono text-xs text-slate-700">
                        {formatTime(attempt.timeSpentSeconds)}
                      </td>

                      <td className="py-3.5 px-4 text-center text-xs text-slate-600 hidden sm:table-cell">
                        {attempt.predictionCount.toLocaleString('vi-VN')}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => onOpenCertificate(attempt)}
                          title="Xem giấy chứng nhận"
                          className="px-2.5 py-1 rounded-lg border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs inline-flex items-center gap-1 transition-colors"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-700" />
                          <span>Chứng nhận</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
