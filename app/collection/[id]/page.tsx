import Link from "next/link";
import { cars } from "@/lib/cars";
import { notFound } from "next/navigation";

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return notFound();

  const related = cars.filter((c) => c.category === car.category && c.id !== car.id).slice(0, 3);
  const otherCars = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/collection"
          className="text-sm text-stone-500 hover:text-stone-900 tracking-wide mb-8 inline-block"
        >
          ← Back to collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visual */}
          <div
            className="aspect-[4/3] w-full flex items-center justify-center relative overflow-hidden rounded-sm animate-fade-in"
            style={{ backgroundColor: car.accent }}
          >
            <span className="text-stone-50 text-3xl tracking-[0.2em] uppercase opacity-70">
              {car.name}
            </span>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-stone-50/20 text-stone-50 text-xs tracking-wide uppercase">
                {car.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">{car.category}</p>
            <h1 className="text-5xl font-light text-stone-900 mb-3">{car.name}</h1>
            <p className="text-lg text-stone-600 mb-8 italic">{car.tagline}</p>
            <p className="text-stone-700 leading-relaxed mb-8">{car.description}</p>

            <div className="grid grid-cols-3 gap-6 py-8 border-t border-stone-200">
              <div>
                <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Price</p>
                <p className="text-2xl font-light text-stone-900">
                  ${car.price.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Power</p>
                <p className="text-2xl font-light text-stone-900">{car.horsepower} hp</p>
              </div>
              <div>
                <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Year</p>
                <p className="text-2xl font-light text-stone-900">{car.year}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors text-center"
              >
                Enquire about this car
              </Link>
              <Link
                href="/collection"
                className="px-8 py-4 border border-stone-300 text-stone-700 text-sm tracking-wide hover:bg-stone-100 transition-colors text-center"
              >
                Browse collection
              </Link>
            </div>
          </div>
        </div>

        {/* Specs table */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-stone-900 mb-8">Specifications</h2>
          <div className="bg-white border border-stone-200">
            {[
              { label: "Category", value: car.category },
              { label: "Year", value: car.year.toString() },
              { label: "Horsepower", value: `${car.horsepower} hp` },
              { label: "Price", value: `$${car.price.toLocaleString()}` },
              { label: "Badge", value: car.name.split(" ")[0] },
            ].map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 px-6 border-b border-stone-100 last:border-b-0"
              >
                <span className="text-sm text-stone-500 tracking-wide">{spec.label}</span>
                <span className="text-sm font-medium text-stone-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related cars */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-stone-900 mb-8">
            {related.length > 0 ? "Similar motor cars" : "Other motor cars"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(related.length > 0 ? related : otherCars).map((c) => (
              <Link
                key={c.id}
                href={`/collection/${c.id}`}
                className="group flex flex-col bg-white border border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="aspect-[4/3] w-full flex items-center justify-center"
                  style={{ backgroundColor: c.accent }}
                >
                  <span className="text-stone-50 text-sm tracking-[0.2em] uppercase opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {c.name}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-stone-900">{c.name}</h3>
                  <p className="text-sm text-stone-500 mt-1">
                    ${c.price.toLocaleString()} · {c.horsepower} hp
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
