import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tovarycid",
  description: "IP law firm website scaffold"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
