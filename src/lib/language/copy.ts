import type { AppLanguage } from "./identity";
import { translations } from "./identity";

export const homeCopy = {
  ar: translations.ar.home,
  en: translations.en.home,
} as const;

export const selectByLanguage = <Arabic, English>(
  language: AppLanguage,
  values: { ar: Arabic; en: English },
) => values[language];
