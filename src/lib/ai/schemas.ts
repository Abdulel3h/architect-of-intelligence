import { z } from "zod";

const cleanString = (min: number, max: number) => z.string().trim().min(min).max(max);

export const leadSchema = z
  .object({
    email: z.string().trim().email().optional().or(z.literal("")),
    intent: cleanString(2, 240),
    urgency: z.enum(["later", "this-quarter", "now"]).default("this-quarter"),
    companyType: cleanString(2, 80),
    aiMaturity: z.enum(["emerging", "promising", "high-leverage"]).default("emerging"),
    source: cleanString(2, 80).default("aio-labs-web"),
  })
  .strict();

export const scannerInputSchema = z
  .object({
    problem: cleanString(10, 2400),
    organization: cleanString(2, 80),
    challenge: cleanString(2, 80),
    tools: z.array(cleanString(1, 40)).max(16),
    hours: cleanString(1, 24),
    urgency: z.enum(["later", "this-quarter", "now"]),
    email: z.string().trim().email().optional().or(z.literal("")),
    language: z.enum(["ar", "en"]).optional().default("ar"),
    source: cleanString(2, 80).default("opportunity-scanner"),
  })
  .strict();

export const scannerOutputSchema = z
  .object({
    score: z.number().min(0).max(100),
    recommendedSystem: cleanString(2, 160),
    cta: cleanString(2, 200),
    lead: leadSchema,
    output: z
      .object({
        internal_output: z
          .object({
            opportunityAnalysis: cleanString(10, 1600),
            recommendedSystem: cleanString(2, 160),
            roiEstimate: cleanString(2, 800),
            risks: z.array(cleanString(2, 400)).min(1).max(8),
            suggestedArchitecture: z.array(cleanString(2, 400)).min(1).max(10),
            nextAction: cleanString(2, 400),
            readiness: cleanString(2, 80),
          })
          .strict(),
        user_output: z
          .object({
            opportunityAnalysis: cleanString(10, 1600),
            recommendedSystem: cleanString(2, 160),
            roiEstimate: cleanString(2, 800),
            risks: z.array(cleanString(2, 400)).min(1).max(8),
            suggestedArchitecture: z.array(cleanString(2, 400)).min(1).max(10),
            nextAction: cleanString(2, 400),
            readiness: cleanString(2, 80),
          })
          .strict(),
      })
      .strict(),
    reportHtml: z.string().max(24_000).default(""),
    sessionId: z.string().uuid(),
  })
  .strict();

export const architectureInputSchema = z
  .object({
    businessType: z.enum(["agency", "startup", "enterprise", "education"]),
    goal: z.enum(["support", "knowledge", "sales", "operations", "analytics"]),
    dataMaturity: z.enum(["scattered", "organized", "integrated"]),
    context: z.string().trim().max(1800).optional().default(""),
    language: z.enum(["ar", "en"]).optional().default("ar"),
  })
  .strict();

export const architectureOutputSchema = z
  .object({
    title: cleanString(2, 180),
    summary: cleanString(10, 1600),
    components: z.array(cleanString(2, 220)).min(1).max(12),
    orchestrationFlow: z.array(cleanString(2, 320)).min(1).max(12),
    storageLayer: z.array(cleanString(2, 220)).min(1).max(10),
    agents: z.array(cleanString(2, 180)).min(1).max(8),
    integrations: z.array(cleanString(2, 180)).min(1).max(10),
    implementationPhases: z.array(cleanString(2, 260)).min(1).max(8),
    risks: z.array(cleanString(2, 320)).min(1).max(8),
    mermaid: cleanString(10, 2200),
    output: z
      .object({
        internal_output: z
          .object({
            title: cleanString(2, 180),
            summary: cleanString(10, 1600),
            components: z.array(cleanString(2, 220)).min(1).max(12),
            orchestrationFlow: z.array(cleanString(2, 320)).min(1).max(12),
            storageLayer: z.array(cleanString(2, 220)).min(1).max(10),
            agents: z.array(cleanString(2, 180)).min(1).max(8),
            integrations: z.array(cleanString(2, 180)).min(1).max(10),
            implementationPhases: z.array(cleanString(2, 260)).min(1).max(8),
            risks: z.array(cleanString(2, 320)).min(1).max(8),
            mermaid: cleanString(10, 2200),
          })
          .strict(),
        user_output: z
          .object({
            title: cleanString(2, 180),
            summary: cleanString(10, 1600),
            components: z.array(cleanString(2, 220)).min(1).max(12),
            orchestrationFlow: z.array(cleanString(2, 320)).min(1).max(12),
            storageLayer: z.array(cleanString(2, 220)).min(1).max(10),
            agents: z.array(cleanString(2, 180)).min(1).max(8),
            integrations: z.array(cleanString(2, 180)).min(1).max(10),
            implementationPhases: z.array(cleanString(2, 260)).min(1).max(8),
            risks: z.array(cleanString(2, 320)).min(1).max(8),
            mermaid: cleanString(10, 2200),
          })
          .strict(),
      })
      .strict(),
  })
  .strict();

export const agentRunInputSchema = z
  .object({
    agentId: cleanString(2, 80),
    agentName: cleanString(2, 120),
    input: cleanString(4, 1800),
  })
  .strict();

const runtimeStepSchema = z
  .object({
    label: cleanString(2, 120),
    status: z.literal("complete"),
    output: cleanString(2, 520),
  })
  .strict();

export const agentRunOutputSchema = z
  .object({
    summary: cleanString(5, 900),
    internalReasoning: cleanString(10, 1200),
    steps: z.array(runtimeStepSchema).min(1).max(6),
    recommendedAction: cleanString(5, 700),
    output: z
      .object({
        internal_output: z
          .object({
            summary: cleanString(5, 900),
            reasoning: cleanString(10, 1200),
            steps: z.array(runtimeStepSchema).min(1).max(6),
            recommendedAction: cleanString(5, 700),
          })
          .strict(),
        user_output: z
          .object({
            summary: cleanString(5, 900),
            steps: z.array(runtimeStepSchema).min(1).max(6),
            recommendedAction: cleanString(5, 700),
          })
          .strict(),
      })
      .strict(),
  })
  .strict();

export const userEventSchema = z
  .object({
    name: cleanString(2, 120),
    page: cleanString(1, 240),
    properties: z.record(z.string(), z.unknown()).optional().default({}),
    source: cleanString(2, 80).default("aio-labs-web"),
  })
  .strict();

export type ScannerInput = z.infer<typeof scannerInputSchema>;
export type ScannerAiOutput = z.infer<typeof scannerOutputSchema>;
export type ArchitectureAiInput = z.infer<typeof architectureInputSchema>;
export type ArchitectureAiOutput = z.infer<typeof architectureOutputSchema>;
export type AgentRunInput = z.infer<typeof agentRunInputSchema>;
export type AgentRunOutput = z.infer<typeof agentRunOutputSchema>;
export type UserEventInput = z.infer<typeof userEventSchema>;
