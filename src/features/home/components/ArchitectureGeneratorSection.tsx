import { lazy, Suspense } from "react";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

const ArchitectureGenerator = lazy(() =>
  import("@/features/architecture-generator/components/ArchitectureGenerator").then((m) => ({
    default: m.ArchitectureGenerator,
  })),
);

function SectionFallback() {
  return <div className="section-loading" aria-hidden="true" />;
}

export function ArchitectureGeneratorSection() {
  const { language } = useLanguage();
  const copy = homeCopy[language].generatorSection;

  return (
    <Section
      id="architecture-generator"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <Suspense fallback={<SectionFallback />}>
        <ArchitectureGenerator />
      </Suspense>
    </Section>
  );
}
