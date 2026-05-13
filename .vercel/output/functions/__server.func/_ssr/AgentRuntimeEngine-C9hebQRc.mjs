import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as defineAgents } from "./product-content-BHG0AMnR.mjs";
import { h as homeCopy, a as Section, d as decideNextAction, S as SurfaceCard, A as ActionButton, D as DecisionPanel, r as runAgentRuntime, t as trackUserEvent } from "./index-DuQyUuTJ.mjs";
import { u as useLanguage, a as uiCopy, b as uiCopyEn, i as impactUserCopy, d as dualOutput } from "./router-B7ve87fu.mjs";
import "./index.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const agents = defineAgents([
  {
    id: "lead-qualification-agent",
    slug: "lead-qualification-agent",
    name: "Lead Qualification Agent",
    description: "Reads messy inbound requests and converts them into structured intent, urgency, project type, and recommended next action.",
    problem: "Inbound opportunities arrive with uneven context and require repeated manual triage.",
    input: "A rough message from a potential client or partner.",
    process: [
      { label: "Extract intent", detail: "Identify service category, business goal, and urgency." },
      {
        label: "Score fit",
        detail: "Estimate project leverage from budget, timeline, and complexity signals."
      },
      {
        label: "Route action",
        detail: "Recommend call, async brief, case study, or nurture path."
      }
    ],
    output: "A qualified lead profile and the next best conversion action.",
    guardrails: [
      "Never invent budget",
      "Escalate unclear requests",
      "Keep sales language specific"
    ],
    metrics: [
      {
        label: "Lead clarity",
        value: "High",
        context: "Turns vague messages into structured opportunity data"
      }
    ],
    userOutput: {
      description: "يقرأ الطلبات الداخلة حتى لو كانت ملخبطة، ويرتبها لك حسب النية والاستعجال ونوع المشروع والخطوة الجاية.",
      problem: "الفرص توصل بسياق ناقص، والفريق يضيع وقت يفرزها يدوي كل مرة.",
      input: "رسالة خام من عميل محتمل أو شريك.",
      output: "ملف فرصة مرتب مع أفضل خطوة للبيع أو المتابعة.",
      metrics: [
        {
          label: "وضوح الفرصة",
          value: "عال",
          context: "يحول الرسائل الغامضة لبيانات واضحة تقدر تتحرك عليها"
        }
      ]
    },
    tags: ["lead generation", "sales ops", "ai agent", "qualification"],
    difficulty: "medium",
    impactLevel: "high",
    demoSeed: "We are a small agency drowning in manual client onboarding and scattered project briefs."
  },
  {
    id: "rag-support-agent",
    slug: "rag-support-agent",
    name: "RAG Support Agent",
    description: "Answers support or internal knowledge questions from trusted documentation with visible source grounding.",
    problem: "Support teams waste time searching scattered documents and repeating the same answers.",
    input: "A question plus a trusted knowledge base.",
    process: [
      {
        label: "Retrieve evidence",
        detail: "Search relevant documents with semantic and keyword signals."
      },
      {
        label: "Compose answer",
        detail: "Generate a concise answer using retrieved evidence only."
      },
      {
        label: "Expose confidence",
        detail: "Show sources, gaps, and escalation when evidence is weak."
      }
    ],
    output: "A grounded response with citations and a clear escalation path.",
    guardrails: ["Cite sources", "Refuse unsupported claims", "Escalate low-confidence answers"],
    metrics: [
      { label: "Answer trust", value: "Cited", context: "Every answer shows the evidence path" }
    ],
    userOutput: {
      description: "يرد على أسئلة الدعم أو المعرفة الداخلية من مستندات موثوقة، ويعرض المصدر عشان الفريق يثق بالإجابة.",
      problem: "فرق الدعم تضيع وقت تدور في مستندات متفرقة وتكرر نفس الإجابات.",
      input: "سؤال مع قاعدة معرفة موثوقة.",
      output: "إجابة موثقة بالمصادر ومعها مسار تصعيد واضح.",
      metrics: [
        {
          label: "ثقة الإجابة",
          value: "بمصادر",
          context: "كل إجابة توضح من وين جاء الدليل"
        }
      ]
    },
    tags: ["rag", "support", "knowledge base", "enterprise ai"],
    difficulty: "medium",
    impactLevel: "high",
    demoSeed: "A team has policies in PDFs and needs accurate answers for staff questions."
  },
  {
    id: "workflow-automation-agent",
    slug: "workflow-automation-agent",
    name: "Workflow Automation Agent",
    description: "Maps repeated operational work into a trigger, reasoning step, action plan, and approval checkpoint.",
    problem: "Operations work is repeated across tools but still depends on manual coordination.",
    input: "A repeated task, tools involved, and approval rules.",
    process: [
      {
        label: "Map workflow",
        detail: "Break the task into trigger, context, decision, and action."
      },
      {
        label: "Plan automation",
        detail: "Choose what should run automatically and what needs approval."
      },
      {
        label: "Emit playbook",
        detail: "Return implementation steps, risks, and metrics to monitor."
      }
    ],
    output: "An automation blueprint with human review points.",
    guardrails: [
      "Do not automate irreversible actions",
      "Keep approvals explicit",
      "Log every decision"
    ],
    metrics: [
      {
        label: "Manual work",
        value: "Reduced",
        context: "Targets repeated coordination and admin loops"
      }
    ],
    userOutput: {
      description: "يحول الشغل التشغيلي المتكرر إلى مسار واضح: محفز، سياق، قرار، إجراء، وموافقة بشرية.",
      problem: "الشغل يتكرر بين الأدوات ولسه يعتمد على تنسيق يدوي متعب.",
      input: "مهمة متكررة، الأدوات المستخدمة، وقواعد الموافقة.",
      output: "خطة أتمتة فيها نقاط مراجعة بشرية واضحة.",
      metrics: [
        {
          label: "الشغل اليدوي",
          value: "أقل",
          context: "يركز على دوائر التنسيق والإدارة اللي تتكرر كثير"
        }
      ]
    },
    tags: ["automation", "operations", "n8n", "agent workflow"],
    difficulty: "high",
    impactLevel: "transformational",
    demoSeed: "A team manually copies CRM updates into spreadsheets and sends weekly reports."
  }
]);
const agentUserRuntime = {
  "lead-qualification-agent": {
    summary: "ياخذ طلب العميل حتى لو كان ملخبط، ويرتبه لك: وش يبي، قد إيش مستعجل، ووش الخطوة الأنسب.",
    steps: [
      { label: "يفهم الطلب", output: "يحدد نوع الخدمة والهدف ودرجة الاستعجال." },
      {
        label: "يقيس الملاءمة",
        output: "يقرأ إشارات الميزانية والوقت والتعقيد بدون ما يخترع معلومات."
      },
      {
        label: "يقترح المسار",
        output: "يقول هل الأفضل مكالمة، ملخص، دراسة حالة، أو متابعة لاحقة."
      }
    ],
    recommendedAction: "مناسب كبداية سريعة إذا عندك طلبات داخلة وتبي فرز أوضح."
  },
  "rag-support-agent": {
    summary: "يرد على الأسئلة من مستندات موثوقة ويبين لك المصدر بدل إجابات عامة.",
    steps: [
      { label: "يدور على الدليل", output: "يبحث في المستندات بالكلمات والمعنى." },
      { label: "يصيغ الجواب", output: "يركب جواب مختصر من الأدلة اللي لقاها فقط." },
      { label: "يبين الثقة", output: "يعرض المصادر والنواقص ومتى يحتاج تصعيد." }
    ],
    recommendedAction: "مناسب إذا المعرفة عندكم كثيرة ومتفرقة وتحتاج إجابات موثوقة."
  },
  "workflow-automation-agent": {
    summary: "يمسك الشغل المتكرر ويقسمه لتشغيل، قرار، إجراء، وموافقة بشرية.",
    steps: [
      { label: "يرسم المسار", output: "يفصل المهمة إلى محفز وسياق وقرار وإجراء." },
      { label: "يخطط الأتمتة", output: "يفرق بين اللي ينفع يتنفذ تلقائياً واللي يحتاج موافقة." },
      { label: "يطلع خطة", output: "يرجع خطوات تنفيذ ومخاطر ومقاييس نتابعها." }
    ],
    recommendedAction: "مناسب كسبرنت اكتشاف إذا عندك تنسيق يدوي يتكرر بين الأدوات."
  }
};
function simulateAgentRun(agent) {
  const summary = `${agent.name} converts: ${agent.input.toLowerCase()} into ${agent.output.toLowerCase()}.`;
  const steps = agent.process.map((step) => ({
    label: step.label,
    status: "complete",
    output: step.detail
  }));
  const recommendedAction = agent.impactLevel === "transformational" ? "Use this as a discovery sprint candidate." : "Use this as a focused workflow prototype.";
  const userRuntime = agentUserRuntime[agent.id];
  const userSteps = userRuntime?.steps.map((step) => ({
    label: step.label,
    status: "complete",
    output: step.output
  })) ?? steps;
  return {
    summary: userRuntime?.summary ?? summary,
    steps: userSteps,
    recommendedAction: userRuntime?.recommendedAction ?? recommendedAction,
    output: dualOutput(
      {
        summary,
        steps,
        recommendedAction
      },
      {
        summary: userRuntime?.summary ?? summary,
        steps: userSteps,
        recommendedAction: userRuntime?.recommendedAction ?? recommendedAction
      }
    )
  };
}
function AgentRuntimePreview({ agent }) {
  const { isArabic } = useLanguage();
  const [runtimeInput, setRuntimeInput] = reactExports.useState("");
  const [aiResult, setAiResult] = reactExports.useState(null);
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const result = reactExports.useMemo(() => simulateAgentRun(agent), [agent]);
  const decision = reactExports.useMemo(
    () => decideNextAction({
      system: agent.name,
      impactLevel: agent.impactLevel,
      difficulty: agent.difficulty
    }),
    [agent]
  );
  const copy = isArabic ? uiCopy : uiCopyEn;
  const runtimeOutput = aiResult?.output[isArabic ? "user_output" : "internal_output"] ?? (isArabic ? result.output.user_output : result.output.internal_output);
  const runtimeSteps = aiResult ? runtimeOutput.steps : result.steps;
  const run = async () => {
    setIsRunning(true);
    try {
      const response = await runAgentRuntime({
        agentId: agent.id,
        agentName: agent.name,
        input: runtimeInput || agent.input
      });
      setAiResult(response);
      trackUserEvent({
        name: "agent_runtime_generated",
        page: "/",
        properties: { agentId: agent.id }
      });
    } finally {
      setIsRunning(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: "agent-runtime-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-runtime-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: copy.agents.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: agent.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? agent.userOutput.description : agent.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "difficulty-badge", children: isArabic ? impactUserCopy[agent.impactLevel] : agent.impactLevel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "io-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.agents.input }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? agent.userOutput.input : agent.input })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.agents.output }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? agent.userOutput.output : agent.output })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-live-input", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
        isArabic ? "اختبر الوكيل على مدخل حقيقي" : "Run this agent on real input",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            rows: 4,
            value: runtimeInput,
            placeholder: isArabic ? "اكتب رسالة عميل، سؤال دعم، أو مهمة تشغيلية تحتاج قرار واضح..." : "Paste a customer message, support question, or workflow task...",
            onChange: (event) => setRuntimeInput(event.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { type: "button", onClick: run, disabled: isRunning, children: isRunning ? isArabic ? "الوكيل يعالج..." : "Agent running..." : isArabic ? "شغّل المسار" : "Run agent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "runtime-steps", children: runtimeSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "runtime-step", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: String(index + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: step.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: step.output })
      ] })
    ] }, step.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-simulated-output", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.agents.simulatedRun }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: runtimeOutput.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: runtimeOutput.recommendedAction })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionPanel, { decision })
  ] });
}
function AgentRuntimeEngine() {
  const [selected, setSelected] = reactExports.useState(agents[0]);
  const { language } = useLanguage();
  const copy = homeCopy[language].agents;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "agents", eyebrow: copy.eyebrow, title: copy.title, description: copy.description, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-layout", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "agent-tabs", role: "tablist", "aria-label": copy.tabsLabel, children: agents.map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": agent.id === selected.id,
        className: agent.id === selected.id ? "active" : "",
        onClick: () => setSelected(agent),
        children: [
          agent.id === selected.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "agent-tab-glow",
              layoutId: "agent-tab-glow",
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: agent.name })
        ]
      },
      agent.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentRuntimePreview, { agent: selected })
  ] }) });
}
export {
  AgentRuntimeEngine
};
