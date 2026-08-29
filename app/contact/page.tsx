import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-stone-600 hover:text-stone-900 tracking-wide mb-8 inline-block">← Back to home</Link>
        
        <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-6">Enquiries</p>
        <h1 className="text-4xl font-light text-stone-900 mb-8">Get in touch</h1>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Name</label>
            <input type="text" className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900" />
          </div>
          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900" />
          </div>
          <div>
            <label className="text-sm text-stone-600 tracking-wide mb-2 block">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-stone-900"></textarea>
          </div>
          <button className="px-6 py-3 bg-stone-900 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors">
            Send enquiry
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-200">
          <p className="text-sm text-stone-600">
            Apex Motors is a boutique dealership. All viewings are by appointment only.
          </p>
        </div>
      </div>
    </main>
  );
}
