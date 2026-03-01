export type QuotationStatus = "NEW" | "REVIEWED" | "QUOTED" | "ACCEPTED" | "REJECTED" | "COMPLETED";

export type Quotation = {
  id: string;
  service: string;
  clientName: string;
  email: string;
  phone: string;
  companyName?: string;
  description: string;
  heardFrom: string;
  status: QuotationStatus;
  createdAt: string;
  notes?: string;
};
