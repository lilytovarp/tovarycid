import { Quotation } from "@/types";

export const mockQuotations: Quotation[] = [
  {
    id: "Q-2026-001",
    service: "Trademark Registration",
    clientName: "Carla Mendoza",
    email: "carla@example.com",
    phone: "+52 614 111 2233",
    companyName: "Mendoza Labs",
    description: "Need brand protection for two product lines in class 30 and 35.",
    heardFrom: "Google",
    status: "NEW",
    createdAt: "2026-03-01",
    notes: "Requested expedited review."
  },
  {
    id: "Q-2026-002",
    service: "Patent Filing",
    clientName: "Luis Ortega",
    email: "luis@example.com",
    phone: "+52 55 3333 7788",
    description: "Utility patent filing for agricultural sensor hardware.",
    heardFrom: "Referral",
    status: "REVIEWED",
    createdAt: "2026-02-27",
    notes: "Need technical drawings from client."
  },
  {
    id: "Q-2026-003",
    service: "IP Litigation",
    clientName: "Ana Paredes",
    email: "ana@example.com",
    phone: "+52 81 6000 9911",
    companyName: "Nova Creative Studio",
    description: "Copyright infringement claim against unauthorized reseller.",
    heardFrom: "WhatsApp",
    status: "QUOTED",
    createdAt: "2026-02-25",
    notes: "Quotation sent. Awaiting approval."
  }
];

export const quotationStats = {
  NEW: 4,
  REVIEWED: 7,
  QUOTED: 3,
  ACCEPTED: 9,
  REJECTED: 2,
  COMPLETED: 12
};
