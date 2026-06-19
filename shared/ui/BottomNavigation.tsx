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
    <nav className="sticky bottom-0 z-50 border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-w-16 flex-col items-center gap-1"
            >
              {/* ICON WRAPPER (ВАЖНО ДЛЯ UX) */}
              <div
                className={`
                  flex h-9 w-9 items-center justify-center rounded-xl transition-all
                  ${
                    isActive
                      ? "bg-violet-500/15 text-violet-400"
                      : "text-zinc-500"
                  }
                `}
              >
                <Icon size={20} />
              </div>

              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-violet-400" : "text-zinc-500"
                }`}
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
