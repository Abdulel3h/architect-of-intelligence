import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import { HomePage } from "@/features/home/components/HomePage";
import { personJsonLd, siteConfig } from "@/lib/seo/site";
import { useLanguage } from "@/lib/language/LanguageProvider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: siteConfig.locale },
      { property: "og:url", content: siteConfig.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteConfig.title },
      { name: "twitter:description", content: siteConfig.description },
    ],
    links: [
      { rel: "canonical", href: siteConfig.url },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
});

function Index() {
  const { copy } = useLanguage();

  return (
    <div className="app-shell relative min-h-screen bg-background text-foreground selection:bg-white/30">
      <Navigation />
      <ScrollProgress />

      <main className="relative z-10">
        <HomePage />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {copy.ui.footer}
        </p>
      </footer>
    </div>
  );
}
