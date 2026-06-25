// features/progress/lib/coach.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export type CoachMode = {
  title: string;
  message: string;
  actionHint: string;
};

export function getCoachMode(data: WorkoutAnalytics): CoachMode {
  if (data.streak === 0) {
    return {
      title: "Start today",
      message: "No recent activity detected.",
      actionHint: "Even 10 push-ups is enough to restart momentum.",
    };
  }

  if (data.weekly.pullups < data.weekly.pushups) {
    return {
      title: "Balance your training",
      message: "Push volume is higher than pull volume.",
      actionHint: "Add pull-ups this week.",
    };
  }

  return {
    title: "You're on track",
    message: "Training balance looks solid.",
    actionHint: "Keep current rhythm.",
  };
}
