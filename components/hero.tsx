"use client";

import React from "react";
import { Container } from "./ui/container";
import { ThemeToggle } from "./theme-toggle";
import { ScrollReveal } from "./ui/scroll-reveal";

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
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 font-sans overflow-hidden border-b border-[#E5DACB] dark:border-white/10 print:hidden bg-gradient-to-b from-[#F5ECE0] via-[#F8F4EE] to-[#FAF5EE] dark:from-[#161B26] dark:via-[#0D0F12] dark:to-[#11141D] transition-colors duration-300">
      {/* Soft Ambient Radial Glow Background Blobs */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#B45309]/20 via-[#F59E0B]/10 to-transparent dark:from-[#F59E0B]/25 dark:via-[#D97706]/15 dark:to-transparent blur-3xl pointer-events-none -z-10 opacity-70 animate-pulse" />
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#D97706]/15 via-[#B45309]/10 to-transparent dark:from-[#B45309]/20 dark:via-[#F59E0B]/15 dark:to-transparent blur-3xl pointer-events-none -z-10 opacity-60" />

      <Container>
        {/* Top Header Row with Status Pill & Moon Toggle Button */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center justify-between gap-4 mb-8">
            {/* Glass Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/90 dark:border-white/15 text-[#756A61] dark:text-[#C7BBB0] shadow-md shadow-black/5 hover:scale-105 transition-transform duration-300">
              <span
                className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-[#2D6A3F] dark:bg-[#86EFAC] animate-pulse shadow-sm shadow-emerald-500/50" : "bg-[#756A61] dark:bg-[#A89B90]"
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
        </ScrollReveal>

        {/* Hero Content Stack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 pt-2">
          {/* Left Side: Title & Subtitle */}
          <div className="space-y-6 max-w-3xl">
            {/* Title with Theme-Matched Gradient Text */}
            <ScrollReveal direction="up" delay={150} duration={800}>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] font-normal tracking-tight bg-gradient-to-r from-[#2B211B] via-[#5C3B24] to-[#B45309] dark:from-[#FFFFFF] dark:via-[#F8FAFC] dark:to-[#F59E0B] bg-clip-text text-transparent leading-[0.95] whitespace-normal lg:whitespace-nowrap">
                {name || "Cardamom House"}
              </h1>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal direction="up" delay={300} duration={750}>
              <p className="text-lg sm:text-xl text-[#5C524A] dark:text-[#94A3B8] font-sans font-normal leading-relaxed max-w-xl">
                {tagline || "Slow brunch. Strong coffee. Lisbon, since 2021."}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={450} duration={700}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <a
                  href="#brunch"
                  className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] dark:from-[#D97706] dark:via-[#F59E0B] dark:to-[#FBBF24] text-white dark:text-[#0D0F12] shadow-lg shadow-[#B45309]/30 dark:shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] dark:focus-visible:outline-[#F59E0B] transition-all duration-300 w-full sm:w-auto"
                >
                  View menu
                </a>
                <a
                  href="#special"
                  className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider bg-white/85 dark:bg-[#181C24]/90 backdrop-blur-xl border border-white/90 dark:border-white/15 text-[#2B211B] dark:text-[#F8FAFC] hover:bg-white dark:hover:bg-[#202632] hover:border-[#B45309]/50 dark:hover:border-[#F59E0B]/50 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] dark:focus-visible:outline-[#F59E0B] shadow-md shadow-black/5 transition-all duration-300 w-full sm:w-auto"
                >
                  Today&apos;s special
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Location Info */}
          <ScrollReveal direction="left" delay={500} duration={800}>
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 pb-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#EFE4D3] dark:border-white/10 group cursor-default">
              <div className="text-xs font-sans text-[#756A61] dark:text-[#C7BBB0] tracking-[0.18em] uppercase text-left lg:text-right space-y-1 font-medium transition-transform duration-300 group-hover:-translate-y-0.5">
                <p className="text-[#2B211B] dark:text-[#F5EFE6] font-semibold text-sm group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B] transition-colors">
                  RUA DA BOAVISTA 84
                </p>
                <p className="text-[#756A61] dark:text-[#C7BBB0]">SANTOS / BICA · LISBOA</p>
                <p className="text-[#756A61]/70 dark:text-[#C7BBB0]/70 text-[11px] pt-1 tracking-widest">
                  38.7093° N, 9.1484° W
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}





