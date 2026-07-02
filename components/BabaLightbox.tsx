"use client";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  label: string;
  sub: string;
}

interface BabaLightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

export default function BabaLightbox({ photos, index, onClose, onPrev, onNext, onGoTo }: BabaLightboxProps) {
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
      onClick={onClose}
    >
      {/* Photo container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "min(90vw, 560px)", height: "min(90vh, 760px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
        {/* Gold border */}
        <div className="absolute inset-0 pointer-events-none" style={{ border: "1px solid rgba(199,161,90,0.25)" }} />

        {/* Label overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-10"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)" }}
        >
          <p className="font-heading text-lg tracking-[0.08em]" style={{ color: "#C7A15A" }}>
            {photo.label}
          </p>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase mt-1" style={{ color: "rgba(217,208,195,0.6)" }}>
            {photo.sub}
          </p>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 p-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        style={{ color: "#C7A15A" }}
        aria-label="Previous photo"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M18 4L8 14L18 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 p-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        style={{ color: "#C7A15A" }}
        aria-label="Next photo"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M10 4L20 14L10 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
        style={{ color: "#C7A15A" }}
        aria-label="Close"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 2L20 20M20 2L2 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onGoTo(i); }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === index ? "#C7A15A" : "rgba(199,161,90,0.3)" }}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
