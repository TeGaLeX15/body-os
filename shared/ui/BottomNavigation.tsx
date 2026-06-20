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
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-md border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="relative flex items-center justify-around px-2 py-2">
          {/* soft glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-violet-500/10 blur-2xl"
          />

          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-1 flex-col items-center justify-center"
              >
                {/* ICON */}
                <div
                  className={[
                    "relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-200",
                    isActive
                      ? "text-violet-300 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                      : "text-white/40 hover:text-violet-300 hover:bg-violet-500/5",
                  ].join(" ")}
                >
                  <Icon size={20} />
                </div>

                {/* LABEL */}
                <span
                  className={[
                    "relative z-10 mt-1 text-[14px] transition-colors duration-200",
                    isActive ? "text-violet-300" : "text-white/40",
                  ].join(" ")}
                >
                  {item.label}
                </span>

                {/* ACTIVE DOT */}
                {isActive && (
                  <div
                    aria-hidden
                    className="absolute -bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-violet-400/40 blur-sm"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
