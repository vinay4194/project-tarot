import { DailyCard as TarotWisdom } from '@/components/sections/daily-card';
import { HeroModern } from '@/components/sections/hero-modern';
import { ServicesModern } from '@/components/sections/services-modern';
import { TestimonialsModern } from '@/components/sections/testimonials-modern';

export default function Home() {
  return (
    <>
      <HeroModern />
      <ServicesModern />
      <TestimonialsModern />
      <TarotWisdom />
    </>
  );
}
