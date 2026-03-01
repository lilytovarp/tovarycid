"use client";
import { useState } from "react";

const flow = {
  greeting: "Hi! I need help with…",
  options: ["Trademark Registration", "Patent Filing", "IP Litigation", "General Question"]
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-xl">
          <p className="mb-2 section-title font-semibold text-slate-900">Support assistant</p>
          <p className="mb-3 text-slate-500">{flow.greeting}</p>
          <div className="space-y-2">
            {flow.options.map((option) => (
              <button key={option} className="btn-soft w-full justify-start text-left">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700">
        {open ? "Close chat" : "Need help?"}
      </button>
    </div>
  );
}
