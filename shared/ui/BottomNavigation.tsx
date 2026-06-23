"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { House, Dumbbell, ChartColumn, Settings } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/workout", label: "Train", icon: Dumbbell },
  { href: "/progress", label: "Stats", icon: ChartColumn },
  { href: "/settings", label: "Config", icon: Settings },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const startX = useRef<number | null>(null);

  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = items.findIndex((i) =>
      i.href === "/" ? pathname === "/" : pathname.startsWith(i.href),
    );
  }, [pathname]);

  useEffect(() => {
    const onDown = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const onUp = (e: TouchEvent) => {
      if (startX.current === null) return;

      const diff = e.changedTouches[0].clientX - startX.current;
      startX.current = null;

      if (Math.abs(diff) < 90) return;

      const index = indexRef.current;

      if (diff < 0) {
        const next = items[index + 1];
        if (next) router.push(next.href);
      } else {
        const prev = items[index - 1];
        if (prev) router.push(prev.href);
      }
    };

    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
    };
  }, [router]);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-xl"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="mx-auto flex h-full max-w-md items-center justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center justify-center"
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-2xl",
                  "transition-all duration-150 ease-out",
                  active
                    ? "bg-primary/10 text-primary scale-110"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                <Icon size={20} />
              </div>

              <span
                className={[
                  "mt-1 text-[12px] transition-all duration-150 ease-out",
                  active ? "text-primary" : "text-muted-foreground",
                ].join(" ")}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
