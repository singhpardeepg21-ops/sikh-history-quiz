import { motion } from "framer-motion";
import { useQuiz } from "../lib/stores/useQuiz";
import { Button } from "./ui/button";
import { Lock, Star } from "lucide-react";
import type { Level } from "../data/quizData";

export default function LevelSelector() {
  const { levels, unlockedLevels, selectLevel, getLevelScore } = useQuiz();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌟 Choose Your Adventure 🌟
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level: Level, index: number) => {
          const isUnlocked = unlockedLevels.includes(index);
          const score = getLevelScore(index);
          const hasCompleted = score !== null;

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={isUnlocked ? { scale: 1.05 } : {}}
              className={`relative ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <div className={`
                bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-2 transition-all duration-300
                ${isUnlocked 
                  ? 'border-yellow-300/50 hover:border-yellow-300/80 hover:bg-white/30' 
                  : 'border-gray-400/30 opacity-60'
                }
              `}>
                {/* Level Badge */}
                <div className="absolute -top-3 -right-3">
                  {hasCompleted ? (
                    <motion.div 
                      className="bg-green-500 rounded-full p-2 shadow-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="text-white" size={20} fill="currentColor" />
                    </motion.div>
                  ) : !isUnlocked ? (
                    <div className="bg-gray-500 rounded-full p-2 shadow-lg">
                      <Lock className="text-white" size={20} />
                    </div>
                  ) : null}
                </div>

                {/* Level Content */}
                <div className="text-center">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={isUnlocked ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {level.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                    {level.title}
                  </h3>
                  
                  <p className="text-yellow-100 text-sm mb-4 line-clamp-2">
                    {level.description}
                  </p>

                  <div className="text-yellow-200 text-sm mb-4">
                    📝 {level.questions.length} Questions
                  </div>

                  {hasCompleted && (
                    <div className="text-green-300 text-sm mb-4">
                      🏆 Score: {score?.score}/{score?.total}
                    </div>
                  )}

                  <Button
                    onClick={() => isUnlocked && selectLevel(index)}
                    disabled={!isUnlocked}
                    size="lg"
                    className={`
                      w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-200
                      ${isUnlocked 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105' 
                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }
                    `}
                  >
                    {hasCompleted ? '🔄 Play Again' : isUnlocked ? '🚀 Start Level' : '🔒 Locked'}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-yellow-100 text-lg">
          Complete levels to unlock new adventures! 🌟
        </p>
      </motion.div>
    </div>
  );
}
