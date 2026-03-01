import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.example.com",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: { user: process.env.SMTP_USER ?? "demo", pass: process.env.SMTP_PASS ?? "demo" }
});

export async function sendQuotationConfirmation(email: string, quotationId: string) {
  return mailer.sendMail({
    from: process.env.EMAIL_FROM ?? "hello@tovarycid.com",
    to: email,
    subject: `Quotation received: ${quotationId}`,
    text: "Thank you for contacting Tovarycid. We received your request."
  });
}
