import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`tracking-tight mb-5 ${
          light ? 'text-[var(--color-hero-text)]' : 'text-[var(--color-text)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-[var(--color-hero-text)]/60' : 'text-[var(--color-text-muted)]'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
