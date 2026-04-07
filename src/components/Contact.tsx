import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-charcoal border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let's discuss your financial strategy.
              </h2>
              <p className="text-white/60 mb-12 text-lg font-light max-w-md leading-relaxed">
                Whether you're incorporating a new business or navigating complex tax codes, our doors are open.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Office</h4>
                    <p className="text-white font-medium">123 Corporate Avenue, Bangalore, KA 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-white font-medium">info@bkagarwal.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-white font-medium">+91 95355 00655</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal/50 rounded-3xl p-8 border border-white/5">
              <form className="flex flex-col space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
                <button 
                  type="button" 
                  className="w-full bg-accent text-charcoal font-bold p-4 rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-colors mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
