import { motion } from "framer-motion";
import { useQuiz } from "../lib/stores/useQuiz";
import { Button } from "./ui/button";
import { Trophy, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function ScoreDisplay() {
  const { 
    currentLevelIndex, 
    getLevelScore, 
    levels, 
    nextLevel, 
    backToLevelSelect,
    completeGame
  } = useQuiz();

  const score = getLevelScore(currentLevelIndex!);
  const currentLevel = levels[currentLevelIndex!];
  const hasNextLevel = currentLevelIndex! < levels.length - 1;

  if (!score || !currentLevel) return null;

  const percentage = Math.round((score.score / score.total) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60;

  const handleContinue = () => {
    if (hasNextLevel) {
      nextLevel();
    } else {
      completeGame();
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <motion.div
        className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-yellow-300/50 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Trophy Animation */}
        <motion.div
          className="text-8xl mb-6"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isExcellent ? '🏆' : isGood ? '🥈' : '🥉'}
        </motion.div>

        {/* Level Complete */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Level Complete! 🎉
        </motion.h2>

        {/* Level Title */}
        <motion.p 
          className="text-xl text-yellow-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {currentLevel.title}
        </motion.p>

        {/* Score Display */}
        <motion.div
          className="bg-white/10 rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-6xl font-bold text-white mb-2">
            {score.score}/{score.total}
          </div>
          <div className="text-2xl text-yellow-200 mb-4">
            {percentage}% Score
          </div>
          
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: i < (isExcellent ? 3 : isGood ? 2 : 1) ? 1 : 0.3,
                  scale: 1
                }}
                transition={{ delay: 0.8 + i * 0.2 }}
              >
                <Star 
                  className={`w-8 h-8 ${i < (isExcellent ? 3 : isGood ? 2 : 1) ? 'text-yellow-400' : 'text-gray-400'}`}
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>

          {/* Feedback Message */}
          <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {isExcellent 
              ? "🌟 Outstanding! You're a Sikh history expert!" 
              : isGood 
              ? "👍 Great job! Keep learning!" 
              : "💪 Good effort! Practice makes perfect!"}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Button
            onClick={backToLevelSelect}
            variant="outline"
            size="lg"
            className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 font-bold py-3 px-6 rounded-full"
          >
            <ArrowLeft className="mr-2" size={20} />
            Level Select
          </Button>

          <Button
            onClick={handleContinue}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {hasNextLevel ? (
              <>
                Next Level
                <ArrowRight className="ml-2" size={20} />
              </>
            ) : (
              <>
                Complete Game
                <Trophy className="ml-2" size={20} />
              </>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
