"use client";

import Link from "next/link";

interface SectionCardProps {
  label: string;
  href: string;
  desc: string;
  accent: string;
  icon: string;
}

export default function SectionCard({ label, href, desc, accent, icon }: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group block p-4 rounded-lg border transition-all duration-200"
      style={
        {
          background: "#120d04",
          borderColor: `${accent}33`,
          "--accent": accent,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}88`;
        el.style.background = `${accent}0d`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}33`;
        el.style.background = "#120d04";
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: accent, fontSize: "11px" }}>{icon}</span>
        <span
          className="text-[11px] tracking-[2px]"
          style={{ fontFamily: "Oswald, sans-serif", color: accent }}
        >
          {label.toUpperCase()}
        </span>
      </div>
      <div className="text-brass/50 text-[11px] leading-relaxed pl-4">
        {desc}
      </div>
    </Link>
  );
}
