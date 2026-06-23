// shared/lib/navigation/initSwipeNavigation.ts
import type { Router } from "./types";
import { NavigationEngine } from "./navigationEngine";

export function initSwipeNavigation(router: Router) {
  let startX = 0;

  const onStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const onEnd = (e: TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX;

    if (Math.abs(diff) < 80) return;

    const dir = diff < 0 ? 1 : -1;
    const next = NavigationEngine.getNext(dir);

    if (next) router.push(next.href);
  };

  window.addEventListener("touchstart", onStart, { passive: true });
  window.addEventListener("touchend", onEnd, { passive: true });

  return () => {
    window.removeEventListener("touchstart", onStart);
    window.removeEventListener("touchend", onEnd);
  };
}