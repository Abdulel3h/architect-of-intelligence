import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AppLanguage = "ar" | "en";

type LanguageContextValue = {
  language: AppLanguage;
  direction: "rtl" | "ltr";
  setLanguage: (language: AppLanguage) => void;
  toggleLanguage: () => void;
  isArabic: boolean;
};

const storageKey = "aoi-language";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): AppLanguage {
  if (typeof window === "undefined") return "ar";
  return window.localStorage.getItem(storageKey) === "en" ? "en" : "ar";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<AppLanguage>(getInitialLanguage);
  const direction = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (nextLanguage: AppLanguage) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, nextLanguage);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === "ar" ? "ar-SA" : "en";
    document.documentElement.dir = direction;
    document.documentElement.dataset.language = language;
  }, [direction, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "ar" ? "en" : "ar"),
      isArabic: language === "ar",
    }),
    [direction, language],
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
