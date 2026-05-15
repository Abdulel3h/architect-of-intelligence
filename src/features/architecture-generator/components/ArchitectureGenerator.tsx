import { useMemo, useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { ActionButton } from "@/components/ui/action-button";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { generateArchitecture, type ArchitectureGeneratorInput } from "../lib/generator";
import { optionCopy, optionCopyEn, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { runArchitectureGeneration, trackUserEvent } from "@/lib/ai/client";
import type { ArchitectureAiOutput } from "@/lib/ai/schemas";

const businessTypes: ArchitectureGeneratorInput["businessType"][] = [
  "agency",
  "startup",
  "enterprise",
  "education",
];
const goals: ArchitectureGeneratorInput["goal"][] = [
  "support",
  "knowledge",
  "sales",
  "operations",
  "analytics",
];
const maturities: ArchitectureGeneratorInput["dataMaturity"][] = [
  "scattered",
  "organized",
  "integrated",
];

export function ArchitectureGenerator() {
  const { isArabic, language } = useLanguage();
  const [input, setInput] = useState<ArchitectureGeneratorInput>({
    businessType: "agency",
    goal: "operations",
    dataMaturity: "scattered",
  });
  const [context, setContext] = useState("");
  const [aiArchitecture, setAiArchitecture] = useState<ArchitectureAiOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const architecture = useMemo(() => generateArchitecture(input), [input]);
  const copy = isArabic ? uiCopy : uiCopyEn;
  const options = isArabic ? optionCopy : optionCopyEn;
  const architectureOutput = isArabic
    ? architecture.output.user_output
    : architecture.output.internal_output;
  const realOutput = aiArchitecture?.output[isArabic ? "user_output" : "internal_output"];
  const view = realOutput ?? architectureOutput;

  const generate = async () => {
    setIsGenerating(true);
    try {
      const result = await runArchitectureGeneration({ ...input, context, language });
      setAiArchitecture(result);
      trackUserEvent({
        name: "architecture_generated",
        page: "/",
        properties: { goal: input.goal, dataMaturity: input.dataMaturity },
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <SurfaceCard className="architecture-generator">
      <div className="scanner-header">
        <div>
          <p className="eyebrow">{copy.generator.eyebrow}</p>
          <h3>{copy.generator.title}</h3>
        </div>
      </div>

      <div className="generator-controls">
        <SelectControl
          label={copy.generator.businessType}
          value={input.businessType}
          options={businessTypes}
          labels={options.businessTypes}
          onChange={(value) => setInput((current) => ({ ...current, businessType: value }))}
        />
        <SelectControl
          label={copy.generator.goal}
          value={input.goal}
          options={goals}
          labels={options.goals}
          onChange={(value) => setInput((current) => ({ ...current, goal: value }))}
        />
        <SelectControl
          label={copy.generator.dataMaturity}
          value={input.dataMaturity}
          options={maturities}
          labels={options.dataMaturity}
          onChange={(value) => setInput((current) => ({ ...current, dataMaturity: value }))}
        />
      </div>
      <label className="generator-context">
        {copy.generator.contextLabel}
        <textarea
          rows={4}
          value={context}
          placeholder={copy.generator.contextPlaceholder}
          onChange={(event) => setContext(event.target.value)}
        />
      </label>
      <ActionButton
        type="button"
        className="generator-submit"
        onClick={generate}
        disabled={isGenerating}
      >
        {isGenerating ? copy.generator.generating : copy.generator.generate}
      </ActionButton>

      <div className="generated-report">
        <h4>{view.title}</h4>
        <p>{view.summary}</p>

        <div className="report-columns">
          <ReportBlock title={copy.generator.components} items={view.components} />
          <ReportBlock
            title={copy.generator.orchestrationFlow}
            items={
              "orchestrationFlow" in view ? view.orchestrationFlow : architectureOutput.dataFlow
            }
          />
          <ReportBlock
            title={copy.generator.storageLayer}
            items={"storageLayer" in view ? view.storageLayer : architectureOutput.dataFlow}
          />
          <ReportBlock
            title={copy.generator.firstBuild}
            items={
              "implementationPhases" in view
                ? view.implementationPhases
                : architectureOutput.firstBuild
            }
          />
        </div>

        <DecisionPanel decision={architecture.decision} />

        <div className="flowchart-scroll" tabIndex={0}>
          <pre className="mermaid-source" aria-label={copy.generator.technicalPlan} dir="ltr">
            {view.mermaid}
          </pre>
          <span className="scroll-hint">Scroll horizontally on mobile</span>
        </div>
      </div>
    </SurfaceCard>
  );
}

function SelectControl<Option extends string>({
  label,
  value,
  options,
  labels,
  onChange,
}: {
  label: string;
  value: Option;
  options: Option[];
  labels: Record<Option, string>;
  onChange: (value: Option) => void;
}) {
  return (
    <label>
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value as Option)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {labels[option]}
          </option>
        ))}
      </select>
    </label>
  );
}

function ReportBlock({ title, items }: { title: string; items: string[] }) {
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
