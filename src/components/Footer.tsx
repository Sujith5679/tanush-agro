import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { businesses } from '../data/businesses';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top: Large brand statement */}
        <div className="mb-20">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            style={{
              fontFamily: '"Outfit", sans-serif',
              color: 'var(--color-footer-heading)',
            }}
          >
            Building Businesses.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Creating Value.</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Businesses */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
              style={{ color: 'var(--color-footer-heading)' }}
            >
              Businesses
            </h3>
            <ul className="space-y-4">
              {businesses.map((business) => (
                <li key={business.id}>
                  <Link
                    to={`/businesses/${business.id}`}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300 hover:text-[var(--color-accent)]"
                  >
                    {business.name.replace('Tanush ', '')}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
              style={{ color: 'var(--color-footer-heading)' }}
            >
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Our Work', href: '/our-work' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
              style={{ color: 'var(--color-footer-heading)' }}
            >
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919524430044"
                  className="text-sm flex items-center gap-3 transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 95244 30044
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919524430044"
                  className="text-sm flex items-center gap-3 transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tanushgroup.com"
                  className="text-sm flex items-center gap-3 transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
              style={{ color: 'var(--color-footer-heading)' }}
            >
              Headquarters
            </h3>
            <p className="text-sm leading-relaxed">
              Vellore, Tamil Nadu
              <br />
              India
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {currentYear} Tanush Group of Companies. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Vellore &middot; Odugathur &middot; Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
