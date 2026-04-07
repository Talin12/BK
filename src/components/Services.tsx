import { motion } from "motion/react";
import { FileText, Calculator, PieChart, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Audit & Assurance",
      desc: "Comprehensive auditing ensuring transparency, compliance, and actionable insights for your stakeholders.",
      icon: <ShieldCheck className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Direct & Indirect Tax",
      desc: "Strategic tax planning, compliance, and representation to optimize your financial efficiency.",
      icon: <Calculator className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Business Advisory",
      desc: "Expert guidance on restructuring, mergers, financial modeling, and growth strategy.",
      icon: <PieChart className="w-8 h-8 text-accent mb-6" />
    },
    {
      title: "Regulatory Compliance",
      desc: "Navigating complex corporate laws and ensuring flawless statutory compliance year-round.",
      icon: <FileText className="w-8 h-8 text-accent mb-6" />
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Practice Areas
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Comprehensive Financial Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-accent/30 rounded-2xl p-8 transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
