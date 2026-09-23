import React from "react";
import { Container } from "./ui/container";

interface HeroProps {
  name: string;
  tagline: string;
  isOpen: boolean;
  currentDayLabel: string;
  todayHours: string;
}

export function Hero({
  name,
  tagline,
  isOpen,
  currentDayLabel,
  todayHours,
}: HeroProps) {
  const openTimeString = todayHours ? todayHours.split(" – ")[1] || "15:00" : "15:00";

  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 font-sans overflow-hidden border-b border-[#EFE4D3]">
      {/* Soft Ambient Radial Glow Background Blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 60% 30%, rgba(245, 205, 175, 0.45) 0%, rgba(248, 244, 238, 0) 70%)",
        }}
      />
      <div
        className="absolute top-10 -left-20 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(248, 225, 200, 0.4) 0%, rgba(248, 244, 238, 0) 70%)",
        }}
      />

      <Container>
        {/* Top Header Row with Status Pill & Moon Toggle Button */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Glass Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/70 backdrop-blur-md border border-[#E5DACB]/90 text-[#756A61] shadow-xs">
            <span
              className={`h-2 w-2 rounded-full ${
                isOpen ? "bg-[#2D6A3F] animate-pulse" : "bg-[#756A61]"
              }`}
            />
            <span>
              {isOpen
                ? `OPEN NOW - UNTIL ${openTimeString}`
                : `CLOSED TODAY (${currentDayLabel})`}
            </span>
          </div>

          {/* Glass Theme Switcher Moon Button */}
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-[#E5DACB] shadow-xs flex items-center justify-center text-[#2B211B] hover:bg-white hover:shadow-md transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-[#2B211B]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>

        {/* Hero Content Stack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 pt-2">
          {/* Left Side: Title & Subtitle */}
          <div className="space-y-6 max-w-3xl">
            {/* Title */}
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#2B211B] leading-[0.92]">
              {name || "Cardamom House"}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[#756A61] font-sans font-normal leading-relaxed max-w-xl">
              {tagline || "Slow brunch. Strong coffee. Lisbon, since 2021."}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <a
                href="#brunch"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-sans font-semibold bg-[#B45309] text-white hover:bg-[#964205] shadow-md shadow-[#B45309]/20 hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                View menu
              </a>
              <a
                href="#special"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-sans font-semibold bg-white/80 backdrop-blur-md border border-[#E5DACB] text-[#2B211B] hover:bg-white hover:border-[#B45309]/40 shadow-xs transition-all hover:scale-[1.02]"
              >
                Today&apos;s special
              </a>
            </div>
          </div>

          {/* Right Side: Location Info */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 pb-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#EFE4D3]">
            <div className="text-xs font-sans text-[#756A61] tracking-[0.18em] uppercase text-left lg:text-right space-y-1 font-medium">
              <p className="text-[#2B211B] font-semibold text-sm">RUA DA BOAVISTA 84</p>
              <p className="text-[#756A61]">SANTOS / BICA · LISBOA</p>
              <p className="text-[#756A61]/70 text-[11px] pt-1 tracking-widest">
                38.7093° N, 9.1484° W
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}





