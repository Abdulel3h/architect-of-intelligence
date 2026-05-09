import { useMemo, useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { generateArchitecture, type ArchitectureGeneratorInput } from "../lib/generator";
import { optionCopy, optionCopyEn, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";

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
  const { isArabic } = useLanguage();
  const [input, setInput] = useState<ArchitectureGeneratorInput>({
    businessType: "agency",
    goal: "operations",
    dataMaturity: "scattered",
  });

  const architecture = useMemo(() => generateArchitecture(input), [input]);
  const copy = isArabic ? uiCopy : uiCopyEn;
  const options = isArabic ? optionCopy : optionCopyEn;
  const architectureOutput = isArabic ? architecture.output.user_output : architecture.output.internal_output;

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

      <div className="generated-report">
        <h4>{architectureOutput.title}</h4>
        <p>{architectureOutput.summary}</p>

        <div className="report-columns">
          <ReportBlock title={copy.generator.components} items={architectureOutput.components} />
          <ReportBlock title={copy.generator.firstBuild} items={architectureOutput.firstBuild} />
        </div>

        <DecisionPanel decision={architecture.decision} />

        <pre className="mermaid-source" aria-label={copy.generator.technicalPlan} dir="ltr">
          {architecture.output.internal_output.mermaid}
        </pre>
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
