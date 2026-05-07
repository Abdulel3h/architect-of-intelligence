import { createFileRoute } from "@tanstack/react-router";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import AwardsSection from "../components/AwardsSection";
import StackSection from "../components/StackSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import ScrollProgress from "../components/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdulelah Alkhathami — AI Engineer & Intelligent Systems Builder" },
      { name: "description", content: "AI Engineer building intelligent systems across legal, fintech & education. Hackathon winner, Azure deployer, shipping real AI products from Riyadh." },
      { property: "og:title", content: "Abdulelah Alkhathami — AI Engineer" },
      { property: "og:description", content: "Building AI that actually works." },
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
      <ProjectsSection />
      <AwardsSection />
      <StackSection />
      <EducationSection />
      <ContactSection />
      <footer className="py-8 text-center">
        <p className="font-display text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          © 2026 Abdulelah Alkhathami · Built with ambition
        </p>
      </footer>
    </div>
  );
}
