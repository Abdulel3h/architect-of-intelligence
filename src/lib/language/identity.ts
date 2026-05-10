import { arNajdiCopy } from "./translations/ar-najdi";
import { enCopy } from "./translations/en";

export type AppLanguage = "ar" | "en";
export type AppDirection = "rtl" | "ltr";

export type DualOutput<InternalOutput, UserOutput> = {
  internal_output: InternalOutput;
  user_output: UserOutput;
};

export const languageIdentity = {
  defaultLanguage: "ar",
  modes: {
    ar: {
      locale: "ar-SA",
      direction: "rtl",
      voice: "Saudi Najdi-first product experience",
      typography: "Thmanyah Sans",
    },
    en: {
      locale: "en",
      direction: "ltr",
      voice: "native enterprise AI infrastructure experience",
      typography: "IBM Plex Sans / Sora",
    },
  },
  internalSystemLanguage: "en",
  contract:
    "Internal AI schemas, prompts, scoring, metadata, and architecture logic stay English. User-facing output follows the active language identity.",
} as const;

export const translations = {
  ar: arNajdiCopy,
  en: enCopy,
} as const;

export type TranslationDictionary = typeof translations;
export type TranslationCopy = TranslationDictionary[AppLanguage];

export function getLanguageCopy(language: AppLanguage): TranslationCopy {
  return translations[language];
}

export function getLanguageMeta(language: AppLanguage) {
  return translations[language].meta;
}

export function normalizeLanguage(value: unknown): AppLanguage {
  return value === "en" ? "en" : "ar";
}

export function dualOutput<InternalOutput, UserOutput>(
  internal_output: InternalOutput,
  user_output: UserOutput,
): DualOutput<InternalOutput, UserOutput> {
  return { internal_output, user_output };
}

export const uiCopy = arNajdiCopy.ui;
export const uiCopyEn = enCopy.ui;
export const optionCopy = arNajdiCopy.options;
export const optionCopyEn = enCopy.options;
export const systemUserCopy = arNajdiCopy.systemUserCopy;
export const systemUserCopyEn = enCopy.systemUserCopy;
export const readinessUserCopy = arNajdiCopy.readiness;
export const readinessUserCopyEn = enCopy.readiness;
export const leadSignalUserCopy = arNajdiCopy.leadSignal;
export const leadSignalUserCopyEn = enCopy.leadSignal;
export const offerUserCopy = arNajdiCopy.offers;
export const offerUserCopyEn = enCopy.offers;
export const ctaUserCopy = arNajdiCopy.ctas;
export const ctaUserCopyEn = enCopy.ctas;
export const impactUserCopy = arNajdiCopy.impact;
export const impactUserCopyEn = enCopy.impact;
export const difficultyUserCopy = arNajdiCopy.difficulty;
export const difficultyUserCopyEn = enCopy.difficulty;
