"use client";
import { useState, useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.3 }: Props) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const scrolled = windowH - rect.top;
        setOffset(scrolled * speed);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 transition-transform"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 w-full h-full">{alt}</div>
    </div>
  );
}
