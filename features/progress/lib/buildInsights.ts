// features/progress/lib/buildInsights.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";

export type Insight = {
  id: string;
  title: string;
  value: string;
  tone?: "good" | "neutral" | "warning";
};

export function buildInsights(data: WorkoutAnalytics): Insight[] {
  const insights: Insight[] = [];

  const pull = data.weekly.pullups;
  const push = data.weekly.pushups + data.weekly.dips;

  if (data.streak >= 3) {
    insights.push({
      id: "streak-good",
      title: "Consistency",
      value: `${data.streak} day streak`,
      tone: "good",
    });
  }

  if (pull < 20) {
    insights.push({
      id: "pull-low-volume",
      title: "Pull volume low",
      value: "Increase pull-ups",
      tone: "warning",
    });
  }

  if (pull < push) {
    insights.push({
      id: "balance-push",
      title: "Push dominance",
      value: "Balance push/pull",
      tone: "neutral",
    });
  }

  return insights;
}
