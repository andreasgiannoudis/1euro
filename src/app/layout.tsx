import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1euro.gr — Πόσο ψηλά μπορεί να φτάσει;",
  description:
    "Ο 1ος πλήρωσε 1€. Κάθε επόμενος πληρώνει 1€ παραπάνω και παίρνει την #1 θέση στην κορυφή του leaderboard.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}