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
      {/* 🌌 FULL WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl" />

      {/* ✨ soft aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent blur-2xl"
      />

      {/* 📦 CENTERED CONTENT */}
      <div className="relative mx-auto max-w-md px-2 py-2">
        <div className="flex items-center justify-around">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-1 flex-col items-center"
              >
                {/* ICON WRAPPER */}
                <div
                  className={[
                    "relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300",
                    isActive
                      ? "text-emerald-300 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5",
                  ].join(" ")}
                >
                  <Icon size={20} />
                </div>

                {/* LABEL */}
                <span
                  className={[
                    "mt-1 text-[12px] transition-colors duration-300",
                    isActive ? "text-emerald-300" : "text-white/40",
                  ].join(" ")}
                >
                  {item.label}
                </span>

                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <div
                    aria-hidden
                    className="absolute -bottom-1 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-emerald-400/40 blur-sm"
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