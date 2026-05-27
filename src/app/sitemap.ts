import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return LOCALES.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: lang === "ja" ? 1.0 : 0.9,
    alternates: {
      languages: {
        ja: `${SITE_URL}/ja`,
        "zh-Hant": `${SITE_URL}/zh-TW`,
        "x-default": `${SITE_URL}/ja`,
      },
    },
  }));
}
