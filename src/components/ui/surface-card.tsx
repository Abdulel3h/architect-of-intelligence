import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps = Omit<HTMLAttributes<HTMLDivElement>, "color">;

export function SurfaceCard({ className, ...props }: SurfaceCardProps) {
  return <div className={cn("surface-card", className)} {...props} />;
}
