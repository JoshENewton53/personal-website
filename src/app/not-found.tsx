import Link from "next/link";

const colorBars = [
  "bg-[#e8d5a0]",
  "bg-[#f5c842]",
  "bg-[#1d9e75]",
  "bg-[#f5c842]",
  "bg-[#1e5c8a]",
  "bg-[#c0392b]",
  "bg-[#1e5c8a]",
  "bg-[#c8a84b]",
  "bg-[#1d9e75]",
  "bg-[#e8d5a0]",
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center">

      {/* Color test bars */}
      <div className="flex gap-1 h-20">
        {colorBars.map((color, i) => (
          <div key={i} className={`w-8 rounded-sm opacity-80 ${color}`} />
        ))}
      </div>

      {/* Pulsing dots */}
      <div className="flex items-center justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="phosphor-dot" />
        ))}
      </div>

      {/* Heading */}
      <div>
        <h1 className="coming-soon-heading font-bold leading-tight mb-3">
          TRANSMISSION
          <br />
          INCOMING
        </h1>
        <p className="coming-soon-sub">
          EXCITING NEW THINGS COMING SOON
        </p>
      </div>

      {/* Moving progress bar */}
      <div className="w-64 h-1 rounded-full overflow-hidden bg-[#1e1608]">
        <div className="progress-bar-fill" />
      </div>

      <Link href="/" className="retro-btn text-[11px]">
        ← BACK TO HOME
      </Link>

    </div>
  );
}
