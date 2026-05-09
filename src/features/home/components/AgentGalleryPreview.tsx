import { useState } from "react";
import { agentPreviews } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";

export function AgentGalleryPreview() {
  const [selected, setSelected] = useState(agentPreviews[0]);

  return (
    <Section
      id="agents"
      eyebrow="معـرض الوكلاء"
      title="أنماط وكلاء قابلة لإعادة الاستخدام وتخلي الفكرة ملموسـة."
      description="المهم مو نقول AI Agent بصوت عالي، المهم نوضح المدخل وحدود التفكير والمخرج التجاري."
    >
      <div className="agent-layout">
        <div className="agent-tabs" role="tablist" aria-label="معاينات الوكلاء">
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
          <p className="eyebrow">مدخل ومخـرج الوكيل</p>
          <h3>{selected.name}</h3>
          <div className="io-grid">
            <div>
              <span>المدخل</span>
              <p>{selected.input}</p>
            </div>
            <div>
              <span>المخرج</span>
              <p>{selected.output}</p>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </Section>
  );
}
