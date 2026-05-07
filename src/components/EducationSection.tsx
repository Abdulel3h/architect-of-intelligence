import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 geometric-pattern">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-cobalt uppercase mb-4">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-16">
            Foundation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card rounded-xl p-8 md:p-12 max-w-2xl mx-auto border border-cobalt/20 hover:glow-cobalt transition-shadow duration-500"
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-display text-lg text-soft-white tracking-wide mb-2">
                B.S. Information Systems
              </h3>
              <p className="text-cobalt font-display text-sm tracking-wider">University of Bisha</p>
            </div>
            <span className="font-display text-xs tracking-[0.3em] text-gold uppercase px-3 py-1 border border-gold/30 rounded-full">
              Expected 2026
            </span>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building AI systems that win national competitions before graduation. 
              Already shipped 4 production products, competed in CITC and SDAIA hackathons, 
              and represented the university with two simultaneous teams.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-[10px] font-display tracking-widest uppercase text-muted-foreground">Arabic (Native)</span>
            <span className="text-border">·</span>
            <span className="text-[10px] font-display tracking-widest uppercase text-muted-foreground">English (Professional)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
