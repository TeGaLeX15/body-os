// features/progress/domain/getBestTrainingDay.ts
import type { WeeklyDay } from "./buildWeeklyBreakdown";

export function getBestTrainingDay(
  data: WeeklyDay[],
) {
  return data.reduce((a, b) =>
    a.volume > b.volume ? a : b,
  );
}