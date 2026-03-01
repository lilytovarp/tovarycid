import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("nav");

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-medium text-slate-700">© {new Date().getFullYear()} Tovarycid. All rights reserved.</p>
          <div className="mt-2 flex gap-4">
            <Link className="hover:text-slate-900" href={`/${locale}/privacy`}>
              {t("privacy")}
            </Link>
            <Link className="hover:text-slate-900" href={`/${locale}/contact`}>
              {t("contact")}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Language</span>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}
