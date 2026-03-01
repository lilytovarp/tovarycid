"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" }
] as const;

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      {languages.map((lang) => {
        const switchPath = pathname.replace(/^\/(en|es)/, `/${lang.code}`);
        const isActive = locale === lang.code;

        return (
          <Link
            key={lang.code}
            href={switchPath}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              isActive ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span aria-hidden>{lang.flag}</span>
            <span>{lang.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
