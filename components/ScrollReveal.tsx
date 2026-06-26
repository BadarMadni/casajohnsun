"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  return (
    <div ref={ref} className={`${cls} ${className}`} style={style}>
      {children}
    </div>
  );
}
