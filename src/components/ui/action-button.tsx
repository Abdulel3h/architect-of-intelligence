import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
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
  return (
    <button className={cn("btn-base", variantClass[variant], className)} {...props}>
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" size={16} />}
    </button>
  );
}

export function ActionLink({
  variant = "primary",
  icon = true,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <a className={cn("btn-base", variantClass[variant], className)} {...props}>
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" size={16} />}
    </a>
  );
}
