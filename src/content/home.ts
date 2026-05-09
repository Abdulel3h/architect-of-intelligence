import {
  BarChart3,
  Bot,
  BrainCircuit,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const proofPoints = [
  { value: "4", label: "أنظمة AI انبنت وانطلقت" },
  { value: "2", label: "فوز بهاكاثونات وطنية" },
  { value: "85%", label: "تحسن بكفاءة التشغيل" },
  { value: "KSA", label: "استوديو AI من الرياض" },
];

export const labTools = [
  {
    title: "AI Opportunity Scanner",
    description: "يشخص أول نظام AI يستاهل تبنيه لفريقك أو مسار عملك أو منتجك.",
    icon: BrainCircuit,
    status: "Live v1",
  },
  {
    title: "Architecture Generator",
    description: "يحول المشكلة التجارية إلى تصور معماري لوكيل، RAG، أتمتة، أو تحليلات.",
    icon: Network,
    status: "Live v1",
  },
  {
    title: "ROI Simulator",
    description: "يقيس الوقت المتوقع توفيره والتعقيد وأول نتيجة نقدر نتابعها.",
    icon: BarChart3,
    status: "Next",
  },
];

export const caseStudies = [
  {
    title: "Multi-Agent Automation Ecosystem",
    outcome: "85% أقل شغل يدوي",
    description:
      "وكلاء متخصصين للمحتوى والفرص، مصممين حول مراجعة بشرية ونتائج قابلة للقياس.",
    stack: ["LangGraph", "FastAPI", "OpenAI", "n8n"],
    icon: Workflow,
  },
  {
    title: "Enterprise Knowledge RAG",
    outcome: "وصول فوري للمعرفة الداخلية",
    description:
      "نظام معرفة خاص للمستندات التقنية، يبحث بذكاء ويرد بإجابات مربوطة بالمصادر.",
    stack: ["RAG", "Vector DB", "Docker", "React"],
    icon: Database,
  },
  {
    title: "AI Product Systems",
    outcome: "من نموذج أولي لمنتج يستخدم",
    description:
      "أنظمة AI في القانون والمالية والتعليم والتحليلات، مبنية كمنتج مو كعرض تجريبي.",
    stack: ["Azure", "Power BI", "NLP", "TypeScript"],
    icon: ShieldCheck,
  },
];

export const agentPreviews = [
  {
    name: "Lead Qualification Agent",
    input: "طلب غير مرتب من عميل محتمل",
    output: "النية والاستعجال ونوع المشروع والخطوة المقترحة",
    icon: Bot,
  },
  {
    name: "RAG Support Agent",
    input: "مستندات وسياسات وأسئلة داخلية",
    output: "إجابات موثقة بالمصادر ومسار تصعيد واضح",
    icon: Database,
  },
  {
    name: "Workflow Automation Agent",
    input: "مهمة تشغيلية تتكرر بين الأدوات",
    output: "خطة أتمتة مع نقاط موافقة بشرية",
    icon: Workflow,
  },
];

export const processSteps = ["نشخص", "نصمم", "نبني نموذج", "نقيم", "نطلق", "نتابع"];
