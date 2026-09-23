"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function DemoStateSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentState = searchParams.get("state") || "open";

  const handleStateChange = (state: string) => {
    if (state === "open") {
      router.push("/");
    } else {
      router.push(`/?state=${state}`);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-sans pointer-events-auto print:hidden">
      <div className="bg-white/80 dark:bg-[#181C24]/90 backdrop-blur-xl border border-white/80 dark:border-white/15 shadow-lg rounded-full p-1.5 flex items-center gap-1.5 text-xs transition-colors">
        <span className="px-3 text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#756A61]/70 dark:text-[#94A3B8]/70">
          DEMO
        </span>
        <button
          type="button"
          onClick={() => handleStateChange("open")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            currentState === "open"
              ? "bg-[#B45309] text-white shadow-xs"
              : "text-[#756A61] dark:text-[#C7BBB0] hover:text-[#2B211B] dark:hover:text-[#F5EFE6] hover:bg-white/50 dark:hover:bg-white/10"
          }`}
        >
          Open
        </button>
        <button
          type="button"
          onClick={() => handleStateChange("closed")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            currentState === "closed"
              ? "bg-[#B45309] text-white shadow-xs"
              : "text-[#756A61] dark:text-[#C7BBB0] hover:text-[#2B211B] dark:hover:text-[#F5EFE6] hover:bg-white/50 dark:hover:bg-white/10"
          }`}
        >
          Closed
        </button>
        <button
          type="button"
          onClick={() => handleStateChange("special-sold-out")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            currentState === "special-sold-out"
              ? "bg-[#B45309] text-white shadow-xs"
              : "text-[#756A61] dark:text-[#C7BBB0] hover:text-[#2B211B] dark:hover:text-[#F5EFE6] hover:bg-white/50 dark:hover:bg-white/10"
          }`}
        >
          Special sold out
        </button>
      </div>
    </div>
  );
}
