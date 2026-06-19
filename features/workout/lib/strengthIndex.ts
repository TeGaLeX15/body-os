import { WorkoutEntry } from "../model/workout.types";

export function calculateStrengthIndex(workouts: WorkoutEntry[]) {
  let index = 0;

  workouts.forEach((w) => {
    index += w.pullups * 2 + w.dips * 1.5 + w.pushups * 0.5 + w.squats * 0.2;
  });

  return Math.round(index);
}
