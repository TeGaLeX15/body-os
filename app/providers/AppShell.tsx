// app/providers/AppShell.tsx
"use client";

import { ReactNode, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

import { initSwipeNavigation } from "@/shared/lib/navigation/initSwipeNavigation";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { AppHeader } from "@/app/providers/AppHeader";

import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

const HIDE_NAV_ROUTES = ["/onboarding"];

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

  const hideNav = HIDE_NAV_ROUTES.includes(pathname);

  return (
    <div className="flex min-h-dvh w-full flex-col">

      <div className="fixed inset-0 -z-10 pointer-events-none bg-app" />

      <AppHeader analytics={analytics} />

      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <main className="flex-1">{children}</main>
        {!hideNav && <BottomNavigation />}
      </div>
    </div>
  );
}