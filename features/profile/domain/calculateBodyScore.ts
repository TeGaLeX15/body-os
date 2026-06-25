// features/profile/domain/calculateBodyScore.ts
import type { Profile } from "../model/profile.types";
import type { WorkoutEntry } from "@/features/workout/model/workout.types";

import { calculateGoalProgress } from "./calculateGoalProgress";

import {
  getStreak,
  getWeeklyWorkouts,
  getFatigue,
} from "./signals/workoutSignals";

type Params = {
  profile: Profile;
  workouts: WorkoutEntry[];
};

export function calculateBodyScore({ profile, workouts }: Params) {
  const goalProgress = calculateGoalProgress(profile);

  const consistency = Math.min(getStreak(workouts) * 3, 30);
  const activity = Math.min(getWeeklyWorkouts(workouts) * 5, 30);
  const fatigue = getFatigue(workouts);
  const transformation = Math.min(goalProgress * 0.4, 40);

  return clamp(consistency + activity + transformation - fatigue, 0, 100);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
