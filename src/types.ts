export type NavTab = 'home' | 'rules' | 'guide' | 'results' | 'exam';

export interface UserProfile {
  id: string;
  fullName: string;
  phone: string;
  idCard?: string;
  district: string;
  unit: string;
  email?: string;
  role?: string;
}

export interface Question {
  id: number;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  userName: string;
  district: string;
  unit: string;
  score: number; // 0 - 20
  totalQuestions: number;
  timeSpentSeconds: number;
  submittedAt: string;
  predictionCount: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
}

export interface PrizeTier {
  id: string;
  title: string;
  quantity: string;
  amount: string;
  rewardDesc: string;
  color: string;
  bgGradient: string;
}
