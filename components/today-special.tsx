"use client";

import React from "react";
import { Container } from "./ui/container";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ui/scroll-reveal";

interface TodaySpecialProps {
  blurb: string;
  isSoldOut: boolean;
}

export function TodaySpecial({ blurb, isSoldOut }: TodaySpecialProps) {
  return (
    <section id="special" aria-label="Today's Special" className="scroll-mt-24 py-10 sm:py-16 font-sans relative print:hidden">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 210, 180, 0.4) 0%, rgba(248, 244, 238, 0) 70%)",
        }}
      />

      <Container>
        {/* Section Header Eyebrow & Headline */}
        <ScrollReveal direction="up" duration={700}>
          <div className="space-y-2 mb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309]">
              TODAY&apos;S SPECIAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B211B] dark:text-[#F5EFE6]">
              The plate we&apos;re proud of this morning.
            </h2>
          </div>
        </ScrollReveal>

        {/* Glassmorphism Featured Card */}
        <ScrollReveal direction="up" delay={200} duration={800}>
          <div
            className={`group relative rounded-3xl p-6 sm:p-10 backdrop-blur-2xl border border-white/90 dark:border-white/15 shadow-lg shadow-black/5 transition-all duration-300 overflow-hidden ${
              isSoldOut
                ? "opacity-75 bg-white/60 dark:bg-white/5"
                : "bg-white/90 dark:bg-gradient-to-br dark:from-[#1A1F2B]/95 dark:to-[#121620]/95 hover:bg-white dark:hover:from-[#202736]/95 dark:hover:to-[#161B28]/95 hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/60 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1"
            }`}
          >
            {/* Luminous Ambient Glow Blob for Dark Mode */}
            <div className="hidden dark:block absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#F59E0B]/20 via-[#B45309]/15 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              {/* Main Details */}
              <div className="space-y-4 max-w-2xl">
                {/* Badges Row */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#EFE4D3]/80 dark:bg-white/10 text-[#B45309] dark:text-[#F59E0B] border border-[#E5DACB] dark:border-white/10 shadow-xs hover:scale-105 transition-transform">
                    CHEF&apos;S RECOMMENDATION
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#E2EFE4] dark:bg-[#1B3624] text-[#2D6A3F] dark:text-[#86EFAC] shadow-xs hover:scale-105 transition-transform">
                    Vegetarian
                  </span>
                  {isSoldOut && <Badge variant="soldOut">SOLD OUT</Badge>}
                </div>

                {/* Title & Price Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <h3
                    className={`text-3xl sm:text-4xl font-serif font-bold ${
                      isSoldOut
                        ? "text-[#756A61] line-through decoration-[#756A61]/60"
                        : "text-[#2B211B] dark:text-[#F5EFE6] group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B] transition-colors"
                    }`}
                  >
                    Saffron French Toast
                  </h3>
                  <span
                    className={`font-serif font-bold text-2xl sm:text-3xl tabular-nums ${
                      isSoldOut ? "text-[#756A61]" : "text-[#B45309] dark:text-[#F59E0B]"
                    }`}
                  >
                    €12.80
                  </span>
                </div>

                {/* Item Description */}
                <p className="text-base sm:text-lg text-[#756A61] dark:text-[#C7BBB0] font-sans leading-relaxed">
                  Brioche soaked in saffron-cardamom custard, pistachios, mascarpone, honey.
                </p>

                {/* Quote / Blurb */}
                {blurb && (
                  <div className="flex items-start gap-2 pt-3 border-t border-[#E5DACB]/60 dark:border-white/10 font-serif italic text-sm sm:text-base text-[#756A61] dark:text-[#D4C8BC]">
                    <span className="text-xl leading-none text-[#B45309] dark:text-[#F59E0B] font-bold">”</span>
                    <p>{blurb}</p>
                  </div>
                )}
              </div>

              {/* Right Action CTA */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E5DACB] dark:border-white/10 w-full sm:w-auto">
                {isSoldOut ? (
                  <div className="px-6 py-3 rounded-full bg-[#EFE4D3] dark:bg-white/10 text-[#756A61] dark:text-[#C7BBB0] text-xs font-sans font-semibold tracking-wider uppercase border border-[#E5DACB] dark:border-white/10 text-center w-full sm:w-auto">
                    Sold out for today
                  </div>
                ) : (
                  <a
                    href="#brunch"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] text-white shadow-lg shadow-[#B45309]/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Order in Brunch
                  </a>
                )}
                <span className="text-xs font-sans text-[#756A61] dark:text-[#C7BBB0] flex items-center gap-1.5 pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#2D6A3F] dark:bg-[#86EFAC] animate-pulse" />
                  Freshly baked every morning
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}





