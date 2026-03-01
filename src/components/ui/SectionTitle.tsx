export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="section-title text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
