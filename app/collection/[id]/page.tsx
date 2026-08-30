import Link from "next/link";
import { cars } from "@/lib/cars";
import { notFound } from "next/navigation";
import Image from "next/image";
import Car360Viewer from "@/app/components/Car360Viewer";
import ScrollReveal from "@/app/components/ScrollReveal";

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return notFound();

  const related = cars.filter((c) => c.category === car.category && c.id !== car.id).slice(0, 3);
  const otherCars = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <main className="bg-stone-950 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/collection" className="text-sm text-stone-500 hover:text-white tracking-wide mb-8 inline-block transition-colors">
          ← Back to collection
        </Link>

        {/* 360° Interactive Viewer */}
        {car.angles && car.angles.length > 1 ? (
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-sm tracking-[0.2em] uppercase text-stone-500">360° Interactive View</h2>
              <span className="px-3 py-1 glass text-xs text-green-400 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Live
              </span>
            </div>
            <Car360Viewer angles={car.angles} alt={car.name} autoRotate height="h-[55vh]" />
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 animate-scale-in" style={{ opacity: 0 }}>
              <Image src={car.image} alt={car.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 glass text-sm tracking-wide uppercase text-stone-200 rounded-full">{car.category}</span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Main info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <ScrollReveal className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">{car.brand}</p>
            <h1 className="text-5xl font-light text-white mb-3">{car.name}</h1>
            <p className="text-lg text-stone-400 mb-8 italic">{car.tagline}</p>
            <p className="text-stone-300 leading-relaxed text-lg">{car.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass rounded-2xl p-8 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Price</p>
                <p className="text-4xl font-light text-white">${car.price.toLocaleString()}</p>
              </div>
              <div className="space-y-3 py-6 border-y border-stone-800">
                {[
                  { label: "Power", value: `${car.horsepower} hp` },
                  { label: "Year", value: car.year.toString() },
                  { label: "0-60 mph", value: car.specs.zeroToSixty },
                  { label: "Top Speed", value: car.specs.topSpeed },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">{spec.label}</span>
                    <span className="text-sm font-medium text-stone-200">{spec.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block w-full px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-colors rounded-full text-center mt-6">Enquire about this car</Link>
              <Link href="/collection" className="block w-full px-8 py-4 glass text-stone-300 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-full text-center mt-3">Browse collection</Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Full Specs */}
        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-2xl font-light text-white mb-8">Full Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-800 rounded-2xl overflow-hidden">
              {[
                { label: "Engine", value: car.specs.engine },
                { label: "Top Speed", value: car.specs.topSpeed },
                { label: "0-60 mph", value: car.specs.zeroToSixty },
                { label: "Transmission", value: car.specs.transmission },
                { label: "Drivetrain", value: car.specs.drivetrain },
                { label: "Horsepower", value: `${car.horsepower} hp` },
              ].map((spec, i) => (
                <div key={i} className="bg-stone-900 p-6 flex items-center justify-between hover:bg-stone-800/50 transition-colors">
                  <span className="text-sm text-stone-500 tracking-wide">{spec.label}</span>
                  <span className="text-sm font-medium text-stone-200">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Related */}
        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-2xl font-light text-white mb-8">{related.length > 0 ? "Similar motor cars" : "Other motor cars"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(related.length > 0 ? related : otherCars).map((c) => (
                <Link key={c.id} href={`/collection/${c.id}`} className="group relative bg-stone-900 rounded-xl overflow-hidden card-3d">
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <Image src={c.image} alt={c.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-stone-100">{c.name}</h3>
                    <p className="text-sm text-stone-500 mt-1">${c.price.toLocaleString()} · {c.horsepower} hp</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
