"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { House, Dumbbell, ChartColumn, Settings } from "lucide-react";

const items = [
  {
    href: "/",
    label: "Главная",
    icon: House,
  },
  {
    href: "/workout",
    label: "Тренировка",
    icon: Dumbbell,
  },
  {
    href: "/progress",
    label: "Прогресс",
    icon: ChartColumn,
  },
  {
    href: "/settings",
    label: "Настройки",
    icon: Settings,
  },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-50 border-t border-white/10 bg-zinc-950/90 backdrop-blur-md">
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
              <Icon
                size={22}
                className={isActive ? "text-violet-500" : "text-zinc-500"}
              />

              <span
                className={`text-xs ${
                  isActive ? "text-violet-500" : "text-zinc-500"
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
