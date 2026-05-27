export const LOCALES = ["ja", "zh-TW"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const SITE_URL = "https://fumi-portfolio.vercel.app";
