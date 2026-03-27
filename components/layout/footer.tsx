import { Container } from '@/components/ui/container';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cosmic-purple/30 bg-cosmic-dark/50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl text-cosmic-gold">✦</div>
              <span className="text-xl font-serif cosmic-text-gradient">
                Mystic Tarot
              </span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Professional tarot readings for love, career, and life guidance across India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cosmic-gold/30 flex items-center justify-center text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cosmic-gold/30 flex items-center justify-center text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cosmic-gold/30 flex items-center justify-center text-cosmic-gold hover:bg-cosmic-gold/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link href="/" className="hover:text-cosmic-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cosmic-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cosmic-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cosmic-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cosmic-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link href="/love-tarot-reading" className="hover:text-cosmic-gold transition-colors">
                  Love Tarot Reading
                </Link>
              </li>
              <li>
                <Link href="/career-tarot-reading" className="hover:text-cosmic-gold transition-colors">
                  Career Tarot Reading
                </Link>
              </li>
              <li>
                <Link href="/yes-no-tarot-reading" className="hover:text-cosmic-gold transition-colors">
                  Yes/No Tarot
                </Link>
              </li>
              <li>
                <Link href="/full-life-tarot-reading" className="hover:text-cosmic-gold transition-colors">
                  Full Life Reading
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cosmic-gold" />
                <a href="mailto:hello@mystictarot.com" className="hover:text-cosmic-gold transition-colors">
                  hello@mystictarot.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cosmic-gold" />
                <a href="tel:+919876543210" className="hover:text-cosmic-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cosmic-purple/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {currentYear} Mystic Tarot. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cosmic-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cosmic-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
