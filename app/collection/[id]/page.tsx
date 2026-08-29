import Link from "next/link";
import { cars } from "@/lib/cars";
import { notFound } from "next/navigation";

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return notFound();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/collection" className="text-sm text-stone-600 hover:text-stone-900 tracking-wide mb-8 inline-block">← Back to collection</Link>
        
        <div className="aspect-[16/9] w-full flex items-center justify-center mb-8" style={{ backgroundColor: car.accent }}>
          <span className="text-stone-50 text-2xl tracking-widest uppercase">{car.name}</span>
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-4">{car.category}</p>
        <h1 className="text-5xl font-light text-stone-900 mb-4">{car.name}</h1>
        <p className="text-lg text-stone-600 mb-8">{car.tagline}</p>
        <p className="text-stone-700 leading-relaxed mb-8">{car.description}</p>

        <div className="flex gap-12 py-8 border-t border-stone-200">
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-1">Price</p>
            <p className="text-2xl font-light text-stone-900">${car.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-1">Power</p>
            <p className="text-2xl font-light text-stone-900">{car.horsepower} hp</p>
          </div>
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-1">Year</p>
            <p className="text-2xl font-light text-stone-900">{car.year}</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block px-6 py-3 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors">
          Enquire about this motor car
        </Link>
      </div>
    </main>
  );
}
