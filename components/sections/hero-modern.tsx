'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cosmic-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-cosmic-gold/20 text-cosmic-gold text-sm mb-8 backdrop-blur-sm">
              Professional Tarot Readings
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl lg:text-8xl font-semibold mb-8 leading-[1.05] tracking-[-0.03em]"
          >
            Illuminate Your
            <br />
            <span className="cosmic-text-gradient">Path Forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Discover clarity and guidance for life&apos;s most important decisions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link href="/book-reading">
              <Button size="lg" variant="primary" className="min-w-[200px]">
                Book Reading
              </Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Minimalist stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center gap-16 text-sm"
          >
            <div className="text-center">
              <div className="text-2xl font-light cosmic-text-gradient mb-1">100+</div>
              <div className="text-white/50">Readings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light cosmic-text-gradient mb-1">5.0</div>
              <div className="text-white/50">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light cosmic-text-gradient mb-1">24h</div>
              <div className="text-white/50">Response</div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-white/40 tracking-widest uppercase">Scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/30">
              <path d="M10 5V15M10 15L15 10M10 15L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
