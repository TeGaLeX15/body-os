"use client";

import { useEffect, useMemo, useState } from "react";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";
import { getWorkoutsRepo } from "@/features/progress/repository/progressRepository";

export type ProgressData = {
  workouts: WorkoutEntry[];
  total: number;
};

export function useProgressData(): ProgressData {
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>([]);



  // kept for future extension (e.g. skeleton/disabled UI until local data is loaded)

  useEffect(() => {

    const data = getWorkoutsRepo();

    // eslint-disable-next-line react/no-set-state
    queueMicrotask(() => {
      setWorkouts(data);
    });
  }, []);








  return useMemo(() => {
    return {
      workouts,
      total: workouts.length,
    };
  }, [workouts]);

}

