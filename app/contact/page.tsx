import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-stone-950 min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Enquiries</p>
            <h1 className="text-5xl font-light text-white mb-4">Get in touch</h1>
            <p className="text-stone-400 max-w-md mx-auto">
              All viewings are by appointment. Tell us what you're looking for and we'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form className="space-y-6">
            <div>
              <label className="text-sm text-stone-400 tracking-wide mb-2 block">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-600 transition-colors rounded-xl" placeholder="James Marchetti" />
            </div>
            <div>
              <label className="text-sm text-stone-400 tracking-wide mb-2 block">Email Address</label>
              <input type="email" required className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-600 transition-colors rounded-xl" placeholder="james@example.com" />
            </div>
            <div>
              <label className="text-sm text-stone-400 tracking-wide mb-2 block">Phone (optional)</label>
              <input type="tel" className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-600 transition-colors rounded-xl" placeholder="+44 20 7946 0000" />
            </div>
            <div>
              <label className="text-sm text-stone-400 tracking-wide mb-2 block">I'm interested in</label>
              <select className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-600 transition-colors rounded-xl">
                <option value="">Select a car (or "General enquiry")</option>
                <option>General enquiry</option>
                {["Ferrari 488 GTB","Aston Martin DB11","Porsche 911 GT3","Lamborghini Huracán EVO","McLaren 720S","Bentley Continental GT"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-stone-400 tracking-wide mb-2 block">Message</label>
              <textarea rows={5} required className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 focus:outline-none focus:border-stone-600 transition-colors rounded-xl resize-none" placeholder="Tell us what you're looking for, or ask any question you might have." />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-stone-200 transition-colors rounded-full">Send enquiry</button>
          </form>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[{l:"Location",v:"Mayfair, London"},{l:"Phone",v:"+44 20 7946 0000"},{l:"Email",v:"enquiries@apexmotors.example"}].map((item,i) => (
              <div key={i}>
                <p className="text-xs tracking-wide uppercase text-stone-600 mb-2">{item.l}</p>
                <p className="text-sm text-stone-300">{item.v}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center mt-12">
          <Link href="/collection" className="text-sm text-stone-500 hover:text-white transition-colors">← Back to collection</Link>
        </div>
      </div>
    </main>
  );
}
