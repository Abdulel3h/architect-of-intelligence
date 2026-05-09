import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, type AppLanguage } from "@/lib/language/LanguageProvider";
import { AioLogo } from "@/components/brand/AioLogo";

const links: Record<AppLanguage, Array<{ label: string; href: string }>> = {
  ar: [
    { label: "التشخيص", href: "#scanner" },
    { label: "الأنظمة", href: "#case-studies" },
    { label: "الوكلاء", href: "#agents" },
    { label: "المعمارية", href: "#architecture-generator" },
    { label: "ابدأ", href: "#contact" },
  ],
  en: [
    { label: "Scanner", href: "#scanner" },
    { label: "Systems", href: "#case-studies" },
    { label: "Agents", href: "#agents" },
    { label: "Architecture", href: "#architecture-generator" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navigation() {
  const { language, setLanguage, isArabic } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4"
    >
      <div className="nav-shell">
        <a
          href="#top"
          className="nav-brand"
          aria-label={isArabic ? "العودة لبداية الصفحة" : "Back to homepage"}
        >
          <AioLogo />
        </a>
        <div className="nav-links">
          {links[language].map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="language-switcher" aria-label={isArabic ? "تبديل اللغة" : "Switch language"}>
          <Languages size={15} aria-hidden="true" />
          <button
            type="button"
            className={language === "ar" ? "active" : ""}
            aria-pressed={language === "ar"}
            onClick={() => setLanguage("ar")}
          >
            عربي
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
      </div>
    </motion.nav>
  );
}
