import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { blogPosts } from '@/lib/data';
import { generateArticleSchema, generateMetadata as generateSEOMetadata, siteConfig } from '@/lib/seo';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    keywords: [post.category.toLowerCase(), 'tarot', 'guidance'],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const schema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
  });

  // Sample content - in a real implementation, this would be fetched from markdown files
  const content = {
    'how-to-prepare-for-tarot-reading': `
      <p>Preparing for your first tarot reading can feel both exciting and nerve-wracking. Whether you're seeking guidance on love, career, or life direction, proper preparation ensures you get the most meaningful insights from your session.</p>

      <h2>Set Your Intention</h2>
      <p>Before your reading, take time to clarify what you're seeking guidance on. The more specific your intention, the more focused and helpful your reading will be. Instead of "Tell me about my love life," try "What do I need to know about my current relationship?" or "What's blocking me from finding love?"</p>

      <h2>Write Down Your Questions</h2>
      <p>Prepare 2-3 key questions you want to explore. Open-ended questions work best - those that begin with "What," "How," or "Why" rather than "Will" or "When." Good questions empower you to take action rather than waiting for things to happen.</p>

      <h2>Create a Calm Mindset</h2>
      <p>Find a quiet space where you won't be interrupted. Take a few deep breaths and release any expectations about what the cards "should" say. Approach the reading with an open mind and heart.</p>

      <h2>Be Ready to Receive</h2>
      <p>Tarot readings can sometimes reveal uncomfortable truths or unexpected perspectives. Trust that whatever comes through is meant to guide you toward your highest good, even if it's not what you expected to hear.</p>

      <h2>Have a Journal Ready</h2>
      <p>Keep notes during or immediately after your reading. Insights often deepen over time, and you'll want to remember the guidance you received.</p>
    `,
    'understanding-love-tarot-spreads': `
      <p>Love and relationship tarot spreads offer profound insights into your romantic life, helping you understand dynamics, potential outcomes, and areas for growth. Let's explore the most powerful spreads for matters of the heart.</p>

      <h2>The Relationship Spread</h2>
      <p>This classic spread examines both partners' perspectives, the connection between them, and the relationship's potential. It reveals hidden dynamics and shows what each person brings to the partnership.</p>

      <h2>Past, Present, Future Love Reading</h2>
      <p>Perfect for understanding how past experiences influence your current love life and what's ahead. This spread helps you release old patterns and embrace new possibilities.</p>

      <h2>Soul Mate Spread</h2>
      <p>Designed to help you understand what you truly need in a partner and what might be blocking you from attracting or recognizing that person. It's not about prediction but preparation.</p>

      <h2>Decision Making Spread</h2>
      <p>When you're torn between staying or leaving, this spread illuminates the likely outcomes of each choice, helping you make decisions aligned with your highest good.</p>

      <h2>Self-Love Spread</h2>
      <p>Remember, the most important relationship is with yourself. This spread reveals areas where you need to nurture self-love and release self-limiting beliefs.</p>
    `,
    'career-guidance-through-tarot': `
      <p>Career tarot readings provide clarity when you're facing professional crossroads, seeking new opportunities, or wondering if you're on the right path. Here's what to expect from a career-focused reading.</p>

      <h2>Understanding Your Professional Path</h2>
      <p>Career readings don't predict specific job titles or salaries. Instead, they reveal energies, opportunities, and challenges surrounding your professional life. The cards show you what you need to know to make empowered decisions.</p>

      <h2>Common Career Questions</h2>
      <p>Effective career questions focus on growth and action: "What do I need to know about this job opportunity?" "What's blocking my professional advancement?" "How can I better align my work with my purpose?"</p>

      <h2>Timing and Opportunities</h2>
      <p>The tarot can indicate favorable timing for career moves, but remember - you create your timeline through action. The cards show you when energies are supportive, not when things will magically happen.</p>

      <h2>Workplace Dynamics</h2>
      <p>Career readings can illuminate challenging workplace relationships, reveal hidden agendas, and guide you in navigating office politics with integrity.</p>

      <h2>Entrepreneurship and Business</h2>
      <p>For entrepreneurs, tarot readings offer insights on business decisions, partnerships, marketing strategies, and when to take calculated risks.</p>

      <h2>Your Professional Purpose</h2>
      <p>Beyond specific jobs, career readings can help you understand your professional purpose and how to align your work with your values and passions.</p>
    `,
  };

  const articleContent = content[post.slug as keyof typeof content] || '<p>Article content coming soon...</p>';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Section noPadding className="pt-32 pb-20">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cosmic-gold hover:text-cosmic-glow transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
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

            <h1 className="text-4xl lg:text-5xl font-serif mb-6 cosmic-text-gradient">
              {post.title}
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="aspect-video rounded-xl bg-cosmic-midnight border-2 border-cosmic-gold/30 mb-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-gold-gradient opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center text-cosmic-gold text-6xl">
              ✦
            </div>
          </div>

          <Card className="mb-12">
            <article
              className="prose prose-invert prose-headings:font-serif prose-headings:cosmic-text-gradient prose-p:text-white/80 prose-p:leading-relaxed prose-strong:text-white prose-a:text-cosmic-gold max-w-none"
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />
          </Card>

          <Card className="text-center">
            <h3 className="text-2xl font-serif mb-4 cosmic-text-gradient">
              Need Personal Guidance?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Get personalized insights specific to your unique situation with a tarot reading.
            </p>
            <Link href="/book-reading">
              <Button variant="primary">
                Book Your Reading
              </Button>
            </Link>
          </Card>

          <div className="mt-12 flex items-center justify-between">
            <Link
              href="/blog"
              className="text-cosmic-gold hover:text-cosmic-glow transition-colors"
            >
              ← More Articles
            </Link>
            <button className="flex items-center gap-2 text-cosmic-gold hover:text-cosmic-glow transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}
