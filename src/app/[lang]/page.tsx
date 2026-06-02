import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { CONTENT, CERTS } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ContactFooter } from "@/components/ContactFooter";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return (["ja", "zh-TW"] as Locale[]).map((lang) => ({ lang }));
}

export default async function LandingPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = CONTENT[lang];

  return (
    <>
      <SiteHeader lang={lang} content={c} />
      <main>
        <HeroSection content={c} />
        <AboutSection content={c} />
        <SkillsSection content={c} certs={CERTS} />
        <ProjectsSection locale={lang} content={c} />
        <PhilosophySection content={c} />
      </main>
      <ContactFooter content={c} />
    </>
  );
}
