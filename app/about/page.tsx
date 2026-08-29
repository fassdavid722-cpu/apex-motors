"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">About</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Built for the <span className="text-ember">obsessive.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed">
            Apex Motors is a digital garage for the machines that define performance. We don't sell
            cars — we catalog them. We don't review them — we study them. We exist for the people
            who look at a 9,000-rpm V12 and feel something.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "10",
                label: "Cars catalogued",
                detail: "Every machine tracked to its specific chassis and production run.",
              },
              {
                stat: "8",
                label: "Engine architectures",
                detail: "From flat-sixes to W16s, documented with their stories and shortcomings.",
              },
              {
                stat: "100%",
                label: "Independent",
                detail: "No brand sponsorship. No paid placements. Just the cars.",
              },
            ].map((item) => (
              <div key={item.label} className="border border-white/10 bg-gunmetal p-8">
                <div className="text-5xl font-black text-ember mb-2">{item.stat}</div>
                <div className="text-sm uppercase tracking-[0.3em] text-zinc-300 mb-3">
                  {item.label}
                </div>
                <p className="text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
              The philosophy.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Modern performance cars are engineering landmarks. They are the result of decades of
              motorsport learning, millions of hours of simulation, and the obsessive pursuit of
              fractions of seconds. Most automotive media treats them as fashion. We treat them as
              what they are — the most visceral, ambitious, and uncompromising consumer products
              humans have ever built.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              The cars on this site are the ones that matter. Not because they are the most
              expensive, but because they push the state of the art. Some are 1,914 hp electric
              monsters. Some are 60-year-old flat-six designs still being refined. All of them
              earned their place.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
