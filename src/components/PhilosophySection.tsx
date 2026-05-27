import type { SiteContent } from "@/lib/content";

type Props = {
  content: Pick<
    SiteContent,
    "sectionPhilosophyHeading" | "philosophyBody"
  >;
};

export function PhilosophySection({ content }: Props) {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-0"
      style={{ paddingTop: "var(--space-20)", paddingBottom: "var(--space-20)" }}
    >
      {/* Visually hidden heading for screen readers */}
      <h2
        id="philosophy-heading"
        className="sr-only"
      >
        {content.sectionPhilosophyHeading}
      </h2>

      {/*
       * 朱色の引用ブロック
       * 開き括弧「: 朱色 serif --text-6xl、左上配置
       * 閉じ括弧」: 朱色 serif --text-6xl、右下配置
       */}
      <blockquote
        className="relative"
        style={{
          paddingLeft: "var(--space-6)",
          paddingRight: "var(--space-6)",
          paddingTop: "var(--space-6)",
          paddingBottom: "var(--space-6)",
        }}
      >
        {/* Opening bracket — 朱色 左上 */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 font-serif select-none leading-none"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-6xl)",
            color: "var(--color-accent)",
            lineHeight: 1,
          }}
        >
          「
        </span>

        <p
          className="font-serif text-(--color-text-primary)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-lg)",
            lineHeight: 2.0,
            paddingTop: "var(--space-8)",
            paddingBottom: "var(--space-4)",
          }}
        >
          {content.philosophyBody}
        </p>

        {/* Closing bracket — 朱色 右下 */}
        <span
          aria-hidden="true"
          className="block text-right font-serif select-none leading-none"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-6xl)",
            color: "var(--color-accent)",
            lineHeight: 1,
          }}
        >
          」
        </span>
      </blockquote>
    </section>
  );
}
