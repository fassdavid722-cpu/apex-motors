import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-sm bg-ember flex items-center justify-center font-black text-black text-sm">
              A
            </div>
            <div className="leading-none">
              <div className="text-sm font-black tracking-widest">APEX MOTORS</div>
              <div className="text-[10px] tracking-[0.3em] text-zinc-500">EST. 2026</div>
            </div>
          </div>
          <p className="text-sm text-zinc-500 max-w-md">
            A curated digital garage of the world's most extreme performance cars. Built for the
            obsessive. By the obsessive.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/inventory" className="hover:text-ember">Garage</Link></li>
            <li><Link href="/engines" className="hover:text-ember">Engine Atlas</Link></li>
            <li><Link href="/about" className="hover:text-ember">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>concierge@apexmotors.io</li>
            <li>+1 (212) 555-0199</li>
            <li>Manhattan · London · Tokyo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          <div>© 2026 Apex Motors. All rights reserved.</div>
          <div>Drive responsibly. Always on a closed course.</div>
        </div>
      </div>
    </footer>
  );
}
