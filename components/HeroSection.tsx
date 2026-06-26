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

        {/* Social icons */}
        <div className="fade-up-delay-2 flex items-center gap-7 mt-8 mb-2">
          <a href="https://youtube.com/@CasaJohnSUN" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="transition-all duration-300 hover:scale-125 hover:text-[#C7A15A]" style={{ color: "rgba(167,154,142,0.6)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
          </a>
          <a href="https://instagram.com/casajohnsun" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="transition-all duration-300 hover:scale-125 hover:text-[#C7A15A]" style={{ color: "rgba(167,154,142,0.6)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8c.1-3.2 1.6-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9c1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>
          </a>
          <a href="https://tiktok.com/@casajohnsun" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
            className="transition-all duration-300 hover:scale-125 hover:text-[#C7A15A]" style={{ color: "rgba(167,154,142,0.6)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3a4.5 4.5 0 01-4.4-4h-3.3v14.4a2.7 2.7 0 11-2.7-2.7c.3 0 .5 0 .8.1V7.4a6 6 0 100 12 6 6 0 006-6V7a7.8 7.8 0 004.7 1.6V5.3A4.5 4.5 0 0119.6 3z"/></svg>
          </a>
          <a href="https://facebook.com/casajohnsun" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="transition-all duration-300 hover:scale-125 hover:text-[#C7A15A]" style={{ color: "rgba(167,154,142,0.6)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5H13.9v8.4A12 12 0 0024 12z"/></svg>
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
