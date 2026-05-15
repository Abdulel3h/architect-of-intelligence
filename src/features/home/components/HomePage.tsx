import { lazy, Suspense } from "react";
import { HeroSection } from "./HeroSection";
import { ProofStrip } from "./ProofStrip";

const SolutionsTabs = lazy(() =>
  import("./SolutionsTabs").then((module) => ({
    default: module.SolutionsTabs,
  })),
);

const PricingSection = lazy(() =>
  import("./PricingSection").then((module) => ({
    default: module.PricingSection,
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
        <SolutionsTabs />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <PricingSection />
      </Suspense>
    </>
  );
}
