import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("nav");

  return (
    <footer className="mt-16 border-t border-amber-400/20 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Tovarycid. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href={`/${locale}/privacy`}>{t("privacy")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
