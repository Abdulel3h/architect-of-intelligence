import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Users, Presentation, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";

const workshops = [
  {
    title: "Mastering Prompt Engineering",
    audience: "Corporate Teams & Staff",
    description: "Deep-dive workshop on advanced prompting techniques (Chain-of-Thought, Few-Shot) to boost daily productivity by 40%.",
    focus: ["System Prompts", "Context Injection", "Logic Flow"],
    icon: Lightbulb
  },
  {
    title: "AI Tools for Operations",
    audience: "Agencies & SMBs",
    description: "Practical training on integrating AI into existing business workflows using n8n and specialized GPT models.",
    focus: ["Automation", "Workflow Design", "Efficiency"],
    icon: Presentation
  },
  {
    title: "The Future of Full-Stack AI",
    audience: "Developers & Architects",
    description: "Technical workshop for developers on building and deploying production-ready AI applications.",
    focus: ["RAG Architecture", "Deployment", "Vector DBs"],
    icon: Users
  }
];

export default function WorkshopsCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="training" className="relative py-32">
      <div className="section-container" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl text-soft-white max-w-xl">
              Training the Next Generation of <span className="text-cobalt">AI Talent</span>.
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {workshops.map((item, i) => (
              <div 
                key={i} 
                className="flex-[0_0_90%] md:flex-[0_0_400px] min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="glass-card p-10 h-full rounded-3xl border border-white/5 flex flex-col justify-between hover:bg-white/[0.03] transition-colors duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cobalt/10 flex items-center justify-center text-cobalt mb-8">
                      <item.icon size={24} />
                    </div>
                    <p className="text-[10px] font-display tracking-[0.2em] text-gold uppercase mb-2">{item.audience}</p>
                    <h3 className="font-display text-xl text-soft-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.focus.map(f => (
                      <span key={f} className="text-[9px] font-display tracking-widest uppercase px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
