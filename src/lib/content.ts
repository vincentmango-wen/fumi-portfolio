import type { Locale } from "@/lib/i18n";

// ============================================================
// Timeline entries (About セクション)
// ============================================================

export type TimelineEntry = {
  year: string;
  role: string;
};

// ============================================================
// Certification entries (Skills セクション)
// 英語名は翻訳 JSON に入れない（台湾採用担当向けに英語で通じる）
// ============================================================

export type CertEntry = {
  date: string;            // "2025.08" など、両言語共通
  nameJa: string;          // 日本語名
  nameZh: string;          // 中文名（または日本語のまま）
  nameEn: string;          // 英語名（共通・翻訳しない）
  obtained: boolean;       // true=✓取得済, false=○取得予定
};

// ============================================================
// Project cards (Projects セクション)
// ============================================================

export type ProjectStatus = "running" | "released" | "in-dev";

export type ProjectCard = {
  name: string;
  statusIcon: "●" | "▲" | "◌";
  statusLabel: string;     // "Running" | "Released" | "In Dev"（英語統一）
  description: string;
  deliveryLanguages: string[];
  stack: string[];
  imageUrl?: string;       // public/ 以下のパス。未指定なら「準備中」プレースホルダ
  imageAlt?: string;       // imageUrl 指定時に必須（locale ごとに記述）
};

// ============================================================
// Root content type
// ============================================================

export type SiteContent = {
  // Header
  logoLabel: string;
  langSwitchLabel: string;        // desktop
  langSwitchLabelShort: string;   // mobile (JA / ZH)
  langSwitchAriaLabel: string;
  langSwitchHref: string;

  // Hero
  namePrimary: string;
  namePrimaryLang: string;        // lang attribute for primary name span
  nameSecondary: string;          // aria-hidden, different language
  romaji: string;
  subRole: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  portraitAlt: string;            // Hero portrait の alt（言語別）

  // About
  sectionAboutHeading: string;
  timeline: TimelineEntry[];
  aboutBody: string;
  languagesHeading: string;
  languages: string[];

  // Skills
  sectionSkillsHeading: string;
  skillGroups: { heading: string; items: string[] }[];
  certsHeading: string;           // "証照 / 證照" 並走見出し

  // Projects
  sectionProjectsHeading: string;
  projects: ProjectCard[];
  projectPlaceholderLabel: string; // "準備中 / 準備中"

  // Philosophy
  sectionPhilosophyHeading: string; // aria 用（非表示）
  philosophyBody: string;

  // Contact / Footer
  sectionContactHeading: string;
  copyrightText: string; // "© 2026 ふみ / 阮念文"（両言語共通）
};

// ============================================================
// 証照リスト（英語名は両言語共通・翻訳しない）
// AWS は「2026年内取得予定」と曖昧表現（High-2 対応）
// ============================================================

const CERTS: CertEntry[] = [
  {
    date: "2025.08",
    nameJa: "ITパスポート",
    nameZh: "ITパスポート",
    nameEn: "IT Passport",
    obtained: true,
  },
  {
    date: "2025.10",
    nameJa: "G検定",
    nameZh: "G 検定",
    nameEn: "JDLA G Test",
    obtained: true,
  },
  {
    date: "2025.12",
    nameJa: "LPIC Level 1",
    nameZh: "LPIC Level 1",
    nameEn: "LPIC Level 1",
    obtained: true,
  },
  {
    date: "2026.01",
    nameJa: "Java Silver SE 17",
    nameZh: "Java Silver SE 17",
    nameEn: "Oracle Java Silver SE 17",
    obtained: true,
  },
  {
    date: "2026.05",
    nameJa: "Prompt Engineer Pro",
    nameZh: "Prompt Engineer Pro",
    nameEn: "Prompt Engineering Professional",
    obtained: true,
  },
  {
    date: "2026年内",
    nameJa: "AWS CLF / SAA",
    nameZh: "AWS CLF / SAA",
    nameEn: "AWS CLF / SAA",
    obtained: false,
  },
];

// ============================================================
// CONTENT — 両 locale のキー一致を型で強制
// ============================================================

