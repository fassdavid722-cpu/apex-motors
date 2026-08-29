import { notFound } from "next/navigation";
import Link from "next/link";
import { CARS, getCarById, formatPrice } from "@/lib/cars";

export function generateStaticParams() {
  return CARS.map((c) => ({ id: c.id }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = getCarById(params.id);
  if (!car) return notFound();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden noise">
        <div className="absolute inset-0">
          <img
            src={car.hero}
            alt={car.model}
            className="w-full h-full object-cover scale-110"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
          <Link
            href="/inventory"
            className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 hover:text-ember mb-6 inline-flex items-center gap-2"
          >
            ← Back to Garage
          </Link>
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-2">
            {car.year} · {car.origin}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            {car.make}
          </h1>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-300">
            {car.model}
          </h2>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">{car.tagline}</p>
          <div className="mt-8 text-3xl font-black text-ember">{formatPrice(car.price)}</div>
        </div>
      </section>

      {/* Spec sheet */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/10">
            {[
              { label: "Horsepower", value: `${car.horsepower} hp` },
              { label: "Torque", value: `${car.torqueLbFt} lb-ft` },
              { label: "0–60 mph", value: `${car.zeroToSixty}s` },
              { label: "Top Speed", value: `${car.topSpeedMph} mph` },
              { label: "Weight", value: `${car.weight.toLocaleString()} lbs` },
              { label: "Drivetrain", value: car.drivetrain },
            ].map((spec) => (
              <div key={spec.label} className="bg-gunmetal p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
                  {spec.label}
                </div>
                <div className="text-2xl font-black text-white">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-4">The Story</div>
            <p className="text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed">
              {car.story}
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-4">Highlights</div>
            <ul className="space-y-3">
              {car.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember mt-2 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engine detail */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-4">Engine</div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
            {car.engine}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 bg-gunmetal p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Displacement</div>
              <div className="text-xl font-bold">{car.displacement}</div>
            </div>
            <div className="border border-white/10 bg-gunmetal p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Transmission</div>
              <div className="text-xl font-bold">{car.transmission}</div>
            </div>
            <div className="border border-white/10 bg-gunmetal p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Layout</div>
              <div className="text-xl font-bold">{car.drivetrain} · {car.bodyStyle}</div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/engines"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember hover:text-white"
            >
              Read the full engine atlas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Continue exploring the garage.
          </h3>
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 bg-ember text-black font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-white transition-colors"
          >
            ← All cars
          </Link>
        </div>
      </section>
    </div>
  );
}
