export default function AdminLoginPage() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="section-title mb-5 text-2xl font-semibold text-slate-900">Admin Login</h1>
      <form className="space-y-4">
        <input className="field" placeholder="Email" />
        <input className="field" type="password" placeholder="Password" />
        <button className="btn-primary w-full" type="submit">Sign in</button>
      </form>
    </div>
  );
}
