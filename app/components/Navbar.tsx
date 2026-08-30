"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-stone-50/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-xl font-light tracking-[0.2em] uppercase transition-colors ${
            scrolled ? "text-stone-900" : "text-stone-50"
          }`}>
            Apex
          </span>
          <span className={`text-xs font-medium tracking-[0.3em] uppercase transition-colors ${
            scrolled ? "text-stone-500" : "text-stone-300"
          }`}>
            Motors
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
            scrolled ? "text-stone-700" : "text-stone-100"
          }`}>Home</Link>
          <Link href="/collection" className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
            scrolled ? "text-stone-700" : "text-stone-100"
          }`}>Collection</Link>
          <Link href="/about" className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
            scrolled ? "text-stone-700" : "text-stone-100"
          }`}>About</Link>
          <Link href="/contact" className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
            scrolled ? "text-stone-700" : "text-stone-100"
          }`}>Enquire</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className={`w-6 h-6 ${scrolled ? "text-stone-900" : "text-stone-50"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">Home</Link>
            <Link href="/collection" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">Collection</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">Enquire</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
