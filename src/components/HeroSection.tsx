import Image from "next/image";
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
    | "portraitAlt"
  >;
};

export function HeroSection({ content }: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16 lg:px-0 lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:items-center"
      style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-20)" }}
    >
      {/* Left: hero content */}
      <div className="relative z-[2]">
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
      </div>

      {/* Right: hero portrait (design ref: portfolio-design.html L1031-1034) */}
      <div className="relative mt-12 flex min-h-[420px] items-end justify-center lg:mt-0 lg:min-h-[540px]">
        {/* Vertical name (decorative, aria-hidden) */}
        <span
          aria-hidden="true"
          className="absolute z-[1] text-(--color-text-muted)"
          style={{
            top: "180px",
            left: "-28px",
            writingMode: "vertical-rl",
            fontFamily: "var(--font-serif-tc, var(--font-serif))",
            fontSize: "var(--text-base)",
            letterSpacing: "0.4em",
            fontWeight: 400,
          }}
        >
          念文 ／ Fumi
        </span>

        {/* Seal mark (印章 / bun-glyph) */}
        <div
          aria-hidden="true"
          className="absolute z-[1] grid place-items-center"
          style={{
            top: "32px",
            right: "-8px",
            width: "132px",
            height: "132px",
            border: "3px solid var(--color-accent)",
            borderRadius: "6px",
            transform: "rotate(-4deg)",
            background: "oklch(0.50 0.20 22 / 0.04)",
            color: "var(--color-accent)",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{ width: "76px", height: "76px" }}
            aria-label="阮念文 mark"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="55" cy="10" r="6" fill="currentColor" stroke="none" />
              <path d="M 51 19 Q 54 26 57 33" strokeWidth="5.5" />
              <path d="M 19 41 Q 50 36 86 35" strokeWidth="7" />
              <path d="M 58 48 Q 42 65 17 84" strokeWidth="8.5" />
              <path d="M 46 48 Q 64 65 87 82" strokeWidth="8.5" />
            </g>
          </svg>
        </div>

        {/* Portrait image */}
        <Image
          src="/fumi-portrait.png"
          alt={content.portraitAlt}
          width={843}
          height={1906}
          priority
          sizes="(max-width: 1024px) 280px, 380px"
          className="relative z-[2] block"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "380px",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 78%, transparent 100%)",
            filter: "contrast(0.96) saturate(0.9)",
          }}
        />
      </div>
    </section>
  );
}
