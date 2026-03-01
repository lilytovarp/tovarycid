import { quotationStats } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="section-title mb-6 text-3xl font-semibold text-slate-900">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(quotationStats).map(([status, value]) => (
          <div key={status} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{status}</p>
            <p className="section-title text-3xl font-semibold text-blue-600">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
