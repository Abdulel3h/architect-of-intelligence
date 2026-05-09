import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import { HomePage } from "@/features/home/components/HomePage";
import { personJsonLd, siteConfig } from "@/lib/seo/site";

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
    links: [{ rel: "canonical", href: siteConfig.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-cobalt/30">
      <Navigation />
      <ScrollProgress />

      <main>
        <HomePage />
      </main>

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          © 2026 Abdulelah Alkhathami · Architect of Intelligence
        </p>
      </footer>
    </div>
  );
}
