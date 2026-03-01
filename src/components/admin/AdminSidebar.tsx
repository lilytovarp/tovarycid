import Link from "next/link";
import { adminNavItems } from "@/lib/constants";

export function AdminSidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-slate-700 bg-slate-950 p-5 text-slate-200">
      <p className="mb-8 text-xl font-bold text-amber-400">Tovarycid Admin</p>
      <nav className="space-y-2">
        {adminNavItems.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-slate-800">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
