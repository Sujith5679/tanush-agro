import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { businesses } from '../data/businesses';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">TANUSH</h2>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mt-1">Group of Companies</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Building Businesses. Creating Value. A diversified business group rooted in Vellore, expanding across industries.
            </p>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Businesses</h3>
            <ul className="space-y-4">
              {businesses.map((business) => (
                <li key={business.id}>
                  <Link to={`/businesses/${business.id}`} className="text-sm hover:text-white transition-colors">
                    {business.name.replace('Tanush ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/our-work" className="text-sm hover:text-white transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919524430044" className="text-sm flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  +91 95244 30044
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-3" />
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Tanush Group of Companies. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
