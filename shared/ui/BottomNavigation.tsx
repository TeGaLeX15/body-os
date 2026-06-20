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
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-[72px]">
      {/* background */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl" />

      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent"
      />

      {/* content */}
      <div className="relative mx-auto flex h-full max-w-md items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1"
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-2xl transition",
                  isActive
                    ? "bg-emerald-500/10 text-emerald-300"
                    : "text-white/40",
                ].join(" ")}
              >
                <Icon size={20} />
              </div>

              <span
                className={[
                  "mt-1 text-[12px]",
                  isActive ? "text-emerald-300" : "text-white/40",
                ].join(" ")}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}