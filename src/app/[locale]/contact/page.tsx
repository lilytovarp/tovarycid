import { QuotationForm } from "@/components/forms/QuotationForm";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Contact" subtitle="General inquiry form plus WhatsApp CTA." />
      <a className="inline-block rounded-md bg-emerald-500 px-4 py-2 font-semibold text-slate-950" href="#">WhatsApp us</a>
      <QuotationForm serviceName="General inquiry" />
    </div>
  );
}
