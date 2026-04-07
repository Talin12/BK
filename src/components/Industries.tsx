import { motion } from "motion/react";
import { Briefcase, Building2, Landmark, Factory, Shield, Monitor } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      icon: <Factory className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Financial Services",
      icon: <Landmark className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Technology & IT",
      icon: <Monitor className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Real Estate",
      icon: <Building2 className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Corporate & SMEs",
      icon: <Briefcase className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Healthcare",
      icon: <Shield className="w-8 h-8 text-accent mb-6" />
    }
  ];

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Sectors
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Industries We Serve
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-accent/30 group"
            >
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
