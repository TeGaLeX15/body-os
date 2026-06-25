// app/providers/AppShell.tsx
"use client";

import { ReactNode, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

import { initSwipeNavigation } from "@/shared/lib/navigation/initSwipeNavigation";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { AppHeader } from "@/app/providers/AppHeader";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

type LayoutRules = {
  header?: boolean;
  nav?: boolean;
};

const LAYOUT_RULES: Record<string, LayoutRules> = {
  "/onboarding": {
    header: false,
    nav: false,
  },
};

export function AppShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { workouts } = useWorkouts();

  const analytics = useMemo(() => {
    return buildWorkoutAnalytics(workouts);
  }, [workouts]);

  useEffect(() => {
    return initSwipeNavigation(router, pathname);
  }, [router, pathname]);

  const rules = LAYOUT_RULES[pathname];

  const showHeader = rules?.header !== false;
  const showNav = rules?.nav !== false;

  return (
    <div className="flex min-h-dvh w-full flex-col">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-app" />

      {/* HEADER */}
      {showHeader && <AppHeader analytics={analytics} />}

      {/* CONTENT */}
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <main className="flex-1 overflow-y-auto pb-24">{children}</main>

        {showNav && <BottomNavigation />}
      </div>
    </div>
  );
}
