import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Wrench, Droplets, Fan, Zap, ShieldCheck, Phone } from "lucide-react";

export default function ACRepairService() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">
                        AC Repair Service in <span className="text-blue-600">Pune</span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Professional AC repair for all brands. Quick diagnostics and fixing
                        for cooling problems, gas leakage, compressor issues and more.
                    </p>
                </motion.div>

                {/* Image + Info */}
                <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl overflow-hidden shadow-xl"
                    >
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200"
                            alt="AC Repair"
                            className="w-full h-[450px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Common AC Problems We Fix
                        </h2>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                                <Wrench className="text-blue-600" />
                                <span className="font-medium text-slate-700">
                                    AC Not Cooling
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                                <Droplets className="text-blue-600" />
                                <span className="font-medium text-slate-700">
                                    Gas Refilling
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                                <Fan className="text-blue-600" />
                                <span className="font-medium text-slate-700">
                                    Compressor Repair
                                </span>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-3">
                                <Zap className="text-blue-600" />
                                <span className="font-medium text-slate-700">
                                    PCB / Electrical Issues
                                </span>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-8 mb-20"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <ShieldCheck className="mx-auto text-blue-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg mb-2">Certified Technicians</h3>
                        <p className="text-slate-500 text-sm">
                            Experienced AC repair experts with years of industry knowledge.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <Wrench className="mx-auto text-blue-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg mb-2">All Brands Supported</h3>
                        <p className="text-slate-500 text-sm">
                            We repair split AC, window AC, and central AC systems.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                        <Droplets className="mx-auto text-blue-600 mb-4" size={36} />
                        <h3 className="font-bold text-lg mb-2">90 Days Warranty</h3>
                        <p className="text-slate-500 text-sm">
                            We guarantee quality service with post-repair warranty.
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-600 text-white p-12 rounded-3xl text-center shadow-xl"
                >
                    <h3 className="text-3xl font-bold mb-4">
                        Need AC Repair in Pune?
                    </h3>

                    <p className="mb-6 text-blue-100">
                        Book a technician today and get fast doorstep AC repair service.
                    </p>

                    <a
                        href="tel:+918956796444"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
                    >
                        <Phone size={20} />
                        Call Now
                    </a>
                </motion.div>

            </div>
        </section>
    );
}