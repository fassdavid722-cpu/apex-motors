import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Our Story</p>
          <h1 className="text-5xl font-light text-stone-900 mb-6">A different kind of dealership</h1>
        </div>

        <div className="prose prose-stone max-w-none space-y-8">
          <p className="text-lg text-stone-700 leading-relaxed">
            Apex Motors was founded on a simple belief: that buying an extraordinary
            car should feel as special as driving one. We're not a volume dealer.
            We don't have a forecourt full of identical models. What we have is a
            carefully curated collection — each car chosen because it has something
            the others don't.
          </p>

          <p className="text-stone-600 leading-relaxed">
            Our founder spent two decades in the automotive industry, from
            engineering to motorsport, before deciding that the experience of buying
            a great car had been lost somewhere along the way. Too many dealerships
            felt like showrooms for appliances. Too few people who sold cars actually
            understood what made a car worth owning.
          </p>

          <h2 className="text-2xl font-light text-stone-900 pt-8">What we look for</h2>
          <p className="text-stone-600 leading-relaxed">
            We drive every car before we acquire it. We look for vehicles with
            provenance, character, and that indefinable quality that separates a good
            car from a great one. Sometimes that means a limited-production supercar.
            Sometimes it means a well-maintained grand tourer with a story to tell.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[
              { title: "Character", desc: "Every car must have a distinct personality that sets it apart." },
              { title: "Provenance", desc: "Full history, verified ownership, and documented maintenance." },
              { title: "Driving Experience", desc: "We only acquire cars we'd drive ourselves — and we do." },
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-stone-200 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2">{value.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-light text-stone-900 pt-8">By appointment</h2>
          <p className="text-stone-600 leading-relaxed">
            We don't have a traditional showroom. Viewings are arranged privately, at
            a time that suits you, so you can take your time with each car. No
            pressure, no upsell, no sales scripts — just a conversation about what
            you're looking for and whether one of our cars might be it.
          </p>

          <div className="mt-12 pt-8 border-t border-stone-200 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors"
            >
              Arrange a viewing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
