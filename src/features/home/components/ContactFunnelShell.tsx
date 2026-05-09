import { useMemo, useState } from "react";
import { ActionButton } from "@/components/ui/action-button";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { decideNextAction } from "@/features/conversion/decision-layer";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

const intents = ["AI Agent", "RAG System", "Automation", "Workshop", "Hiring"];
const urgencyOptions = ["Exploring", "This quarter", "Now"];
const intentLabels: Record<string, string> = {
  "AI Agent": "وكيل AI",
  "RAG System": "نظام RAG",
  Automation: "أتمتة",
  Workshop: "ورشة",
  Hiring: "تعاون هندسي",
};
const urgencyLabels: Record<string, string> = {
  Exploring: "نستكشف",
  "This quarter": "هذا الربع",
  Now: "الآن",
};
const intentLabelsEn: Record<string, string> = {
  "AI Agent": "AI Agent",
  "RAG System": "RAG System",
  Automation: "Automation",
  Workshop: "Workshop",
  Hiring: "Hiring",
};
const urgencyLabelsEn: Record<string, string> = {
  Exploring: "Exploring",
  "This quarter": "This quarter",
  Now: "Now",
};

const intentToSystem: Record<string, string> = {
  "AI Agent": "AI Agent System",
  "RAG System": "RAG Knowledge System",
  Automation: "Workflow Automation System",
  Workshop: "AI Diagnostic",
  Hiring: "AI Product Engineering",
};

export function ContactFunnelShell() {
  const { language, isArabic } = useLanguage();
  const [intent, setIntent] = useState(intents[0]);
  const [urgency, setUrgency] = useState(urgencyOptions[1]);
  const decision = useMemo(
    () =>
      decideNextAction({
        system: intentToSystem[intent],
        urgency: urgency === "Now" ? "now" : urgency === "This quarter" ? "this-quarter" : "later",
      }),
    [intent, urgency],
  );
  const copy = homeCopy[language].contact;
  const localizedIntentLabels = isArabic ? intentLabels : intentLabelsEn;
  const localizedUrgencyLabels = isArabic ? urgencyLabels : urgencyLabelsEn;
  const decisionOutput = isArabic ? decision.output.user_output : decision.output.internal_output;

  return (
    <Section
      id="contact"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      align="center"
      className="contact-section"
    >
      <SurfaceCard className="contact-funnel">
        <div className="intent-grid" role="tablist" aria-label={copy.intentLabel}>
          {intents.map((item) => (
            <button
              key={item}
              type="button"
              className={intent === item ? "active" : ""}
              onClick={() => setIntent(item)}
            >
              {localizedIntentLabels[item]}
            </button>
          ))}
        </div>
        <div className="intent-grid urgency-grid" role="tablist" aria-label={copy.urgencyLabel}>
          {urgencyOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={urgency === item ? "active" : ""}
              onClick={() => setUrgency(item)}
            >
              {localizedUrgencyLabels[item]}
            </button>
          ))}
        </div>
        <div className="contact-fields">
          <label>
            {copy.name}
            <input type="text" placeholder={copy.namePlaceholder} />
          </label>
          <label>
            {copy.email}
            <input type="email" placeholder="you@company.com" />
          </label>
          <label className="wide">
            {copy.improve}
            <textarea
              rows={4}
              placeholder={copy.textarea(localizedIntentLabels[intent])}
            />
          </label>
        </div>
        <div className="decision-panel">
          <div>
            <span>{copy.leadSignal}</span>
            <strong>{decisionOutput.leadStrength}</strong>
          </div>
          <div>
            <span>{copy.offer}</span>
            <p>{"offer" in decisionOutput ? decisionOutput.offer : decision.offer}</p>
          </div>
          <div>
            <span>{copy.nextStep}</span>
            <p>{decisionOutput.nextStep}</p>
          </div>
        </div>
        <ActionButton type="button" className="contact-submit">
          {decisionOutput.ctaLabel}
        </ActionButton>
      </SurfaceCard>
    </Section>
  );
}
