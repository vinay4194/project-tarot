'use client';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function BookReadingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [readingType, setReadingType] = useState('');

  return (
    <Section noPadding className="pt-32 pb-20">
      <Container size="md">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            Book Your Reading
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Take the first step toward clarity and empowerment
          </p>
        </div>

        <Card>
          <form className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
                Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="birthdate" className="block text-white mb-2">
                    Date of Birth (Optional)
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Reading Selection */}
            <div>
              <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
                Choose Your Reading
              </h2>

              <div className="space-y-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`block cursor-pointer rounded-lg border-2 transition-all ${
                      selectedService === service.id
                        ? 'border-cosmic-gold bg-cosmic-gold/5'
                        : 'border-cosmic-purple/30 hover:border-cosmic-purple/50'
                    }`}
                  >
                    <div className="p-4 flex items-start gap-4">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-serif text-white">
                            {service.title}
                          </h3>
                          <span className="text-cosmic-gold font-bold">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          {service.shortDesc}
                        </p>
                        <span className="text-xs text-white/50">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Reading Type */}
            <div>
              <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
                Reading Format
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <label
                  className={`block cursor-pointer rounded-lg border-2 p-6 transition-all ${
                    readingType === 'video'
                      ? 'border-cosmic-gold bg-cosmic-gold/5'
                      : 'border-cosmic-purple/30 hover:border-cosmic-purple/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="readingType"
                    value="video"
                    checked={readingType === 'video'}
                    onChange={(e) => setReadingType(e.target.value)}
                    className="sr-only"
                  />
                  <h3 className="text-lg font-serif text-white mb-2">
                    Live Video Reading
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Interactive session via video call where you can ask questions in real-time
                  </p>
                  <div className="space-y-1 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>Real-time interaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>Immediate clarifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>Scheduled at your convenience</span>
                    </div>
                  </div>
                </label>

                <label
                  className={`block cursor-pointer rounded-lg border-2 p-6 transition-all ${
                    readingType === 'written'
                      ? 'border-cosmic-gold bg-cosmic-gold/5'
                      : 'border-cosmic-purple/30 hover:border-cosmic-purple/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="readingType"
                    value="written"
                    checked={readingType === 'written'}
                    onChange={(e) => setReadingType(e.target.value)}
                    className="sr-only"
                  />
                  <h3 className="text-lg font-serif text-white mb-2">
                    Written Reading
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Detailed written report delivered within 24 hours that you can refer to anytime
                  </p>
                  <div className="space-y-1 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>Comprehensive analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>Review anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cosmic-gold" />
                      <span>24-hour delivery</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Question/Focus */}
            <div>
              <label htmlFor="question" className="block text-white mb-2">
                Your Question or Area of Focus *
              </label>
              <textarea
                id="question"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors resize-none"
                placeholder="Please share what you'd like guidance on. The more specific you are, the more focused your reading will be."
              />
            </div>

            {/* Preferred Date/Time for Video */}
            {readingType === 'video' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-white mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-white mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-gold-gradient text-cosmic-dark font-medium text-lg hover:shadow-gold magnetic-button transition-all"
            >
              Complete Booking
            </button>

            <p className="text-center text-white/50 text-sm">
              You&apos;ll receive a confirmation email with payment details and next steps
            </p>
          </form>
        </Card>
      </Container>
    </Section>
  );
}
