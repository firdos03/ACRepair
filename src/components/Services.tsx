import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Settings, Layout, Zap, Thermometer, Droplets } from 'lucide-react';

const services = [
  {
    title: 'AC Repair',
    description: 'Quick diagnostics and fixing for all major AC brands. Gas refilling, compressor repair, and more.',
    icon: Wrench,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Installation',
    description: 'Precision installation of Split and Window ACs with proper vacuuming and gas check.',
    icon: Layout,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Deep Cleaning',
    description: 'Chemical cleaning of indoor and outdoor units to improve cooling and air quality.',
    icon: Droplets,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    title: 'Gas Refilling',
    description: 'Leak detection and eco-friendly gas recharging (R32, R410, R22) for optimal cooling.',
    icon: Zap,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Regular Maintenance',
    description: 'Preventative AMC plans to keep your AC running efficiently throughout the year.',
    icon: Settings,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Un-installation',
    description: 'Safe removal of your AC units during relocation with proper gas pumping.',
    icon: Thermometer,
    color: 'bg-rose-50 text-rose-600',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We provide end-to-end cooling solutions for residential and commercial spaces in Pune.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-[32px] border border-slate-100 hover:border-blue-100 hover:bg-slate-50 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Learn more <Wrench size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
