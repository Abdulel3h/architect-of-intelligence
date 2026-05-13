import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LiquidGlass } from "@/components/visuals/LiquidGlass";

type SurfaceCardProps = Omit<HTMLAttributes<HTMLDivElement>, "color">;

export function SurfaceCard({ className, ...props }: SurfaceCardProps) {
  return (
    <LiquidGlass
      className={cn("surface-card", className)}
      chromaticAberration={1.4}
      strength={58}
      depth={9}
      blur={0}
      {...props}
    />
  );
}
