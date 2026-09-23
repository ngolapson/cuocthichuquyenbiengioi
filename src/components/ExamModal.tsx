import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  Award,
  RotateCcw,
  Send,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { EXAM_QUESTIONS } from '../data/questions';
import { DISTRICTS, CONTEST_INFO } from '../data/contestInfo';
import { UserProfile, ExamAttempt } from '../types';

interface ExamModalProps {
  currentUser: UserProfile | null;
  onClose: () => void;
  onSubmitAttempt: (attempt: ExamAttempt) => void;
  onOpenCertificate: (attempt: ExamAttempt) => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({
  currentUser,
  onClose,
  onSubmitAttempt,
  onOpenCertificate,
}) => {
  // Candidate quick info if not logged in
  const [candidateName, setCandidateName] = useState(currentUser?.fullName || '');
  const [candidateDistrict, setCandidateDistrict] = useState(currentUser?.district || DISTRICTS[0]);
  const [candidateUnit, setCandidateUnit] = useState(currentUser?.unit || '');
  const [candidatePhone, setCandidatePhone] = useState(currentUser?.phone || '');
  const [isStarted, setIsStarted] = useState(false);

  // Exam state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [predictionCount, setPredictionCount] = useState<string>('28500');
  const [secondsRemaining, setSecondsRemaining] = useState(CONTEST_INFO.timeLimitMinutes * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  
  // Completed result state
  const [submittedAttempt, setSubmittedAttempt] = useState<ExamAttempt | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!isStarted || submittedAttempt) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleForceSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, submittedAttempt]);

  const handleSelectOption = (questionId: number, key: 'A' | 'B' | 'C' | 'D') => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: key,
    }));
  };

  const handleToggleFlag = (questionId: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const currentQ = EXAM_QUESTIONS[currentIndex];
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleForceSubmit = () => {
    executeSubmission();
  };

  const executeSubmission = () => {
    setIsSubmitting(true);

    // Calculate score
    let score = 0;
    EXAM_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    const timeSpent = CONTEST_INFO.timeLimitMinutes * 60 - secondsRemaining;
    const attempt: ExamAttempt = {
      id: `LS-${Date.now().toString().slice(-6)}`,
      userId: currentUser?.id || `anon-${Date.now()}`,
      userName: candidateName.trim() || 'Thí sinh Lạng Sơn',
      district: candidateDistrict,
      unit: candidateUnit.trim() || candidateDistrict,
      score,
      totalQuestions: EXAM_QUESTIONS.length,
      timeSpentSeconds: timeSpent,
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      predictionCount: parseInt(predictionCount, 10) || 0,
      answers: selectedAnswers,
    };

    setSubmittedAttempt(attempt);
    onSubmitAttempt(attempt);
    setIsSubmitting(false);
    setShowConfirmSubmit(false);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // STEP 1: Candidate Verification & Start Screen
  if (!isStarted) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-red-200 overflow-hidden my-auto">
          <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-5 text-center">
            <h3 className="font-serif uppercase font-black text-lg sm:text-xl tracking-wide text-yellow-300">
              VÀO THI TRẮC NGHIỆM TRỰC TUYẾN
            </h3>
            <p className="text-xs text-red-200 mt-1">
              Tìm hiểu kiến thức bảo vệ chủ quyền biên giới trên địa bàn tỉnh Lạng Sơn
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!candidateName.trim()) return;
              setIsStarted(true);
            }}
            className="p-5 sm:p-6 space-y-4"
          >
            <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-red-800">
                <AlertCircle className="w-4 h-4 text-red-600" />
                Quy chế thi:
              </p>
              <p>• Bộ đề thi gồm <strong>20 câu hỏi trắc nghiệm</strong> trong thời gian <strong>20 phút</strong>.</p>
              <p>• Mỗi câu trả lời đúng được 1 điểm. Tổng điểm tối đa: 20 điểm.</p>
              <p>• Hệ thống sẽ tự động chấm điểm và cấp giấy chứng nhận điện tử sau khi nộp bài.</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Họ và tên thí sinh <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Hoàng Văn Tuấn"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 text-sm font-medium outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Số điện thoại liên hệ
                  </label>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 text-sm font-medium outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Địa bàn / Huyện <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={candidateDistrict}
                    onChange={(e) => setCandidateDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 text-sm font-medium outline-hidden bg-white"
                  >
                    {DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Đơn vị công tác / Trường học / Khu phố
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Đồn Biên phòng Tân Thanh / THPT Lạng Sơn..."
                  value={candidateUnit}
                  onChange={(e) => setCandidateUnit(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 text-sm font-medium outline-hidden"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
              >
                HỦY BỎ
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-yellow-300 font-bold text-sm uppercase tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                BẮT ĐẦU LÀM BÀI THI
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // STEP 2: Completed Exam Results Screen
  if (submittedAttempt) {
    const isHighScorer = submittedAttempt.score >= 16;
    const minutes = Math.floor(submittedAttempt.timeSpentSeconds / 60);
    const seconds = submittedAttempt.timeSpentSeconds % 60;

    return (
      <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-amber-300 overflow-hidden my-auto max-h-[92vh] flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white p-6 text-center relative flex-shrink-0">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-red-950 flex items-center justify-center shadow-lg mb-2">
              <Award className="w-9 h-9" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-yellow-300 font-serif">
              KẾT QUẢ BÀI THI
            </h3>
            <p className="text-xs sm:text-sm text-red-100">
              Chúc mừng đồng chí <strong>{submittedAttempt.userName}</strong> đã hoàn thành cuộc thi!
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">Điểm số</span>
                <span className="text-3xl font-black text-red-800">
                  {submittedAttempt.score} <span className="text-sm font-semibold text-slate-500">/ {submittedAttempt.totalQuestions}</span>
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Đúng {Math.round((submittedAttempt.score / submittedAttempt.totalQuestions) * 100)}%
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">Thời gian thi</span>
                <span className="text-2xl font-black text-slate-800">
                  {minutes}p {seconds}s
                </span>
                <p className="text-xs text-slate-500 mt-1">Tối đa 20:00</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Dự đoán người thi</span>
                <span className="text-2xl font-black text-amber-900">
                  {submittedAttempt.predictionCount.toLocaleString('vi-VN')}
                </span>
                <p className="text-xs text-slate-500 mt-1">Lượt tham gia</p>
              </div>
            </div>

            {/* Certificate Action */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-400/20 to-amber-500/10 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Giấy chứng nhận điện tử Ban Chỉ đạo tỉnh
                  </h4>
                  <p className="text-xs text-slate-600">
                    Xem, lưu và in Giấy chứng nhận hoàn thành bài thi với dấu đỏ chính thức.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenCertificate(submittedAttempt)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-1.5 shadow-sm flex-shrink-0"
              >
                <Award className="w-4 h-4" />
                <span>Xem Giấy Chứng Nhận</span>
              </button>
            </div>

            {/* Question by question detailed review */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-700" />
                Chi tiết đáp án và giải thích kiến thức (20 câu):
              </h4>
              <div className="space-y-3">
                {EXAM_QUESTIONS.map((q, idx) => {
                  const userAnswer = submittedAttempt.answers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border text-left text-xs sm:text-sm space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-red-50/40 border-red-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-bold text-slate-900">
                          Câu {idx + 1}: {q.question}
                        </p>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold flex-shrink-0 ${
                            isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-red-600 text-white'
                          }`}
                        >
                          {isCorrect ? 'Đúng' : 'Chưa đúng'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs">
                        {q.options.map((opt) => (
                          <div
                            key={opt.key}
                            className={`p-2 rounded border ${
                              opt.key === q.correctAnswer
                                ? 'bg-emerald-100/70 border-emerald-300 font-bold text-emerald-950'
                                : opt.key === userAnswer
                                ? 'bg-red-100/70 border-red-300 text-red-950 line-through'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            <strong>{opt.key}.</strong> {opt.text}
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-slate-600 bg-white/80 p-2.5 rounded border border-slate-200 italic mt-2">
                        <strong className="text-slate-800 not-italic">Kiến thức ghi nhớ:</strong> {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer actions */}
          <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
            <button
              onClick={() => {
                setSubmittedAttempt(null);
                setIsStarted(false);
                setSelectedAnswers({});
                setFlaggedQuestions({});
                setSecondsRemaining(CONTEST_INFO.timeLimitMinutes * 60);
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Thi lại lượt khác</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-yellow-300 font-bold text-xs uppercase tracking-wider shadow-md"
            >
              HOÀN THÀNH & ĐÓNG
            </button>
          </div>

        </div>
      </div>
    );
  }

  // STEP 3: Active Exam Room
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 flex items-center justify-center p-2 sm:p-4 overflow-y-auto backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full border border-slate-200 overflow-hidden flex flex-col h-[95vh]">
        
        {/* Top bar with candidate name and live timer */}
        <div className="bg-red-800 text-white px-4 sm:px-6 py-3 flex items-center justify-between flex-shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-yellow-400 text-red-950 font-bold items-center justify-center text-xs">
              20Q
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-yellow-300">
                Thí sinh: {candidateName} ({candidateDistrict})
              </h3>
              <p className="text-[11px] text-red-200">
                Tiến độ: {answeredCount}/{EXAM_QUESTIONS.length} câu đã trả lời
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-black text-base sm:text-lg border ${
                secondsRemaining < 180
                  ? 'bg-red-600 text-white border-red-400 animate-pulse'
                  : 'bg-red-950/80 text-yellow-400 border-red-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-3.5 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-red-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95"
            >
              Nộp bài
            </button>
          </div>
        </div>

        {/* Content body: Question view on left, Navigation palette on right */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Question Area (col 8) */}
          <div className="lg:col-span-8 p-4 sm:p-6 overflow-y-auto flex flex-col justify-between space-y-6">
            <div>
              {/* Question header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-800">
                  Câu hỏi {currentIndex + 1} / {EXAM_QUESTIONS.length}
                </span>

                <button
                  onClick={() => handleToggleFlag(currentQ.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    flaggedQuestions[currentQ.id]
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentQ.id] ? 'fill-amber-500 text-amber-600' : ''}`} />
                  <span>{flaggedQuestions[currentQ.id] ? 'Đã đánh dấu xem lại' : 'Đánh dấu xem lại'}</span>
                </button>
              </div>

              {/* Question text */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </h4>

              {/* 4 Options */}
              <div className="space-y-3 mt-6">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedAnswers[currentQ.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(currentQ.id, opt.key)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-red-50/80 border-red-600 text-red-950 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        {opt.key}
                      </div>
                      <span className="text-sm leading-snug pt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-100 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <span className="text-xs text-slate-500 font-medium">
                Câu {currentIndex + 1} của {EXAM_QUESTIONS.length}
              </span>

              {currentIndex < EXAM_QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => Math.min(EXAM_QUESTIONS.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Câu tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="px-5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black text-xs uppercase flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <span>Hoàn thành & Nộp bài</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Palette: Question map + Question 21 Auxiliary (col 4) */}
          <div className="lg:col-span-4 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Danh sách 20 câu hỏi
                </h5>
                <div className="grid grid-cols-5 gap-2">
                  {EXAM_QUESTIONS.map((q, idx) => {
                    const isAnswered = !!selectedAnswers[q.id];
                    const isCurrent = currentIndex === idx;
                    const isFlagged = flaggedQuestions[q.id];

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-lg font-bold text-xs relative transition-all border ${
                          isCurrent
                            ? 'ring-2 ring-red-600 ring-offset-1 z-10'
                            : ''
                        } ${
                          isAnswered
                            ? 'bg-emerald-600 text-white border-emerald-700'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <span>{idx + 1}</span>
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border border-white rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status legends */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600 border-t border-slate-200 pt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-emerald-600" />
                  <span>Đã trả lời ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-white border border-slate-300" />
                  <span>Chưa trả lời ({EXAM_QUESTIONS.length - answeredCount})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400" />
                  <span>Đánh dấu xem lại</span>
                </div>
              </div>

              {/* Question 21: Auxiliary prediction question */}
              <div className="bg-white p-3.5 rounded-xl border border-amber-300 shadow-xs space-y-2 mt-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Câu hỏi phụ (Bắt buộc)</span>
                </div>
                <p className="text-xs text-slate-700">
                  Dự đoán tổng số lượt người tham gia cuộc thi trực tuyến lần này:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={predictionCount}
                    onChange={(e) => setPredictionCount(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm font-bold text-slate-800 rounded-lg border border-slate-300 focus:border-red-600 outline-hidden"
                  />
                  <span className="text-xs text-slate-500 font-semibold flex-shrink-0">lượt</span>
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  * Dùng làm tiêu chí phụ xếp hạng khi các thí sinh có cùng điểm số và thời gian.
                </p>
              </div>
            </div>

            {/* Bottom button */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-yellow-300 font-black text-xs uppercase tracking-wider shadow-md transition-transform active:scale-98"
              >
                NỘP BÀI THI ({answeredCount}/20)
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal before Submit */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-5 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Xác nhận nộp bài thi?</h4>
              <p className="text-xs text-slate-600 mt-1">
                Đồng chí đã trả lời <strong>{answeredCount}/{EXAM_QUESTIONS.length}</strong> câu hỏi. 
                {answeredCount < EXAM_QUESTIONS.length && (
                  <span className="text-red-600 block font-semibold mt-1">
                    Còn {EXAM_QUESTIONS.length - answeredCount} câu chưa chọn đáp án!
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={executeSubmission}
                className="px-5 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-yellow-300 text-xs font-bold uppercase shadow-sm"
              >
                Đồng ý nộp bài
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
