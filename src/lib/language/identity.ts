export type DualOutput<InternalOutput, UserOutput> = {
  internal_output: InternalOutput;
  user_output: UserOutput;
};

export const languageIdentity = {
  primary: "ar-SA-najdi",
  secondary: "technical-en",
  rule: "Think in English, speak to users in Najdi Arabic.",
} as const;

export function dualOutput<InternalOutput, UserOutput>(
  internal_output: InternalOutput,
  user_output: UserOutput,
): DualOutput<InternalOutput, UserOutput> {
  return { internal_output, user_output };
}

export const uiCopy = {
  scanner: {
    eyebrow: "AI Opportunity Scanner",
    title: "خلنا نشوف وش نقدر نسوي.",
    progressLabel: "تقدم الفحص",
    steps: ["السياق", "المسار", "الجاهزية", "التصور"],
    environment: "وش أقرب وصف لبيئتكم؟",
    leverage: "وين تتوقع الذكاء يجيب فرق واضح؟",
    tools: "وين عايش الشغل اليوم؟",
    hoursLost: "ساعات تروح بالأسبوع",
    urgency: "الاستعجال",
    recommendedFirstSystem: "أول نظام نقترحه",
    businessValue: "القيمة على الشغل",
    systemShape: "شكل النظام",
    emailLabel: "أرسل لي ملخص البناء",
    emailPlaceholder: "you@company.com",
    back: "رجوع",
    continue: "كمّل",
    footnote:
      "التقييم هنا واضح وثابت. طبقة التقرير الذكي جاهزة للربط في المرحلة الجاية.",
  },
  generator: {
    eyebrow: "AI Architecture Generator",
    title: "ورّني شكل النظام.",
    businessType: "نوع الجهة",
    goal: "الهدف",
    dataMaturity: "ترتيب البيانات",
    components: "المكونات",
    firstBuild: "أول بناء",
    technicalPlan: "الخطة التقنية",
  },
  decision: {
    leadSignal: "إشارة الفـرصة",
    businessMeaning: "وش معناها على الشغل؟",
    nextStep: "الخطوة الجاية",
    recommendedOffer: "العرض الأنـسب",
  },
  agents: {
    eyebrow: "تشغيل تجريبي",
    input: "المدخل",
    output: "المخرج",
    simulatedRun: "تشغيل تجريبي",
  },
  caseStudies: {
    problem: "المشكلة",
    systemDesign: "تصميم النظام",
    discussSimilar: "أبغى نظام قريب من كذا",
  },
} as const;

export const uiCopyEn = {
  scanner: {
    eyebrow: "AI Opportunity Scanner",
    title: "Find the first AI system worth building.",
    progressLabel: "Scanner progress",
    steps: ["Context", "Workflow", "Readiness", "Report"],
    environment: "What best describes the environment?",
    leverage: "Where is the strongest AI leverage?",
    tools: "Which tools hold the workflow today?",
    hoursLost: "Hours lost weekly",
    urgency: "Urgency",
    recommendedFirstSystem: "Recommended first system",
    businessValue: "Business value",
    systemShape: "System shape",
    emailLabel: "Send me the full build brief later",
    emailPlaceholder: "you@company.com",
    back: "Back",
    continue: "Continue",
    footnote:
      "V1 uses deterministic scoring. The LLM report layer is ready to plug into the next sprint.",
  },
  generator: {
    eyebrow: "Architecture Generator",
    title: "Generate a structured AI system blueprint.",
    businessType: "Business type",
    goal: "Goal",
    dataMaturity: "Data maturity",
    components: "Components",
    firstBuild: "First build",
    technicalPlan: "Technical plan",
  },
  decision: {
    leadSignal: "Lead signal",
    businessMeaning: "Business meaning",
    nextStep: "Next step",
    recommendedOffer: "Recommended offer",
  },
  agents: {
    eyebrow: "Executable concept",
    input: "Input",
    output: "Output",
    simulatedRun: "Simulated run",
  },
  caseStudies: {
    problem: "Problem",
    systemDesign: "System design",
    discussSimilar: "Discuss a similar system",
  },
} as const;

