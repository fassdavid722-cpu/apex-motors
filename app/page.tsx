import Link from "next/link";
import { cars, type Car } from "@/lib/cars";

function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <article
      className="group flex flex-col bg-white border border-stone-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <Link href={`/collection/${car.id}`}>
        <div
          className="aspect-[4/3] w-full flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: car.accent }}
        >
          <span className="text-stone-50 text-sm tracking-[0.2em] uppercase opacity-80 group-hover:scale-110 transition-transform duration-500">
            {car.name}
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-50/20 group-hover:h-2 transition-all duration-300" />
        </div>
      </Link>
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
    </article>
  );
}

export default function Home() {
  const featured = cars.slice(0, 3);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-8 animate-fade-in-up">
            Apex Motors
          </p>
          <h1 className="text-5xl md:text-8xl font-light text-stone-50 leading-[1.05] tracking-tight mb-8 text-balance animate-fade-in-up stagger-1">
            Extraordinary automobiles,
            <br />
            <span className="italic font-extralight">hand-selected.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            A small, considered collection of grand tourers, spiders, and coupés —
            each one chosen for the way it drives, not the way it advertises.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up stagger-3">
            <Link
              href="/collection"
              className="px-8 py-4 bg-stone-50 text-stone-900 text-sm tracking-wide hover:bg-stone-200 transition-all duration-300 hover:scale-105"
            >
              View the collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-stone-500 text-stone-100 text-sm tracking-wide hover:bg-stone-50 hover:text-stone-900 hover:border-stone-50 transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
          <svg className="w-6 h-6 text-stone-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: `${cars.length}`, label: "Cars in Collection" },
            { value: `${cars.reduce((s, c) => s + c.horsepower, 0)}`, label: "Total Horsepower" },
            { value: `${Math.max(...cars.map(c => c.horsepower))}`, label: "Most Powerful (hp)" },
            { value: "100%", label: "Hand-Selected" },
          ].map((stat, i) => (
            <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
              <p className="text-3xl font-light text-stone-50">{stat.value}</p>
              <p className="text-xs tracking-wide uppercase text-stone-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-3">Featured</p>
            <h2 className="text-4xl font-light text-stone-900">Motor cars of the moment</h2>
          </div>
          <Link
            href="/collection"
            className="text-sm text-stone-600 hover:text-stone-900 tracking-wide mt-4 md:mt-0 group"
          >
            View all <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">Our Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-light text-stone-50 leading-tight mb-8 text-balance">
            We don't sell cars. We curate experiences.
          </h2>
          <p className="text-stone-400 leading-relaxed text-lg">
            Every vehicle in our collection has been driven, evaluated, and chosen
            by people who care about the craft. Not spec sheets. Not badge prestige.
            Just the feel of a well-engineered machine doing what it was built to do.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-sm tracking-wide text-stone-300 hover:text-stone-50 border-b border-stone-600 hover:border-stone-300 pb-1 transition-colors"
          >
            Read our story →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-light text-stone-900 mb-6">Ready to find your next motor car?</h2>
        <p className="text-stone-600 mb-10 max-w-xl mx-auto">
          All viewings are by appointment. Get in touch and we'll arrange a private viewing.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors"
        >
          Schedule a viewing
        </Link>
      </section>
    </main>
  );
}
