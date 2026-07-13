"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import BabaLightbox from "./BabaLightbox";

const babaPhotos = [
  { src: "/baba-tree-1.jpeg", alt: "Baba standing beside her beloved palm tree", label: "Anne & Her Tree", sub: "She called it her own" },
  { src: "/baba-tree-2.jpeg", alt: "Nikki with the palm tree Baba called her own", label: "The Promise", sub: "Standing beneath her legacy" },
  { src: "/baba-tree-3.jpeg", alt: "Looking up at Baba's palm tree", label: "Still Reaching", sub: "Rooted in love" },
];

export default function BabaSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + babaPhotos.length) % babaPhotos.length)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % babaPhotos.length)), []);

  return (
    <section id="baba" className="relative overflow-hidden py-28 md:py-40" style={{ backgroundColor: "#0B0B0B" }}>

      {/* Subtle gold radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(199,161,90,0.05) 0%, transparent 70%)" }} />

      {/* Top gold rule */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="shimmer-line mb-16" />
      </div>

      {/* Baba Hooters Tribute */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center mb-20">
        <ScrollReveal>
          <div className="relative w-full max-w-md mx-auto mb-12 group" style={{ aspectRatio: "3/4", border: "1px solid rgba(199,161,90,0.22)" }}>
            <Image
              src="/baba-hooters.jpeg"
              alt="Baba at Hooters, ninety-three years old, drinking the biggest beer through a straw"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 448px"
              priority
            />
            {/* Bottom gradient for caption readability */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)" }} />
            {/* Gold corners */}
            {(["top-2 left-2 border-t border-l", "top-2 right-2 border-t border-r", "bottom-2 left-2 border-b border-l", "bottom-2 right-2 border-b border-r"] as const).map((cls, j) => (
              <div key={j} className={`absolute w-5 h-5 md:w-7 md:h-7 ${cls}`} style={{ borderColor: "#C7A15A", opacity: 0.7 }} />
            ))}
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 text-center">
              <p className="font-heading text-sm md:text-lg tracking-[0.08em]" style={{ color: "#E8C97A", textShadow: "0 1px 10px rgba(0,0,0,0.9)" }}>
                Baba
              </p>
              <p className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase mt-1" style={{ color: "rgba(230,220,205,0.65)", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
                Ninety-three years young
              </p>
            </div>
          </div>
          <div className="space-y-6 font-body text-base md:text-lg leading-loose" style={{ color: "rgba(217,208,195,0.85)" }}>
            <p>
              This is Baba at Hooters, ninety-three years old, drinking the biggest beer Hooters
              pours — through a straw, because why wouldn&apos;t she — and then going home to have another.
            </p>
            <p>
              Baba was Ukrainian, fearless, and funny to her core without ever once trying to be.
              She lost her husband early and buried two sons before their time, and she wore her
              wedding ring every single day of her life after — because she was still married to
              him, she&apos;d say, and she always would be. That was the whole woman right there.
              Devoted. Dedicated to her word. Not willing to negotiate on it, ever.
            </p>
            <p>
              She carried more grief than most people could stand and she still showed up every day
              with a smile, a joke that would make you spit out your drink, and a genuineness you
              almost never see in anybody anymore. She had a big, loud circle of friends, and one
              by one, over the years, she lost every one of them. And she told me she was ready.
              I hated hearing it. But I had to respect it — she had accepted that her time here
              was done, that she had served her purpose. She was right. I was just being selfish.
            </p>
            <p>
              Baba was kind. Baba was real. Baba drank her beer through a straw and never cared
              for one second what anyone thought. She was my best friend, my role model, and the
              reason I do what I do — you&apos;ll meet her properly in Episode One.
            </p>
            <p>
              She left me some of her ashes to plant at the base of her palm tree, so she&apos;ll
              live at Casa JohnSUN forever — right where she always wanted to be, in the Arizona
              sun. And right where I want her to be. Close to me every day, as a reminder of the
              woman I want to be.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Write-up */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-[10px] tracking-[0.7em] uppercase mb-8" style={{ color: "#C7A15A", opacity: 0.8 }}>
            The Heart of the Home
          </p>
          <h2 className="font-heading tracking-[0.1em] leading-tight mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#C7A15A" }}>
            One Tree.<br />One Promise.<br />One Legacy.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(199,161,90,0.4))" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(199,161,90,0.5)" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(199,161,90,0.4))" }} />
          </div>
          <p className="font-body text-base md:text-lg leading-loose" style={{ color: "rgba(217,208,195,0.85)" }}>
            In the backyard stands a single palm tree. It belonged to Baba — Nikki&apos;s Ukrainian
            grandmother, Anne, who lived to 100 years old and flew to Scottsdale for the very
            first time at 93. She sat beneath that tree, called it her own, and loved it for
            every year that followed. When Baba passed, she left her ashes to be planted at its
            roots. Every decision about this home — every line, every room, every material —
            was made with that tree at the center. Casa JohnSUN is not just built around a
            palm tree. It is built around a promise.
          </p>
        </ScrollReveal>
      </div>

      {/* Photo Gallery */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-20">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-14">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(199,161,90,0.25))" }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(199,161,90,0.4)" }} />
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(199,161,90,0.25))" }} />
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {babaPhotos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="baba-card relative overflow-hidden group text-left focus:outline-none"
                style={{ aspectRatio: "3/4", border: "1px solid rgba(199,161,90,0.22)", display: "block", width: "100%" }}
                aria-label={`View photo: ${photo.label}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover baba-photo-${i + 1}`}
                  sizes="(max-width: 768px) 33vw, 400px"
                />
                {/* Strong bottom gradient for text readability */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 35%, transparent 65%)" }} />
                {/* Hover darkens slightly */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                {/* Label — always readable */}
                <div className="absolute bottom-0 left-0 right-0 px-2.5 pb-3 pt-8 md:px-4 md:pb-5">
                  <p
                    className="font-heading text-[0.6rem] md:text-[1.05rem] tracking-[0.08em] leading-snug"
                    style={{ color: "#E8C97A", textShadow: "0 1px 10px rgba(0,0,0,0.9)" }}
                  >
                    {photo.label}
                  </p>
                  <p
                    className="hidden md:block font-body text-[10px] tracking-[0.35em] uppercase mt-1.5"
                    style={{ color: "rgba(230,220,205,0.75)", textShadow: "0 1px 6px rgba(0,0,0,0.9)", opacity: 0.7 }}
                  >
                    {photo.sub}
                  </p>
                </div>
                {/* Gold corners */}
                {(["top-1.5 left-1.5 border-t border-l", "top-1.5 right-1.5 border-t border-r", "bottom-1.5 left-1.5 border-b border-l", "bottom-1.5 right-1.5 border-b border-r"] as const).map((cls, j) => (
                  <div key={j} className={`absolute w-3 h-3 md:w-5 md:h-5 ${cls} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} style={{ borderColor: "#C7A15A" }} />
                ))}
                {/* Expand icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-80 transition-opacity duration-300" style={{ color: "#C7A15A" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 1h4v4M5 13H1V9M13 1l-5 5M1 13l5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center font-body text-[9px] tracking-[0.55em] uppercase mt-8" style={{ color: "rgba(199,161,90,0.4)" }}>
            Baba&apos;s Tree &nbsp;·&nbsp; Scottsdale, Arizona
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom gold rule */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="shimmer-line mt-16" />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <BabaLightbox
          photos={babaPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
          onGoTo={setLightboxIndex}
        />
      )}
    </section>
  );
}
