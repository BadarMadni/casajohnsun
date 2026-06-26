"use client";

import { useState, ReactNode } from "react";

interface Props {
  label: string;
  desc: string;
  svg: ReactNode;
}

export default function PillarCard({ label, desc, svg }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="relative flex flex-col gap-6 p-10 h-full overflow-hidden cursor-pointer select-none"
      style={{
        backgroundColor: active ? "rgba(199,161,90,0.10)" : "rgba(199,161,90,0.04)",
        border: `1px solid ${active ? "rgba(199,161,90,0.55)" : "rgba(199,161,90,0.12)"}`,
        boxShadow: active
          ? "0 0 40px rgba(199,161,90,0.15), 0 20px 60px rgba(0,0,0,0.4)"
          : "0 0 0 transparent",
        transform: active ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.45s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Top animated shimmer bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #C7A15A 40%, #f5e0a0 50%, #C7A15A 60%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: active ? "shimmerLine 2s linear infinite" : "none",
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Bottom gold glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "60px",
          background: "linear-gradient(to top, rgba(199,161,90,0.12), transparent)",
          opacity: active ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Icon with spin/scale on active */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
        style={{
          border: `1px solid ${active ? "rgba(199,161,90,0.8)" : "rgba(199,161,90,0.4)"}`,
          backgroundColor: active ? "rgba(199,161,90,0.12)" : "rgba(199,161,90,0.06)",
          transform: active ? "rotate(15deg) scale(1.1)" : "rotate(0) scale(1)",
          boxShadow: active ? "0 0 20px rgba(199,161,90,0.3)" : "none",
          transition: "all 0.5s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {svg}
      </div>

      {/* Label */}
      <div className="relative z-10">
        <h3
          className="font-heading text-xs tracking-[0.4em] uppercase mb-3"
          style={{
            color: active ? "#e8c87a" : "#C7A15A",
            transition: "color 0.3s ease",
          }}
        >
          {label}
        </h3>
        <div
          className="h-px mb-4"
          style={{
            width: active ? "60px" : "32px",
            backgroundColor: "#C7A15A",
            opacity: active ? 0.7 : 0.35,
            transition: "all 0.4s ease",
          }}
        />
        <p
          className="font-body text-sm leading-relaxed"
          style={{
            color: active ? "#C7A15A" : "#A79A8E",
            transition: "color 0.3s ease",
          }}
        >
          {desc}
        </p>
      </div>

      {/* Click hint */}
      <div
        className="absolute bottom-4 right-4 font-body text-[9px] tracking-[0.3em] uppercase z-10"
        style={{
          color: active ? "rgba(199,161,90,0.6)" : "rgba(167,154,142,0.25)",
          transition: "color 0.3s ease",
        }}
      >
        {active ? "✦ active" : "tap"}
      </div>
    </div>
  );
}
