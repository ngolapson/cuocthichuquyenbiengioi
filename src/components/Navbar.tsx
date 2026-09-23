import React from 'react';
import { Home, BookOpen, HelpCircle, UserPlus, LogIn, LogOut, UserCheck, Download } from 'lucide-react';
import { NavTab, UserProfile } from '../types';
import { downloadAppZip } from '../utils/downloadZip';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  currentUser: UserProfile | null;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  currentUser,
  onOpenAuth,
  onLogout,
}) => {
  return (
    <nav className="bg-red-800 border-b-2 border-red-950 sticky top-0 z-40 shadow-md">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Navigation row mimicking the box table in the sketch */}
        <div className="flex flex-wrap items-stretch justify-between divide-x divide-red-700/80 border-x border-red-700/80">
          
          {/* 1. Trang chủ */}
          <button
            onClick={() => onSelectTab('home')}
            className={`flex-1 min-w-[90px] sm:min-w-[120px] py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase transition-all duration-150 ${
              currentTab === 'home'
                ? 'bg-yellow-400 text-red-950 shadow-inner'
                : 'text-white hover:bg-red-700/70 hover:text-yellow-200'
            }`}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <span>Trang chủ</span>
          </button>

          {/* 2. Thể lệ cuộc thi */}
          <button
            onClick={() => onSelectTab('rules')}
            className={`flex-1 min-w-[110px] sm:min-w-[140px] py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase transition-all duration-150 ${
              currentTab === 'rules'
                ? 'bg-yellow-400 text-red-950 shadow-inner'
                : 'text-white hover:bg-red-700/70 hover:text-yellow-200'
            }`}
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Thể lệ cuộc thi</span>
          </button>

          {/* 3. Hướng dẫn */}
          <button
            onClick={() => onSelectTab('guide')}
            className={`flex-1 min-w-[100px] sm:min-w-[120px] py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase transition-all duration-150 ${
              currentTab === 'guide'
                ? 'bg-yellow-400 text-red-950 shadow-inner'
                : 'text-white hover:bg-red-700/70 hover:text-yellow-200'
            }`}
          >
            <HelpCircle className="w-4 h-4 flex-shrink-0" />
            <span>Hướng dẫn</span>
          </button>

          {/* 4 & 5. Tạo tài khoản & Đăng nhập (or Logged In Status) */}
          {currentUser ? (
            <div className="flex items-center px-3 sm:px-4 py-2 gap-2 bg-red-900/60 text-white text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-yellow-300 font-semibold max-w-[160px] truncate">
                <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">{currentUser.fullName}</span>
              </div>
              <button
                type="button"
                onClick={downloadAppZip}
                title="Tải toàn bộ ứng dụng về máy tính (.ZIP)"
                className="p-1.5 rounded hover:bg-red-700 text-yellow-300 transition-colors flex items-center gap-1 text-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tải App</span>
              </button>
              <button
                onClick={onLogout}
                title="Đăng xuất"
                className="p-1.5 rounded hover:bg-red-700 text-red-200 hover:text-white transition-colors flex items-center gap-1 text-xs cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Thoát</span>
              </button>
            </div>
          ) : (
            <>
              {/* Tạo tài khoản */}
              <button
                onClick={() => onOpenAuth('register')}
                className="flex-1 min-w-[110px] sm:min-w-[130px] py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase text-white hover:bg-red-700/70 hover:text-yellow-200 transition-all duration-150"
              >
                <UserPlus className="w-4 h-4 flex-shrink-0 text-yellow-400" />
                <span className="truncate">Tạo tài khoản</span>
              </button>

              {/* Đăng nhập */}
              <button
                onClick={() => onOpenAuth('login')}
                className="flex-1 min-w-[100px] sm:min-w-[120px] py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase bg-red-900/50 hover:bg-red-900 text-yellow-300 hover:text-yellow-100 transition-all duration-150"
              >
                <LogIn className="w-4 h-4 flex-shrink-0 text-yellow-400" />
                <span className="truncate">Đăng nhập</span>
              </button>

              {/* Tải App (.ZIP) */}
              <button
                type="button"
                onClick={downloadAppZip}
                title="Tải toàn bộ ứng dụng về máy tính (.ZIP)"
                className="py-3 px-3 sm:px-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold uppercase bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-150 cursor-pointer"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span className="hidden md:inline">Tải App</span>
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};
