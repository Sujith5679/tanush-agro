import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../data/navigation';
import { businesses } from '../data/businesses';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          backgroundColor: navTransparent ? 'transparent' : 'var(--color-nav-bg)',
          borderBottom: navTransparent ? '1px solid transparent' : '1px solid var(--color-nav-border)',
          backdropFilter: navTransparent ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: navTransparent ? 'none' : 'blur(20px)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group" data-magnetic>
              <span
                className="text-xl font-bold tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: navTransparent ? 'var(--color-hero-text)' : 'var(--color-text)' }}
              >
                TANUSH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
                      style={{ color: navTransparent ? 'var(--color-hero-text)' : 'var(--color-text-muted)' }}
                    >
                      {item.title}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-100"
                      style={{
                        color: navTransparent ? 'var(--color-hero-text)' : 'var(--color-text-muted)',
                        opacity: location.pathname === item.href ? 1 : 0.7,
                      }}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 mt-4 w-[320px] p-4 rounded-2xl shadow-2xl"
                          style={{
                            backgroundColor: 'var(--color-surface-elevated)',
                            border: '1px solid var(--color-border)',
                          }}
                        >
                          <div className="space-y-1">
                            {item.children.map((child) => {
                              const biz = businesses.find(b => child.href.includes(b.id));
                              return (
                                <Link
                                  key={child.title}
                                  to={child.href}
                                  className="flex items-center gap-4 p-3 rounded-xl transition-colors duration-200 group"
                                  style={{ color: 'var(--color-text)' }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface)';
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                  }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {/* Thumbnail */}
                                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[var(--color-surface)]">
                                    <img
                                      src={`https://images.unsplash.com/photo-${biz?.id === 'agro-traders' ? '1542838132-92c53300491e' : biz?.id === 'cafe' ? '1554118811-1e0d58224f24' : biz?.id === 'resort' ? '1566073771259-6a8506099945' : biz?.id === 'restaurant' ? '1517248135467-4c7edcad34c4' : biz?.id === 'electricals' ? '1509391366360-70e8d3530fa4' : '1519003722824-194d4455a60c'}?w=96&h=96&fit=crop&q=80`}
                                      alt={child.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold">{child.title}</div>
                                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                      {biz?.category}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right side: theme toggle + CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300"
                style={{ color: navTransparent ? 'var(--color-hero-text)' : 'var(--color-text-muted)' }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Desktop CTA */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#0c0c0c',
                }}
                data-magnetic
              >
                Get in Touch
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2"
                style={{ color: navTransparent ? 'var(--color-hero-text)' : 'var(--color-text)' }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center lg:hidden"
            style={{ backgroundColor: 'var(--color-background)' }}
          >
            <div className="flex flex-col items-center gap-8">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold tracking-tight transition-colors"
                    style={{
                      fontFamily: 'var(--font-display, "Outfit", sans-serif)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navigation.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#0c0c0c' }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
