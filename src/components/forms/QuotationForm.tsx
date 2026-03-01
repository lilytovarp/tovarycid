"use client";

type Props = { serviceName: string };

export function QuotationForm({ serviceName }: Props) {
  return (
    <form className="space-y-4 rounded-xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-amber-300">Request quotation: {serviceName}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Client name" />
        <input className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Email" type="email" />
        <input className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Phone" />
        <input className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Company (optional)" />
      </div>
      <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Service-specific detail (e.g., trademark name)" />
      <textarea className="min-h-28 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Brief description of your needs" />
      <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="How did you hear about us?" />
      <button type="submit" className="rounded-md bg-amber-400 px-4 py-2 font-semibold text-slate-950">Submit request</button>
    </form>
  );
}
