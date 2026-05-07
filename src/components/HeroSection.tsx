import { motion } from "framer-motion";
import NeuralGlobe from "./NeuralGlobe";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.04, duration: 0.5, ease: "easeOut" },
  }),
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralGlobe />
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-arabic text-gold text-lg mb-4 tracking-widest"
          dir="rtl"
        >
          عبدالإله الخثعمي
        </motion.p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
          <AnimatedText text="Abdulelah" className="text-soft-white" />
          <br />
          <AnimatedText text="Al-Khathami" className="text-gradient-cobalt" />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-6 font-display text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground"
        >
          Technical Lead · AI Engineer · LLM Systems Architect
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-4 text-mint text-sm sm:text-base font-display tracking-wider"
        >
          Building intelligent systems. In Arabic. At scale.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-12"
        >
          <a href="#about" className="inline-block border border-cobalt/30 px-8 py-3 text-sm font-display tracking-widest text-cobalt hover:bg-cobalt/10 transition-all duration-300 rounded-sm">
            EXPLORE
          </a>
        </motion.div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
