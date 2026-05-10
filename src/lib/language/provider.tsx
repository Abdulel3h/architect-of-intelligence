import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  getLanguageCopy,
  getLanguageMeta,
  languageIdentity,
  normalizeLanguage,
  type AppDirection,
  type AppLanguage,
  type TranslationCopy,
} from "./identity";

type LanguageContextValue = {
  language: AppLanguage;
  direction: AppDirection;
  copy: TranslationCopy;
  setLanguage: (language: AppLanguage) => void;
  toggleLanguage: () => void;
  isArabic: boolean;
};

const storageKey = "aio-language";
const legacyStorageKey = "aoi-language";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getDefaultLanguage(): AppLanguage {
  const configured = import.meta.env.VITE_DEFAULT_LANGUAGE;
  return normalizeLanguage(configured || languageIdentity.defaultLanguage);
}

function getInitialLanguage(): AppLanguage {
  if (typeof window === "undefined") return getDefaultLanguage();
  const stored =
    window.localStorage.getItem(storageKey) ?? window.localStorage.getItem(legacyStorageKey);
  return normalizeLanguage(stored ?? getDefaultLanguage());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<AppLanguage>(getInitialLanguage);
  const copy = getLanguageCopy(language);
  const meta = getLanguageMeta(language);
  const direction = meta.direction;

  const setLanguage = (nextLanguage: AppLanguage) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, nextLanguage);
      window.localStorage.removeItem(legacyStorageKey);
    }
  };

  useEffect(() => {
    document.documentElement.lang = meta.locale;
    document.documentElement.dir = direction;
    document.documentElement.dataset.language = language;
    document.documentElement.dataset.languageIdentity = language === "ar" ? "najdi" : "enterprise";
  }, [direction, language, meta.locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      copy,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "ar" ? "en" : "ar"),
      isArabic: language === "ar",
    }),
    [copy, direction, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export type { AppLanguage } from "./identity";
