import { motion } from 'framer-motion';

export function LocationMap() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Our Reach
            </p>
            <h2 className="mb-8" style={{ color: 'var(--color-text)' }}>
              Rooted in Tamil Nadu
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                  Vellore
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Tanush Group headquarters — the home base for all business operations and strategic leadership.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                  Odugathur District
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Home to Tanush Cafe, Tanush Resort, and Tanush Restaurant — the group's hospitality cluster.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 400 500" className="w-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Tamil Nadu outline */}
              <path
                d="M180 40 C220 35, 280 60, 300 100 C320 140, 330 180, 310 220 C300 250, 290 280, 270 310 C250 340, 230 370, 210 400 C190 420, 170 440, 160 450 C150 440, 130 420, 120 400 C100 370, 90 340, 85 310 C80 280, 90 250, 100 220 C110 190, 130 160, 140 130 C150 100, 160 60, 180 40Z"
                fill="var(--color-surface-elevated)"
                stroke="var(--color-border)"
                strokeWidth="1.5"
                opacity="0.8"
              />

              {/* Dashed connection line (animated) */}
              <motion.path
                d="M220 160 C230 190, 225 210, 215 240"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              />

              {/* Vellore marker */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Pulse ring */}
                <motion.circle
                  cx="220"
                  cy="155"
                  r="16"
                  fill="var(--color-accent)"
                  opacity="0.15"
                  animate={{ r: [16, 24, 16], opacity: [0.15, 0.05, 0.15] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <circle cx="220" cy="155" r="6" fill="var(--color-accent)" />
                <text x="240" y="160" fill="var(--color-text)" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
                  Vellore
                </text>
              </motion.g>

              {/* Odugathur marker */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.circle
                  cx="215"
                  cy="245"
                  r="16"
                  fill="var(--color-accent)"
                  opacity="0.15"
                  animate={{ r: [16, 24, 16], opacity: [0.15, 0.05, 0.15] }}
                  transition={{ duration: 2.5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <circle cx="215" cy="245" r="6" fill="var(--color-accent)" />
                <text x="235" y="250" fill="var(--color-text)" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
                  Odugathur
                </text>
              </motion.g>

              {/* Tamil Nadu label */}
              <text x="140" y="380" fill="var(--color-text-muted)" fontSize="11" fontWeight="500" letterSpacing="3" fontFamily="Inter, sans-serif" opacity="0.5">
                TAMIL NADU
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
