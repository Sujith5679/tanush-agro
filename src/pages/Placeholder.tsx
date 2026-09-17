import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export function Placeholder({ title }: { title: string }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-32 px-6"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <SectionHeading title={title} subtitle="This section is currently being developed." centered />
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Check back soon for updates.
        </p>
      </motion.div>
    </div>
  );
}
