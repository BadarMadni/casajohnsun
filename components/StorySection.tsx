import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import PillarCard from "./PillarCard";
import StatCounter from "./StatCounter";
import PhotoStrip from "./PhotoStrip";

const pillars = [
  {
    label: "Architecture",
    desc: "Every space intentional. Every material chosen by Nikki — designed entirely from the ground up.",
    svg: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L2 12h3v13h20V12h3L14 3z" stroke="#C7A15A" strokeWidth="1.3" strokeLinejoin="round" /><rect x="10" y="16" width="8" height="9" stroke="#C7A15A" strokeWidth="1.3" /><line x1="14" y1="16" x2="14" y2="25" stroke="#C7A15A" strokeWidth="1.3" /></svg>),
  },
  {
    label: "Family",
    desc: "A husband, wife, and daughter — building more than a home. Building a legacy that outlasts them all.",
    svg: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="8" r="4" stroke="#C7A15A" strokeWidth="1.3" /><circle cx="6" cy="11" r="3" stroke="#C7A15A" strokeWidth="1.3" /><circle cx="22" cy="11" r="3" stroke="#C7A15A" strokeWidth="1.3" /><path d="M2 25c0-4 2-6 4-6h2M26 25c0-4-2-6-4-6h-2M8 25c0-4 2.5-8 6-8s6 4 6 8" stroke="#C7A15A" strokeWidth="1.3" strokeLinecap="round" /></svg>),
  },
  {
    label: "Legacy",
    desc: "Every decision documented. Every milestone shared. A story written in stone, glass, and desert light.",
    svg: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2l3 9h9.5l-7.7 5.6 2.9 9-7.7-5.6-7.7 5.6 2.9-9L1.5 11H11z" stroke="#C7A15A" strokeWidth="1.3" strokeLinejoin="round" /></svg>),
  },
];

export default function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden" style={{ backgroundColor: "#0d0906" }}>

      {/* Warm desert gradient background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 50% 0%, #2a1a08 0%, #0d0906 55%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(199,161,90,0.06) 0%, transparent 60%)" }} />

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-heading text-[18vw] md:text-[14vw] font-bold tracking-widest select-none"
          style={{ color: "rgba(199,161,90,0.03)", lineHeight: 1, userSelect: "none" }}>
          LEGACY
        </span>
      </div>

      {/* Top shimmer line */}
      <div className="shimmer-line" />

      {/* House image — right side decorative */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5 pointer-events-none overflow-hidden hidden lg:block">
        <Image src="/house.webp" alt="" fill className="object-cover object-left" style={{ opacity: 0.07 }} sizes="40vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0d0906 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">

        {/* Header — left aligned for drama */}
        <ScrollReveal className="mb-20 max-w-3xl">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase mb-6" style={{ color: "#A79A8E" }}>The Story</p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-[0.06em] leading-tight mb-8" style={{ color: "#C7A15A" }}>
            More Than<br />a Home.
          </h2>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] leading-tight mb-10" style={{ color: "#D9D0C3" }}>
            A Legacy in the Making.
          </h3>

          {/* Gold left-border quote */}
          <div className="pl-6 mb-8" style={{ borderLeft: "2px solid #C7A15A" }}>
            <p className="font-body text-base md:text-lg leading-loose" style={{ color: "#A79A8E" }}>
              For ten years, the Johnsons built memories inside the walls of a home they loved.
              In 2026, they tore it down to build something extraordinary — a modern desert contemporary home in Scottsdale, Arizona, designed entirely by Nikki Johnson.
            </p>
          </div>
          <p className="font-body text-sm md:text-base leading-loose" style={{ color: "rgba(167,154,142,0.7)" }}>
            Every decision. Every material. Every milestone. Documented and shared.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={100} className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {/* EST. 2026 */}
            <div className="flex flex-col py-10 px-8 relative" style={{ borderTop: "1px solid rgba(199,161,90,0.12)" }}>
              <div className="mb-2">
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide" style={{ color: "#C7A15A" }}>EST. 2026</p>
                <p className="font-body text-[10px] tracking-[0.4em] uppercase mt-1" style={{ color: "#A79A8E" }}>Scottsdale</p>
              </div>
              <div className="absolute top-0 left-0 w-4 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
            </div>
            {/* DEMOLITION TO REVEAL */}
            <div className="flex flex-col py-10 px-8 relative" style={{ borderLeft: "1px solid rgba(199,161,90,0.12)", borderTop: "1px solid rgba(199,161,90,0.12)" }}>
              <div className="mb-2">
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight" style={{ color: "#C7A15A" }}>DEMOLITION<br />TO REVEAL</p>
                <p className="font-body text-[10px] tracking-[0.4em] uppercase mt-1" style={{ color: "#A79A8E" }}>Build Value</p>
              </div>
              <div className="absolute top-0 left-0 w-4 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
            </div>
            {/* 5000+ Early Views */}
            <div className="flex flex-col py-10 px-8 relative" style={{ borderLeft: "1px solid rgba(199,161,90,0.12)", borderTop: "1px solid rgba(199,161,90,0.12)" }}>
              <div className="mb-2">
                <StatCounter
                  value={5000} prefix="" suffix="+" label="Early Views" decimals={0} separator={true} duration={1800}
                  numClassName="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide tabular-nums"
                  labelClassName="font-body text-[10px] tracking-[0.4em] uppercase"
                />
              </div>
              <div className="absolute top-0 left-0 w-4 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
            </div>
            {/* 2 Yrs Documented */}
            <div className="flex flex-col py-10 px-8 relative" style={{ borderLeft: "1px solid rgba(199,161,90,0.12)", borderTop: "1px solid rgba(199,161,90,0.12)" }}>
              <div className="mb-2">
                <StatCounter
                  value={2} prefix="" suffix=" Yrs" label="Documented" decimals={0} separator={false} duration={1000}
                  numClassName="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide tabular-nums"
                  labelClassName="font-body text-[10px] tracking-[0.4em] uppercase"
                />
              </div>
              <div className="absolute top-0 left-0 w-4 h-px" style={{ backgroundColor: "#C7A15A", opacity: 0.6 }} />
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={50} className="mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 shimmer-line" />
            <span className="font-body text-[9px] tracking-[0.5em] uppercase" style={{ color: "#A79A8E" }}>Three Pillars</span>
            <div className="flex-1 shimmer-line" />
          </div>
        </ScrollReveal>

        {/* Photo strip */}
        <ScrollReveal delay={80} className="mb-16 -mx-6 md:-mx-16 lg:-mx-24">
          <PhotoStrip />
        </ScrollReveal>

        {/* Pillars — interactive animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 120}>
              <PillarCard label={p.label} desc={p.desc} svg={p.svg} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom shimmer line */}
      <div className="shimmer-line" />
    </section>
  );
}
