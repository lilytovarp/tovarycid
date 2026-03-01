import { notFound } from "next/navigation";
import { mockQuotations } from "@/lib/mock-data";

function findQuotationByRouteId(routeId: string) {
  const exact = mockQuotations.find((q) => q.id.toLowerCase() === routeId.toLowerCase());
  if (exact) return exact;

  const shortMatch = routeId.toLowerCase().match(/^q-(\d{4})$/);
  if (shortMatch) {
    const sequence = shortMatch[1].slice(-3);
    const bySequence = mockQuotations.find((q) => q.id.endsWith(`-${sequence}`));
    if (bySequence) return bySequence;
  }

  return null;
}

export default async function QuotationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quotation = findQuotationByRouteId(id);
  if (!quotation) notFound();

  return (
    <div className="space-y-4">
      <h1 className="section-title text-3xl font-semibold text-slate-900">Quotation {quotation.id}</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
        <p>
          <span className="text-slate-500">Client:</span> {quotation.clientName}
        </p>
        <p>
          <span className="text-slate-500">Service:</span> {quotation.service}
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="mb-2 block text-sm font-medium text-slate-600">Internal notes</label>
        <textarea defaultValue={quotation.notes} className="field min-h-32" />
      </div>
    </div>
  );
}
