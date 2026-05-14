import { useState } from "react";
import { agents } from "@/content";
import { Section } from "@/components/layout/Section";
import { AgentRuntimePreview } from "./AgentRuntimePreview";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function AgentRuntimeEngine() {
  const [selected, setSelected] = useState(agents[0]);
  const { language } = useLanguage();
  const copy = homeCopy[language].agents;

  return (
    <Section id="agents" eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="agent-layout">
        <div className="agent-tabs" role="tablist" aria-label={copy.tabsLabel}>
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              role="tab"
              aria-selected={agent.id === selected.id}
              className={agent.id === selected.id ? "active" : ""}
              onClick={() => setSelected(agent)}
            >
              {agent.id === selected.id && <span className="agent-tab-glow" />}
              <span>{agent.name}</span>
            </button>
          ))}
        </div>
        <AgentRuntimePreview agent={selected} />
      </div>
    </Section>
  );
}
