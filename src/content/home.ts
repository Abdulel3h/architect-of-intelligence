import {
  BarChart3,
  BrainCircuit,
  Database,
  Network,
  ShieldCheck,
  Workflow,
  Bot,
} from "lucide-react";

export const labTools = [
  {
    title: "AI Opportunity Scanner",
    description: {
      ar: "يشخص أول نظام AI يستاهل تبنيه لفريقك أو مسار عملك أو منتجك.",
      en: "Scores the first AI system worth building for a team, workflow, or product surface.",
    },
    icon: BrainCircuit,
    status: "Live v1",
  },
  {
    title: "Architecture Generator",
    description: {
      ar: "يحول المشكلة التجارية إلى تصور معماري لـ Agent أو RAG أو Workflow أو تحليلات.",
      en: "Turns business context into an architecture direction for agents, RAG, workflows, or analytics.",
    },
    icon: Network,
    status: "Live v1",
  },
  {
    title: "ROI Simulator",
    description: {
      ar: "يقيس الوقت المتوقع توفيره والتعقيد وأول نتيجة نقدر نتابعها.",
      en: "Models expected time savings, implementation complexity, and the first measurable outcome.",
    },
    icon: BarChart3,
    status: "Next",
  },
];

export const caseStudies = [
  {
    title: "Multi-Agent Automation Ecosystem",
    outcome: { ar: "85% أقل شغل يدوي", en: "85% less manual work" },
    description: {
      ar: "وكلاء متخصصين للمحتوى والفرص، مصممين حول مراجعة بشرية ونتائج قابلة للقياس.",
      en: "Specialized agents for content and opportunities, designed around human review and measurable outcomes.",
    },
    stack: ["LangGraph", "FastAPI", "OpenAI", "n8n"],
    icon: Workflow,
  },
  {
    title: "Enterprise Knowledge RAG",
    outcome: { ar: "وصول فوري للمعرفة الداخلية", en: "Instant access to internal knowledge" },
    description: {
      ar: "نظام معرفة خاص للمستندات التقنية، يبحث بذكاء ويرد بإجابات مربوطة بالمصادر.",
      en: "A private knowledge system for technical documents with source-grounded answers.",
    },
    stack: ["RAG", "Vector DB", "Docker", "React"],
    icon: Database,
  },
  {
    title: "AI Product Systems",
    outcome: { ar: "من نموذج أولي لمنتج يستخدم", en: "From prototype to usable product" },
    description: {
      ar: "أنظمة AI في القانون والمالية والتعليم والتحليلات، مبنية كمنتج مو كعرض تجريبي.",
      en: "AI systems for legal, finance, education, and analytics, built as products rather than demos.",
    },
    stack: ["Azure", "Power BI", "NLP", "TypeScript"],
    icon: ShieldCheck,
  },
];

export const agentPreviews = [
  {
    name: "Lead Qualification Agent",
    input: {
      ar: "طلب غير مرتب من عميل محتمل",
      en: "Unstructured inbound request from a potential customer",
    },
    output: {
      ar: "النية والاستعجال ونوع المشروع والخطوة المقترحة",
      en: "Intent, urgency, project type, and recommended next action",
    },
    icon: Bot,
  },
  {
    name: "RAG Support Agent",
    input: {
      ar: "مستندات وسياسات وأسئلة داخلية",
      en: "Internal documents, policies, and support questions",
    },
    output: {
      ar: "إجابات موثقة بالمصادر ومسار تصعيد واضح",
      en: "Source-grounded answers with a clear escalation path",
    },
    icon: Database,
  },
  {
    name: "Workflow Automation Agent",
    input: { ar: "مهمة تشغيلية تتكرر بين الأدوات", en: "A repeated operational task across tools" },
    output: {
      ar: "خطة أتمتة مع نقاط موافقة بشرية",
      en: "Automation plan with human approval points",
    },
    icon: Workflow,
  },
];

export const processSteps = {
  ar: ["نشخص", "نصمم", "نبني نموذج", "نقيم", "نطلق", "نتابع"],
  en: ["Diagnose", "Design", "Prototype", "Evaluate", "Launch", "Measure"],
};
