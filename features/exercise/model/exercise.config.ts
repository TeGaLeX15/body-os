// features/exercise/model/exercise.config.ts
import type { ExerciseType } from "./exercise.types";

export const EXERCISES: {
  type: ExerciseType;
  title: string;
  icon: "pullUp" | "dips" | "pushUp" | "squat";
  description: string;
}[] = [
  {
    type: "pullups",
    title: "Pull-ups",
    icon: "pullUp",
    description: "Back & biceps strength",
  },
  {
    type: "dips",
    title: "Dips",
    icon: "dips",
    description: "Chest & triceps",
  },
  {
    type: "pushups",
    title: "Push-ups",
    icon: "pushUp",
    description: "Push foundation",
  },
  {
    type: "squats",
    title: "Squats",
    icon: "squat",
    description: "Leg strength",
  },
];