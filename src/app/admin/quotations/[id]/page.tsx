import { notFound } from "next/navigation";
import { mockQuotations } from "@/lib/mock-data";

export default async function QuotationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quotation = mockQuotations.find((q) => q.id === id);
  if (!quotation) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-amber-300">Quotation {quotation.id}</h1>
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-slate-300">
        <p><span className="text-slate-500">Client:</span> {quotation.clientName}</p>
        <p><span className="text-slate-500">Service:</span> {quotation.service}</p>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
        <label className="mb-2 block text-sm text-slate-400">Internal notes</label>
        <textarea defaultValue={quotation.notes} className="min-h-32 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" />
      </div>
    </div>
  );
}
