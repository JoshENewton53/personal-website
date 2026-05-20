import Link from "next/link";
import Image from "next/image";
import SectionCard from "@/components/SectionCard";

const sections = [
  {
    label: "About Me",
    href: "/about",
    desc: "Background, education & skills",
    accent: "#c8a84b",
    icon: "◉",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    desc: "Projects, case studies & resume",
    accent: "#1e5c8a",
    icon: "◧",
  },
  {
    label: "Career Goals",
    href: "/career-goals",
    desc: "Where I'm headed & what drives me",
    accent: "#1d9e75",
    icon: "◎",
  },
  {
    label: "From Josh's Kitchen",
    href: "/cookbook",
    desc: "Favorite recipes & cooking tips",
    accent: "#f5c842",
    icon: "◈",
  },
  {
    label: "Garden Patch",
    href: "/garden",
    desc: "Plants, projects & growing things",
    accent: "#1d9e75",
    icon: "◉",
  },
  {
    label: "Man's Best Friends",
    href: "/pets",
    desc: "My animals",
    accent: "#c8a84b",
    icon: "◈",
  },
  {
    label: "The Game Room",
    href: "/games",
    desc: "Reviews and gameplay",
    accent: "#1e5c8a",
    icon: "◧",
  },
  {
    label: "Rankings Roundtable",
    href: "/tier-lists",
    desc: "My takes on various things",
    accent: "#c0392b",
    icon: "◫",
  },
  {
    label: "The Reading Nook",
    href: "/writing",
    desc: "Articles, essays & books",
    accent: "#e8d5a0",
    icon: "◉",
  },
  {
    label: "Josh's Updates",
    href: "/deep-thoughts",
    desc: "Glimpses Into my mind & life",
    accent: "#9a8050",
    icon: "◎",
  },
  {
    label: "The Dream",
    href: "/homestead",
    desc: "The dream of simple, homestead living",
    accent: "#1d9e75",
    icon: "◈",
  },
  {
    label: "KBLW The Bellow",
    href: "/kblw",
    desc: "My retro-themed YouTube channel",
    accent: "#c0392b",
    icon: "◆",
  },
];

export default function HomePage() {
  return (
    <div className="pb-12">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#120d04] border-b border-brass/20 px-6 py-14">
        {/* Corner decorations */}
        <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-brass/30" />
        <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-brass/30" />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-brass/30" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-brass/30" />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none hero-vignette" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="hero-heading text-parchment leading-none mb-3">
            HEY FRIENDS, I&apos;M{" "}
            <span className="hero-heading-name">JOSH</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-[11px] tracking-[5px] text-brass/60 mb-8">
            <span className="deco-line-left" />
            TINKERER &nbsp;·&nbsp; CREATOR &nbsp;·&nbsp; FRIEND
            <span className="deco-line-right" />
          </div>

          {/* Bio card */}
          <div className="flex flex-col sm:flex-row gap-8 items-center text-left max-w-4xl mx-auto">
            {/* Photo */}
            <div className="shrink-0 w-64 h-80 sm:w-80 sm:h-96 rounded-lg border-2 border-brass/40 overflow-hidden">
              <Image
                src="/JoshPicture1.jpg"
                alt="Josh Newton"
                width={320}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <p className="text-parchment/80 text-[16.5px] leading-relaxed">
              An old soul navigating a new world — I believe in good food, good people,
              and the quiet satisfaction of watching something you planted actually grow.
              I care deeply about the folks in my life, the hobbies that keep me grounded,
              and showing up with kindness wherever I go. Life is short and I intend to
              spend it doing what I love, around the people I love. This site is a little
              window into all of it. Pull up a chair and tune in to my little slice of this big beautiful world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-b border-brass/20 grid grid-cols-2 sm:grid-cols-4 divide-x divide-brass/20">
        {[
          { label: "BROADCASTING SINCE", value: "2004", colorClass: "text-gold" },
          { label: "REGRETS", value: "Few", colorClass: "text-phosphor" },
          { label: "HOBBIES", value: "Many", colorClass: "text-brass" },
          { label: "LIFE", value: "Enjoyed", colorClass: "text-on-air" },
        ].map((s) => (
          <div key={s.label} className="px-6 py-4 text-center bg-[#120d04]">
            <div className={`text-xl font-bold font-oswald tracking-widest ${s.colorClass}`}>
              {s.label}
            </div>
            <div className="font-oswald text-sm tracking-[3px] text-brass/40 mt-1">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* ── Sections grid ── */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <div className="retro-section-title">EXPLORE THE SITE</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((s) => (
            <SectionCard key={s.href} {...s} />
          ))}
        </div>
      </section>

      {/* ── Sign-off ── */}
      <div className="text-center text-[10px] tracking-[4px] text-brass/25 pb-4">
        ◆ &nbsp; BUILT BY JOSH NEWTON &nbsp; ◆ &nbsp; CIRCA {new Date().getFullYear()} &nbsp; ◆
      </div>
    </div>
  );
}
