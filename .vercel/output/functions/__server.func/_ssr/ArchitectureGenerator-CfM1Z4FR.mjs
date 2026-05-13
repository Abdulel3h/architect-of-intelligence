import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SurfaceCard, A as ActionButton, D as DecisionPanel, d as decideNextAction, b as runArchitectureGeneration, t as trackUserEvent } from "./index-DuQyUuTJ.mjs";
import { u as useLanguage, a as uiCopy, b as uiCopyEn, e as optionCopy, f as optionCopyEn, s as systemUserCopy, d as dualOutput } from "./router-B7ve87fu.mjs";
import "./index.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
const goalSystem = {
  support: "RAG Support Agent",
  knowledge: "Enterprise Knowledge RAG",
  sales: "Lead Qualification Agent",
  operations: "Workflow Automation Agent",
  analytics: "AI Analytics Copilot"
};
function generateArchitecture(input) {
  const system = goalSystem[input.goal];
  const source = input.dataMaturity === "integrated" ? "Connected Data Sources" : input.dataMaturity === "organized" ? "Organized Workspace" : "Scattered Files and Tools";
  const components = [
    source,
    "Context Normalizer",
    system,
    "Human Review Gate",
    "Metrics Dashboard"
  ];
  const dataFlow = [
    "Capture the workflow request and business context.",
    "Normalize documents, tool data, or user input into structured context.",
    `Run the ${system} with clear guardrails and source visibility.`,
    "Route sensitive or high-impact actions through human review.",
    "Track adoption, quality, time saved, and failure modes."
  ];
  const risks = [
    "Weak source quality can produce unreliable outputs.",
    "Automation scope must avoid irreversible actions in early versions.",
    "Metrics need to be defined before deployment, not after."
  ];
  const firstBuild = [
    "Define one workflow and one success metric.",
    "Prepare 20-50 real examples for evaluation.",
    "Build the smallest useful system with approval gates.",
    "Measure quality before expanding scope."
  ];
  const title = `${system} for ${input.businessType} ${input.goal}`;
  const summary = `A practical ${system.toLowerCase()} architecture that starts from ${source.toLowerCase()} and turns it into a measurable workflow.`;
  const systemCopy = systemUserCopy[system] ?? systemUserCopy["AI Workflow Diagnostic"];
  const sourceUser = input.dataMaturity === "integrated" ? "مصادر بيانات مربوطة" : input.dataMaturity === "organized" ? "مساحة عمل مرتبة" : "ملفات وأدوات متفرقة";
  const userComponents = [
    sourceUser,
    "منظّم للسياق",
    systemCopy.title,
    "بوابة مراجعة بشرية",
    "Dashboard لمتابعة النتائج"
  ];
  const userDataFlow = [
    "نلتقط طلب العمل والسياق التجاري حوله.",
    "نرتب الملفات أو بيانات الأدوات أو مدخلات المستخدم كسياق واضح.",
    `نشغّل ${systemCopy.title} بحدود واضحة ومصادر ظاهرة.`,
    "نمرر القرارات الحساسة أو عالية الأثر لمراجعة بشرية.",
    "نتابع التبني والجودة والوقت الموفر ونقاط الفشل."
  ];
  const userRisks = [
    "لو المصادر ضعيفة، المخرجات بتصير أقل ثقة.",
    "الأتمتة بالبداية لازم ما تمسك أفعال نهائية أو خطرة.",
    "المقاييس لازم تنحط قبل الإطلاق عشان نعرف هل النظام نفع فعلاً."
  ];
  const userFirstBuild = [
    "نحدد مسار عمل واحد ومقياس نجاح واحد.",
    "نجهز 20-50 مثال حقيقي للتقييم.",
    "نبني أصغر نسخة مفيدة مع موافقات واضحة.",
    "نقيس الجودة قبل ما نوسع النطاق."
  ];
  const mermaid = [
    "flowchart LR",
    `  source["${source}"] --> normalize["Context Normalizer"]`,
    `  normalize --> system["${system}"]`,
    `  system --> review["Human Review Gate"]`,
    `  review --> metrics["Metrics Dashboard"]`
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
      readiness: input.dataMaturity === "integrated" ? "High-leverage" : "Promising"
    }),
    output: dualOutput(
      {
        title,
        summary,
        components,
        dataFlow,
        risks,
        firstBuild,
        mermaid
      },
      {
        title: systemCopy.title,
        summary: systemCopy.explanation,
        components: userComponents,
        dataFlow: userDataFlow,
        risks: userRisks,
        firstBuild: userFirstBuild,
        mermaid
      }
    )
  };
}
const businessTypes = [
  "agency",
  "startup",
  "enterprise",
  "education"
];
const goals = [
  "support",
  "knowledge",
  "sales",
  "operations",
  "analytics"
];
const maturities = [
  "scattered",
  "organized",
  "integrated"
];
function ArchitectureGenerator() {
  const { isArabic, language } = useLanguage();
  const [input, setInput] = reactExports.useState({
    businessType: "agency",
    goal: "operations",
    dataMaturity: "scattered"
  });
  const [context, setContext] = reactExports.useState("");
  const [aiArchitecture, setAiArchitecture] = reactExports.useState(null);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const architecture = reactExports.useMemo(() => generateArchitecture(input), [input]);
  const copy = isArabic ? uiCopy : uiCopyEn;
  const options = isArabic ? optionCopy : optionCopyEn;
  const architectureOutput = isArabic ? architecture.output.user_output : architecture.output.internal_output;
  const realOutput = aiArchitecture?.output[isArabic ? "user_output" : "internal_output"];
  const view = realOutput ?? architectureOutput;
  const generate = async () => {
    setIsGenerating(true);
    try {
      const result = await runArchitectureGeneration({ ...input, context, language });
      setAiArchitecture(result);
      trackUserEvent({
        name: "architecture_generated",
        page: "/",
        properties: { goal: input.goal, dataMaturity: input.dataMaturity }
      });
    } finally {
      setIsGenerating(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: "architecture-generator", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanner-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: copy.generator.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: copy.generator.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "generator-controls", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectControl,
        {
          label: copy.generator.businessType,
          value: input.businessType,
          options: businessTypes,
          labels: options.businessTypes,
          onChange: (value) => setInput((current) => ({ ...current, businessType: value }))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectControl,
        {
          label: copy.generator.goal,
          value: input.goal,
          options: goals,
          labels: options.goals,
          onChange: (value) => setInput((current) => ({ ...current, goal: value }))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectControl,
        {
          label: copy.generator.dataMaturity,
          value: input.dataMaturity,
          options: maturities,
          labels: options.dataMaturity,
          onChange: (value) => setInput((current) => ({ ...current, dataMaturity: value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "generator-context", children: [
      copy.generator.contextLabel,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          rows: 4,
          value: context,
          placeholder: copy.generator.contextPlaceholder,
          onChange: (event) => setContext(event.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionButton,
      {
        type: "button",
        className: "generator-submit",
        onClick: generate,
        disabled: isGenerating,
        children: isGenerating ? copy.generator.generating : copy.generator.generate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "generated-report", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: view.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: view.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "report-columns", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportBlock, { title: copy.generator.components, items: view.components }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReportBlock,
          {
            title: copy.generator.orchestrationFlow,
            items: "orchestrationFlow" in view ? view.orchestrationFlow : architectureOutput.dataFlow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReportBlock,
          {
            title: copy.generator.storageLayer,
            items: "storageLayer" in view ? view.storageLayer : architectureOutput.dataFlow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReportBlock,
          {
            title: copy.generator.firstBuild,
            items: "implementationPhases" in view ? view.implementationPhases : architectureOutput.firstBuild
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionPanel, { decision: architecture.decision }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mermaid-source", "aria-label": copy.generator.technicalPlan, dir: "ltr", children: view.mermaid })
    ] })
  ] });
}
function SelectControl({
  label,
  value,
  options,
  labels,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: (event) => onChange(event.target.value), children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: labels[option] }, option)) })
  ] });
}
function ReportBlock({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "report-label", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, item)) })
  ] });
}
export {
  ArchitectureGenerator
};
