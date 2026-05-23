import type { SiteContent } from "@/lib/content";

type Props = {
  content: Pick<SiteContent, "sectionContactHeading" | "copyrightText">;
};

// SNS リンクは両言語共通（メモリの reference_sns_accounts.md 準拠）
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/vincentmango-wen",
  },
  {
    label: "X",
    href: "https://x.com/fumikun_gengen",
  },
  {
    label: "Email",
    href: "mailto:vincentmango.wen@gmail.com",
  },
  {
    label: "Qiita",
    href: "https://qiita.com/vincentmango_wen",
  },
  {
    label: "note",
    href: "https://note.com/fumi_ai_202507",
  },
] as const;

export function ContactFooter({ content }: Props) {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-20)", paddingBottom: "var(--space-12)" }}
    >
      {/* Contact heading */}
      <h2
        className="font-serif text-(--color-text-secondary)"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          marginBottom: "var(--space-3)",
        }}
      >
        {content.sectionContactHeading}
      </h2>

      {/* Social links */}
      <nav aria-label={content.sectionContactHeading}>
        <ul className="flex flex-wrap items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="min-h-[44px] inline-flex items-center text-(--color-text-secondary) underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline focus-visible:rounded-sm"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <hr
        className="border-0 border-t border-(--color-border)"
        style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-4)" }}
      />

      {/* Copyright — 両言語共通テキスト */}
      <p
        className="text-(--color-text-muted)"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
        }}
      >
        {content.copyrightText}
      </p>
    </footer>
  );
}
