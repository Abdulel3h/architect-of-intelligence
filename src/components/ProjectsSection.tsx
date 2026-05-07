import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Chat UB",
    description: "AI-powered academic chatbot serving all colleges at University of Bisha. Graduation project delivering intelligent Q&A across departments with NLP pipelines.",
    tags: ["NLP", "Python", "Azure", "Chatbot"],
    accent: "cobalt",
    domain: "Education",
  },
  {
    title: "Qanouni",
    description: "AI Legal Advisor helping employees understand Saudi labor rights using generative AI. Deployed on Microsoft Azure for production users.",
    tags: ["Generative AI", "Azure", "NLP", "Legal Tech"],
    accent: "gold",
    domain: "Legal",
  },
  {
    title: "Medad",
    description: "AI fintech platform for financial inclusion featuring Power BI dashboards, predictive analytics, and intelligent financial guidance.",
    tags: ["Power BI", "ML", "Python", "Fintech"],
    accent: "mint",
    domain: "Finance",
  },
  {
    title: "Virtual Astronauts",
    description: "VR + AI personalized learning platform for space education. Combines immersive experiences with adaptive AI to teach astronomy.",
    tags: ["VR", "AI", "Education", "2024"],
    accent: "purple",
    domain: "VR/Space",
  },
];

const accentColors: Record<string, string> = {
  cobalt: "border-l-cobalt",
  mint: "border-l-mint",
  gold: "border-l-gold",
  purple: "border-l-purple",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 geometric-pattern">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-16">
            Shipped & Proven
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, rotateY: 2, scale: 1.02 }}
              className={`glass-card holographic-shimmer rounded-xl p-8 border-l-2 ${accentColors[project.accent]} transition-all duration-500`}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg text-soft-white tracking-wide">{project.title}</h3>
                <span className={`text-[10px] font-display tracking-widest uppercase text-${project.accent}`}>{project.domain}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded text-[10px] font-display tracking-widest uppercase bg-secondary text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
