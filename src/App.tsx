/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30 bg-charcoal">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-[100]" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "nav-blur py-4 border-b border-white/5 shadow-2xl" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <img 
              src="https://res.cloudinary.com/duk9coqow/image/upload/v1774577822/Screenshot_2026-03-27_at_7.40.54_AM-removebg-preview_uypeq3.png" 
              alt="B K Agarwal & Co Logo" 
              className="h-12 md:h-14 w-auto object-contain drop-shadow-sm filter brightness-110" 
            />
            <div className="flex flex-col justify-center translate-y-[2px]">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none mb-1">
                B K AGARWAL <span className="text-accent">&</span> CO
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
                Chartered Accountants
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-accent transition-all"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-xl border-b border-white/5 p-8 flex flex-col space-y-6 md:hidden"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-bold uppercase tracking-widest text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen flex items-center overflow-hidden pt-24 md:pt-32">
        {/* Immersive Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://res.cloudinary.com/duk9coqow/video/upload/v1774577254/Animate_this_make_202603270737_htnhnk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 md:mt-16"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  Excellence in Audit & Taxation
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
                Simplifying Tax <span className="text-white/30">&</span> Compliance for Growing Businesses
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12 font-light"
            >
              From audit to taxation, we help startups, SMEs, and individuals stay compliant and financially confident.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-charcoal font-bold rounded-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center uppercase tracking-widest text-xs">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Chat on WhatsApp
                </span>
              </a>

              <a
                href="#services"
                className="group flex items-center text-white font-bold uppercase tracking-widest text-xs hover:text-accent transition-all"
              >
                View Services
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="mt-16 flex items-center space-x-6"
            >
              <div className="h-px w-12 bg-accent/50" />
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">
                Serving clients across Bangalore
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Bar */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent z-10" />
      </main>

      {/* Footer Strip */}
      <footer className="relative z-20 py-10 border-t border-white/5 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">
          <p>© 2024 B K Agarwal & Co. Chartered Accountants.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
