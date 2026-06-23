// useWorkouts.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { WorkoutEntry } from "../model/workout.types";
import { workoutRepository } from "../data/workoutRepository";

export type UseWorkoutsResult = {
  workouts: WorkoutEntry[];
  total: number;
  loading: boolean;
  refresh: () => void;
  save: (workouts: WorkoutEntry[]) => void;
};

export function useWorkouts(): UseWorkoutsResult {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    const data = workoutRepository.get();
    setWorkouts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = workoutRepository.subscribe(() => {
      refresh();
    });

    queueMicrotask(() => {
      refresh();
    });

    return () => unsubscribe();
  }, [refresh]);

  const save = useCallback((next: WorkoutEntry[]) => {
    workoutRepository.save(next);
    setWorkouts(next);
    setLoading(false);
  }, []);

  return useMemo(
    () => ({
      workouts,
      total: workouts.length,
      loading,
      refresh,
      save,
    }),
    [refresh, save, workouts, loading],
  );
}
