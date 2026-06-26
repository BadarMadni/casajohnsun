"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  separator?: boolean;
  numClassName?: string;
  labelClassName?: string;
}

export default function StatCounter({ value, prefix = "", suffix = "", decimals = 0, duration = 1800, label, separator = false, numClassName = "font-heading text-xl md:text-2xl tracking-wide tabular-nums", labelClassName = "font-body text-[10px] md:text-xs tracking-[0.4em] uppercase" }: Props) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * value).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value, duration, decimals]);

  const formatted = separator
    ? Math.round(display).toLocaleString("en-US")
    : decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toString();

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className={`${numClassName} tabular-nums`} style={{ color: "#C7A15A" }}>
        {prefix}{formatted}{suffix}
      </span>
      <span className={labelClassName} style={{ color: "#D9D0C3", opacity: 0.7 }}>{label}</span>
    </div>
  );
}
