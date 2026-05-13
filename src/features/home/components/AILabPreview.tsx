import { motion } from "framer-motion";
import { labTools } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { OpportunityScanner } from "@/features/opportunity-scanner/components/OpportunityScanner";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function AILabPreview() {
  const { language } = useLanguage();
  const copy = homeCopy[language].lab;

  return (
    <Section
      id="scanner"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="lab-section"
    >
      <div className="scanner-focus-layout">
        <OpportunityScanner compact />
      </div>
      <div className="lab-tool-grid lab-tool-grid-wide">
        {labTools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <SurfaceCard className="tool-card">
              <div className="tool-icon">
                <tool.icon size={22} />
              </div>
              <div>
                <div className="tool-status">{tool.status}</div>
                <h3>{tool.title}</h3>
                <p>{tool.description[language]}</p>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
