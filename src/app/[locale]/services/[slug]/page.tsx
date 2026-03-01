import { notFound } from "next/navigation";
import { services } from "@/lib/constants";
import { QuotationForm } from "@/components/forms/QuotationForm";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-amber-300">{service.key}</h1>
      <QuotationForm serviceName={service.key} />
    </div>
  );
}
