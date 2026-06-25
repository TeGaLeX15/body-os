// features/workout-log/model/useWorkoutLog.ts
"use client";

import { useEffect, useMemo, useState } from "react";

import { getWorkouts, type WorkoutEntry } from "@/features/workout";

import {
  calculateTotalXP,
  getVisibleWorkouts,
  sortWorkouts,
} from "../lib/workoutLog";

export function useWorkoutLog(expanded: boolean) {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getWorkouts();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWorkouts(data);
    setLoading(false);
  }, []);

  const sorted = useMemo(
    () => sortWorkouts(workouts),
    [workouts],
  );

  const total = sorted.length;

  const totalXP = useMemo(
    () => calculateTotalXP(sorted),
    [sorted],
  );

  const visible = useMemo(
    () => getVisibleWorkouts(sorted, expanded),
    [sorted, expanded],
  );

  return {
    workouts,
    sorted,
    visible,
    total,
    totalXP,
    loading,
  };
}