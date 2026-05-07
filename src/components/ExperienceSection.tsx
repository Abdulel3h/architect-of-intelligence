import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "2023 — Present",
    role: "Technical Lead & AI Engineer",
    org: "King Abdulaziz Medical City, Riyadh",
    description: "Leading AI engineering for clinical tools, ophthalmology research, and Arabic NLP pipelines.",
  },
  {
    period: "2022 — 2023",
    role: "AI Systems Developer",
    org: "Enterprise AI Projects",
    description: "Built Wida AI presentation engine and Arabic RAG systems for government tender automation.",
  },
  {
    period: "2021 — 2022",
    role: "Full-Stack Developer",
    org: "Health Informatics",
    description: "Developed bilingual clinical documentation tools and research management systems.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-cobalt uppercase mb-4">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-16">
            Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cobalt via-mint to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.4 }}
                  className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-background border-2 border-cobalt"
                  style={{ boxShadow: "0 0 12px oklch(0.55 0.25 260 / 50%)" }}
                />

                <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-1">{item.period}</p>
                <h3 className="font-display text-base text-soft-white mb-1">{item.role}</h3>
                <p className="text-sm text-cobalt mb-2">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
