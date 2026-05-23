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
  taglineAlt: string;             // aria-hidden, different language
  ctaPrimary: string;
  ctaSecondary: string;

  // About
  sectionAboutHeading: string;
  timeline: TimelineEntry[];
  aboutBody: string;              // ふみさん手入れポイント
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
  philosophyBody: string;           // ふみさん手入れポイント

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
    taglineAlt: "將使用者的聲音，連結成穩定運作的系統。",
    ctaPrimary: "プロジェクトを見る",
    ctaSecondary: "連絡する →",

    // ---- About ----
    sectionAboutHeading: "About",
    timeline: [
      { year: "2017", role: "来日・飲食業界へ" },
      { year: "2021", role: "料理長に昇格" },
      { year: "2026", role: "IT / インフラエンジニアへ転向" },
      { year: "現在", role: "SES・個人開発を並走" },
    ],
    /*
     * ふみさん手入れポイント:
     * 以下の aboutBody はサンプル文です。一人称体験（「2017年に来日して…」のような
     * 具体的なエピソード・失敗談・試行錯誤）を 1〜2 行差し込んでください。
     * 150〜250 字を目安に。
     */
    aboutBody:
      "2017年に来日し、飲食業界でキャリアをスタートしました。料理長として現場を取り仕切った後、IT に転向。SES のインフラエンジニアとして日々の運用を担いながら、個人では AI を使ったプロダクト開発に取り組んでいます。「現場が止まらない仕組み」を大切にしながら、利用者の声をシステムにつなぐ仕事を目指しています。",
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
        stack: ["Next.js", "Claude API", "Resend"],
        imageUrl: "/projects/dainews.png",
        imageAlt: "DAINews 朝刊メールの配信プレビュー（開発中のモック表示）",
      },
    ],
    projectPlaceholderLabel: "準備中",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT & AI Philosophy",
    /*
     * ふみさん手入れポイント（最重要）:
     * 以下の philosophyBody は骨格サンプルです。
     * ・あなた自身の IT・AI に対する哲学・価値観を 200〜400 字で記述してください
     * ・「国・国籍・台湾人として」等の表現は使わない（普遍的価値観として書く）
     * ・絵文字・アイコン不使用
     * ・書き換え歓迎。このコメントは削除してください。
     */
    philosophyBody:
      "私が大切にしているのは、技術を使うことそのものではなく、それが誰かの仕事を止めないことに繋がるかどうかです。インフラ運用の現場で学んだ「止まらない仕組み」の思想は、AI を活用したプロダクト開発でも変わりません。AI は万能ではなく、正確さが必要な局面では人間の判断が不可欠です。だからこそ、AI と人間が互いの強みを活かして協調できる設計を、私はいつも考えています。現場の声を起点にして、ユーザーが安心して使い続けられるシステムを作ること—それが私の指針です。",

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
    romaji: "Fumi — IT 工程師・基礎建設工程師",
    subRole: "獨立 SaaS 開發者",
    tagline: "將使用者的聲音，連結成穩定運作的系統。",
    taglineAlt: "現場の声を、安定したシステムにつなぐ。",
    ctaPrimary: "查看作品集",
    ctaSecondary: "聯絡 →",

    // ---- About ----
    sectionAboutHeading: "About",
    timeline: [
      { year: "2017", role: "赴日・進入餐飲業" },
      { year: "2021", role: "升任料理長" },
      { year: "2026", role: "轉職至 IT / 基礎架構工程師" },
      { year: "現在", role: "SES 工作與個人開發並行" },
    ],
    /*
     * ふみさん手入れポイント（中文自然さ要確認）:
     * 以下の aboutBody は中文サンプル文です。
     * 中文話者として自然な表現かどうか確認・修正してください。
     * 日本語版の逐語訳ではなく、中文として読みやすい構成にしてください。
     * 150〜250 字を目安に。
     */
    aboutBody:
      "2017 年赴日後，我從餐飲業的廚房助手開始，最終晉升為料理長，負責現場管理與運營。之後轉職至 IT 領域，目前在日本 SES 公司擔任基礎架構工程師，並同步進行個人 AI 應用開發。我一直相信，「讓系統不中斷運作」的思維，無論在餐飲業還是 IT 業，本質上是相同的。",
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
          "整合 Notion + Slack + LINE 的個人秘書機器人，自動化任務管理與每日摘要。",
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot 每日摘要推送範例（以虛構任務重現）",
      },
      {
        name: "Recipe Generator",
        statusIcon: "▲",
        statusLabel: "Released",
        description:
          "依冰箱食材由 AI 推薦食譜。結合餐飲業經驗與生成式 AI 的個人作品。",
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator 首頁。從冰箱食材生成食譜的三步驟介面",
      },
      {
        name: "DAINews",
        statusIcon: "◌",
        statusLabel: "In Dev",
        description:
          "AI 新聞日報 SaaS，為個人使用者解決資訊過載問題，開發中。",
        stack: ["Next.js", "Claude API", "Resend"],
        imageUrl: "/projects/dainews.png",
        imageAlt: "DAINews 早報郵件配信預覽（開發中模擬畫面）",
      },
    ],
    projectPlaceholderLabel: "準備中",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT 與 AI 的思考方式",
    /*
     * ふみさん手入れポイント（最重要 / 中文自然さ要確認）:
     * 以下は中文サンプル文です。
     * ・あなた自身の IT・AI 哲学を 200〜400 字で書き直してください
     * ・「國籍・台灣人として」等の表現は使わない（普遍的価値観として書く）
     * ・絵文字・アイコン不使用
     * ・中文として自然かどうか確認してください
     */
    philosophyBody:
      "我最重視的，不是技術本身，而是這個技術能否讓某人的工作持續穩定地運作。在基礎架構運維工作中學到的「不中斷系統」的思維，在我進行 AI 應用開發時同樣適用。AI 並非萬能，在需要精確判斷的場景中，人的介入依然不可或缺。正因如此，我始終思考如何設計出能讓 AI 與人類各自發揮所長、協同運作的系統。將使用者的聲音，連結成穩定運作的系統——這是我一直以來的原則。",

    // ---- Contact ----
    sectionContactHeading: "聯絡方式",
    copyrightText: "© 2026 ふみ / 阮念文",
  } satisfies SiteContent,
} as const satisfies Record<Locale, SiteContent>;

// 証照リストを export（両言語で共通使用）
export { CERTS };
