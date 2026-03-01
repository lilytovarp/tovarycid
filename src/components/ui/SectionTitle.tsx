export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-amber-300">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
    </div>
  );
}
