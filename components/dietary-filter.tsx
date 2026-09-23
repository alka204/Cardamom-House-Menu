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
      <span className="text-[11px] font-sans uppercase tracking-widest text-[#756A61] font-semibold hidden md:inline">
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
                  ? "bg-[#B45309] text-white shadow-xs"
                  : "bg-white border border-[#E5DACB] text-[#756A61] hover:bg-[#EFE4D3]/50 hover:text-[#2B211B]"
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


