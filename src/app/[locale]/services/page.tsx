import Link from "next/link";
import { getLocale } from "next-intl/server";
import { services } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default async function ServicesPage() {
  const locale = await getLocale();
  return (
    <div>
      <SectionTitle title="Services" subtitle="Explore legal services for intellectual property matters." />
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:border-amber-400/40">
            <p className="text-lg font-semibold text-amber-300">{service.key}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
