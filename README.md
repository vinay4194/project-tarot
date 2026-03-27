# Mystic Tarot - Professional Tarot Reading Website

A modern, visually stunning, and SEO-optimized tarot reading business website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Design & Animations
- **Mystical Cosmic Theme**: Deep purple, midnight blue, and gold color palette
- **Smooth Animations**: Framer Motion-powered animations including:
  - Floating tarot cards
  - Parallax starfield background
  - Card flip animations
  - Scroll-triggered reveals
  - Magnetic button hover effects
  - Smooth page transitions
- **Interactive Elements**:
  - "Pick a Card" section with flip animation
  - Testimonial slider
  - Animated hero section
  - Glowing particle effects

### Pages & Structure
- **Home**: Hero, services, pick-a-card, about preview, testimonials, blog preview, CTA
- **Services**: Detailed service listing page
- **Individual Service Pages**: Love tarot, career tarot, yes/no tarot, full life reading
- **About**: Professional background and approach
- **Blog**: Article listing and individual blog posts
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Contact form with multiple contact methods
- **Book Reading**: Comprehensive booking form

### SEO Optimization
- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- Structured data (JSON-LD) for articles and services
- Dynamic sitemap generation
- Robots.txt configuration
- Semantic HTML
- Fast loading times
- Image optimization
- Mobile-first responsive design

### Performance Features
- Static site generation where possible
- Optimized fonts (Google Fonts with display swap)
- Lazy loading
- Code splitting
- Optimized animations (GPU-accelerated)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Inter (sans-serif)

## Project Structure

```
├── app/
│   ├── [slug]/           # Dynamic service pages
│   ├── about/
│   ├── blog/
│   │   └── [slug]/       # Dynamic blog posts
│   ├── book-reading/
│   ├── contact/
│   ├── faq/
│   ├── services/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap
│   ├── robots.ts         # Robots.txt
│   └── globals.css       # Global styles
├── components/
│   ├── backgrounds/      # Starfield, cosmic glow effects
│   ├── layout/          # Header, footer
│   ├── sections/        # Page sections (hero, services, etc.)
│   └── ui/              # Reusable UI components
├── lib/
│   ├── data.ts          # Services, testimonials, blog data
│   ├── seo.ts           # SEO utilities and metadata
│   └── utils.ts         # Helper functions
└── public/              # Static assets

```

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Customization

### Update Site Information
Edit `/lib/seo.ts` to update:
- Site name
- Description
- URL
- Keywords
- OG image

### Update Services
Edit `/lib/data.ts` to modify:
- Service offerings
- Prices
- Features
- Testimonials
- Blog posts

### Update Contact Information
Update contact details in:
- `/app/contact/page.tsx`
- `/components/layout/footer.tsx`
- `/components/whatsapp-button.tsx`

### Color Scheme
Modify colors in `/tailwind.config.ts`:
```typescript
colors: {
  cosmic: {
    dark: '#0F0B1F',      // Deep purple background
    midnight: '#14112E',  // Midnight blue
    gold: '#E6C068',      // Gold accent
    purple: '#8B5CF6',    // Cosmic purple
    glow: '#A78BFA',      // Glow effect
  },
}
```

## SEO Best Practices Implemented

✅ Semantic HTML structure
✅ Meta tags on all pages
✅ Open Graph tags
✅ Schema.org structured data
✅ Optimized images
✅ Fast loading (LCP < 2.5s)
✅ Mobile responsive
✅ Accessible (ARIA labels)
✅ Clean URLs
✅ Internal linking
✅ Sitemap
✅ Robots.txt

## Performance Optimization

- Static generation for better SEO and performance
- Image optimization with Next.js Image component
- Font optimization with next/font
- CSS optimization with Tailwind
- JavaScript code splitting
- Lazy loading of components
- GPU-accelerated animations

## Mobile Features

- Fully responsive design
- Touch-friendly interactions
- WhatsApp floating button
- Optimized mobile navigation
- Fast loading on mobile networks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- etc.

## License

This project is for commercial use. All rights reserved.

## Support

For questions or support, contact: hello@mystictarot.com

---

Built with ✨ by Claude Code
