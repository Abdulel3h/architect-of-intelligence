export const performanceBudgets = {
  maxInitialClientChunkKb: 180,
  maxInteractiveChunkKb: 360,
  maxVisualChunkKb: 520,
  maxHeroAnimationMs: 550,
  maxConcurrentContinuousAnimations: 1,
};

export const lazyLoadPolicy = [
  "Three.js and heavy visual systems must be lazy-loaded behind a static fallback.",
  "Interactive lab tools should load below the fold unless they are the primary CTA.",
  "Case study and agent engines should be data-driven and avoid importing visualization libraries globally.",
  "LLM-backed flows must render deterministic shell states before waiting on network responses.",
];

export const animationBudgetRules = [
  "Animate containers, not every character, unless the text is decorative.",
  "Continuous animation is allowed only in the hero visual and must pause or degrade on mobile.",
  "All motion must respect prefers-reduced-motion.",
  "Hover effects should use transform, opacity, or border color only.",
];

export function shouldDisableHeavyVisuals() {
  if (typeof window === "undefined") return true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrowViewport = window.matchMedia("(max-width: 760px)").matches;
  const lowMemory =
    "deviceMemory" in navigator && typeof navigator.deviceMemory === "number"
      ? navigator.deviceMemory <= 4
      : false;

  return prefersReducedMotion || narrowViewport || lowMemory;
}
