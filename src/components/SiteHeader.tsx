import type { SiteContent } from "@/lib/content";

type Props = {
  lang: string;
  content: Pick<
    SiteContent,
    | "logoLabel"
    | "langSwitchLabel"
    | "langSwitchLabelShort"
    | "langSwitchAriaLabel"
    | "langSwitchHref"
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

        {/* Language switch */}
        <a
          href={content.langSwitchHref}
          aria-label={content.langSwitchAriaLabel}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-(--color-text-secondary) underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline focus-visible:rounded-sm"
          style={{ fontSize: "var(--text-sm)" }}
        >
          {/* デスクトップ: フルラベル, モバイル: 短縮 */}
          <span className="hidden sm:inline">{content.langSwitchLabel}</span>
          <span className="sm:hidden">{content.langSwitchLabelShort}</span>
        </a>
      </div>
    </header>
  );
}
