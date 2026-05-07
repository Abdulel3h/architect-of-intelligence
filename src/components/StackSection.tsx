import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techGroups = [
  { label: "AI / LLM", items: ["LangGraph", "LangChain", "LlamaIndex", "Vercel AI SDK", "Cohere", "Claude API"], color: "cobalt" },
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "PptxGenJS"], color: "mint" },
  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Supabase", "ChromaDB"], color: "gold" },
  { label: "Protocols", items: ["SSE Streaming", "REST", "MCP Protocol", "Zod"], color: "cobalt" },
];

export default function StackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-mint uppercase mb-4">Stack</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-16">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.15, duration: 0.6 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className={`font-display text-xs tracking-[0.3em] uppercase mb-6 text-${group.color}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + gi * 0.1 + i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.08, boxShadow: `0 0 20px oklch(0.55 0.25 260 / 30%)` }}
                    className="px-3 py-1.5 rounded-md text-xs font-display tracking-wider bg-secondary text-soft-white border border-border hover:border-cobalt/50 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
