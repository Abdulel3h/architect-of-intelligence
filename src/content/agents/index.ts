import { defineAgents } from "../schemas/product-content";

export const agents = defineAgents([
  {
    id: "lead-qualification-agent",
    slug: "lead-qualification-agent",
    name: "Lead Qualification Agent",
    description:
      "Reads messy inbound requests and converts them into structured intent, urgency, project type, and recommended next action.",
    problem: "Inbound opportunities arrive with uneven context and require repeated manual triage.",
    input: "A rough message from a potential client or partner.",
    process: [
      { label: "Extract intent", detail: "Identify service category, business goal, and urgency." },
      {
        label: "Score fit",
        detail: "Estimate project leverage from budget, timeline, and complexity signals.",
      },
      {
        label: "Route action",
        detail: "Recommend call, async brief, case study, or nurture path.",
      },
    ],
    output: "A qualified lead profile and the next best conversion action.",
    guardrails: [
      "Never invent budget",
      "Escalate unclear requests",
      "Keep sales language specific",
    ],
    metrics: [
      {
        label: "Lead clarity",
        value: "High",
        context: "Turns vague messages into structured opportunity data",
      },
    ],
    userOutput: {
      description:
        "يقرأ الطلبات الداخلة حتى لو كانت ملخبطة، ويرتبها لك حسب النية والاستعجال ونوع المشروع والخطوة الجاية.",
      problem: "الفرص توصل بسياق ناقص، والفريق يضيع وقت يفرزها يدوي كل مرة.",
      input: "رسالة خام من عميل محتمل أو شريك.",
      output: "ملف فرصة مرتب مع أفضل خطوة للبيع أو المتابعة.",
      metrics: [
        {
          label: "وضوح الفرصة",
          value: "عال",
          context: "يحول الرسائل الغامضة لبيانات واضحة تقدر تتحرك عليها",
        },
      ],
    },
    tags: ["lead generation", "sales ops", "ai agent", "qualification"],
    difficulty: "medium",
    impactLevel: "high",
    demoSeed:
      "We are a small agency drowning in manual client onboarding and scattered project briefs.",
  },
  {
    id: "rag-support-agent",
    slug: "rag-support-agent",
    name: "RAG Support Agent",
    description:
      "Answers support or internal knowledge questions from trusted documentation with visible source grounding.",
    problem:
      "Support teams waste time searching scattered documents and repeating the same answers.",
    input: "A question plus a trusted knowledge base.",
    process: [
      {
        label: "Retrieve evidence",
        detail: "Search relevant documents with semantic and keyword signals.",
      },
      {
        label: "Compose answer",
        detail: "Generate a concise answer using retrieved evidence only.",
      },
      {
        label: "Expose confidence",
        detail: "Show sources, gaps, and escalation when evidence is weak.",
      },
    ],
    output: "A grounded response with citations and a clear escalation path.",
    guardrails: ["Cite sources", "Refuse unsupported claims", "Escalate low-confidence answers"],
    metrics: [
      { label: "Answer trust", value: "Cited", context: "Every answer shows the evidence path" },
    ],
    userOutput: {
      description:
        "يرد على أسئلة الدعم أو المعرفة الداخلية من مستندات موثوقة، ويعرض المصدر عشان الفريق يثق بالإجابة.",
      problem: "فرق الدعم تضيع وقت تدور في مستندات متفرقة وتكرر نفس الإجابات.",
      input: "سؤال مع قاعدة معرفة موثوقة.",
      output: "إجابة موثقة بالمصادر ومعها مسار تصعيد واضح.",
      metrics: [
        {
          label: "ثقة الإجابة",
          value: "بمصادر",
          context: "كل إجابة توضح من وين جاء الدليل",
        },
      ],
    },
    tags: ["rag", "support", "knowledge base", "enterprise ai"],
    difficulty: "medium",
    impactLevel: "high",
    demoSeed: "A team has policies in PDFs and needs accurate answers for staff questions.",
  },
  {
    id: "workflow-automation-agent",
    slug: "workflow-automation-agent",
    name: "Workflow Automation Agent",
    description:
      "Maps repeated operational work into a trigger, reasoning step, action plan, and approval checkpoint.",
    problem: "Operations work is repeated across tools but still depends on manual coordination.",
    input: "A repeated task, tools involved, and approval rules.",
    process: [
      {
        label: "Map workflow",
        detail: "Break the task into trigger, context, decision, and action.",
      },
      {
        label: "Plan automation",
        detail: "Choose what should run automatically and what needs approval.",
      },
      {
        label: "Emit playbook",
        detail: "Return implementation steps, risks, and metrics to monitor.",
      },
    ],
    output: "An automation blueprint with human review points.",
    guardrails: [
      "Do not automate irreversible actions",
      "Keep approvals explicit",
      "Log every decision",
    ],
    metrics: [
      {
        label: "Manual work",
        value: "Reduced",
        context: "Targets repeated coordination and admin loops",
      },
    ],
    userOutput: {
      description:
        "يحول الشغل التشغيلي المتكرر إلى مسار واضح: محفز، سياق، قرار، إجراء، وموافقة بشرية.",
      problem: "الشغل يتكرر بين الأدوات ولسه يعتمد على تنسيق يدوي متعب.",
      input: "مهمة متكررة، الأدوات المستخدمة، وقواعد الموافقة.",
      output: "خطة أتمتة فيها نقاط مراجعة بشرية واضحة.",
      metrics: [
        {
          label: "الشغل اليدوي",
          value: "أقل",
          context: "يركز على دوائر التنسيق والإدارة اللي تتكرر كثير",
        },
      ],
    },
    tags: ["automation", "operations", "n8n", "agent workflow"],
    difficulty: "high",
    impactLevel: "transformational",
    demoSeed: "A team manually copies CRM updates into spreadsheets and sends weekly reports.",
  },
]);
