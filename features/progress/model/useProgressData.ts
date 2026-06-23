"use client";

import { useMemo } from "react";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { useWorkouts } from "@/features/workout/hooks/useWorkouts";

export type ProgressData = {
  workouts: WorkoutEntry[];
  total: number;
  loading: boolean;
};

export function useProgressData(): ProgressData {
  const { workouts, total, loading } = useWorkouts();

  return useMemo(() => {
    return {
      workouts,
      total,
      loading,
    };
  }, [workouts, total, loading]);
}


