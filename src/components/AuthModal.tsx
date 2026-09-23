import React, { useState } from 'react';
import { X, UserPlus, LogIn, CheckCircle2, Shield, Lock, Phone, User, Building } from 'lucide-react';
import { DISTRICTS } from '../data/contestInfo';
import { UserProfile } from '../types';

interface AuthModalProps {
  initialMode: 'login' | 'register';
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  initialMode,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  
  // Register state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(DISTRICTS[0]);
  const [unit, setUnit] = useState('');
  const [password, setPassword] = useState('');

  // Login state
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const newUser: UserProfile = {
      id: `user-${Date.now()}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      district,
      unit: unit.trim() || district,
    };

    onSuccess(newUser);
    onClose();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginPhone.trim()) return;

    // Login simulation or lookup
    const user: UserProfile = {
      id: `user-${Date.now()}`,
      fullName: loginPhone.length > 8 ? `Thí sinh (${loginPhone.slice(-4)})` : 'Thí sinh Lạng Sơn',
      phone: loginPhone.trim(),
      district: DISTRICTS[1],
      unit: 'Huyện Cao Lộc',
    };

    onSuccess(user);
    onClose();
  };

  const handleQuickDemoUser = (demoName: string, demoDistrict: string, demoUnit: string) => {
    const demoUser: UserProfile = {
      id: `demo-${Date.now()}`,
      fullName: demoName,
      phone: '0988123456',
      district: demoDistrict,
      unit: demoUnit,
    };
    onSuccess(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden my-auto">
        
        {/* Header Tabs */}
        <div className="bg-red-900 text-white p-4 flex items-center justify-between border-b border-red-950">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-sm sm:text-base text-yellow-300">
              {mode === 'register' ? 'ĐĂNG KÝ THÀNH VIÊN' : 'ĐĂNG NHẬP HỆ THỐNG'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-red-800 text-red-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch buttons */}
        <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase">
          <button
            onClick={() => setMode('register')}
            className={`py-3 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
              mode === 'register'
                ? 'border-red-700 text-red-800 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Tạo tài khoản</span>
          </button>
          <button
            onClick={() => setMode('login')}
            className={`py-3 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
              mode === 'login'
                ? 'border-red-700 text-red-800 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Đăng nhập</span>
          </button>
        </div>

        {/* Content Form */}
        <div className="p-5 sm:p-6 space-y-4">
          {mode === 'register' ? (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Họ và tên thí sinh <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Số điện thoại (dùng đăng nhập) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="0912 xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Địa bàn / Huyện <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden bg-white"
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mật khẩu <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Đơn vị công tác / Trường học
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="VD: Trường THPT Lạng Sơn / Xã Hữu Khánh..."
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-yellow-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all mt-2"
              >
                Đăng ký tài khoản
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Số điện thoại đăng ký
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="0912 xxx xxx"
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 outline-hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-yellow-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all mt-2"
              >
                Đăng nhập
              </button>
            </form>
          )}

          {/* Fast Demo login option for reviewers */}
          <div className="pt-3 border-t border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase block text-center mb-2">
              Hoặc đăng nhập nhanh mẫu để trải nghiệm:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleQuickDemoUser(
                    'Lương Thế Vinh',
                    'Huyện Cao Lộc',
                    'Đoàn thanh niên thị trấn Đồng Đăng'
                  )
                }
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-[11px] font-semibold text-slate-700 text-left"
              >
                <p className="font-bold text-slate-900">Lương Thế Vinh</p>
                <p className="text-slate-500 truncate">Huyện Cao Lộc</p>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickDemoUser(
                    'Hoàng Thị Lan',
                    'Thành phố Lạng Sơn',
                    'Sở Thông tin và Truyền thông'
                  )
                }
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-[11px] font-semibold text-slate-700 text-left"
              >
                <p className="font-bold text-slate-900">Hoàng Thị Lan</p>
                <p className="text-slate-500 truncate">TP. Lạng Sơn</p>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
