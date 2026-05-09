import { useMemo } from "react";
import type { Agent } from "@/content";
import { SurfaceCard } from "@/components/ui/surface-card";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { decideNextAction } from "@/features/conversion/decision-layer";
import { simulateAgentRun } from "../lib/runtime";
import { impactUserCopy, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";

export function AgentRuntimePreview({ agent }: { agent: Agent }) {
  const { isArabic } = useLanguage();
  const result = useMemo(() => simulateAgentRun(agent), [agent]);
  const decision = useMemo(
    () =>
      decideNextAction({
        system: agent.name,
        impactLevel: agent.impactLevel,
        difficulty: agent.difficulty,
      }),
    [agent],
  );
  const copy = isArabic ? uiCopy : uiCopyEn;
  const runtimeOutput = isArabic ? result.output.user_output : result.output.internal_output;

  return (
    <SurfaceCard className="agent-runtime-card">
      <div className="agent-runtime-header">
        <div>
          <p className="eyebrow">{copy.agents.eyebrow}</p>
          <h3>{agent.name}</h3>
          <p>{isArabic ? agent.userOutput.description : agent.description}</p>
        </div>
        <span className="difficulty-badge">
          {isArabic ? impactUserCopy[agent.impactLevel] : agent.impactLevel}
        </span>
      </div>

      <div className="io-grid">
        <div>
          <span>{copy.agents.input}</span>
          <p>{isArabic ? agent.userOutput.input : agent.input}</p>
        </div>
        <div>
          <span>{copy.agents.output}</span>
          <p>{isArabic ? agent.userOutput.output : agent.output}</p>
        </div>
      </div>

      <div className="runtime-steps">
        {result.steps.map((step, index) => (
          <div key={step.label} className="runtime-step">
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <div>
              <span>{step.label}</span>
              <p>{step.output}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="agent-simulated-output">
        <span>{copy.agents.simulatedRun}</span>
        <p>{runtimeOutput.summary}</p>
        <small>{runtimeOutput.recommendedAction}</small>
      </div>

      <DecisionPanel decision={decision} />
    </SurfaceCard>
  );
}
