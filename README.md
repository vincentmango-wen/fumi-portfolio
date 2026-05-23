# fumi-portfolio

阮念文 / Fumi の二言語（日本語 / 繁體中文）個人ポートフォリオサイト。

- **公開先**: https://fumi.vercel.app（Vercel）
- **デザイン**: 案 C「Bilingual Calligraphy」（FP-002 採択）
- **スタック**: Next.js 15 (App Router) + Tailwind v4 + TypeScript
- **i18n ルーティング**: `/ja` / `/zh-TW`（ルートは `/ja` にリダイレクト）

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
npm run lint
```

## 構造

```
src/
├── app/
│   ├── globals.css            # 案 C @theme（oklch トークン / CJK 行送り）
│   ├── layout.tsx             # passthrough（[lang]/layout.tsx に責務委譲）
│   ├── page.tsx               # / → /ja redirect
│   └── [lang]/
│       ├── layout.tsx         # html lang / metadata / Noto fonts
│       └── page.tsx           # ランディング（FP-004 で各セクション拡張）
└── lib/
    └── i18n.ts                # LOCALES / SITE_URL
public/
├── favicon.svg / -light / -accent
├── apple-touch-icon.svg
├── mark.svg
├── fumi-portrait.png
└── site.webmanifest
```

## チケット

- 親: `.company/engineering/tickets/2026-05-23-fp-001-fumi-portfolio-requirements.md`
- デザイン採択: `.company/engineering/designs/2026-05-23-fp-002-recommendation.md`
- 初期 scaffold: `.company/engineering/tickets/2026-05-23-fp-003-repo-and-scaffold.md`

## 制約

- 公開先 URL は履歴書 / Notion ポートフォリオから踏まれる前提
- AWS 証照は「2026 年内取得予定」表記のみ（時期を特定する語句は入れない）
- Philosophy セクションで国・国籍に直接触れない
