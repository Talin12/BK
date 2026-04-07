import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
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
            className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-sm filter brightness-110" 
          />
          <div className="flex flex-col justify-center translate-y-[2px]">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-none mb-1">
              B K AGARWAL <span className="text-accent">&</span> CO
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
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
  );
}
