import Link from "next/link";
import { cars, heroImage } from "@/lib/cars";
import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-stone-950 min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
        </div>
        <div className="relative z-10 text-center animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Our Story</p>
          <h1 className="text-5xl font-light text-white">A different kind of dealership</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <ScrollReveal>
          <p className="text-xl text-stone-300 leading-relaxed">
            Apex Motors was founded on a simple belief: that buying an extraordinary car should feel as special as driving one. We're not a volume dealer. We don't have a forecourt full of identical models. What we have is a carefully curated collection — each car chosen because it has something the others don't.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-stone-400 leading-relaxed mt-8">
            Our founder spent two decades in the automotive industry, from engineering to motorsport, before deciding that the experience of buying a great car had been lost somewhere along the way. Too many dealerships felt like showrooms for appliances. Too few people who sold cars actually understood what made a car worth owning.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-2xl font-light text-white pt-8">What we look for</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-stone-400 leading-relaxed mt-4">
            We drive every car before we acquire it. We look for vehicles with provenance, character, and that indefinable quality that separates a good car from a great one. Sometimes that means a limited-production supercar. Sometimes it means a well-maintained grand tourer with a story to tell.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          {[
            { title: "Character", desc: "Every car must have a distinct personality that sets it apart." },
            { title: "Provenance", desc: "Full history, verified ownership, and documented maintenance." },
            { title: "Driving Experience", desc: "We only acquire cars we'd drive ourselves — and we do." },
          ].map((value, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-6 glass rounded-2xl">
                <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{value.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h2 className="text-2xl font-light text-white pt-8">By appointment</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-stone-400 leading-relaxed mt-4">
            We don't have a traditional showroom. Viewings are arranged privately, at a time that suits you, so you can take your time with each car. No pressure, no upsell, no sales scripts — just a conversation about what you're looking for and whether one of our cars might be it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 pt-8 border-t border-stone-800 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-colors rounded-full">Arrange a viewing</Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
