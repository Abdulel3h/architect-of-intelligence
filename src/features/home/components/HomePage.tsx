import { lazy, Suspense } from "react";
import { HeroSection } from "./HeroSection";
import { ProofStrip } from "./ProofStrip";

const AILabPreview = lazy(() =>
  import("./AILabPreview").then((m) => ({
    default: m.AILabPreview,
  })),
);
const AgentRuntimeEngine = lazy(() =>
  import("@/features/agents/components/AgentRuntimeEngine").then((m) => ({
    default: m.AgentRuntimeEngine,
  })),
);
const ArchitectureGeneratorSection = lazy(() =>
  import("./ArchitectureGeneratorSection").then((m) => ({
    default: m.ArchitectureGeneratorSection,
  })),
);
const CaseStudyEngine = lazy(() =>
  import("@/features/case-studies/components/CaseStudyEngine").then((m) => ({
    default: m.CaseStudyEngine,
  })),
);
const ContactFunnelShell = lazy(() =>
  import("./ContactFunnelShell").then((m) => ({
    default: m.ContactFunnelShell,
  })),
);

function LoadingFallback() {
  return <div className="section-loading" aria-hidden="true" />;
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <Suspense fallback={<LoadingFallback />}>
        <AILabPreview />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CaseStudyEngine />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AgentRuntimeEngine />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ArchitectureGeneratorSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactFunnelShell />
      </Suspense>
    </>
  );
}
