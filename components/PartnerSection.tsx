import ScrollReveal from "./ScrollReveal";

const options = [
  {
    roman: "I",
    title: "In-Kind Product",
    tag: "Most Popular",
    desc: "Supply product for a featured area. Receive professionally documented content tied to your install and reveal — yours to repurpose forever.",
    perks: ["Full episode feature", "Professional photography", "Perpetual content rights"],
  },
  {
    roman: "II",
    title: "Trade Support",
    tag: "",
    desc: "Contribute labor, design, or preferred pricing. Be credited as part of the build team woven throughout the entire documentary series.",
    perks: ["Multi-episode coverage", "Build team credit", "Brand ambassador content"],
  },
  {
    roman: "III",
    title: "Hybrid Package",
    tag: "Category Exclusive",
    desc: "Product + services + amplified content with broader use rights, stronger placement, and full category exclusivity across the series.",
    perks: ["Category exclusivity", "Priority placement", "Extended use rights"],
  },
];

const categories = [
  "Pool & Water Features", "Cabinet & Millwork",
  "Tile, Stone & Flooring", "Windows, Doors & Hardware",
  "Lighting & Appliances", "Landscape & Outdoor Kitchen",
  "Furniture & Styling",
];

export default function PartnerSection() {
  return (
    <section id="partner" className="relative overflow-hidden" style={{ backgroundColor: "#080705" }}>

      {/* Atmospheric gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(199,161,90,0.07) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 15% 80%, rgba(44,26,6,0.45) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 60%, rgba(199,161,90,0.04) 0%, transparent 60%)" }} />

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-heading font-bold tracking-widest select-none"
          style={{ fontSize: "clamp(80px, 14vw, 200px)", color: "rgba(199,161,90,0.025)", lineHeight: 1, userSelect: "none" }}
        >
          PARTNER
        </span>
      </div>

      <div className="shimmer-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">

        {/* Header */}
        <ScrollReveal className="mb-24 max-w-3xl">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase mb-6" style={{ color: "#A79A8E" }}>Partner With Us</p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-[0.06em] leading-tight mb-6" style={{ color: "#C7A15A" }}>
            Your Brand.<br />Our Story.
          </h2>
          <h3 className="font-heading text-xl md:text-2xl tracking-[0.08em] leading-tight mb-10" style={{ color: "#D9D0C3" }}>
            Built Together. Documented Forever.
          </h3>
          <div className="pl-6 mb-8" style={{ borderLeft: "2px solid #C7A15A" }}>
            <p className="font-body text-base md:text-lg leading-loose" style={{ color: "#A79A8E" }}>
              Casa JohnSUN is partnering with a select number of premium brands to be
              featured throughout the build — from material selection through final reveal.
            </p>
          </div>
          <p className="font-body text-sm italic" style={{ color: "rgba(199,161,90,0.65)" }}>
            &ldquo;You&apos;re not buying an ad — you&apos;re earning content, trust, and a story your brand uses for years.&rdquo;
          </p>
        </ScrollReveal>

        {/* Partnership cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {options.map((o, i) => (
            <ScrollReveal key={o.roman} delay={i * 120}>
              <div className="partner-card group relative flex flex-col p-10 gap-6 h-full overflow-hidden">

                {/* Shimmer top on hover */}
                <div className="absolute top-0 left-0 right-0 h-px shimmer-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-px" style={{ backgroundColor: "#C7A15A" }} />
                <div className="absolute top-0 left-0 w-px h-8" style={{ backgroundColor: "#C7A15A" }} />
                <div className="absolute bottom-0 right-0 w-8 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.3 }} />
                <div className="absolute bottom-0 right-0 w-px h-8" style={{ backgroundColor: "#C7A15A", opacity: 0.3 }} />

                {/* Tag badge */}
                {o.tag && (
                  <span
                    className="absolute top-5 right-5 font-body text-[8px] tracking-[0.35em] uppercase px-3 py-1"
                    style={{ color: "#C7A15A", border: "1px solid rgba(199,161,90,0.4)", backgroundColor: "rgba(199,161,90,0.06)" }}
                  >
                    {o.tag}
                  </span>
                )}

                {/* Roman numeral */}
                <span
                  className="font-heading"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)", color: "rgba(199,161,90,0.1)", lineHeight: 1, letterSpacing: "-0.02em", transition: "color 0.5s ease" }}
                >
                  {o.roman}
                </span>

                <div className="flex-1">
                  <h3 className="font-heading text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#C7A15A" }}>{o.title}</h3>
                  <div className="w-8 h-px mb-5" style={{ backgroundColor: "#C7A15A", opacity: 0.35 }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#A79A8E" }}>{o.desc}</p>
                </div>

                {/* Perks list */}
                <div className="flex flex-col gap-2.5">
                  {o.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <span style={{ color: "#C7A15A", fontSize: "8px" }}>✦</span>
                      <span className="font-body text-[11px] tracking-wide" style={{ color: "rgba(167,154,142,0.85)" }}>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom gold glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(199,161,90,0.1), transparent)" }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Founding Partners callout */}
        <ScrollReveal delay={80} className="mb-20">
          <div
            className="relative p-10 md:p-14 text-center overflow-hidden"
            style={{
              border: "1px solid rgba(199,161,90,0.3)",
              background: "linear-gradient(135deg, rgba(199,161,90,0.07) 0%, transparent 50%, rgba(199,161,90,0.04) 100%)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 shimmer-line" />
            <p className="font-body text-[10px] tracking-[0.6em] uppercase mb-5" style={{ color: "#C7A15A" }}>
              ✦ &nbsp; Founding Partners &nbsp; ✦
            </p>
            <p className="font-heading text-xl md:text-2xl tracking-[0.06em] mb-6" style={{ color: "#D9D0C3" }}>
              First in. Best positioned.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#A79A8E" }}>
              The first brands to commit receive{" "}
              <span style={{ color: "#C7A15A" }}>category exclusivity</span>, priority placement, and the most
              content — captured from demolition through final reveal by a professional videographer & photographer.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories */}
        <ScrollReveal delay={120} className="mb-20 text-center">
          <div className="flex items-center gap-6 justify-center mb-10">
            <div className="flex-1 max-w-24 shimmer-line" />
            <span className="font-body text-[9px] tracking-[0.5em] uppercase" style={{ color: "#A79A8E" }}>Ideal Partners</span>
            <div className="flex-1 max-w-24 shimmer-line" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <span
                key={c}
                className="category-tag font-body text-xs tracking-wide px-5 py-2.5"
                style={{
                  border: "1px solid rgba(199,161,90,0.18)",
                  color: "#A79A8E",
                  backgroundColor: "rgba(199,161,90,0.02)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={180} className="text-center">
          <a
            href="mailto:nikki@casajohnsun.com"
            className="hero-watch-btn inline-block font-body font-medium tracking-[0.35em] uppercase text-[11px] px-14 py-4"
          >
            Inquire About Partnership
          </a>
        </ScrollReveal>
      </div>

      <div className="shimmer-line" />
    </section>
  );
}
