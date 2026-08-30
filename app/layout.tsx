import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Apex Motors — Premium Luxury & Performance Cars",
  description: "A curated collection of extraordinary automobiles — grand tourers, supercars, and coupés, hand-selected for the way they drive.",
  openGraph: {
    title: "Apex Motors — Premium Luxury & Performance Cars",
    description: "A curated collection of extraordinary automobiles.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
