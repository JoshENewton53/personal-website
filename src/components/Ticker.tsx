"use client";

import { useEffect, useRef } from "react";

const items = [
  "DEVELOPER",
  "HOME COOK",
  "GARDENER",
  "GAMER",
  "WRITER",
  "OLD SOUL",
  "ANALYST",
  "PROBLEM SOLVER",
  "STORYTELLER",
  "NIGHT OWL",
  "LIFELONG SCHOLAR",
  "CONTENT CREATOR",
  "BOOK LOVER",
  "ASPIRING HOMESTEADER",
  "DEEP THINKER",
  "PET OWNER",
];

const singleLine = items.map((item) => `◆  ${item}  `).join("");

export default function Ticker() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const posRef  = useRef(0);
  const rafRef  = useRef(0);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const SPEED = 80; // px per second
    let last: number | null = null;

    function tick(now: number) {
      if (last !== null) {
        posRef.current -= (SPEED * (now - last)) / 1000;
        // scrollWidth is the full doubled string; half = one copy
        const half = el!.scrollWidth / 2;
        if (posRef.current <= -half) posRef.current += half;
        el!.style.transform = `translateX(${posRef.current}px)`;
      }
      last = now;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="h-8 bg-[#120d04] border-b border-brass/20 overflow-hidden flex items-center">
      <span ref={spanRef} className="ticker-text text-brass/60 whitespace-nowrap shrink-0">
        {singleLine}{singleLine}
      </span>
    </div>
  );
}
