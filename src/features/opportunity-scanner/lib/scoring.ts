import { decideNextAction, type Decision } from "@/features/conversion/decision-layer";
import {
  dualOutput,
  readinessUserCopy,
  systemUserCopy,
  type DualOutput,
} from "@/lib/language/identity";

export type ScannerChoice = {
  organization: string;
  challenge: string;
  tools: string[];
  hours: string;
  urgency: string;
  email: string;
};

export type ScannerReport = {
  score: number;
  readiness: "Emerging" | "Promising" | "High-leverage";
  recommendedSystem: string;
  businessValue: string[];
  architecture: string[];
  firstSprint: string[];
  cta: string;
  decision: Decision;
  output: DualOutput<
    {
      readiness: ScannerReport["readiness"];
      recommendedSystem: string;
      businessValue: string[];
      architecture: string[];
      firstSprint: string[];
      cta: string;
    },
    {
      readiness: string;
      recommendedSystem: string;
      systemExplanation: string;
      businessValue: string[];
      architecture: string[];
      firstSprint: string[];
      cta: string;
    }
  >;
};

const challengeSystems: Record<string, string> = {
  support: "RAG Support Agent",
  knowledge: "Enterprise Knowledge RAG",
  sales: "Lead Qualification Agent",
  operations: "Workflow Automation Agent",
  reporting: "AI Analytics Copilot",
};

export const initialScannerChoice: ScannerChoice = {
  organization: "startup",
  challenge: "operations",
  tools: [],
  hours: "10-25",
  urgency: "this-quarter",
  email: "",
};

export function calculateScannerReport(choice: ScannerChoice): ScannerReport {
  const toolScore = Math.min(choice.tools.length * 8, 24);
  const hoursScore =
    choice.hours === "50+"
      ? 34
      : choice.hours === "25-50"
        ? 26
        : choice.hours === "10-25"
          ? 18
          : 10;
  const urgencyScore = choice.urgency === "now" ? 22 : choice.urgency === "this-quarter" ? 16 : 10;
  const orgScore =
    choice.organization === "enterprise" ? 14 : choice.organization === "agency" ? 12 : 10;
  const score = Math.min(100, toolScore + hoursScore + urgencyScore + orgScore);

  const readiness = score >= 75 ? "High-leverage" : score >= 52 ? "Promising" : "Emerging";
  const recommendedSystem = challengeSystems[choice.challenge] ?? "AI Workflow Diagnostic";
  const decision = decideNextAction({
    score,
    readiness,
    system: recommendedSystem,
    urgency: choice.urgency,
  });
  const businessValue = [
    "Reduce repeated manual decisions before adding more headcount.",
    "Create a measurable first AI workflow instead of a generic chatbot.",
    "Capture operational knowledge in a reusable system layer.",
  ];
  const architecture = [
    "Intake form or connected workspace trigger",
    "Knowledge and workflow context layer",
    "Agent reasoning step with guardrails",
    "Human review point for high-impact actions",
    "Dashboard for usage, savings, and quality signals",
  ];
  const firstSprint = [
    "Map the workflow and define success metrics.",
    "Build a narrow prototype around one repeated decision.",
    "Evaluate outputs against real examples.",
    "Deploy with human approval and analytics.",
  ];
  const cta =
    readiness === "High-leverage"
      ? "This is ready for a strategy call."
      : "Start with a focused AI diagnostic sprint.";
  const systemCopy = systemUserCopy[recommendedSystem] ?? systemUserCopy["AI Workflow Diagnostic"];
  const userBusinessValue = [
    "نخفف القرارات اليدوية المتكررة قبل ما تحتاج تزيد عدد الفريق.",
    "نطلع أول مسـار AI قابل للقياس بدل شات بوت عام ما يخدم الهدف.",
    "نرتب معرفة التشغيل داخل طبقة نظام تقدر ترجع لها وتبني عليها.",
  ];
  const userArchitecture = [
    "مدخل واضح للطلب أو ربط مع الأداة اللي يبدأ منها الشغل.",
    "طبقة سياق تجمع المعرفة ومسار العمل.",
    "خطوة تفكير للوكيل مع حدود ومراجعة واضحة.",
    "نقطة موافقة بشرية للأشياء الحساسة أو عالية الأثر.",
    "لوحة متابعة للاستخدام والتوفير والجودة.",
  ];
  const userFirstSprint = [
    "نرسم مسار العمل ونحدد وش بنقيس.",
    "نبني نموذج ضيق حول قرار واحد يتكرر كثير.",
    "نختبر المخرجات على أمثلة حقيقية.",
    "نطلقه بموافقة بشرية وتحليلات واضحة.",
  ];
  const userCta =
    readiness === "High-leverage"
      ? "الوضع جاهز لمكالمة استراتيجية ونطلع منه خطـة تنفيذ."
      : "الأفضل نبدأ بتشخيص AI مركز ونحدد أول فـرصة صح.";

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
        cta,
      },
      {
        readiness: readinessUserCopy[readiness],
        recommendedSystem: systemCopy.title,
        systemExplanation: systemCopy.explanation,
        businessValue: userBusinessValue,
        architecture: userArchitecture,
        firstSprint: userFirstSprint,
        cta: userCta,
      },
    ),
  };
}
