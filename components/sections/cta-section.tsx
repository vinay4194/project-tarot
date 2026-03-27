'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CtaSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-2xl border border-cosmic-gold/20 bg-gradient-to-br from-cosmic-midnight/80 to-cosmic-dark/80 backdrop-blur-sm card-glow p-12 lg:p-20 text-center overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gold-gradient opacity-3" />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cosmic-purple/10 rounded-full blur-3xl"
        />

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 glow-text">
            Your Answers Are
            <br />
            <span className="cosmic-text-gradient">Waiting</span>
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Take the first step toward clarity. Book your personalized tarot reading
            and discover the guidance you&apos;ve been seeking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-reading">
              <Button size="lg" variant="primary">
                Book Your Reading Now
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            All readings are confidential • Same-day booking available
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
