import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Noto_Serif_JP, Noto_Sans_JP, Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import { LOCALES, SITE_URL, isLocale, type Locale } from "@/lib/i18n";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifTc = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const META = {
  ja: {
    title: "阮念文 / Fumi — Portfolio",
    description: "現場の声を、安定したシステムにつなぐ。",
    htmlLang: "ja",
    ogLocale: "ja_JP",
    altLocale: "zh_TW",
    ogImage: `${SITE_URL}/og-ja.png`,
  },
  "zh-TW": {
    title: "阮念文 / Fumi — Portfolio",
    description: "將使用者的聲音，連結成穩定運作的系統。",
    htmlLang: "zh-Hant-TW",
    ogLocale: "zh_TW",
    altLocale: "ja_JP",
    ogImage: `${SITE_URL}/og-zh.png`,
  },
} as const satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = META[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
      ],
      apple: [{ url: "/apple-touch-icon.svg", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${lang}`,
      locale: m.ogLocale,
      alternateLocale: [m.altLocale],
      images: [
        {
          url: m.ogImage,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [m.ogImage],
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        ja: `${SITE_URL}/ja`,
        "zh-Hant": `${SITE_URL}/zh-TW`,
        "x-default": `${SITE_URL}/ja`,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4ede0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1814" },
  ],
};

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const htmlLang = META[lang].htmlLang;

  return (
    <html
      lang={htmlLang}
      className={[
        notoSerifJp.variable,
        notoSansJp.variable,
        notoSerifTc.variable,
        notoSansTc.variable,
      ].join(" ")}
    >
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
