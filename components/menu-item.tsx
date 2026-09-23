"use client";

import React from "react";
import { MenuItem as MenuItemType } from "@/types/restaurant";
import { formatPrice, getTagLabel } from "@/utils/format";

interface MenuItemProps {
  item: MenuItemType;
  isSoldOut?: boolean;
}

export function MenuItem({ item, isSoldOut = false }: MenuItemProps) {
  return (
    <div
      className={`h-full group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all duration-300 backdrop-blur-2xl border ${
        isSoldOut
          ? "opacity-60 select-none bg-white/50 dark:bg-white/5 border-white/60 dark:border-white/5 shadow-xs"
          : "bg-white/90 dark:bg-gradient-to-br dark:from-[#181C24]/90 dark:to-[#12151C]/95 border-white/90 dark:border-white/15 shadow-md shadow-black/5 hover:bg-white dark:hover:from-[#1E232E]/95 dark:hover:to-[#161A24]/95 hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:-translate-y-1.5"
      }`}
      aria-label={isSoldOut ? `${item.name} — Sold out` : undefined}
    >
      <div className="space-y-2 relative z-10">
        {/* Name & Price Header */}
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isSoldOut
                ? "text-[#756A61] line-through decoration-[#756A61]/60"
                : "text-[#2B211B] dark:text-[#F8FAFC] group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B]"
            }`}
          >
            {item.name}
          </h3>

          <span
            className={`font-serif font-bold text-lg sm:text-xl tabular-nums shrink-0 transition-transform duration-300 group-hover:scale-110 ${
              isSoldOut
                ? "text-[#756A61]"
                : "text-[#B45309] dark:text-[#F59E0B] dark:drop-shadow-[0_0_6px_rgba(245,158,11,0.3)]"
            }`}
          >
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs sm:text-sm font-sans text-[#756A61] dark:text-[#C7BBB0] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Badges / Tags Row at Bottom */}
      <div className="flex items-center gap-1.5 flex-wrap pt-1 relative z-10">
        {isSoldOut ? (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#FDF0EE] text-[#D9381E]">
            Sold Out
          </span>
        ) : (
          item.tags.length > 0 &&
          item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105 ${
                tag === "spicy"
                  ? "bg-[#FDF0EE] dark:bg-[#421A18] text-[#D9381E] dark:text-[#FCA5A5]"
                  : "bg-[#E2EFE4] dark:bg-[#1B3624] text-[#2D6A3F] dark:text-[#86EFAC]"
              }`}
              title={getTagLabel(tag)}
            >
              {tag === "spicy" ? "Spicy 🌶️" : tag === "V" ? "Vegetarian" : tag === "GF" ? "Gluten-Free" : tag}
            </span>
          ))
        )}
      </div>
    </div>
  );
}




