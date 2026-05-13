import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function ActionButton({
  variant = "primary",
  icon = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      className={cn("btn-base", variantClass[variant], className)}
      whileHover={!reduceMotion && !props.disabled ? { y: -2, scale: 1.015 } : undefined}
      whileTap={!reduceMotion && !props.disabled ? { scale: 0.985 } : undefined}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" size={16} />}
    </motion.button>
  );
}

export function ActionLink({
  variant = "primary",
  icon = true,
  className,
  children,
  ...props
}: LinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className={cn("btn-base", variantClass[variant], className)}
      whileHover={!reduceMotion ? { y: -2, scale: 1.015 } : undefined}
      whileTap={!reduceMotion ? { scale: 0.985 } : undefined}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" size={16} />}
    </motion.a>
  );
}
