import type { ReactNode } from "react";
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
  return (
    <section id={id} className={cn("section-shell", className)}>
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
    </section>
  );
}
