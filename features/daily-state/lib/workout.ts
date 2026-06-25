// features/daily-state/lib/workout.ts
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

export function getWorkoutLoad(workouts: WorkoutEntry[]) {
  return workouts.reduce((sum, w) => {
    return sum + w.pullups + w.dips + w.pushups + w.squats;
  }, 0);
}

export function estimateFatigue(load: number) {
  if (load < 50) return "low";
  if (load < 120) return "medium";
  return "high";
}