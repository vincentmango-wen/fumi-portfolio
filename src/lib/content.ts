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
  date: string;            // "2025.08" など、ja/zh-TW 共通
  dateEn?: string;         // en 用の日付表示。省略時は date を fallback
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
  status: ProjectStatus;   // FP-012: enum 化。badge 判定はこちらを使う
  statusIcon: "●" | "▲" | "◌";
  statusLabel: string;     // "Running" | "Released" | "In Dev"（英語統一）
  description: string;
  deliveryLanguages: string[];
  stack: string[];
  imageUrl?: string;       // public/ 以下のパス。未指定なら「準備中」プレースホルダ
  imageAlt?: string;       // imageUrl 指定時に必須（locale ごとに記述）
  url?: string;            // 外部公開 URL（FP-016: CTA リンク用）
};

// ============================================================
// LangSwitcher 3 値化（FP-009）
// ============================================================

/**
 * 各言語オプション。配列にすることで 4 言語以上も同じ型で対応。
 */
export type LangOption = {
  /** URL 上のロケール文字列 */
  locale: Locale;
  /** ヘッダー表示用 ISO 大文字コード（モバイル時もこれだけ使う） */
  isoLabel: string;       // 'JA' | 'ZH' | 'EN'（必ず大文字リテラル / text-transform に頼らない）
  /** Endonym（デスクトップでは isoLabel に空白で続けて表示） */
  endonym: string;        // '日本語' | '繁體中文' | 'English'
  /** inactive 状態でのその言語向け aria-label */
  ariaLabel: string;      // 例: 'Switch to English'
  /** 切り替え先 URL */
  href: string;           // '/en'
};

// ============================================================
// Root content type
// ============================================================

export type SiteContent = {
  // Header
  logoLabel: string;

  /**
   * 全言語オプションの一覧（LangSwitcher 用）。現在表示中の言語も含む。
   * コンポーネント側で locale === current locale を判定して active/inactive を決める。
   * 並び順: ['ja', 'zh-TW', 'en']
   */
  langOptions: LangOption[];

  /**
   * ナビの aria-label（言語切替 nav 全体）。
   * 例: '言語切替' / '語言切換' / 'Language switcher'
   */
  langSwitcherNavLabel: string;

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
  languages: string[];            // 話せる言語リスト（About セクション）

  // Skills
  sectionSkillsHeading: string;
  skillGroups: { heading: string; items: string[] }[];
  certsHeading: string;           // "証照 / 證照" 並走見出し
  certObtainedLabel: string;      // 証照ステータスバッジの aria-label（locale 連動）
  certPlannedLabel: string;       // 同上

  // Projects
  sectionProjectsHeading: string;
  projects: ProjectCard[];
  projectPlaceholderLabel: string; // "準備中 / 準備中"
  projectDeliveryLanguagesLabel: string; // Projects カードの配信言語タグ aria-label（locale 連動）
  projectCtaLabel: string; // 外部リンク CTA 文言（FP-016: "サイトを見る →" 等）

  // Philosophy
  sectionPhilosophyHeading: string; // aria 用（非表示）
  philosophyBody: string;

  // Contact / Footer
  sectionContactHeading: string;
  copyrightText: string; // ja/zh-TW: "© 2026 ふみ / 阮念文" / en: "© 2026 Fumi / Nien-wen Juan" (FP-015)
};

// ============================================================
// 証照リスト（英語名は両言語共通・翻訳しない）
// AWS は「2026年内取得予定」と曖昧表現（High-2 対応）
// dateEn: en ロケールでの表示文字列（省略時は date を fallback）
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
    nameJa: "Prompt Engineer Pro",
    nameZh: "Prompt Engineer Pro",
    nameEn: "Prompt Engineering Professional",
    obtained: true,
  },
  {
    date: "2026.03",
    nameJa: "Java Silver SE 17",
    nameZh: "Java Silver SE 17",
    nameEn: "Oracle Java Silver SE 17",
    obtained: true,
  },
  {
    date: "2026.05",
    nameJa: "LPIC Level 1",
    nameZh: "LPIC Level 1",
    nameEn: "LPIC Level 1",
    obtained: true,
  },
  {
    date: "2026年内",
    dateEn: "Scheduled in 2026",   // 制約 1: 月を明示しない曖昧表現
    nameJa: "AWS CLF / SAA",
    nameZh: "AWS CLF / SAA",
    nameEn: "AWS CLF / SAA",
    obtained: false,
  },
];

// ============================================================
// 3 言語共通の languages 配列（LangSwitcher 用）
// ============================================================

