// shared/config/routes.ts
import { House, Dumbbell, ChartColumn, Settings } from "lucide-react";

export const routes = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/workout",
    label: "Train",
    icon: Dumbbell,
  },
  {
    href: "/progress",
    label: "Stats",
    icon: ChartColumn,
  },
  {
    href: "/settings",
    label: "Config",
    icon: Settings,
  },
] as const;
