import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Zap, Cpu, Network } from "lucide-react";

const solutions = [
  {
    title: "Multi-Agent Automation Ecosystem",
    client: "Strategic AI Agency",
    description: "Architected a swarm of specialized AI agents to automate end-to-end content pipelines and lead generation workflows. Reduced manual processing time by 85%.",
    impact: "85% Efficiency Gain",
    icon: Network,
    tech: ["LangGraph", "FastAPI", "OpenAI", "n8n"],
    date: "2024 - Present"
  },
  {
    title: "Enterprise Knowledge RAG",
    client: "Tech Solutions Provider",
    description: "Developed a secure, private RAG system for internal technical documentation. Features hybrid search (vector + keyword) and semantic reranking.",
    impact: "Instant Knowledge Access",
    icon: Cpu,
    tech: ["Pinecone", "LlamaIndex", "Docker", "React"],
    date: "2024"
  },
  {
    title: "Automated Workflow Engine",
    client: "Operation Streamline",
    description: "Built custom n8n nodes and specialized Python microservices to bridge legacy CRM data with modern AI analytical tools.",
    impact: "Unified Data Flow",
    icon: Zap,
    tech: ["n8n", "Python", "PostgreSQL", "Azure"],
    date: "2023"
  }
];

export default function EnterpriseTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="enterprise" className="relative py-32 overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Enterprise Solutions</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white max-w-2xl leading-tight">
            Architecting Complex <span className="text-cobalt">AI Ecosystems</span> for Modern Agencies.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold via-cobalt to-transparent -translate-x-1/2 hidden md:block" 
          />

          <div className="space-y-24">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-gold -translate-x-1/2 hidden md:block z-10">
                   <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] group`}>
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-secondary/50 text-gold group-hover:scale-110 transition-transform duration-500">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">{item.date}</p>
                        <h3 className="font-display text-lg text-soft-white">{item.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tech.map(t => (
                        <span key={t} className="text-[9px] font-display tracking-widest uppercase px-2 py-1 bg-white/5 rounded border border-white/10 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-display tracking-widest text-gold uppercase">Impact</span>
                      <span className="text-xs font-display text-soft-white">{item.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-[10%]" />
                
                {/* Image Placeholder / Visual for desktop */}
                <div className="hidden md:flex md:w-[45%] justify-center">
                   <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card flex items-center justify-center border border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-cobalt/5 opacity-50" />
                      <item.icon size={64} className="text-white/10 group-hover:text-gold/20 transition-colors duration-700" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             transition={{ duration: 2, delay: 0.5 }}
                             className="h-full bg-gradient-to-r from-gold to-cobalt opacity-50"
                           />
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
