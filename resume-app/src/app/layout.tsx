import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Parsons",
  description: "Lead Software Security Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">{children}</body>
    </html>
  );
}
