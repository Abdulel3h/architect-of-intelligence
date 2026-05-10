import { defineCaseStudies } from "../schemas/product-content";

export const caseStudies = defineCaseStudies([
  {
    id: "multi-agent-automation",
    slug: "multi-agent-automation-ecosystem",
    title: "Multi-Agent Automation Ecosystem",
    shortTitle: "Agent Ops Ecosystem",
    description:
      "A coordinated set of agents for content operations, lead-generation workflows, and human-reviewed delivery.",
    problem:
      "Manual content and lead workflows created slow handoffs, repeated decisions, and inconsistent throughput across the team.",
    systemDesign:
      "The system separates research, drafting, qualification, enrichment, and review into specialized agent responsibilities with explicit human approval points.",
    architecture: {
      summary:
        "Event-triggered agent workflow with shared context, review gates, and operational metrics.",
      nodes: [
        { id: "intake", label: "Workflow Intake", role: "Captures task context and constraints" },
        { id: "router", label: "Agent Router", role: "Chooses the right specialized agent path" },
        { id: "agents", label: "Specialized Agents", role: "Research, draft, enrich, and qualify" },
        { id: "review", label: "Human Review", role: "Approves high-impact outputs" },
        { id: "metrics", label: "Ops Dashboard", role: "Tracks throughput, quality, and savings" },
      ],
      edges: [
        { from: "intake", to: "router", label: "context" },
        { from: "router", to: "agents", label: "delegation" },
        { from: "agents", to: "review", label: "draft output" },
        { from: "review", to: "metrics", label: "quality signal" },
      ],
    },
    inputs: ["Campaign brief", "Lead source", "Knowledge base", "Review criteria"],
    outputs: ["Qualified leads", "Draft assets", "Review queue", "Performance dashboard"],
    metrics: [
      {
        label: "Efficiency gain",
        value: "85%",
        context: "Reduction in repeated manual processing",
      },
      {
        label: "Review model",
        value: "Human-in-loop",
        context: "High-impact actions keep approval gates",
      },
    ],
    stack: ["LangGraph", "FastAPI", "OpenAI", "n8n"],
    tags: ["ai agents", "workflow automation", "lead generation", "content operations"],
    difficulty: "high",
    impactLevel: "transformational",
    conversionAngle: "Strong fit for agencies and teams with repeated operational workflows.",
    userOutput: {
      description:
        "مجموعة Agents يشتغلون مع بعض على المحتوى والفرص، مع مراجعة بشرية قبل أي مخرج مهم.",
      problem: "الشغل اليدوي في المحتوى والفرص كان يبطئ التسليم ويكرر نفس القرارات بين الفريق.",
      systemDesign:
        "قسمنا الشغل بين Agents متخصصين للبحث والكتابة والفرز والإثراء، وحطينا موافقات بشرية في النقاط الحساسة.",
      architectureSummary:
        "مسار Agents يبدأ من الطلب، يوزع المهمة، يراجع المخرجات، ثم يقيس الجودة والتوفير.",
      metrics: [
        {
          label: "تحسن الكفاءة",
          value: "85%",
          context: "انخفاض كبير في المعالجة اليدوية المتكررة",
        },
        {
          label: "نموذج المراجعة",
          value: "بموافقة بشرية",
          context: "الأفعال عالية الأثر ما تطلع إلا بعد مراجعة واضحة",
        },
      ],
      conversionAngle: "مناسب للوكالات والفرق اللي عندها عمليات تتكرر كل أسبوع.",
    },
  },
  {
    id: "enterprise-rag",
    slug: "enterprise-knowledge-rag",
    title: "Enterprise Knowledge RAG",
    shortTitle: "Knowledge RAG",
    description:
      "Private retrieval system for internal documentation with source-grounded answers and secure deployment patterns.",
    problem:
      "Technical and operational knowledge was scattered across documents, making support slow and expertise hard to reuse.",
    systemDesign:
      "A retrieval pipeline combines document ingestion, chunking, hybrid search, reranking, answer generation, and citation-first response rules.",
    architecture: {
      summary:
        "Document-to-answer RAG architecture with retrieval quality controls and citation visibility.",
      nodes: [
        { id: "docs", label: "Documents", role: "Policies, guides, FAQs, and internal notes" },
        { id: "index", label: "Indexing Pipeline", role: "Chunks and embeds trusted content" },
        { id: "retriever", label: "Hybrid Retriever", role: "Finds semantic and keyword matches" },
        { id: "answer", label: "Answer Layer", role: "Generates grounded responses with sources" },
        { id: "feedback", label: "Feedback Loop", role: "Captures gaps and quality issues" },
      ],
      edges: [
        { from: "docs", to: "index", label: "ingest" },
        { from: "index", to: "retriever", label: "searchable context" },
        { from: "retriever", to: "answer", label: "ranked evidence" },
        { from: "answer", to: "feedback", label: "user signal" },
      ],
    },
    inputs: ["PDFs", "Knowledge base", "User question", "Access rules"],
    outputs: ["Grounded answer", "Source citations", "Escalation path", "Knowledge gap log"],
    metrics: [
      {
        label: "Access speed",
        value: "Instant",
        context: "Answers available without manual document hunting",
      },
      {
        label: "Trust model",
        value: "Citations",
        context: "Responses expose source references for validation",
      },
    ],
    stack: ["RAG", "Vector DB", "Docker", "React"],
    tags: ["rag", "knowledge management", "enterprise ai", "semantic search"],
    difficulty: "medium",
    impactLevel: "high",
    conversionAngle:
      "Ideal for organizations with valuable internal knowledge trapped in documents.",
    userOutput: {
      description: "نظام معرفة خاص يجاوب من مستندات داخلية موثوقة، مع مصادر واضحة وطريقة نشر آمنة.",
      problem: "المعرفة التقنية والتشغيلية كانت متفرقة، فالدعم يصير أبطأ والخبرة ما تنعاد بسهولة.",
      systemDesign:
        "بنينا مسار يستقبل المستندات، يقسمها، يبحث فيها، يرتب النتائج، ثم يطلع إجابة مربوطة بالمصادر.",
      architectureSummary:
        "من المستند إلى الجواب: فهرسة، بحث هجين، إجابة موثقة، وتغذية راجعة لتحسين الجودة.",
      metrics: [
        {
          label: "سرعة الوصول",
          value: "فوري",
          context: "الإجابات تصير متاحة بدون مطاردة يدوية للمستندات",
        },
        {
          label: "نموذج الثقة",
          value: "مصادر ظاهرة",
          context: "كل رد يبين المرجع عشان تقدر تتحقق منه",
        },
      ],
      conversionAngle: "مناسب للجهات اللي عندها معرفة مهمة محبوسة داخل ملفات ومستندات.",
    },
  },
  {
    id: "ai-product-systems",
    slug: "ai-product-systems",
    title: "AI Product Systems",
    shortTitle: "Product Systems",
    description:
      "AI-enabled systems across legal, finance, education, and analytics with product thinking beyond prototypes.",
    problem:
      "Many AI ideas stop at demos because they lack UX, deployment discipline, evaluation, and business outcome framing.",
    systemDesign:
      "Each system is scoped around a real workflow, measurable user value, interface clarity, deployment path, and iteration loop.",
    architecture: {
      summary:
        "Full-stack AI product pattern connecting user workflow, intelligence layer, and measurement.",
      nodes: [
        {
          id: "user",
          label: "User Workflow",
          role: "Defines the job-to-be-done and decision point",
        },
        {
          id: "ui",
          label: "Product Interface",
          role: "Turns AI capability into usable interaction",
        },
        {
          id: "ai",
          label: "AI Service",
          role: "Runs classification, generation, retrieval, or analysis",
        },
        { id: "data", label: "Data Layer", role: "Stores structured context and outputs" },
        { id: "measure", label: "Measurement", role: "Tracks value, usage, and quality" },
      ],
      edges: [
        { from: "user", to: "ui", label: "intent" },
        { from: "ui", to: "ai", label: "request" },
        { from: "ai", to: "data", label: "structured output" },
        { from: "data", to: "measure", label: "signals" },
      ],
    },
    inputs: ["User workflow", "Domain data", "Business rule", "Success metric"],
    outputs: ["AI feature", "Product UI", "Analytics view", "Iteration plan"],
    metrics: [
      {
        label: "Build mode",
        value: "End-to-end",
        context: "From workflow mapping to production interface",
      },
      {
        label: "Domains",
        value: "4+",
        context: "Legal, financial, educational, and analytics systems",
      },
    ],
    stack: ["Azure", "Power BI", "NLP", "TypeScript"],
    tags: ["ai products", "full-stack ai", "analytics", "product engineering"],
    difficulty: "medium",
    impactLevel: "high",
    conversionAngle: "Useful for teams that need AI shipped as a product, not a slide deck.",
    userOutput: {
      description:
        "أنظمة AI مبنية كمنتج فعلي في القانون والمالية والتعليم والتحليلات، مو مجرد ديمو سريع.",
      problem:
        "أفكار AI كثيرة توقف عند الديمو لأنها ما تربط التجربة والنشر والقياس بنتيجة تجارية واضحة.",
      systemDesign:
        "كل نظام ينربط بمسار عمل حقيقي، قيمة قابلة للقياس، واجهة واضحة، وخطة نشر وتحسين.",
      architectureSummary: "نمط منتج كامل يربط المستخدم بطبقة الذكاء والبيانات والقياس.",
      metrics: [
        {
          label: "طريقة البناء",
          value: "من البداية للنهاية",
          context: "من فهم المسار إلى واجهة قابلة للاستخدام",
        },
        { label: "المجالات", value: "4+", context: "قانونية ومالية وتعليمية وتحليلية" },
      ],
      conversionAngle: "مناسب للفرق اللي تبي AI ينشحن كمنتج، مو عرض تقديمي.",
    },
  },
]);
