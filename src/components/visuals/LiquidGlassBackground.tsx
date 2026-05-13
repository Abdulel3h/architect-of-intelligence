import { motion, useReducedMotion } from "framer-motion";

export function LiquidGlassBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="liquid-page-background" aria-hidden="true">
      <div className="liquid-backdrop-image" />
      <motion.div
        className="liquid-texture liquid-texture-chrome"
        animate={reduceMotion ? undefined : { x: ["-3%", "3%", "-3%"], y: ["0%", "-2%", "0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="liquid-texture liquid-texture-silk"
        animate={reduceMotion ? undefined : { x: ["2%", "-2%", "2%"], y: ["-1%", "2%", "-1%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="liquid-lens-field" />
      <div className="liquid-noise" />
    </div>
  );
}
