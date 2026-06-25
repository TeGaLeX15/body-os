// features/progress/domain/progressDerived.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export function getStreak(a: WorkoutAnalytics) {
  return a.streak;
}

export function getTrend(a: WorkoutAnalytics) {
  return a.strength;
}

export function getTotalReps(a: WorkoutAnalytics) {
  const w = a.weekly;
  return w.pullups + w.pushups + w.dips + w.squats;
}

export function getDominantMovement(a: WorkoutAnalytics) {
  const { pullups, pushups, dips, squats } = a.weekly;

  const push = pushups + dips;
  const pull = pullups;
  const legs = squats;

  if (pull > push && pull > legs) return "pull";
  if (push > legs) return "push";
  return "legs";
}