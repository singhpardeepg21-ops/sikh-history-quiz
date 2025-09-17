import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface CelebrationOverlayProps {}

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  drift: number;
  delay: number;
  targetY: number;
}

export default function CelebrationOverlay({}: CelebrationOverlayProps) {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Memoize confetti data to prevent recreation on each render
  const confetti = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#FFD700', '#FFA500', '#FF6347', '#32CD32', '#87CEEB'][Math.floor(Math.random() * 5)],
      drift: (Math.random() - 0.5) * 150,
      delay: Math.random() * 0.3,
      targetY: windowHeight + 50
    }));
  }, [windowHeight]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: '-10px'
          }}
          animate={{
            y: [0, piece.targetY],
            rotate: [0, 360],
            x: [0, piece.drift]
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
            delay: piece.delay
          }}
        />
      ))}

      {/* Balloons */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="text-6xl mx-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [-20, -40, -20],
              opacity: 1,
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: 1,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            exit={{ y: -200, opacity: 0 }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* Fireworks */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-8xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: 1
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Clapping Hands */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="text-8xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: 3
          }}
        >
          👏
        </motion.div>
      </div>
    </motion.div>
  );
}
