import type { Decision } from "./decision-layer";
import { ActionLink } from "@/components/ui/action-button";
import { uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";

export function DecisionPanel({ decision }: { decision: Decision }) {
  const { isArabic } = useLanguage();
  const copy = isArabic ? uiCopy : uiCopyEn;
  const output = isArabic ? decision.output.user_output : decision.output.internal_output;

  return (
    <div className="decision-panel">
      <div>
        <span>{copy.decision.leadSignal}</span>
        <strong>{output.leadStrength}</strong>
      </div>
      <div>
        <span>{copy.decision.businessMeaning}</span>
        <p>{output.businessMeaning}</p>
      </div>
      <div>
        <span>{copy.decision.nextStep}</span>
        <p>{output.nextStep}</p>
      </div>
      <ActionLink href={decision.ctaHref} variant="primary">
        {output.ctaLabel}
      </ActionLink>
    </div>
  );
}
