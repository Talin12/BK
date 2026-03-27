import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
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
              href="https://wa.me/919535500655"
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
  );
}
