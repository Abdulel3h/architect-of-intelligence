import { AILabPreview } from "./AILabPreview";
import { ContactFunnelShell } from "./ContactFunnelShell";
import { HomeHero } from "./HomeHero";
import { ProofStrip } from "./ProofStrip";
import { AgentRuntimeEngine } from "@/features/agents/components/AgentRuntimeEngine";
import { ArchitectureGenerator } from "@/features/architecture-generator/components/ArchitectureGenerator";
import { CaseStudyEngine } from "@/features/case-studies/components/CaseStudyEngine";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function HomePage() {
  const { language } = useLanguage();
  const copy = homeCopy[language].generatorSection;

  return (
    <>
      <HomeHero />
      <ProofStrip />
      <AILabPreview />
      <CaseStudyEngine />
      <AgentRuntimeEngine />
      <Section
        id="architecture-generator"
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      >
        <ArchitectureGenerator />
      </Section>
      <ContactFunnelShell />
    </>
  );
}
