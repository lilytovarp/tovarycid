# Tovarycid - IP Law Firm Website

## Overview
Bilingual (Spanish/English) website for an IP law firm in Mexico. Main focus: service pages with quotation forms, admin dashboard for managing leads.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- PostgreSQL (via Prisma ORM)
- NextAuth.js (admin auth only, no customer accounts)
- React Email + Nodemailer (transactional emails)
- i18n via next-intl

## Pages (User-facing)
- `/` Home - hero, key services, trust signals, CTA
- `/about` About - firm story, lawyer profile, credentials
- `/services` Services overview
- `/services/[slug]` Individual service page with dedicated quotation form
- `/testimonials` Success stories / client testimonials
- `/contact` General contact page with form + WhatsApp CTA
- `/privacy` Privacy policy
- All pages bilingual ES/EN with language toggle

## Services (initial list - placeholder content)
- Trademark Registration
- Patent Filing
- Copyright Registration
- IP Litigation
- IP Consulting
- Trade Secret Protection

## Quotation Forms
Each service has a tailored form collecting:
- Client name, email, phone
- Company name (optional)
- Service-specific fields (e.g., trademark name, class, description)
- Brief description of needs
- How they heard about us
On submit: save to DB, send confirmation email to client, send TG notification

## Admin Dashboard (/admin)
- Protected by NextAuth (credentials provider initially)
- Dashboard home: summary stats (new, pending, quoted, etc.)
- Quotations table with search, filter by status/service/date
- Status pipeline: New → Reviewed → Quoted → Accepted → Rejected → Completed
- Individual quotation detail view with notes field
- Ability to update status (triggers email to client on key transitions)
- CSV export of quotations
- Settings page for admin profile

## Support Chat Widget
- Guided decision-tree chatbot (no AI)
- Pre-defined flows: "I need help with..." → service categories → FAQ answers or route to quotation form
- Floating widget on all pages
- Configurable flow via JSON/config

## Notifications
- Email: confirmation to client on form submit, status update emails
- Telegram: bot notification to private group on new quotation submission

## Design Direction
- Professional, clean, modern (inspired by easylex.mx UX patterns)
- Color scheme: navy/dark blue + gold/amber accents (placeholder, configurable)
- Mobile-first responsive
- Accessible (WCAG AA)

## Deployment
- Hostinger VPS with Nginx reverse proxy
- Let's Encrypt SSL (certbot with auto-renewal)
- PostgreSQL on same VPS
- PM2 for process management
- Domain TBD (placeholder: tovarycid.com)

## Project Structure
```
tovarycid/
├── prisma/
│   └── schema.prisma
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx (home)
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── testimonials/
│   │   │   ├── contact/
│   │   │   └── privacy/
│   │   ├── admin/
│   │   │   ├── page.tsx (dashboard)
│   │   │   ├── quotations/
│   │   │   └── settings/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── quotations/
│   │   │   └── chat/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/ (shared UI components)
│   │   ├── forms/ (quotation forms)
│   │   ├── chat/ (support widget)
│   │   ├── admin/ (dashboard components)
│   │   └── layout/ (header, footer, nav)
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── email.ts
│   │   ├── telegram.ts
│   │   └── i18n.ts
│   ├── messages/
│   │   ├── en.json
│   │   └── es.json
│   └── types/
├── .env.example
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Phase 1 Task (THIS SESSION)
Scaffold the entire project structure:
1. Initialize Next.js with TypeScript + Tailwind
2. Set up Prisma schema (Quotation, User, Service models)
3. Create the file/folder structure above
4. Build basic layout (header, footer, nav with i18n toggle)
5. Create placeholder pages for all routes
6. Set up NextAuth with credentials provider
7. Build the admin dashboard layout with sidebar nav
8. Create the quotation list page with mock data
9. Create the quotation detail page
10. Add the basic quotation form component
11. Commit everything and push to GitHub

Do NOT install PostgreSQL or set up the DB connection - just the Prisma schema and client setup.
Keep all content as placeholders - real content comes later.
