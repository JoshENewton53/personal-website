"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navSections = [
  {
    group: "HOME",
    items: [
      { label: "Home", href: "/", accent: "#f5c842" },
    ],
  },
  {
    group: "PROFESSIONAL INTERESTS",
    items: [
      { label: "About Me", href: "/about", accent: "#c8a84b" },
      { label: "Portfolio", href: "/portfolio", accent: "#1e5c8a" },
      { label: "Contact", href: "/contact", accent: "#c0392b" },
      { label: "Career Goals", href: "/career-goals", accent: "#1d9e75" },
    ],
  },
  {
    group: "PERSONAL INTERESTS",
    items: [
      { label: "Josh's Updates", href: "/deep-thoughts", accent: "#9a8050" },
      { label: "Rankings Roundtable", href: "/tier-lists", accent: "#c0392b" },
      { label: "From Josh's Kitchen", href: "/cookbook", accent: "#f5c842" },
      { label: "Garden Patch", href: "/garden", accent: "#1d9e75" },
      { label: "The Game Room", href: "/games", accent: "#1e5c8a" },
      { label: "The Reading Nook", href: "/writing", accent: "#e8d5a0" },
      { label: "Man's Best Friends", href: "/pets", accent: "#c8a84b" },
      { label: "The Dream", href: "/homestead", accent: "#1d9e75" },
    ],
  },
  {
    group: "YOUTUBE CHANNEL",
    items: [
      { label: "KBLW The Bellow", href: "/kblw", accent: "#c0392b" },
    ],
  },
];

export default function SideNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden fixed top-14 left-2 z-50 w-8 h-8 flex items-center justify-center bg-[#1a1208] border border-brass/40 rounded text-brass text-sm"
        aria-label="Toggle navigation"
      >
        {collapsed ? "▶" : "◀"}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          bg-[#120d04] border-r border-brass/20
          transition-all duration-300
          ${collapsed ? "-translate-x-full" : "translate-x-0"}
          lg:translate-x-0
          w-56
        `}
      >
        {/* Name / logo */}
        <div className="px-5 pt-6 pb-4 border-b border-brass/20">
          <div style={{ fontFamily: "Oswald, sans-serif" }}>
            <div className="text-brass/50 text-3xl tracking-widest font-bold">JUST</div>
            <div className="text-gold text-3xl tracking-widest font-bold pl-4">JOSH</div>
          </div>
        </div>

        {/* Nav links grouped */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navSections.map((section) => (
            <div key={section.group} className="mb-4">
              <div
                className="px-5 mb-1 text-[9px] tracking-[3px] text-brass/30"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {section.group}
              </div>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-5 py-[7px] text-[11px] tracking-[1px] transition-colors
                      ${active
                        ? "bg-[#1e1608] text-parchment"
                        : "text-brass/60 hover:text-parchment hover:bg-[#1a1408]/60"
                      }
                    `}
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={() => setCollapsed(true)}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        background: active ? item.accent : "transparent",
                        border: `1px solid ${item.accent}66`,
                      }}
                    />
                    {item.label}
                    {active && (
                      <span
                        className="ml-auto w-0.5 h-4 rounded-full"
                        style={{ background: item.accent }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-brass/20 text-[9px] tracking-[2px] text-brass/25 text-center">
          {new Date().getFullYear()} &nbsp;◆&nbsp; JOSH NEWTON
        </div>
      </aside>
    </>
  );
}
