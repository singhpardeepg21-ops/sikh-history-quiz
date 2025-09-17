import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "../lib/stores/useQuiz.tsx";
import { useAudio } from "../lib/stores/useAudio";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export default function QuestionCard() {
  const { 
    currentQuestionIndex, 
    answerQuestion,
    getLevelProgress,
    getCurrentLevel,
    getCurrentQuestion
  } = useQuiz();
  
  const currentLevel = getCurrentLevel();
  const currentQuestion = getCurrentQuestion();
  
  const { playSuccess, playHit } = useAudio();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!currentLevel || !currentQuestion) return null;

  const progress = getLevelProgress();

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Play sound effect
    if (correct) {
      playSuccess();
    } else {
      playHit();
    }

    // Submit answer immediately (delay handled in store)
    answerQuestion(answerIndex);
    
    // Reset UI state after feedback delay
    setTimeout(() => {
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-yellow-300/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">
              {currentLevel.title}
            </span>
            <span className="text-yellow-200">
              {currentQuestionIndex + 1} / {currentLevel.questions.length}
            </span>
          </div>
          <Progress 
            value={progress} 
            className="h-3 bg-white/20"
          />
        </div>
      </motion.div>

      {/* Question Card */}
      <motion.div
        className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-yellow-300/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Question */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            {currentQuestion.question}
          </h2>
        </motion.div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option: string, index: number) => {
            let buttonClass = "w-full p-6 text-left text-lg font-medium rounded-2xl transition-all duration-300 shadow-lg border-2 ";
            
            if (showFeedback) {
              if (index === currentQuestion.correctAnswer) {
                buttonClass += "bg-green-500 border-green-400 text-white shadow-green-500/50";
              } else if (index === selectedAnswer && !isCorrect) {
                buttonClass += "bg-red-500 border-red-400 text-white shadow-red-500/50";
              } else {
                buttonClass += "bg-white/10 border-white/20 text-white/60";
              }
            } else if (selectedAnswer === index) {
              buttonClass += "bg-blue-500 border-blue-400 text-white shadow-blue-500/50 scale-105";
            } else {
              buttonClass += "bg-white/30 border-white/40 text-white hover:bg-white/40 hover:border-white/60 hover:scale-105 active:scale-95";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Button
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                  variant="ghost"
                >
                  <div className="flex items-center">
                    <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 text-center"
            >
              {isCorrect ? (
                <motion.div
                  className="text-green-300 text-xl font-bold"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  🎉 Excellent! Well done! 🎉
                </motion.div>
              ) : (
                <motion.div
                  className="text-yellow-300 text-xl font-bold"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    x: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  😊 Oops, try again next time! 😊
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
