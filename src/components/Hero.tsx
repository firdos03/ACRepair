import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, ShieldCheck, Clock, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Pune's #1 Rated AC Service
            </h1>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Stay Cool in <span className="text-blue-600">Pune's Heat</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Professional AC repair, installation, and maintenance services at your doorstep. Fast, reliable, and affordable solutions for your home and office.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+919876543210"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95"
              >
                <Phone size={20} />
                Book a Technician
              </a>

            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certified Experts</div>
                  <div className="text-sm text-slate-500">5+ Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Quick Response</div>
                  <div className="text-sm text-slate-500">Service within 90 mins</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="https://cdn.shopify.com/s/files/1/1825/9663/files/PioneerMiniSplit-seotool-52783-CleaningYourMini-Split-blogbanner1_1.jpg?v=1608576350"
                alt="AC Repair Technician"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] hidden md:block border border-slate-50">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                      <ImageWithFallback src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900">500+ Served</div>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Trusted by residents in Kothrud, Baner, Wakad, and beyond.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
