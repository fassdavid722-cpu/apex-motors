import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Motors — Precision Performance",
  description:
    "A curated showcase of the world's most extraordinary performance and luxury automobiles. Engineered obsession, on four wheels.",
  keywords: [
    "supercars",
    "luxury cars",
    "performance",
    "Apex Motors",
    "exotic",
    "hypercar",
  ],
  openGraph: {
    title: "Apex Motors",
    description: "Precision performance, curated.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-ink text-bone">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
