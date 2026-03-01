import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HomePage() {
  const tHero = await getTranslations("hero");
  const tCta = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <div className="space-y-14">
      <section className="app-card overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-white to-amber-50 p-8 md:p-10">
        <h1 className="section-title text-4xl font-semibold text-slate-900 md:text-5xl">{tHero("title")}</h1>
        <p className="mt-4 max-w-2xl text-slate-600">{tHero("subtitle")}</p>
        <Link className="btn-primary mt-6" href={`/${locale}/contact`}>
          {tCta("getQuote")}
        </Link>
      </section>
    </div>
  );
}
