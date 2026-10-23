
"use client";

import { motion, useReducedMotion } from "framer-motion";

const PARTICLE_COUNT = 35;

// Deterministic values: server aur client par same positions.
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const seed = i + 1;

  return {
    id: i,
    left: (seed * 37.7) % 100,
    top: (seed * 61.3) % 100,
    size: 1 + ((seed * 17) % 25) / 10,
    distanceX: ((seed * 29) % 180) - 90,
    distanceY: ((seed * 43) % 180) - 90,
    duration: 12 + ((seed * 7) % 100) / 10,
    delay: ((seed * 11) % 80) / 10,
  };
});

export default function ParticleBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute block rounded-full bg-amber-300"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: "0 0 8px 1px rgba(251, 191, 36, 0.45)",
          }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.45 }
              : {
                  x: [
                    0,
                    particle.distanceX,
                    -particle.distanceX * 0.5,
                    0,
                  ],
                  y: [
                    0,
                    particle.distanceY,
                    -particle.distanceY,
                    0,
                  ],
                  opacity: [0.15, 0.9, 0.3, 0.8, 0.15],
                  scale: [0.8, 1.3, 0.9, 1.1, 0.8],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
