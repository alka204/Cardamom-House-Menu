"use client";

import React, { useState } from "react";
import { Category } from "@/types/restaurant";
import { CategoryNav } from "./category-nav";
import { MenuSection } from "./menu-section";
import { DietaryFilterType } from "./dietary-filter";

interface MenuContainerProps {
  categories: Category[];
  soldOutItemId?: string;
}

export function MenuContainer({
  categories,
  soldOutItemId,
}: MenuContainerProps) {
  const [activeFilter, setActiveFilter] = useState<DietaryFilterType>("all");

  return (
    <>
      {/* Sticky Category & Dietary Navigation Header */}
      <CategoryNav
        categories={categories.map((c) => ({ id: c.id, name: c.name }))}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Main Menu Grid Sections */}
      <main className="flex-1 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {categories.map((category, index) => (
            <MenuSection
              key={category.id}
              category={category}
              sectionNumber={`0${index + 1}`}
              soldOutItemId={soldOutItemId}
              filter={activeFilter}
            />
          ))}
        </div>
      </main>
    </>
  );
}
