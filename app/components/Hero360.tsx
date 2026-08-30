"use client";
import { useState, useEffect, useRef } from "react";

interface Props {
  angles: string[];
  alt: string;
}

export default function Hero360({ angles, alt }: Props) {
  const [frame, setFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(0);

  // Preload
  useEffect(() => {
    let count = 0;
    angles.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        count++;
        if (count === angles.length) setLoaded(true);
      };
      img.src = src;
    });
  }, [angles]);

  // Auto-rotate slowly for cinematic effect
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % angles.length;
      setFrame(frameRef.current);
    }, 2000); // 2 seconds per frame for dramatic effect
    return () => clearInterval(interval);
  }, [loaded, angles.length]);

  return (
    <div className="relative w-full h-full">
      {angles.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: i === frame ? 1 : 0,
            transform: i === frame ? 'scale(1.05)' : 'scale(1.15)',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-stone-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-stone-950/40 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.5) 100%)'
      }} />

      {/* Loading */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-950">
          <div className="w-12 h-12 border-2 border-stone-800 border-t-stone-400 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
