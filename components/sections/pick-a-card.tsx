'use client';

import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { TarotCardBack } from '@/components/tarot/tarot-card-back';
import { pickACardMessages } from '@/lib/data';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export function PickACard() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleCardClick = (index: number) => {
    if (revealed) return;
    setSelectedCard(index);
    setTimeout(() => setRevealed(true), 800);
  };

  const handleReset = () => {
    setSelectedCard(null);
    setRevealed(false);
  };

  const message = selectedCard !== null ? pickACardMessages[selectedCard % pickACardMessages.length] : null;

  return (
    <Section id="pick-a-card">
      <SectionHeader
        title="Pick a Card"
        subtitle="Trust your intuition and choose the card that calls to you"
      />

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(index)}
              whileHover={!revealed ? { y: -8, scale: 1.02 } : undefined}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative preserve-3d w-48 h-80"
                animate={{
                  rotateY: selectedCard === index && revealed ? 180 : 0,
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Card back */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl">
                  <TarotCardBack className="w-full h-full" />
                </div>

                {/* Card front */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl tarot-card shadow-2xl p-8 flex flex-col items-center justify-center text-center">
                  {message && selectedCard === index && (
                    <>
                      <Sparkles className="w-10 h-10 text-cosmic-gold mb-4" />
                      <h3 className="text-xl font-serif cosmic-text-gradient mb-4">
                        {message.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {message.message}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {revealed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleReset}
            className="px-6 py-3 rounded-lg border border-cosmic-gold/30 text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
          >
            Pick Another Card
          </motion.button>
        )}
      </div>
    </Section>
  );
}
