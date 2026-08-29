import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">404</div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
          Off the <span className="text-ember">track.</span>
        </h1>
        <p className="text-zinc-400 mb-8">That car isn't in our garage.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ember text-black font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-white transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
