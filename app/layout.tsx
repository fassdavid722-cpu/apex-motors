import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apex Motors — Premium Luxury & Performance Cars",
  description: "A small, considered collection of grand tourers, spiders, and coupés — each one chosen for the way it drives.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
