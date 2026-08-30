import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Apex Motors — Premium Luxury & Performance Cars",
  description: "A small, considered collection of grand tourers, spiders, and coupés — each one chosen for the way it drives, not the way it advertises.",
  openGraph: {
    title: "Apex Motors — Premium Luxury & Performance Cars",
    description: "A curated collection of extraordinary automobiles.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
