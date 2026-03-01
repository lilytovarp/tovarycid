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
          <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="app-card p-6 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <p className="section-title text-lg font-semibold text-slate-900">{service.key}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
