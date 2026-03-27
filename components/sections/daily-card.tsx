'use client';

import { Section } from '@/components/ui/section';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Heart, Lightbulb, Star, Compass } from 'lucide-react';
import { useState, useEffect } from 'react';

const tarotWisdom = [
  {
    type: 'insight',
    icon: Lightbulb,
    title: 'The Power of Reflection',
    quote: 'Tarot doesn\'t predict your future—it illuminates your present, helping you make empowered choices.',
    color: 'from-purple-400 to-indigo-400',
  },
  {
    type: 'wisdom',
    icon: Star,
    title: 'Trust Your Intuition',
    quote: 'The cards are mirrors to your inner wisdom. What resonates with you is more important than any rulebook.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    type: 'positivity',
    icon: Heart,
    title: 'Every Card is a Gift',
    quote: 'There are no "bad" cards in tarot—only opportunities to grow, learn, and transform.',
    color: 'from-pink-400 to-rose-400',
  },
  {
    type: 'guidance',
    icon: Compass,
    title: 'A Tool for Clarity',
    quote: 'Tarot bypasses the noise of daily life, connecting you directly to your authentic self and deepest knowing.',
    color: 'from-teal-400 to-green-400',
  },
  {
    type: 'empowerment',
    icon: Sparkles,
    title: 'You Hold the Power',
    quote: 'The cards reveal possibilities, but you are the author of your story. Your choices shape your destiny.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    type: 'connection',
    icon: Heart,
    title: 'Ancient Wisdom, Modern Life',
    quote: 'For centuries, tarot has guided seekers through life\'s mysteries. Its wisdom is timeless, yet always relevant.',
    color: 'from-violet-400 to-purple-400',
  },
];

export function DailyCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set random initial card only on client
    setCurrentIndex(Math.floor(Math.random() * tarotWisdom.length));
  }, []);

  const currentWisdom = tarotWisdom[currentIndex];
  const Icon = currentWisdom.icon;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tarotWisdom.length);
  };

  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Tarot <span className="cosmic-text-gradient">Wisdom</span>
          </h2>
          <p className="text-lg text-white/60 font-light">
            Discover what makes tarot a powerful tool for guidance and growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual Side - Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${currentWisdom.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-cosmic-dark/90 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-32 h-32 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Subtle pulsing glow */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentWisdom.color} blur-2xl -z-10`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content Side */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/30 text-cosmic-gold text-sm mb-6 uppercase tracking-wider">
                  {currentWisdom.type}
                </div>

                <h3 className="text-4xl lg:text-5xl font-serif mb-6 cosmic-text-gradient">
                  {currentWisdom.title}
                </h3>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light mb-8">
                  "{currentWisdom.quote}"
                </p>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-cosmic-gold/30 text-cosmic-gold hover:bg-cosmic-gold/10 transition-all duration-300 group"
                >
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Discover More Wisdom
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {tarotWisdom.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-1.5 bg-cosmic-gold'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              } rounded-full`}
              aria-label={`Go to wisdom ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/60 mb-6 text-lg">
            Ready to experience the clarity tarot can bring to your life?
          </p>
          <a
            href="/book-reading"
            className="inline-block px-8 py-4 rounded-full bg-gold-gradient text-cosmic-dark font-medium hover:shadow-gold magnetic-button transition-all text-lg"
          >
            Book Your Reading
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
