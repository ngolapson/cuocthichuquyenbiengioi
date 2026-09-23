/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { Navbar } from './components/Navbar';
import { HomeTab } from './components/HomeTab';
import { RulesTab } from './components/RulesTab';
import { GuideTab } from './components/GuideTab';
import { ResultsTab } from './components/ResultsTab';
import { ExamModal } from './components/ExamModal';
import { CertificateModal } from './components/CertificateModal';
import { AuthModal } from './components/AuthModal';
import { NavTab, UserProfile, ExamAttempt } from './types';
import { INITIAL_LEADERBOARD, CONTEST_INFO } from './data/contestInfo';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('langson_contest_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [attempts, setAttempts] = useState<ExamAttempt[]>(() => {
    try {
      const saved = localStorage.getItem('langson_contest_attempts');
      return saved ? JSON.parse(saved) : INITIAL_LEADERBOARD;
    } catch {
      return INITIAL_LEADERBOARD;
    }
  });

  // Modal controls
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [selectedCertificateAttempt, setSelectedCertificateAttempt] = useState<ExamAttempt | null>(null);
  const [authModalConfig, setAuthModalConfig] = useState<{
    isOpen: boolean;
    mode: 'login' | 'register';
  }>({ isOpen: false, mode: 'login' });

  // Save attempts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('langson_contest_attempts', JSON.stringify(attempts));
    } catch (e) {
      console.error(e);
    }
  }, [attempts]);

  // Save user to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('langson_contest_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('langson_contest_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  const handleStartExam = () => {
    setIsExamOpen(true);
  };

  const handleViewResults = () => {
    setCurrentTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAttempt = (newAttempt: ExamAttempt) => {
    setAttempts((prev) => [newAttempt, ...prev]);
  };

  const handleOpenCertificate = (attempt: ExamAttempt) => {
    setSelectedCertificateAttempt(attempt);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthModalConfig({ isOpen: true, mode });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-800 font-sans selection:bg-red-700 selection:text-yellow-200">
      
      {/* 1. Header & National Title Banner */}
      <HeaderBanner />

      {/* 2. Top Navigation Bar (5 Items matching handwritten sketch) */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
      />

      {/* 3. Main Content View according to active tab */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentTab === 'home' && (
          <HomeTab
            onStartExam={handleStartExam}
            onViewResults={handleViewResults}
            currentUser={currentUser}
            totalAttemptsCount={attempts.length + 18240}
          />
        )}

        {currentTab === 'rules' && (
          <RulesTab onStartExam={handleStartExam} />
        )}

        {currentTab === 'guide' && (
          <GuideTab
            onStartExam={handleStartExam}
            onOpenAuth={handleOpenAuth}
          />
        )}

        {currentTab === 'results' && (
          <ResultsTab
            attempts={attempts}
            onOpenCertificate={handleOpenCertificate}
            onStartExam={handleStartExam}
          />
        )}
      </main>

      {/* 4. Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t-4 border-red-800 mt-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-400 font-bold text-sm uppercase">
                <Shield className="w-5 h-5 text-yellow-500" />
                <span>{CONTEST_INFO.organizer}</span>
              </div>
              <p className="text-slate-300 font-medium">
                CƠ QUAN THƯỜNG TRỰC: BAN TUYÊN GIÁO TỈNH ỦY LẠNG SƠN
              </p>
              <p className="text-slate-400 text-[11px] max-w-lg">
                Phối hợp tổ chức: Bộ Chỉ huy Bộ đội Biên phòng tỉnh Lạng Sơn & Sở Thông tin và Truyền thông tỉnh Lạng Sơn.
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>Số 02 Hoàng Văn Thụ, Phường Chi Lăng, TP. Lạng Sơn, tỉnh Lạng Sơn</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>Điện thoại hỗ trợ: 0205.3812.456 - 0205.3813.789</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <Mail className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>Hòm thư điện tử: bantuyengiaols@langson.gov.vn</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <p>© 2026 Bản quyền thuộc Ban Chỉ đạo Công tác thông tin đối ngoại tỉnh Lạng Sơn.</p>
            <p>Hệ thống thi trắc nghiệm trực tuyến phục vụ nhiệm vụ chính trị - xã hội.</p>
          </div>
        </div>
      </footer>

      {/* MODAL 1: Interactive Exam */}
      {isExamOpen && (
        <ExamModal
          currentUser={currentUser}
          onClose={() => setIsExamOpen(false)}
          onSubmitAttempt={handleSubmitAttempt}
          onOpenCertificate={handleOpenCertificate}
        />
      )}

      {/* MODAL 2: Digital Certificate */}
      {selectedCertificateAttempt && (
        <CertificateModal
          attempt={selectedCertificateAttempt}
          onClose={() => setSelectedCertificateAttempt(null)}
        />
      )}

      {/* MODAL 3: Account & Login */}
      {authModalConfig.isOpen && (
        <AuthModal
          initialMode={authModalConfig.mode}
          onClose={() => setAuthModalConfig({ isOpen: false, mode: 'login' })}
          onSuccess={(user) => setCurrentUser(user)}
        />
      )}

    </div>
  );
}
