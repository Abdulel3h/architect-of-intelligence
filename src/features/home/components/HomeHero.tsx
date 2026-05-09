import { motion } from "framer-motion";
import { ActionLink } from "@/components/ui/action-button";
import { IntelligenceMap } from "@/components/visuals/IntelligenceMap";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function HomeHero() {
  const { language } = useLanguage();
  const copy = homeCopy[language].hero;

  return (
    <section id="top" className="hero-shell">
      <IntelligenceMap />
      <div className="container-grid hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="hero-content"
        >
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.body}</p>
          <div className="hero-actions">
            <ActionLink href="#scanner">{copy.primaryCta}</ActionLink>
            <ActionLink href="#case-studies" variant="secondary">
              {copy.secondaryCta}
            </ActionLink>
          </div>
          <div className="hero-signal" aria-label={copy.signalLabel}>
            {copy.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="hero-console"
        >
          <div className="console-topline">
            <span>{copy.console.brief}</span>
            <strong>{copy.console.live}</strong>
          </div>
          <div className="console-row">
            <span>{copy.console.offer}</span>
            <strong>{copy.console.offerValue}</strong>
          </div>
          <div className="console-row">
            <span>{copy.console.domains}</span>
            <strong>Agents · RAG · Automation · Analytics</strong>
          </div>
          <div className="console-row">
            <span>{copy.console.outcome}</span>
            <strong>{copy.console.outcomeValue}</strong>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
