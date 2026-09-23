"use client";

import React, { useMemo, useRef } from "react";
import { Container } from "./ui/container";
import { useActiveSection } from "@/hooks/use-active-section";
import { DietaryFilter, DietaryFilterType } from "./dietary-filter";

export interface CategoryNavItem {
  id: string;
  name: string;
}

interface CategoryNavProps {
  categories: CategoryNavItem[];
  activeFilter?: DietaryFilterType;
  onFilterChange?: (filter: DietaryFilterType) => void;
}

export function CategoryNav({
  categories,
  activeFilter = "all",
  onFilterChange,
}: CategoryNavProps) {
  const navRef = useRef<HTMLElement>(null);

  const navItems = useMemo(
    () => [
      ...categories,
      { id: "hours", name: "Hours & Location" },
    ],
    [categories]
  );

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useActiveSection(sectionIds, navItems[0]?.id || "");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = navRef.current?.getBoundingClientRect().height || 64;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = elementTop - navHeight - 16;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Menu categories"
      className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-white/95 dark:bg-[#14110F]/95 border-y border-white/80 dark:border-white/10 shadow-md shadow-black/5 transition-all py-3"
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <ul className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth shrink-0">
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative inline-flex items-center px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none ${
                      isActive
                        ? "bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] text-white shadow-md shadow-[#B45309]/30 scale-[1.03]"
                        : "text-[#756A61] dark:text-[#C7BBB0] hover:text-[#2B211B] dark:hover:text-[#F5EFE6] hover:bg-white/80 dark:hover:bg-white/10 border border-transparent hover:border-white/60 dark:hover:border-white/10 hover:scale-[1.02]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dietary Filter Pills */}
          {onFilterChange && (
            <div className="shrink-0">
              <DietaryFilter
                activeFilter={activeFilter}
                onFilterChange={onFilterChange}
              />
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}
