import { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <AdminSidebar />
      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  );
}
