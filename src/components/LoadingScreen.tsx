import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClapperIcon } from "@/components/ClapperIcon";

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <div className="loading-particles">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="loading-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -60 - Math.random() * 80],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PulseRings() {
  return (
    <div className="loading-rings">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="loading-ring"
          initial={{ scale: 0.3, opacity: 0.6 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 4200;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}%</span>;
}

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
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.08 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
        className="loading-screen"
      >
        {/* Animated grid lines */}
        <div className="loading-grid" />

        {/* Floating particles */}
        <Particles />

        {/* Background orbs */}
        <div className="loading-orbs">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`loading-orb loading-orb-${i + 1}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1],
                opacity: [0, 0.7, 0.35],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Rotating shimmer */}
        <motion.div
          className="loading-shimmer"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0, 0.5, 0], rotate: 360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />

        {/* Horizontal scan line */}
        <motion.div
          className="loading-scanline"
          initial={{ top: "-2px" }}
          animate={{ top: "100%" }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />

        {/* Center content */}
        <div className="loading-center">
          {/* Pulse rings behind brand */}
          <PulseRings />

          {/* Brand lockup */}
          <motion.div
            className="loading-brand"
            initial={{ opacity: 0, scale: 0.5, rotateX: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
              delay: 0.2,
            }}
          >
            <motion.span
              className="loading-brand-try"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {"TRY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="loading-brand-char"
                  initial={{ opacity: 0, y: 40, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.div
              className="loading-brand-bottom"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="loading-brand-icon"
                initial={{ rotate: -30, scale: 0 }}
                animate={{ rotate: [0, -5, 0], scale: 1 }}
                transition={{
                  rotate: { delay: 1.5, duration: 0.4, repeat: 2, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 300, damping: 15, delay: 0.8 },
                }}
              >
                <ClapperIcon className="h-full w-full" />
              </motion.div>
              {"SOMETHING".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="loading-brand-char"
                  initial={{ opacity: 0, y: 40, rotateZ: 10 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.04,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Tagline with typewriter-like reveal */}
          <motion.p
            className="loading-tagline"
            initial={{ opacity: 0, y: 15, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          >
            Social media, decoded weekly.
          </motion.p>

          {/* Progress bar with percentage */}
          <motion.div
            className="loading-progress-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          >
            <div className="loading-bar-track">
              <motion.div
                className="loading-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.span
              className="loading-counter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            >
              <Counter target={100} />
            </motion.span>
          </motion.div>
        </div>

        {/* Corner accents */}
        <motion.div
          className="loading-corner loading-corner-tl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="loading-corner loading-corner-br"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
