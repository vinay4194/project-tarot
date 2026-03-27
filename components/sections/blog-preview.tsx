'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { blogPosts } from '@/lib/data';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export function BlogPreview() {
  return (
    <Section>
      <SectionHeader
        title="Tarot Wisdom & Insights"
        subtitle="Explore articles about tarot, spirituality, and personal growth"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full group">
              <div className="aspect-video rounded-lg bg-cosmic-midnight/50 border border-cosmic-gold/20 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gold-gradient opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center text-cosmic-gold text-4xl">
                  ✦
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
                <span className="text-cosmic-gold">{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-serif mb-2 text-white group-hover:text-cosmic-gold transition-colors">
                {post.title}
              </h3>

              <p className="text-white/70 text-sm mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center text-cosmic-gold text-sm group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog">
          <Button variant="outline">
            View All Articles
          </Button>
        </Link>
      </div>
    </Section>
  );
}
