// shared/config/navigation.ts
export const navigation = [
  { key: "home", href: "/", label: "Home", icon: "home" },
  { key: "workout", href: "/workout", label: "Train", icon: "dumbbell" },
  { key: "progress", href: "/progress", label: "Stats", icon: "chart" },
  { key: "settings", href: "/settings", label: "Config", icon: "settings" },
] as const;

export type NavigationItem = (typeof navigation)[number];
