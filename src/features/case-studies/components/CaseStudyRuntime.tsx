import type { CaseStudy } from "@/content";
import { ActionLink } from "@/components/ui/action-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { DecisionPanel } from "@/features/conversion/DecisionPanel";
import { decideNextAction } from "@/features/conversion/decision-layer";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { MetricsBar } from "./MetricsBar";
import { difficultyUserCopy, impactUserCopy, uiCopy, uiCopyEn } from "@/lib/language/identity";
import { useLanguage } from "@/lib/language/LanguageProvider";

export function CaseStudyRuntime({ caseStudy }: { caseStudy: CaseStudy }) {
  const { isArabic } = useLanguage();
  const decision = decideNextAction({
    system: caseStudy.title,
    impactLevel: caseStudy.impactLevel,
    difficulty: caseStudy.difficulty,
  });
  const copy = isArabic ? uiCopy : uiCopyEn;

  return (
    <SurfaceCard className="case-runtime-card">
      <div className="case-runtime-header">
        <div>
          <p className="eyebrow">
            {isArabic ? `أثر ${impactUserCopy[caseStudy.impactLevel]}` : `${caseStudy.impactLevel} impact`}
          </p>
          <h3>{caseStudy.title}</h3>
          <p>{isArabic ? caseStudy.userOutput.description : caseStudy.description}</p>
        </div>
        <span className="difficulty-badge">
          {isArabic ? difficultyUserCopy[caseStudy.difficulty] : caseStudy.difficulty}
        </span>
      </div>

      <MetricsBar metrics={isArabic ? caseStudy.userOutput.metrics : caseStudy.metrics} />

      <div className="case-runtime-grid">
        <div>
          <span>{copy.caseStudies.problem}</span>
          <p>{isArabic ? caseStudy.userOutput.problem : caseStudy.problem}</p>
        </div>
        <div>
          <span>{copy.caseStudies.systemDesign}</span>
          <p>{isArabic ? caseStudy.userOutput.systemDesign : caseStudy.systemDesign}</p>
        </div>
      </div>

      <ArchitectureDiagram caseStudy={caseStudy} />

      <DecisionPanel decision={decision} />

      <div className="runtime-footer">
        <div className="tag-row">
          {caseStudy.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ActionLink href="#contact" variant="ghost">
          {isArabic ? caseStudy.userOutput.conversionAngle : caseStudy.conversionAngle}
        </ActionLink>
      </div>
    </SurfaceCard>
  );
}
