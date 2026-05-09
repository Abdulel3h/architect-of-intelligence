import type { Agent } from "@/content";
import { dualOutput, type DualOutput } from "@/lib/language/identity";

export type AgentRuntimeResult = {
  summary: string;
  steps: Array<{ label: string; status: "complete"; output: string }>;
  recommendedAction: string;
  output: DualOutput<
    {
      summary: string;
      steps: Array<{ label: string; status: "complete"; output: string }>;
      recommendedAction: string;
    },
    {
      summary: string;
      steps: Array<{ label: string; status: "complete"; output: string }>;
      recommendedAction: string;
    }
  >;
};

const agentUserRuntime: Record<
  string,
  {
    summary: string;
    steps: Array<{ label: string; output: string }>;
    recommendedAction: string;
  }
> = {
  "lead-qualification-agent": {
    summary:
      "ياخذ طلب العميل حتى لو كان ملخبط، ويرتبه لك: وش يبي، قد إيش مستعجل، ووش الخطوة الأنسب.",
    steps: [
      { label: "يفهم الطلب", output: "يحدد نوع الخدمة والهدف ودرجة الاستعجال." },
      { label: "يقيس الملاءمة", output: "يقرأ إشارات الميزانية والوقت والتعقيد بدون ما يخترع معلومات." },
      { label: "يقترح المسار", output: "يقول هل الأفضل مكالمة، ملخص، دراسة حالة، أو متابعة لاحقة." },
    ],
    recommendedAction: "مناسب كبداية سريعة إذا عندك طلبات داخلة وتبي فرز أوضح.",
  },
  "rag-support-agent": {
    summary: "يرد على الأسئلة من مستندات موثوقة ويبين لك المصدر بدل إجابات عامة.",
    steps: [
      { label: "يدور على الدليل", output: "يبحث في المستندات بالكلمات والمعنى." },
      { label: "يصيغ الجواب", output: "يركب جواب مختصر من الأدلة اللي لقاها فقط." },
      { label: "يبين الثقة", output: "يعرض المصادر والنواقص ومتى يحتاج تصعيد." },
    ],
    recommendedAction: "مناسب إذا المعرفة عندكم كثيرة ومتفرقة وتحتاج إجابات موثوقة.",
  },
  "workflow-automation-agent": {
    summary: "يمسك الشغل المتكرر ويقسمه لتشغيل، قرار، إجراء، وموافقة بشرية.",
    steps: [
      { label: "يرسم المسار", output: "يفصل المهمة إلى محفز وسياق وقرار وإجراء." },
      { label: "يخطط الأتمتة", output: "يفرق بين اللي ينفع يتنفذ تلقائياً واللي يحتاج موافقة." },
      { label: "يطلع خطة", output: "يرجع خطوات تنفيذ ومخاطر ومقاييس نتابعها." },
    ],
    recommendedAction: "مناسب كسبرنت اكتشاف إذا عندك تنسيق يدوي يتكرر بين الأدوات.",
  },
};

export function simulateAgentRun(agent: Agent): AgentRuntimeResult {
  const summary = `${agent.name} converts: ${agent.input.toLowerCase()} into ${agent.output.toLowerCase()}.`;
  const steps = agent.process.map((step) => ({
    label: step.label,
    status: "complete" as const,
    output: step.detail,
  }));
  const recommendedAction =
    agent.impactLevel === "transformational"
      ? "Use this as a discovery sprint candidate."
      : "Use this as a focused workflow prototype.";
  const userRuntime = agentUserRuntime[agent.id];
  const userSteps =
    userRuntime?.steps.map((step) => ({
      label: step.label,
      status: "complete" as const,
      output: step.output,
    })) ?? steps;

  return {
    summary: userRuntime?.summary ?? summary,
    steps: userSteps,
    recommendedAction: userRuntime?.recommendedAction ?? recommendedAction,
    output: dualOutput(
      {
        summary,
        steps,
        recommendedAction,
      },
      {
        summary: userRuntime?.summary ?? summary,
        steps: userSteps,
        recommendedAction: userRuntime?.recommendedAction ?? recommendedAction,
      },
    ),
  };
}
