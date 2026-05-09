import { useLanguage } from "@/lib/language/LanguageProvider";

const proofPoints = {
  ar: [
    { value: "4", label: "أنظمة AI انبنت وانطلقت" },
    { value: "2", label: "فوز بهاكاثونات وطنية" },
    { value: "85%", label: "تحسن بكفاءة التشغيل" },
    { value: "KSA", label: "استوديو AI من الرياض" },
  ],
  en: [
    { value: "4", label: "AI systems shipped" },
    { value: "2", label: "national hackathon wins" },
    { value: "85%", label: "workflow efficiency gain" },
    { value: "KSA", label: "Saudi AI systems studio" },
  ],
};

export function ProofStrip() {
  const { language, isArabic } = useLanguage();

  return (
    <section className="proof-strip" aria-label={isArabic ? "مؤشرات الثقة" : "Proof points"}>
      <div className="container-grid proof-grid">
        {proofPoints[language].map((point) => (
          <div key={point.label} className="proof-item">
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
