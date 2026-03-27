'use client';

import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { testimonials } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section>
      <SectionHeader
        title="Client Experiences"
        subtitle="Real stories from people who found clarity through tarot"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 lg:p-12">
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cosmic-gold text-cosmic-gold" />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-center text-white/90 mb-8 leading-relaxed">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="text-center">
                  <div className="font-serif text-xl text-cosmic-gold mb-1">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-white/50 text-sm mb-2">
                    {currentTestimonial.location}
                  </div>
                  <div className="text-cosmic-glow text-xs">
                    {currentTestimonial.service}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full border border-cosmic-gold/30 bg-cosmic-midnight/50 backdrop-blur-sm flex items-center justify-center text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full border border-cosmic-gold/30 bg-cosmic-midnight/50 backdrop-blur-sm flex items-center justify-center text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-cosmic-gold w-8'
                  : 'bg-cosmic-gold/30 hover:bg-cosmic-gold/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
