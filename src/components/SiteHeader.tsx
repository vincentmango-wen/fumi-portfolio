import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { LangSwitcher } from "@/components/LangSwitcher";

type Props = {
  lang: Locale;
  content: Pick<
    SiteContent,
    | "logoLabel"
    | "langOptions"
    | "langSwitcherNavLabel"
  >;
};

export function SiteHeader({ lang, content }: Props) {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-(--color-border)"
      style={{ backgroundColor: "color-mix(in oklch, var(--color-surface) 92%, transparent)" }}
    >
      <div
        className="mx-auto flex max-w-4xl items-center justify-between px-6 sm:px-10 md:px-16 lg:px-0"
        style={{ height: "64px" }}
      >
        {/* Logo */}
        <a
          href={`/${lang}`}
          className="font-serif text-(--color-ink) tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-lg)",
            fontWeight: 600,
          }}
        >
          {content.logoLabel}
        </a>

        {/* Language switcher — 3 値化（FP-009） */}
        <LangSwitcher
          currentLocale={lang}
          langOptions={content.langOptions}
          navLabel={content.langSwitcherNavLabel}
        />
      </div>
    </header>
  );
}
