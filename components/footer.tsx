"use client";

import React from "react";
import { Container } from "./ui/container";

interface FooterProps {
  name: string;
  address: string;
  phone: string;
  instagram: string;
}

export function Footer({ name, address, phone, instagram }: FooterProps) {
  const instagramHandle = instagram.startsWith("@") ? instagram : `@${instagram}`;
  const instagramUrl = `https://instagram.com/${instagram.replace("@", "")}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#14110F] text-[#2B211B] dark:text-[#F5EFE6] pt-14 pb-10 font-sans border-t border-[#E5DACB] dark:border-white/10">
      <Container className="space-y-10">
        {/* Main Footer Grid: 3 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#E5DACB] dark:border-white/10">
          
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl font-bold uppercase tracking-widest text-[#2B211B] dark:text-[#F5EFE6]">
              {name}
            </h3>
            <p className="text-sm text-[#756A61] dark:text-[#C7BBB0] font-sans leading-relaxed max-w-md">
              Slow brunch. Strong coffee. House-baked brioche, sourdough toasties, and specialty coffee in Santos / Bica, Lisbon.
            </p>
            <div className="text-xs text-[#756A61]/80 dark:text-[#C7BBB0]/80 font-sans space-y-1 pt-1">
              <p className="font-semibold text-[#2B211B] dark:text-[#F5EFE6]">{address}</p>
              <p className="text-[11px] tracking-widest">38.7093° N, 9.1484° W · Santos / Bica, Lisboa</p>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309] dark:text-[#F59E0B]">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#756A61] dark:text-[#C7BBB0]">
              <li>
                <a href="#brunch" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors">
                  Brunch Menu
                </a>
              </li>
              <li>
                <a href="#sandwiches" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors">
                  Sandwiches & Toasties
                </a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors">
                  Coffee & Drinks
                </a>
              </li>
              <li>
                <a href="#special" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors">
                  Today&apos;s Special
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors">
                  Hours & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Service Schedule (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309] dark:text-[#F59E0B]">
              CONTACT & SERVICE
            </h4>
            <div className="space-y-2.5 text-xs font-sans text-[#756A61] dark:text-[#C7BBB0]">
              <p>
                <span className="font-semibold text-[#2B211B] dark:text-[#F5EFE6]">Phone: </span>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors font-medium">
                  {phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#2B211B] dark:text-[#F5EFE6]">Instagram: </span>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors font-medium">
                  {instagramHandle}
                </a>
              </p>
              <div className="pt-2 text-[11px] leading-relaxed text-[#756A61]/80 dark:text-[#C7BBB0]/80">
                <p className="font-semibold text-[#2B211B] dark:text-[#F5EFE6]">Opening Hours:</p>
                <p>Tuesday – Friday: 08:00 – 15:00</p>
                <p>Saturday – Sunday: 09:00 – 17:00 (Monday Closed)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Action Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#756A61] dark:text-[#C7BBB0]">
          <p>
            © {new Date().getFullYear()} {name} Lisboa. Slow brunch & specialty coffee.
          </p>
          
          <div className="flex items-center gap-6 text-xs uppercase tracking-wider">
            <a
              href="https://maps.google.com/?q=Rua+da+Boavista+84,+Lisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors font-semibold"
            >
              Directions via Maps
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors font-semibold cursor-pointer"
            >
              Print Menu
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#B45309] dark:hover:text-[#F59E0B] transition-colors font-bold text-[#B45309] dark:text-[#F59E0B] cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
