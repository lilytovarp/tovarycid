"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-400/20 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="text-xl font-bold text-amber-400">Tovarycid</Link>
        <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/services`}>{t("services")}</Link>
          <Link href={`/${locale}/testimonials`}>{t("testimonials")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