export const CONTENT = {
  ja: {
    // ---- Header ----
    logoLabel: "ふみ",
    langSwitchLabel: "繁體中文",
    langSwitchLabelShort: "ZH",
    langSwitchAriaLabel: "繁體中文に切り替え",
    langSwitchHref: "/zh-TW",

    // ---- Hero ----
    namePrimary: "阮 念文",
    namePrimaryLang: "ja",
    nameSecondary: "阮念文",  // 繁体字読み、aria-hidden
    romaji: "Fumi — IT Support & Infrastructure Engineer",
    subRole: "Independent SaaS Developer",
    tagline: "現場の声を、安定したシステムにつなぐ。",
    ctaPrimary: "プロジェクトを見る",
    ctaSecondary: "連絡する →",
    portraitAlt: "阮念文 / ふみ のプロフィール写真",

    // ---- About ----
    sectionAboutHeading: "About",
    timeline: [
      { year: "2017", role: "来日・飲食業界へ" },
      { year: "2021", role: "料理長に昇格" },
      { year: "2026", role: "IT / インフラエンジニアへ転向" },
      { year: "現在", role: "SES・個人開発を並走" },
    ],
    aboutBody:
      "2017年に来日し、飲食業界でキャリアを始めました。厨房では、限られた時間と人数の中で段取りを組み、現場を止めないことの大切さを学びました。料理長としてチームを見た経験を土台に、現在は SES のインフラエンジニアとして運用・保守に向き合いながら、個人では AI を使ったプロダクト開発を続けています。",
    languagesHeading: "Languages",
    languages: ["中文（繁体字）", "日本語", "英語"],

    // ---- Skills ----
    sectionSkillsHeading: "Skills & Certifications",
    skillGroups: [
      {
        heading: "Infrastructure & Network",
        items: ["Linux", "Bash", "Nginx", "TCP/IP", "DNS"],
      },
      {
        heading: "Development & AI",
        items: [
          "Python",
          "Java",
          "FastAPI",
          "Claude API",
          "React",
          "Next.js",
          "TypeScript",
        ],
      },
      {
        heading: "Tools",
        items: ["Git", "GitHub", "Notion", "Obsidian", "Claude Code"],
      },
    ],
    certsHeading: "証照 / 證照",

    // ---- Projects ----
    sectionProjectsHeading: "Projects / 作品集",
    projects: [
      {
        name: "secretary-bot",
        statusIcon: "●",
        statusLabel: "Running",
        description:
          "Notion + Slack + LINE 統合の個人秘書ボット。タスク管理と日次サマリを自動化。",
        deliveryLanguages: ["中国語", "日本語"],
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot のダイジェスト配信例（架空タスクで再現）",
      },
      {
        name: "Recipe Generator",
        statusIcon: "▲",
        statusLabel: "Released",
        description:
          "冷蔵庫の食材から AI がレシピを提案。飲食業での経験と生成 AI を掛け合わせたプロダクト。",
        deliveryLanguages: ["日本語"],
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator のトップ画面。冷蔵庫の食材写真からレシピを生成する 3 ステップ UI",
      },
      {
        name: "DAINews",
        statusIcon: "◌",
        statusLabel: "In Dev",
        description:
          "AI ニュース日次配信 SaaS。個人向けの情報過多解消を目的に開発中。",
        deliveryLanguages: ["日本語"],
        stack: ["Next.js", "Claude API", "Resend"],
        imageUrl: "/projects/dainews.png",
        imageAlt: "DAINews 朝刊メールの配信プレビュー（開発中のモック表示）",
      },
    ],
    projectPlaceholderLabel: "準備中",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT & AI Philosophy",
    philosophyBody:
      "私にとって技術は、目の前の作業を少し楽にし、必要なときに迷わず使える状態まで落とし込んで初めて価値があります。インフラ運用では、見えない部分の小さな不備が現場全体を止めることを学びました。AI も同じで、派手な出力よりも、判断の根拠を残し、人が確認できる流れに組み込むことを重視しています。使う人の声から始め、検証しながら、長く安心して任せられる仕組みに育てていく。その積み重ねを大切にしています。",

    // ---- Contact ----
    sectionContactHeading: "Contact",
    copyrightText: "© 2026 ふみ / 阮念文",
  } satisfies SiteContent,

  "zh-TW": {
    // ---- Header ----
    logoLabel: "ふみ",
    langSwitchLabel: "日本語",
    langSwitchLabelShort: "JA",
    langSwitchAriaLabel: "切換至日文",
    langSwitchHref: "/ja",

    // ---- Hero ----
    namePrimary: "阮念文",
    namePrimaryLang: "zh-TW",
    nameSecondary: "ふみ",  // 日本語名、aria-hidden
    romaji: "Fumi — IT Support / 基礎架構工程師",
    subRole: "獨立 SaaS 開發者",
    tagline: "將使用者的聲音，連結成穩定運作的系統。",
    ctaPrimary: "查看作品集",
    ctaSecondary: "聯絡 →",
    portraitAlt: "阮念文 / ふみ 的個人照片",

    // ---- About ----
    sectionAboutHeading: "About",
    timeline: [
      { year: "2017", role: "赴日，進入餐飲業" },
      { year: "2021", role: "升任料理長" },
      { year: "2026", role: "轉職至 IT / 基礎架構領域" },
      { year: "現在", role: "SES 工作與個人開發並行" },
    ],
    aboutBody:
      "2017 年赴日後，我從餐飲業開始累積工作經驗。廚房現場讓我學會在有限時間與人力之下安排流程，並把「不要讓現場停下來」放在第一位。後來以料理長的經驗為基礎轉向 IT，目前在 SES 公司擔任基礎架構工程師，負責日常維運，同時也持續開發結合 AI 的個人專案。",
    languagesHeading: "語言能力",
    languages: ["中文（繁體）", "日本語（業務水準）", "英文（一般溝通）"],

    // ---- Skills ----
    sectionSkillsHeading: "技術能力與證照",
    skillGroups: [
      {
        heading: "Infrastructure & Network",
        items: ["Linux", "Bash", "Nginx", "TCP/IP", "DNS"],
      },
      {
        heading: "Development & AI",
        items: [
          "Python",
          "Java",
          "FastAPI",
          "Claude API",
          "React",
          "Next.js",
          "TypeScript",
        ],
      },
      {
        heading: "Tools",
        items: ["Git", "GitHub", "Notion", "Obsidian", "Claude Code"],
      },
    ],
    certsHeading: "證照 / 証照",

    // ---- Projects ----
    sectionProjectsHeading: "作品集 / Projects",
    projects: [
      {
        name: "secretary-bot",
        statusIcon: "●",
        statusLabel: "Running",
        description:
          "整合 Notion + Slack + LINE 的個人秘書機器人，將任務管理與每日摘要自動化。",
        deliveryLanguages: ["中文", "日文"],
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot 每日摘要推送範例（以虛構任務重現）",
      },
      {
        name: "Recipe Generator",
        statusIcon: "▲",
        statusLabel: "Released",
        description:
          "根據冰箱現有食材由 AI 推薦食譜，是結合餐飲業經驗與生成式 AI 的個人作品。",
        deliveryLanguages: ["日文"],
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator 首頁。從冰箱食材生成食譜的三步驟介面",
      },
      {
        name: "DAINews",
        statusIcon: "◌",
        statusLabel: "In Dev",
        description:
          "AI 新聞日報 SaaS，協助個人使用者整理過量資訊，目前開發中。",
        deliveryLanguages: ["日文"],
        stack: ["Next.js", "Claude API", "Resend"],
        imageUrl: "/projects/dainews.png",
        imageAlt: "DAINews 早報郵件配信預覽（開發中模擬畫面）",
      },
    ],
    projectPlaceholderLabel: "準備中",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT 與 AI 的思考方式",
    philosophyBody:
      "對我來說，技術不是越新越好，而是要能讓眼前的工作變得更順、更穩，並且在需要時能被放心使用。做基礎架構維運時，我學到看不見的小問題也可能讓整個現場停下來。AI 也是一樣，比起漂亮的輸出，我更重視它是否留下判斷依據，是否能放進人可以確認的流程裡。從使用者的聲音出發，一邊驗證一邊調整，最後把工具養成可以長期信任的系統，這是我做產品時最在意的事。",

    // ---- Contact ----
    sectionContactHeading: "聯絡方式",
    copyrightText: "© 2026 ふみ / 阮念文",
  } satisfies SiteContent,
} as const satisfies Record<Locale, SiteContent>;

// 証照リストを export（両言語で共通使用）
export { CERTS };
