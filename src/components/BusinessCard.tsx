import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Business } from '../data/businesses';

interface BusinessCardProps {
  business: Business;
  index: number;
}

export function BusinessCard({ business, index }: BusinessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={`/businesses/${business.id}`}
        className="group block rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative h-64 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <img
            src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1542838132-92c53300491e' : '1504328345606-18bbc8c9d7d1'}?q=80&w=1000&auto=format&fit=crop`}
            alt={business.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-800 uppercase tracking-wide">
              {business.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{business.name}</h3>
          
          {business.location && (
            <div className="flex items-center text-sm text-slate-500 mb-4">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              {business.location}
            </div>
          )}
          
          <p className="text-slate-600 text-sm mb-6 line-clamp-2">
            {business.shortDescription}
          </p>

          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
            Explore Business
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
