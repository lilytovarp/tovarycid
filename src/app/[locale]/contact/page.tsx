import { QuotationForm } from "@/components/forms/QuotationForm";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Contact" subtitle="General inquiry form plus WhatsApp CTA." />
      <a className="btn-soft border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100" href="#">
        WhatsApp us
      </a>
      <QuotationForm serviceName="General inquiry" />
    </div>
  );
}
