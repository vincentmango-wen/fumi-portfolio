import type { LangOption } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Props = {
  currentLocale: Locale;
  langOptions: LangOption[];
  navLabel: string;
};

/**
 * LangSwitcher — 3 ボタン横並び（案 2 / FP-009）
 *
 * 設計書 §A-2 推奨案をそのまま実装。
 * - active 言語: 朱色 underline / font-weight 500 / aria-current="true"
 * - inactive 言語: secondary color / hover で primary color
 * - 区切り文字 · は CSS ::after（DOM に書かない）
 * - Endonym: sm 以下で hidden（ISO code のみ表示）
 * - isoLabel は大文字リテラル ('JA'/'ZH'/'EN')。text-transform に頼らない
 * - active 言語の <a> に href を残す（disabled にしない）
 * - 国旗絵文字・<select> 禁止
 */
export function LangSwitcher({ currentLocale, langOptions, navLabel }: Props) {
  return (
    <nav aria-label={navLabel} className="lang-switcher">
      {langOptions.map((lang) => {
        const isActive = lang.locale === currentLocale;
        return (
          <a
            key={lang.locale}
            href={lang.href}
            aria-label={isActive ? undefined : lang.ariaLabel}
            aria-current={isActive ? "true" : undefined}
            data-active={isActive ? "true" : undefined}
            className={
              isActive
                ? "lang-switcher-link lang-switcher-link--active"
                : "lang-switcher-link"
            }
          >
            {/* ISO code — 大文字リテラル。スクリーンリーダーが "JA" と読む */}
            <span className="lang-switcher-iso">{lang.isoLabel}</span>
            {/* Endonym — デスクトップのみ表示 */}
            <span className="lang-switcher-endonym hidden sm:inline" aria-hidden="true">
              {" "}{lang.endonym}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
