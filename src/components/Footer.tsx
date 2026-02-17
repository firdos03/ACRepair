import React from 'react';
import { ThermometerSnowflake, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ThermometerSnowflake className="text-blue-600 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">PuneCool AC</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Providing professional cooling solutions for homes and businesses across Pune. Quality service, guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Split AC Repair</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Window AC Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Gas Refilling</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Annual Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">PCB Repair</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kothrud & Bavdhan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Baner & Balewadi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wakad & Hinjewadi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Aundh & Sangvi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Viman Nagar & Kharadi</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">
              Subscribe to get seasonal maintenance tips and discount offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-blue-600 text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} PuneCool AC Repair Services. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Pune
          </div>
        </div>
      </div>
    </footer>
  );
};
