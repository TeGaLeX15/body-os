// features/home/hooks/useHomeStats.ts
"use client";

import { useMemo } from "react";
import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export function useHomeStats() {
  const { workouts } = useWorkouts();

  return useMemo(
    () => buildWorkoutAnalytics(workouts),
    [workouts]
  );
}