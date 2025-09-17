import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { quizLevels, type Level, type Question } from "../../data/quizData";

export type GamePhase = "levelSelect" | "question" | "levelComplete" | "gameComplete";

interface QuizAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

interface LevelScore {
  levelIndex: number;
  score: number;
  total: number;
  answers: QuizAnswer[];
}

interface QuizState {
  // Game state
  gamePhase: GamePhase;
  levels: Level[];
  unlockedLevels: number[];
  completedLevels: number[];
  levelScores: LevelScore[];
  
  // Current game state
  currentLevelIndex: number | null;
  currentQuestionIndex: number;
  currentAnswers: QuizAnswer[];
  showCelebration: boolean;
  
  // Actions
  selectLevel: (levelIndex: number) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  completeLevel: () => void;
  nextLevel: () => void;
  backToLevelSelect: () => void;
  completeGame: () => void;
  resetGame: () => void;
  goHome: () => void;
  
  // Utility functions
  getLevelScore: (levelIndex: number) => LevelScore | null;
  getLevelProgress: () => number;
  isLevelUnlocked: (levelIndex: number) => boolean;
  triggerCelebration: () => void;
  getCurrentLevel: () => Level | null;
  getCurrentQuestion: () => Question | null;
}

export const useQuiz = create<QuizState>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
    // Initial state
    gamePhase: "levelSelect",
    levels: quizLevels,
    unlockedLevels: [0], // First level is always unlocked
    completedLevels: [],
    levelScores: [],
    
    currentLevelIndex: null,
    currentQuestionIndex: 0,
    currentAnswers: [],
    showCelebration: false,
    
    // Actions
    selectLevel: (levelIndex: number) => {
      const { isLevelUnlocked } = get();
      if (!isLevelUnlocked(levelIndex)) return;
      
      set({
        currentLevelIndex: levelIndex,
        currentQuestionIndex: 0,
        currentAnswers: [],
        gamePhase: "question"
      });
    },
    
    answerQuestion: (answerIndex: number) => {
      const { getCurrentQuestion, currentAnswers, nextQuestion } = get();
      const currentQuestion = getCurrentQuestion();
      if (!currentQuestion) return;
      
      const isCorrect = answerIndex === currentQuestion.correctAnswer;
      const newAnswer: QuizAnswer = {
        questionId: currentQuestion.id,
        selectedAnswer: answerIndex,
        isCorrect
      };
      
      set({
        currentAnswers: [...currentAnswers, newAnswer]
      });
      
      if (isCorrect) {
        get().triggerCelebration();
      }
      
      // Auto-advance after showing feedback
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    },
    
    nextQuestion: () => {
      const { getCurrentLevel, currentQuestionIndex, completeLevel } = get();
      const currentLevel = getCurrentLevel();
      if (!currentLevel) return;
      
      const nextIndex = currentQuestionIndex + 1;
      
      if (nextIndex >= currentLevel.questions.length) {
        completeLevel();
      } else {
        set({ currentQuestionIndex: nextIndex });
      }
    },
    
    completeLevel: () => {
      const { 
        currentLevelIndex, 
        currentAnswers, 
        levelScores, 
        unlockedLevels, 
        completedLevels,
        levels
      } = get();
      
      if (currentLevelIndex === null) return;
      
      const score = currentAnswers.filter(a => a.isCorrect).length;
      const total = currentAnswers.length;
      
      const levelScore: LevelScore = {
        levelIndex: currentLevelIndex,
        score,
        total,
        answers: currentAnswers
      };
      
      // Update or add level score
      const existingScoreIndex = levelScores.findIndex(s => s.levelIndex === currentLevelIndex);
      const newLevelScores = existingScoreIndex >= 0 
        ? levelScores.map((s, i) => i === existingScoreIndex ? levelScore : s)
        : [...levelScores, levelScore];
      
      // Mark level as completed
      const newCompletedLevels = completedLevels.includes(currentLevelIndex)
        ? completedLevels
        : [...completedLevels, currentLevelIndex];
      
      // Unlock next level
      const nextLevelIndex = currentLevelIndex + 1;
      const newUnlockedLevels = nextLevelIndex < levels.length && !unlockedLevels.includes(nextLevelIndex)
        ? [...unlockedLevels, nextLevelIndex]
        : unlockedLevels;
      
      set({
        levelScores: newLevelScores,
        completedLevels: newCompletedLevels,
        unlockedLevels: newUnlockedLevels,
        gamePhase: "levelComplete"
      });
      
      // Trigger celebration
      get().triggerCelebration();
    },
    
    nextLevel: () => {
      const { currentLevelIndex, levels, selectLevel } = get();
      if (currentLevelIndex === null) return;
      
      const nextIndex = currentLevelIndex + 1;
      if (nextIndex < levels.length) {
        selectLevel(nextIndex);
      } else {
        get().completeGame();
      }
    },
    
    backToLevelSelect: () => {
      set({
        gamePhase: "levelSelect",
        currentLevelIndex: null,
        currentQuestionIndex: 0,
        currentAnswers: []
      });
    },
    
    completeGame: () => {
      set({ gamePhase: "gameComplete" });
      get().triggerCelebration();
    },
    
    resetGame: () => {
      set({
        gamePhase: "levelSelect",
        unlockedLevels: [0],
        completedLevels: [],
        levelScores: [],
        currentLevelIndex: null,
        currentQuestionIndex: 0,
        currentAnswers: [],
        showCelebration: false
      });
    },
    
    goHome: () => {
      set({
        gamePhase: "levelSelect",
        currentLevelIndex: null,
        currentQuestionIndex: 0,
        currentAnswers: []
      });
    },
    
    // Utility functions
    getLevelScore: (levelIndex: number) => {
      const { levelScores } = get();
      return levelScores.find(s => s.levelIndex === levelIndex) || null;
    },
    
    getLevelProgress: () => {
      const { currentQuestionIndex, getCurrentLevel } = get();
      const currentLevel = getCurrentLevel();
      if (!currentLevel) return 0;
      return ((currentQuestionIndex + 1) / currentLevel.questions.length) * 100;
    },
    
    isLevelUnlocked: (levelIndex: number) => {
      const { unlockedLevels } = get();
      return unlockedLevels.includes(levelIndex);
    },
    
    triggerCelebration: () => {
      set({ showCelebration: true });
      setTimeout(() => {
        set({ showCelebration: false });
      }, 3000);
    },
    
    getCurrentLevel: () => {
      const { currentLevelIndex, levels } = get();
      return currentLevelIndex !== null ? levels[currentLevelIndex] : null;
    },
    
    getCurrentQuestion: () => {
      const { currentLevelIndex, currentQuestionIndex, levels } = get();
      if (currentLevelIndex === null) return null;
      const currentLevel = levels[currentLevelIndex];
      return currentLevel ? currentLevel.questions[currentQuestionIndex] : null;
    }
      }),
      {
        name: 'sikh-quiz-storage',
        partialize: (state) => ({
          unlockedLevels: state.unlockedLevels,
          completedLevels: state.completedLevels,
          levelScores: state.levelScores,
        }),
      }
    )
  )
);
