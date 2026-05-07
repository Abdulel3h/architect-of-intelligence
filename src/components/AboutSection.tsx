import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["AI Engineering", "LLM Systems", "Arabic NLP", "Medical Informatics", "Full-Stack", "RAG Pipelines"];

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
            Architect of Intelligence
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
              Based in Riyadh, I build AI systems at the intersection of clinical medicine, 
              Arabic language technology, and enterprise automation. Currently leading AI 
              engineering at King Abdulaziz Medical City, where precision isn't optional — it's clinical.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans from ophthalmology AI tools and IRB-compliant research documentation 
              to Arabic RAG pipelines processing government tenders at scale. Every system I build 
              is designed for production — multilingual, streaming, and enterprise-grade.
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
            className="grid grid-cols-2 gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-4 text-center hover:glow-cobalt transition-shadow duration-500"
              >
                <span className="font-display text-xs tracking-wider text-soft-white">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
