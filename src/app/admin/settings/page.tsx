export default function AdminSettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title text-3xl font-semibold text-slate-900">Settings</h1>
      <div className="max-w-xl space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <input className="field" placeholder="Admin name" />
        <input className="field" placeholder="Admin email" />
        <button className="btn-primary" type="button">Save changes</button>
      </div>
    </div>
  );
}
