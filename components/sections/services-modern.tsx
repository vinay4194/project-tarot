'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesModern() {
  return (
    <Section id="services">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-semibold mb-4 tracking-tight">
            Choose Your <span className="cosmic-text-gradient">Reading</span>
          </h2>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto tracking-wide">
            Each reading is tailored to your unique journey and questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/${service.slug}`}>
                <div className="group relative p-8 rounded-2xl border border-white/10 bg-cosmic-midnight/30 backdrop-blur-sm hover:border-cosmic-gold/30 transition-all duration-500 hover:bg-cosmic-midnight/50">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-cosmic-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/60 font-light">
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-cosmic-gold mb-1">
                        {service.price}
                      </div>
                      <div className="text-sm text-white/40">{service.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-cosmic-gold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
