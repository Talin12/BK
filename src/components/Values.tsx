import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Values() {
  const values = [
    {
      title: "Integrity First",
      desc: "Our foundation is built on uncompromising ethical standards and transparency in every engagement."
    },
    {
      title: "Client-Centric",
      desc: "We prioritize your specific business needs, delivering personalized and proactive advisory."
    },
    {
      title: "Deep Expertise",
      desc: "Leveraging years of combined experience to provide robust solutions across all financial domains."
    },
    {
      title: "Forward Thinking",
      desc: "Always anticipating regulatory changes and market shifts to keep your business ahead."
    }
  ];

  return (
    <section id="values" className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-t border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Core Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              What sets us apart.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
              Beyond traditional accounting, we act as strategic partners committed to the sustainable growth of your enterprise.
            </p>
          </motion.div>

          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-white tracking-tight">{val.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
