import React from "react";
import { Container } from "./ui/container";
import { Badge } from "./ui/badge";

interface TodaySpecialProps {
  blurb: string;
  isSoldOut: boolean;
}

export function TodaySpecial({ blurb, isSoldOut }: TodaySpecialProps) {
  return (
    <section id="special" aria-label="Today's Special" className="scroll-mt-24 py-10 sm:py-16 font-sans relative">
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
        <div className="space-y-2 mb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309]">
            TODAY&apos;S SPECIAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B211B]">
            The plate we&apos;re proud of this morning.
          </h2>
        </div>

        {/* Glassmorphism Featured Card */}
        <div
          className={`relative rounded-3xl p-6 sm:p-10 bg-white/70 backdrop-blur-md border border-white/80 shadow-xs transition-all ${
            isSoldOut ? "opacity-75" : "hover:shadow-md hover:bg-white/80"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Main Details */}
            <div className="space-y-4 max-w-2xl">
              {/* Badges Row */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#EFE4D3]/80 text-[#B45309] border border-[#E5DACB]">
                  CHEF&apos;S RECOMMENDATION
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#E2EFE4] text-[#2D6A3F]">
                  V · Vegetarian
                </span>
                {isSoldOut && <Badge variant="soldOut">SOLD OUT</Badge>}
              </div>

              {/* Title & Price Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <h3
                  className={`text-3xl sm:text-4xl font-serif font-bold ${
                    isSoldOut
                      ? "text-[#756A61] line-through decoration-[#756A61]/60"
                      : "text-[#2B211B]"
                  }`}
                >
                  Saffron French Toast
                </h3>
                <span
                  className={`font-serif font-bold text-2xl sm:text-3xl tabular-nums ${
                    isSoldOut ? "text-[#756A61]" : "text-[#B45309]"
                  }`}
                >
                  €12.80
                </span>
              </div>

              {/* Item Description */}
              <p className="text-base sm:text-lg text-[#756A61] font-sans leading-relaxed">
                Brioche soaked in saffron-cardamom custard, pistachios, mascarpone, honey.
              </p>

              {/* Quote / Blurb */}
              {blurb && (
                <div className="flex items-start gap-2 pt-3 border-t border-[#E5DACB]/60 font-serif italic text-sm sm:text-base text-[#756A61]">
                  <span className="text-xl leading-none text-[#B45309] font-bold">”</span>
                  <p>{blurb}</p>
                </div>
              )}
            </div>

            {/* Right Action CTA */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E5DACB]">
              {isSoldOut ? (
                <div className="px-6 py-3 rounded-full bg-[#EFE4D3] text-[#756A61] text-xs font-sans font-semibold tracking-wider uppercase border border-[#E5DACB]">
                  Sold out for today
                </div>
              ) : (
                <a
                  href="#brunch"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-[#B45309] text-white hover:bg-[#964205] shadow-md shadow-[#B45309]/20 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  Order in Brunch
                </a>
              )}
              <span className="text-xs font-sans text-[#756A61] flex items-center gap-1.5 pt-1">
                <span className="h-2 w-2 rounded-full bg-[#2D6A3F]" />
                Freshly baked every morning
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}





