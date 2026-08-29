"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CARS, ENGINE_BREAKDOWN, formatPrice, type EngineType } from "@/lib/cars";

const ENGINES: EngineType[] = [
  "V8 Twin-Turbo",
  "V12 Naturally Aspirated",
  "Flat-6",
  "Electric Tri-Motor",
  "V8 Hybrid",
  "Inline-6 Turbo",
  "W16 Quad-Turbo",
  "V10 Naturally Aspirated",
];

export default function EnginesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">Engine Atlas</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            The <span className="text-ember">soul</span> of the machine.
          </h1>
          <p className="mt-6 text-zinc-400 max-w-2xl">
            Every great car starts with a great engine. From screaming naturally aspirated V12s to
            silent, violent electric tri-motors — this is the engineering that defines modern
            performance.
          </p>
        </motion.div>

        <div className="space-y-24">
          {ENGINES.map((engine, idx) => {
            const data = ENGINE_BREAKDOWN[engine];
            const users = CARS.filter((c) => c.engine === engine);
            return (
              <motion.section
                key={engine}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5 pt-12"
              >
                <div className="lg:col-span-4">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">
                    Configuration {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    {data.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">{data.description}</p>
                </div>

                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                      Pros
                    </div>
                    <ul className="space-y-2">
                      {data.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-zinc-200">
                          <span className="text-emerald-400 mt-0.5">+</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">Cons</div>
                    <ul className="space-y-2">
                      {data.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-zinc-600 mt-0.5">−</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                    Cars in our garage
                  </div>
                  <div className="space-y-2">
                    {users.length === 0 ? (
                      <div className="text-sm text-zinc-500">
                        None in current inventory
                      </div>
                    ) : (
                      users.map((u) => (
                        <Link
                          key={u.id}
                          href={`/inventory/${u.id}`}
                          className="block border border-white/10 bg-gunmetal p-3 hover:border-ember/40 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-bold">{u.make} {u.model}</div>
                              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                                {u.horsepower} hp · {u.zeroToSixty}s
                              </div>
                            </div>
                            <div className="text-ember font-bold text-sm">
                              {formatPrice(u.price)}
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                    {data.famousUsers.length > 0 && (
                      <div className="text-[10px] text-zinc-600 mt-2">
                        Also: {data.famousUsers.join(" · ")}
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
