import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink, Cpu, Droplets, ShieldCheck, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "Smart Urban Cooling",
    category: "AI + Sustainability",
    description: "An intelligent system designed to mitigate urban heat islands using predictive modeling and automated irrigation triggers.",
    longDescription: "This project uses historical climate data and real-time IoT sensors to predict thermal hotspots in urban areas. The AI model optimizes cooling interventions, reducing energy consumption by 30% while maintaining optimal microclimates.",
    icon: Droplets,
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["Predictive AI", "IoT", "Sustainable Tech"],
  },
  {
    title: "Sentinel Analytics",
    category: "Security & Fraud",
    description: "Real-time fraud detection engine for financial transactions using advanced anomaly detection and graph neural networks.",
    longDescription: "Sentinel processes millions of transactions per second, identifying suspicious patterns with 99.9% accuracy. It employs Graph Neural Networks to visualize and block complex fraud rings before they execute.",
    icon: ShieldCheck,
    color: "from-red-500/20 to-orange-500/20",
    tags: ["Graph AI", "Fintech", "Security"],
  },
  {
    title: "ScholarBot Pro",
    category: "Education AI",
    description: "Specialized academic chatbot for University of Bisha, handling complex student queries with RAG-based precision.",
    longDescription: "ScholarBot Pro integrates with university databases to provide instant, accurate answers to administrative and academic questions. It uses a custom RAG pipeline to ensure zero hallucinations in student support.",
    icon: MessageSquare,
    color: "from-purple-500/20 to-pink-500/20",
    tags: ["RAG", "LLMs", "EdTech"],
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[4/5] h-full w-full rounded-2xl bg-white/5 border border-white/10 p-8 cursor-pointer group overflow-hidden"
        >
          <div 
            style={{ transform: "translateZ(50px)" }}
            className="flex flex-col h-full"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
              <project.icon className="w-7 h-7 text-white" />
            </div>
            
            <p className="text-gold font-display text-[10px] tracking-[0.3em] uppercase mb-2">{project.category}</p>
            <h3 className="text-2xl font-display text-white mb-4 leading-tight">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] font-display tracking-widest uppercase px-2 py-1 bg-white/5 rounded border border-white/10 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        </motion.div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] animate-in fade-in duration-300" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-3xl z-[101] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="flex flex-col md:flex-row h-full">
            <div className={`md:w-2/5 bg-gradient-to-br ${project.color} p-12 flex items-center justify-center`}>
               <project.icon className="w-32 h-32 text-white/50" />
            </div>
            <div className="md:w-3/5 p-12 relative overflow-y-auto">
              <Dialog.Close className="absolute right-6 top-6 text-muted-foreground hover:text-white transition-colors">
                <X size={24} />
              </Dialog.Close>
              
              <p className="text-gold font-display text-xs tracking-[0.4em] uppercase mb-4">{project.category}</p>
              <h2 className="text-4xl font-display text-white mb-6">{project.title}</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5">
                  <div>
                    <h4 className="text-[10px] font-display tracking-widest uppercase text-gold mb-2">Core Tech</h4>
                    <p className="text-sm text-soft-white">{project.tags.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-display tracking-widest uppercase text-gold mb-2">Role</h4>
                    <p className="text-sm text-soft-white">Lead AI Architect</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-display text-xs tracking-widest uppercase hover:bg-gold transition-colors duration-300">
                  View Case Study <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 bg-[#050505]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Laboratory</p>
          <h2 className="font-display text-3xl sm:text-5xl text-soft-white mb-6">
            Innovative <span className="text-cobalt italic">Projects</span> & Concepts
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Where research meets implementation. A collection of experimental and specialized AI solutions across diverse domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
