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

// Bento layout:
// Row 1: Agro (2 cols) | Cafe (1 col)  | Resort (1 col, spans 2 rows)
// Row 2: Electricals    | Restaurant   | Resort (cont.)
// Row 3: Logistics (3 cols wide)

interface TileConfig {
  id: string;
  gridClass: string;
}

const tileLayout: TileConfig[] = [
  { id: 'agro-traders', gridClass: 'md:col-span-2 md:row-span-1' },
  { id: 'cafe',         gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 'resort',       gridClass: 'md:col-span-1 md:row-span-2' },
  { id: 'electricals',  gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 'restaurant',   gridClass: 'md:col-span-1 md:row-span-1' },
  { id: 'logistics',    gridClass: 'md:col-span-3 md:row-span-1' },
];

function BusinessTile({ businessId, gridClass, index }: { businessId: string; gridClass: string; index: number }) {
  const business = businesses.find(b => b.id === businessId);
  if (!business) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={gridClass}
    >
      <Link
        to={`/businesses/${business.id}`}
        className="group relative block w-full h-full rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <img
          src={placeholderImages[business.id]}
          alt={business.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
          }}
        />
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
  );
}

export function BentoGrid() {
  return (
    <>
      {/* Desktop: asymmetric bento grid — 3 columns, explicit layout */}
      <div className="hidden md:grid grid-cols-3 gap-4" style={{ gridAutoRows: '280px' }}>
        {tileLayout.map((tile, index) => (
          <BusinessTile
            key={tile.id}
            businessId={tile.id}
            gridClass={tile.gridClass}
            index={index}
          />
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
