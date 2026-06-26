import Image from "next/image";
import StatCounter from "./StatCounter";

export default function HeroSection() {
  return (
    <section className="grain relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background house rendering */}
      <div className="absolute inset-0 bg-[#0B0B0B]">
        <Image src="/house.webp" alt="Casa JohnSUN" fill priority fetchPriority="high" className="object-cover object-center" style={{ opacity: 0.38 }} sizes="100vw" />
      </div>

      {/* Layered cinematic gradients */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0B0B0B 0%, rgba(11,11,11,0.05) 30%, rgba(11,11,11,0.45) 68%, #0B0B0B 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0B0B0B 0%, transparent 15%, transparent 85%, #0B0B0B 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(199,161,90,0.1) 0%, transparent 65%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 30% at 50% 45%, rgba(199,161,90,0.04) 0%, transparent 70%)" }} />

      {/* Animated shimmer bottom border */}
      <div className="absolute bottom-0 left-0 right-0 shimmer-line" />

      {/* Gold particle dots */}
      {[
        { top: "20%", left: "12%", size: 2, delay: "0s", dur: "4s" },
        { top: "35%", left: "88%", size: 1.5, delay: "1.5s", dur: "5s" },
        { top: "65%", left: "8%", size: 2, delay: "0.8s", dur: "3.5s" },
        { top: "75%", left: "85%", size: 1, delay: "2s", dur: "6s" },
        { top: "15%", left: "75%", size: 1.5, delay: "0.3s", dur: "4.5s" },
        { top: "50%", left: "5%", size: 1, delay: "1s", dur: "5.5s" },
      ].map((p, i) => (
        <div key={i} className="absolute rounded-full" style={{
          top: p.top, left: p.left, width: p.size, height: p.size,
          backgroundColor: "#C7A15A",
          animation: `goldenGlow ${p.dur} ease-in-out ${p.delay} infinite`,
          opacity: 0.5,
        }} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto pt-20">
        <p className="fade-up font-body text-[10px] md:text-xs tracking-[0.7em] uppercase mb-6" style={{ color: "#C7A15A", opacity: 0.8 }}>
          Scottsdale, Arizona &nbsp;·&nbsp; Est. 2026
        </p>

        {/* Brand name — single block gradient text */}
        <h1 className="fade-up font-heading leading-[0.9] mb-6 hero-title-gradient"
          style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", letterSpacing: "0.15em" }}>
          CASA<br />JOHNSUN
        </h1>

        {/* Animated divider */}
        <div className="fade-up-delay w-full max-w-sm mx-auto mb-6 shimmer-line" />

        {/* Tagline */}
        <p className="fade-up-delay font-body font-light text-xs md:text-sm tracking-[0.5em] uppercase mb-3" style={{ color: "#D9D0C3" }}>
          The Journey &nbsp;·&nbsp; The Build &nbsp;·&nbsp; The Legacy
        </p>

        <p className="fade-up-delay font-body text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "rgba(217,208,195,0.8)" }}>
          A real family. A $2.4M build. Every moment documented.
        </p>

        {/* CTAs */}
        <div className="fade-up-delay-2 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <a
            href="https://youtube.com/@CasaJohnSUN"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-watch-btn font-body font-medium tracking-[0.35em] uppercase text-xs md:text-sm px-14 py-4 inline-block"
          >
            Watch the Series
          </a>
          <a
            href="#story"
            className="font-body text-xs tracking-[0.4em] uppercase transition-all duration-300 hover:tracking-[0.55em]"
            style={{ color: "#C7A15A" }}
          >
            Our Story ↓
          </a>
        </div>

        {/* Stats — animated counters */}
        <div className="fade-up-delay-3 flex items-stretch gap-0 mt-14 border-t border-b" style={{ borderColor: "rgba(199,161,90,0.15)" }}>
          <div className="px-8 md:px-12 py-5">
            <StatCounter value={7184} suffix="" label="Sq Ft" separator duration={1600} />
          </div>
          <div className="px-8 md:px-12 py-5" style={{ borderLeft: "1px solid rgba(199,161,90,0.15)", borderRight: "1px solid rgba(199,161,90,0.15)" }}>
            <StatCounter value={2.4} prefix="$" suffix="M" label="Build Value" decimals={1} duration={1400} />
          </div>
          <div className="px-8 md:px-12 py-5">
            <StatCounter value={2026} label="Scottsdale" duration={1200} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 mx-auto" style={{ background: "linear-gradient(to bottom, transparent, #C7A15A)" }} />
      </div>
    </section>
  );
}
