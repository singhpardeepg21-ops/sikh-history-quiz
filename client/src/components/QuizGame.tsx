import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "../lib/stores/useQuiz.tsx";
import { useAudio } from "../lib/stores/useAudio";
import LevelSelector from "./LevelSelector";
import QuestionCard from "./QuestionCard";
import CelebrationOverlay from "./CelebrationOverlay";
import ScoreDisplay from "./ScoreDisplay";
import { Button } from "./ui/button";
import { Volume2, VolumeX, Home } from "lucide-react";

export default function QuizGame() {
  const { 
    gamePhase, 
    showCelebration,
    resetGame,
    goHome,
    getCurrentLevel,
    getCurrentQuestion
  } = useQuiz();
  
  const currentLevel = getCurrentLevel();
  const currentQuestion = getCurrentQuestion();
  
  const { isMuted, toggleMute, backgroundMusic } = useAudio();
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasPlayedMusic, setHasPlayedMusic] = useState(false);

  useEffect(() => {
    // Start background music only once when game loads
    if (backgroundMusic && !isMuted && !hasPlayedMusic) {
      backgroundMusic.play().catch(e => console.log("Audio autoplay prevented:", e));
      setHasPlayedMusic(true);
    }
  }, [backgroundMusic, isMuted, hasPlayedMusic]);

  const handleStartGame = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-300/30">
            <motion.p 
              className="text-sm mb-3 text-yellow-400 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(255,215,0,0.6)",
                color: "#FFD700"
              }}
            >
              King $ Studio – Founder: Pardeep Singh
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: 2 }}
              style={{
                textShadow: "0 0 20px rgba(255,215,0,0.8)"
              }}
            >
              🏆 Sikh Quiz History 🏆
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-yellow-100 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Learn and Test Your Knowledge!
            </motion.p>
            
            <motion.div
              className="text-lg text-yellow-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="mb-2">🌟 5 Exciting Levels</p>
              <p className="mb-2">🎯 Multiple Choice Questions</p>
              <p className="mb-2">🎉 Fun Celebrations</p>
              <p>🏅 Track Your Progress</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="mb-6"
            >
              <Button
                onClick={handleStartGame}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🚀 Start Quiz Adventure!
              </Button>
            </motion.div>

          </div>
        </motion.div>

        <motion.button
          onClick={toggleMute}
          className="fixed top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <motion.header 
        className="bg-white/10 backdrop-blur-sm border-b border-yellow-300/30 p-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
            animate={{ 
              scale: [1, 1.01, 1]
            }}
            transition={{ duration: 4, repeat: 1 }}
            style={{
              textShadow: "0 0 15px rgba(255,215,0,0.8)"
            }}
          >
            🏆 Sikh Quiz History
          </motion.h1>
          
          <div className="flex gap-2">
            <motion.button
              onClick={goHome}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Home size={20} />
            </motion.button>
            
            <motion.button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="p-4">
        <AnimatePresence mode="wait">
          {gamePhase === "levelSelect" && (
            <motion.div
              key="levelSelect"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <LevelSelector />
            </motion.div>
          )}

          {gamePhase === "question" && currentLevel && currentQuestion && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <QuestionCard />
            </motion.div>
          )}

          {gamePhase === "levelComplete" && (
            <motion.div
              key="levelComplete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ScoreDisplay />
            </motion.div>
          )}

          {gamePhase === "gameComplete" && (
            <motion.div
              key="gameComplete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl border border-yellow-300/30">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 20px rgba(255,215,0,0.8)",
                      "0 0 40px rgba(255,215,0,1)",
                      "0 0 20px rgba(255,215,0,0.8)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉 Congratulations! 🎉
                </motion.h2>
                
                <p className="text-xl text-yellow-100 mb-6">
                  You've completed all levels of the Sikh Quiz History!
                </p>
                
                <motion.div
                  className="mb-8 py-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <motion.p 
                    className="text-2xl md:text-3xl font-bold text-center"
                    style={{
                      color: "#FFD700",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.6)"
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.6)",
                        "2px 2px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,215,0,0.8)",
                        "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.6)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ੴ – Waheguru Ji Ka Khalsa Waheguru Ji Ki Fateh ☬ 🙏
                  </motion.p>
                </motion.div>
                
                <Button
                  onClick={resetGame}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  🔄 Play Again
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && <CelebrationOverlay />}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer 
        className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-yellow-300/30 p-3 text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <p className="text-yellow-100 text-sm">
          King $ Studio – Founder: Pardeep Singh
        </p>
      </motion.footer>
    </div>
  );
}
