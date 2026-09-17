import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businesses } from '../data/businesses';

const placeholderImages: Record<string, string> = {
  'agro-traders': 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
  'cafe': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
  'resort': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  'restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  'electricals': 'https://images.unsplash.com/photo-1509391366360-70e8d3530fa4?q=80&w=1200&auto=format&fit=crop',
  'logistics': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
};

// Bento grid: Agro (large), Resort (large), rest small
// Layout: 4-column grid
// Row 1: Agro (2 cols, 2 rows), Cafe (1 col), Restaurant (1 col)
// Row 2: (agro continues), Electricals (1 col), Logistics (1 col)
// Row 3: Resort (2 cols, 2 rows) ... but let's simplify to a workable CSS grid

const gridPositions: Record<string, string> = {
  'agro-traders': 'md:col-span-2 md:row-span-2',
  'cafe': 'md:col-span-1 md:row-span-1',
  'resort': 'md:col-span-2 md:row-span-2',
  'restaurant': 'md:col-span-1 md:row-span-1',
  'electricals': 'md:col-span-1 md:row-span-1',
  'logistics': 'md:col-span-1 md:row-span-1',
};

// Order for the grid
const gridOrder = ['agro-traders', 'cafe', 'electricals', 'resort', 'restaurant', 'logistics'];

export function BentoGrid() {
  const orderedBusinesses = gridOrder.map(id => businesses.find(b => b.id === id)!);

  return (
    <>
      {/* Desktop: asymmetric bento grid */}
      <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[280px]">
        {orderedBusinesses.map((business, index) => (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={gridPositions[business.id]}
          >
            <Link
              to={`/businesses/${business.id}`}
              className="group relative block w-full h-full rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              {/* Image */}
              <img
                src={placeholderImages[business.id]}
                alt={business.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/60 mb-2">
                  {business.category}
                </span>
                <h3
                  className="text-xl lg:text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  {business.name}
                </h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2 max-w-sm">
                  {business.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  Explore
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile: horizontal snap-scroll carousel */}
      <div className="md:hidden snap-carousel px-6">
        {businesses.map((business, index) => (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[85vw] max-w-[340px]"
          >
            <Link
              to={`/businesses/${business.id}`}
              className="group relative block w-full h-[400px] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <img
                src={placeholderImages[business.id]}
                alt={business.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/60 mb-2">
                  {business.category}
                </span>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  {business.name}
                </h3>
                <p className="text-sm text-white/60 mb-3 line-clamp-2">
                  {business.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                  Explore
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
