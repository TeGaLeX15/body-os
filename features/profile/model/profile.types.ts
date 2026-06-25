// features/profile/model/profile.types.ts
export type GoalType = "lose" | "gain" | "maintain";
export type ActivityLevel = "low" | "medium" | "high";

export interface Profile {
  goal: GoalType;

  height: number;
  weight: number;
  age: number;

  activity: ActivityLevel;

  goalWeight: number;
  waterGoalMl: number;

  createdAt: number;
  updatedAt: number;
}