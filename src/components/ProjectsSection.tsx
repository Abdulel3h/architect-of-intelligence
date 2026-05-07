import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Wida AI Presentation Engine",
    description: "Converts Arabic documents into branded PowerPoint decks via a two-phase LLM pipeline with streaming generation.",
    tags: ["LangGraph", "PptxGenJS", "Vercel AI SDK"],
    accent: "cobalt",
  },
  {
    title: "Wida-RAG System",
    description: "Automated Arabic government tender proposal generation using multilingual RAG with Cohere embeddings.",
    tags: ["LlamaIndex", "ChromaDB", "Cohere"],
    accent: "cobalt",
  },
  {
    title: "Ophthalmology MCQ Bank",
    description: "Clinically rigorous AI-generated exam questions with IRB-compliant documentation for medical education.",
    tags: ["Claude API", "FastAPI", "Supabase"],
    accent: "mint",
  },
  {
    title: "Bilingual Clinical Tools",
    description: "Informed consent forms and KAMC research documentation tools supporting Arabic & English workflows.",
    tags: ["Next.js", "TypeScript", "Zod"],
    accent: "gold",
  },
];

const accentBorder: Record<string, string> = {
  cobalt: "border-l-cobalt",
  mint: "border-l-mint",
  gold: "border-l-gold",
};

const accentGlow: Record<string, string> = {
  cobalt: "glow-cobalt",
  mint: "glow-mint",
  gold: "glow-gold",
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
            Systems in Production
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
              className={`glass-card holographic-shimmer rounded-xl p-8 border-l-2 ${accentBorder[project.accent]} hover:${accentGlow[project.accent]} transition-all duration-500`}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <h3 className="font-display text-lg text-soft-white mb-3 tracking-wide">{project.title}</h3>
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
