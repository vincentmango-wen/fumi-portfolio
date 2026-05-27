import type { SiteContent } from "@/lib/content";

type Props = {
  content: Pick<
    SiteContent,
    | "sectionAboutHeading"
    | "timeline"
    | "aboutBody"
    | "languagesHeading"
    | "languages"
  >;
};

export function AboutSection({ content }: Props) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-20)", paddingBottom: "var(--space-20)" }}
    >
      {/* Section heading with decorative line */}
      <div className="mb-12 flex items-center gap-4">
        <h2
          id="about-heading"
          className="font-serif text-(--color-ink) shrink-0"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-2xl)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {content.sectionAboutHeading}
        </h2>
        <hr
          aria-hidden="true"
          className="flex-1 border-0 border-t border-(--color-border)"
        />
      </div>

      {/* Left-right split layout (lg+) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">

        {/* Left: Vertical Timeline */}
        <div>
          <ol className="relative" style={{ paddingLeft: "var(--space-4)" }}>
            {/* Vertical line */}
            <li
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: "2px",
                backgroundColor: "var(--color-border)",
                marginLeft: "3px",
              }}
            />

            {content.timeline.map((entry, i) => (
              <li key={i} className="relative pb-8 last:pb-0">
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    left: "calc(-1 * var(--space-4) - 3px + 3px)",
                    top: "6px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    transform: "translateX(-50%)",
                    marginLeft: "3px",
                  }}
                />

                {/* Year */}
                <p
                  className="font-serif font-bold text-(--color-ink)"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-xl)",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1.2,
                  }}
                >
                  {entry.year}
                </p>

                {/* Role */}
                <p
                  className="mt-1 text-(--color-text-secondary)"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                  }}
                >
                  {entry.role}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: Bio + Languages */}
        <div>
          <p
            className="text-(--color-text-primary)"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              lineHeight: 1.8,
            }}
          >
            {content.aboutBody}
          </p>

          {/* Languages */}
          <div style={{ marginTop: "var(--space-6)" }}>
            <p
              className="font-serif text-(--color-text-secondary)"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                marginBottom: "var(--space-1)",
                letterSpacing: "0.05em",
              }}
            >
              {content.languagesHeading}
            </p>
            <p
              className="text-(--color-text-muted)"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.6,
              }}
            >
              {content.languages.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
