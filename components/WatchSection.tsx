import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", label: "Selection", desc: "Why this brand made the cut" },
  { num: "02", label: "Pre-Install", desc: "Materials, planning, coordination" },
  { num: "03", label: "Install", desc: "Craftsmanship in real time" },
  { num: "04", label: "Reveal", desc: "Finished area with full story" },
  { num: "05", label: "Evergreen", desc: "Ongoing reels & case studies" },
];

export default function WatchSection() {
  return (
    <section id="watch" className="grain py-28 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden" style={{ backgroundColor: "#0B0B0B" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 40%, rgba(44,26,6,0.65) 0%, #0B0B0B 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase mb-6" style={{ color: "#A79A8E" }}>Watch</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] tracking-[0.1em] mb-5" style={{ color: "#C7A15A" }}>
            Follow the Build
          </h2>
          <div className="shimmer-line w-48 mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "#A79A8E" }}>
            New Episodes Weekly &nbsp;·&nbsp; Scottsdale, AZ
          </p>
        </ScrollReveal>

        {/* YouTube embed — glowing frame */}
        <ScrollReveal delay={100} className="max-w-4xl mx-auto mb-16">
          <div className="relative" style={{ aspectRatio: "16/9", boxShadow: "0 0 80px rgba(199,161,90,0.1), 0 40px 80px rgba(0,0,0,0.6)" }}>
            <div className="absolute -inset-px" style={{ background: "linear-gradient(135deg, rgba(199,161,90,0.6), transparent 40%, transparent 60%, rgba(199,161,90,0.6))" }} />
            <div className="absolute inset-0" style={{ border: "1px solid rgba(199,161,90,0.3)" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Zi1Z-dLs-8g"
                title="Casa JohnSUN — Follow the Build"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Episode journey */}
        <ScrollReveal delay={150} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="episode-step flex flex-col items-center gap-4 p-8 text-center relative overflow-hidden group">
                <span className="font-heading text-3xl md:text-4xl" style={{ color: "#C7A15A", lineHeight: 1, opacity: 0.45 }}>{s.num}</span>
                <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, #C7A15A, transparent)" }} />
                <span className="font-heading text-xs tracking-[0.35em] uppercase" style={{ color: "#C7A15A" }}>{s.label}</span>
                <span className="font-body text-xs leading-relaxed" style={{ color: "#D9D0C3" }}>{s.desc}</span>
                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(199,161,90,0.12), transparent)" }} />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200} className="text-center">
          <a href="https://youtube.com/@CasaJohnSUN?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
            className="hero-watch-btn inline-block font-body font-medium tracking-[0.35em] uppercase text-[11px] px-14 py-4">
            Subscribe on YouTube
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
