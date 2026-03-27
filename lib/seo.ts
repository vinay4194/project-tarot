import { Metadata } from 'next';

export const siteConfig = {
  name: 'Mystic Tarot Readings',
  description: 'Professional online tarot reading services for love, career, and life guidance across India. Get clarity with confidential, accurate tarot card readings.',
  url: 'https://mystictarot.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'tarot reading online india',
    'love tarot reading',
    'career tarot reading',
    'tarot reader india',
    'online tarot reading',
    'relationship tarot reading',
    'yes no tarot',
    'professional tarot reader',
  ],
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url || siteConfig.url;
  const metaKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'INR',
      },
    }),
  };
}
