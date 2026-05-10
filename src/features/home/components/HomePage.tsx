import { lazy, Suspense } from "react";
import { AILabPreview } from "./AILabPreview";
import { ContactFunnelShell } from "./ContactFunnelShell";
import { HomeHero } from "./HomeHero";
import { ProofStrip } from "./ProofStrip";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

const AgentRuntimeEngine = lazy(() =>
  import("@/features/agents/components/AgentRuntimeEngine").then((m) => ({
    default: m.AgentRuntimeEngine,
  })),
);
const ArchitectureGenerator = lazy(() =>
  import("@/features/architecture-generator/components/ArchitectureGenerator").then((m) => ({
    default: m.ArchitectureGenerator,
  })),
);
const CaseStudyEngine = lazy(() =>
  import("@/features/case-studies/components/CaseStudyEngine").then((m) => ({
    default: m.CaseStudyEngine,
  })),
);

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

export function HomePage() {
  const { language } = useLanguage();
  const copy = homeCopy[language].generatorSection;

  return (
    <>
      <HomeHero />
      <ProofStrip />
      <AILabPreview />
      <Suspense fallback={<LoadingFallback />}>
        <CaseStudyEngine />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AgentRuntimeEngine />
      </Suspense>
      <Section
        id="architecture-generator"
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      >
        <Suspense fallback={<LoadingFallback />}>
          <ArchitectureGenerator />
        </Suspense>
      </Section>
      <ContactFunnelShell />
    </>
  );
}
