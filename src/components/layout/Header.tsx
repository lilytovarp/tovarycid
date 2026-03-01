"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 md:px-6">
        <Link href={`/${locale}`} className="section-title text-2xl font-semibold text-slate-900">
          Tovarycid
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 md:gap-5">
          <Link className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900" href={`/${locale}`}>
            {t("home")}
          </Link>
          <Link className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900" href={`/${locale}/about`}>
            {t("about")}
          </Link>
          <Link className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900" href={`/${locale}/services`}>
            {t("services")}
          </Link>
          <Link className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900" href={`/${locale}/testimonials`}>
            {t("testimonials")}
          </Link>
          <Link className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900" href={`/${locale}/contact`}>
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
