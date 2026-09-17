import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMagnetic } from '../hooks/useMagnetic';

const verticals = ['Agricultural Trade', 'Hospitality', 'Renewable Energy', 'Logistics'];

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const [verticalIndex, setVerticalIndex] = useState(0);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  useMagnetic(ctaRef, 0.25);

  // Text-swap cycling through verticals
  useEffect(() => {
    const interval = setInterval(() => {
      setVerticalIndex(prev => (prev + 1) % verticals.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Fade scroll cue on first scroll
  useEffect(() => {
    const onScroll = () => {
      if (scrollCueRef.current && window.scrollY > 50) {
        scrollCueRef.current.style.opacity = '0';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headlineWords = ['Building', 'Businesses.', 'Creating', 'Value.'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-hero-bg)' }}>
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hero-bg)]/30 via-transparent to-[var(--color-hero-bg)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-30 scale-110"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-32">
        <div className="max-w-4xl">
          {/* Kinetic Headline */}
          <div className="mb-8">
            <h1 style={{ color: 'var(--color-hero-text)' }}>
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {i === 2 && <br className="hidden md:block" />}
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Text-swap vertical */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-12"
          >
            <p
              className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl"
              style={{ color: 'var(--color-hero-text)', opacity: 0.6 }}
            >
              A diversified business group operating across
            </p>
            <div className="h-10 md:h-12 overflow-hidden relative">
              {verticals.map((v, i) => (
                <motion.span
                  key={v}
                  className="absolute left-0 text-2xl md:text-3xl font-bold"
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    color: 'var(--color-accent)',
                  }}
                  initial={false}
                  animate={{
                    y: i === verticalIndex ? 0 : i < verticalIndex ? -50 : 50,
                    opacity: i === verticalIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {v}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              ref={ctaRef}
              href="#businesses"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#0c0c0c',
              }}
              data-magnetic
            >
              Explore Our Businesses
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border transition-all duration-300"
              style={{
                borderColor: 'var(--color-hero-text)',
                color: 'var(--color-hero-text)',
                opacity: 0.7,
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" style={{ color: 'var(--color-hero-text)', opacity: 0.4 }} />
        </motion.div>
      </div>
    </section>
  );
}
