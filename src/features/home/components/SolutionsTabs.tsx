import { Bot, CheckCircle2, Database, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ActionButton } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { openLeadCaptureModal } from "@/lib/lead-capture";

const solutions = [
  {
    id: "agents",
    label: "Agents",
    eyebrow: "Bounded agent systems",
    title: "Deploy agents that execute inside clear operating limits.",
    description:
      "For sales, support, operations, and knowledge work where the system must classify, decide, draft, route, or escalate without becoming a black box.",
    icon: Bot,
    sprint: "MVP Build",
    proof: ["Human approval gates", "Tool-specific permissions", "Audit-ready outputs"],
    metrics: [
      ["-45%", "manual routing"],
      ["3x", "faster triage"],
      ["24/7", "first response"],
    ],
    flow: `flowchart LR
  Intake["Request"] --> Classifier["Intent + risk classifier"]
  Classifier --> Agent["Bounded agent runtime"]
  Agent --> Review["Human review gate"]
  Review --> Action["Approved action + metrics"]`,
  },
  {
    id: "rag",
    label: "RAG",
    eyebrow: "Trusted knowledge layers",
    title: "Give teams source-grounded answers from approved knowledge.",
    description:
      "For internal policies, technical libraries, customer support, and regulated knowledge where retrieval quality and source traceability matter.",
    icon: Database,
    sprint: "Discovery Sprint",
    proof: ["Private indexes", "Source citations", "Freshness controls"],
    metrics: [
      ["70%", "fewer repeated questions"],
      ["<10s", "answer discovery"],
      ["100%", "source-linked responses"],
    ],
    flow: `flowchart LR
  Docs["Approved documents"] --> Index["Chunk + index"]
  Index --> Retrieve["Hybrid retrieval"]
  Retrieve --> Answer["Grounded answer"]
  Answer --> Feedback["Feedback + quality loop"]`,
  },
  {
    id: "workflows",
    label: "Workflows",
    eyebrow: "Automation with governance",
    title: "Turn repetitive handoffs into measured AI workflows.",
    description:
      "For recurring operations, reporting, onboarding, and cross-tool work where speed matters but approvals, logs, and ownership cannot be skipped.",
    icon: Workflow,
    sprint: "Enterprise Agent",
    proof: ["Approval checkpoints", "SLA dashboards", "Exception handling"],
    metrics: [
      ["85%", "less manual effort"],
      ["2w", "first workflow pilot"],
      ["1", "owner per decision"],
    ],
    flow: `flowchart LR
  Trigger["Business trigger"] --> Orchestrate["AI workflow orchestration"]
  Orchestrate --> Systems["CRM / docs / data tools"]
  Systems --> Approval["Approval checkpoint"]
  Approval --> Report["Outcome + SLA report"]`,
  },
] as const;

export function SolutionsTabs() {
  return (
    <Section
      id="solutions"
      eyebrow="Solutions"
      title="One system surface. Three ways to create operational leverage."
      description="Instead of repeating similar sections, choose the AI build path that matches the business problem: agents, RAG, or governed workflows."
      className="solutions-section"
    >
      <Tabs defaultValue={solutions[0].id} className="solutions-tabs">
        <TabsList className="solutions-tab-list" aria-label="AI solution types">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <TabsTrigger key={solution.id} value={solution.id} className="solutions-tab-trigger">
                <Icon size={17} aria-hidden="true" />
                {solution.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <TabsContent key={solution.id} value={solution.id} className="solutions-tab-content">
              <SurfaceCard className="solution-panel">
                <motion.div
                  className="solution-copy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="solution-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <p className="eyebrow">{solution.eyebrow}</p>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <div className="solution-proof-list">
                    {solution.proof.map((item) => (
                      <span key={item}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <ActionButton
                    type="button"
                    className="solution-cta"
                    onClick={() =>
                      openLeadCaptureModal({
                        source: `solution-${solution.id}`,
                        sprint: solution.sprint,
                      })
                    }
                  >
                    Scope this sprint
                  </ActionButton>
                </motion.div>

                <div className="solution-system">
                  <div className="solution-system-header">
                    <span>
                      <Layers3 size={15} aria-hidden="true" />
                      System preview
                    </span>
                    <ShieldCheck size={17} aria-hidden="true" />
                  </div>

                  <div className="solution-metric-grid">
                    {solution.metrics.map(([value, label]) => (
                      <div key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flowchart-scroll" tabIndex={0}>
                    <pre
                      className="solution-flowchart"
                      aria-label={`${solution.label} flowchart`}
                      dir="ltr"
                    >
                      {solution.flow}
                    </pre>
                    <span className="scroll-hint">Scroll horizontally on mobile</span>
                  </div>
                </div>
              </SurfaceCard>
            </TabsContent>
          );
        })}
      </Tabs>
    </Section>
  );
}
