import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { BrainCircuit, Database, Globe, Terminal, Box, Workflow } from "lucide-react";

const stack = [
  {
    category: "AI & Intelligence",
    icon: BrainCircuit,
    color: "text-purple-400",
    items: [
      { name: "LLMs", detail: "Advanced prompting & fine-tuning" },
      { name: "RAG", detail: "Vector DB integration & semantic search" },
      { name: "LangGraph", detail: "Multi-agent orchestration" },
      { name: "Python", detail: "ML pipelines & data science" }
    ]
  },
  {
    category: "Full-Stack Dev",
    icon: Terminal,
    color: "text-cobalt",
    items: [
      { name: "React", detail: "Premium UI/UX with Framer Motion" },
      { name: "FastAPI", detail: "High-performance AI backends" },
      { name: "TypeScript", detail: "Type-safe robust architecture" },
      { name: "Next.js", detail: "Modern web application frameworks" }
    ]
  },
  {
    category: "Automation & Data",
    icon: Workflow,
    color: "text-gold",
    items: [
      { name: "n8n", detail: "Complex workflow automation" },
      { name: "Pinecone", detail: "Vector database management" },
      { name: "PostgreSQL", detail: "Structured data storage" },
      { name: "Power BI", detail: "Business intelligence & analytics" }
    ]
  },
  {
    category: "Infrastructure",
    icon: Box,
    color: "text-mint",
    items: [
      { name: "Docker", detail: "Containerized AI microservices" },
      { name: "Azure", detail: "Enterprise cloud deployment" },
      { name: "Cloudflare", detail: "Edge computing & security" },
      { name: "CI/CD", detail: "Automated delivery pipelines" }
    ]
  }
];

function TechTag({ name, detail, index, inView }: { name: string, detail: string, index: number, inView: boolean }) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl cursor-default hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <span className="text-xs font-display tracking-widest text-soft-white uppercase">{name}</span>
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content 
            side="top" 
            className="z-[200] px-4 py-2 bg-background border border-white/10 rounded-lg text-[10px] font-display tracking-widest text-gold uppercase shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            sideOffset={8}
          >
            {detail}
            <Tooltip.Arrow className="fill-border" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default function StackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Arsenal</p>
          <h2 className="font-display text-3xl sm:text-5xl text-soft-white">
            The <span className="text-cobalt">Tech Stack</span> of Choice
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1, duration: 0.7 }}
              className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 ${group.color} group-hover:scale-110 transition-transform duration-500`}>
                <group.icon size={28} />
              </div>
              
              <h3 className="font-display text-sm tracking-[0.2em] uppercase text-soft-white mb-8">
                {group.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((item, i) => (
                  <TechTag 
                    key={item.name} 
                    name={item.name} 
                    detail={item.detail} 
                    index={gi * 4 + i} 
                    inView={inView} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cobalt/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
