import Link from "next/link";
import { adminNavItems } from "@/lib/constants";

export function AdminSidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <p className="section-title mb-6 text-xl font-semibold text-slate-900">Tovarycid Admin</p>
      <nav className="grid gap-2 md:block md:space-y-2">
        {adminNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
