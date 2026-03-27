import { blogPosts, services } from '@/lib/data';
import { siteConfig } from '@/lib/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/services',
    '/book-reading',
    '/blog',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${siteConfig.url}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
