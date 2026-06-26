// features/workout/hooks/useWorkouts.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { WorkoutEntry } from "../model/workout.types";

import { workoutRepository } from "../data/workoutRepository";

export type UseWorkoutsResult = {
  workouts: WorkoutEntry[];
  total: number;
  loading: boolean;

  refresh: () => Promise<void>;
  save: (workouts: WorkoutEntry[]) => Promise<void>;
};

export function useWorkouts(): UseWorkoutsResult {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const data = await workoutRepository.get();

    setWorkouts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = workoutRepository.subscribe(() => {
      void refresh();
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();

    return () => {
      unsubscribe();
    };
  }, [refresh]);

  const save = useCallback(
    async (next: WorkoutEntry[]) => {
      await workoutRepository.save(next);

      setWorkouts(next);
      setLoading(false);
    },
    [],
  );

  return useMemo(
    () => ({
      workouts,
      total: workouts.length,
      loading,
      refresh,
      save,
    }),
    [workouts, loading, refresh, save],
  );
}