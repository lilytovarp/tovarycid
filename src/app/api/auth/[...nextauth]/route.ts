import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === (process.env.ADMIN_EMAIL ?? "admin@tovarycid.com") && credentials.password === (process.env.ADMIN_PASSWORD ?? "admin123")) {
          return { id: "1", name: "Admin", email: credentials.email };
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" }
});

export { handler as GET, handler as POST };
