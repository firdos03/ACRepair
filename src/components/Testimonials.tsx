import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Rahul Kulkarni',
    location: 'Aundh, Pune',
    text: 'My AC was making a strange noise, so I called for service. The technician arrived within just one hour, thoroughly inspected the unit, and fixed the issue immediately. Very genuine and reliable service. Highly recommended!👍',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    name: 'Sneha Deshpande',
    location: 'Kothrud, Pune',
    text: 'Hard working and honest team. They didnt overcharge for the gas refilling. Highly recommended for regular maintenance.',
    rating: 4,
    img: 'https://i.pravatar.cc/150?u=sneha'
  },
  {
    name: 'Amit Shinde',
    location: 'Baner, Pune',
    text: 'I got two new split ACs installed. The technician did a proper fitting and gave a clean, neat finish. They also patiently explained all the features. Very professional work. 👍',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=prit'
  }
];


export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Honest reviews from real customers across Pune.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 relative"
          >
            <div className="absolute top-8 right-8 text-blue-200">
              <Quote size={40} />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, index) => (
                <Star key={index} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 italic mb-8 leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              {/* <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" /> */}
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
