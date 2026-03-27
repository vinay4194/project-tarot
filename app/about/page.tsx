import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About',
  description: 'Learn about our professional tarot reading services and the experienced reader dedicated to providing guidance for your life journey.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <Section noPadding className="pt-32 pb-20">
      <Container size="md">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            About Mystic Tarot
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional tarot guidance grounded in compassion, honesty, and respect for your journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square rounded-2xl bg-cosmic-midnight border-2 border-cosmic-gold/30 card-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-gold-gradient opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-cosmic-gold/30" />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              Welcome. I'm a professional tarot reader with over 5 years of experience helping
              people across India find clarity, make confident decisions, and connect with their
              inner wisdom.
            </p>
            <p className="leading-relaxed">
              My journey with tarot began as a personal exploration of spirituality and
              self-discovery. What started as curiosity evolved into a deep passion for helping
              others navigate life's complexities through the wisdom of the cards.
            </p>
            <p className="leading-relaxed">
              I believe tarot is a powerful tool for empowerment, not fortune-telling. Every
              reading I conduct is approached with compassion, honesty, and deep respect for
              your unique journey. My goal is to provide insights that empower you to make
              informed decisions aligned with your highest good.
            </p>
            <p className="leading-relaxed">
              Whether you're facing challenges in love, career, or personal growth, I'm here
              to offer the guidance and clarity you need to move forward with confidence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Award,
              title: '5+ Years',
              description: 'Professional Experience',
            },
            {
              icon: Heart,
              title: '100+',
              description: 'Satisfied Clients',
            },
            {
              icon: Shield,
              title: '100%',
              description: 'Confidential',
            },
            {
              icon: Sparkles,
              title: '5.0',
              description: 'Average Rating',
            },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="w-14 h-14 rounded-lg bg-cosmic-gold/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-cosmic-gold" />
              </div>
              <div className="text-2xl font-bold cosmic-text-gradient mb-2">
                {stat.title}
              </div>
              <div className="text-sm text-white/60">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mb-16">
          <h2 className="text-3xl font-serif mb-6 cosmic-text-gradient text-center">
            My Approach
          </h2>
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Compassionate Guidance</h3>
              <p>
                Every reading is conducted in a safe, supportive environment where you can
                freely explore your questions and concerns without judgment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Honest Insights</h3>
              <p>
                I deliver messages from the cards with honesty and clarity, always
                framed in a way that empowers you to take positive action.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Personalized Readings</h3>
              <p>
                No two readings are the same. Each session is tailored to your unique
                situation, questions, and energy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Practical Wisdom</h3>
              <p>
                Beyond spiritual insights, I provide practical guidance you can apply
                to your daily life and decision-making.
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <h3 className="text-3xl font-serif mb-4 glow-text">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Book a reading and discover the clarity and guidance you've been seeking.
          </p>
          <Link href="/book-reading">
            <Button size="lg" variant="primary">
              Book Your Reading
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
