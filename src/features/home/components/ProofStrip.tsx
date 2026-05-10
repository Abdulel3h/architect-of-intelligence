import { useLanguage } from "@/lib/language/LanguageProvider";

export function ProofStrip() {
  const { copy, isArabic } = useLanguage();

  return (
    <section className="proof-strip" aria-label={isArabic ? "مؤشرات الثقة" : "Proof points"}>
      <div className="container-grid proof-grid">
        {copy.proofPoints.map((point) => (
          <div key={point.label} className="proof-item">
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
