import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Pick<
    SiteContent,
    "sectionProjectsHeading"
    | "projects"
    | "projectPlaceholderLabel"
    | "projectDeliveryLanguagesLabel"
  >;
};

/** locale ごとの「開発中」badge 文言。en 追加時は型エラーで検出できる。 */
function getInDevBadge(locale: Locale): { text: string; ariaLabel: string } {
  switch (locale) {
    case "ja":
      return { text: "開発中", ariaLabel: "開発中のプロジェクト" };
    case "zh-TW":
      return { text: "開發中", ariaLabel: "開發中的專案" };
  }
}

export function ProjectsSection({ locale, content }: Props) {
  const { text: inDevBadgeText, ariaLabel: inDevBadgeAriaLabel } =
    getInDevBadge(locale);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-20)", paddingBottom: "var(--space-20)" }}
    >
      {/* Section heading */}
      <div className="mb-12 flex items-center gap-4">
        <h2
          id="projects-heading"
          className="font-serif text-(--color-ink) shrink-0"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-2xl)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {content.sectionProjectsHeading}
        </h2>
        <hr
          aria-hidden="true"
          className="flex-1 border-0 border-t border-(--color-border)"
        />
      </div>

      {/* Project cards — vertical stack */}
      <ul className="space-y-16">
        {content.projects.map((project, i) => (
          <li key={i} className="group">
            {/*
             * 画像エリア
             * imageUrl があれば実画像、なければ「準備中」プレースホルダ
             */}
            {project.imageUrl ? (
              <div
                className="mb-6 relative flex items-center justify-center overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "var(--color-surface-raised)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt ?? ""}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
                {project.statusIcon === "◌" && (
                  <span
                    aria-label={inDevBadgeAriaLabel}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-xs)",
                      lineHeight: 1,
                      letterSpacing: "0.04em",
                      color: "var(--color-badge-in-dev-text)",
                      backgroundColor: "var(--color-badge-in-dev-bg)",
                      border: "1px solid var(--color-badge-in-dev-border)",
                      borderRadius: "9999px",
                      padding: "4px 10px",
                      zIndex: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {inDevBadgeText}
                  </span>
                )}
              </div>
            ) : (
              <div
                className="mb-6 flex items-center justify-center rounded"
                aria-hidden="true"
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "var(--color-surface-raised)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-card)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
              >
                <span
                  className="text-(--color-text-muted) select-none"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {content.projectPlaceholderLabel}
                </span>
              </div>
            )}

            {/* Project meta */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3
                  className="font-serif text-(--color-ink)"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </h3>

                <p
                  className="mt-2 text-(--color-text-secondary)"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-base)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-3 font-mono text-(--color-text-muted)"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.5,
                  }}
                >
                  {project.stack.join(" · ")}
                </p>

                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${project.name} ${content.projectDeliveryLanguagesLabel}`}
                >
                  {project.deliveryLanguages.map((language) => (
                    <li
                      key={language}
                      className="border border-(--color-border) text-(--color-text-secondary)"
                      style={{
                        borderRadius: "var(--radius-sm)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        lineHeight: 1,
                        padding: "6px 10px",
                      }}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status badge */}
              <div
                className="shrink-0 flex items-center gap-1"
                style={{ paddingTop: "2px" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    color:
                      project.statusIcon === "●"
                        ? "var(--color-accent)"
                        : project.statusIcon === "▲"
                        ? "var(--color-text-secondary)"
                        : "var(--color-text-muted)",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  {project.statusIcon}
                </span>
                <span
                  className="text-(--color-text-muted)"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.statusLabel}
                </span>
              </div>
            </div>

            {/* Card separator */}
            {i < content.projects.length - 1 && (
              <hr
                className="mt-12 border-0 border-t border-(--color-border)"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