const LANG_OPTIONS: LangOption[] = [
  {
    locale: "ja",
    isoLabel: "JA",
    endonym: "日本語",
    ariaLabel: "日本語に切り替え",
    href: "/ja",
  },
  {
    locale: "zh-TW",
    isoLabel: "ZH",
    endonym: "繁體中文",
    ariaLabel: "切換至繁體中文",
    href: "/zh-TW",
  },
  {
    locale: "en",
    isoLabel: "EN",
    endonym: "English",
    ariaLabel: "Switch to English",
    href: "/en",
  },
];

// ============================================================
// CONTENT — 全 locale のキー一致を型で強制
// ============================================================

export const CONTENT = {
  ja: {
    // ---- Header ----
    logoLabel: "ふみ",
    langOptions: LANG_OPTIONS,
    langSwitcherNavLabel: "言語切替",

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
      { year: "2017", role: "飲食業界でキャリア開始" },
      { year: "2021", role: "料理長に昇格" },
      { year: "2026", role: "IT / インフラエンジニアへ転向" },
      { year: "現在", role: "SES・個人開発を並走" },
    ],
    aboutBody:
      "2017年、飲食業界でキャリアを始めました。厨房という現場では、限られた時間と人数の中で「どうすれば客足が途切れず、料理が止まらないか」を毎日問われ続け、段取り・仕入れ・シフト調整など、現場の課題を一つずつ解いていく仕事を積み重ねました。料理長として一店舗を任された経験を通して、課題は技術の前に「観察」から始まることを学びました。その後、現場の課題を解く道具を IT に広げたいと考え、インフラエンジニアへ転向しました。現在は SES のインフラエンジニアとして運用・保守に向き合いながら、見えにくい部分の不備が現場全体を止める怖さと、それを未然に防ぐ地道な作業の価値を実感しています。同時に、AI が現実の業務を変えていく時代に、自分でも手を動かしたいと考え、個人では Claude / OpenAI などの LLM を使ったプロダクト開発を続けています。情報過多・食材ロス・タスク管理の手間など、生活と仕事の隙間にある小さな課題を、AI と組み合わせて解いていくのが今の取り組みです。",
    languagesHeading: "Languages",
    languages: ["中文（繁体字）", "日本語", "英語"],

    // ---- Skills ----
    sectionSkillsHeading: "Skills & Certifications",
    skillGroups: [
      {
        heading: "使用言語",
        items: ["Python", "TypeScript", "JavaScript", "Java", "Bash", "HTML/CSS"],
      },
      {
        heading: "開発環境",
        items: ["Cursor", "Claude Code"],
      },
      {
        heading: "プロジェクト管理",
        items: ["Git", "GitHub", "Notion", "Obsidian"],
      },
      {
        heading: "OS",
        items: ["Linux", "macOS", "Windows"],
      },
      {
        heading: "データベース",
        items: ["MySQL", "PostgreSQL (Supabase)"],
      },
      {
        heading: "フレームワーク / ライブラリ",
        items: ["Next.js", "React", "FastAPI", "Spring Boot", "Node.js"],
      },
      {
        heading: "開発工程 / AI 活用",
        items: ["保守・運用", "Claude API", "OpenAI API", "LangChain", "RAG", "プロンプトエンジニアリング"],
      },
    ],
    certsHeading: "証照 / 證照",
    certObtainedLabel: "取得済",
    certPlannedLabel: "取得予定",

    // ---- Projects ----
    sectionProjectsHeading: "Projects / 作品集",
    projects: [
      {
        name: "AWS資格ロードマップラボ",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "AWS 資格学習で「次に何を覚えればいいか」が散らかる課題を、用語集・サービス比較・模擬問題・構成図を 1 つのロードマップに束ねて解消する学習サイト。",
        deliveryLanguages: ["日本語"],
        stack: ["Next.js", "TypeScript", "Python", "AWS Lambda"],
        imageUrl: "/projects/aws-cert-roadmap-lab-og.png",
        imageAlt: "AWS資格ロードマップラボのOGP画像。ロードマップ・用語集・サービス比較などの学習動線を示す",
        url: "https://www.aws-cert-roadmap-lab.com",
      },
      {
        name: "secretary-bot",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "タスクがアプリ間で散らばり、毎朝何から手をつけるか迷う課題を、Notion + Slack + LINE を 1 つの動線にまとめて解決する個人秘書ボット。",
        deliveryLanguages: ["中国語", "日本語"],
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot のダイジェスト配信例（架空タスクで再現）",
      },
      {
        name: "Recipe Generator",
        status: "released" as const,
        statusIcon: "▲" as const,
        statusLabel: "Released",
        description:
          "冷蔵庫に残った食材を使い切れず捨ててしまう日常の小さな課題を、飲食業の段取り経験と生成 AI を掛け合わせて解決するレシピ提案ツール。",
        deliveryLanguages: ["日本語"],
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator のトップ画面。冷蔵庫の食材写真からレシピを生成する 3 ステップ UI",
      },
      {
        name: "DAINews",
        status: "in-dev" as const,
        statusIcon: "◌" as const,
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
    projectDeliveryLanguagesLabel: "配信言語",
    projectCtaLabel: "サイトを見る →",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT & AI Philosophy",
    philosophyBody:
      "私にとって技術は、目の前の困りごとを少し軽くし、誰でも迷わず使える状態まで落とし込んで初めて価値があります。飲食の現場で身につけた「現場の声から始める」という姿勢は、インフラ運用でも、AI を組み込んだプロダクト開発でも変わりません。インフラ運用では、見えない部分の小さな不備が現場全体を止めることを学びました。AI も同じで、派手な出力よりも、判断の根拠を残し、人が確認できる流れに組み込むことを重視しています。道具は時代によって変わりますが、「使う人の声から始め、検証しながら、長く安心して任せられる仕組みに育てる」という姿勢は、飲食から IT、そして AI へとキャリアを移してきた今も変わらず大切にしています。",

    // ---- Contact ----
    sectionContactHeading: "Contact",
    copyrightText: "© 2026 ふみ / 阮念文",
  } satisfies SiteContent,

  "zh-TW": {
    // ---- Header ----
    logoLabel: "ふみ",
    langOptions: LANG_OPTIONS,
    langSwitcherNavLabel: "語言切換",

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
      { year: "2017", role: "進入餐飲業" },
      { year: "2021", role: "升任料理長" },
      { year: "2026", role: "轉職至 IT / 基礎架構領域" },
      { year: "現在", role: "SES 工作與個人開發並行" },
    ],
    aboutBody:
      "2017 年起，我從餐飲業開始累積工作經驗。廚房是個每天都在問「如何讓客人不間斷、料理不中止」的現場，我在有限的時間與人力中，反覆處理備料安排、進貨調配、排班調整等現場課題。擔任料理長、獨立負責一間店的經驗，讓我學到：解決問題的起點，是在技術之前先學會「觀察」。之後，我希望把解決現場問題的工具延伸到 IT 領域，因此轉職成為基礎架構工程師。目前在 SES 公司負責系統維運與保養，親身感受到不起眼的細節若出現漏洞，足以讓整個現場停擺的壓力，也更珍視那些默默防止問題發生的日常作業。同時，面對 AI 正在改變實際業務的時代，我也想親手嘗試，持續以 Claude、OpenAI 等 LLM 進行個人產品開發。資訊過量、食材浪費、任務管理的繁瑣——我想用 AI 來解決這些生活與工作之間的小小課題。",
    languagesHeading: "語言能力",
    languages: ["中文（繁體）", "日本語（業務水準）", "英文（一般溝通）"],

    // ---- Skills ----
    sectionSkillsHeading: "技術能力與證照",
    skillGroups: [
      {
        heading: "程式語言",
        items: ["Python", "TypeScript", "JavaScript", "Java", "Bash", "HTML/CSS"],
      },
      {
        heading: "開發環境",
        items: ["Cursor", "Claude Code"],
      },
      {
        heading: "專案管理",
        items: ["Git", "GitHub", "Notion", "Obsidian"],
      },
      {
        heading: "作業系統",
        items: ["Linux", "macOS", "Windows"],
      },
      {
        heading: "資料庫",
        items: ["MySQL", "PostgreSQL (Supabase)"],
      },
      {
        heading: "框架 / 函式庫",
        items: ["Next.js", "React", "FastAPI", "Spring Boot", "Node.js"],
      },
      {
        heading: "開發流程 / AI 應用",
        items: ["維運", "Claude API", "OpenAI API", "LangChain", "RAG", "Prompt Engineering"],
      },
    ],
    certsHeading: "證照 / 証照",
    certObtainedLabel: "已取得",
    certPlannedLabel: "預計取得",

    // ---- Projects ----
    sectionProjectsHeading: "作品集 / Projects",
    projects: [
      {
        name: "AWS資格ロードマップラボ",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "AWS 認證學習中「下一步該記什麼」總是雜亂——將術語集、服務比較、模擬考題、構成圖整合成單一路線圖的學習網站。",
        deliveryLanguages: ["日文"],
        stack: ["Next.js", "TypeScript", "Python", "AWS Lambda"],
        imageUrl: "/projects/aws-cert-roadmap-lab-og.png",
        imageAlt: "AWS資格ロードマップラボ 的 OGP 圖像，呈現路線圖、術語集、服務比較等學習動線",
        url: "https://www.aws-cert-roadmap-lab.com",
      },
      {
        name: "secretary-bot",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "任務分散在各個 App 之間、每天早上不知從何開始——為了解決這個困擾，將 Notion + Slack + LINE 整合成單一動線的個人秘書機器人。",
        deliveryLanguages: ["中文", "日文"],
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot 每日摘要推送範例（以虛構任務重現）",
      },
      {
        name: "Recipe Generator",
        status: "released" as const,
        statusIcon: "▲" as const,
        statusLabel: "Released",
        description:
          "冰箱裡的食材用不完、最後只能丟掉——為了解決這個日常小困擾，結合餐飲業的備料經驗與生成式 AI，打造出的食譜推薦工具。",
        deliveryLanguages: ["日文"],
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator 首頁。從冰箱食材生成食譜的三步驟介面",
      },
      {
        name: "DAINews",
        status: "in-dev" as const,
        statusIcon: "◌" as const,
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
    projectDeliveryLanguagesLabel: "提供語言",
    projectCtaLabel: "前往網站 →",

    // ---- Philosophy ----
    sectionPhilosophyHeading: "IT 與 AI 的思考方式",
    philosophyBody:
      "對我來說，技術要能讓眼前的困擾稍微輕一點、讓任何人都能毫不猶豫地使用，才算真正有價值。在餐飲現場養成的「從第一線的聲音出發」這個習慣，無論在基礎架構維運還是結合 AI 的產品開發中，我都一直保持著。維運工作讓我學到，看不見的小漏洞足以讓整個現場停擺。AI 也是同樣的道理——比起華麗的輸出，我更重視的是：是否留下了判斷的依據，是否能放進人可以確認的流程裡。工具會隨著時代改變，但「從使用者的聲音出發、邊驗證邊調整、最終打造出可以長期信賴的機制」這個態度，從餐飲到 IT、再到 AI，是我一路走來始終珍視的事。",

    // ---- Contact ----
    sectionContactHeading: "聯絡方式",
    copyrightText: "© 2026 ふみ / 阮念文",
  } satisfies SiteContent,

  en: {
    // ---- Header ----
    logoLabel: "Fumi",
    // FP-009 新フィールド
    langOptions: LANG_OPTIONS,
    langSwitcherNavLabel: "Language switcher",

    // ---- Hero ----
    namePrimary: "Fumi",
    namePrimaryLang: "en",
    nameSecondary: "Nien-wen Juan",   // aria-hidden, romanized name (FP-015 / 2026-06-09)
    romaji: "Fumi — IT Support & Infrastructure Engineer",
    subRole: "Independent SaaS Developer",
    tagline: "Turning frontline voices into reliable systems.",
    ctaPrimary: "See projects",
    ctaSecondary: "Get in touch →",
    portraitAlt: "Portrait of Fumi (Nien-wen Juan)",

    // ---- About ----
    sectionAboutHeading: "About",
    timeline: [
      { year: "2017", role: "Began career in the hospitality industry" },
      { year: "2021", role: "Promoted to executive chef" },
      { year: "2026", role: "Transitioned to IT / infrastructure engineering" },
      { year: "Present", role: "SES engineering and independent development in parallel" },
    ],
    aboutBody:
      "I began my career in the hospitality industry in 2017. The kitchen was a place where every day asked the same question — how do you keep customers coming and the food never stopping? — in finite time, with finite hands. I learned to solve operational problems one at a time: prep planning, sourcing, scheduling. Running a single restaurant as executive chef taught me that solving a problem starts with observation, before technique. Looking to extend that same mindset, I moved into infrastructure engineering. Today I work in SES on production operations and maintenance, learning firsthand how small failures in the parts no one sees can bring an entire site to a halt — and the quiet value of the steady work that prevents them. In parallel, at a moment when AI is reshaping real business work, I want my own hands on it. I build personal products on top of LLMs like Claude and OpenAI. Information overload, food waste, the friction of task management — the small problems that live in the cracks between work and daily life — are what I want to solve by combining those tools with what I already know.",
    languagesHeading: "Languages",
    languages: ["Mandarin (Traditional)", "Japanese", "English"],

    // ---- Skills ----
    sectionSkillsHeading: "Skills & Certifications",
    skillGroups: [
      {
        heading: "Programming Languages",
        items: ["Python", "TypeScript", "JavaScript", "Java", "Bash", "HTML/CSS"],
      },
      {
        heading: "Development Environment",
        items: ["Cursor", "Claude Code"],
      },
      {
        heading: "Project Management",
        items: ["Git", "GitHub", "Notion", "Obsidian"],
      },
      {
        heading: "Operating Systems",
        items: ["Linux", "macOS", "Windows"],
      },
      {
        heading: "Databases",
        items: ["MySQL", "PostgreSQL (Supabase)"],
      },
      {
        heading: "Frameworks / Libraries",
        items: ["Next.js", "React", "FastAPI", "Spring Boot", "Node.js"],
      },
      {
        heading: "Process & AI",
        items: ["Maintenance & Operations", "Claude API", "OpenAI API", "LangChain", "RAG", "Prompt Engineering"],
      },
    ],
    certsHeading: "Certifications",
    certObtainedLabel: "Obtained",
    certPlannedLabel: "Planned",

    // ---- Projects ----
    sectionProjectsHeading: "Projects",
    projects: [
      {
        name: "AWS Cert Roadmap Lab",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "A study site that ties glossary, service comparisons, mock questions, and architecture diagrams into a single roadmap, so AWS certification learners stop losing track of what to memorize next.",
        deliveryLanguages: ["Japanese"],
        stack: ["Next.js", "TypeScript", "Python", "AWS Lambda"],
        imageUrl: "/projects/aws-cert-roadmap-lab-og.png",
        imageAlt: "OGP image of AWS Cert Roadmap Lab showing the learning roadmap with glossary, service comparison, and mock exam entry points",
        url: "https://www.aws-cert-roadmap-lab.com",
      },
      {
        name: "secretary-bot",
        status: "running" as const,
        statusIcon: "●" as const,
        statusLabel: "Running",
        description:
          "A personal secretary bot that pulls Notion, Slack, and LINE into one workflow, solving the morning friction of figuring out where to start when tasks are scattered across apps.",
        deliveryLanguages: ["Mandarin", "Japanese"],
        stack: ["TypeScript", "Deno", "Notion API"],
        imageUrl: "/projects/secretary-bot-demo.png",
        imageAlt: "secretary-bot digest delivery example (recreated with fictional tasks)",
      },
      {
        name: "Recipe Generator",
        status: "released" as const,
        statusIcon: "▲" as const,
        statusLabel: "Released",
        description:
          "A recipe recommendation tool that pairs kitchen-prep instincts from years in restaurants with generative AI, so the leftover ingredients in your fridge stop going to waste.",
        deliveryLanguages: ["Japanese"],
        stack: ["Next.js", "TypeScript", "Claude API", "Supabase"],
        imageUrl: "/projects/recipe-generator.png",
        imageAlt: "Recipe Generator landing screen — a three-step UI that turns fridge ingredients into a recipe",
      },
      {
        name: "DAINews",
        status: "in-dev" as const,
        statusIcon: "◌" as const,
        statusLabel: "In Dev",
        description:
          "An AI daily news service in development, aimed at cutting through information overload for individual readers.",
        deliveryLanguages: ["Japanese"],
        stack: ["Next.js", "Claude API", "Resend"],
        imageUrl: "/projects/dainews.png",
        imageAlt: "DAINews morning email preview (mock display, in development)",
      },
    ],
    projectPlaceholderLabel: "Coming soon",
    projectDeliveryLanguagesLabel: "Delivery languages",
    projectCtaLabel: "Visit site →",

    // ---- Philosophy ----
    // 制約 2: 国・国籍・台湾人としての言及なし。普遍的な価値観として記述。
    sectionPhilosophyHeading: "IT & AI Philosophy",
    philosophyBody:
      "Technology, for me, is only worth something when it makes the problem in front of someone a little lighter — and when it gets refined down to the point where anyone can use it without hesitation. The habit I picked up in restaurant kitchens, of starting from the voices on the floor, has stayed the same whether I'm running infrastructure or shipping products with AI baked in. Running infrastructure taught me that small, invisible failures can stop an entire operation. The same is true of AI: more important than a flashy output is leaving a trace of why a decision was made, and folding the system into a flow where a human can verify it. The tools change with the times, but the stance — start from the voice of the person using it, keep verifying as you go, and grow it into something that can be trusted for the long haul — is what I've carried through, from kitchens to IT to AI.",

    // ---- Contact ----
    sectionContactHeading: "Contact",
    copyrightText: "© 2026 Fumi / Nien-wen Juan",  // FP-015: en 専用化 (英語ロケール訪問者の可読性 / D325 整合)
  } satisfies SiteContent,
} as const satisfies Record<Locale, SiteContent>;

// 証照リストを export（全言語で共通使用）
export { CERTS };
