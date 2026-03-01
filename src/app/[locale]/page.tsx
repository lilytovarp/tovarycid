import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { services } from "@/lib/constants";

export default async function HomePage() {
  const tHero = await getTranslations("hero");
  const tCta = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-10">
        <h1 className="text-4xl font-bold text-amber-300">{tHero("title")}</h1>
        <p className="mt-4 max-w-2xl text-slate-300">{tHero("subtitle")}</p>
        <Link className="mt-6 inline-block rounded-md bg-amber-400 px-5 py-3 font-semibold text-slate-950" href={`/${locale}/contact`}>{tCta("getQuote")}</Link>
      </section>
    </div>
  );
}
