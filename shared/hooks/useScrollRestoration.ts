"use client";

import { useEffect } from "react";

const scrollPositions = new Map<string, number>();

export function useScrollRestoration(pathname: string) {
  useEffect(() => {
    const saved = scrollPositions.get(pathname);

    if (saved !== undefined) {
      window.scrollTo(0, saved);
    }

    const save = () => {
      scrollPositions.set(pathname, window.scrollY);
    };

    window.addEventListener("scroll", save, { passive: true });

    return () => {
      window.removeEventListener("scroll", save);
      scrollPositions.set(pathname, window.scrollY);
    };
  }, [pathname]);
}
