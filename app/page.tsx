import Link from "next/link";
import { cars, heroImage, type Car } from "@/lib/cars";
import Image from "next/image";
import Hero360 from "./components/Hero360";
import ScrollReveal from "./components/ScrollReveal";

function CarCard({ car, index }: { car: Car; index: number }) {
  return (
    <article className="group relative bg-stone-900 rounded-2xl overflow-hidden card-3d">
      <Link href={`/collection/${car.id}`}>
        <div className="img-zoom relative aspect-[16/10] overflow-hidden">
          <Image src={car.image} alt={car.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 glass text-xs tracking-wide uppercase text-stone-200 rounded-full">{car.category}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-stone-100 mb-1">{car.name}</h3>
          <p className="text-sm text-stone-400 mb-4">{car.tagline}</p>
          <div className="flex items-baseline justify-between pt-4 border-t border-stone-800">
            <span className="text-lg font-medium text-white">${car.price.toLocaleString()}</span>
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span>{car.horsepower} hp</span>
              <span className="w-1 h-1 bg-stone-700 rounded-full" />
              <span>{car.year}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Home() {
  const featured = cars.slice(0, 3);
  const ferrari = cars[0];

  return (
    <main className="bg-stone-950">
      {/* Cinematic Hero with 360° rotating Ferrari */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 360° rotating car background */}
        {ferrari.angles && (
          <Hero360 angles={ferrari.angles} alt={ferrari.name} />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-8 animate-fade-in-up">Apex Motors</p>
          <h1 className="text-5xl md:text-8xl font-light text-white leading-[1.05] tracking-tight mb-8 text-balance animate-fade-in-up stagger-1">
            Extraordinary automobiles,
            <br /><span className="italic font-extralight text-gradient">hand-selected.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            A curated collection of grand tourers, supercars, and coupés — each one chosen for the way it drives, not the way it advertises.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up stagger-3">
            <Link href="/collection" className="px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-all duration-300 hover:scale-105 rounded-full">View the collection</Link>
            <Link href="/contact" className="px-8 py-4 glass text-white text-sm tracking-wide hover:bg-white/10 transition-all duration-300 rounded-full">Enquire</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-5 z-10">
          <svg className="w-6 h-6 text-stone-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-16 border-y border-stone-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: `${cars.length}`, label: "Cars in Collection" },
            { value: `${cars.reduce((s, c) => s + c.horsepower, 0)}`, label: "Total Horsepower" },
            { value: `${Math.max(...cars.map(c => c.horsepower))}`, label: "Most Powerful (hp)" },
            { value: "360°", label: "Interactive Views" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center">
                <p className="text-4xl font-light text-white">{stat.value}</p>
                <p className="text-xs tracking-wide uppercase text-stone-500 mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-3">Featured</p>
              <h2 className="text-4xl md:text-5xl font-light text-white">Motor cars of the moment</h2>
            </div>
            <Link href="/collection" className="text-sm text-stone-400 hover:text-white tracking-wide mt-4 md:mt-0 group flex items-center gap-2">
              View all <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car, i) => (
            <ScrollReveal key={car.id} delay={i * 150}>
              <CarCard car={car} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Philosophy with parallax bg */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={cars[3].image} alt="" fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8 text-balance">
              We don't sell cars.<br /><span className="text-gradient">We curate experiences.</span>
            </h2>
            <p className="text-stone-400 leading-relaxed text-lg max-w-xl mx-auto">
              Every vehicle in our collection has been driven, evaluated, and chosen by people who care about the craft. Not spec sheets. Not badge prestige. Just the feel of a well-engineered machine doing what it was built to do.
            </p>
            <Link href="/about" className="inline-block mt-8 text-sm tracking-wide text-stone-300 hover:text-white border-b border-stone-600 hover:border-white pb-1 transition-colors">Read our story →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 360° Showcase Banner */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="glass rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-2 border-stone-700 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 border-2 border-stone-600 border-t-stone-300 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-stone-400 font-medium">360°</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-light text-white mb-4">Explore every angle</h2>
            <p className="text-stone-400 max-w-lg mx-auto mb-8">
              Drag to rotate our cars 360 degrees. See every curve, every detail, every angle — just like being in the showroom.
            </p>
            <Link href={`/collection/${ferrari.id}`} className="inline-block px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-colors rounded-full">
              Try the 360° viewer →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-light text-white mb-6">Ready to find your next motor car?</h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">All viewings are by appointment. Get in touch and we'll arrange a private viewing.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-colors rounded-full">Schedule a viewing</Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
