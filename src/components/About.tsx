import { motion } from "motion/react";

export default function About() {
  const stats = [
    { label: "Years of Trust", value: "15+" },
    { label: "Clients Served", value: "500+" },
    { label: "Professionals", value: "25+" }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Our Legacy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              A decade and a half of financial clarity & trust.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
              We are a premier Chartered Accountancy firm committed to delivering excellence in audit, assurance, taxation, and advisory services. Our deep industry expertise and personalized approach empower businesses to navigate complex regulatory landscapes with confidence.
            </p>
          </motion.div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center"
              >
                <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
