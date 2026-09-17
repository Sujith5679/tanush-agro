import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { BentoGrid } from '../components/BentoGrid';
import { ScrollStory } from '../components/ScrollStory';
import { LocationMap } from '../components/LocationMap';
import { Phone, MessageCircle, Send } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* ===== 1. HERO ===== */}
      <Hero />

      {/* ===== 2. INTRODUCTION ===== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text — offset left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-6"
                style={{ color: 'var(--color-accent)' }}
              >
                About the Group
              </p>
              <h2 className="mb-8" style={{ color: 'var(--color-text)' }}>
                One Group.<br />Multiple Businesses.
              </h2>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Tanush Group of Companies brings together diverse businesses built around trade, hospitality, energy and logistics. From agricultural products sourced directly from farmers to hospitality experiences, solar solutions and road transportation, the group continues to build businesses that serve people and communities across different sectors.
              </p>
              <div
                className="pt-6"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  Founded by Tanush Raju
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Based in Vellore, Tamil Nadu
                </p>
              </div>
            </motion.div>

            {/* Stacked photo collage — offset right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative h-[500px] md:h-[600px]"
            >
              <div
                className="absolute top-0 right-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-10"
                style={{ transform: 'rotate(2deg)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
                  alt="Agricultural produce"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
                  alt="Resort setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-[35%] left-[25%] w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-2xl z-30"
                style={{ transform: 'rotate(1deg)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop"
                  alt="Cafe ambience"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 3. OUR BUSINESSES — BENTO GRID ===== */}
      <section id="businesses" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Our Businesses"
            subtitle="Diverse ventures. One growing group."
            centered
          />
          <BentoGrid />
        </div>
      </section>

      {/* ===== 4. GROUP CAPABILITIES ===== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="What We Do"
            subtitle="From farm to table, from energy to logistics — a closer look at our capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌾',
                title: 'Agriculture',
                items: ['Direct farmer sourcing', 'Domestic & international trade', 'Quality produce handling'],
              },
              {
                icon: '🏡',
                title: 'Hospitality',
                items: ['Village-style cafe', 'Farm-stay resort', 'Restaurant & dining'],
              },
              {
                icon: '☀️',
                title: 'Energy',
                items: ['Solar air-conditioning', 'Electrical products', 'Sustainable solutions'],
              },
              {
                icon: '🚛',
                title: 'Logistics',
                items: ['Road transportation', 'Goods movement', 'Reliable delivery'],
              },
            ].map((capability, i) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <span className="text-3xl mb-5 block">{capability.icon}</span>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. OUR STORY — PINNED SCROLL ===== */}
      <ScrollStory />

      {/* ===== 6. FOUNDER ===== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--color-text-muted)' }}>
                <div className="text-center">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: '#0c0c0c',
                      fontFamily: '"Outfit", sans-serif',
                    }}
                  >
                    TR
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>[Founder photograph — to be added]</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Founder
              </p>
              <h2 className="mb-8" style={{ color: 'var(--color-text)' }}>
                Tanush Raju
              </h2>
              <blockquote
                className="text-2xl md:text-3xl leading-snug font-light mb-8"
                style={{
                  color: 'var(--color-text)',
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                }}
              >
                "Building and growing businesses across diverse sectors while creating long-term value for customers, partners and communities."
              </blockquote>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Tanush Group of Companies was founded by Tanush Raju with a vision of building and growing businesses across diverse sectors while creating long-term value for customers, partners and communities.
              </p>
              <p className="mt-6 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Founder — Tanush Group of Companies
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 7. LOCATIONS ===== */}
      <LocationMap />

      {/* ===== 8. GALLERY PREVIEW ===== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            title="Inside Tanush"
            subtitle="A visual showcase of our businesses, teams, and experiences."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'photo-1542838132-92c53300491e',
              'photo-1554118811-1e0d58224f24',
              'photo-1566073771259-6a8506099945',
              'photo-1517248135467-4c7edcad34c4',
              'photo-1509391366360-70e8d3530fa4',
              'photo-1519003722824-194d4455a60c',
              'photo-1500382017468-9049fed747ef',
              'photo-1486406146926-c627a92ad1ab',
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl overflow-hidden group ${
                  i === 0 || i === 5 ? 'row-span-2 h-[300px] md:h-full' : 'h-[150px] md:h-[200px]'
                }`}
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <img
                  src={`https://images.unsplash.com/${img}?q=80&w=600&auto=format&fit=crop`}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. CONTACT — LET'S CONNECT ===== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionHeading
            title="Let's Connect"
            subtitle="Whether you're looking to work with us, explore our businesses, or simply learn more about Tanush Group, we'd be happy to hear from you."
            centered
          />
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
            <a
              href="tel:+919524430044"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{ backgroundColor: 'var(--color-accent)', color: '#0c0c0c' }}
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Us
            </a>
            <a
              href="https://wa.me/919524430044"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Us
            </a>
            <a
              href="mailto:info@tanushgroup.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Send className="w-5 h-5 mr-3" />
              Send an Enquiry
            </a>
          </div>
          <p className="mt-10 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Tanush Group of Companies &middot; Vellore, Tamil Nadu, India &middot; +91 95244 30044
          </p>
        </div>
      </section>
    </div>
  );
}
