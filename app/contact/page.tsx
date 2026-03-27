import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact',
  description: 'Get in touch for tarot reading bookings and inquiries. Available across India for online tarot consultations.',
  url: '/contact',
});

export default function ContactPage() {
  return (
    <Section noPadding className="pt-32 pb-20">
      <Container size="md">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to book a reading or have questions? I&apos;m here to help guide you on your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <div className="w-14 h-14 rounded-lg bg-cosmic-gold/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-cosmic-gold" />
            </div>
            <h3 className="text-xl font-serif mb-2 text-white">Email</h3>
            <a
              href="mailto:hello@mystictarot.com"
              className="text-cosmic-gold hover:text-cosmic-glow transition-colors"
            >
              hello@mystictarot.com
            </a>
          </Card>

          <Card className="text-center">
            <div className="w-14 h-14 rounded-lg bg-cosmic-gold/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-cosmic-gold" />
            </div>
            <h3 className="text-xl font-serif mb-2 text-white">Phone</h3>
            <a
              href="tel:+919876543210"
              className="text-cosmic-gold hover:text-cosmic-glow transition-colors"
            >
              +91 98765 43210
            </a>
          </Card>

          <Card className="text-center">
            <div className="w-14 h-14 rounded-lg bg-cosmic-gold/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-cosmic-gold" />
            </div>
            <h3 className="text-xl font-serif mb-2 text-white">WhatsApp</h3>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-gold hover:text-cosmic-glow transition-colors"
            >
              Chat with me
            </a>
          </Card>
        </div>

        <Card>
          <h2 className="text-3xl font-serif mb-6 cosmic-text-gradient text-center">
            Send a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-cosmic-dark border border-cosmic-purple/30 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic-gold transition-colors resize-none"
                placeholder="Tell me about your inquiry or what you'd like guidance on..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gold-gradient text-cosmic-dark font-medium hover:shadow-gold magnetic-button transition-all"
            >
              Send Message
            </button>
          </form>

          <p className="mt-6 text-center text-white/50 text-sm">
            I typically respond within 24 hours
          </p>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-white/60">
            Available for online readings across India
          </p>
        </div>
      </Container>
    </Section>
  );
}
