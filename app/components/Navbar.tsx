"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Enquire" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-dark shadow-2xl" : "bg-gradient-to-b from-black/40 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-7 h-7 text-stone-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 17l4-8h10l4 8M5 17h14M7 17v3h2v-3M15 17v3h2v-3M9 9h6" />
          </svg>
          <span className="text-lg font-light tracking-[0.25em] uppercase text-stone-100 group-hover:text-white transition-colors">Apex</span>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-stone-500">Motors</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-sm tracking-wide link-underline transition-colors ${
                pathname === link.href ? "text-white" : "text-stone-400 hover:text-white"
              }`}>{link.label}</Link>
          ))}
        </div>

        <button className="md:hidden text-stone-300" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-stone-800">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className={`text-sm ${pathname === link.href ? "text-white" : "text-stone-400"}`}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
