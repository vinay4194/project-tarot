'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { services } from '@/lib/data';
import { Briefcase, Heart, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Heart: Heart,
  Briefcase: Briefcase,
  HelpCircle: HelpCircle,
  Sparkles: Sparkles,
};

export function Services() {
  return (
    <Section>
      <SectionHeader
        title="Tarot Reading Services"
        subtitle="Choose the reading that resonates with your current journey"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card key={service.id} gradient>
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-lg bg-cosmic-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-cosmic-gold" />
                </div>

                <h3 className="text-xl font-serif mb-2 text-white">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 flex-grow">
                  {service.shortDesc}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold cosmic-text-gradient">
                    {service.price}
                  </span>
                  <span className="text-white/50 text-sm">{service.duration}</span>
                </div>

                <Link href={`/${service.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
