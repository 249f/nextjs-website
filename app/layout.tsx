import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "حمزة | للحلول الهندسية المتكاملة",
  description: "خبراء في تقديم الحلول الهندسية المتكاملة في مجال أنظمة المباني وخطوط الإنتاج.",
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
