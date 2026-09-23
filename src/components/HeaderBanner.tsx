import React from 'react';
import { Shield, Award, Landmark, MapPin } from 'lucide-react';
import { CONTEST_INFO } from '../data/contestInfo';

export const HeaderBanner: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-950 text-white shadow-xl overflow-hidden border-b-4 border-yellow-500">
      {/* Subtle traditional geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Top microbar */}
      <div className="bg-red-950/80 border-b border-red-800/60 px-4 py-1.5 text-xs text-amber-200/90 font-medium text-center tracking-wide">
        <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM — ĐỘC LẬP - TỰ DO - HẠNH PHÚC</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Emblem & Provincial Identity */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 p-1 shadow-lg shadow-black/40 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-red-900 flex flex-col items-center justify-center border-2 border-yellow-300">
                  <Shield className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400" />
                  <span className="text-[9px] font-bold tracking-tighter text-yellow-300 uppercase mt-0.5">LẠNG SƠN</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-yellow-300 uppercase flex items-center justify-center md:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                {CONTEST_INFO.organizer}
              </p>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white drop-shadow-md mt-1 font-serif">
                {CONTEST_INFO.title}
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl font-bold text-yellow-400 tracking-wide uppercase drop-shadow">
                {CONTEST_INFO.subtitle}
              </p>
            </div>
          </div>

          {/* Border Badge Info */}
          <div className="hidden lg:flex flex-col items-end text-right border-l-2 border-yellow-500/40 pl-6 text-xs text-amber-100/90 space-y-1">
            <div className="flex items-center gap-1.5 text-yellow-300 font-bold">
              <Landmark className="w-4 h-4" />
              <span>Biên cương Xứ Lạng vững chắc</span>
            </div>
            <p>231,74 km đường biên đất liền</p>
            <p>474 cột mốc quốc giới Việt - Trung</p>
            <p className="text-yellow-400/90 font-medium">Bảo vệ vững chắc tấc đất biên cương Tổ quốc</p>
          </div>

        </div>
      </div>
    </header>
  );
};
