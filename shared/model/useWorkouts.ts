"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import {
  getWorkoutsRepo,
  onWorkoutsStorageChange,
  saveWorkoutsRepo,
} from "@/shared/repository/workoutRepository";

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
    const data = getWorkoutsRepo();
    setWorkouts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = onWorkoutsStorageChange(() => {
      refresh();
    });

    // load on mount (defer to microtask to avoid sync setState warning)
    queueMicrotask(() => {
      refresh();
    });

    return () => {
      unsubscribe();
    };
  }, [refresh]);

  const save = useCallback((next: WorkoutEntry[]) => {
    saveWorkoutsRepo(next);
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

