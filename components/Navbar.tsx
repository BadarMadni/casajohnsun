"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import InquireModal from "./InquireModal";

const links = [
  { label: "The Story", href: "#story" },
  { label: "Baba's Tree", href: "#baba" },
  { label: "Watch", href: "#watch" },
  { label: "Partner", href: "#partner" },
  { label: "Follow", href: "#follow" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(11,11,11,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(199,161,90,0.15)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo — same transparent PNG, scaled for navbar */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center group transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo-horizontal.webp"
            alt="Casa JohnSUN"
            width={988}
            height={465}
            className="object-contain h-14 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="font-body text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-[#C7A15A]"
              style={{ color: "#A79A8E" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setInquireOpen(true)}
            className="hero-watch-btn font-body text-[10px] tracking-[0.25em] uppercase px-6 py-2.5"
          >
            Inquire
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-px" style={{ backgroundColor: "#C7A15A" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6 border-t"
          style={{ backgroundColor: "rgba(11,11,11,0.98)", borderColor: "rgba(199,161,90,0.15)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="font-body text-xs tracking-[0.35em] uppercase hover:text-[#C7A15A] transition-colors"
              style={{ color: "#A79A8E" }}
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => { setMenuOpen(false); setInquireOpen(true); }} className="font-body text-xs tracking-[0.3em] uppercase text-left" style={{ color: "#C7A15A" }}>
            Inquire →
          </button>
        </div>
      )}

      <InquireModal isOpen={inquireOpen} onClose={() => setInquireOpen(false)} />
    </nav>
  );
}
