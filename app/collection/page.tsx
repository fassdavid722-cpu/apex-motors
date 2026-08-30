import Link from "next/link";
import { cars, type Car } from "@/lib/cars";
import Image from "next/image";

function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <Link
      href={`/collection/${car.id}`}
      className="group relative bg-stone-900 rounded-2xl overflow-hidden card-3d animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
    >
      <div className="img-zoom relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 glass text-xs tracking-wide uppercase text-stone-200 rounded-full">
            {car.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-stone-100 mb-1">{car.name}</h3>
        <p className="text-sm text-stone-400 mb-4">{car.tagline}</p>
        <div className="flex items-baseline justify-between pt-4 border-t border-stone-800">
          <span className="text-lg font-medium text-white">
            ${car.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>{car.horsepower} hp</span>
            <span className="w-1 h-1 bg-stone-700 rounded-full" />
            <span>{car.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionPage() {
  const categories = ["All", ...Array.from(new Set(cars.map((c) => c.category)))];
  const sorted = [...cars].sort((a, b) => b.price - a.price);

  return (
    <main className="bg-stone-950 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Every motor car</h1>
          <p className="text-stone-400 max-w-xl mx-auto">
            A curated selection of extraordinary automobiles, each chosen for its
            unique character and driving experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 text-sm tracking-wide glass text-stone-300 rounded-full cursor-default hover:bg-white/10 transition-colors"
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
            <Link href="/contact" className="text-white link-underline">
              Tell us what you want
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
