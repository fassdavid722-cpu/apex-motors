import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Enquiries</p>
          <h1 className="text-5xl font-light text-stone-900 mb-4">Get in touch</h1>
          <p className="text-stone-600 max-w-md mx-auto">
            All viewings are by appointment. Tell us what you're looking for and we'll
            get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-6 animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              placeholder="James Marchetti"
            />
          </div>

          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              placeholder="james@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Phone (optional)</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              placeholder="+44 20 7946 0000"
            />
          </div>

          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">I'm interested in</label>
            <select className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900 transition-colors">
              <option value="">Select a car (or "General enquiry")</option>
              <option>General enquiry</option>
              <option>Ferrari 488 GTB</option>
              <option>Aston Martin DB11</option>
              <option>Porsche 911 GT3</option>
              <option>Lamborghini Huracán EVO</option>
              <option>McLaren 720S</option>
              <option>Bentley Continental GT</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none"
              placeholder="Tell us what you're looking for, or ask any question you might have."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors"
          >
            Send enquiry
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Location</p>
            <p className="text-sm text-stone-700">Mayfair, London</p>
          </div>
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Phone</p>
            <p className="text-sm text-stone-700">+44 20 7946 0000</p>
          </div>
          <div>
            <p className="text-xs tracking-wide uppercase text-stone-500 mb-2">Email</p>
            <p className="text-sm text-stone-700">enquiries@apexmotors.example</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/collection" className="text-sm text-stone-500 hover:text-stone-900">
            ← Back to collection
          </Link>
        </div>
      </div>
    </main>
  );
}
