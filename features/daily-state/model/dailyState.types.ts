// features/daily-state/model/dailyState.types.ts
export type FatigueLevel = "low" | "medium" | "high";

export type GoalType = "cut" | "bulk" | "maintain";

export type DailyState = {
  waterGoal: number;
  waterConsumed: number;

  workoutLoad: number;
  fatigue: FatigueLevel;

  streak: number;

  weightDelta: number;
  goalType: GoalType;
};