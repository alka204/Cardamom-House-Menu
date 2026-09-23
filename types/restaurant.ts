export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface Restaurant {
  name: string;
  tagline: string;
  address: string;
  hours: Record<DayOfWeek, string>;
  brand_color: string;
  phone: string;
  instagram: string;
}

export interface TodaySpecial {
  item_id: string;
  blurb: string;
}

export type Tag = "V" | "GF" | "spicy";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  tags: Tag[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface RestaurantData {
  restaurant: Restaurant;
  today_special: TodaySpecial;
  categories: Category[];
}

export type AppStateParam = "open" | "closed" | "special-sold-out";

export interface DerivedState {
  appState: AppStateParam;
  isOpen: boolean;
  isSoldOut: boolean;
  currentDay: DayOfWeek;
  currentDayLabel: string;
  todayHours: string;
  nextOpenDayLabel: string;
  nextOpenTime: string;
}
