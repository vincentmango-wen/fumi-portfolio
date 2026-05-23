import type { SiteContent } from "@/lib/content";

type Props = {
  content: Pick<
    SiteContent,
    | "namePrimary"
    | "namePrimaryLang"
    | "nameSecondary"
    | "romaji"
    | "subRole"
    | "tagline"
    | "taglineAlt"
    | "ctaPrimary"
    | "ctaSecondary"
  >;
};

export function HeroSection({ content }: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-20)" }}
    >
      {/* Primary name — main language */}
      <h1
        id="hero-heading"
        lang={content.namePrimaryLang}
        className="font-serif font-bold text-(--color-ink) tracking-tight"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(var(--text-4xl), 8vw, var(--text-6xl))",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        {content.namePrimary}
      </h1>

      {/* Secondary name — other language, decorative */}
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
        {content.nameSecondary}
      </p>

      {/* Romaji + sub-role */}
      <p
        className="mt-6 font-light text-(--color-text-secondary)"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-lg)",
          letterSpacing: "0.08em",
          lineHeight: 1.2,
        }}
      >
        {content.romaji}
      </p>
      <p
        className="mt-1 text-(--color-text-muted)"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          letterSpacing: "0.08em",
        }}
      >
        {content.subRole}
      </p>

      {/* Accent divider line — 朱色 2px × 96px */}
      <hr
        aria-hidden="true"
        className="mt-10 border-0"
        style={{
          width: "96px",
          height: "2px",
          backgroundColor: "var(--color-accent)",
        }}
      />

      {/* Tagline — primary language */}
      <p
        className="mt-10 font-serif italic text-(--color-text-primary)"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-lg)",
          lineHeight: 1.8,
        }}
      >
        {content.tagline}
      </p>

      {/* Tagline — secondary language, decorative */}
      <p
        aria-hidden="true"
        className="mt-2 text-(--color-text-muted)"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
        }}
      >
        {content.taglineAlt}
      </p>

      {/* CTAs */}
      <div
        className="mt-12 flex flex-wrap items-center gap-4"
        style={{ gap: "var(--space-2)" }}
      >
        {/* Primary CTA */}
        <a
          href="#projects"
          className="inline-flex min-h-[44px] items-center justify-center px-6 font-medium text-(--color-accent-fg) transition-opacity hover:opacity-90 active:opacity-75 focus-visible:rounded-sm"
          style={{
            backgroundColor: "var(--color-accent)",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--text-sm)",
            fontFamily: "var(--font-sans)",
            paddingTop: "var(--space-1)",
            paddingBottom: "var(--space-1)",
          }}
        >
          {content.ctaPrimary}
        </a>

        {/* Secondary CTA */}
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center justify-center px-4 text-(--color-text-secondary) underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline active:text-(--color-accent) focus-visible:rounded-sm"
          style={{
            fontSize: "var(--text-sm)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {content.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
