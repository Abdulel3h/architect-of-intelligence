import { motion } from "framer-motion";
import { caseStudies } from "@/content";
import { Section } from "@/components/layout/Section";
import { CaseStudyRuntime } from "./CaseStudyRuntime";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { homeCopy } from "@/lib/language/copy";

export function CaseStudyEngine() {
  const { language } = useLanguage();
  const copy = homeCopy[language].cases;

  return (
    <Section
      id="case-studies"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="case-section"
    >
      <div className="case-engine-grid">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <CaseStudyRuntime caseStudy={caseStudy} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
