"use client";

import React, { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#B45309] dark:bg-[#F59E0B] text-white dark:text-[#14110F] shadow-xl shadow-[#B45309]/30 dark:shadow-[0_0_22px_rgba(245,158,11,0.5)] hover:shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer print:hidden group"
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
