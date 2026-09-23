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
      className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all duration-300 backdrop-blur-xl border ${
        isSoldOut
          ? "opacity-60 select-none bg-white/50 dark:bg-white/5 border-white/60 dark:border-white/5 shadow-xs"
          : "bg-white/80 dark:bg-white/5 border-white/90 dark:border-white/10 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-[#B45309]/15 hover:border-[#B45309]/50 hover:bg-white/95 dark:hover:bg-white/10 hover:-translate-y-1"
      }`}
      aria-label={isSoldOut ? `${item.name} — Sold out` : undefined}
    >
      {/* Subtle Hover Ambient Glow Blob */}
      {!isSoldOut && (
        <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-gradient-to-br from-[#B45309]/0 via-[#B45309]/10 to-[#B45309]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
      )}
      <div className="space-y-2">
        {/* Name & Price Header */}
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${
              isSoldOut
                ? "text-[#756A61] line-through decoration-[#756A61]/60"
                : "text-[#2B211B] group-hover:text-[#B45309] transition-colors"
            }`}
          >
            {item.name}
          </h3>

          <span
            className={`font-serif font-bold text-lg sm:text-xl tabular-nums shrink-0 ${
              isSoldOut ? "text-[#756A61]" : "text-[#B45309]"
            }`}
          >
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs sm:text-sm font-sans text-[#756A61] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Badges / Tags Row at Bottom */}
      <div className="flex items-center gap-1.5 flex-wrap pt-1">
        {isSoldOut ? (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#FDF0EE] text-[#D9381E]">
            Sold Out
          </span>
        ) : (
          item.tags.length > 0 &&
          item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                tag === "spicy"
                  ? "bg-[#FDF0EE] text-[#D9381E]"
                  : "bg-[#E2EFE4] text-[#2D6A3F]"
              }`}
              title={getTagLabel(tag)}
            >
              {tag === "spicy" ? "Spicy 🌶️" : tag === "V" ? "V · Vegetarian" : tag === "GF" ? "GF · Gluten-Free" : tag}
            </span>
          ))
        )}
      </div>
    </div>
  );
}




