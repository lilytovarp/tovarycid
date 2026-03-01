"use client";

type Props = { serviceName: string };

export function QuotationForm({ serviceName }: Props) {
  return (
    <form className="app-card space-y-4">
      <h3 className="section-title text-lg font-semibold text-slate-900">Request quotation: {serviceName}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="field" placeholder="Client name" />
        <input className="field" placeholder="Email" type="email" />
        <input className="field" placeholder="Phone" />
        <input className="field" placeholder="Company (optional)" />
      </div>
      <input className="field" placeholder="Service-specific detail (e.g., trademark name)" />
      <textarea className="field min-h-28" placeholder="Brief description of your needs" />
      <input className="field" placeholder="How did you hear about us?" />
      <button type="submit" className="btn-primary">Submit request</button>
    </form>
  );
}
