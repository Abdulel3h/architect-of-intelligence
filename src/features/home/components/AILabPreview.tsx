import { labTools } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { OpportunityScanner } from "@/features/opportunity-scanner/components/OpportunityScanner";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function AILabPreview() {
  const { language } = useLanguage();
  const copy = homeCopy[language].lab;

  return (
    <Section
      id="scanner"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="lab-section"
    >
      <div className="scanner-focus-layout">
        <OpportunityScanner compact />
      </div>
      <div className="lab-tool-grid lab-tool-grid-wide">
        {labTools.map((tool) => (
          <SurfaceCard key={tool.title} className="tool-card">
            <div className="tool-icon">
              <tool.icon size={22} />
            </div>
            <div>
              <div className="tool-status">{tool.status}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description[language]}</p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
