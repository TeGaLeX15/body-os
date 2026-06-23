// shared/ui/BottomNavigation.tsx
"use client";

import Link from "next/link";
import { navigation } from "@/shared/config/navigation";
import { routeIcons } from "@/shared/config/routeIcons";
import { NavigationEngine } from "@/shared/lib/navigation/navigationEngine";

export function BottomNavigation() {
  const activeIndex = NavigationEngine.getIndex();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-xl"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="mx-auto flex h-full max-w-md items-center justify-around">
        {navigation.map((route, i) => {
          const Icon = routeIcons[route.icon];
          const active = i === activeIndex;

          return (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => NavigationEngine.setIndex(i)}
              className="flex flex-1 flex-col items-center justify-center"
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-2xl",
                  active
                    ? "bg-primary/10 text-primary scale-105"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                {Icon && <Icon size={20} />}
              </div>

              <span
                className={[
                  "mt-1 text-[12px]",
                  active ? "text-primary" : "text-muted-foreground",
                ].join(" ")}
              >
                {route.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}