'use client';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { faqs } from '@/lib/data';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section noPadding className="pt-32 pb-20">
      <Container size="md">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to know about tarot readings and how they work
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              hover={false}
              className="cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-serif text-white flex-grow">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-cosmic-gold" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white/70 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 text-center">
          <h3 className="text-2xl font-serif mb-4 cosmic-text-gradient">
            Still Have Questions?
          </h3>
          <p className="text-white/70 mb-6">
            Feel free to reach out. I&apos;m here to help clarify any concerns you may have.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg border border-cosmic-gold/30 text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
          >
            Contact Me
          </Link>
        </Card>
      </Container>
    </Section>
  );
}
