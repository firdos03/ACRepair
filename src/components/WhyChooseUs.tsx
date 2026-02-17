import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Award, Headphones } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    title: 'Pune-Wide Coverage',
    description: 'From Hinjewadi to Hadapsar, we serve all major areas in Pune city.',
    icon: MapPin,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. Detailed invoice provided for every service.',
    icon: Award,
  },
  {
    title: '90-Day Warranty',
    description: 'We stand by our work. Enjoy a 3-month warranty on all repairs.',
    icon: CheckCircle2,
  },
  {
    title: '24/7 Support',
    description: 'Emergency repair services available for commercial clients.',
    icon: Headphones,
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761330440311-16e160cad236?q=80&w=1080"
                alt="Modern AC Interior"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-30 -z-10" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Pune Residents Trust Us?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              With over a decade of experience in the Pune market, we understand the local climate and the common AC issues faced by residents.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-600 rounded-[32px] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold mb-1">15,000+</div>
                <div className="opacity-90">Satisfied Customers</div>
              </div>
              <div className="h-10 w-px bg-blue-400 hidden sm:block" />
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold mb-1">4.9/5</div>
                <div className="opacity-90">Google Rating</div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Book Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
