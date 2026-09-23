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
      <span className="text-[11px] font-sans uppercase tracking-widest text-[#756A61] dark:text-[#C7BBB0] font-semibold hidden md:inline">
        FILTER:
      </span>
      <div className="flex items-center gap-1.5 flex-wrap">
        {options.map((option) => {
          const isActive = activeFilter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onFilterChange(option.id)}
              className={`px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#B45309] to-[#D97706] text-white shadow-md shadow-[#B45309]/20 scale-[1.02]"
                  : "bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/90 dark:border-white/15 text-[#756A61] dark:text-[#C7BBB0] hover:bg-white dark:hover:bg-white/20 hover:text-[#2B211B] dark:hover:text-[#F5EFE6]"
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


