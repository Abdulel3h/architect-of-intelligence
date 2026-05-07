import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 geometric-pattern">
      <div className="section-container max-w-2xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.4em] text-gold uppercase mb-4">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl text-soft-white mb-4">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground text-sm">
            Open to collaborations in AI engineering, Arabic NLP, and medical informatics.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt/50 focus:ring-1 focus:ring-cobalt/30 font-display tracking-wider transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt/50 focus:ring-1 focus:ring-cobalt/30 font-display tracking-wider transition-colors"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Message"
            required
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt/50 focus:ring-1 focus:ring-cobalt/30 font-display tracking-wider resize-none transition-colors"
          />
          {sent ? (
            <p className="text-mint font-display text-sm tracking-wider text-center">Message received. I'll be in touch.</p>
          ) : (
            <button
              type="submit"
              className="w-full border border-cobalt/40 bg-cobalt/10 hover:bg-cobalt/20 text-cobalt font-display text-sm tracking-[0.3em] uppercase py-3 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center items-center gap-8 mt-16 text-sm text-muted-foreground font-display tracking-wider"
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cobalt transition-colors">
            LinkedIn ↗
          </a>
          <span className="text-border">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Riyadh, KSA
          </span>
        </motion.div>
      </div>
    </section>
  );
}
