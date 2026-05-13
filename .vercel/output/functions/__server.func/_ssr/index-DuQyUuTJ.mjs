import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useLanguage, t as translations, a as uiCopy, b as uiCopyEn, e as optionCopy, f as optionCopyEn, c as ctaUserCopy, d as dualOutput, o as offerUserCopy, s as systemUserCopy, r as readinessUserCopy } from "./router-B7ve87fu.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useReducedMotion, m as motion, a as useInView, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { L as Languages, B as BrainCircuit, N as Network, C as ChartColumn, A as ArrowRight, a as Check, b as ChevronLeft, c as Activity } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./index.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function AioLogo({ className, markOnly = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("aio-logo", className), "aria-label": "AIO Labs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "aio-logo-mark",
        viewBox: "0 0 64 64",
        role: "img",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "aio-logo-frame", d: "M12 12h40v40H12z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "aio-logo-grid", d: "M32 12v40M12 32h40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "aio-logo-path", d: "M18 42 28 22h8l10 20M23 34h18" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "aio-logo-node", cx: "18", cy: "42", r: "2.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "aio-logo-node", cx: "28", cy: "22", r: "2.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "aio-logo-node", cx: "36", cy: "22", r: "2.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "aio-logo-node", cx: "46", cy: "42", r: "2.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "aio-logo-core", cx: "32", cy: "34", r: "3.2" })
        ]
      }
    ),
    !markOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "aio-logo-wordmark", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AIO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Labs" })
    ] })
  ] });
}
const clampDimension = (value) => Math.max(1, Math.round(value));
const getDisplacementMap = ({
  height,
  width,
  radius,
  depth
}) => {
  const safeHeight = clampDimension(height);
  const safeWidth = clampDimension(width);
  const safeDepth = Math.min(depth, safeHeight / 2 - 1, safeWidth / 2 - 1);
  const innerHeight = Math.max(1, safeHeight - 2 * safeDepth);
  const innerWidth = Math.max(1, safeWidth - 2 * safeDepth);
  return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg height="${safeHeight}" width="${safeWidth}" viewBox="0 0 ${safeWidth} ${safeHeight}" xmlns="http://www.w3.org/2000/svg">
  <style>.mix{mix-blend-mode:screen;}</style>
  <defs>
    <linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil(radius / safeHeight * 15)}%" y2="${Math.floor(100 - radius / safeHeight * 15)}%">
      <stop offset="0%" stop-color="#0F0" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>
    <linearGradient id="X" x1="${Math.ceil(radius / safeWidth * 15)}%" x2="${Math.floor(100 - radius / safeWidth * 15)}%" y1="0" y2="0">
      <stop offset="0%" stop-color="#F00" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="#808080" />
  <g filter="blur(2px)">
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="#000080" />
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="url(#Y)" class="mix" />
    <rect x="0" y="0" height="${safeHeight}" width="${safeWidth}" fill="url(#X)" class="mix" />
    <rect x="${safeDepth}" y="${safeDepth}" height="${innerHeight}" width="${innerWidth}" fill="#808080" rx="${radius}" ry="${radius}" filter="blur(${safeDepth}px)" />
  </g>
