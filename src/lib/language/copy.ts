import type { AppLanguage } from "./LanguageProvider";

export const homeCopy = {
  ar: {
    hero: {
      eyebrow: "Architect of Intelligence",
      title: "نبني وكلاء وأنظمة AI للفرق اللي تبي أثـر واضح، مو كلام نظري.",
      body: "أصمم وأبني مسارات AI جاهزة للشغل الفعلي: وكلاء، RAG، أتمتة، تحليلات، وواجهات منتج كاملة.",
      primaryCta: "خلنا نشوف فـرصتك",
      secondaryCta: "ورني أمـثلة شغل",
      signalLabel: "تموضع الخدمة الحالي",
      signals: ["مهندس AI من الرياض", "أنظمة إنتاج، مو ديمو للاستعراض"],
      console: {
        brief: "ملخص النظام",
        live: "واجهة شغالة",
        offer: "العرض الأساسي",
        offerValue: "تصميم أنظمة AI",
        domains: "المجالات",
        outcome: "النتيجة المطلوبة",
        outcomeValue: "أثر تشغيلي ينقاس",
      },
    },
    lab: {
      eyebrow: "مختبر AI تفاعلي",
      title: "الموقع ما ينتظر الزائر، يشخـص فرصته.",
      description: "أول أداة تحول سياق مسار العمل إلى درجة فرصة AI واتجاه نظام عملي.",
    },
    cases: {
      eyebrow: "محرك دراسات الحالة",
      title: "أمـثلة مبنية كذكاء منتج، مو بطاقات ثابتة.",
      description:
        "كل حالة تطلع من Schema واضح: المشكلة، المعمارية، المدخلات، المخرجات، المقاييس، الصعوبة، وزاوية التحويل.",
    },
    agents: {
      eyebrow: "تشغيل الوكلاء",
      title: "الوكلاء هنا مو أسماء بس؛ تشوف المدخل، المسـار، المخرج، والحدود.",
      description: "الفكرة إن كل وكيل يوضح قيمة الشغل وحدوده التقنية بشكل مفهوم.",
      tabsLabel: "معاينات تشغيل الوكلاء",
    },
    generatorSection: {
      eyebrow: "تصميم الحل",
      title: "إذا وضحت القيمة، نطلع شـكل النظام.",
      description:
        "المولد يحول سياق البزنس إلى مكونات ومسار بيانات وخطة بناء أولى ومخاطر وعرض مناسب.",
    },
    contact: {
      eyebrow: "نقطة التواصل",
      title: "خلنا نبدأ من النظـام اللي تبي تبنيه.",
      description:
        "النسخة الحالية تفهم نيتك بوضوح. بعدها نقدر نربطها بالإيميل والـ CRM والتحليلات وملخص يولده الـ LLM.",
      intentLabel: "نوع المشروع",
      urgencyLabel: "استعجال المشروع",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "الإيميل",
      improve: "وش تبي نظام الـ AI يحسن؟",
      textarea: (intent: string) => `عطني نبذة عن ${intent} اللي تبي تبنيه.`,
      leadSignal: "إشارة الفـرصة",
      offer: "العرض الأنـسب",
      nextStep: "الخطوة الجاية",
    },
  },
  en: {
    hero: {
      eyebrow: "Architect of Intelligence",
      title: "AI agents and intelligent systems for teams that need real leverage.",
      body: "I design and build production-grade AI workflows across agents, RAG, automation, analytics, and full-stack product interfaces.",
      primaryCta: "Run AI Scan",
      secondaryCta: "View Case Studies",
      signalLabel: "Current positioning",
      signals: ["Riyadh-based AI engineer", "Production systems, not demo theater"],
      console: {
        brief: "System brief",
        live: "Live interface",
        offer: "Primary offer",
        offerValue: "AI systems architecture",
        domains: "Core stack",
        outcome: "Ideal outcome",
        outcomeValue: "Measurable operational leverage",
      },
    },
    lab: {
      eyebrow: "Interactive AI Lab",
      title: "A website that diagnoses opportunities, not a portfolio that waits.",
      description:
        "The first tool turns a visitor's workflow context into an AI opportunity score and a practical system direction.",
    },
    cases: {
      eyebrow: "Case Study Engine",
      title: "Structured case studies that behave like product intelligence, not static cards.",
      description:
        "Each case study is rendered from a validated schema: problem, architecture, inputs, outputs, metrics, difficulty, SEO tags, and conversion angle.",
    },
    agents: {
      eyebrow: "Agent Runtime",
      title:
        "Agents shown as runnable concepts: input, process, output, guardrails, and simulated execution.",
      description:
        "Every agent pattern explains the workflow value and the engineering boundary.",
      tabsLabel: "Agent runtime previews",
    },
    generatorSection: {
      eyebrow: "Solution Design",
      title: "Once the value is clear, generate the system shape.",
      description:
        "The generator turns a business context into components, data flow, first build plan, risk notes, and a recommended offer.",
    },
    contact: {
      eyebrow: "Contact Funnel",
      title: "Start with the system you want to build.",
      description:
        "The first version qualifies intent clearly. The next sprint can connect this to email, CRM, analytics, and an LLM-generated brief.",
      intentLabel: "Project intent",
      urgencyLabel: "Project urgency",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      improve: "What should this AI system improve?",
      textarea: (intent: string) => `Tell me about the ${intent.toLowerCase()} you want to build.`,
      leadSignal: "Lead signal",
      offer: "Recommended offer",
      nextStep: "Next step",
    },
  },
} as const;

export const selectByLanguage = <Arabic, English>(
  language: AppLanguage,
  values: { ar: Arabic; en: English },
) => values[language];
