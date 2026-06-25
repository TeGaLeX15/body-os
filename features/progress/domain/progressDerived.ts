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

export function getMaxReps(analytics: WorkoutAnalytics) {
  return analytics.workouts.reduce(
    (acc, w) => {
      return {
        pullups: Math.max(acc.pullups, w.pullups),
        dips: Math.max(acc.dips, w.dips),
        pushups: Math.max(acc.pushups, w.pushups),
        squats: Math.max(acc.squats, w.squats),
      };
    },
    {
      pullups: 0,
      dips: 0,
      pushups: 0,
      squats: 0,
    },
  );
}

export function getTotalRepsByType(analytics: WorkoutAnalytics) {
  return analytics.workouts.reduce(
    (acc, w) => {
      return {
        pullups: acc.pullups + w.pullups,
        dips: acc.dips + w.dips,
        pushups: acc.pushups + w.pushups,
        squats: acc.squats + w.squats,
      };
    },
    {
      pullups: 0,
      dips: 0,
      pushups: 0,
      squats: 0,
    },
  );
}
