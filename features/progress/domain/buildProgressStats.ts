// features/progress/domain/buildProgressStats.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";
import {
  getTotalReps,
  getDominantMovement,
  getTrend,
  getStreak,
} from "./progressDerived";

export function buildProgressStats(analytics: WorkoutAnalytics) {
  return {
    streak: getStreak(analytics),
    trend: getTrend(analytics),
    totalReps: getTotalReps(analytics),
    dominant: getDominantMovement(analytics),
  };
}
