export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const services = [
  { slug: "trademark-registration", key: "trademarkRegistration", icon: "™" },
  { slug: "patent-filing", key: "patentFiling", icon: "⚖️" },
  { slug: "copyright-registration", key: "copyrightRegistration", icon: "©" },
  { slug: "ip-litigation", key: "ipLitigation", icon: "🏛️" },
  { slug: "ip-consulting", key: "ipConsulting", icon: "💼" },
  { slug: "trade-secret-protection", key: "tradeSecretProtection", icon: "🔐" }
] as const;

export const adminNavItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/quotations", label: "Quotations" },
  { href: "/admin/settings", label: "Settings" }
];
