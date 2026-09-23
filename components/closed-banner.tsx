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
      className="bg-[#FAF7F2] text-[#2B211B] py-3.5 px-4 text-center border-b border-[#E5DACB]"
    >
      <Container className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-medium">
        <span className="text-sm sm:text-base text-[#B45309]" aria-hidden="true">
          ☕
        </span>
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


