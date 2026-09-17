import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { BusinessCard } from '../components/BusinessCard';
import { businesses } from '../data/businesses';
import { Phone, MapPin } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading 
                title="One Group. Multiple Businesses." 
              />
              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                  Tanush Group of Companies brings together diverse businesses built around trade, hospitality, energy and logistics. From agricultural products sourced directly from farmers to hospitality experiences, solar solutions and road transportation, the group continues to build businesses that serve people and communities across different sectors.
                </p>
                <div className="pt-6 border-t border-slate-200 mt-8">
                  <p className="font-bold text-slate-900">Founded by Tanush Raju</p>
                  <p className="text-slate-500">Based in Vellore, Tamil Nadu</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Portfolio */}
      <section id="businesses" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Businesses" 
            subtitle="Diverse ventures. One growing group."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {businesses.map((business, index) => (
              <BusinessCard key={business.id} business={business} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading 
            title="Let's Connect" 
            subtitle="Whether you're looking to work with us, explore our businesses, or simply learn more about Tanush Group, we'd be happy to hear from you."
            centered
          />
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+919524430044" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              <Phone className="w-5 h-5 mr-3" />
              Call Us
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-medium hover:bg-slate-200 transition-colors">
              <MapPin className="w-5 h-5 mr-3" />
              Our Locations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
