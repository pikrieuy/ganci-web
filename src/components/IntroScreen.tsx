import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridPixelateWipeFramer } from "./ui/grid-pixelate-wipe-framer";

export default function IntroScreen({ children }) {
  const [stage, setStage] = useState('intro'); // 'intro', 'wipe', 'done'

  useEffect(() => {
    // Show static intro for 1.8s for better readability, then switch to wipe
    const timer1 = setTimeout(() => setStage('wipe'), 1800);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {stage !== 'done' && (
          <motion.div 
            key="splash-container"
            className="fixed inset-0 z-[9999] pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* The Wipe layer: using a glass-like pinkish white for the wipe blocks */}
            {stage === 'wipe' && (
              <GridPixelateWipeFramer 
                cols={15} 
                rows={10} 
                cellColor="rgba(255, 255, 255, 0.6)" 
                onComplete={() => setStage('done')} 
              />
            )}

            {/* The Intro Text layer */}
            <AnimatePresence>
              {stage === 'intro' && (
                <motion.div
                  key="intro-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    // Bright soft pink gradient
                    background: "linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 50%, #f9a8d4 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  {/* Animated Huge Logo */}
                  <motion.img 
                    src="/logo.png"
                    alt="Piko & Lea Logo"
                    initial={{ scale: 0, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
                    transition={{ 
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                      mass: 1,
                      delay: 0.1 
                    }}
                    style={{
                      width: "90vw",
                      maxWidth: "600px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 20px 40px rgba(236, 72, 153, 0.4))",
                      zIndex: 20
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
