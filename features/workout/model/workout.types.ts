// features/workout/model/workout.types.ts
export interface WorkoutEntry {
  id: string;
  date: number;

  pullups: number;
  dips: number;
  pushups: number;
  squats: number;
}
