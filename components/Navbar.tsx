"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Garage" },
  { href: "/engines", label: "Engines" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-ember flex items-center justify-center font-black text-black text-sm group-hover:rotate-12 transition-transform">
            A
          </div>
          <div className="leading-none">
            <div className="text-sm font-black tracking-widest">APEX</div>
            <div className="text-[10px] tracking-[0.3em] text-zinc-500">MOTORS</div>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                  active
                    ? "text-ember"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Inventory
        </div>
      </div>
    </header>
  );
}
