import { SectionTitle } from "@/components/ui/SectionTitle";

export default function TestimonialsPage() {
  return (
    <div>
      <SectionTitle title="Testimonials" subtitle="Client success stories and trust signals." />
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2, 3].map((id) => (
          <article key={id} className="app-card text-slate-600">
            “Placeholder testimonial #{id}.”
          </article>
        ))}
      </div>
    </div>
  );
}
