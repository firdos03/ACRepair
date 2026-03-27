import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
// import ACRepairService from './components/DetailsPages/ACRepairService';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials /> 
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/ACRepairDetails" element={<ACRepairService />} /> */}
          </Routes>
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </Router>
  );
}