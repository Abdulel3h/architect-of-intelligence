import { caseStudies } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { ActionLink } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { useLanguage } from "@/lib/language/LanguageProvider";

export function CaseStudyPreview() {
  const { language, isArabic } = useLanguage();

  return (
    <Section
      id="case-studies"
      eyebrow={isArabic ? "الدليل" : "System Reports"}
      title={
        isArabic
          ? "دراسات حالة تركز على النظام والنتيجة والحكم الهندسي."
          : "Case studies written as system briefs, not marketing cards."
      }
      description={
        isArabic
          ? "كل مثال مكتوب كقطعة منتج: مشكلة، شكل النظام، نتيجة تقاس، وستاك تقني."
          : "Each example captures the operating problem, architecture, measurable outcome, and technical stack."
      }
      className="case-section"
    >
      <div className="case-grid">
        {caseStudies.map((study) => (
          <SurfaceCard key={study.title} className="case-card">
            <div className="case-card-header">
              <div className="tool-icon">
                <study.icon size={22} />
              </div>
              <span>{study.outcome[language]}</span>
            </div>
            <h3>{study.title}</h3>
            <p>{study.description[language]}</p>
            <div className="tag-row">
              {study.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <ActionLink href="#contact" variant="ghost">
              {isArabic ? "أبغى نظام مشابه" : "Discuss a Similar System"}
            </ActionLink>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
