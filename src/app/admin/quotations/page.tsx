import { QuotationTable } from "@/components/admin/QuotationTable";

export default function AdminQuotationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title text-3xl font-semibold text-slate-900">Quotations</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <input className="field" placeholder="Search..." />
        <select className="field"><option>All Statuses</option></select>
        <input className="field" type="date" />
      </div>
      <QuotationTable />
    </div>
  );
}
