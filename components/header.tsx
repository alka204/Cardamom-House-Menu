import React from "react";
import { Container } from "./ui/container";

export function SiteHeader() {
  return (
    <header className="w-full py-5 sm:py-6 font-sans border-b border-[#EFE4D3]">
      <Container>
        <div className="flex items-center justify-between">
          {/* Left: Brand Name */}
          <a
            href="#"
            className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2B211B] hover:text-[#B45309] transition-colors uppercase"
          >
            CARDAMOM HOUSE
          </a>

          {/* Right: Quick Links */}
          <nav aria-label="Quick links" className="flex items-center gap-6 sm:gap-10 text-xs font-semibold tracking-widest text-[#756A61] uppercase">
            <a href="#brunch" className="hover:text-[#2B211B] transition-colors">
              Menu
            </a>
            <a href="#hours" className="hover:text-[#2B211B] transition-colors">
              Hours
            </a>
            <a
              href="https://instagram.com/cardamomhouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cardamom House on Instagram"
              className="hover:text-[#2B211B] transition-colors"
            >
              Instagram
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}



