// shared/lib/navigation/navigationState.ts
import { navigation } from "@/shared/config/navigation";

export const NavigationEngine = {
  getNext(pathname: string, direction: -1 | 1) {
    const currentIndex = navigation.findIndex((route) =>
      route.href === "/"
        ? pathname === "/"
        : pathname.startsWith(route.href),
    );

    if (currentIndex === -1) {
      return null;
    }

    return navigation[currentIndex + direction] ?? null;
  },
};