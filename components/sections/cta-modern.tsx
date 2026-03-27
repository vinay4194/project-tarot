'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CtaModern() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
          Begin Your
          <br />
          <span className="cosmic-text-gradient">Journey Today</span>
        </h2>

        <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
          Take the first step toward clarity, guidance, and empowerment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book-reading">
            <Button size="lg" variant="primary" className="min-w-[200px]">
              Book Your Reading
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Get in Touch
            </Button>
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/40">
          100% Confidential • Same-Day Booking • Professional Guidance
        </p>
      </motion.div>
    </Section>
  );
}
