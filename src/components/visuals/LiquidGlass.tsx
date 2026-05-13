import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from "react";
import { useCallback, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getDisplacementFilter } from "@/lib/liquid-glass";

type LiquidGlassProps = Omit<HTMLAttributes<HTMLElement>, "color"> & {
  children: ReactNode;
  contentClassName?: string;
  depth?: number;
  strength?: number;
  chromaticAberration?: number;
  blur?: number;
  color?: "black" | "white";
  background?: string;
  freeze?: boolean;
  noMorph?: boolean;
  button?: boolean;
  inline?: boolean;
};

const supportsBackdropFilterUrl = () => {
  if (typeof document === "undefined") return false;

  const testEl = document.createElement("div");
  testEl.style.cssText = "backdrop-filter: url(#test)";

  return (
    testEl.style.backdropFilter === "url(#test)" || testEl.style.backdropFilter === 'url("#test")'
  );
};

export function LiquidGlass({
  children,
  className,
  contentClassName,
  depth = 10,
  strength = 100,
  chromaticAberration = 0,
  blur = 0,
  color,
  background,
  freeze = false,
  noMorph = false,
  button = false,
  inline = false,
  style,
  ...props
}: LiquidGlassProps) {
  const glassRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const overlayStyle: CSSProperties = {
    background: noMorph
      ? "rgba(255, 255, 255, 0.1)"
      : button
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.3)",
  };

  const redrawGlass = useCallback(() => {
    const glass = glassRef.current;
    if (!glass) return;

    const liquidGlass = glass.querySelector<HTMLElement>(".glass-box");
    const content = glass.querySelector<HTMLElement>(".lg-content");
    const bgImageImg = glass.querySelector<HTMLImageElement>(".lg-bg-image img");

    if (!liquidGlass || !content) return;

    const rect = glass.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    const radius = parseFloat(getComputedStyle(glass).borderTopLeftRadius || "0");
    const saturate = button ? 1.2 : 1.5;
    const brightness = button ? 1.6 : 1.1;

    liquidGlass.style.width = `${width}px`;
    liquidGlass.style.height = `${height}px`;

    if (bgImageImg) {
      bgImageImg.style.width = `${width}px`;
      bgImageImg.style.height = `${width}px`;
    }

    if (supportsBackdropFilterUrl()) {
      const filter = `blur(${blur / 2}px) url('${getDisplacementFilter({
        height,
        width,
        radius,
        depth,
        strength,
        chromaticAberration,
      })}') blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;

      liquidGlass.style.backdropFilter = filter;
      liquidGlass.style.setProperty("-webkit-backdrop-filter", filter);
    } else {
      const fallback = `blur(${Math.max(8, width / 18)}px) saturate(180%)`;
      liquidGlass.style.backdropFilter = fallback;
      liquidGlass.style.setProperty("-webkit-backdrop-filter", fallback);

      if (bgImageImg) {
        bgImageImg.style.filter = `blur(${Math.max(2, width / 70)}px) saturate(180%)`;
      }
    }
  }, [blur, button, chromaticAberration, depth, strength]);

  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;

    redrawGlass();

    const observer = new ResizeObserver(redrawGlass);
    observer.observe(glass);

    return () => observer.disconnect();
  }, [redrawGlass]);

  const wrapperClassName = cn(
    "liquid-glass",
    inline ? "liquid-glass-inline" : "liquid-glass-block",
    button && "button",
    className,
  );
  const mergedStyle: CSSProperties = style ?? {};

  const layers = (
    <>
      <span className="lg-overlay-bg" style={overlayStyle} />
      {background && (
        <span className="lg-bg-container">
          <span className={cn("lg-bg-image", freeze || reduceMotion ? "is-frozen" : undefined)}>
            <img src={background} alt="" draggable="false" />
          </span>
        </span>
      )}
      <span className={cn("lg-content", contentClassName)}>{children}</span>
      <span className="lg-filter-layer" aria-hidden="true">
        <span className={cn("glass-box", `glass-${color ?? "transparent"}`)} />
      </span>
    </>
  );

  if (inline) {
    return (
      <span
        ref={glassRef as Ref<HTMLSpanElement>}
        className={wrapperClassName}
        style={mergedStyle}
        {...props}
      >
        {layers}
      </span>
    );
  }

  return (
    <motion.div
      ref={glassRef as Ref<HTMLDivElement>}
      className={wrapperClassName}
      style={mergedStyle}
      whileHover={button && !reduceMotion ? { scale: 1.035, rotate: -0.6 } : undefined}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {layers}
    </motion.div>
  );
}
