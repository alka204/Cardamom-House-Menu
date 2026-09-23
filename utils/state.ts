import { AppStateParam, DerivedState, DayOfWeek, Restaurant } from "@/types/restaurant";
import { formatDayLabel } from "./format";

export function deriveState(
  stateParam: string | undefined,
  restaurant: Restaurant
): DerivedState {
  let appState: AppStateParam = "open";

  if (stateParam === "closed") {
    appState = "closed";
  } else if (stateParam === "special-sold-out") {
    appState = "special-sold-out";
  }

  if (appState === "closed") {
    const currentDay: DayOfWeek = "monday";
    return {
      appState: "closed",
      isOpen: false,
      isSoldOut: false,
      currentDay,
      currentDayLabel: formatDayLabel(currentDay),
      todayHours: restaurant.hours[currentDay],
      nextOpenDayLabel: formatDayLabel("tuesday"),
      nextOpenTime: restaurant.hours.tuesday.split(" – ")[0] || "08:00",
    };
  }

  const currentDay: DayOfWeek = "tuesday";
  const isSoldOut = appState === "special-sold-out";

  return {
    appState,
    isOpen: true,
    isSoldOut,
    currentDay,
    currentDayLabel: formatDayLabel(currentDay),
    todayHours: restaurant.hours[currentDay],
    nextOpenDayLabel: formatDayLabel("tuesday"),
    nextOpenTime: restaurant.hours.tuesday.split(" – ")[0] || "08:00",
  };
}
