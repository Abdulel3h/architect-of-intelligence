import { lazy, Suspense, useEffect, useState } from "react";
import { ActionLink } from "@/components/ui/action-button";
import { AioLogo } from "@/components/brand/AioLogo";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

const Custom3DLogo = lazy(() =>
  import("./Custom3DLogo").then((m) => ({
    default: m.Custom3DLogo,
  })),
);

function HeroLogoFallback() {
  return (
    <div className="hero-3d-fallback" aria-hidden="true">
      <span className="hero-3d-ring hero-3d-ring-outer" />
      <span className="hero-3d-ring hero-3d-ring-inner" />
      <span className="hero-3d-core" />
    </div>
  );
}

function HeroLogoStage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hero-logo-stage" aria-hidden="true">
      {mounted ? (
        <Suspense fallback={<HeroLogoFallback />}>
          <Custom3DLogo />
        </Suspense>
      ) : (
        <HeroLogoFallback />
      )}
    </div>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const copy = homeCopy[language].hero;

  return (
    <section id="top" className="hero-shell">
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
        </div>

        <aside className="hero-visual hero-animate-in hero-animate-in-delayed">
          <HeroLogoStage />
        </aside>
      </div>
    </section>
  );
}
