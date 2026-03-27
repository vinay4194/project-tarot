import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { services } from '@/lib/data';
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/lib/seo';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Clock } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return generateSEOMetadata({
    title: service.title,
    description: service.description,
    url: `/${service.slug}`,
    keywords: [service.title.toLowerCase(), 'tarot reading', 'online tarot india'],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const schema = generateServiceSchema({
    name: service.title,
    description: service.description,
    price: service.price.replace('₹', '').replace(',', ''),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Section noPadding className="pt-32 pb-20">
        <Container size="md">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {service.description}
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cosmic-gold">
                <span className="text-3xl font-bold">{service.price}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-5 h-5" />
                <span>{service.duration}</span>
              </div>
            </div>
            <Link href="/book-reading">
              <Button size="lg" variant="primary">
                Book This Reading
              </Button>
            </Link>
          </div>

          {/* What's Included */}
          <Card className="mb-12">
            <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
              What&apos;s Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cosmic-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-cosmic-gold" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Who This Is For */}
          <Card className="mb-12">
            <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
              Who This Reading Is For
            </h2>
            <div className="space-y-3">
              {service.whoIsFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-cosmic-gold text-xl flex-shrink-0">✦</div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* What to Expect */}
          <Card className="mb-12">
            <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
              What to Expect
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                Your reading will be conducted in a safe, confidential, and supportive environment.
                I approach every session with compassion and honesty, providing insights that
                empower you to make informed decisions.
              </p>
              <p>
                After booking, you&apos;ll receive a confirmation with details about your session.
                You can choose between a live video reading or a detailed written report delivered
                within 24 hours.
              </p>
              <p>
                Come prepared with your questions and an open mind. The cards will reveal insights
                and guidance specific to your situation, helping you gain clarity and confidence
                in your path forward.
              </p>
            </div>
          </Card>

          {/* FAQ for this service */}
          <Card>
            <h2 className="text-2xl font-serif mb-6 cosmic-text-gradient">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif text-white mb-2">
                  How soon can I get my reading?
                </h3>
                <p className="text-white/70">
                  Same-day and next-day bookings are available. Live sessions are scheduled
                  based on availability, while written readings are delivered within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-2">
                  Is my reading confidential?
                </h3>
                <p className="text-white/70">
                  Absolutely. All readings are 100% private and confidential. Your questions
                  and the guidance you receive remain between us.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-2">
                  Can I ask follow-up questions?
                </h3>
                <p className="text-white/70">
                  Yes! During live readings, you can ask clarifying questions. For written
                  readings, one round of follow-up questions is included.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-serif mb-4 glow-text">
              Ready to Get Started?
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Book your {service.title.toLowerCase()} and discover the clarity you&apos;ve been seeking.
            </p>
            <Link href="/book-reading">
              <Button size="lg" variant="primary">
                Book Your Reading Now
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
