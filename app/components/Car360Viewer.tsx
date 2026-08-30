"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  angles: string[];
  alt: string;
  autoRotate?: boolean;
  height?: string;
}

export default function Car360Viewer({ angles, alt, autoRotate = true, height = "h-[60vh]" }: Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [autoRotating, setAutoRotating] = useState(autoRotate);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  // Preload all images
  useEffect(() => {
    angles.forEach((src, i) => {
      const img = new Image();
      img.onload = () => setLoaded(prev => [...prev, i]);
      img.src = src;
    });
  }, [angles]);

  // Auto-rotate
  useEffect(() => {
    if (!autoRotating || isDragging) return;
    const interval = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % angles.length;
      setCurrentFrame(frameRef.current);
    }, 1500);
    return () => clearInterval(interval);
  }, [autoRotating, isDragging, angles.length]);

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setAutoRotating(false);
    setDragStart(clientX);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const delta = dragStart - clientX;
    const sensitivity = 40;
    if (Math.abs(delta) > sensitivity) {
      const direction = delta > 0 ? 1 : -1;
      frameRef.current = (frameRef.current + direction + angles.length) % angles.length;
      setCurrentFrame(frameRef.current);
      setDragStart(clientX);
    }
  }, [isDragging, dragStart, angles.length]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setAutoRotating(autoRotate), 3000);
  }, [autoRotate]);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = handleDragEnd;

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleDragMove(e.clientX);
  };
  const onMouseUp = handleDragEnd;
  const onMouseLeave = () => { if (isDragging) handleDragEnd(); };

  const progress = ((currentFrame + 1) / angles.length) * 100;
  const allLoaded = loaded.length === angles.length;

  return (
    <div className={`relative w-full ${height} rounded-2xl overflow-hidden bg-stone-900 group select-none`}
      ref={containerRef}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Stacked images with crossfade */}
      {angles.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === currentFrame ? 1 : 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />

      {/* Loading state */}
      {!allLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-900">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-stone-700 border-t-stone-300 rounded-full animate-spin" />
            <p className="text-xs tracking-wide text-stone-500 uppercase">Loading 360° view</p>
          </div>
        </div>
      )}

      {/* Drag hint */}
      {allLoaded && (
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          isDragging ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 17h8M3 12h2m14 0h2M11 5l-2 7 2 7" />
            </svg>
            <span className="text-xs tracking-wide text-stone-300">Drag to rotate</span>
          </div>
        </div>
      )}

      {/* Progress dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {angles.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentFrame ? 'w-4 bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Auto-rotate indicator */}
      {autoRotating && !isDragging && (
        <div className="absolute top-4 left-4">
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs tracking-wide text-stone-300">360° Auto</span>
          </div>
        </div>
      )}

      {/* Mouse/touch event handlers */}
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
    </div>
  );
}
