import { motion } from "framer-motion";
import { ActionLink } from "@/components/ui/action-button";
import { AioLogo } from "@/components/brand/AioLogo";
import { LiquidGlass } from "@/components/visuals/LiquidGlass";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function HomeHero() {
  const { language } = useLanguage();
  const copy = homeCopy[language].hero;

  return (
    <section id="top" className="hero-shell">
      <div className="container-grid hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <AioLogo className="hero-logo" />
          <p className="eyebrow">{copy.eyebrow}</p>
          <LiquidGlass
            className="hero-title-glass"
            contentClassName="hero-title-glass-content"
            background="/assets/chrome2.png"
            chromaticAberration={2}
            strength={72}
            depth={12}
          >
            <h1
              className="hero-title"
              style={{
                fontFamily: '"Google Sans Flex", "Thmanyah Sans", Arial, sans-serif',
              }}
            >
              {copy.title}
            </h1>
          </LiquidGlass>
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
          initial={{ opacity: 0, y: 34, scale: 0.98, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="hero-console-wrap"
        >
          <LiquidGlass
            className="hero-console"
            contentClassName="hero-console-content"
            background="/assets/silk2.png"
            chromaticAberration={2}
            strength={64}
            depth={10}
          >
            <div className="console-statusbar" aria-hidden="true">
              <span>AIO COMMAND LAYER</span>
              <span>RUNTIME: STABLE</span>
            </div>
            <div className="console-topline">
              <span>{copy.console.brief}</span>
              <strong>{copy.console.live}</strong>
            </div>
            <div className="console-architecture" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="console-metrics" aria-hidden="true">
              <span>ORCHESTRATION</span>
              <strong>04 ACTIVE SYSTEMS</strong>
              <span>DECISION LAYER</span>
              <strong>READY</strong>
            </div>
            <div className="console-row">
              <span>{copy.console.offer}</span>
              <strong>{copy.console.offerValue}</strong>
            </div>
            <div className="console-row">
              <span>{copy.console.domains}</span>
              <strong>Agents / RAG / Automation / Analytics</strong>
            </div>
            <div className="console-row">
              <span>{copy.console.outcome}</span>
              <strong>{copy.console.outcomeValue}</strong>
            </div>
          </LiquidGlass>
        </motion.aside>
      </div>
    </section>
  );
}
