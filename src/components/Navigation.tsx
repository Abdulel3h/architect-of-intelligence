import { FormEvent, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Languages, Sparkles } from "lucide-react";
import { AioLogo } from "@/components/brand/AioLogo";
import { ActionButton } from "@/components/ui/action-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/language/LanguageProvider";
import {
  LEAD_CAPTURE_EVENT,
  type LeadCaptureIntent,
  openLeadCaptureModal,
} from "@/lib/lead-capture";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Sprints", href: "#pricing" },
  { label: "Trust", href: "#trust" },
] as const;

const sprintOptions = ["Discovery Sprint", "MVP Build", "Enterprise Agent"] as const;

export default function Navigation() {
  const { language, setLanguage, copy } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState<(typeof sprintOptions)[number]>(
    sprintOptions[0],
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const openModal = (event: Event) => {
      const detail = (event as CustomEvent<LeadCaptureIntent>).detail;

      if (
        detail?.sprint &&
        sprintOptions.includes(detail.sprint as (typeof sprintOptions)[number])
      ) {
        setSelectedSprint(detail.sprint as (typeof sprintOptions)[number]);
      }

      setSubmitted(false);
      setIsLeadModalOpen(true);
    };

    window.addEventListener(LEAD_CAPTURE_EVENT, openModal);
    return () => window.removeEventListener(LEAD_CAPTURE_EVENT, openModal);
  }, []);

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <nav className="nav-sticky" aria-label="Primary navigation">
        <div className="nav-shell nav-shell-content">
          <motion.span
            className="nav-progress"
            style={{ scaleX: scrollYProgress }}
            aria-hidden="true"
          />
          <a href="#top" className="nav-brand" aria-label={copy.nav.home}>
            <AioLogo />
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <div className="language-switcher" aria-label={copy.nav.switchLanguage}>
              <Languages size={15} aria-hidden="true" />
              <button
                type="button"
                className={language === "ar" ? "active" : ""}
                aria-pressed={language === "ar"}
                onClick={() => setLanguage("ar")}
              >
                AR
              </button>
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
            <ActionButton
              type="button"
              className="nav-lead-button"
              onClick={() =>
                openLeadCaptureModal({ source: "navigation", sprint: "Discovery Sprint" })
              }
            >
              Start Sprint
            </ActionButton>
          </div>
        </div>
      </nav>

      <Dialog open={isLeadModalOpen} onOpenChange={setIsLeadModalOpen}>
        <DialogContent className="lead-dialog">
          <DialogHeader className="lead-dialog-header">
            <div className="lead-dialog-icon" aria-hidden="true">
              <Sparkles size={18} />
            </div>
            <DialogTitle>Start Your AI Sprint</DialogTitle>
            <DialogDescription>
              Share the workflow, data surface, or agent idea. We will map the fastest path to a
              buildable AI system.
            </DialogDescription>
          </DialogHeader>

          <form className="lead-form" onSubmit={submitLead}>
            <div className="lead-sprint-options" role="radiogroup" aria-label="Sprint type">
              {sprintOptions.map((sprint) => (
                <button
                  key={sprint}
                  type="button"
                  className={selectedSprint === sprint ? "active" : ""}
                  aria-pressed={selectedSprint === sprint}
                  onClick={() => setSelectedSprint(sprint)}
                >
                  {sprint}
                </button>
              ))}
            </div>

            <div className="lead-form-grid">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Work email
                <input name="email" type="email" placeholder="you@company.com" required />
              </label>
              <label className="wide">
                What should AI improve first?
                <textarea
                  name="context"
                  rows={4}
                  placeholder="Example: qualify inbound demand, answer internal policy questions, or automate weekly operations reporting..."
                  required
                />
              </label>
            </div>

            <div className="lead-form-footer">
              <span>
                Selected: <strong>{selectedSprint}</strong>
              </span>
              <ActionButton type="submit">Send Sprint Brief</ActionButton>
            </div>

            {submitted && (
              <p className="lead-form-success" role="status">
                Brief captured. We will respond with the first sprint recommendation.
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
