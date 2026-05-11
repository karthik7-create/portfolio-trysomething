import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClapperIcon } from "@/components/ClapperIcon";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const exitTimer = setTimeout(() => setPhase("exit"), 5000);
    const doneTimer = setTimeout(onComplete, 5600);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
        className="loading-screen"
      >
        {/* Animated background orbs */}
        <div className="loading-orbs">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`loading-orb loading-orb-${i + 1}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Radial shimmer sweep */}
        <motion.div
          className="loading-shimmer"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0, 0.4, 0], rotate: 360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />

        {/* Center content */}
        <div className="loading-center">
          {/* Brand lockup: TRY on top, icon + SOMETHING on bottom */}
          <motion.div
            className="loading-brand"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.2,
            }}
          >
            <motion.span
              className="loading-brand-try"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              TRY
            </motion.span>
            <motion.div
              className="loading-brand-bottom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="loading-brand-icon"
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 16,
                  delay: 0.7,
                }}
              >
                <ClapperIcon className="h-full w-full" />
              </motion.div>
              <span className="loading-brand-something">SOMETHING</span>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="loading-tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          >
            Social media, decoded weekly.
          </motion.p>

          {/* Animated progress bar */}
          <motion.div
            className="loading-bar-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <motion.div
              className="loading-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 3.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
