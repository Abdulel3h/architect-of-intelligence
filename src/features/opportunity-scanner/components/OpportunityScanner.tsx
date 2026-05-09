import { useMemo, useState } from "react";
import { Check, ChevronLeft, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionButton, ActionLink } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { calculateScannerReport, initialScannerChoice, type ScannerChoice } from "../lib/scoring";
import { optionCopy, optionCopyEn, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";

const organizationValues = ["startup", "agency", "enterprise", "education"] as const;
const challengeValues = ["operations", "knowledge", "support", "sales", "reporting"] as const;

const tools = ["Email", "Excel", "Notion", "CRM", "PDFs", "Slack", "Database", "n8n"];

export function OpportunityScanner({ compact = false }: { compact?: boolean }) {
  const { isArabic } = useLanguage();
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<ScannerChoice>(initialScannerChoice);
  const report = useMemo(() => calculateScannerReport(choice), [choice]);
  const copy = isArabic ? uiCopy : uiCopyEn;
  const options = isArabic ? optionCopy : optionCopyEn;
  const steps = copy.scanner.steps;
  const scannerOutput = isArabic ? report.output.user_output : report.output.internal_output;

  const update = <Key extends keyof ScannerChoice>(key: Key, value: ScannerChoice[Key]) => {
    setChoice((current) => ({ ...current, [key]: value }));
  };

  const toggleTool = (tool: string) => {
    setChoice((current) => ({
      ...current,
      tools: current.tools.includes(tool)
        ? current.tools.filter((item) => item !== tool)
        : [...current.tools, tool],
    }));
  };

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const back = () => setStep((current) => Math.max(current - 1, 0));

  return (
    <SurfaceCard className={compact ? "scanner-shell compact" : "scanner-shell"}>
      <div className="scanner-header">
        <div>
          <p className="eyebrow">{copy.scanner.eyebrow}</p>
          <h3>{copy.scanner.title}</h3>
        </div>
        <div className="scanner-score">
          <span>{report.score}</span>
          <small>{scannerOutput.readiness}</small>
        </div>
      </div>

      <div className="scanner-steps" aria-label={copy.scanner.progressLabel}>
        {steps.map((label, index) => (
          <span key={label} className={index <= step ? "active" : ""}>
            {label}
          </span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="scanner-body"
        >
          {step === 0 && (
            <fieldset>
              <legend>{copy.scanner.environment}</legend>
              <div className="option-grid">
                {organizationValues.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={choice.organization === value ? "option selected" : "option"}
                    onClick={() => update("organization", value)}
                  >
                    {options.organizations[value]}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset>
              <legend>{copy.scanner.leverage}</legend>
              <div className="option-grid">
                {challengeValues.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={choice.challenge === value ? "option selected" : "option"}
                    onClick={() => update("challenge", value)}
                  >
                    {options.challenges[value]}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <div className="scanner-readiness">
              <fieldset>
                <legend>{copy.scanner.tools}</legend>
                <div className="chip-grid">
                  {tools.map((tool) => (
                    <button
                      type="button"
                      key={tool}
                      className={choice.tools.includes(tool) ? "chip selected" : "chip"}
                      onClick={() => toggleTool(tool)}
                    >
                      {choice.tools.includes(tool) && <Check size={13} />}
                      {tool}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="split-fields">
                <label>
                  {copy.scanner.hoursLost}
                  <select
                    value={choice.hours}
                    onChange={(event) => update("hours", event.target.value)}
                  >
                    <option value="0-10">0-10</option>
                    <option value="10-25">10-25</option>
                    <option value="25-50">25-50</option>
                    <option value="50+">50+</option>
                  </select>
                </label>
                <label>
                  {copy.scanner.urgency}
                  <select
                    value={choice.urgency}
                    onChange={(event) => update("urgency", event.target.value)}
                  >
                    <option value="later">{options.urgency.later}</option>
                    <option value="this-quarter">{options.urgency["this-quarter"]}</option>
                    <option value="now">{options.urgency.now}</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="report-preview">
              <div>
                <p className="report-label">{copy.scanner.recommendedFirstSystem}</p>
                <h4>{scannerOutput.recommendedSystem}</h4>
                {"systemExplanation" in scannerOutput && <p>{scannerOutput.systemExplanation}</p>}
                <p>{scannerOutput.cta}</p>
              </div>
              <DecisionPanel decision={report.decision} />
              <div className="report-columns">
                <ReportList title={copy.scanner.businessValue} items={scannerOutput.businessValue} />
                <ReportList title={copy.scanner.systemShape} items={scannerOutput.architecture} />
              </div>
              <label className="lead-field">
                {copy.scanner.emailLabel}
                <input
                  type="email"
                  value={choice.email}
                  placeholder={copy.scanner.emailPlaceholder}
                  onChange={(event) => update("email", event.target.value)}
                />
              </label>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="scanner-actions">
        <button type="button" className="scanner-back" onClick={back} disabled={step === 0}>
          <ChevronLeft size={16} />
          {copy.scanner.back}
        </button>
        {step < steps.length - 1 ? (
          <ActionButton type="button" onClick={next}>
            {copy.scanner.continue}
          </ActionButton>
        ) : (
          <ActionLink href={report.decision.ctaHref} variant="primary">
            {isArabic ? report.decision.output.user_output.ctaLabel : report.decision.output.internal_output.ctaLabel}
          </ActionLink>
        )}
      </div>

      <div className="scanner-footnote">
        <Sparkles size={14} />
        {copy.scanner.footnote}
      </div>
    </SurfaceCard>
  );
}

function ReportList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="report-label">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
