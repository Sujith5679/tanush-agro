import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { businesses } from '../data/businesses';

export function BusinessDetail() {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Business Not Found</h1>
        <Link to="/" className="hover:underline" style={{ color: 'var(--color-accent)' }}>Return to Home</Link>
      </div>
    );
  }

  const placeholderImages: Record<string, string> = {
    'agro-traders': 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop',
    'cafe': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop',
    'resort': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    'restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    'electricals': 'https://images.unsplash.com/photo-1509391366360-70e8d3530fa4?q=80&w=2070&auto=format&fit=crop',
    'logistics': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop',
  };

  return (
    <div>
      {/* Business Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ backgroundColor: 'var(--color-hero-bg)' }}>
        <div className="absolute inset-0">
          <img
            src={placeholderImages[business.id] || placeholderImages['agro-traders']}
            alt={business.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, var(--color-hero-bg) 10%, transparent 60%)' }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-16 pt-40">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors duration-300"
            style={{ color: 'var(--color-hero-text)', opacity: 0.6 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Group
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              {business.category}
            </span>
            <h1 style={{ color: 'var(--color-hero-text)' }}>
              {business.name}
            </h1>
            {business.location && (
              <div className="flex items-center gap-2 mt-6" style={{ color: 'var(--color-hero-text)', opacity: 0.5 }}>
                <MapPin className="w-4 h-4" />
                <span className="text-base">{business.location}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div
        className="sticky top-20 z-40 hidden md:block"
        style={{
          backgroundColor: 'var(--color-nav-bg)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-8 h-12 overflow-x-auto">
            {['Overview', business.products ? 'Products' : null, business.services ? 'Services' : null, 'Contact'].filter(Boolean).map((label) => (
              <a
                key={label}
                href={`#${label?.toLowerCase()}`}
                className="text-sm font-medium whitespace-nowrap transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: 'var(--color-background)' }}>
        {/* Overview */}
        <section id="overview" className="py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl leading-relaxed font-light"
              style={{ color: 'var(--color-text)', fontFamily: '"Outfit", sans-serif', fontWeight: 600 }}
            >
              {business.description}
            </motion.p>
          </div>
        </section>

        {/* Products */}
        {business.products && (
          <section id="products" className="py-24" style={{ borderTop: '1px solid var(--color-border)' }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="grid sm:grid-cols-2 gap-16">
                {business.products.export && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                      International / Export
                    </p>
                    <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>Export Products</h3>
                    <ul className="space-y-4">
                      {business.products.export.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-base" style={{ color: 'var(--color-text)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {business.products.domestic && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                      Domestic Markets
                    </p>
                    <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>Domestic Products</h3>
                    <ul className="space-y-4">
                      {business.products.domestic.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-base" style={{ color: 'var(--color-text)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        {business.services && (
          <section id="services" className="py-24" style={{ borderTop: '1px solid var(--color-border)' }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                Capabilities
              </p>
              <h3 className="text-2xl font-bold mb-12" style={{ color: 'var(--color-text)' }}>Services & Facilities</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {business.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <CheckCircle className="w-5 h-5 mb-3" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-base font-medium" style={{ color: 'var(--color-text)' }}>{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section id="contact" className="py-24" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Interested in {business.name}?
            </h3>
            <p className="text-base mb-10" style={{ color: 'var(--color-text-muted)' }}>
              Get in touch to learn more about our {business.category.toLowerCase()} offerings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919524430044"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200 active:scale-[0.97]"
                style={{ backgroundColor: 'var(--color-accent)', color: '#0c0c0c' }}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Us
              </a>
              <a
                href="https://wa.me/919524430044"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200 active:scale-[0.97]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
