import { useMemo, useState } from "react";
import type { Agent } from "@/content";
import { SurfaceCard } from "@/components/ui/surface-card";
import { ActionButton } from "@/components/ui/action-button";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { decideNextAction } from "@/features/conversion/decision-layer";
import { simulateAgentRun } from "../lib/runtime";
import { impactUserCopy, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { runAgentRuntime, trackUserEvent } from "@/lib/ai/client";
import type { AgentRunOutput } from "@/lib/ai/schemas";

export function AgentRuntimePreview({ agent }: { agent: Agent }) {
  const { isArabic } = useLanguage();
  const [runtimeInput, setRuntimeInput] = useState("");
  const [aiResult, setAiResult] = useState<AgentRunOutput | null>(null);
  const [isRunning, setIsRunning] = useState(false);
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
  const runtimeOutput =
    aiResult?.output[isArabic ? "user_output" : "internal_output"] ??
    (isArabic ? result.output.user_output : result.output.internal_output);
  const runtimeSteps = aiResult ? runtimeOutput.steps : result.steps;

  const run = async () => {
    setIsRunning(true);
    try {
      const response = await runAgentRuntime({
        agentId: agent.id,
        agentName: agent.name,
        input: runtimeInput || agent.input,
      });
      setAiResult(response);
      trackUserEvent({
        name: "agent_runtime_generated",
        page: "/",
        properties: { agentId: agent.id },
      });
    } finally {
      setIsRunning(false);
    }
  };

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

      <div className="agent-live-input">
        <label>
          {isArabic ? "اختبر الوكيل على مدخل حقيقي" : "Run this agent on real input"}
          <textarea
            rows={4}
            value={runtimeInput}
            placeholder={
              isArabic
                ? "اكتب رسالة عميل، سؤال دعم، أو مهمة تشغيلية تحتاج قرار واضح..."
                : "Paste a customer message, support question, or workflow task..."
            }
            onChange={(event) => setRuntimeInput(event.target.value)}
          />
        </label>
        <ActionButton type="button" onClick={run} disabled={isRunning}>
          {isRunning
            ? isArabic
              ? "الوكيل يعالج..."
              : "Agent running..."
            : isArabic
              ? "شغّل المسار"
              : "Run agent"}
        </ActionButton>
      </div>

      <div className="runtime-steps">
        {runtimeSteps.map((step, index) => (
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
