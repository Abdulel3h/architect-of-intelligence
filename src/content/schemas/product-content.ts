import { z } from "zod";

export const ImpactLevelSchema = z.enum(["foundational", "high", "transformational"]);
export const DifficultySchema = z.enum(["low", "medium", "high"]);

export const MetricSchema = z.object({
  label: z.string().min(2),
  value: z.string().min(1),
  context: z.string().min(8),
});

export const LocalizedMetricSchema = z.object({
  label: z.string().min(2),
  value: z.string().min(1),
  context: z.string().min(8),
});

export const ArchitectureNodeSchema = z.object({
  id: z.string().min(2),
  label: z.string().min(2),
  role: z.string().min(6),
});

export const ArchitectureEdgeSchema = z.object({
  from: z.string().min(2),
  to: z.string().min(2),
  label: z.string().min(2),
});

export const ArchitectureSchema = z.object({
  summary: z.string().min(20),
  nodes: z.array(ArchitectureNodeSchema).min(3),
  edges: z.array(ArchitectureEdgeSchema).min(2),
});

export const CaseStudySchema = z.object({
  id: z.string().min(2),
  slug: z.string().min(2),
  title: z.string().min(4),
  shortTitle: z.string().min(2),
  description: z.string().min(30),
  problem: z.string().min(30),
  systemDesign: z.string().min(30),
  architecture: ArchitectureSchema,
  inputs: z.array(z.string().min(2)).min(1),
  outputs: z.array(z.string().min(2)).min(1),
  metrics: z.array(MetricSchema).min(1),
  stack: z.array(z.string().min(2)).min(2),
  tags: z.array(z.string().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema,
  conversionAngle: z.string().min(12),
  userOutput: z.object({
    description: z.string().min(20),
    problem: z.string().min(20),
    systemDesign: z.string().min(20),
    architectureSummary: z.string().min(20),
    metrics: z.array(LocalizedMetricSchema).min(1),
    conversionAngle: z.string().min(8),
  }),
});

export const AgentStepSchema = z.object({
  label: z.string().min(2),
  detail: z.string().min(8),
});

export const AgentSchema = z.object({
  id: z.string().min(2),
  slug: z.string().min(2),
  name: z.string().min(4),
  description: z.string().min(30),
  problem: z.string().min(25),
  input: z.string().min(8),
  process: z.array(AgentStepSchema).min(3),
  output: z.string().min(8),
  guardrails: z.array(z.string().min(6)).min(1),
  metrics: z.array(MetricSchema).min(1),
  tags: z.array(z.string().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema,
  demoSeed: z.string().min(10),
  userOutput: z.object({
    description: z.string().min(20),
    problem: z.string().min(20),
    input: z.string().min(8),
    output: z.string().min(8),
    metrics: z.array(LocalizedMetricSchema).min(1),
  }),
});

export const ServiceSchema = z.object({
  id: z.string().min(2),
  slug: z.string().min(2),
  title: z.string().min(4),
  description: z.string().min(30),
  problem: z.string().min(25),
  offer: z.string().min(20),
  deliverables: z.array(z.string().min(4)).min(2),
  bestFor: z.array(z.string().min(4)).min(1),
  metrics: z.array(MetricSchema).min(1),
  tags: z.array(z.string().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema,
});

export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type Agent = z.infer<typeof AgentSchema>;
export type Service = z.infer<typeof ServiceSchema>;

export function defineCaseStudies(items: CaseStudy[]) {
  return z.array(CaseStudySchema).parse(items);
}

export function defineAgents(items: Agent[]) {
  return z.array(AgentSchema).parse(items);
}

export function defineServices(items: Service[]) {
  return z.array(ServiceSchema).parse(items);
}
