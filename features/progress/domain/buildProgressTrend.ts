// features/progress/domain/buildProgressTrend.ts
import type { WorkoutAnalytics } from "@/features/workout/domain/workoutAnalytics";
import { buildStrengthHistory } from "@/features/workout/domain/workoutProgress";

export function buildProgressTrend(
  analytics: WorkoutAnalytics,
) {
  const data = buildStrengthHistory(analytics.workouts);

  const values = data.map((d) => d.index);

  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);

  const avg =
    values.reduce((a, b) => a + b, 0) /
    (values.length || 1);

  const last = values.at(-1) ?? 0;
  const prev = values.at(-2) ?? last;

  return {
    data,
    min,
    max,
    avg,
    delta: last - prev,
  };
}