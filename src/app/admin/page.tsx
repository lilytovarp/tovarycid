import { quotationStats } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-amber-300">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(quotationStats).map(([status, value]) => (
          <div key={status} className="rounded-xl border border-slate-700 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{status}</p>
            <p className="text-3xl font-bold text-amber-300">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
