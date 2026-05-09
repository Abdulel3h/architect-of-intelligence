import { caseStudies } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { ActionLink } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";

export function CaseStudyPreview() {
  return (
    <Section
      id="case-studies"
      eyebrow="الدليـل"
      title="دراسات حالة تركز على النظـام والنتيجة والحكم الهندسي."
      description="كل مثال مكتوب كقطعة منتج: مشكلة، شكل النظام، نتيجة تقاس، وستاك تقني."
      className="case-section"
    >
      <div className="case-grid">
        {caseStudies.map((study) => (
          <SurfaceCard key={study.title} className="case-card">
            <div className="case-card-header">
              <div className="tool-icon">
                <study.icon size={22} />
              </div>
              <span>{study.outcome}</span>
            </div>
            <h3>{study.title}</h3>
            <p>{study.description}</p>
            <div className="tag-row">
              {study.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <ActionLink href="#contact" variant="ghost">
              أبغى نظـام مشابه
            </ActionLink>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
