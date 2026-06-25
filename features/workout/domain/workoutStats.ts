// features/workout/lib/stats.ts
import type { WorkoutEntry } from "../model/workout.types";

export function calculatePR(workouts: WorkoutEntry[]) {
  return workouts.reduce(
    (max, w) => ({
      pullups: Math.max(max.pullups, w.pullups),
      dips: Math.max(max.dips, w.dips),
      pushups: Math.max(max.pushups, w.pushups),
      squats: Math.max(max.squats, w.squats),
    }),
    { pullups: 0, dips: 0, pushups: 0, squats: 0 }
  );
}

export function calculateWeeklyVolume(workouts: WorkoutEntry[]) {
  const now = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(now.getDate() - 7);

  return workouts
    .filter(w => new Date(w.date) >= weekAgo)
    .reduce(
      (sum, w) => {
        sum.pullups += w.pullups;
        sum.dips += w.dips;
        sum.pushups += w.pushups;
        sum.squats += w.squats;
        return sum;
      },
      { pullups: 0, dips: 0, pushups: 0, squats: 0 }
    );
}