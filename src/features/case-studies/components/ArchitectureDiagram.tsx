import type { CaseStudy } from "@/content";
import { buildMermaidDiagram } from "../lib/diagram";
import { useLanguage } from "@/lib/language/LanguageProvider";

const nodeUserRoles: Record<string, Record<string, { label: string; role: string }>> = {
  "multi-agent-automation": {
    intake: { label: "استقبال الطلب", role: "يلتقط سياق المهمة وحدودها." },
    router: { label: "موجّه الوكلاء", role: "يختار المسار المناسب لكل Agent." },
    agents: { label: "وكلاء متخصصين", role: "يبحثون ويكتبون ويثرون ويفرزون." },
    review: { label: "مراجعة بشرية", role: "تعتمد المخرجات عالية الأثر." },
    metrics: { label: "لوحة التشغيل", role: "تتابع السرعة والجودة والتوفير." },
  },
  "enterprise-rag": {
    docs: { label: "المستندات", role: "سياسات وأدلة وأسئلة وملاحظات داخلية." },
    index: { label: "خط الفهرسة", role: "يقسم المحتوى الموثوق ويجهزه للبحث." },
    retriever: { label: "باحث هجين", role: "يلقى النتائج بالمعنى والكلمات." },
    answer: { label: "طبقة الإجابة", role: "تطلع ردود موثقة بالمصادر." },
    feedback: { label: "تغذية راجعة", role: "تسجل النواقص ومشاكل الجودة." },
  },
  "ai-product-systems": {
    user: { label: "مسار المستخدم", role: "يحدد المهمة والقرار المطلوب." },
    ui: { label: "واجهة المنتج", role: "تحول قدرة AI لتجربة سهلة." },
    ai: { label: "خدمة AI", role: "تشغل التصنيف أو التوليد أو البحث أو التحليل." },
    data: { label: "طبقة البيانات", role: "تحفظ السياق والمخرجات بشكل منظم." },
    measure: { label: "القياس", role: "يتابع القيمة والاستخدام والجودة." },
  },
};

export function ArchitectureDiagram({ caseStudy }: { caseStudy: CaseStudy }) {
  const { isArabic } = useLanguage();
  const userNodes = nodeUserRoles[caseStudy.id] ?? {};

  return (
    <div className="architecture-diagram" aria-label={`${caseStudy.title} architecture`}>
      <p>{isArabic ? caseStudy.userOutput.architectureSummary : caseStudy.architecture.summary}</p>
      <div className="architecture-nodes">
        {caseStudy.architecture.nodes.map((node) => {
          const userNode = userNodes[node.id];

          return (
            <div key={node.id} className="architecture-node">
              <strong>{isArabic ? (userNode?.label ?? node.label) : node.label}</strong>
              <span>{isArabic ? (userNode?.role ?? node.role) : node.role}</span>
            </div>
          );
        })}
      </div>
      <div className="flowchart-scroll" tabIndex={0}>
        <pre className="mermaid-source" aria-label="Mermaid architecture source" dir="ltr">
          {buildMermaidDiagram(caseStudy)}
        </pre>
        <span className="scroll-hint">Scroll horizontally on mobile</span>
      </div>
    </div>
  );
}
