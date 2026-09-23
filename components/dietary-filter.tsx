"use client";

import React from "react";

export type DietaryFilterType = "all" | "V" | "GF" | "spicy";

interface DietaryFilterProps {
  activeFilter: DietaryFilterType;
  onFilterChange: (filter: DietaryFilterType) => void;
}

export function DietaryFilter({
  activeFilter,
  onFilterChange,
}: DietaryFilterProps) {
  const options: { id: DietaryFilterType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "V", label: "Vegetarian" },
    { id: "GF", label: "Gluten-Free" },
  ];

  return (
    <div className="flex items-center gap-2" aria-label="Dietary filter">
      <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-[#756A61] dark:text-[#94A3B8] font-bold shrink-0">
        FILTER:
      </span>
      <div className="flex items-center gap-1.5 flex-nowrap overflow-x-auto no-scrollbar py-0.5">
        {options.map((option) => {
          const isActive = activeFilter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onFilterChange(option.id)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-300 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309] ${
                isActive
                  ? "bg-gradient-to-r from-[#B45309] to-[#D97706] text-white shadow-md shadow-[#B45309]/20 scale-[1.02]"
                  : "bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 text-[#756A61] dark:text-[#94A3B8] hover:bg-black/10 dark:hover:bg-white/20 hover:text-[#2B211B] dark:hover:text-[#F8FAFC]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}



