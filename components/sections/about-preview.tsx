'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function AboutPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-square rounded-2xl bg-cosmic-midnight border-2 border-cosmic-gold/30 card-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-gold-gradient opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-cosmic-gold/30" />
            </div>
            {/* Placeholder for actual photo */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cosmic-dark to-transparent">
              <p className="text-cosmic-gold text-sm">Your Tarot Reader</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif mb-6 cosmic-text-gradient">
            Guidance You Can Trust
          </h2>

          <div className="space-y-4 text-white/80 leading-relaxed mb-8">
            <p>
              With over 5 years of experience in tarot reading, I've helped hundreds of
              people across India find clarity, make confident decisions, and connect
              with their inner wisdom.
            </p>
            <p>
              Every reading is conducted with compassion, honesty, and deep respect for
              your journey. I believe tarot is a tool for empowerment, offering insights
              that help you navigate life's complexities with confidence.
            </p>
            <p>
              Whether you're facing challenges in love, career, or personal growth,
              my readings provide the clarity and guidance you need to move forward.
            </p>
          </div>

          <Link href="/about">
            <Button variant="outline">
              Learn More About Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
