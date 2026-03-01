import { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-slate-950 text-slate-100">
      <AdminSidebar />
      <main className="min-h-screen flex-1 p-8">{children}</main>
    </div>
  );
}
