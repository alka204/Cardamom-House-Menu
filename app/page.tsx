import { Suspense } from "react";
import { restaurantData } from "@/data/restaurant";
import { deriveState } from "@/utils/state";

import { SiteHeader } from "@/components/header";
import { ClosedBanner } from "@/components/closed-banner";
import { Hero } from "@/components/hero";
import { TodaySpecial } from "@/components/today-special";
import { MenuContainer } from "@/components/menu-container";
import { HoursSection } from "@/components/hours-section";
import { Footer } from "@/components/footer";
import { DemoStateSwitcher } from "@/components/demo-state-switcher";

interface PageProps {
  searchParams: Promise<{ state?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const stateParam = resolvedSearchParams.state;

  const derivedState = deriveState(stateParam, restaurantData.restaurant);
  const { restaurant, today_special, categories } = restaurantData;

  const soldOutItemId = derivedState.isSoldOut ? today_special.item_id : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EE] text-[#2A221C] font-sans selection:bg-[#B45309]/20 selection:text-[#B45309] relative">
      {/* 1. Closed State Alert Banner */}
      {!derivedState.isOpen && (
        <ClosedBanner
          nextOpenDayLabel={derivedState.nextOpenDayLabel}
          nextOpenTime={derivedState.nextOpenTime}
        />
      )}

      {/* 2. Site Header & Simulator Bar */}
      <SiteHeader />

      {/* 3. Hero Section */}
      <Hero
        name={restaurant.name}
        tagline={restaurant.tagline}
        isOpen={derivedState.isOpen}
        currentDayLabel={derivedState.currentDayLabel}
        todayHours={derivedState.todayHours}
      />

      {/* 4. Today's Special Featured Surface */}
      <TodaySpecial
        blurb={today_special.blurb}
        isSoldOut={derivedState.isSoldOut}
      />

      {/* 5. Sticky Category Navigation & Menu Container */}
      <Suspense
        fallback={
          <div className="sticky top-0 z-40 w-full h-12 bg-[#F8F4EE]/90 backdrop-blur-md border-y border-[#E8E2D5]" />
        }
      >
        <MenuContainer
          categories={categories}
          soldOutItemId={soldOutItemId}
        />
      </Suspense>

      {/* 6. Hours & Location Timetable Section */}
      <HoursSection
        hours={restaurant.hours}
        currentDay={derivedState.currentDay}
      />

      {/* 7. Footer */}
      <Footer
        name={restaurant.name}
        address={restaurant.address}
        phone={restaurant.phone}
        instagram={restaurant.instagram}
      />

      {/* 8. Floating Glassmorphism Demo State Switcher */}
      <Suspense fallback={null}>
        <DemoStateSwitcher />
      </Suspense>
    </div>
  );
}



