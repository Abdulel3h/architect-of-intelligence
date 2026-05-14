import { caseStudies } from "@/content";
import { Section } from "@/components/layout/Section";
import { CaseStudyRuntime } from "./CaseStudyRuntime";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function CaseStudyEngine() {
  const { language } = useLanguage();
  const copy = homeCopy[language].cases;

  return (
    <Section
      id="case-studies"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="case-section"
    >
      <div className="case-engine-grid">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="reveal-surface">
            <CaseStudyRuntime caseStudy={caseStudy} />
          </div>
        ))}
      </div>
    </Section>
  );
}
