import Link from "next/link";
import { mockQuotations } from "@/lib/mock-data";

export function QuotationTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900">
      <table className="min-w-full text-left text-sm text-slate-200">
        <thead className="bg-slate-800 text-amber-300">
          <tr>
            <th className="p-3">ID</th><th className="p-3">Client</th><th className="p-3">Service</th><th className="p-3">Status</th><th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {mockQuotations.map((q) => (
            <tr key={q.id} className="border-t border-slate-700">
              <td className="p-3"><Link className="text-amber-300 underline" href={`/admin/quotations/${q.id}`}>{q.id}</Link></td>
              <td className="p-3">{q.clientName}</td><td className="p-3">{q.service}</td><td className="p-3">{q.status}</td><td className="p-3">{q.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
