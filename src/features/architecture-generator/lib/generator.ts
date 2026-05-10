import { decideNextAction, type Decision } from "@/features/conversion/decision-layer";
import { dualOutput, systemUserCopy, type DualOutput } from "@/lib/language/identity";

export type ArchitectureGeneratorInput = {
  businessType: "agency" | "startup" | "enterprise" | "education";
  goal: "support" | "knowledge" | "sales" | "operations" | "analytics";
  dataMaturity: "scattered" | "organized" | "integrated";
};

export type GeneratedArchitecture = {
  title: string;
  summary: string;
  components: string[];
  dataFlow: string[];
  risks: string[];
  firstBuild: string[];
  mermaid: string;
  decision: Decision;
  output: DualOutput<
    {
      title: string;
      summary: string;
      components: string[];
      dataFlow: string[];
      risks: string[];
      firstBuild: string[];
      mermaid: string;
    },
    {
      title: string;
      summary: string;
      components: string[];
      dataFlow: string[];
      risks: string[];
      firstBuild: string[];
      mermaid: string;
    }
  >;
};

const goalSystem: Record<ArchitectureGeneratorInput["goal"], string> = {
  support: "RAG Support Agent",
  knowledge: "Enterprise Knowledge RAG",
  sales: "Lead Qualification Agent",
  operations: "Workflow Automation Agent",
  analytics: "AI Analytics Copilot",
};

export function generateArchitecture(input: ArchitectureGeneratorInput): GeneratedArchitecture {
  const system = goalSystem[input.goal];
  const source =
    input.dataMaturity === "integrated"
      ? "Connected Data Sources"
      : input.dataMaturity === "organized"
        ? "Organized Workspace"
        : "Scattered Files and Tools";

  const components = [
    source,
    "Context Normalizer",
    system,
    "Human Review Gate",
    "Metrics Dashboard",
  ];
  const dataFlow = [
    "Capture the workflow request and business context.",
    "Normalize documents, tool data, or user input into structured context.",
    `Run the ${system} with clear guardrails and source visibility.`,
    "Route sensitive or high-impact actions through human review.",
    "Track adoption, quality, time saved, and failure modes.",
  ];
  const risks = [
    "Weak source quality can produce unreliable outputs.",
    "Automation scope must avoid irreversible actions in early versions.",
    "Metrics need to be defined before deployment, not after.",
  ];
  const firstBuild = [
    "Define one workflow and one success metric.",
    "Prepare 20-50 real examples for evaluation.",
    "Build the smallest useful system with approval gates.",
    "Measure quality before expanding scope.",
  ];
  const title = `${system} for ${input.businessType} ${input.goal}`;
  const summary = `A practical ${system.toLowerCase()} architecture that starts from ${source.toLowerCase()} and turns it into a measurable workflow.`;

  const systemCopy = systemUserCopy[system] ?? systemUserCopy["AI Workflow Diagnostic"];
  const sourceUser =
    input.dataMaturity === "integrated"
      ? "مصادر بيانات مربوطة"
      : input.dataMaturity === "organized"
        ? "مساحة عمل مرتبة"
        : "ملفات وأدوات متفرقة";
  const userComponents = [
    sourceUser,
    "منظّم للسياق",
    systemCopy.title,
    "بوابة مراجعة بشرية",
    "Dashboard لمتابعة النتائج",
  ];
  const userDataFlow = [
    "نلتقط طلب العمل والسياق التجاري حوله.",
    "نرتب الملفات أو بيانات الأدوات أو مدخلات المستخدم كسياق واضح.",
    `نشغّل ${systemCopy.title} بحدود واضحة ومصادر ظاهرة.`,
    "نمرر القرارات الحساسة أو عالية الأثر لمراجعة بشرية.",
    "نتابع التبني والجودة والوقت الموفر ونقاط الفشل.",
  ];
  const userRisks = [
    "لو المصادر ضعيفة، المخرجات بتصير أقل ثقة.",
    "الأتمتة بالبداية لازم ما تمسك أفعال نهائية أو خطرة.",
    "المقاييس لازم تنحط قبل الإطلاق عشان نعرف هل النظام نفع فعلاً.",
  ];
  const userFirstBuild = [
    "نحدد مسار عمل واحد ومقياس نجاح واحد.",
    "نجهز 20-50 مثال حقيقي للتقييم.",
    "نبني أصغر نسخة مفيدة مع موافقات واضحة.",
    "نقيس الجودة قبل ما نوسع النطاق.",
  ];

  const mermaid = [
    "flowchart LR",
    `  source["${source}"] --> normalize["Context Normalizer"]`,
    `  normalize --> system["${system}"]`,
    `  system --> review["Human Review Gate"]`,
    `  review --> metrics["Metrics Dashboard"]`,
  ].join("\n");

  return {
    title: systemCopy.title,
    summary: systemCopy.explanation,
    components: userComponents,
    dataFlow: userDataFlow,
    risks: userRisks,
    firstBuild: userFirstBuild,
    mermaid,
    decision: decideNextAction({
      system,
      category: input.goal,
      readiness: input.dataMaturity === "integrated" ? "High-leverage" : "Promising",
    }),
    output: dualOutput(
      {
        title,
        summary,
        components,
        dataFlow,
        risks,
        firstBuild,
        mermaid,
      },
      {
        title: systemCopy.title,
        summary: systemCopy.explanation,
        components: userComponents,
        dataFlow: userDataFlow,
        risks: userRisks,
        firstBuild: userFirstBuild,
        mermaid,
      },
    ),
  };
}
