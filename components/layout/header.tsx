'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        isScrolled
          ? 'bg-cosmic-dark/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-serif tracking-tight">
              <span className="text-white">Mystic</span>
              <span className="cosmic-text-gradient"> Tarot</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm transition-colors relative py-2',
                  pathname === item.href
                    ? 'text-cosmic-gold'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cosmic-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/book-reading">
              <Button size="sm" variant="primary">
                Book Reading
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cosmic-gold"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-cosmic-purple/30 bg-cosmic-dark/98 backdrop-blur-lg"
        >
          <Container>
            <nav className="py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block py-2 transition-colors',
                    pathname === item.href
                      ? 'text-cosmic-gold'
                      : 'text-white/70'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/book-reading" className="block pt-4">
                <Button variant="primary" className="w-full">
                  Book Reading
                </Button>
              </Link>
            </nav>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
}
