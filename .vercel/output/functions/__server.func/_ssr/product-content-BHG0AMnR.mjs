import { a as arrayType, o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
const ImpactLevelSchema = enumType(["foundational", "high", "transformational"]);
const DifficultySchema = enumType(["low", "medium", "high"]);
const MetricSchema = objectType({
  label: stringType().min(2),
  value: stringType().min(1),
  context: stringType().min(8)
});
const LocalizedMetricSchema = objectType({
  label: stringType().min(2),
  value: stringType().min(1),
  context: stringType().min(8)
});
const ArchitectureNodeSchema = objectType({
  id: stringType().min(2),
  label: stringType().min(2),
  role: stringType().min(6)
});
const ArchitectureEdgeSchema = objectType({
  from: stringType().min(2),
  to: stringType().min(2),
  label: stringType().min(2)
});
const ArchitectureSchema = objectType({
  summary: stringType().min(20),
  nodes: arrayType(ArchitectureNodeSchema).min(3),
  edges: arrayType(ArchitectureEdgeSchema).min(2)
});
const CaseStudySchema = objectType({
  id: stringType().min(2),
  slug: stringType().min(2),
  title: stringType().min(4),
  shortTitle: stringType().min(2),
  description: stringType().min(30),
  problem: stringType().min(30),
  systemDesign: stringType().min(30),
  architecture: ArchitectureSchema,
  inputs: arrayType(stringType().min(2)).min(1),
  outputs: arrayType(stringType().min(2)).min(1),
  metrics: arrayType(MetricSchema).min(1),
  stack: arrayType(stringType().min(2)).min(2),
  tags: arrayType(stringType().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema,
  conversionAngle: stringType().min(12),
  userOutput: objectType({
    description: stringType().min(20),
    problem: stringType().min(20),
    systemDesign: stringType().min(20),
    architectureSummary: stringType().min(20),
    metrics: arrayType(LocalizedMetricSchema).min(1),
    conversionAngle: stringType().min(8)
  })
});
const AgentStepSchema = objectType({
  label: stringType().min(2),
  detail: stringType().min(8)
});
const AgentSchema = objectType({
  id: stringType().min(2),
  slug: stringType().min(2),
  name: stringType().min(4),
  description: stringType().min(30),
  problem: stringType().min(25),
  input: stringType().min(8),
  process: arrayType(AgentStepSchema).min(3),
  output: stringType().min(8),
  guardrails: arrayType(stringType().min(6)).min(1),
  metrics: arrayType(MetricSchema).min(1),
  tags: arrayType(stringType().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema,
  demoSeed: stringType().min(10),
  userOutput: objectType({
    description: stringType().min(20),
    problem: stringType().min(20),
    input: stringType().min(8),
    output: stringType().min(8),
    metrics: arrayType(LocalizedMetricSchema).min(1)
  })
});
objectType({
  id: stringType().min(2),
  slug: stringType().min(2),
  title: stringType().min(4),
  description: stringType().min(30),
  problem: stringType().min(25),
  offer: stringType().min(20),
  deliverables: arrayType(stringType().min(4)).min(2),
  bestFor: arrayType(stringType().min(4)).min(1),
  metrics: arrayType(MetricSchema).min(1),
  tags: arrayType(stringType().min(2)).min(3),
  difficulty: DifficultySchema,
  impactLevel: ImpactLevelSchema
});
function defineCaseStudies(items) {
  return arrayType(CaseStudySchema).parse(items);
}
function defineAgents(items) {
  return arrayType(AgentSchema).parse(items);
}
export {
  defineCaseStudies as a,
  defineAgents as d
};
