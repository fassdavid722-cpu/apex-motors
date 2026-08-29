// app/page.tsx — Apex Motors home page
import Link from 'next/link';
import { cars, type Car } from '@/lib/cars';

function CarCard({ car }: { car: Car }) {
  return (
    <article className="group flex flex-col gap-3 p-6 bg-white border border-stone-200 transition-colors hover:border-stone-900">
      <div
        className="aspect-[4/3] w-full bg-stone-100 flex items-center justify-center"
        style={{ backgroundColor: car.accent }}
      >
        <span className="text-stone-50 text-sm tracking-widest uppercase">
          {car.name}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-stone-900">{car.name}</h3>
        <p className="text-sm text-stone-600">{car.tagline}</p>
      </div>
      <div className="flex items-baseline justify-between mt-2">
        <span className="text-lg font-medium text-stone-900">
          ${car.price.toLocaleString()}
        </span>
        <span className="text-xs text-stone-600 tracking-wide">
          {car.horsepower} hp · {car.year}
        </span>
      </div>
    </article>
  );
}

function HomeContent() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-6">
        Apex Motors
      </p>
      <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.05] tracking-tight mb-8">
        Extraordinary automobiles,
        <br />
        hand-selected.
      </h1>
      <p className="text-lg text-stone-600 max-w-xl mx-auto mb-10">
        A small, considered collection of grand tourers, spiders, and coupés —
        each one chosen for the way it drives, not the way it advertises.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/collection"
          className="px-6 py-3 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors"
        >
          View the collection
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-stone-900 text-stone-900 text-sm tracking-wide hover:bg-stone-900 hover:text-stone-50 transition-colors"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <HomeContent />
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-light text-stone-900">
            Featured motor cars
          </h2>
          <Link
            href="/collection"
            className="text-sm text-stone-600 hover:text-stone-900 tracking-wide"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
}
