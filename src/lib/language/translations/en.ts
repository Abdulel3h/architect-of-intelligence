export const enCopy = {
  meta: {
    label: "English",
    locale: "en",
    direction: "ltr",
    name: "Technical English",
  },
  nav: {
    home: "Back to homepage",
    switchLanguage: "Switch language",
    links: [
      { label: "Scanner", href: "#scanner" },
      { label: "Systems", href: "#case-studies" },
      { label: "Agents", href: "#agents" },
      { label: "Architecture", href: "#architecture-generator" },
      { label: "Contact", href: "#contact" },
    ],
  },
  home: {
    hero: {
      eyebrow: "AIO Labs / AI Infrastructure Studio",
      title: "AI infrastructure for operationally serious teams",
      body: "AIO Labs designs production AI systems, agents, RAG layers, and workflow automation for teams that need reliable intelligence inside real operations.",
      primaryCta: "Run the Opportunity Scan",
      secondaryCta: "View System Reports",
      signalLabel: "AIO Labs positioning",
      signals: [
        "Saudi-built",
        "AI Infrastructure",
        "Native systems thinking",
        "Production workflows",
      ],
      console: {
        brief: "System status",
        live: "Stable runtime",
        offer: "Build layer",
        offerValue: "AI Systems Architecture",
        domains: "System layers",
        outcome: "Outcome",
        outcomeValue: "Measurable operational intelligence",
      },
    },
    lab: {
      eyebrow: "AI Opportunity Scanner",
      title: "Identify the first AI system worth building.",
      description:
        "The scanner converts workflow context into a readiness score, a recommended system, implementation risk, and the next architecture decision.",
    },
    cases: {
      eyebrow: "System Reports",
      title: "Every case reads like an engineering brief, not a marketing card.",
      description:
        "Each report captures the problem, architecture, inputs, outputs, metrics, risks, and decision points behind a production AI system.",
    },
    agents: {
      eyebrow: "Agent Runtime",
      title: "Agents are modeled as bounded execution systems.",
      description:
        "Each agent pattern shows the input contract, reasoning boundary, output surface, guardrails, and review point required for reliable deployment.",
      tabsLabel: "Agent runtime previews",
    },
    generatorSection: {
      eyebrow: "System Architecture",
      title: "Turn business context into an executable AI system blueprint.",
      description:
        "The generator maps a use case into components, data flow, storage layers, implementation phases, risk notes, and a recommended build path.",
    },
    contact: {
      eyebrow: "Build Intake",
      title: "Send the operating context. We will shape it into a buildable system.",
      description:
        "Share the workflow or product surface you want to improve. We will identify the highest-leverage entry point and propose a practical implementation path.",
      intentLabel: "Project intent",
      urgencyLabel: "Project urgency",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      improve: "What should this AI system improve?",
      textarea: (intent: string) =>
        `Describe the ${intent.toLowerCase()} system you want to build.`,
      leadSignal: "Lead signal",
      offer: "Recommended offer",
      nextStep: "Next step",
    },
  },
  ui: {
    scanner: {
      eyebrow: "AI Opportunity Scanner",
      title: "Find the first AI system worth building",
      progressLabel: "Scanner progress",
      steps: ["Context", "Workflow", "Readiness", "Report"],
      environment: "What best describes the operating environment?",
      leverage: "Where would AI create the most leverage?",
      tools: "Where does this workflow live today?",
      hoursLost: "Hours lost weekly",
      urgency: "Urgency",
      recommendedFirstSystem: "Recommended first system",
      businessValue: "Business value",
      systemShape: "System shape",
      emailLabel: "Send me the build brief",
      emailPlaceholder: "you@company.com",
      back: "Back",
      continue: "Continue",
      generate: "Generate System Report",
      generating: "Analyzing...",
      error: "Could not generate the report right now.",
      problemLabel: "What problem or opportunity should the AI analyze?",
      problemPlaceholder:
        "Example: our sales team loses time qualifying inbound leads, responses are delayed, and we lack clear quality metrics...",
      risks: "Operational risks",
      footnote:
        "The scanner provides a deterministic operating read. The AI report layer expands it with contextual system design.",
    },
    generator: {
      eyebrow: "AI Architecture Generator",
      title: "Generate a structured AI system blueprint",
      businessType: "Business type",
      goal: "Goal",
      dataMaturity: "Data maturity",
      components: "Components",
      firstBuild: "First build",
      technicalPlan: "Technical plan",
      contextLabel: "Additional system context",
      contextPlaceholder:
        "Add tools, data sources, constraints, ownership boundaries, or current workflow details...",
      generate: "Generate AI Architecture",
      generating: "Generating architecture...",
      orchestrationFlow: "Orchestration flow",
      storageLayer: "Storage layer",
    },
    decision: {
      leadSignal: "Lead signal",
      businessMeaning: "Business meaning",
      nextStep: "Next step",
      recommendedOffer: "Recommended offer",
    },
    agents: {
      eyebrow: "Runtime Preview",
      input: "Input",
      output: "Output",
      simulatedRun: "Simulated run",
    },
    caseStudies: {
      problem: "Problem",
      systemDesign: "System design",
      discussSimilar: "Discuss a similar system",
    },
    errors: {
      notFoundTitle: "Page not found",
      notFoundBody: "The page you opened does not exist or has moved.",
      home: "Back to home",
      pageFailedTitle: "The page failed to load",
      pageFailedBody: "Something failed on our side. Refresh the page or return home.",
      retry: "Try again",
    },
    footer: "© 2026 AIO Labs / AI Systems Studio from Riyadh",
  },
  options: {
    organizations: {
      startup: "Startup or product team",
      agency: "Agency or services business",
      enterprise: "Enterprise team",
      education: "Education or training",
    },
    challenges: {
      operations: "Manual operations are slowing delivery",
      knowledge: "Knowledge is scattered across tools",
      support: "Support needs faster, trusted answers",
      sales: "Inbound leads need qualification",
      reporting: "Reporting takes too long",
    },
    urgency: {
      later: "Exploring",
      "this-quarter": "This quarter",
      now: "Now",
    },
    businessTypes: {
      agency: "Agency",
      startup: "Startup",
      enterprise: "Enterprise",
      education: "Education",
    },
    goals: {
      support: "Support",
      knowledge: "Knowledge",
      sales: "Sales",
      operations: "Operations",
      analytics: "Analytics",
    },
    dataMaturity: {
      scattered: "Scattered",
      organized: "Partially organized",
      integrated: "Integrated",
    },
  },
  proofPoints: [
    { value: "4", label: "AI systems shipped" },
    { value: "2", label: "national hackathon wins" },
    { value: "85%", label: "workflow efficiency gain" },
    { value: "KSA", label: "Saudi AI systems studio" },
  ],
  systemUserCopy: {
    "RAG Support Agent": {
      title: "RAG Support Agent",
      explanation:
        "A trusted answer layer that retrieves from approved sources instead of forcing teams to search every file.",
    },
    "Enterprise Knowledge RAG": {
      title: "Enterprise Knowledge RAG",
      explanation:
        "A private knowledge infrastructure layer that makes internal answers faster, traceable, and easier to govern.",
    },
    "Lead Qualification Agent": {
      title: "Lead Qualification Agent",
      explanation:
        "An agent that classifies inbound demand, prioritizes opportunities, and recommends the next commercial action.",
    },
    "Workflow Automation Agent": {
      title: "Workflow Automation Agent",
      explanation:
        "An execution agent that turns repeatable work into a controlled workflow with human approvals.",
    },
    "AI Analytics Copilot": {
      title: "AI Analytics Copilot",
      explanation:
        "A decision-support layer that turns reporting data into clearer signals, risks, and recommended actions.",
    },
    "AI Workflow Diagnostic": {
      title: "AI Workflow Diagnostic",
      explanation:
        "A focused diagnostic that identifies the highest-leverage workflow before implementation begins.",
    },
  },
  readiness: {
    Emerging: "Emerging",
    Promising: "Promising",
    "High-leverage": "High-leverage",
  },
  leadSignal: {
    strong: "Strong",
    medium: "Promising",
    weak: "Early",
  },
  offers: {
    "strategy-call": "Strategy call",
    "ai-diagnostic": "AI diagnostic",
    "agent-sprint": "Agent sprint",
    "rag-sprint": "RAG sprint",
    "automation-sprint": "Automation sprint",
  },
  ctas: {
    "strategy-call": "Book Strategy Call",
    "ai-diagnostic": "Run AI Diagnostic",
    "agent-sprint": "Request Agent Sprint",
    "rag-sprint": "Request RAG Plan",
    "automation-sprint": "Request Automation Plan",
  },
  impact: {
    foundational: "Foundational",
    high: "High",
    transformational: "Transformational",
  },
  difficulty: {
    low: "Low",
    medium: "Medium",
    high: "High",
  },
} as const;
