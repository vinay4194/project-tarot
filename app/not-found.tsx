import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section noPadding className="pt-32 pb-20">
      <Container size="sm">
        <div className="text-center">
          <div className="text-8xl lg:text-9xl font-serif mb-6 cosmic-text-gradient">
            404
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif mb-6 text-white">
            Page Not Found
          </h1>

          <p className="text-xl text-white/70 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have vanished into the cosmic void.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Return Home
              </Button>
            </Link>
            <Link href="/book-reading">
              <Button variant="outline" size="lg">
                Book a Reading
              </Button>
            </Link>
          </div>

          <div className="mt-16 text-cosmic-gold text-6xl">
            ✦
          </div>
        </div>
      </Container>
    </Section>
  );
}
