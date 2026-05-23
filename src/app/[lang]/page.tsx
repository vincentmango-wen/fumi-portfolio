import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

const CONTENT = {
  ja: {
    namePrimary: "阮 念文",
    nameSecondary: "阮念文",
    romaji: "Fumi — IT Support & Infrastructure Engineer",
    subRole: "Independent SaaS Developer",
    tagline: "現場の声を、安定したシステムにつなぐ。",
    taglineAlt: "將使用者的聲音，連結成穩定運作的系統。",
    altLangLabel: "繁體中文",
    altLangAriaLabel: "切換至繁體中文",
    altLangHref: "/zh-TW",
    placeholderNote: "（FP-004 で各セクションを実装予定）",
  },
  "zh-TW": {
    namePrimary: "阮念文",
    nameSecondary: "ふみ",
    romaji: "Fumi — IT 工程師・基礎建設工程師",
    subRole: "獨立 SaaS 開發者",
    tagline: "將使用者的聲音，連結成穩定運作的系統。",
    taglineAlt: "現場の声を、安定したシステムにつなぐ。",
    altLangLabel: "日本語",
    altLangAriaLabel: "日本語に切り替え",
    altLangHref: "/ja",
    placeholderNote: "（將於 FP-004 實作各區塊）",
  },
} as const satisfies Record<Locale, unknown>;

export default async function LandingPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = CONTENT[lang];

  return (
    <main className="min-h-screen px-6 py-12 sm:px-10 md:px-16 lg:px-24">
      <header className="mx-auto flex max-w-4xl items-center justify-between pb-16">
        <a
          href={`/${lang}`}
          className="font-serif text-lg text-(--color-ink) tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          ふみ / 阮念文
        </a>
        <a
          href={c.altLangHref}
          aria-label={c.altLangAriaLabel}
          className="text-sm text-(--color-text-secondary) underline-offset-4 hover:text-(--color-accent) hover:underline"
        >
          {c.altLangLabel}
        </a>
      </header>

      <section className="mx-auto max-w-4xl">
        <h1
          className="font-serif font-bold tracking-tight text-(--color-ink)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-5xl)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {c.namePrimary}
        </h1>
        <p
          aria-hidden="true"
          className="mt-2 font-serif text-(--color-text-muted)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-3xl)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          {c.nameSecondary}
        </p>

        <p
          className="mt-6 font-light text-(--color-text-secondary)"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-lg)",
            letterSpacing: "0.08em",
            lineHeight: 1.2,
          }}
        >
          {c.romaji}
          <br />
          <span className="text-(--color-text-muted)">{c.subRole}</span>
        </p>

        <hr
          className="mt-10 border-0"
          style={{
            width: "96px",
            height: "2px",
            backgroundColor: "var(--color-accent)",
          }}
        />

        <p
          className="mt-10 font-serif italic text-(--color-text-primary)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-lg)",
          }}
        >
          {c.tagline}
        </p>
        <p
          aria-hidden="true"
          className="mt-2 text-(--color-text-muted)"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
          }}
        >
          {c.taglineAlt}
        </p>

        <p
          className="mt-20 text-(--color-text-muted)"
          style={{ fontSize: "var(--text-sm)" }}
        >
          {c.placeholderNote}
        </p>
      </section>

      <footer className="mx-auto mt-32 max-w-4xl border-t border-(--color-border) pt-8">
        <p
          className="text-(--color-text-muted)"
          style={{ fontSize: "var(--text-sm)" }}
        >
          © 2026 ふみ / 阮念文
        </p>
      </footer>
    </main>
  );
}
