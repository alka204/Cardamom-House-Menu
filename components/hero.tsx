import React from "react";
import { Container } from "./ui/container";
import { ThemeToggle } from "./theme-toggle";

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
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 font-sans overflow-hidden border-b border-[#EFE4D3] dark:border-white/10">
      {/* Soft Ambient Radial Glow Background Blobs */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#B45309]/20 via-[#F59E0B]/10 to-transparent blur-3xl pointer-events-none -z-10 opacity-70 animate-pulse" />
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#D97706]/15 via-[#B45309]/10 to-transparent blur-3xl pointer-events-none -z-10 opacity-60" />

      <Container>
        {/* Top Header Row with Status Pill & Moon Toggle Button */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Glass Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/90 dark:border-white/15 text-[#756A61] dark:text-[#C7BBB0] shadow-md shadow-black/5">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isOpen ? "bg-[#2D6A3F] dark:bg-[#86EFAC] animate-pulse shadow-sm shadow-emerald-500/50" : "bg-[#756A61] dark:bg-[#A89B90]"
              }`}
            />
            <span>
              {isOpen
                ? `OPEN NOW - UNTIL ${openTimeString}`
                : `CLOSED TODAY (${currentDayLabel})`}
            </span>
          </div>

          {/* Glass Theme Switcher Button */}
          <ThemeToggle />
        </div>

        {/* Hero Content Stack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 pt-2">
          {/* Left Side: Title & Subtitle */}
          <div className="space-y-6 max-w-3xl">
            {/* Title with Gradient Accent */}
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#2B211B] dark:text-[#F5EFE6] leading-[0.92]">
              {name || "Cardamom House"}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[#756A61] dark:text-[#C7BBB0] font-sans font-normal leading-relaxed max-w-xl">
              {tagline || "Slow brunch. Strong coffee. Lisbon, since 2021."}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <a
                href="#brunch"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-bold uppercase tracking-wider bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] text-white shadow-lg shadow-[#B45309]/30 hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-[1.03]"
              >
                View menu
              </a>
              <a
                href="#special"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-bold uppercase tracking-wider bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/90 dark:border-white/15 text-[#2B211B] dark:text-[#F5EFE6] hover:bg-white dark:hover:bg-white/20 hover:border-[#B45309]/50 shadow-md shadow-black/5 transition-all hover:scale-[1.03]"
              >
                Today&apos;s special
              </a>
            </div>
          </div>

          {/* Right Side: Location Info */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 pb-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#EFE4D3] dark:border-white/10">
            <div className="text-xs font-sans text-[#756A61] dark:text-[#C7BBB0] tracking-[0.18em] uppercase text-left lg:text-right space-y-1 font-medium">
              <p className="text-[#2B211B] dark:text-[#F5EFE6] font-semibold text-sm">RUA DA BOAVISTA 84</p>
              <p className="text-[#756A61] dark:text-[#C7BBB0]">SANTOS / BICA · LISBOA</p>
              <p className="text-[#756A61]/70 dark:text-[#C7BBB0]/70 text-[11px] pt-1 tracking-widest">
                38.7093° N, 9.1484° W
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}





