import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("section-shell", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      animate={reduceMotion || isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-grid">
        {(eyebrow || title || description) && (
          <div className={cn("section-heading", align === "center" && "mx-auto text-center")}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="heading-lg">{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
