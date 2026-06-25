// features/workout/index.ts
export type { WorkoutEntry } from "./model/workout.types";

export { getWorkouts } from "./data/storage";

export { calculateWorkoutXP } from "./domain/workoutXP";

export { sortWorkouts } from "./domain/sortWorkouts";
