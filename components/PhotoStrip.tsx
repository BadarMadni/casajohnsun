"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/photo-family.webp", alt: "The Johnson Family", label: "The Family" },
  { src: "/photo-demo2.webp", alt: "Day 1 — Demolition begins", label: "Day One" },
  { src: "/photo-team.webp", alt: "The team at the build site", label: "The Team" },
  { src: "/photo-rendering.webp", alt: "First architectural rendering", label: "First Rendering" },
  { src: "/photo-demo1.webp", alt: "Nikki on the build site", label: "The Build" },
];

const aspects: Record<string, string> = {
  "/photo-family.webp": "3/4",
  "/photo-demo2.webp": "3/2",
  "/photo-team.webp": "3/2",
  "/photo-rendering.webp": "4/3",
  "/photo-demo1.webp": "3/2",
};

export default function PhotoStrip() {
  const [active, setActive] = useState<number | null>(null);

  function prev() { setActive(i => i !== null ? (i - 1 + photos.length) % photos.length : null); }
  function next() { setActive(i => i !== null ? (i + 1) % photos.length : null); }

  return (
    <>
      {/* Strip */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 px-6 md:px-16 lg:px-24"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{
              width: "clamp(200px, 28vw, 360px)",
              aspectRatio: aspects[photo.src],
              border: "1px solid rgba(199,161,90,0.15)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
            onClick={() => setActive(i)}
          >
            <Image
              src={photo.src} alt={photo.alt} fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 220px, (max-width: 1280px) 32vw, 420px"
              style={{ filter: "none" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,9,6,0.82) 0%, transparent 32%)" }} />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase font-medium" style={{ color: "#C7A15A" }}>{photo.label}</p>
              <p className="font-body text-[11px] mt-0.5 leading-snug" style={{ color: "rgba(217,208,195,0.9)" }}>{photo.alt}</p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(199,161,90,0.5), transparent)" }} />
            {/* Expand icon */}
            <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "rgba(13,9,6,0.7)", border: "1px solid rgba(199,161,90,0.4)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 1.5H10.5V4.5M4.5 10.5H1.5V7.5M10.5 1.5L7 5M1.5 10.5L5 7" stroke="#C7A15A" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(199,161,90,0.4)" }} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.94)", backdropFilter: "blur(16px)" }}
          onClick={() => setActive(null)}
        >
          {/* Close */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center z-10 transition-opacity hover:opacity-60"
            style={{ border: "1px solid rgba(199,161,90,0.3)", color: "#A79A8E" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-11 h-11 flex items-center justify-center transition-all hover:border-[#C7A15A]"
            style={{ border: "1px solid rgba(199,161,90,0.3)", color: "#A79A8E" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Image */}
          <div
            className="flex flex-col items-center px-16 md:px-24 w-full"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              style={{
                maxHeight: "75vh",
                maxWidth: "min(80vw, 860px)",
                width: "auto",
                height: "auto",
                display: "block",
                border: "1px solid rgba(199,161,90,0.25)",
                boxShadow: "0 0 60px rgba(0,0,0,0.8)",
              }}
            />
            {/* Caption */}
            <div className="pt-4 pb-2 text-center">
              <p className="font-body text-[10px] tracking-[0.5em] uppercase" style={{ color: "#C7A15A" }}>{photos[active].label}</p>
              <p className="font-body text-sm mt-1" style={{ color: "#A79A8E" }}>{photos[active].alt}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-11 h-11 flex items-center justify-center transition-all hover:border-[#C7A15A]"
            style={{ border: "1px solid rgba(199,161,90,0.3)", color: "#A79A8E" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {photos.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: i === active ? "#C7A15A" : "rgba(199,161,90,0.25)", transform: i === active ? "scale(1.4)" : "scale(1)" }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
