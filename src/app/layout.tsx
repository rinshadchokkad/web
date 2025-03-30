import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const KarlaSans = Karla({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rinshad M",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KarlaSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
