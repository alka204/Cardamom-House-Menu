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

  return (
    <footer className="bg-[#FAF7F2] text-[#2B211B] py-10 sm:py-14 font-sans border-t border-[#E5DACB]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left: Brand Name & Copyright */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-[#2B211B]">
              {name}
            </h3>
            <p className="text-xs text-[#756A61] font-sans max-w-md">
              © {new Date().getFullYear()} {name} Lisboa. Slow brunch & specialty roast. {address}.
            </p>
          </div>

          {/* Right: Text Action Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs font-sans font-semibold uppercase tracking-wider text-[#756A61]">
            <a
              href="https://maps.google.com/?q=Rua+da+Boavista+84,+Lisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B45309] transition-colors"
            >
              Directions via Maps
            </a>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="hover:text-[#B45309] transition-colors"
            >
              {phone}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B45309] transition-colors"
            >
              {instagramHandle}
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="hover:text-[#B45309] transition-colors text-left cursor-pointer"
            >
              Print Menu
            </button>
            <a
              href="#hours"
              className="hover:text-[#B45309] transition-colors text-[#B45309] font-bold"
            >
              Hours & Location
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}



