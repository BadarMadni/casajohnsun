import ScrollReveal from "./ScrollReveal";

export default function BabaSection() {
  return (
    <section id="baba" className="relative overflow-hidden py-28 md:py-40" style={{ backgroundColor: "#0B0B0B" }}>

      {/* Subtle gold radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(199,161,90,0.05) 0%, transparent 70%)" }} />

      {/* Top gold rule */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="shimmer-line mb-16" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          {/* Section label */}
          <p className="font-body text-[10px] tracking-[0.7em] uppercase mb-8" style={{ color: "#C7A15A", opacity: 0.8 }}>
            The Heart of the Home
          </p>

          {/* Headline */}
          <h2
            className="font-heading tracking-[0.1em] leading-tight mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#C7A15A" }}
          >
            One Tree.<br />One Promise.<br />One Legacy.
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(199,161,90,0.4))" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgba(199,161,90,0.5)" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(199,161,90,0.4))" }} />
          </div>

          {/* Body */}
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

      {/* Bottom gold rule */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="shimmer-line mt-16" />
      </div>
    </section>
  );
}
