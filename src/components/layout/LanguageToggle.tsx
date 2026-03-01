"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const target = locale === "en" ? "es" : "en";
  const switchPath = pathname.replace(/^\/(en|es)/, `/${target}`);

  return (
    <Link href={switchPath} className="rounded-full border border-amber-400 px-3 py-1 text-xs font-semibold text-amber-300">
      {target.toUpperCase()}
    </Link>
  );
}
