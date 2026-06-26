"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { label: "YouTube", href: "https://youtube.com/@CasaJohnSUN", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" /></svg> },
  { label: "Instagram", href: "https://instagram.com/casajohnsun", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8c.1-3.2 1.6-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9c1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" /></svg> },
  { label: "TikTok", href: "https://tiktok.com/@casajohnsun", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3a4.5 4.5 0 01-4.4-4h-3.3v14.4a2.7 2.7 0 11-2.7-2.7c.3 0 .5 0 .8.1V7.4a6 6 0 100 12 6 6 0 006-6V7a7.8 7.8 0 004.7 1.6V5.3A4.5 4.5 0 0119.6 3z" /></svg> },
  { label: "Facebook", href: "https://facebook.com/casajohnsun", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5H13.9v8.4A12 12 0 0024 12z" /></svg> },
];

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer id="follow" className="grain py-24 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden" style={{ backgroundColor: "#0B0B0B" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(44,26,6,0.5) 0%, #0B0B0B 60%)" }} />
      <div className="absolute top-0 left-0 right-0 shimmer-line" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/logo-horizontal.png" alt="Casa JohnSUN" width={200} height={94} className="object-contain" style={{ height: "auto" }} />
          </div>
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-10" style={{ color: "#A79A8E" }}>
            casajohnsun.com · Scottsdale, AZ · EST. 2026
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, #C7A15A)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C7A15A" }} />
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, #C7A15A)" }} />
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-8 mb-14">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="transition-all duration-300 hover:scale-125 hover:text-[#C7A15A]"
                style={{ color: "#A79A8E" }}>
                {s.icon}
              </a>
            ))}
          </div>

          {/* Email capture */}
          <p className="font-heading text-base md:text-lg tracking-[0.15em] mb-2" style={{ color: "#C7A15A" }}>
            Follow the Build
          </p>
          <p className="font-body text-xs tracking-wider mb-8" style={{ color: "#A79A8E" }}>
            Get weekly updates — straight from the build site
          </p>

          {subscribed ? (
            <p className="font-body text-sm tracking-wide mb-10" style={{ color: "#C7A15A" }}>
              You&apos;re in. Welcome to the journey. ✦
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-14">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" required
                className="w-full sm:flex-1 px-5 py-3 bg-transparent font-body text-sm outline-none focus:border-[#C7A15A] transition-colors"
                style={{ border: "1px solid rgba(199,161,90,0.3)", color: "#D9D0C3", caretColor: "#C7A15A" }} />
              <button type="submit"
                className="hero-watch-btn w-full sm:w-auto font-body text-[10px] tracking-[0.3em] uppercase px-8 py-3">
                Subscribe
              </button>
            </form>
          )}

          {/* Contact */}
          <p className="font-body text-xs mb-2" style={{ color: "#A79A8E" }}>
            <a href="tel:6023391648" className="hover:text-[#C7A15A] transition-colors">602-339-1648</a>
            &nbsp;·&nbsp;
            <a href="mailto:nikki@casajohnsun.com" className="hover:text-[#C7A15A] transition-colors">nikki@casajohnsun.com</a>
          </p>

          <div className="shimmer-line my-10 max-w-xs mx-auto" />

          <p className="font-body text-[10px] tracking-[0.3em]" style={{ color: "#A79A8E", opacity: 0.4 }}>
            © 2026 Casa JohnSUN. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
