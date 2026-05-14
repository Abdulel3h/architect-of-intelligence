import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/language/LanguageProvider";
import { AioLogo } from "@/components/brand/AioLogo";

export default function Navigation() {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4">
      <div className="nav-shell nav-shell-content">
        <a href="#top" className="nav-brand" aria-label={copy.nav.home}>
          <AioLogo />
        </a>
        <div className="nav-links">
          {copy.nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="language-switcher" aria-label={copy.nav.switchLanguage}>
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
    </nav>
  );
}
