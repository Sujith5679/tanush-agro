import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle } from 'lucide-react';
import { businesses } from '../data/businesses';

export function BusinessDetail() {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Business Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Business Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-50">
          <img
            src={`https://images.unsplash.com/photo-${business.id === 'agro-traders' ? '1542838132-92c53300491e' : '1504328345606-18bbc8c9d7d1'}?q=80&w=2070&auto=format&fit=crop`}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Group
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              {business.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {business.name}
            </h1>
            {business.location && (
              <div className="flex items-center text-slate-300 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                {business.location}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="prose prose-lg prose-slate">
          <p className="text-2xl text-slate-700 leading-relaxed font-light mb-12">
            {business.description}
          </p>
          
          {business.products && (
            <div className="grid sm:grid-cols-2 gap-12 mt-16 border-t border-slate-200 pt-16">
              {business.products.export && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Export Products</h3>
                  <ul className="space-y-3">
                    {business.products.export.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {business.products.domestic && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Domestic Products</h3>
                  <ul className="space-y-3">
                    {business.products.domestic.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {business.services && (
            <div className="mt-16 border-t border-slate-200 pt-16">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Capabilities & Services</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {business.services.map((service, i) => (
                  <li key={i} className="flex items-center p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
