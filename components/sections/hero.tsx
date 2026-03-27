'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { TheMoonCard, TheStarCard, TheSunCard } from '@/components/tarot/tarot-cards';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const floatingCards = [
    { rotation: -8, x: -120, y: 30, delay: 0, Card: TheMoonCard },
    { rotation: 0, x: 0, y: 0, delay: 0.3, Card: TheStarCard },
    { rotation: 8, x: 120, y: 30, delay: 0.6, Card: TheSunCard },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating tarot cards background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute w-28 h-48 lg:w-36 lg:h-60"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{
              opacity: 0.25,
              y: card.y,
              x: card.x,
              rotate: card.rotation,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: card.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              animation: 'float 8s ease-in-out infinite',
              animationDelay: `${card.delay}s`,
            }}
          >
            <card.Card className="w-full h-full drop-shadow-2xl" />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-cosmic-gold/20 text-cosmic-gold text-sm mb-8 backdrop-blur-sm bg-cosmic-midnight/30">
              Professional Tarot Guidance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Clarity for Your
            <br />
            <span className="cosmic-text-gradient">Life&apos;s Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Insightful tarot readings to illuminate your path in love, career, and personal growth.
            Discover the guidance that empowers confident decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/book-reading">
              <Button size="lg" variant="primary">
                Book Your Reading
              </Button>
            </Link>
            <Link href="#pick-a-card">
              <Button size="lg" variant="outline">
                Pick a Card
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto"
          >
            {[
              { number: '100+', label: 'Readings Completed' },
              { number: '100%', label: 'Confidential' },
              { number: '24hr', label: 'Response Time' },
              { number: '5.0', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold cosmic-text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-cosmic-gold/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cosmic-gold/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
