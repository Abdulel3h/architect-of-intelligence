import { useMemo, useState } from "react";
import { ActionButton } from "@/components/ui/action-button";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { decideNextAction } from "@/features/conversion/decision-layer";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

const intents = ["AI Agent", "RAG System", "Automation", "Workshop", "Hiring"];
const urgencyOptions = ["Exploring", "This quarter", "Now"];

const intentLabels = {
  ar: {
    "AI Agent": "وكيل AI",
    "RAG System": "نظام RAG",
    Automation: "أتمتة",
    Workshop: "تشخيص",
    Hiring: "تعاون هندسي",
  },
  en: {
    "AI Agent": "AI Agent",
    "RAG System": "RAG System",
    Automation: "Automation",
    Workshop: "Diagnostic",
    Hiring: "Engineering Partnership",
  },
} as const;

const urgencyLabels = {
  ar: {
    Exploring: "نستكشف بهدوء",
    "This quarter": "هذا الربع",
    Now: "نبي نتحرك الحين",
  },
  en: {
    Exploring: "Exploring",
    "This quarter": "This quarter",
    Now: "Now",
  },
} as const;

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
  const localizedIntentLabels = intentLabels[language];
  const localizedUrgencyLabels = urgencyLabels[language];
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
              {localizedIntentLabels[item as keyof typeof localizedIntentLabels]}
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
              {localizedUrgencyLabels[item as keyof typeof localizedUrgencyLabels]}
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
              placeholder={copy.textarea(
                localizedIntentLabels[intent as keyof typeof localizedIntentLabels],
              )}
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
