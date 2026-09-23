"use client";

import React, { useMemo, useRef, useEffect, useState, useCallback } from "react";
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
  const listRef = useRef<HTMLUListElement>(null);

  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const navItems = useMemo(
    () => [
      ...categories,
      { id: "hours", name: "Hours & Location" },
    ],
    [categories]
  );

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useActiveSection(sectionIds, navItems[0]?.id || "");

  // Check scroll position to display left/right scroll affordance fades
  const checkScrollFades = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeftFade(scrollLeft > 6);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    checkScrollFades();
    el.addEventListener("scroll", checkScrollFades, { passive: true });
    window.addEventListener("resize", checkScrollFades);
    return () => {
      el.removeEventListener("scroll", checkScrollFades);
      window.removeEventListener("resize", checkScrollFades);
    };
  }, [checkScrollFades]);

  // Automatically scroll active category tab into view when activeId changes
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const activeTab = container.querySelector<HTMLElement>(`[data-tab-id="${activeId}"]`);
    if (activeTab) {
      const scrollLeft =
        activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeId]);

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
      className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-white/95 dark:bg-[#0D0F12]/95 border-y border-black/5 dark:border-white/10 shadow-sm transition-all py-2 md:py-2.5 print:hidden"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
          {/* Category Tabs Container with Scroll Fades */}
          <div className="relative flex-1 min-w-0 flex items-center">
            {/* Left Gradient Fade Indicator */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white dark:from-[#0D0F12] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                showLeftFade ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />

            {/* Category Tabs List */}
            <ul
              ref={listRef}
              role="tablist"
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth shrink-0 w-full snap-x snap-mandatory touch-pan-x"
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id} className="shrink-0 snap-align-start" role="presentation">
                    <a
                      href={`#${item.id}`}
                      data-tab-id={item.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative inline-flex items-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309] ${
                        isActive
                          ? "bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] text-white shadow-md shadow-[#B45309]/30 scale-[1.02]"
                          : "text-[#756A61] dark:text-[#94A3B8] hover:text-[#2B211B] dark:hover:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/10 border border-transparent hover:border-black/5 dark:hover:border-white/10"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right Gradient Fade Indicator */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-transparent to-white dark:to-[#0D0F12] z-10 pointer-events-none transition-opacity duration-300 ${
                showRightFade ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />
          </div>

          {/* Dietary Filter Pills */}
          {onFilterChange && (
            <div className="flex items-center justify-between sm:justify-end pt-1.5 md:pt-0 border-t md:border-t-0 border-black/5 dark:border-white/10 md:shrink-0 overflow-x-auto no-scrollbar">
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
