"use client";

import React from "react";
import { Category } from "@/types/restaurant";
import { MenuItem } from "./menu-item";
import { DietaryFilterType } from "./dietary-filter";

interface MenuSectionProps {
  category: Category;
  sectionNumber?: string;
  soldOutItemId?: string;
  filter?: DietaryFilterType;
}

export function MenuSection({
  category,
  sectionNumber,
  soldOutItemId,
  filter = "all",
}: MenuSectionProps) {
  const headingId = `${category.id}-heading`;

  const filteredItems = category.items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "V") return item.tags.includes("V");
    if (filter === "GF") return item.tags.includes("GF");
    if (filter === "spicy") return item.tags.includes("spicy");
    return true;
  });

  return (
    <section
      id={category.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-12 sm:py-16 border-b border-[#EFE4D3] dark:border-white/10"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309] dark:text-[#F59E0B]">
            <span>{sectionNumber || "01"}</span>
            <span className="text-[#756A61]/50 dark:text-[#C7BBB0]/50">/</span>
            <span>CATEGORY</span>
          </div>

          <h2
            id={headingId}
            className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#2B211B] dark:text-[#F5EFE6] uppercase leading-tight"
          >
            {category.name}
          </h2>

          {category.description && (
            <p className="text-base text-[#756A61] dark:text-[#C7BBB0] font-sans font-normal leading-relaxed pt-1">
              {category.description}
            </p>
          )}
        </div>

        {/* Menu Items Grid: 2-column cards desktop, 1-column mobile */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isSoldOut={item.id === soldOutItemId}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl p-8 text-center shadow-xs">
            <p className="text-sm text-[#756A61] dark:text-[#C7BBB0] font-sans italic">
              No items matching current filter in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


