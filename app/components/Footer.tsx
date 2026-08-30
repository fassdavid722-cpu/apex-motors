import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-light tracking-[0.2em] uppercase text-stone-50 mb-4">Apex Motors</h3>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A boutique dealership of extraordinary automobiles. Every car is
              hand-selected for character, performance, and the way it makes you
              feel behind the wheel.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">Home</Link>
              <Link href="/collection" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">Collection</Link>
              <Link href="/about" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">Enquire</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-stone-400">
              <p>By appointment only</p>
              <p>Mayfair, London</p>
              <p>+44 20 7946 0000</p>
              <p className="text-stone-500">enquiries@apexmotors.example</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">© 2026 Apex Motors. All rights reserved.</p>
          <p className="text-xs text-stone-500">Designed and built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
