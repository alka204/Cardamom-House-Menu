"use client";

import React, { useMemo } from "react";
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
      const yOffset = -80; // Account for sticky nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F8F4EE]/95 border-y border-[#EFE4D3] transition-all py-3"
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <ul className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-1 scroll-smooth shrink-0">
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative inline-block pb-1 text-xs sm:text-sm font-sans uppercase tracking-widest transition-all duration-150 focus-visible:outline-none ${
                      isActive
                        ? "text-[#B45309] font-bold border-b-2 border-[#B45309]"
                        : "text-[#756A61] hover:text-[#B45309] font-semibold border-b-2 border-transparent"
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




