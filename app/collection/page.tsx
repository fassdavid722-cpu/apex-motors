import Link from "next/link";
import { cars, type Car } from "@/lib/cars";

function CarCard({ car }: { car: Car }) {
  return (
    <Link href={\`/collection/${car.id}\`} className="group flex flex-col gap-3 p-6 bg-white border border-stone-200 transition-colors hover:border-stone-900">
      <div className="aspect-[4/3] w-full flex items-center justify-center" style={{ backgroundColor: car.accent }}>
        <span className="text-stone-50 text-sm tracking-widest uppercase">{car.name}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-stone-900">{car.name}</h3>
        <p className="text-sm text-stone-600">{car.tagline}</p>
      </div>
      <div className="flex items-baseline justify-between mt-2">
        <span className="text-lg font-medium text-stone-900">${car.price.toLocaleString()}</span>
        <span className="text-xs text-stone-600 tracking-wide">{car.horsepower} hp · {car.year}</span>
      </div>
    </Link>
  );
}

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-stone-600 hover:text-stone-900 tracking-wide mb-8 inline-block">← Back to home</Link>
        <h1 className="text-4xl font-light text-stone-900 mb-2">The Collection</h1>
        <p className="text-stone-600 mb-12">Every motor car, in one place.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </main>
  );
}
