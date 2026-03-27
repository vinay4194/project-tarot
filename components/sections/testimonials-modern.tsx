'use client';

import { Section } from '@/components/ui/section';
import { testimonials } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function TestimonialsModern() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Client <span className="cosmic-text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-white/60 font-light">
            Experiences from those who found their way
          </p>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex gap-1 justify-center mb-8">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cosmic-gold text-cosmic-gold" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-3xl font-light text-white/90 mb-10 leading-relaxed">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              <div>
                <div className="font-serif text-xl text-cosmic-gold mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-white/50">
                  {currentTestimonial.location} • {currentTestimonial.service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-1.5 bg-cosmic-gold'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
