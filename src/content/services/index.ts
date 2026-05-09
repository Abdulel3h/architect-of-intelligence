import { defineServices } from "../schemas/product-content";

export const services = defineServices([
  {
    id: "ai-agent-systems",
    slug: "ai-agent-systems",
    title: "AI Agent Systems",
    description:
      "Design and build specialized agents for lead qualification, research, operations, support, and internal workflows.",
    problem:
      "Teams want AI leverage but default to generic chatbots that do not match real workflows.",
    offer:
      "A focused agent system designed around one measurable workflow and clear human approval points.",
    deliverables: ["Workflow map", "Agent specification", "Prototype", "Evaluation plan"],
    bestFor: ["Agencies", "operations teams", "AI-first startups"],
    metrics: [
      {
        label: "First outcome",
        value: "30 days",
        context: "Designed for a narrow measurable first build",
      },
    ],
    tags: ["ai agents", "automation", "workflow design"],
    difficulty: "high",
    impactLevel: "transformational",
  },
  {
    id: "rag-systems",
    slug: "rag-systems",
    title: "RAG Knowledge Systems",
    description:
      "Build private knowledge systems that answer from trusted sources with citations, access control, and feedback loops.",
    problem: "Important knowledge exists, but teams cannot retrieve or reuse it reliably.",
    offer: "A retrieval architecture and interface for grounded internal answers.",
    deliverables: ["Knowledge audit", "RAG architecture", "Answer UI", "Quality dashboard"],
    bestFor: ["Support teams", "education", "technical teams"],
    metrics: [
      {
        label: "Trust model",
        value: "Cited",
        context: "Source visibility is built into the answer experience",
      },
    ],
    tags: ["rag", "knowledge", "semantic search"],
    difficulty: "medium",
    impactLevel: "high",
  },
]);
