import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as defineCaseStudies } from "./product-content-BHG0AMnR.mjs";
import { h as homeCopy, a as Section, d as decideNextAction, S as SurfaceCard, D as DecisionPanel, c as ActionLink } from "./index-DuQyUuTJ.mjs";
import { u as useLanguage, i as impactUserCopy, g as difficultyUserCopy, a as uiCopy, b as uiCopyEn } from "./router-B7ve87fu.mjs";
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
const caseStudies = defineCaseStudies([
  {
    id: "multi-agent-automation",
    slug: "multi-agent-automation-ecosystem",
    title: "Multi-Agent Automation Ecosystem",
    shortTitle: "Agent Ops Ecosystem",
    description: "A coordinated set of agents for content operations, lead-generation workflows, and human-reviewed delivery.",
    problem: "Manual content and lead workflows created slow handoffs, repeated decisions, and inconsistent throughput across the team.",
    systemDesign: "The system separates research, drafting, qualification, enrichment, and review into specialized agent responsibilities with explicit human approval points.",
    architecture: {
      summary: "Event-triggered agent workflow with shared context, review gates, and operational metrics.",
      nodes: [
        { id: "intake", label: "Workflow Intake", role: "Captures task context and constraints" },
        { id: "router", label: "Agent Router", role: "Chooses the right specialized agent path" },
        { id: "agents", label: "Specialized Agents", role: "Research, draft, enrich, and qualify" },
        { id: "review", label: "Human Review", role: "Approves high-impact outputs" },
        { id: "metrics", label: "Ops Dashboard", role: "Tracks throughput, quality, and savings" }
      ],
      edges: [
        { from: "intake", to: "router", label: "context" },
        { from: "router", to: "agents", label: "delegation" },
        { from: "agents", to: "review", label: "draft output" },
        { from: "review", to: "metrics", label: "quality signal" }
      ]
    },
    inputs: ["Campaign brief", "Lead source", "Knowledge base", "Review criteria"],
    outputs: ["Qualified leads", "Draft assets", "Review queue", "Performance dashboard"],
    metrics: [
      {
        label: "Efficiency gain",
        value: "85%",
        context: "Reduction in repeated manual processing"
      },
      {
        label: "Review model",
        value: "Human-in-loop",
        context: "High-impact actions keep approval gates"
      }
    ],
    stack: ["LangGraph", "FastAPI", "OpenAI", "n8n"],
    tags: ["ai agents", "workflow automation", "lead generation", "content operations"],
    difficulty: "high",
    impactLevel: "transformational",
    conversionAngle: "Strong fit for agencies and teams with repeated operational workflows.",
    userOutput: {
      description: "مجموعة Agents يشتغلون مع بعض على المحتوى والفرص، مع مراجعة بشرية قبل أي مخرج مهم.",
      problem: "الشغل اليدوي في المحتوى والفرص كان يبطئ التسليم ويكرر نفس القرارات بين الفريق.",
      systemDesign: "قسمنا الشغل بين Agents متخصصين للبحث والكتابة والفرز والإثراء، وحطينا موافقات بشرية في النقاط الحساسة.",
      architectureSummary: "مسار Agents يبدأ من الطلب، يوزع المهمة، يراجع المخرجات، ثم يقيس الجودة والتوفير.",
      metrics: [
        {
          label: "تحسن الكفاءة",
          value: "85%",
          context: "انخفاض كبير في المعالجة اليدوية المتكررة"
        },
        {
          label: "نموذج المراجعة",
          value: "بموافقة بشرية",
          context: "الأفعال عالية الأثر ما تطلع إلا بعد مراجعة واضحة"
        }
      ],
      conversionAngle: "مناسب للوكالات والفرق اللي عندها عمليات تتكرر كل أسبوع."
    }
  },
  {
    id: "enterprise-rag",
    slug: "enterprise-knowledge-rag",
    title: "Enterprise Knowledge RAG",
    shortTitle: "Knowledge RAG",
    description: "Private retrieval system for internal documentation with source-grounded answers and secure deployment patterns.",
    problem: "Technical and operational knowledge was scattered across documents, making support slow and expertise hard to reuse.",
    systemDesign: "A retrieval pipeline combines document ingestion, chunking, hybrid search, reranking, answer generation, and citation-first response rules.",
    architecture: {
      summary: "Document-to-answer RAG architecture with retrieval quality controls and citation visibility.",
      nodes: [
        { id: "docs", label: "Documents", role: "Policies, guides, FAQs, and internal notes" },
        { id: "index", label: "Indexing Pipeline", role: "Chunks and embeds trusted content" },
        { id: "retriever", label: "Hybrid Retriever", role: "Finds semantic and keyword matches" },
        { id: "answer", label: "Answer Layer", role: "Generates grounded responses with sources" },
        { id: "feedback", label: "Feedback Loop", role: "Captures gaps and quality issues" }
      ],
      edges: [
        { from: "docs", to: "index", label: "ingest" },
        { from: "index", to: "retriever", label: "searchable context" },
        { from: "retriever", to: "answer", label: "ranked evidence" },
        { from: "answer", to: "feedback", label: "user signal" }
      ]
    },
    inputs: ["PDFs", "Knowledge base", "User question", "Access rules"],
    outputs: ["Grounded answer", "Source citations", "Escalation path", "Knowledge gap log"],
    metrics: [
      {
        label: "Access speed",
        value: "Instant",
        context: "Answers available without manual document hunting"
      },
      {
        label: "Trust model",
        value: "Citations",
        context: "Responses expose source references for validation"
      }
    ],
    stack: ["RAG", "Vector DB", "Docker", "React"],
    tags: ["rag", "knowledge management", "enterprise ai", "semantic search"],
    difficulty: "medium",
    impactLevel: "high",
    conversionAngle: "Ideal for organizations with valuable internal knowledge trapped in documents.",
    userOutput: {
      description: "نظام معرفة خاص يجاوب من مستندات داخلية موثوقة، مع مصادر واضحة وطريقة نشر آمنة.",
      problem: "المعرفة التقنية والتشغيلية كانت متفرقة، فالدعم يصير أبطأ والخبرة ما تنعاد بسهولة.",
      systemDesign: "بنينا مسار يستقبل المستندات، يقسمها، يبحث فيها، يرتب النتائج، ثم يطلع إجابة مربوطة بالمصادر.",
      architectureSummary: "من المستند إلى الجواب: فهرسة، بحث هجين، إجابة موثقة، وتغذية راجعة لتحسين الجودة.",
      metrics: [
        {
          label: "سرعة الوصول",
          value: "فوري",
          context: "الإجابات تصير متاحة بدون مطاردة يدوية للمستندات"
        },
        {
          label: "نموذج الثقة",
          value: "مصادر ظاهرة",
          context: "كل رد يبين المرجع عشان تقدر تتحقق منه"
        }
      ],
      conversionAngle: "مناسب للجهات اللي عندها معرفة مهمة محبوسة داخل ملفات ومستندات."
    }
  },
  {
    id: "ai-product-systems",
    slug: "ai-product-systems",
    title: "AI Product Systems",
    shortTitle: "Product Systems",
    description: "AI-enabled systems across legal, finance, education, and analytics with product thinking beyond prototypes.",
    problem: "Many AI ideas stop at demos because they lack UX, deployment discipline, evaluation, and business outcome framing.",
    systemDesign: "Each system is scoped around a real workflow, measurable user value, interface clarity, deployment path, and iteration loop.",
    architecture: {
      summary: "Full-stack AI product pattern connecting user workflow, intelligence layer, and measurement.",
      nodes: [
        {
          id: "user",
          label: "User Workflow",
          role: "Defines the job-to-be-done and decision point"
        },
        {
          id: "ui",
          label: "Product Interface",
          role: "Turns AI capability into usable interaction"
        },
        {
          id: "ai",
          label: "AI Service",
          role: "Runs classification, generation, retrieval, or analysis"
        },
        { id: "data", label: "Data Layer", role: "Stores structured context and outputs" },
        { id: "measure", label: "Measurement", role: "Tracks value, usage, and quality" }
      ],
      edges: [
        { from: "user", to: "ui", label: "intent" },
        { from: "ui", to: "ai", label: "request" },
        { from: "ai", to: "data", label: "structured output" },
        { from: "data", to: "measure", label: "signals" }
      ]
    },
    inputs: ["User workflow", "Domain data", "Business rule", "Success metric"],
    outputs: ["AI feature", "Product UI", "Analytics view", "Iteration plan"],
    metrics: [
      {
        label: "Build mode",
        value: "End-to-end",
        context: "From workflow mapping to production interface"
      },
      {
        label: "Domains",
        value: "4+",
        context: "Legal, financial, educational, and analytics systems"
      }
    ],
    stack: ["Azure", "Power BI", "NLP", "TypeScript"],
    tags: ["ai products", "full-stack ai", "analytics", "product engineering"],
    difficulty: "medium",
    impactLevel: "high",
    conversionAngle: "Useful for teams that need AI shipped as a product, not a slide deck.",
    userOutput: {
      description: "أنظمة AI مبنية كمنتج فعلي في القانون والمالية والتعليم والتحليلات، مو مجرد ديمو سريع.",
      problem: "أفكار AI كثيرة توقف عند الديمو لأنها ما تربط التجربة والنشر والقياس بنتيجة تجارية واضحة.",
      systemDesign: "كل نظام ينربط بمسار عمل حقيقي، قيمة قابلة للقياس، واجهة واضحة، وخطة نشر وتحسين.",
      architectureSummary: "نمط منتج كامل يربط المستخدم بطبقة الذكاء والبيانات والقياس.",
      metrics: [
        {
          label: "طريقة البناء",
          value: "من البداية للنهاية",
          context: "من فهم المسار إلى واجهة قابلة للاستخدام"
        },
        { label: "المجالات", value: "4+", context: "قانونية ومالية وتعليمية وتحليلية" }
      ],
      conversionAngle: "مناسب للفرق اللي تبي AI ينشحن كمنتج، مو عرض تقديمي."
    }
  }
]);
function buildMermaidDiagram(caseStudy) {
  const lines = ["flowchart LR"];
  for (const node of caseStudy.architecture.nodes) {
    lines.push(`  ${node.id}["${node.label}"]`);
  }
  for (const edge of caseStudy.architecture.edges) {
    lines.push(`  ${edge.from} -- "${edge.label}" --> ${edge.to}`);
  }
  return lines.join("\n");
}
const nodeUserRoles = {
  "multi-agent-automation": {
    intake: { label: "استقبال الطلب", role: "يلتقط سياق المهمة وحدودها." },
    router: { label: "موجّه الوكلاء", role: "يختار المسار المناسب لكل Agent." },
    agents: { label: "وكلاء متخصصين", role: "يبحثون ويكتبون ويثرون ويفرزون." },
    review: { label: "مراجعة بشرية", role: "تعتمد المخرجات عالية الأثر." },
    metrics: { label: "لوحة التشغيل", role: "تتابع السرعة والجودة والتوفير." }
  },
  "enterprise-rag": {
    docs: { label: "المستندات", role: "سياسات وأدلة وأسئلة وملاحظات داخلية." },
    index: { label: "خط الفهرسة", role: "يقسم المحتوى الموثوق ويجهزه للبحث." },
    retriever: { label: "باحث هجين", role: "يلقى النتائج بالمعنى والكلمات." },
    answer: { label: "طبقة الإجابة", role: "تطلع ردود موثقة بالمصادر." },
    feedback: { label: "تغذية راجعة", role: "تسجل النواقص ومشاكل الجودة." }
  },
  "ai-product-systems": {
    user: { label: "مسار المستخدم", role: "يحدد المهمة والقرار المطلوب." },
    ui: { label: "واجهة المنتج", role: "تحول قدرة AI لتجربة سهلة." },
    ai: { label: "خدمة AI", role: "تشغل التصنيف أو التوليد أو البحث أو التحليل." },
    data: { label: "طبقة البيانات", role: "تحفظ السياق والمخرجات بشكل منظم." },
    measure: { label: "القياس", role: "يتابع القيمة والاستخدام والجودة." }
  }
};
function ArchitectureDiagram({ caseStudy }) {
  const { isArabic } = useLanguage();
  const userNodes = nodeUserRoles[caseStudy.id] ?? {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "architecture-diagram", "aria-label": `${caseStudy.title} architecture`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? caseStudy.userOutput.architectureSummary : caseStudy.architecture.summary }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-nodes", children: caseStudy.architecture.nodes.map((node) => {
      const userNode = userNodes[node.id];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "architecture-node", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: isArabic ? userNode?.label ?? node.label : node.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isArabic ? userNode?.role ?? node.role : node.role })
      ] }, node.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mermaid-source", "aria-label": "Mermaid architecture source", dir: "ltr", children: buildMermaidDiagram(caseStudy) })
  ] });
}
function MetricsBar({ metrics }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metrics-bar", children: metrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric-tile", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: metric.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: metric.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: metric.context })
  ] }, `${metric.label}-${metric.value}`)) });
}
function CaseStudyRuntime({ caseStudy }) {
  const { isArabic } = useLanguage();
  const decision = decideNextAction({
    system: caseStudy.title,
    impactLevel: caseStudy.impactLevel,
    difficulty: caseStudy.difficulty
  });
  const copy = isArabic ? uiCopy : uiCopyEn;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SurfaceCard, { className: "case-runtime-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "case-runtime-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: isArabic ? `أثر ${impactUserCopy[caseStudy.impactLevel]}` : `${caseStudy.impactLevel} impact` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: caseStudy.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? caseStudy.userOutput.description : caseStudy.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "difficulty-badge", children: isArabic ? difficultyUserCopy[caseStudy.difficulty] : caseStudy.difficulty })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetricsBar, { metrics: isArabic ? caseStudy.userOutput.metrics : caseStudy.metrics }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "case-runtime-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.caseStudies.problem }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? caseStudy.userOutput.problem : caseStudy.problem })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copy.caseStudies.systemDesign }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isArabic ? caseStudy.userOutput.systemDesign : caseStudy.systemDesign })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArchitectureDiagram, { caseStudy }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionPanel, { decision }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "runtime-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tag-row", children: caseStudy.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tag }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionLink, { href: "#contact", variant: "ghost", children: isArabic ? caseStudy.userOutput.conversionAngle : caseStudy.conversionAngle })
    ] })
  ] });
}
function CaseStudyEngine() {
  const { language } = useLanguage();
  const copy = homeCopy[language].cases;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "case-studies",
      eyebrow: copy.eyebrow,
      title: copy.title,
      description: copy.description,
      className: "case-section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "case-engine-grid", children: caseStudies.map((caseStudy, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-12% 0px" },
          transition: { duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudyRuntime, { caseStudy })
        },
        caseStudy.id
      )) })
    }
  );
}
export {
  CaseStudyEngine
};
