import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4", label: "AI Products Shipped" },
  { value: "2", label: "National Hackathon Wins" },
  { value: "2026", label: "Graduation Year" },
  { value: "∞", label: "Ambition" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 geometric-pattern">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-cobalt uppercase mb-4">About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-12">
            Builder, Not Student
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm an AI Engineer based in Riyadh who builds real products — not prototypes. 
              From an AI legal advisor deployed on Azure to a fintech platform with Power BI dashboards, 
              every system I've built serves real users and solves real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Before graduating, I've already won national hackathons, represented my university 
              with two competing teams, and shipped AI systems across legal, financial, and 
              educational domains. I build end-to-end: from NLP pipelines to cloud deployment.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-sm text-mint font-display tracking-wider">Riyadh, Saudi Arabia 🇸🇦</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-6 text-center hover:glow-cobalt transition-shadow duration-500"
              >
                <span className="block font-display text-2xl text-cobalt mb-1">{stat.value}</span>
                <span className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
