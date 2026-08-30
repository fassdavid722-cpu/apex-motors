import Link from "next/link";
import { cars, type Car } from "@/lib/cars";

function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <Link
      href={`/collection/${car.id}`}
      className="group flex flex-col bg-white border border-stone-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >
      <div
        className="aspect-[4/3] w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: car.accent }}
      >
        <span className="text-stone-50 text-sm tracking-[0.2em] uppercase opacity-80 group-hover:scale-110 transition-transform duration-500">
          {car.name}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <span className="text-xs tracking-[0.15em] uppercase text-stone-500">{car.category}</span>
        <h3 className="text-xl font-medium text-stone-900">{car.name}</h3>
        <p className="text-sm text-stone-600">{car.tagline}</p>
        <div className="flex items-baseline justify-between mt-3 pt-3 border-t border-stone-100">
          <span className="text-lg font-medium text-stone-900">
            ${car.price.toLocaleString()}
          </span>
          <span className="text-xs text-stone-500 tracking-wide">
            {car.horsepower} hp · {car.year}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionPage() {
  const categories = ["All", ...Array.from(new Set(cars.map((c) => c.category)))];
  const sorted = [...cars].sort((a, b) => b.price - a.price);

  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">The Collection</p>
          <h1 className="text-5xl font-light text-stone-900 mb-4">Every motor car</h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            A curated selection of extraordinary automobiles, each chosen for its
            unique character and driving experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 text-sm tracking-wide border border-stone-300 text-stone-600 bg-white"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-stone-500 text-sm">
            Don't see what you're looking for?{" "}
            <Link href="/contact" className="text-stone-900 underline underline-offset-4 hover:text-stone-600">
              Tell us what you want
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
