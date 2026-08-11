"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type InViewProps = {
  /** classes always applied — use these for the pre-animation resting state */
  className?: string;
  /** classes added once the element scrolls into view */
  activeClassName: string;
  /** replay every time it re-enters the viewport instead of only the first */
  repeat?: boolean;
  /** fraction of the element that must be visible before firing */
  threshold?: number;
  children: ReactNode;
};

/**
 * Wraps content and swaps in `activeClassName` when it scrolls into view, so
 * one-shot entrance animations play when the user actually reaches them rather
 * than on page load.
 */
export default function InView({
  className = "",
  activeClassName,
  repeat = false,
  threshold = 0.35,
  children,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setActive(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat, threshold]);

  return (
    <div ref={ref} className={`${className} ${active ? activeClassName : ""}`}>
      {children}
    </div>
  );
}
