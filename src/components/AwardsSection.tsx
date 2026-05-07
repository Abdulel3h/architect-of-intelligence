import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    title: "CITC Innovation Hackathon",
    detail: "Finalist",
    date: "December 2023",
    description: "Competed among top teams in Saudi Arabia's premier telecom & IT innovation challenge.",
  },
  {
    title: "SDAIA × Microsoft #AthkaU",
    detail: "Top 30 / 80+ Teams",
    date: "2024",
    description: "Represented University of Bisha with TWO competing teams in Saudi's national AI program.",
  },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="relative py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Awards</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-16">
            Proven on Stage
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-cobalt to-transparent" />

          <div className="space-y-12">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.25, duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.25, duration: 0.4 }}
                  className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-background border-2 border-gold"
                  style={{ boxShadow: "0 0 12px oklch(0.72 0.14 85 / 50%)" }}
                />

                <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-1">{award.date}</p>
                <h3 className="font-display text-base text-soft-white mb-1">{award.title}</h3>
                <p className="text-sm text-gold mb-2 font-display tracking-wider">{award.detail}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
