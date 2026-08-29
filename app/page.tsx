"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { CARS, formatPrice } from "@/lib/cars";

/* ============================================================
   ANIMATED HERO CAR — built with pure SVG + Framer Motion.
   No image required. A car silhouette assembles itself on scroll
   /load, headlights power on, and exhaust flickers. Cinematic.
============================================================ */

function HeroCar() {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[2.4/1] select-none">
      {/* Floor reflection + grid */}
      <div className="absolute inset-0 grid-floor opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ember/10 to-transparent" />

      {/* The Car — pure SVG, layered panels that slide in */}
      <svg
        viewBox="0 0 1200 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a31" />
            <stop offset="50%" stopColor="#0e0e12" />
            <stop offset="100%" stopColor="#1a1a1f" />
          </linearGradient>
          <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3a44" />
            <stop offset="100%" stopColor="#0a0a0e" />
          </linearGradient>
          <radialGradient id="headlightGlow" cx="0.3" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffe9b0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff8c1a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="taillightGlow" cx="0.7" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ff3b1f" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff3b1f" stopOpacity="0" />
          </radialGradient>
          <filter id="bodyShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Shadow under car */}
        <motion.ellipse
          cx="600"
          cy="420"
          rx="450"
          ry="14"
          fill="#000"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
        />

        {/* Main body — lower */}
        <motion.path
          d="M 120 360
             Q 140 320 200 305
             L 320 295
             Q 400 270 480 250
             L 720 250
             Q 820 270 900 295
             L 1000 305
             Q 1060 320 1080 360
             L 1080 390
             L 120 390 Z"
          fill="url(#bodyGrad)"
          stroke="#3a3a44"
          strokeWidth="1.5"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Roof / cabin — slams down from top */}
        <motion.path
          d="M 380 280
             Q 440 220 540 215
             L 700 215
             Q 780 220 830 280
             Z"
          fill="url(#windowGrad)"
          stroke="#2a2a32"
          strokeWidth="1"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Hood line highlight */}
        <motion.path
          d="M 200 305 L 380 280 L 480 250 L 720 250 L 830 280 L 1000 305"
          fill="none"
          stroke="#5a5a64"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        />

        {/* Side air intake */}
        <motion.path
          d="M 280 320 L 360 310 L 360 340 L 280 340 Z"
          fill="#000"
          stroke="#ff3b1f"
          strokeWidth="0.8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        />

        {/* Front fender flare */}
        <motion.ellipse
          cx="260"
          cy="370"
          rx="90"
          ry="22"
          fill="#000"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        />

        {/* Rear fender flare */}
        <motion.ellipse
          cx="940"
          cy="370"
          rx="90"
          ry="22"
          fill="#000"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.7 }}
        />

        {/* Front wheel — spins in */}
        <motion.g
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "260px 380px" }}
        >
          <circle cx="260" cy="380" r="58" fill="#0a0a0c" stroke="#2a2a32" strokeWidth="2" />
          <circle cx="260" cy="380" r="40" fill="#15151a" stroke="#3a3a44" strokeWidth="1" />
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="260"
              y1="345"
              x2="260"
              y2="415"
              stroke="#4a4a54"
              strokeWidth="3"
              transform={`rotate(${deg} 260 380)`}
            />
          ))}
          <circle cx="260" cy="380" r="10" fill="#ff3b1f" />
          <circle cx="260" cy="380" r="4" fill="#0a0a0c" />
        </motion.g>

        {/* Rear wheel — spins in */}
        <motion.g
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "940px 380px" }}
        >
          <circle cx="940" cy="380" r="58" fill="#0a0a0c" stroke="#2a2a32" strokeWidth="2" />
          <circle cx="940" cy="380" r="40" fill="#15151a" stroke="#3a3a44" strokeWidth="1" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="940"
              y1="345"
              x2="940"
              y2="415"
              stroke="#4a4a54"
              strokeWidth="3"
              transform={`rotate(${deg} 940 380)`}
            />
          ))}
          <circle cx="940" cy="380" r="10" fill="#ff3b1f" />
          <circle cx="940" cy="380" r="4" fill="#0a0a0c" />
        </motion.g>

        {/* Headlights — power on after assembly */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.2 }}
        >
          <ellipse cx="150" cy="335" rx="18" ry="8" fill="#fff" />
          <ellipse cx="150" cy="335" rx="35" ry="20" fill="url(#headlightGlow)" />
          {/* Light beam */}
          <rect
            x="40"
            y="325"
            width="180"
            height="22"
            fill="url(#headlightGlow)"
            opacity="0.6"
            className="animate-headlight-pulse"
          />
        </motion.g>

        {/* Taillights — glow red */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4 }}
        >
          <rect x="1040" y="330" width="22" height="8" fill="#ff3b1f" rx="2" />
          <ellipse cx="1051" cy="334" rx="30" ry="18" fill="url(#taillightGlow)" />
        </motion.g>

        {/* Exhaust — flickers */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
          className="animate-exhaust-flicker"
          style={{ transformOrigin: "1080px 360px" }}
        >
          <ellipse cx="1085" cy="360" rx="14" ry="5" fill="#ff3b1f" opacity="0.5" />
          <ellipse cx="1100" cy="360" rx="22" ry="6" fill="#ff3b1f" opacity="0.2" />
        </motion.g>

        {/* Hood scoop detail */}
        <motion.path
          d="M 360 295 L 400 285 L 400 295 L 360 305 Z"
          fill="#0a0a0c"
          stroke="#2a2a32"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* A-pillar highlight */}
        <motion.path
          d="M 380 280 L 400 250 L 410 250 L 400 280 Z"
          fill="#3a3a44"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />

        {/* Door line */}
        <motion.path
          d="M 540 250 L 540 360"
          stroke="#2a2a32"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        />

        {/* Brand text on side */}
        <motion.text
          x="600"
          y="345"
          textAnchor="middle"
          fill="#5a5a64"
          fontSize="11"
          fontFamily="system-ui"
          fontWeight="700"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          APEX GT
        </motion.text>
      </svg>

      {/* Scan line effect overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/2 backdrop-blur px-6 py-4">
      <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{label}</div>
      <div className="text-2xl md:text-3xl font-black text-white mt-1">{value}</div>
    </div>
  );
}

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const carY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="relative">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-carbon to-midnight" />
        <div className="absolute inset-0 grid-floor opacity-30" />

        <motion.div
          style={{ y: carY, scale: carScale, opacity: heroOpacity }}
          className="relative w-full pt-24 pb-12"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ember mb-4">
                <span className="w-8 h-px bg-ember" />
                Curated Performance
                <span className="w-8 h-px bg-ember" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                <span className="text-gradient">Where engineering</span>
                <br />
                <span className="text-ember">meets obsession.</span>
              </h1>
              <p className="mt-6 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
                A digital garage of the world's most extreme performance cars. Specs, stories, and the
                engineering that makes them unforgettable.
              </p>
            </motion.div>

            <HeroCar />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/inventory"
                className="group inline-flex items-center gap-2 bg-ember text-black font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-white transition-colors"
              >
                Enter the Garage
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/engines"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-white/5 transition-colors"
              >
                Engine Atlas
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-zinc-600 animate-pulse">
          Scroll
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative border-y border-white/5 bg-carbon-weave">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatPill label="Cars in Garage" value="10" />
          <StatPill label="Combined Horsepower" value="9,761" />
          <StatPill label="0–60 Leader" value="1.85s" />
          <StatPill label="Top Speed Leader" value="273 mph" />
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-3">Featured</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                The current collection.
              </h2>
            </div>
            <Link
              href="/inventory"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-ember"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARS.slice(0, 6).map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  href={`/inventory/${car.id}`}
                  className="group block relative overflow-hidden border border-white/10 bg-gunmetal hover:border-ember/40 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-carbon">
                    <img
                      src={car.hero}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-1">
                      {car.origin}
                    </div>
                    <div className="text-xl font-black">{car.make}</div>
                    <div className="text-zinc-300 text-sm">{car.model}</div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Power</div>
                        <div className="text-sm font-bold">{car.horsepower} hp</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">0–60</div>
                        <div className="text-sm font-bold">{car.zeroToSixty}s</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Price</div>
                        <div className="text-sm font-bold text-ember">{formatPrice(car.price)}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-midnight to-midnight" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ember mb-4">Engine Atlas</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            What makes them <span className="text-ember">sing.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            From a screaming naturally aspirated V12 to a quad-turbo W16, the engine is the soul of
            the machine. Explore the architectures that define modern performance.
          </p>
          <Link
            href="/engines"
            className="inline-flex items-center gap-2 border border-white text-white font-black uppercase tracking-widest text-xs px-10 py-5 hover:bg-white hover:text-black transition-colors"
          >
            Explore the Atlas →
          </Link>
        </div>
      </section>
    </div>
  );
}
