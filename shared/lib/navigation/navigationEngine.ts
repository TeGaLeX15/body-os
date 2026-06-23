// shared/lib/navigation/navigationState.ts
import { navigation } from "@/shared/config/navigation";

let index = 0;

export const NavigationEngine = {
  getIndex() {
    return index;
  },

  setIndex(i: number) {
    index = Math.max(0, Math.min(navigation.length - 1, i));
  },

  getNext(direction: -1 | 1) {
    const next = navigation[index + direction];
    if (!next) return null;

    index += direction;
    return next;
  },

  sync(pathname: string) {
    const i = navigation.findIndex((r) =>
      r.href === "/" ? pathname === "/" : pathname.startsWith(r.href),
    );

    if (i !== -1) index = i;
  },
};