import { WorkoutEntry } from "@/features/workout/model/workout.types";
import { calculateStrengthIndex } from "@/features/workout/lib/strengthIndex";

export function buildStrengthHistory(workouts: WorkoutEntry[]) {
  return workouts
    .slice()
    .reverse()
    .map((w) => ({
      date: new Date(w.date).toLocaleDateString(),
      index: calculateStrengthIndex([w]),
    }))
    .reverse();
}