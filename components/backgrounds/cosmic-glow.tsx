'use client';

import { motion } from 'framer-motion';

export function CosmicGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple glow - top right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(157, 132, 183, 0.15) 0%, rgba(157, 132, 183, 0.05) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gold glow - bottom left */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.12) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Teal accent - middle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(95, 168, 163, 0.08) 0%, rgba(95, 168, 163, 0.02) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(10, 14, 39, 0.3) 100%)',
        }}
      />
    </div>
  );
}
