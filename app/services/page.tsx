import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { services } from '@/lib/data';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Briefcase, Heart, HelpCircle, Sparkles, Clock } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

const iconMap = {
  Heart: Heart,
  Briefcase: Briefcase,
  HelpCircle: HelpCircle,
  Sparkles: Sparkles,
};

export const metadata: Metadata = generateSEOMetadata({
  title: 'Tarot Reading Services',
  description: 'Professional tarot reading services including love tarot, career guidance, yes/no readings, and full life readings. Available online across India.',
  url: '/services',
  keywords: ['tarot services', 'tarot reading types', 'online tarot india'],
});

export default function ServicesPage() {
  return (
    <Section noPadding className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            Tarot Reading Services
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the reading that resonates with your current journey and discover the clarity you seek
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} gradient className="flex flex-col">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-cosmic-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-cosmic-gold" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-serif mb-2 text-white">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-cosmic-gold font-bold text-xl">
                        {service.price}
                      </span>
                      <span className="flex items-center gap-1 text-white/50">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-cosmic-gold mb-3 uppercase tracking-wide">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-cosmic-gold flex-shrink-0">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex gap-3">
                  <Link href={`/${service.slug}`} className="flex-grow">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/book-reading" className="flex-grow">
                    <Button variant="primary" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="text-center">
          <h3 className="text-2xl font-serif mb-4 cosmic-text-gradient">
            Not Sure Which Reading to Choose?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Contact me and I'll help you select the perfect reading for your current situation and questions.
          </p>
          <Link href="/contact">
            <Button variant="outline">
              Get in Touch
            </Button>
          </Link>
        </Card>
      </Container>
    </Section>
  );
}
