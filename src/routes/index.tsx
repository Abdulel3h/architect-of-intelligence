import { createFileRoute } from "@tanstack/react-router";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import ScrollProgress from "../components/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdulelah Al-Khathami — AI Engineer & Technical Lead" },
      { name: "description", content: "Technical Lead & AI Engineer building intelligent systems in Arabic at scale. Specializing in LLM systems, medical informatics, and Arabic NLP." },
      { property: "og:title", content: "Abdulelah Al-Khathami — AI Engineer" },
      { property: "og:description", content: "Building intelligent systems. In Arabic. At scale." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative">
      <Navigation />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="py-8 text-center">
        <p className="font-display text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          © 2026 Abdulelah Al-Khathami · Built with precision
        </p>
      </footer>
    </div>
  );
}
