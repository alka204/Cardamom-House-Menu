"use client";

import React from "react";
import { Container } from "./ui/container";

interface ClosedBannerProps {
  nextOpenDayLabel: string;
  nextOpenTime: string;
}

export function ClosedBanner({
  nextOpenDayLabel,
  nextOpenTime,
}: ClosedBannerProps) {
  return (
    <div
      role="status"
      className="bg-white/80 dark:bg-white/5 backdrop-blur-xl text-[#2B211B] dark:text-[#F5EFE6] py-3.5 px-4 text-center border-b border-white/80 dark:border-white/10 shadow-xs print:hidden"
    >
      <Container className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-medium">
        <span>
          We are closed today (Monday). We reopen{" "}
          <strong className="font-semibold text-[#B45309]">
            {nextOpenDayLabel} at {nextOpenTime}
          </strong>
          .
        </span>
      </Container>
    </div>
  );
}


