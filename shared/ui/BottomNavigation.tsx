"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Dumbbell, ChartColumn, Settings } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/workout", label: "Train", icon: Dumbbell },
  { href: "/progress", label: "Stats", icon: ChartColumn },
  { href: "/settings", label: "Config", icon: Settings },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-50 border-t border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-around px-2">
        {/* background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-6 w-[70%] -translate-x-1/2 bg-violet-500/10 blur-2xl"
        />

        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group relative flex flex-1 flex-col items-center justify-center py-2"
            >
              {/* tap target (big hit area) */}
              <div
                className={
                  "pointer-events-none absolute inset-x-2 top-1 bottom-1 rounded-2xl transition-all " +
                  (isActive ? "bg-violet-500/10" : "bg-transparent")
                }
              />

              <div
                className={
                  "relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-200 " +
                  (isActive
                    ? "bg-violet-500/15 text-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.35)]"
                    : "text-zinc-500 group-hover:bg-white/5 group-hover:text-violet-300")
                }
              >
                <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
              </div>

              <span
                className={
                  "relative z-10 mt-1 text-[11px] transition-colors duration-200 " +
                  (isActive ? "text-violet-400" : "text-zinc-500 group-hover:text-violet-300")
                }
              >
                {item.label}
              </span>

              {/* subtle active pulse */}
              {isActive && (
                <div
                  aria-hidden
                  className="absolute -bottom-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-violet-400/30 blur-sm"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
