export default function AdminLoginPage() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border border-slate-700 bg-slate-900 p-8">
      <h1 className="mb-5 text-2xl font-bold text-amber-300">Admin Login</h1>
      <form className="space-y-4">
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Email" />
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2" type="password" placeholder="Password" />
      </form>
    </div>
  );
}
