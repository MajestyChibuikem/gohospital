import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godfrey Okoye University Teaching Hospital (GOUNITH) | Enugu, Nigeria",
  description:
    "Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi) in Trans-Ekulu, Enugu, Nigeria—24/7 Emergency, Cardiology (2D Echo), Endoscopy, Surgery, Maternity, Paediatrics, and Clinical Medical Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
