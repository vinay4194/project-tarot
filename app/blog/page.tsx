import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { blogPosts } from '@/lib/data';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Tarot Blog - Insights & Guidance',
  description: 'Explore articles about tarot readings, spirituality, love guidance, career advice, and personal growth.',
  url: '/blog',
  keywords: ['tarot blog', 'tarot insights', 'spiritual guidance', 'tarot articles'],
});

export default function BlogPage() {
  return (
    <Section noPadding className="pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif mb-6 cosmic-text-gradient">
            Tarot Wisdom & Insights
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore articles about tarot, spirituality, and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full group">
                <div className="aspect-video rounded-lg bg-cosmic-midnight/50 border border-cosmic-gold/20 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gold-gradient opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-cosmic-gold text-5xl">
                    ✦
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                  <span className="text-cosmic-gold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-serif mb-3 text-white group-hover:text-cosmic-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-white/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-cosmic-gold text-sm group-hover:gap-2 transition-all">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="mt-16 text-center">
          <h3 className="text-2xl font-serif mb-4 cosmic-text-gradient">
            Want Personalized Guidance?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            While these articles provide general insights, a personal tarot reading offers
            guidance specific to your unique situation.
          </p>
          <Link
            href="/book-reading"
            className="inline-block px-6 py-3 rounded-lg bg-gold-gradient text-cosmic-dark font-medium hover:shadow-gold magnetic-button transition-all"
          >
            Book Your Reading
          </Link>
        </Card>
      </Container>
    </Section>
  );
}
