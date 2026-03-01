import { NextResponse } from "next/server";
import { mockQuotations } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: mockQuotations });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "Quotation received", data: body }, { status: 201 });
}
