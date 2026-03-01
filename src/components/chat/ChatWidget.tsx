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
        <div className="mb-3 w-80 rounded-xl border border-amber-400/30 bg-slate-900 p-4 text-sm text-slate-100 shadow-2xl">
          <p className="mb-2 font-semibold text-amber-300">Support assistant</p>
          <p className="mb-3 text-slate-300">{flow.greeting}</p>
          <div className="space-y-2">
            {flow.options.map((option) => (
              <button key={option} className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-left hover:border-amber-400/50">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg">
        {open ? "Close chat" : "Need help?"}
      </button>
    </div>
  );
}
