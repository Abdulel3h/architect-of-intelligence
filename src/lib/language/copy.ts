import type { AppLanguage } from "./LanguageProvider";

export const homeCopy = {
  ar: {
    hero: {
      eyebrow: "AIO Labs · AI Systems Studio",
      title: "Architecting AI Systems, Agents, and Intelligent Workflows",
      body: "استوديو سعودي يبني منتجات AI وبنية تشغيل ذكية بصوت نجدي واضح. من الفكرة للنظام: وكلاء، RAG، أتمتة، تحليلات، وتجارب منتج جاهزة للشغل الحقيقي.",
      primaryCta: "خلنا نشوف وش نقدر نسوي",
      secondaryCta: "ورّني شكل الأنظمة",
      signalLabel: "تموضع AIO Labs",
      signals: ["Saudi-built", "AI Infrastructure", "Najdi voice", "Production systems"],
      console: {
        brief: "حالة المختبر",
        live: "تشغيل حي",
        offer: "وش نبني",
        offerValue: "AI Systems Architecture",
        domains: "طبقات النظام",
        outcome: "الأثر",
        outcomeValue: "ذكاء تشغيلي ينقاس",
      },
    },
    lab: {
      eyebrow: "تشخيص الأنظمة",
      title: "نبدأ من مسار الشغل، مو من موديل مبهر.",
      description: "الأداة تقرأ سياق الفريق وتطلع أول فرصة AI تستاهل البناء، مع اتجاه معماري واضح.",
    },
    cases: {
      eyebrow: "أنظمة مبنية بعقلية منتج",
      title: "كل مثال يوضح كيف يتحول الذكاء إلى بنية تشغيل.",
      description:
        "كل حالة مكتوبة كنظام: المشكلة، المعمارية، المدخلات، المخرجات، القياس، وحدود القرار الهندسي.",
    },
    agents: {
      eyebrow: "Agent Runtime",
      title: "الوكلاء هنا لهم مسار وحدود، مو مجرد أسماء براقة.",
      description: "تشوف المدخل، طريقة التفكير، المخرج، ونقاط المراجعة اللي تخلي النظام ينفع فعلياً.",
      tabsLabel: "معاينات تشغيل الوكلاء",
    },
    generatorSection: {
      eyebrow: "معمارية النظام",
      title: "إذا وضحت القيمة، ورّينا شكل النظام.",
      description:
        "المولد يحول سياق البزنس إلى مكونات، مسار بيانات، خطة بناء أولى، مخاطر واضحة، وعرض مناسب.",
    },
    contact: {
      eyebrow: "Start with the System",
      title: "أرسل التفاصيل، ونرتبها كنظام قابل للبناء.",
      description:
        "قل لنا وش تبغى يتحسن في التشغيل أو المنتج. بنقرأ السياق، نحدد أول خطوة ذكية، ونقترح مسار بناء واضح.",
      intentLabel: "نوع المشروع",
      urgencyLabel: "استعجال المشروع",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "الإيميل",
      improve: "وش تبي نظام AI يحسن؟",
      textarea: (intent: string) => `عطني نبذة عن ${intent} اللي تبي تبنيه.`,
      leadSignal: "إشارة الفـرصة",
      offer: "العرض الأنـسب",
      nextStep: "الخطوة الجاية",
    },
  },
  en: {
    hero: {
      eyebrow: "AIO Labs · AI Systems Studio",
      title: "Architecting AI Systems, Agents, and Intelligent Workflows",
      body: "Founded by Abdulelah in Riyadh, AIO Labs builds production AI products and intelligent infrastructure with a distinct Saudi voice.",
      primaryCta: "Map the Opportunity",
      secondaryCta: "View System Work",
      signalLabel: "AIO Labs positioning",
      signals: ["Saudi-built", "AI Infrastructure", "Najdi voice", "Production systems"],
      console: {
        brief: "Lab status",
        live: "Live system",
        offer: "Core build",
        offerValue: "AI systems architecture",
        domains: "System layers",
        outcome: "Outcome",
        outcomeValue: "Measurable operational intelligence",
      },
    },
    lab: {
      eyebrow: "Systems Diagnostic",
      title: "Start with the workflow, not the model demo.",
      description:
        "The scanner turns a team's workflow context into an AI opportunity score and a practical architecture direction.",
    },
    cases: {
      eyebrow: "Product-grade systems",
      title: "Every example shows how intelligence becomes operating infrastructure.",
      description:
        "Each case study is framed as a system: problem, architecture, inputs, outputs, metrics, difficulty, and engineering judgment.",
    },
    agents: {
      eyebrow: "Agent Runtime",
      title:
        "Agents shown as bounded systems: input, process, output, guardrails, and simulated execution.",
      description:
        "Every agent pattern explains the workflow value and the engineering boundary that makes it usable.",
      tabsLabel: "Agent runtime previews",
    },
    generatorSection: {
      eyebrow: "System Architecture",
      title: "Once the value is clear, reveal the system shape.",
      description:
        "The generator turns a business context into components, data flow, first build plan, risk notes, and a recommended offer.",
    },
    contact: {
      eyebrow: "Start with the System",
      title: "Send the details. We will shape them into a buildable system.",
      description:
        "Share the workflow or product you want to improve. We will read the context, identify the first smart move, and suggest a build path.",
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
