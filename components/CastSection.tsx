import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const crew = [
  {
    id: "andrew",
    name: "Andrew",
    tagline: "Leadership. Strategy.",
    role: "Head Football Coach",
    image: "/cast-andrew.webp",
  },
  {
    id: "charlie",
    name: "Charlie",
    tagline: "The Next Generation.",
    role: null,
    image: "/cast-charlie.webp",
  },
  {
    id: "marc",
    name: "Marc",
    tagline: "Builder. Partner.",
    role: null,
    image: "/cast-nikki.webp",
  },
  {
    id: "frank",
    name: "Frank",
    tagline: "The Good Boy.",
    role: null,
    image: "/cast-frank.webp",
  },
  {
    id: "oscar",
    name: "Oscar",
    tagline: "The Sidekick.",
    role: null,
    image: "/cast-oscar.webp",
  },
];

export default function CastSection() {
  return (
    <section
      id="cast"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#0a0704" }}
    >
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(199,161,90,0.04) 0%, transparent 70%)" }} />
      <div className="shimmer-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-[9px] tracking-[0.6em] uppercase mb-4" style={{ color: "rgba(199,161,90,0.6)" }}>
            The Family
          </p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[0.12em] mb-5" style={{ color: "#C7A15A" }}>
            The People Behind the Legacy
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(199,161,90,0.5))" }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(199,161,90,0.6)" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(199,161,90,0.5))" }} />
          </div>
        </ScrollReveal>

        {/* Nikki — Featured Hero Card */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-3xl mx-auto"
            style={{ border: "1px solid rgba(199,161,90,0.2)", borderRadius: "2px", overflow: "hidden" }}>

            {/* Photo */}
            <div className="relative w-full md:w-64 shrink-0" style={{ minHeight: "320px", backgroundColor: "#0d0906" }}>
              <Image
                src="/cast-marc.webp"
                alt="Nikki"
                fill
                className="object-cover object-top"
                sizes="256px"
              />

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-5 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.7 }} />
              <div className="absolute top-0 left-0 w-px h-5" style={{ backgroundColor: "#C7A15A", opacity: 0.7 }} />
              <div className="absolute bottom-0 right-0 w-5 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.7 }} />
              <div className="absolute bottom-0 right-0 w-px h-5" style={{ backgroundColor: "#C7A15A", opacity: 0.7 }} />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center px-8 md:px-10 py-10"
              style={{ backgroundColor: "#0d0906", borderLeft: "1px solid rgba(199,161,90,0.15)" }}>
              <p className="font-body text-[9px] tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(199,161,90,0.6)" }}>
                Founder &amp; Creative Visionary
              </p>
              <h3 className="font-heading text-4xl md:text-5xl tracking-[0.08em] mb-3" style={{ color: "#C7A15A" }}>
                Nikki
              </h3>
              <div className="w-10 h-px mb-4" style={{ backgroundColor: "rgba(199,161,90,0.4)" }} />
              <p className="font-body text-sm tracking-[0.2em] mb-4" style={{ color: "#D9D0C3" }}>
                Vision. Design. Heart.
              </p>
              <p className="font-body text-sm leading-loose" style={{ color: "#A79A8E" }}>
                Nikki is the creative force behind Casa JohnSUN. With an eye for design
                and a heart for family, she leads the vision and direction of every detail —
                on screen and in life.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Rest of cast — 5 in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {crew.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 80}>
              <div className="flex flex-col items-center text-center group">

                <div
                  className="relative w-full aspect-square mb-4 overflow-hidden"
                  style={{
                    border: "1px solid rgba(199,161,90,0.2)",
                    borderRadius: "2px",
                    backgroundColor: "#0d0906",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(10,7,4,0.7) 0%, transparent 60%)" }}
                  />
                  <div className="absolute top-0 left-0 w-3 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
                  <div className="absolute top-0 left-0 w-px h-3" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
                </div>

                <p className="font-heading text-sm tracking-[0.2em] uppercase mb-1" style={{ color: "#C7A15A" }}>
                  {member.name}
                </p>
                <div className="w-6 h-px mb-2" style={{ backgroundColor: "rgba(199,161,90,0.3)" }} />
                <p className="font-body text-[10px] tracking-[0.15em] leading-relaxed" style={{ color: "#A79A8E" }}>
                  {member.tagline}
                </p>
                {member.role && (
                  <p className="font-body text-[9px] tracking-[0.1em] mt-1" style={{ color: "rgba(199,161,90,0.5)" }}>
                    {member.role}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="shimmer-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
