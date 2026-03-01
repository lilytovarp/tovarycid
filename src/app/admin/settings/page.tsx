export default function AdminSettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-amber-300">Settings</h1>
      <div className="max-w-xl space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Admin name" />
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Admin email" />
      </div>
    </div>
  );
}