</svg>`);
};
const getDisplacementFilter = ({
  height,
  width,
  radius,
  depth,
  strength = 100,
  chromaticAberration = 0
}) => {
  const safeHeight = clampDimension(height);
  const safeWidth = clampDimension(width);
  return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg height="${safeHeight}" width="${safeWidth}" viewBox="0 0 ${safeWidth} ${safeHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displace" color-interpolation-filters="sRGB">
      <feImage x="0" y="0" height="${safeHeight}" width="${safeWidth}" href="${getDisplacementMap({
    height: safeHeight,
    width: safeWidth,
    radius,
    depth
  })}" result="displacementMap" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedR" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedG" />
      <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="displacedB" />
      <feBlend in="displacedR" in2="displacedG" mode="screen" />
      <feBlend in2="displacedB" mode="screen" />
    </filter>
  </defs>
</svg>`) + "#displace";
};
const supportsBackdropFilterUrl = () => {
  if (typeof document === "undefined") return false;
  const testEl = document.createElement("div");
  testEl.style.cssText = "backdrop-filter: url(#test)";
  return testEl.style.backdropFilter === "url(#test)" || testEl.style.backdropFilter === 'url("#test")';
};
function LiquidGlass({
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
}) {
  const glassRef = reactExports.useRef(null);
  const reduceMotion = useReducedMotion();
  const overlayStyle = {
    background: noMorph ? "rgba(255, 255, 255, 0.1)" : button ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.3)"
  };
  const redrawGlass = reactExports.useCallback(() => {
    const glass = glassRef.current;
    if (!glass) return;
    const liquidGlass = glass.querySelector(".glass-box");
    const content = glass.querySelector(".lg-content");
    const bgImageImg = glass.querySelector(".lg-bg-image img");
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
        chromaticAberration
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
  reactExports.useEffect(() => {
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
    className
  );
  const mergedStyle = style ?? {};
  const layers = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lg-overlay-bg", style: overlayStyle }),
    background && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lg-bg-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("lg-bg-image", freeze || reduceMotion ? "is-frozen" : void 0), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: background, alt: "", draggable: "false" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("lg-content", contentClassName), children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lg-filter-layer", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("glass-box", `glass-${color ?? "transparent"}`) }) })
  ] });
  if (inline) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref: glassRef,
        className: wrapperClassName,
        style: mergedStyle,
        ...props,
        children: layers
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref: glassRef,
      className: wrapperClassName,
      style: mergedStyle,
      whileHover: button && !reduceMotion ? { scale: 1.035, rotate: -0.6 } : void 0,
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
      ...props,
      children: layers
    }
  );
}
function Navigation() {
  const { language, setLanguage, copy } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.nav,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45 },
      className: "fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        LiquidGlass,
        {
          className: "nav-shell",
          contentClassName: "nav-shell-content",
          chromaticAberration: 1.4,
          strength: 42,
          depth: 8,
          color: "black",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "nav-brand", "aria-label": copy.nav.home, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AioLogo, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-links", children: copy.nav.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, children: link.label }, link.href)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "language-switcher", "aria-label": copy.nav.switchLanguage, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { size: 15, "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: language === "ar" ? "active" : "",
                  "aria-pressed": language === "ar",
                  onClick: () => setLanguage("ar"),
                  children: "عربي"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: language === "en" ? "active" : "",
                  "aria-pressed": language === "en",
                  onClick: () => setLanguage("en"),
                  children: "EN"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function ScrollProgress() {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-progress hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-progress-fill", style: { height: `${progress}%` } }) });
}
function LiquidGlassBackground() {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-page-background", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-backdrop-image" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "liquid-texture liquid-texture-chrome",
        animate: reduceMotion ? void 0 : { x: ["-3%", "3%", "-3%"], y: ["0%", "-2%", "0%"] },
        transition: { duration: 28, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "liquid-texture liquid-texture-silk",
        animate: reduceMotion ? void 0 : { x: ["2%", "-2%", "2%"], y: ["-1%", "2%", "-1%"] },
        transition: { duration: 34, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-lens-field" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-noise" })
  ] });
}
const labTools = [
  {
    title: "AI Opportunity Scanner",
    description: {
      ar: "يشخص أول نظام AI يستاهل تبنيه لفريقك أو مسار عملك أو منتجك.",
      en: "Scores the first AI system worth building for a team, workflow, or product surface."
    },
    icon: BrainCircuit,
    status: "Live v1"
  },
  {
    title: "Architecture Generator",
    description: {
      ar: "يحول المشكلة التجارية إلى تصور معماري لـ Agent أو RAG أو Workflow أو تحليلات.",
      en: "Turns business context into an architecture direction for agents, RAG, workflows, or analytics."
    },
    icon: Network,
    status: "Live v1"
  },
  {
    title: "ROI Simulator",
    description: {
      ar: "يقيس الوقت المتوقع توفيره والتعقيد وأول نتيجة نقدر نتابعها.",
      en: "Models expected time savings, implementation complexity, and the first measurable outcome."
    },
    icon: ChartColumn,
    status: "Next"
  }
];
function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.section,
    {
      ref,
      id,
      className: cn("section-shell", className),
      initial: reduceMotion ? false : { opacity: 0, y: 36 },
      animate: reduceMotion || isInView ? { opacity: 1, y: 0 } : void 0,
      transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-grid", children: [
        (eyebrow || title || description) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("section-heading", align === "center" && "mx-auto text-center"), children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: eyebrow }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-lg", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-description", children: description })
        ] }),
        children
      ] })
    }
  );
}
function SurfaceCard({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LiquidGlass,
    {
      className: cn("surface-card", className),
      chromaticAberration: 1.4,
      strength: 58,
      depth: 9,
      blur: 0,
      ...props
    }
  );
}
const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost"
};
function ActionButton({
  variant = "primary",
  icon = true,
  className,
  children,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      className: cn("btn-base", variantClass[variant], className),
      whileHover: !reduceMotion && !props.disabled ? { y: -2, scale: 1.015 } : void 0,
      whileTap: !reduceMotion && !props.disabled ? { scale: 0.985 } : void 0,
      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { "aria-hidden": "true", size: 16 })
      ]
    }
  );
}
function ActionLink({
  variant = "primary",
  icon = true,
  className,
  children,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      className: cn("btn-base", variantClass[variant], className),
      whileHover: !reduceMotion ? { y: -2, scale: 1.015 } : void 0,
      whileTap: !reduceMotion ? { scale: 0.985 } : void 0,
      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { "aria-hidden": "true", size: 16 })
      ]
    }
  );
}
function DecisionPanel({ decision }) {
  const { isArabic } = useLanguage();
  const copy = isArabic ? uiCopy : uiCopyEn;
  const output = isArabic ? decision.output.user_output : decision.output.internal_output;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "decision-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.decision.leadSignal }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: output.leadStrength })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.decision.businessMeaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: output.businessMeaning })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.decision.nextStep }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: output.nextStep })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ActionLink, { href: decision.ctaHref, variant: "primary", children: output.ctaLabel })
  ] });
}
const offerLabels = {
  "strategy-call": "Book Strategy Call",
  "ai-diagnostic": "Run AI Diagnostic",
  "agent-sprint": "Request Agent Sprint",
  "rag-sprint": "Request RAG Plan",
  "automation-sprint": "Request Automation Plan"
};
function decideNextAction(input) {
  const system = input.system?.toLowerCase() ?? "";
  const score = input.score ?? 0;
  const isHighIntent = score >= 75 || input.readiness === "High-leverage" || input.impactLevel === "transformational" || input.urgency === "now";
  const isMediumIntent = score >= 52 || input.readiness === "Promising" || input.impactLevel === "high";
  const offer = system.includes("rag") ? "rag-sprint" : system.includes("automation") || system.includes("workflow") ? "automation-sprint" : system.includes("agent") ? "agent-sprint" : isHighIntent ? "strategy-call" : "ai-diagnostic";
  const leadStrength = isHighIntent ? "strong" : isMediumIntent ? "medium" : "weak";
  const businessMeaning = leadStrength === "strong" ? "This has enough urgency and operational surface area to justify a focused implementation conversation." : leadStrength === "medium" ? "This looks promising, but the first move should be a narrow diagnostic to avoid building the wrong system." : "This is early-stage. The right move is to clarify the workflow, data quality, and first measurable outcome.";
  const nextStep = leadStrength === "strong" ? "Turn the result into a scoped build brief and decide the first sprint." : leadStrength === "medium" ? "Map the workflow and define one metric before implementation." : "Use a lightweight AI plan to find the highest-leverage starting point.";
  const userBusinessMeaning = leadStrength === "strong" ? "الوضع عندك جاهز لكلام جاد عن التنفيذ. فيه استعجال ومساحة تشغيلية تستاهل نحدد لها Sprint واضح." : leadStrength === "medium" ? "فيه فرصة حلوة، بس الأفضل نبدأ بتشخيص ضيق عشان ما نبني نظام ما يخدم الشغل فعلياً." : "الفكرة لسه تحتاج ترتيب. نوضح مسار العمل وجودة البيانات وأول نتيجة نقدر نقيسها.";
  const userNextStep = leadStrength === "strong" ? "نحول النتيجة لملخص بناء واضح ونحدد أول Sprint." : leadStrength === "medium" ? "نرسم مسار العمل ونختار مقياس واحد قبل التنفيذ." : "نبدأ بخطة خفيفة تطلع أعلى نقطة فيها عائد.";
  const ctaLabel = offerLabels[offer];
  const userCtaLabel = ctaUserCopy[offer];
  return {
    leadStrength,
    offer,
    businessMeaning: userBusinessMeaning,
    nextStep: userNextStep,
    ctaLabel: userCtaLabel,
    ctaHref: "#contact",
    output: dualOutput(
      {
        leadStrength,
        offer,
        businessMeaning,
        nextStep,
        ctaLabel
      },
      {
        leadStrength,
        offer: offerUserCopy[offer],
        businessMeaning: userBusinessMeaning,
        nextStep: userNextStep,
        ctaLabel: userCtaLabel
      }
    )
  };
}
const challengeSystems = {
  support: "RAG Support Agent",
  knowledge: "Enterprise Knowledge RAG",
  sales: "Lead Qualification Agent",
  operations: "Workflow Automation Agent",
  reporting: "AI Analytics Copilot"
};
const initialScannerChoice = {
  problem: "",
  organization: "startup",
  challenge: "operations",
  tools: [],
  hours: "10-25",
  urgency: "this-quarter",
  email: ""
};
function calculateScannerReport(choice) {
  const toolScore = Math.min(choice.tools.length * 8, 24);
  const hoursScore = choice.hours === "50+" ? 34 : choice.hours === "25-50" ? 26 : choice.hours === "10-25" ? 18 : 10;
  const urgencyScore = choice.urgency === "now" ? 22 : choice.urgency === "this-quarter" ? 16 : 10;
  const orgScore = choice.organization === "enterprise" ? 14 : choice.organization === "agency" ? 12 : 10;
  const score = Math.min(100, toolScore + hoursScore + urgencyScore + orgScore);
  const readiness = score >= 75 ? "High-leverage" : score >= 52 ? "Promising" : "Emerging";
  const recommendedSystem = challengeSystems[choice.challenge] ?? "AI Workflow Diagnostic";
  const decision = decideNextAction({
    score,
    readiness,
    system: recommendedSystem,
    urgency: choice.urgency
  });
  const businessValue = [
    "Reduce repeated manual decisions before increasing headcount.",
    "Create a measurable AI workflow instead of a generic chatbot.",
    "Capture operational knowledge in a reusable infrastructure layer."
  ];
  const architecture = [
    "Intake form or connected workspace trigger",
    "Knowledge and workflow context layer",
    "Agent reasoning step with guardrails",
    "Human review point for high-impact actions",
    "Dashboard for usage, savings, and quality signals"
  ];
  const firstSprint = [
    "Map the workflow and define success metrics.",
    "Build a narrow prototype around one repeated decision.",
    "Evaluate outputs against real examples.",
    "Deploy with human approval and analytics."
  ];
  const cta = readiness === "High-leverage" ? "This is ready for a strategy call." : "Start with a focused AI diagnostic sprint.";
  const systemCopy = systemUserCopy[recommendedSystem] ?? systemUserCopy["AI Workflow Diagnostic"];
  const userBusinessValue = [
    "نخفف القرارات اليدوية المتكررة قبل ما تحتاج تزيد عدد الفريق.",
    "نطلع أول Workflow AI قابل للقياس بدل شات بوت عام ما يخدم الهدف.",
    "نرتب معرفة التشغيل داخل طبقة نظام تقدر ترجع لها وتبني عليها."
  ];
  const userArchitecture = [
    "مدخل واضح للطلب أو ربط مع الأداة اللي يبدأ منها الشغل.",
    "طبقة سياق تجمع المعرفة ومسار العمل.",
    "خطوة تفكير للـ Agent مع حدود ومراجعة واضحة.",
    "نقطة موافقة بشرية للأشياء الحساسة أو عالية الأثر.",
    "Dashboard لمتابعة الاستخدام والتوفير والجودة."
  ];
  const userFirstSprint = [
    "نرسم مسار العمل ونحدد وش بنقيس.",
    "نبني نموذج ضيق حول قرار واحد يتكرر كثير.",
    "نختبر المخرجات على أمثلة حقيقية.",
    "نطلقه بموافقة بشرية وتحليلات واضحة."
  ];
  const userCta = readiness === "High-leverage" ? "الوضع جاهز لمكالمة استراتيجية ونطلع منه خطة تنفيذ." : "الأفضل نبدأ بتشخيص AI مركز ونحدد أول فرصة صح.";
  return {
    score,
    readiness,
    recommendedSystem,
    businessValue: userBusinessValue,
    architecture: userArchitecture,
    firstSprint: userFirstSprint,
    cta: userCta,
    decision,
    output: dualOutput(
      {
        readiness,
        recommendedSystem,
        businessValue,
        architecture,
        firstSprint,
        cta
      },
      {
        readiness: readinessUserCopy[readiness],
        recommendedSystem: systemCopy.title,
        systemExplanation: systemCopy.explanation,
        businessValue: userBusinessValue,
        architecture: userArchitecture,
        firstSprint: userFirstSprint,
        cta: userCta
      }
    )
  };
}
async function postJson(url, payload) {
  const language = typeof document === "undefined" ? "ar" : document.documentElement.dataset.language ?? "ar";
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-aio-language": language },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }
  return response.json();
}
function runOpportunityScan(input) {
  return postJson("/api/ai/opportunity-scan", input);
}
function runArchitectureGeneration(input) {
  return postJson("/api/ai/architecture", input);
}
function runAgentRuntime(input) {
  return postJson("/api/ai/agent-run", input);
}
function trackUserEvent(input) {
  return postJson("/api/events", input).catch(() => ({ ok: true }));
}
const organizationValues = ["startup", "agency", "enterprise", "education"];
const challengeValues = ["operations", "knowledge", "support", "sales", "reporting"];
const tools = ["Email", "Excel", "Notion", "CRM", "PDFs", "Slack", "Database", "n8n"];
function OpportunityScanner({ compact = false }) {
  const { isArabic, language } = useLanguage();
  const [step, setStep] = reactExports.useState(0);
  const [choice, setChoice] = reactExports.useState(initialScannerChoice);
  const [aiReport, setAiReport] = reactExports.useState(null);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const report = reactExports.useMemo(() => calculateScannerReport(choice), [choice]);
  const copy = isArabic ? uiCopy : uiCopyEn;
  const options = isArabic ? optionCopy : optionCopyEn;
  const steps = copy.scanner.steps;
  const scannerOutput = isArabic ? report.output.user_output : report.output.internal_output;
  const realOutput = aiReport?.output[isArabic ? "user_output" : "internal_output"];
  const update = (key, value) => {
    setChoice((current) => ({ ...current, [key]: value }));
  };
  const toggleTool = (tool) => {
    setChoice((current) => ({
      ...current,
      tools: current.tools.includes(tool) ? current.tools.filter((item) => item !== tool) : [...current.tools, tool]
    }));
  };
  const next = () => {
    trackUserEvent({
      name: "scanner_step_continue",
      page: "/",
      properties: { step, challenge: choice.challenge }
    });
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };
  const back = () => setStep((current) => Math.max(current - 1, 0));
  const generate = async () => {
    setIsGenerating(true);
    setError("");
    try {
      const result = await runOpportunityScan({
        ...choice,
        problem: choice.problem || `Analyze ${choice.challenge} for ${choice.organization} using ${choice.tools.join(", ")}.`,
        urgency: choice.urgency,
        language,
        source: "opportunity-scanner"
      });
      setAiReport(result);
      trackUserEvent({
        name: "scanner_report_generated",
        page: "/",
        properties: { score: result.score, recommendedSystem: result.recommendedSystem }
      });
    } catch {
      setError(copy.scanner.error);
    } finally {
      setIsGenerating(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: compact ? "scanner-shell compact" : "scanner-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: copy.scanner.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: copy.scanner.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-score", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: report.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: scannerOutput.readiness })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanner-steps", "aria-label": copy.scanner.progressLabel, children: steps.map((label, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: index2 <= step ? "active" : "", children: label }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.18 },
        className: "scanner-body",
        children: [
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-intake-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "wide", children: [
              copy.scanner.problemLabel,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: choice.problem,
                  rows: 5,
                  placeholder: copy.scanner.problemPlaceholder,
                  onChange: (event) => update("problem", event.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { children: copy.scanner.environment }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "option-grid", children: organizationValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: choice.organization === value ? "option selected" : "option",
                  onClick: () => update("organization", value),
                  children: options.organizations[value]
                },
                value
              )) })
            ] })
          ] }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { children: copy.scanner.leverage }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "option-grid", children: challengeValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: choice.challenge === value ? "option selected" : "option",
                onClick: () => update("challenge", value),
                children: options.challenges[value]
              },
              value
            )) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-readiness", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { children: copy.scanner.tools }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chip-grid", children: tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: choice.tools.includes(tool) ? "chip selected" : "chip",
                  onClick: () => toggleTool(tool),
                  children: [
                    choice.tools.includes(tool) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 13 }),
                    tool
                  ]
                },
                tool
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split-fields", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                copy.scanner.hoursLost,
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: choice.hours,
                    onChange: (event) => update("hours", event.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-10", children: "0-10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10-25", children: "10-25" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "25-50", children: "25-50" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "50+", children: "50+" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                copy.scanner.urgency,
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: choice.urgency,
                    onChange: (event) => update("urgency", event.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "later", children: options.urgency.later }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "this-quarter", children: options.urgency["this-quarter"] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "now", children: options.urgency.now })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "report-preview", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "report-label", children: copy.scanner.recommendedFirstSystem }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: realOutput?.recommendedSystem ?? scannerOutput.recommendedSystem }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: realOutput?.opportunityAnalysis ?? ("systemExplanation" in scannerOutput ? scannerOutput.systemExplanation : scannerOutput.cta) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: realOutput?.roiEstimate ?? scannerOutput.cta })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionPanel, { decision: report.decision }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "report-columns", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReportList,
                {
                  title: copy.scanner.risks,
                  items: realOutput?.risks ?? scannerOutput.businessValue
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReportList,
                {
                  title: copy.scanner.systemShape,
                  items: realOutput?.suggestedArchitecture ?? scannerOutput.architecture
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "lead-field", children: [
              copy.scanner.emailLabel,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  value: choice.email,
                  placeholder: copy.scanner.emailPlaceholder,
                  onChange: (event) => update("email", event.target.value)
                }
              )
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-status error", children: error })
          ] })
        ]
      },
      step
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "scanner-back", onClick: back, disabled: step === 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
        copy.scanner.back
      ] }),
      step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { type: "button", onClick: next, children: copy.scanner.continue }) : !aiReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { type: "button", onClick: generate, disabled: isGenerating, children: isGenerating ? copy.scanner.generating : copy.scanner.generate }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionLink,
        {
          href: report.decision.ctaHref,
          variant: "primary",
          onClick: () => trackUserEvent({
            name: "scanner_cta_clicked",
            page: "/",
            properties: {
              sessionId: aiReport.sessionId,
              recommendedSystem: aiReport.recommendedSystem
            }
          }),
          children: aiReport.cta
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scanner-footnote", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 14 }),
      copy.scanner.footnote
    ] })
  ] });
}
function ReportList({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "report-label", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, item)) })
  ] });
}
const homeCopy = {
  ar: translations.ar.home,
  en: translations.en.home
};
function AILabPreview() {
  const { language } = useLanguage();
  const copy = homeCopy[language].lab;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "scanner",
      eyebrow: copy.eyebrow,
      title: copy.title,
      description: copy.description,
      className: "lab-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanner-focus-layout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpportunityScanner, { compact: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lab-tool-grid lab-tool-grid-wide", children: labTools.map((tool, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 22 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-10% 0px" },
            transition: { duration: 0.55, delay: index2 * 0.07, ease: [0.16, 1, 0.3, 1] },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: "tool-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tool-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(tool.icon, { size: 22 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tool-status", children: tool.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: tool.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tool.description[language] })
              ] })
            ] })
          },
          tool.title
        )) })
      ]
    }
  );
}
const intents = ["AI Agent", "RAG System", "Automation", "Workshop", "Hiring"];
const urgencyOptions = ["Exploring", "This quarter", "Now"];
const intentLabels = {
  ar: {
    "AI Agent": "وكيل AI",
    "RAG System": "نظام RAG",
    Automation: "أتمتة",
    Workshop: "تشخيص",
    Hiring: "تعاون هندسي"
  },
  en: {
    "AI Agent": "AI Agent",
    "RAG System": "RAG System",
    Automation: "Automation",
    Workshop: "Diagnostic",
    Hiring: "Engineering Partnership"
  }
};
const urgencyLabels = {
  ar: {
    Exploring: "نستكشف بهدوء",
    "This quarter": "هذا الربع",
    Now: "نبي نتحرك الحين"
  },
  en: {
    Exploring: "Exploring",
    "This quarter": "This quarter",
    Now: "Now"
  }
};
const intentToSystem = {
  "AI Agent": "AI Agent System",
  "RAG System": "RAG Knowledge System",
  Automation: "Workflow Automation System",
  Workshop: "AI Diagnostic",
  Hiring: "AI Product Engineering"
};
function ContactFunnelShell() {
  const { language, isArabic } = useLanguage();
  const [intent, setIntent] = reactExports.useState(intents[0]);
  const [urgency, setUrgency] = reactExports.useState(urgencyOptions[1]);
  const decision = reactExports.useMemo(
    () => decideNextAction({
      system: intentToSystem[intent],
      urgency: urgency === "Now" ? "now" : urgency === "This quarter" ? "this-quarter" : "later"
    }),
    [intent, urgency]
  );
  const copy = homeCopy[language].contact;
  const localizedIntentLabels = intentLabels[language];
  const localizedUrgencyLabels = urgencyLabels[language];
  const decisionOutput = isArabic ? decision.output.user_output : decision.output.internal_output;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "contact",
      eyebrow: copy.eyebrow,
      title: copy.title,
      description: copy.description,
      align: "center",
      className: "contact-section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: "contact-funnel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intent-grid", role: "tablist", "aria-label": copy.intentLabel, children: intents.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: intent === item ? "active" : "",
            onClick: () => setIntent(item),
            children: localizedIntentLabels[item]
          },
          item
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intent-grid urgency-grid", role: "tablist", "aria-label": copy.urgencyLabel, children: urgencyOptions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: urgency === item ? "active" : "",
            onClick: () => setUrgency(item),
            children: localizedUrgencyLabels[item]
          },
          item
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-fields", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            copy.name,
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: copy.namePlaceholder })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            copy.email,
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@company.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "wide", children: [
            copy.improve,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 4,
                placeholder: copy.textarea(
                  localizedIntentLabels[intent]
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "decision-panel", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.leadSignal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: decisionOutput.leadStrength })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.offer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "offer" in decisionOutput ? decisionOutput.offer : decision.offer })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.nextStep }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: decisionOutput.nextStep })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { type: "button", className: "contact-submit", children: decisionOutput.ctaLabel })
      ] })
    }
  );
}
function HomeHero() {
  const { language } = useLanguage();
  const copy = homeCopy[language].hero;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "hero-shell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-grid hero-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 28, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
        className: "hero-content",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AioLogo, { className: "hero-logo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: copy.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LiquidGlass,
            {
              className: "hero-title-glass",
              contentClassName: "hero-title-glass-content",
              background: "/assets/chrome2.png",
              chromaticAberration: 2,
              strength: 72,
              depth: 12,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "hero-title",
                  style: {
                    fontFamily: '"Google Sans Flex", "Thmanyah Sans", Arial, sans-serif'
                  },
                  children: copy.title
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-copy", children: copy.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActionLink, { href: "#scanner", children: copy.primaryCta }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActionLink, { href: "#case-studies", variant: "secondary", children: copy.secondaryCta })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-signal", "aria-label": copy.signalLabel, children: copy.signals.map((signal) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: signal }, signal)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.aside,
      {
        initial: { opacity: 0, y: 34, scale: 0.98, filter: "blur(12px)" },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] },
        className: "hero-console-wrap",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LiquidGlass,
          {
            className: "hero-console",
            contentClassName: "hero-console-content",
            background: "/assets/silk2.png",
            chromaticAberration: 2,
            strength: 64,
            depth: 10,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-statusbar", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AIO COMMAND LAYER" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "RUNTIME: STABLE" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-topline", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.console.brief }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: copy.console.live })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-architecture", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-metrics", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ORCHESTRATION" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "04 ACTIVE SYSTEMS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DECISION LAYER" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "READY" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.console.offer }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: copy.console.offerValue })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.console.domains }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agents / RAG / Automation / Analytics" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.console.outcome }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: copy.console.outcomeValue })
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
function ProofStrip() {
  const { copy, isArabic } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "proof-strip", "aria-label": isArabic ? "مؤشرات الثقة" : "Proof points", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-grid proof-grid", children: copy.proofPoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "proof-item", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: point.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point.label })
  ] }, point.label)) }) });
}
const AgentRuntimeEngine = reactExports.lazy(
  () => import("./AgentRuntimeEngine-C9hebQRc.mjs").then((m) => ({
    default: m.AgentRuntimeEngine
  }))
);
const ArchitectureGenerator = reactExports.lazy(
  () => import("./ArchitectureGenerator-CfM1Z4FR.mjs").then((m) => ({
    default: m.ArchitectureGenerator
  }))
);
const CaseStudyEngine = reactExports.lazy(
  () => import("./CaseStudyEngine-B2ty5M4y.mjs").then((m) => ({
    default: m.CaseStudyEngine
  }))
);
function LoadingFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-pulse text-muted-foreground", children: "Loading..." }) });
}
function HomePage() {
  const { language } = useLanguage();
  const copy = homeCopy[language].generatorSection;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProofStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AILabPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudyEngine, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentRuntimeEngine, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        id: "architecture-generator",
        eyebrow: copy.eyebrow,
        title: copy.title,
        description: copy.description,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchitectureGenerator, {}) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFunnelShell, {})
  ] });
}
function Index() {
  const {
    copy
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-shell relative min-h-screen bg-background text-foreground selection:bg-white/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiquidGlassBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 border-t border-white/10 py-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: copy.ui.footer }) })
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  ActionButton as A,
  DecisionPanel as D,
  SurfaceCard as S,
  Section as a,
  runArchitectureGeneration as b,
  ActionLink as c,
  decideNextAction as d,
  homeCopy as h,
  index as i,
  runAgentRuntime as r,
  trackUserEvent as t
};
