import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { g as getPublicEnv } from "./index.mjs";
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
import "../_libs/zod.mjs";
const appCss = "/assets/styles-CS-hU_P0.css";
const siteConfig = {
  name: "AIO Labs",
  title: "AIO Labs | AI Systems, Agents, and Intelligent Workflows",
  description: "A Saudi AI systems studio founded by Abdulelah, building agents, RAG systems, automation, analytics, and intelligent infrastructure with a Najdi voice.",
  url: "https://architect-of-intelligence.com",
  author: "Abdulelah Alkhathami",
  email: "Abdul0l0h.0@gmail.com",
  phone: "+966550746952",
  locale: "ar_SA",
  sameAs: []
};
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  founder: {
    "@type": "Person",
    name: siteConfig.author,
    jobTitle: "AI Systems Architect"
  },
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA"
  },
  knowsAbout: [
    "AI Agents",
    "Retrieval-Augmented Generation",
    "Workflow Automation",
    "Data Analytics",
    "Full-Stack AI Products"
  ],
  sameAs: siteConfig.sameAs
};
const arNajdiCopy = {
  meta: {
    label: "عربي",
    locale: "ar-SA",
    direction: "rtl",
    name: "Arabic Najdi"
  },
  nav: {
    home: "بداية الصفحة",
    switchLanguage: "بدّل اللغة",
    links: [
      { label: "التشخيص", href: "#scanner" },
      { label: "الأنظمة", href: "#case-studies" },
      { label: "الوكلاء", href: "#agents" },
      { label: "المخطط", href: "#architecture-generator" },
      { label: "ابدأ", href: "#contact" }
    ]
  },
  home: {
    hero: {
      eyebrow: "AIO Labs / Infrastructure Command",
      title: "نبني لك بنية AI تشيل شغلك وتكبر معه",
      body: "من الرياض، نصمم أنظمة AI قابلة للتشغيل: Agent، RAG، Workflow، وتحليلات مربوطة بشغل حقيقي. الواجهة تحكي بلغة قريبة، والطبقة الهندسية مبنية كبنية تحتية مو تجربة عابرة.",
      primaryCta: "شخّص أول فرصة",
      secondaryCta: "شف تقارير الأنظمة",
      signalLabel: "تموضع AIO Labs",
      signals: ["مبني بالسعودية", "AI Infrastructure", "صوت نجدي", "أنظمة تشغيلية"],
      console: {
        brief: "حالة النظام",
        live: "تشغيل مستقر",
        offer: "طبقة البناء",
        offerValue: "AI Systems Architecture",
        domains: "طبقات النظام",
        outcome: "الأثر",
        outcomeValue: "تشغيل ذكي قابل للقياس"
      }
    },
    lab: {
      eyebrow: "AI Opportunity Scanner",
      title: "نفحص مسار الشغل ونطلع أول نظام يستاهل البناء.",
      description: "الماسح يقرأ السياق، يقيس الجاهزية، ويحوّل الكلام المتفرق لتقرير تشغيلي واضح فيه المخاطر، شكل النظام، وأول خطوة تنفيذ."
    },
    cases: {
      eyebrow: "System Reports",
      title: "كل حالة معروضة كتقرير هندسي، مو كرت تسويقي.",
      description: "كل تقرير يوضح المشكلة، المعمارية، المدخلات، المخرجات، القياس، ونقاط القرار اللي تخلي النظام قابل للتشغيل."
    },
    agents: {
      eyebrow: "Agent Runtime",
      title: "الوكلاء يشتغلون كمسارات تشغيل محددة بمدخل ومخرج وحدود.",
      description: "كل Agent يظهر كتدفق منظم: طلب يدخل، معالجة واضحة، نتيجة قابلة للمراجعة، ونقطة قرار قبل التوسع.",
      tabsLabel: "معاينات تشغيل الوكلاء"
    },
    generatorSection: {
      eyebrow: "System Architecture",
      title: "إذا وضحت القيمة، نرسم مخطط النظام قبل البناء.",
      description: "المولّد يحوّل سياق البزنس إلى مكونات، تدفق بيانات، طبقة تخزين، خطة تنفيذ أولى، ومخاطر واضحة."
    },
    contact: {
      eyebrow: "Build Intake",
      title: "أرسل التفاصيل، ونرجع لك بتصور نظام قابل للبناء.",
      description: "قل لنا وش تبغى يتحسن في التشغيل أو المنتج. نقرأ السياق، نحدد أول خطوة ذكية، ونقترح مسار بناء واضح.",
      intentLabel: "نوع المشروع",
      urgencyLabel: "استعجال المشروع",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "الإيميل",
      improve: "وش تبي نظام AI يحسّن؟",
      textarea: (intent) => `عطني نبذة عن ${intent} اللي تبي تبنيه.`,
      leadSignal: "إشارة الفرصة",
      offer: "العرض الأنسب",
      nextStep: "الخطوة الجاية"
    }
  },
  ui: {
    scanner: {
      eyebrow: "AI Opportunity Scanner",
      title: "خلنا نلقط أول فرصة AI تستاهل البناء",
      progressLabel: "تقدم التشخيص",
      steps: ["السياق", "المسار", "الجاهزية", "التقرير"],
      environment: "وش أقرب وصف لبيئتكم؟",
      leverage: "وين تتوقع AI يجيب فرق واضح؟",
      tools: "وين عايش الشغل اليوم؟",
      hoursLost: "ساعات تروح بالأسبوع",
      urgency: "الاستعجال",
      recommendedFirstSystem: "النظام المقترح أولاً",
      businessValue: "القيمة على الشغل",
      systemShape: "شكل النظام",
      emailLabel: "أرسل لي ملخص البناء",
      emailPlaceholder: "you@company.com",
      back: "رجوع",
      continue: "كمّل",
      generate: "طلع تقرير التشغيل",
      generating: "قاعد يحلل...",
      error: "ما قدرنا نطلع التقرير الحين. جرّب بعد شوي.",
      problemLabel: "وش مسار الشغل أو الفرصة اللي تبي نفحصها؟",
      problemPlaceholder: "مثال: فريق المبيعات يضيع وقت في فرز العملاء، الردود تتأخر، وما عندنا قياس واضح لجودة الفرص...",
      risks: "المخاطر التشغيلية",
      footnote: "التقييم يعطي قراءة تشغيلية أولية. تقرير AI يتوسع حسب السياق والبيانات اللي تدخلها."
    },
    generator: {
      eyebrow: "AI Architecture Generator",
      title: "خلنا نطلع لك مخطط النظام",
      businessType: "نوع الجهة",
      goal: "الهدف",
      dataMaturity: "ترتيب البيانات",
      components: "المكونات",
      firstBuild: "أول بناء",
      technicalPlan: "الخطة التقنية",
      contextLabel: "سياق إضافي عن النظام المطلوب",
      contextPlaceholder: "اكتب الأدوات، مصادر البيانات، القيود، ونقاط القرار في طريقة العمل الحالية...",
      generate: "ولّد مخطط النظام",
      generating: "قاعد يبني المخطط...",
      orchestrationFlow: "تدفق التشغيل",
      storageLayer: "طبقة التخزين"
    },
    decision: {
      leadSignal: "إشارة الفرصة",
      businessMeaning: "وش معناها على الشغل؟",
      nextStep: "الخطوة الجاية",
      recommendedOffer: "العرض الأنسب"
    },
    agents: {
      eyebrow: "Runtime Preview",
      input: "المدخل",
      output: "المخرج",
      simulatedRun: "حالة التشغيل"
    },
    caseStudies: {
      problem: "المشكلة",
      systemDesign: "تصميم النظام",
      discussSimilar: "أبغى نظام قريب من هذا"
    },
    errors: {
      notFoundTitle: "الصفحة غير موجودة",
      notFoundBody: "الرابط اللي فتحته غير موجود أو تم نقله.",
      home: "ارجع للرئيسية",
      pageFailedTitle: "الصفحة ما حمّلت",
      pageFailedBody: "صار خطأ من جهتنا. جرّب تحدث الصفحة أو ارجع للرئيسية.",
      retry: "جرّب مرة ثانية"
    },
    footer: "© 2026 AIO Labs / AI Systems Studio from Riyadh"
  },
  options: {
    organizations: {
      startup: "شركة ناشئة أو فريق منتج",
      agency: "وكالة أو بزنس خدمات",
      enterprise: "فريق داخل شركة كبيرة",
      education: "تعليم أو تدريب"
    },
    challenges: {
      operations: "العمليات صارت يدوية بزيادة",
      knowledge: "المعرفة متفرقة وصعب نلقاها",
      support: "الدعم يحتاج يرد أسرع",
      sales: "العملاء المحتملين يحتاجون فرز",
      reporting: "التقارير تاخذ وقت طويل"
    },
    urgency: {
      later: "نستكشف بهدوء",
      "this-quarter": "هذا الربع",
      now: "الآن"
    },
    businessTypes: {
      agency: "وكالة",
      startup: "شركة ناشئة",
      enterprise: "شركة كبيرة",
      education: "تعليم"
    },
    goals: {
      support: "الدعم",
      knowledge: "المعرفة",
      sales: "المبيعات",
      operations: "العمليات",
      analytics: "التحليلات"
    },
    dataMaturity: {
      scattered: "متفرقة",
      organized: "مرتبة جزئياً",
      integrated: "مربوطة ومتكاملة"
    }
  },
  proofPoints: [
    { value: "4", label: "أنظمة AI انبنت وانطلقت" },
    { value: "2", label: "فوز بهاكاثونات وطنية" },
    { value: "85%", label: "تحسن بكفاءة التشغيل" },
    { value: "KSA", label: "استوديو AI من الرياض" }
  ],
  systemUserCopy: {
    "RAG Support Agent": {
      title: "RAG Support Agent",
      explanation: "نظام يجاوب من مصادر موثوقة بدل ما يخلي الفريق يدور في كل ملف."
    },
    "Enterprise Knowledge RAG": {
      title: "Enterprise Knowledge RAG",
      explanation: "نظام معرفة داخلي يخلي الوصول للإجابات أسرع وأوثق."
    },
    "Lead Qualification Agent": {
      title: "Lead Qualification Agent",
      explanation: "Agent يفرز الطلبات والفرص ويقترح لك الخطوة الأنسب لكل حالة."
    },
    "Workflow Automation Agent": {
      title: "Workflow Automation Agent",
      explanation: "Agent يمسك الشغل المتكرر ويحوله لمسار واضح فيه موافقات بشرية."
    },
    "AI Analytics Copilot": {
      title: "AI Analytics Copilot",
      explanation: "مساعد يحول البيانات والتقارير لقرارات أوضح وأسرع."
    },
    "AI Workflow Diagnostic": {
      title: "AI Workflow Diagnostic",
      explanation: "تشخيص سريع يحدد وين أفضل نقطة نبدأ منها بدل ما نبني عشوائي."
    }
  },
  readiness: {
    Emerging: "بداية واعدة",
    Promising: "واضح فيها فرصة",
    "High-leverage": "فرصة قوية"
  },
  leadSignal: {
    strong: "قوية",
    medium: "واعدة",
    weak: "بدري عليها شوي"
  },
  offers: {
    "strategy-call": "مكالمة استراتيجية",
    "ai-diagnostic": "تشخيص AI سريع",
    "agent-sprint": "سبرنت Agent",
    "rag-sprint": "خطة RAG",
    "automation-sprint": "خطة أتمتة"
  },
  ctas: {
    "strategy-call": "خلنا نحكي عن النظام",
    "ai-diagnostic": "خلنا نشخص الوضع",
    "agent-sprint": "أبغى Agent مثل هذا",
    "rag-sprint": "ورني خطة RAG",
    "automation-sprint": "ورني حل الأتمتة"
  },
  impact: {
    foundational: "تأسيسي",
    high: "عال",
    transformational: "تحويلي"
  },
  difficulty: {
    low: "سهل",
    medium: "متوسط",
    high: "متقدم"
  }
};
const enCopy = {
  meta: {
    label: "English",
    locale: "en",
    direction: "ltr",
    name: "Technical English"
  },
  nav: {
    home: "Back to homepage",
    switchLanguage: "Switch language",
    links: [
      { label: "Scanner", href: "#scanner" },
      { label: "Systems", href: "#case-studies" },
      { label: "Agents", href: "#agents" },
      { label: "Architecture", href: "#architecture-generator" },
      { label: "Contact", href: "#contact" }
    ]
  },
  home: {
    hero: {
      eyebrow: "AIO Labs / AI Infrastructure Studio",
      title: "AI infrastructure for operationally serious teams",
      body: "AIO Labs designs production AI systems, agents, RAG layers, and workflow automation for teams that need reliable intelligence inside real operations.",
      primaryCta: "Run the Opportunity Scan",
      secondaryCta: "View System Reports",
      signalLabel: "AIO Labs positioning",
      signals: [
        "Saudi-built",
        "AI Infrastructure",
        "Native systems thinking",
        "Production workflows"
      ],
      console: {
        brief: "System status",
        live: "Stable runtime",
        offer: "Build layer",
        offerValue: "AI Systems Architecture",
        domains: "System layers",
        outcome: "Outcome",
        outcomeValue: "Measurable operational intelligence"
      }
    },
    lab: {
      eyebrow: "AI Opportunity Scanner",
      title: "Identify the first AI system worth building.",
      description: "The scanner converts workflow context into a readiness score, a recommended system, implementation risk, and the next architecture decision."
    },
    cases: {
      eyebrow: "System Reports",
      title: "Every case reads like an engineering brief, not a marketing card.",
      description: "Each report captures the problem, architecture, inputs, outputs, metrics, risks, and decision points behind a production AI system."
    },
    agents: {
      eyebrow: "Agent Runtime",
      title: "Agents are modeled as bounded execution systems.",
      description: "Each agent pattern shows the input contract, reasoning boundary, output surface, guardrails, and review point required for reliable deployment.",
      tabsLabel: "Agent runtime previews"
    },
    generatorSection: {
      eyebrow: "System Architecture",
      title: "Turn business context into an executable AI system blueprint.",
      description: "The generator maps a use case into components, data flow, storage layers, implementation phases, risk notes, and a recommended build path."
    },
    contact: {
      eyebrow: "Build Intake",
      title: "Send the operating context. We will shape it into a buildable system.",
      description: "Share the workflow or product surface you want to improve. We will identify the highest-leverage entry point and propose a practical implementation path.",
      intentLabel: "Project intent",
      urgencyLabel: "Project urgency",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      improve: "What should this AI system improve?",
      textarea: (intent) => `Describe the ${intent.toLowerCase()} system you want to build.`,
      leadSignal: "Lead signal",
      offer: "Recommended offer",
      nextStep: "Next step"
    }
  },
  ui: {
    scanner: {
      eyebrow: "AI Opportunity Scanner",
      title: "Find the first AI system worth building",
      progressLabel: "Scanner progress",
      steps: ["Context", "Workflow", "Readiness", "Report"],
      environment: "What best describes the operating environment?",
      leverage: "Where would AI create the most leverage?",
      tools: "Where does this workflow live today?",
      hoursLost: "Hours lost weekly",
      urgency: "Urgency",
      recommendedFirstSystem: "Recommended first system",
      businessValue: "Business value",
      systemShape: "System shape",
      emailLabel: "Send me the build brief",
      emailPlaceholder: "you@company.com",
      back: "Back",
      continue: "Continue",
      generate: "Generate System Report",
      generating: "Analyzing...",
      error: "Could not generate the report right now.",
      problemLabel: "What problem or opportunity should the AI analyze?",
      problemPlaceholder: "Example: our sales team loses time qualifying inbound leads, responses are delayed, and we lack clear quality metrics...",
      risks: "Operational risks",
      footnote: "The scanner provides a deterministic operating read. The AI report layer expands it with contextual system design."
    },
    generator: {
      eyebrow: "AI Architecture Generator",
      title: "Generate a structured AI system blueprint",
      businessType: "Business type",
      goal: "Goal",
      dataMaturity: "Data maturity",
      components: "Components",
      firstBuild: "First build",
      technicalPlan: "Technical plan",
      contextLabel: "Additional system context",
      contextPlaceholder: "Add tools, data sources, constraints, ownership boundaries, or current workflow details...",
      generate: "Generate AI Architecture",
      generating: "Generating architecture...",
      orchestrationFlow: "Orchestration flow",
      storageLayer: "Storage layer"
    },
    decision: {
      leadSignal: "Lead signal",
      businessMeaning: "Business meaning",
      nextStep: "Next step",
      recommendedOffer: "Recommended offer"
    },
    agents: {
      eyebrow: "Runtime Preview",
      input: "Input",
      output: "Output",
      simulatedRun: "Simulated run"
    },
    caseStudies: {
      problem: "Problem",
      systemDesign: "System design",
      discussSimilar: "Discuss a similar system"
    },
    errors: {
      notFoundTitle: "Page not found",
      notFoundBody: "The page you opened does not exist or has moved.",
      home: "Back to home",
      pageFailedTitle: "The page failed to load",
      pageFailedBody: "Something failed on our side. Refresh the page or return home.",
      retry: "Try again"
    },
    footer: "© 2026 AIO Labs / AI Systems Studio from Riyadh"
  },
  options: {
    organizations: {
      startup: "Startup or product team",
      agency: "Agency or services business",
      enterprise: "Enterprise team",
      education: "Education or training"
    },
    challenges: {
      operations: "Manual operations are slowing delivery",
      knowledge: "Knowledge is scattered across tools",
      support: "Support needs faster, trusted answers",
      sales: "Inbound leads need qualification",
      reporting: "Reporting takes too long"
    },
    urgency: {
      later: "Exploring",
      "this-quarter": "This quarter",
      now: "Now"
    },
    businessTypes: {
      agency: "Agency",
      startup: "Startup",
      enterprise: "Enterprise",
      education: "Education"
    },
    goals: {
      support: "Support",
      knowledge: "Knowledge",
      sales: "Sales",
      operations: "Operations",
      analytics: "Analytics"
    },
    dataMaturity: {
      scattered: "Scattered",
      organized: "Partially organized",
      integrated: "Integrated"
    }
  },
  proofPoints: [
    { value: "4", label: "AI systems shipped" },
    { value: "2", label: "national hackathon wins" },
    { value: "85%", label: "workflow efficiency gain" },
    { value: "KSA", label: "Saudi AI systems studio" }
  ],
  systemUserCopy: {
    "RAG Support Agent": {
      title: "RAG Support Agent",
      explanation: "A trusted answer layer that retrieves from approved sources instead of forcing teams to search every file."
    },
    "Enterprise Knowledge RAG": {
      title: "Enterprise Knowledge RAG",
      explanation: "A private knowledge infrastructure layer that makes internal answers faster, traceable, and easier to govern."
    },
    "Lead Qualification Agent": {
      title: "Lead Qualification Agent",
      explanation: "An agent that classifies inbound demand, prioritizes opportunities, and recommends the next commercial action."
    },
    "Workflow Automation Agent": {
      title: "Workflow Automation Agent",
      explanation: "An execution agent that turns repeatable work into a controlled workflow with human approvals."
    },
    "AI Analytics Copilot": {
      title: "AI Analytics Copilot",
      explanation: "A decision-support layer that turns reporting data into clearer signals, risks, and recommended actions."
    },
    "AI Workflow Diagnostic": {
      title: "AI Workflow Diagnostic",
      explanation: "A focused diagnostic that identifies the highest-leverage workflow before implementation begins."
    }
  },
  readiness: {
    Emerging: "Emerging",
    Promising: "Promising",
    "High-leverage": "High-leverage"
  },
  leadSignal: {
    strong: "Strong",
    medium: "Promising",
    weak: "Early"
  },
  offers: {
    "strategy-call": "Strategy call",
    "ai-diagnostic": "AI diagnostic",
    "agent-sprint": "Agent sprint",
    "rag-sprint": "RAG sprint",
    "automation-sprint": "Automation sprint"
  },
  ctas: {
    "strategy-call": "Book Strategy Call",
    "ai-diagnostic": "Run AI Diagnostic",
    "agent-sprint": "Request Agent Sprint",
    "rag-sprint": "Request RAG Plan",
    "automation-sprint": "Request Automation Plan"
  },
  impact: {
    foundational: "Foundational",
    high: "High",
    transformational: "Transformational"
  },
  difficulty: {
    low: "Low",
    medium: "Medium",
    high: "High"
  }
};
const languageIdentity = {
  defaultLanguage: "ar"
};
const translations = {
  ar: arNajdiCopy,
  en: enCopy
};
function getLanguageCopy(language) {
  return translations[language];
}
function getLanguageMeta(language) {
  return translations[language].meta;
}
function normalizeLanguage(value) {
  return value === "en" ? "en" : "ar";
}
function dualOutput(internal_output, user_output) {
  return { internal_output, user_output };
}
const uiCopy = arNajdiCopy.ui;
const uiCopyEn = enCopy.ui;
const optionCopy = arNajdiCopy.options;
const optionCopyEn = enCopy.options;
const systemUserCopy = arNajdiCopy.systemUserCopy;
enCopy.systemUserCopy;
const readinessUserCopy = arNajdiCopy.readiness;
enCopy.readiness;
arNajdiCopy.leadSignal;
enCopy.leadSignal;
const offerUserCopy = arNajdiCopy.offers;
enCopy.offers;
const ctaUserCopy = arNajdiCopy.ctas;
enCopy.ctas;
const impactUserCopy = arNajdiCopy.impact;
enCopy.impact;
const difficultyUserCopy = arNajdiCopy.difficulty;
enCopy.difficulty;
const storageKey = "aio-language";
const legacyStorageKey = "aoi-language";
const LanguageContext = reactExports.createContext(void 0);
function getDefaultLanguage() {
  return normalizeLanguage(languageIdentity.defaultLanguage);
}
function getInitialLanguage() {
  if (typeof window === "undefined") return getDefaultLanguage();
  const stored = window.localStorage.getItem(storageKey) ?? window.localStorage.getItem(legacyStorageKey);
  return normalizeLanguage(stored ?? getDefaultLanguage());
}
function LanguageProvider({ children }) {
  const [language, setLanguageState] = reactExports.useState(getInitialLanguage);
  const copy = getLanguageCopy(language);
  const meta = getLanguageMeta(language);
  const direction = meta.direction;
  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, nextLanguage);
      window.localStorage.removeItem(legacyStorageKey);
    }
  };
  reactExports.useEffect(() => {
    document.documentElement.lang = meta.locale;
    document.documentElement.dir = direction;
    document.documentElement.dataset.language = language;
    document.documentElement.dataset.languageIdentity = language === "ar" ? "najdi" : "enterprise";
  }, [direction, language, meta.locale]);
  const value = reactExports.useMemo(
    () => ({
      language,
      direction,
      copy,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "ar" ? "en" : "ar"),
      isArabic: language === "ar"
    }),
    [copy, direction, language]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageContext.Provider, { value, children });
}
function useLanguage() {
  const context = reactExports.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
const AnalyticsContext = reactExports.createContext(null);
function AnalyticsProvider({ children }) {
  const env = getPublicEnv();
  reactExports.useEffect(() => {
    if (env.VITE_POSTHOG_KEY && env.VITE_POSTHOG_HOST && typeof window !== "undefined") {
      try {
        import("../_libs/posthog-js.mjs").then((posthog) => {
          posthog.default.init(env.VITE_POSTHOG_KEY, {
            api_host: env.VITE_POSTHOG_HOST,
            capture_pageview: false,
            // We'll handle this manually
            loaded: (ph) => {
              ph.capture("$pageview");
            }
          });
        });
      } catch (error) {
        console.warn("Analytics initialization failed:", error);
      }
    }
  }, [env.VITE_POSTHOG_KEY, env.VITE_POSTHOG_HOST]);
  const track = (event, properties) => {
    if (typeof window === "undefined") return;
    try {
      import("../_libs/posthog-js.mjs").then((posthog) => {
        posthog.default.capture(event, properties);
      });
    } catch (error) {
    }
  };
  const identify = (userId, properties) => {
    if (typeof window === "undefined") return;
    try {
      import("../_libs/posthog-js.mjs").then((posthog) => {
        posthog.default.identify(userId, properties);
      });
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsContext.Provider, { value: { track, identify }, children });
}
function NotFoundComponent() {
  const copy = uiCopy.errors;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: copy.notFoundTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: copy.notFoundBody }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: copy.home
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  const copy = uiCopy.errors;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: copy.pageFailedTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: copy.pageFailedBody }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: copy.retry
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: copy.home
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { name: "author", content: siteConfig.author },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ar-SA", dir: "rtl", "data-language": "ar", "data-language-identity": "najdi", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
}
const $$splitComponentImporter = () => import("./index-DuQyUuTJ.mjs").then((n) => n.i);
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: siteConfig.title
    }, {
      name: "description",
      content: siteConfig.description
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      property: "og:title",
      content: siteConfig.title
    }, {
      property: "og:description",
      content: siteConfig.description
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:locale",
      content: siteConfig.locale
    }, {
      property: "og:url",
      content: siteConfig.url
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: siteConfig.title
    }, {
      name: "twitter:description",
      content: siteConfig.description
    }],
    links: [{
      rel: "canonical",
      href: siteConfig.url
    }, {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(personJsonLd)
    }]
  })
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  uiCopy as a,
  uiCopyEn as b,
  ctaUserCopy as c,
  dualOutput as d,
  optionCopy as e,
  optionCopyEn as f,
  difficultyUserCopy as g,
  router as h,
  impactUserCopy as i,
  offerUserCopy as o,
  readinessUserCopy as r,
  systemUserCopy as s,
  translations as t,
  useLanguage as u
};
