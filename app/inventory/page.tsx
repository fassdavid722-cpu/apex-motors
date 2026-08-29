"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CARS, formatPrice, type Car } from "@/lib/cars";

const FILTERS = {
  body: ["All", "Coupe", "Roadster", "Sedan", "Hypercar", "GT"] as const,
  drivetrain: ["All", "RWD", "AWD", "MR"] as const,
};

export default function InventoryPage() {
  const [bodyFilter, setBodyFilter] = useState<typeof FILTERS.body[number]>("All");
  const [drivetrainFilter, setDrivetrainFilter] = useState<typeof FILTERS.drivetrain[number]>("All");
  const [sort, setSort] = useState<"power" | "speed" | "price" | "0-60">("power");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let out: Car[] = [...CARS];
    if (bodyFilter !== "All") out = out.filter((c) => c.bodyStyle === bodyFilter);
    if (drivetrainFilter !== "All") out = out.filter((c) => c.drivetrain === drivetrainFilter);
    if (query)
      out = out.filter(
        (c) =>
          c.make.toLowerCase().includes(query.toLowerCase()) ||
          c.model.toLowerCase().includes(query.toLowerCase()) ||
          c.engine.toLowerCase().includes(query.toLowerCase())
      );
    switch (sort) {
      case "power": out.sort((a, b) => b.horsepower - a.horsepower); break;
      case "speed": out.sort((a, b) => b.topSpeedMph - a.topSpeedMph); break;
      case "price": out.sort((a, b) => b.price - a.price); break;
      case "0-60": out.sort((a, b) => a.zeroToSixty - b.zeroToSixty); break;
    }
    return out;
  }, [bodyFilter, drivetrainFilter, sort, query]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">The Garage</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Every machine, <span className="text-ember">one spec sheet.</span>
          </h1>
          <p className="mt-6 text-zinc-400 max-w-2xl">
            {CARS.length} cars. From 540 hp flat-six screamers to 1,914 hp electric hypercars. Filter,
            sort, and dive in.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="border border-white/10 bg-gunmetal p-4 mb-8 grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Search make, model, engine…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-midnight border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-ember"
          />
          <select
            value={bodyFilter}
            onChange={(e) => setBodyFilter(e.target.value as any)}
            className="bg-midnight border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-ember"
          >
            {FILTERS.body.map((b) => (
              <option key={b} value={b}>
                Body: {b}
              </option>
            ))}
          </select>
          <select
            value={drivetrainFilter}
            onChange={(e) => setDrivetrainFilter(e.target.value as any)}
            className="bg-midnight border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-ember"
          >
            {FILTERS.drivetrain.map((d) => (
              <option key={d} value={d}>
                Drivetrain: {d}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="bg-midnight border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-ember"
          >
            <option value="power">Sort: Most Powerful</option>
            <option value="speed">Sort: Top Speed</option>
            <option value="0-60">Sort: Quickest 0–60</option>
            <option value="price">Sort: Price (High → Low)</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-zinc-500">No cars match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car, i) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  href={`/inventory/${car.id}`}
                  className="group block relative overflow-hidden border border-white/10 bg-gunmetal hover:border-ember/40 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-carbon relative">
                    <img
                      src={car.hero}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-ember text-black text-[10px] uppercase tracking-[0.2em] font-black px-2 py-1">
                      {car.bodyStyle}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-1">
                      {car.origin} · {car.year}
                    </div>
                    <div className="text-xl font-black">{car.make}</div>
                    <div className="text-zinc-300 text-sm mb-4">{car.model}</div>
                    <div className="text-xs text-zinc-500 mb-4 line-clamp-2">{car.tagline}</div>
                    <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-center">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">Power</div>
                        <div className="text-sm font-bold text-white">{car.horsepower}</div>
                        <div className="text-[9px] text-zinc-600">hp</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">0–60</div>
                        <div className="text-sm font-bold text-white">{car.zeroToSixty}</div>
                        <div className="text-[9px] text-zinc-600">sec</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">Top</div>
                        <div className="text-sm font-bold text-white">{car.topSpeedMph}</div>
                        <div className="text-[9px] text-zinc-600">mph</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{car.drivetrain}</div>
                      <div className="text-sm font-black text-ember">{formatPrice(car.price)}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