export const optionCopy = {
  organizations: {
    startup: "شركة ناشئة أو فريق منتج",
    agency: "وكالة أو بزنس خدمات",
    enterprise: "فريق داخل شركة كبيرة",
    education: "تعليم أو تدريب",
  },
  challenges: {
    operations: "العمليات صارت يدوية بزيادة",
    knowledge: "المعرفة متفرقة وصعب تلقاها",
    support: "الدعم يحتاج يرد أسرع",
    sales: "العملاء المحتملين يحتاجون فرز",
    reporting: "التقارير تاخذ وقت طويل",
  },
  urgency: {
    later: "نستكشف بهدوء",
    "this-quarter": "هذا الربع",
    now: "الآن",
  },
  businessTypes: {
    agency: "وكالة",
    startup: "شركة ناشئة",
    enterprise: "شركة كبيرة",
    education: "تعليم",
  },
  goals: {
    support: "الدعم",
    knowledge: "المعرفة",
    sales: "المبيعات",
    operations: "العمليات",
    analytics: "التحليلات",
  },
  dataMaturity: {
    scattered: "متفرقة",
    organized: "مرتبة جزئياً",
    integrated: "مربوطة ومتكاملة",
  },
} as const;

export const optionCopyEn = {
  organizations: {
    startup: "Startup / product team",
    agency: "Agency / service business",
    enterprise: "Enterprise team",
    education: "Education / training",
  },
  challenges: {
    operations: "Operations are too manual",
    knowledge: "Knowledge is scattered",
    support: "Support needs faster answers",
    sales: "Leads need qualification",
    reporting: "Reporting takes too long",
  },
  urgency: {
    later: "Exploring",
    "this-quarter": "This quarter",
    now: "Now",
  },
  businessTypes: {
    agency: "Agency",
    startup: "Startup",
    enterprise: "Enterprise",
    education: "Education",
  },
  goals: {
    support: "Support",
    knowledge: "Knowledge",
    sales: "Sales",
    operations: "Operations",
    analytics: "Analytics",
  },
  dataMaturity: {
    scattered: "Scattered",
    organized: "Organized",
    integrated: "Integrated",
  },
} as const;

export const systemUserCopy: Record<string, { title: string; explanation: string }> = {
  "RAG Support Agent": {
    title: "RAG Support Agent",
    explanation: "نظام يجاوب من مصادر موثوقة بدل ما يخلي الفريق يدور في كل ملف.",
  },
  "Enterprise Knowledge RAG": {
    title: "Enterprise Knowledge RAG",
    explanation: "نظام معرفة داخلي يخلي الوصول للإجابات أسرع وأوثق.",
  },
  "Lead Qualification Agent": {
    title: "Lead Qualification Agent",
    explanation: "وكيل يفرز الطلبات والفرص ويقترح لك الخطوة الأنسب.",
  },
  "Workflow Automation Agent": {
    title: "Workflow Automation Agent",
    explanation: "وكيل يمسك الشغل المتكرر ويحوله لمسار واضح فيه موافقات بشرية.",
  },
  "AI Analytics Copilot": {
    title: "AI Analytics Copilot",
    explanation: "مساعد يحول البيانات والتقارير لقرارات أوضح وأسرع.",
  },
  "AI Workflow Diagnostic": {
    title: "AI Workflow Diagnostic",
    explanation: "تشخيص سريع يحدد وين أفضل نقطة نبدأ منها بدل ما نبني عشوائي.",
  },
};

export const readinessUserCopy = {
  Emerging: "بداية واعدة",
  Promising: "واضح فيها فرصة",
  "High-leverage": "فرصة قوية",
} as const;

export const leadSignalUserCopy = {
  strong: "قوية",
  medium: "واعدة",
  weak: "بدري عليها شوي",
} as const;

export const offerUserCopy = {
  "strategy-call": "مكالمة استراتيجية",
  "ai-diagnostic": "تشخيص AI سريع",
  "agent-sprint": "سبرنت وكيل AI",
  "rag-sprint": "خطة RAG",
  "automation-sprint": "خطة أتمتة",
} as const;

export const ctaUserCopy = {
  "strategy-call": "خلنا نحكي عن النظام",
  "ai-diagnostic": "خلنا نشخص الوضع",
  "agent-sprint": "أبغى وكيل مثل هذا",
  "rag-sprint": "ورني خطـة RAG",
  "automation-sprint": "ورني حل الأتمتة",
} as const;

export const impactUserCopy = {
  foundational: "تأسيسي",
  high: "عال",
  transformational: "تحويلي",
} as const;

export const difficultyUserCopy = {
  low: "سهل",
  medium: "متوسط",
  high: "متقدم",
} as const;
