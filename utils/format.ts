import { DayOfWeek, Tag } from "@/types/restaurant";

export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`;
}

export function formatDayLabel(day: DayOfWeek): string {
  const labels: Record<DayOfWeek, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };
  return labels[day];
}

export function getTagLabel(tag: Tag): string {
  const labels: Record<Tag, string> = {
    V: "Vegetarian",
    GF: "Gluten-Free",
    spicy: "Spicy",
  };
  return labels[tag];
}
