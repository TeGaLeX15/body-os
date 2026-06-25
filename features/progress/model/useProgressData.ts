// features/progress/model/useProgressData.ts
import { useMemo } from "react";
import { useWorkouts } from "@/features/workout/hooks/useWorkouts";
import { buildWorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export function useProgressData() {
  const { workouts = [], total, loading } = useWorkouts();

  const analytics = useMemo(() => {
    return buildWorkoutAnalytics(workouts);
  }, [workouts]);

  return {
    workouts,
    total,
    loading,
    analytics,
  };
}