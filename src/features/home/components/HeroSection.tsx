import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CheckCircle2, Database, ScanLine, Workflow } from "lucide-react";
import { ActionButton, ActionLink } from "@/components/ui/action-button";
import { AioLogo } from "@/components/brand/AioLogo";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";
import { openLeadCaptureModal } from "@/lib/lead-capture";

const scannerOptions = [
  {
    id: "agents",
    label: "Agent ops",
    icon: Bot,
    score: 82,
    signal: "High-leverage",
    recommendation: "Bounded execution agent with human review gates.",
  },
  {
    id: "rag",
    label: "RAG layer",
    icon: Database,
    score: 76,
    signal: "Ready",
    recommendation: "Source-grounded answer layer for approved knowledge.",
  },
  {
    id: "workflow",
    label: "Workflow",
    icon: Workflow,
    score: 88,
    signal: "Fast ROI",
    recommendation: "Automation sprint around repeatable handoffs.",
  },
] as const;

function MiniOpportunityScanner() {
  const [selectedId, setSelectedId] = useState<(typeof scannerOptions)[number]["id"]>("agents");
  const selected = useMemo(
    () => scannerOptions.find((option) => option.id === selectedId) ?? scannerOptions[0],
    [selectedId],
  );
  const SelectedIcon = selected.icon;

  return (
    <div className="mini-scanner surface-card" aria-label="Mini AI Opportunity Scanner">
      <div className="mini-scanner-topline">
        <span className="mini-scanner-status">
          <ScanLine size={14} aria-hidden="true" />
          Live scan
        </span>
        <span>02:14</span>
      </div>

      <div className="mini-scanner-chat">
        <div className="mini-scanner-message">
          <span>Input</span>
          <p>Where is your team losing time, judgment, or operational consistency?</p>
        </div>
        <div className="mini-scanner-options" role="tablist" aria-label="Opportunity focus">
          {scannerOptions.map((option) => {
            const Icon = option.icon;

            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={option.id === selected.id}
                className={option.id === selected.id ? "active" : ""}
                onClick={() => setSelectedId(option.id)}
              >
                <Icon size={15} aria-hidden="true" />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={selected.id}
        className="mini-scanner-report"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        <div className="mini-scanner-score">
          <div>
            <SelectedIcon size={18} aria-hidden="true" />
            <span>{selected.signal}</span>
          </div>
          <strong>{selected.score}%</strong>
        </div>
        <div className="mini-scanner-meter" aria-hidden="true">
          <span style={{ width: `${selected.score}%` }} />
        </div>
        <p>{selected.recommendation}</p>
      </motion.div>

      <div className="mini-scanner-foot">
        <span>
          <CheckCircle2 size={14} aria-hidden="true" />
          Sprint fit detected
        </span>
        <button
          type="button"
          onClick={() =>
            openLeadCaptureModal({ source: "hero-scanner", sprint: "Discovery Sprint" })
          }
        >
          Open brief
        </button>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const copy = homeCopy[language].hero;

  return (
    <section id="top" className="hero-shell">
      <div className="hero-liquid-mesh" aria-hidden="true" />
      <div className="container-grid hero-grid">
        <div className="hero-content hero-animate-in">
          <AioLogo className="hero-logo" />
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="hero-title-panel">
            <h1
              className="hero-title"
              style={{
                fontFamily: '"Google Sans Flex", "Thmanyah Sans", Arial, sans-serif',
              }}
            >
              {copy.title}
            </h1>
          </div>
          <p className="hero-copy">{copy.body}</p>
          <div className="hero-actions">
            <ActionButton
              type="button"
              onClick={() => openLeadCaptureModal({ source: "hero", sprint: "Discovery Sprint" })}
            >
              {copy.primaryCta}
            </ActionButton>
            <ActionLink href="#solutions" variant="secondary">
              {copy.secondaryCta}
            </ActionLink>
          </div>
          <div className="hero-signal" aria-label={copy.signalLabel}>
            {copy.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>

        <aside className="hero-visual hero-animate-in hero-animate-in-delayed">
          <div className="hero-visual-glow" aria-hidden="true" />
          <MiniOpportunityScanner />
        </aside>
      </div>
    </section>
  );
}
