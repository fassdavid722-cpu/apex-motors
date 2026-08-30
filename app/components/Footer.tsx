import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 17l4-8h10l4 8M5 17h14M7 17v3h2v-3M15 17v3h2v-3M9 9h6" />
              </svg>
              <span className="text-lg font-light tracking-[0.25em] uppercase text-stone-200">Apex Motors</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
              A boutique dealership of extraordinary automobiles. Every car is
              hand-selected for character, performance, and the way it makes you
              feel behind the wheel.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-5">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/collection", label: "Collection" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Enquire" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-stone-500">
              <p>By appointment only</p>
              <p>Mayfair, London</p>
              <p>+44 20 7946 0000</p>
              <p className="text-stone-600">enquiries@apexmotors.example</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-700">© 2026 Apex Motors. All rights reserved.</p>
          <p className="text-xs text-stone-700">Designed and built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
