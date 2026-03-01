import { QuotationTable } from "@/components/admin/QuotationTable";

export default function AdminQuotationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-amber-300">Quotations</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <input className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2" placeholder="Search..." />
        <select className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2"><option>All Statuses</option></select>
        <input className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2" type="date" />
      </div>
      <QuotationTable />
    </div>
  );
}
