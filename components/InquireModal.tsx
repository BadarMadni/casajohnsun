"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const types = [
  "Partnership Inquiry",
  "Media & Press",
  "General Question",
  "Collaboration",
];

export default function InquireModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: types[0], message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!isOpen || !mounted) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => { setSuccess(false); setError(""); setForm({ name: "", email: "", phone: "", type: types[0], message: "" }); }, 400);
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="relative w-full max-w-xl overflow-y-auto mx-4"
        style={{
          backgroundColor: "#0a0704",
          border: "1px solid rgba(199,161,90,0.3)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(199,161,90,0.08)",
          borderRadius: "2px",
          maxHeight: "90vh",
        }}
      >
        {/* Animated gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(199,161,90,0.3) 20%, #C7A15A 40%, #f5e0a0 50%, #C7A15A 60%, rgba(199,161,90,0.3) 80%, transparent 100%)", backgroundSize: "200% 100%", animation: "shimmerLine 3s linear infinite" }} />

        {/* Ambient glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(199,161,90,0.12) 0%, transparent 70%)" }} />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/5 z-10"
          style={{ color: "#6B6057", border: "1px solid rgba(199,161,90,0.15)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" />
            <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {success ? (
          <div className="flex flex-col items-center text-center px-10 py-16">
            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(199,161,90,0.4)", backgroundColor: "rgba(199,161,90,0.06)" }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16l7 7 13-13" stroke="#C7A15A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 40px rgba(199,161,90,0.2)" }} />
            </div>
            <p className="font-body text-[9px] tracking-[0.6em] uppercase mb-3" style={{ color: "#C7A15A" }}>Message Sent</p>
            <h3 className="font-heading text-3xl tracking-[0.1em] mb-5" style={{ color: "#D9D0C3" }}>Thank You.</h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, rgba(199,161,90,0.5))" }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(199,161,90,0.6)" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, rgba(199,161,90,0.5))" }} />
            </div>
            <p className="font-body text-sm leading-[1.9] mb-10" style={{ color: "#A79A8E" }}>
              Nikki will be in touch with you shortly.<br />We appreciate your interest in Casa JohnSUN.
            </p>
            <button onClick={handleClose} className="hero-watch-btn font-body text-[10px] tracking-[0.4em] uppercase px-12 py-3.5">
              Close
            </button>
          </div>
        ) : (
          <div className="px-8 md:px-12 pt-10 pb-10">
            <div className="mb-8">
              <p className="font-body text-[9px] tracking-[0.6em] uppercase mb-3" style={{ color: "rgba(199,161,90,0.6)" }}>Get in Touch</p>
              <h2 className="font-heading text-[2rem] tracking-[0.06em] leading-none mb-4" style={{ color: "#C7A15A", textShadow: "0 0 40px rgba(199,161,90,0.25)" }}>Inquire</h2>
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ backgroundColor: "#C7A15A", opacity: 0.5 }} />
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C7A15A", opacity: 0.4 }} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[9px] tracking-[0.45em] uppercase" style={{ color: "rgba(167,154,142,0.7)" }}>
                    Name <span style={{ color: "#C7A15A" }}>*</span>
                  </label>
                  <input
                    type="text" required value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="inquire-input bg-transparent px-4 py-3.5 font-body text-sm outline-none transition-all duration-300"
                    style={{ border: "1px solid rgba(199,161,90,0.2)", color: "#D9D0C3", caretColor: "#C7A15A", borderRadius: "1px" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[9px] tracking-[0.45em] uppercase" style={{ color: "rgba(167,154,142,0.7)" }}>
                    Email <span style={{ color: "#C7A15A" }}>*</span>
                  </label>
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="inquire-input bg-transparent px-4 py-3.5 font-body text-sm outline-none transition-all duration-300"
                    style={{ border: "1px solid rgba(199,161,90,0.2)", color: "#D9D0C3", caretColor: "#C7A15A", borderRadius: "1px" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[9px] tracking-[0.45em] uppercase" style={{ color: "rgba(167,154,142,0.7)" }}>Phone</label>
                  <input
                    type="tel" value={form.phone}
                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="(602) 000-0000"
                    className="inquire-input bg-transparent px-4 py-3.5 font-body text-sm outline-none transition-all duration-300"
                    style={{ border: "1px solid rgba(199,161,90,0.2)", color: "#D9D0C3", caretColor: "#C7A15A", borderRadius: "1px" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[9px] tracking-[0.45em] uppercase" style={{ color: "rgba(167,154,142,0.7)" }}>Inquiry Type</label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={(e) => setForm(f => ({ ...f, type: e.target.value }))}
                      className="inquire-input w-full bg-transparent px-4 py-3.5 font-body text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{ border: "1px solid rgba(199,161,90,0.2)", color: "#D9D0C3", backgroundColor: "#0a0704", borderRadius: "1px" }}
                    >
                      {types.map(t => <option key={t} value={t} style={{ backgroundColor: "#0d0906" }}>{t}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="#C7A15A" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-[9px] tracking-[0.45em] uppercase" style={{ color: "rgba(167,154,142,0.7)" }}>
                  Message <span style={{ color: "#C7A15A" }}>*</span>
                </label>
                <textarea
                  required rows={4} value={form.message}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about your inquiry..."
                  className="inquire-input bg-transparent px-4 py-3.5 font-body text-sm outline-none transition-all duration-300 resize-none"
                  style={{ border: "1px solid rgba(199,161,90,0.2)", color: "#D9D0C3", caretColor: "#C7A15A", borderRadius: "1px" }}
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "rgba(232,122,122,0.08)", border: "1px solid rgba(232,122,122,0.2)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#e87a7a" strokeWidth="1.2"/><path d="M7 4v3M7 9.5v.5" stroke="#e87a7a" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <p className="font-body text-xs" style={{ color: "#e87a7a" }}>{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="hero-watch-btn font-body tracking-[0.4em] uppercase text-[11px] px-8 py-4 mt-1 disabled:opacity-50 w-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 14" />
                    </svg>
                    Sending...
                  </span>
                ) : "Send Inquiry"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
