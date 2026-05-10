import { useState } from "react";
import { agentPreviews } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { useLanguage } from "@/lib/language/LanguageProvider";

export function AgentGalleryPreview() {
  const [selected, setSelected] = useState(agentPreviews[0]);
  const { language, isArabic } = useLanguage();

  return (
    <Section
      id="agents"
      eyebrow={isArabic ? "معرض الوكلاء" : "Agent Gallery"}
      title={
        isArabic
          ? "أنماط Agents قابلة لإعادة الاستخدام وتخلي الفكرة ملموسة."
          : "Reusable agent patterns that make the system surface concrete."
      }
      description={
        isArabic
          ? "المهم مو نقول AI Agent بصوت عالي، المهم نوضح المدخل وحدود التفكير والمخرج التجاري."
          : "The point is the input contract, reasoning boundary, business output, and review path."
      }
    >
      <div className="agent-layout">
        <div
          className="agent-tabs"
          role="tablist"
          aria-label={isArabic ? "معاينات الوكلاء" : "Agent previews"}
        >
          {agentPreviews.map((agent) => (
            <button
              key={agent.name}
              type="button"
              role="tab"
              aria-selected={agent.name === selected.name}
              className={agent.name === selected.name ? "active" : ""}
              onClick={() => setSelected(agent)}
            >
              <agent.icon size={18} />
              {agent.name}
            </button>
          ))}
        </div>
        <SurfaceCard className="agent-output">
          <p className="eyebrow">{isArabic ? "مدخل ومخرج الوكيل" : "Agent input and output"}</p>
          <h3>{selected.name}</h3>
          <div className="io-grid">
            <div>
              <span>{isArabic ? "المدخل" : "Input"}</span>
              <p>{selected.input[language]}</p>
            </div>
            <div>
              <span>{isArabic ? "المخرج" : "Output"}</span>
              <p>{selected.output[language]}</p>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </Section>
  );
}
