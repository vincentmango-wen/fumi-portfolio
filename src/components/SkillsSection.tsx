import type { SiteContent, CertEntry } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Pick<
    SiteContent,
    "sectionSkillsHeading"
    | "skillGroups"
    | "certsHeading"
    | "certObtainedLabel"
    | "certPlannedLabel"
  >;
  certs: CertEntry[];
};

export function SkillsSection({ locale, content, certs }: Props) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-20)", paddingBottom: "var(--space-20)" }}
    >
      {/* Section heading */}
      <div className="mb-12 flex items-center gap-4">
        <h2
          id="skills-heading"
          className="font-serif text-(--color-ink) shrink-0"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-2xl)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {content.sectionSkillsHeading}
        </h2>
        <hr
          aria-hidden="true"
          className="flex-1 border-0 border-t border-(--color-border)"
        />
      </div>

      {/* Skill groups */}
      <div
        className="space-y-8"
        style={{ marginBottom: "var(--space-8)" }}
      >
        {content.skillGroups.map((group) => (
          <div key={group.heading}>
            <h3
              className="font-serif text-(--color-text-primary)"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                marginBottom: "var(--space-1)",
              }}
            >
              {group.heading}
            </h3>
            <p
              className="font-mono text-(--color-text-muted)"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.5,
              }}
            >
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr
        className="border-0 border-t border-(--color-border)"
        style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-8)" }}
      />

      {/* Certifications heading — 二言語並走 */}
      <h3
        className="font-serif text-(--color-text-secondary)"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          marginBottom: "var(--space-3)",
        }}
      >
        {content.certsHeading}
      </h3>

      {/* Certifications grid */}
      <ul className="space-y-3">
        {certs.map((cert, i) => (
          <li
            key={i}
            className="grid items-baseline gap-x-4"
            style={{
              gridTemplateColumns: "5rem 1fr 1fr 1.5rem",
            }}
          >
            {/* Date — en では dateEn を優先、省略時は date を fallback */}
            <span
              className="text-(--color-text-muted)"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {locale === "en" ? (cert.dateEn ?? cert.date) : cert.date}
            </span>

            {/* Japanese name */}
            <span
              className="text-(--color-text-primary)"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
              }}
            >
              {cert.nameJa}
            </span>

            {/* English name — 翻訳なし、英語固定 */}
            <span
              className="text-(--color-text-muted)"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
              }}
            >
              {cert.nameEn}
            </span>

            {/* Status icon */}
            <span
              aria-label={cert.obtained ? content.certObtainedLabel : content.certPlannedLabel}
              style={{
                color: cert.obtained
                  ? "var(--color-accent)"
                  : "var(--color-text-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
              }}
            >
              {cert.obtained ? "✓" : "○"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
